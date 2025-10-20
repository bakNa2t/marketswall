import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebarProps {
  items: NavbarItemProps[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex flex-col h-full overflow-y-auto pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center w-full p-4 text-left text-base font-medium hover:bg-black hover:text-white hover:cursor-pointer"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            <Link
              href="/sign-in"
              className="flex items-center w-full p-4 text-left text-base font-medium hover:bg-black hover:text-white hover:cursor-pointer"
              onClick={() => onOpenChange(false)}
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="flex items-center w-full p-4 text-left text-base font-medium hover:bg-black hover:text-white hover:cursor-pointer"
              onClick={() => onOpenChange(false)}
            >
              Start selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
