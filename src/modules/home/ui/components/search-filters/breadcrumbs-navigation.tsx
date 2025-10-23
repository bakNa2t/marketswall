interface BreadcrumbsNavigationProps {
  activeCategoryName: string | null;
  activeSubcategoryName: string | null;
  activeCategory: string | null;
}

export const BreadcrumbsNavigation = ({
  activeCategoryName,
  activeSubcategoryName,
  activeCategory,
}: BreadcrumbsNavigationProps) => {
  return <div>BreadcrumbsNavigation</div>;
};
