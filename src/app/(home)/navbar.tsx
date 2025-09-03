import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Nav } from "react-day-picker";
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
  return <Button>{children}</Button>;
};

export const Navbar = () => {
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
          <NavbarItem key={item.href} href={item.href}>
            {item.children}
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};
