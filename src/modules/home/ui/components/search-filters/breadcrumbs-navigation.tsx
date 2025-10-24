import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {activeSubcategoryName ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                asChild
                className="text-xl font-medium underline text-primary"
              >
                <Link href={`/${activeCategory}`}>{activeCategoryName}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-xl text-primary font-medium">
              /
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-medium">
                {activeCategoryName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-medium">
              {activeCategoryName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
