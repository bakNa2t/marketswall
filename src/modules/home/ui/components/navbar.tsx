"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";

import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <nav className="flex justify-between h-20 border-b font-medium bg-white">
      <Link
        href="/"
        className="flex items-center
       pl-6"
      >
        <span className={cn("text-4xl font-semibold", poppins.className)}>
          marketswall
        </span>
      </Link>

      <NavbarSidebar
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        items={navbarItems}
      />

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

      {session.data?.user ? (
        <div className="hidden lg:flex">
          <Button
            asChild
            className="h-full px-12 border-l border-t-0 border-b-0 border-r-0 rounded-none bg-black text-white hover:text-black hover:bg-pink-400 transition-colors text-lg"
          >
            <Link href="/admin">Dashboard</Link>
          </Button>
        </div>
      ) : (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="secondary"
            className="h-full px-12 border-l border-t-0 border-b-0 border-r-0 rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
          >
            <Link href="/sign-in">Log in</Link>
          </Button>
          <Button
            asChild
            className="h-full px-12 border-l border-t-0 border-b-0 border-r-0 rounded-none bg-black text-white hover:text-black hover:bg-pink-400 transition-colors text-lg"
          >
            <Link prefetch href="/sign-up">
              Start selling
            </Link>
          </Button>
        </div>
      )}

      <div className="lg:hidden flex items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
