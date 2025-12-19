"use client";

import Link from "next/link";
import Image from "next/image";
import { useSuspenseQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

import { useTRPC } from "@/trpc/client";
import { generateTenantURL } from "@/lib/utils";

const CheckoutButton = dynamic(
  () =>
    import("@/modules/checkout/ui/components/checkout-button").then(
      (mod) => mod.CheckoutButton
    ),
  {
    ssr: false,
    loading: () => (
      <Button className="bg-white" disabled>
        <ShoppingCartIcon className="text-black" />
      </Button>
    ),
  }
);

interface NavbarProps {
  slug: string;
}

export const Navbar = ({ slug }: NavbarProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.tenants.getOne.queryOptions({ slug }));

  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="flex justify-between items-center mx-auto h-full max-w-(--breakpoint-xl) px-4 lg:px-12">
        <Link
          href={generateTenantURL(slug)}
          className="flex items-center gap-2"
        >
          {data.image?.url && (
            <Image
              alt={slug}
              src={data.image.url}
              width={32}
              height={32}
              className="rounded-full border shrink-0 size-[32px]"
            />
          )}
          <p className="text-xl">{data.name}</p>
        </Link>

        <CheckoutButton tenantSlug={slug} hideIfEmpty />
      </div>
    </nav>
  );
};

export const NavbarSkeleton = () => {
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="flex justify-between items-center mx-auto h-full max-w-(--breakpoint-xl) px-4 lg:px-12">
        <div />
      </div>
    </nav>
  );
};
