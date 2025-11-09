import { useInfiniteQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";

interface TagsFilterProps {
  value?: string[] | null;
  onChange?: (value: string[]) => void;
}

export const TagsFilter = ({ value, onChange }: TagsFilterProps) => {
  const trpc = useTRPC();
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      trpc.tags.getMany.infiniteQueryOptions(
        {
          limit: DEFAULT_LIMIT,
        },
        {
          getNextPageParam: (lastPage) => {
            return lastPage.docs.length > 0 ? lastPage.nextPage : undefined;
          },
        }
      )
    );

  return <div>Tags filter</div>;
};
