"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { ProductCard } from "./product-card";

import { useTRPC } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";
import { useProductFilters } from "../../hooks/use-product-filters";
import { Button } from "@/components/ui/button";

interface ProductListProps {
  category?: string;
}

export const ProductList = ({ category }: ProductListProps) => {
  const [filters] = useProductFilters();

  const trpc = useTRPC();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.products.getMany.infiniteQueryOptions(
        { category, ...filters, limit: DEFAULT_LIMIT },
        {
          getNextPageParam: (lastPage) => {
            return lastPage.docs.length > 0 ? lastPage.nextPage : undefined;
          },
        }
      )
    );

  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data?.pages
          .flatMap((page) => page.docs)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.image?.url}
              authorUsername="Maker"
              authorImageUrl={undefined}
              reviewRating={4}
              reviewCount={5}
              price={product.price}
            />
          ))}
      </div>

      <div className="flex justify-between pt-8">
        {hasNextPage && (
          <Button
            variant="elevated"
            onClick={() => fetchNextPage}
            disabled={isFetchingNextPage}
            className="text-base font-medium disabled:opacity-50 bg-white"
          >
            Load more
          </Button>
        )}
      </div>
    </>
  );
};

export const ProductListSkeleton = () => {
  return <div>Loading ...</div>;
};
