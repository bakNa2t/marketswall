import { CustomCategory } from "../types";

interface CategoriesSidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: CustomCategory[];
}

export const CategoriesSidebar = ({
  isOpen,
  onOpenChange,
  data,
}: CategoriesSidebarProps) => {
  console.log(data, isOpen, onOpenChange);
  return <div>Categories Sidebar</div>;
};
