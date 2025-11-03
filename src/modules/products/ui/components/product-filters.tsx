"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const ProductFilter = ({ title, className, children }: ProductFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div className={cn("flex flex-col gap-2  p-4 border-b", className)}>
      <div
        onClick={() => setIsOpen((current) => !current)}
        className="flex items-center justify-between cursor-pointer"
      >
        <p className="font=medium">{title}</p>
        <Icon className="size-5" />
      </div>
      {isOpen && children}
    </div>
  );
};

export const ProductFilters = () => {
  return (
    <div className="border rounded-md bg-white">
      <div className="flex items-center justify-between p-4 border-b">
        <p className="font-medium">Filters</p>

        <button className="underline" onClick={() => {}} type="button">
          Clear
        </button>
      </div>

      <ProductFilter title="Price">
        <p>Price filter</p>
      </ProductFilter>
    </div>
  );
};
