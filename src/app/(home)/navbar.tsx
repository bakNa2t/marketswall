"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg",
        isActive && "bg-black hover:bg-black text-white hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between h-20 border-b font-medium bg-white">
      <Link
        href="/"
        className="flex items-center
       pl-6"
      >
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Marketswall
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-4">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={item.href === pathname}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};
