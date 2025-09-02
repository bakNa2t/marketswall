import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    </nav>
  );
};
