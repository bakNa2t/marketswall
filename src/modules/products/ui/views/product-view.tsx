"use client";

import Image from "next/image";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { formatCurrency, generateTenantURL } from "@/lib/utils";

interface ProductViewProps {
  productId: string;
  tenantSlug: string;
}

export const ProductView = ({ productId, tenantSlug }: ProductViewProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getOne.queryOptions({ id: productId })
  );

  return (
    <div className="pxx-4 lg:px-12 py-10">
      <div className="border rounded-sm bg-white overflow-hidden">
        <div className="relative aspect-[3.9] border-b">
          <Image
            fill
            alt={data.name}
            src={data.image?.url || "/placeholder.png"}
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-4">
            <div className="p-6">
              <h1 className="text-4xl font-medium">{data.name}</h1>
            </div>

            <div className="flex border-y">
              <div className="flex items-center justify-center px-6 py-4 border-r">
                <div className="w-fit px-2 py-1 border bg-pink-400">
                  <p className="text-base font-medium">
                    {formatCurrency(data.price)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:border-r">
                <Link
                  href={generateTenantURL(tenantSlug)}
                  className="flex items-center gap-2"
                >
                  {data.tenant.image?.url && (
                    <Image
                      src={data.tenant.image.url}
                      alt={data.tenant.name}
                      width={20}
                      height={20}
                      className="rounded-full border shrink-0 size-[20px]"
                    />
                  )}
                  <p className="text-base font-medium underline">
                    {data.tenant.name}
                  </p>
                </Link>
              </div>

              <div className="hidden lg:flex items-center justify-center px-6 py-4">
                <StarRaiting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
