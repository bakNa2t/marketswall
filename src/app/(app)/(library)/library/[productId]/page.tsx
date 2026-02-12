import { Suspense } from "react";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { ProductView } from "@/modules/library/ui/views/product-view";
import { ProductCardSkeleton } from "@/modules/library/ui/components/product-card";

interface PageProps {
  params: Promise<{
    productId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { productId } = await params;

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(
    trpc.library.getOne.queryOptions({
      productId,
    }),
  );

  void queryClient.prefetchQuery(
    trpc.reviews.getOne.queryOptions({
      productId,
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductView productId={productId} />;
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
