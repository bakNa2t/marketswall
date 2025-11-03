"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PriceFilterProps {
  minPrice?: string | null;
  maxPrice?: string | null;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

export const formatAsCurrency = (value: string) => {
  const numericValue = value.replace(/[^0-9]/g, "");

  const parts = numericValue.split(".");
  const formatedValue =
    parts[0] + (parts.length > 1 ? "." + parts[1]?.slice(0, 2) : "");

  if (!formatedValue) return "";

  const numberValue = parseFloat(formatedValue);

  if (isNaN(numberValue)) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numberValue);
};

export const PriceFilter = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: PriceFilterProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Label className="text-base font-medium">Min price</Label>
        <Input
          type="text"
          placeholder="$0"
          value={minPrice ? formatAsCurrency(minPrice) : ""}
          onChange={() => {}}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-base font-medium">Max price</Label>
        <Input
          type="text"
          placeholder="infinity"
          value={maxPrice ? formatAsCurrency(maxPrice) : ""}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
