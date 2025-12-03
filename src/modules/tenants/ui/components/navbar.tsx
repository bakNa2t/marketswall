"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface NavbarProps {
  slug: string;
}

export const Navbar = ({ slug }: NavbarProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.tenants.getOne.queryOptions({ slug }));

  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="flex justify-between items-center mx-auto h-full max-w-(--breakpoint-xl) px-4 lg:px-12">
        <p className="text-xl">{data.name}</p>
      </div>
    </nav>
  );
};
