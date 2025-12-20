import Link from "next/link";

import { Button } from "@/components/ui/button";

import { generateTenantURL } from "@/lib/utils";

interface NavbarProps {
  slug: string;
}

export const Navbar = ({ slug }: NavbarProps) => {
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="flex justify-between items-center mx-auto h-full max-w-(--breakpoint-xl) px-4 lg:px-12">
        <p className="text-xl">Checkout</p>

        <Button asChild variant="elevated">
          <Link href={generateTenantURL(slug)}>Continue Shopping</Link>
        </Button>
      </div>
    </nav>
  );
};
