import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeftIcon } from "lucide-react";

import { ProductList } from "../components/product-list";
import { ProductCardSkeleton } from "../components/product-card";

export const LibraryView = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full border-b p-4 bg-[#f4f4f0]">
        <Link prefetch href="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="size-4" />
          <span className="text font-medium">Continue shopping</span>
        </Link>
      </nav>

      <header className="py-8 border-b bg-[#f4f4f0]">
        <div className="flex flex-col gap-y-4 max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12">
          <h1 className="text-[40px] font-medium">Library</h1>
          <p className="font-medium">Your purchases and reviews</p>
        </div>
      </header>

      <section className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12 py-10">
        <Suspense fallback={<ProductCardSkeleton />}>
          <ProductList />
        </Suspense>
      </section>
    </div>
  );
};
