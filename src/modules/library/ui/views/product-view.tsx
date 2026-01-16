"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";

import { ReviewSidebar } from "../components/review-sidebar";

import { useTRPC } from "@/trpc/client";

interface ProductViewProps {
  productId: string;
}

export const ProductView = ({ productId }: ProductViewProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.library.getOne.queryOptions({ productId })
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full border-b p-4 bg-[#f4f4f0]">
        <Link prefetch href="/library" className="flex items-center gap-2">
          <ArrowLeftIcon className="size-4" />
          <span className="text font-medium">Back to library</span>
        </Link>
      </nav>

      <header className="py-8 border-b bg-[#f4f4f0]">
        <div className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12">
          <h1 className="text-[40px] font-medium">{data.name}</h1>
        </div>
      </header>

      <section className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-1 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="gap-4 p-4 bg-white rounded-md border">
              <ReviewSidebar productId={productId} />
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-medium text-muted-foreground italic">
              No special content
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
