"use client";

import { useState } from "react";
import { ListFilterIcon, SearchIcon } from "lucide-react";

import { CategoriesSidebar } from "./categories-sidebar";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

interface SearchInputProps {
  disabled?: boolean;
}

export const SearchInput = ({ disabled }: SearchInputProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <CategoriesSidebar
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>

      <Button
        variant="elevated"
        className="flex  lg:hidden shrink-0 size-12"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon className="size-4" />
      </Button>
    </div>
  );
};
