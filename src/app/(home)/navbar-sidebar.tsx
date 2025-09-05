import { Sheet, SheetContent } from "@/components/ui/sheet";

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
      <SheetContent>{items}</SheetContent>
    </Sheet>
  );
};
