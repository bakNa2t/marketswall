import type { SearchParams } from "nuqs";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { ProductListView } from "@/modules/products/ui/views/product-list-view";

import { DEFAULT_LIMIT } from "@/constants";
import { getQueryClient, trpc } from "@/trpc/server";
import { loadProductFilters } from "@/modules/products/search-params";

interface SlugPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<SearchParams>;
}

const Page = async ({ params, searchParams }: SlugPageProps) => {
  const { slug } = await params;
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();

  void queryClient.prefetchInfiniteQuery(
    trpc.products.getMany.infiniteQueryOptions({
      tenantSlug: slug,
      ...filters,
      limit: DEFAULT_LIMIT,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView tenantSlug={slug} />
    </HydrationBoundary>
  );
};

export default Page;
