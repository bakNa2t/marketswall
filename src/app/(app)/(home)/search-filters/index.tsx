interface SearchFiltersProps {
  data: any;
}

export const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 w-full px-4 lg:px-12 py-8 border-b">
      {JSON.stringify(data, null, 2)}
    </div>
  );
};
