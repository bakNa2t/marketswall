import { useEffect, useRef, useState } from "react";

import { CategoryDropdown } from "./category-dropdown";

import { CustomCategory } from "../types";

interface CategoriesProps {
  data: CustomCategory[];
}

export const Categories = ({ data }: CategoriesProps) => {
  const conteinerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(data.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeCategory = "all";

  const activeCategoryIndex = data.findIndex(
    (cat) => cat.slug === activeCategory
  );
  const activeCategoryHidden =
    activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;

  useEffect(() => {
    const calculateVivible = () => {
      if (!conteinerRef.current || !measureRef.current || !viewAllRef.current)
        return;

      const containerWidth = conteinerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const aviableWidth = containerWidth - viewAllWidth;

      const items = Array.from(
        conteinerRef.current.children
      ) as HTMLDivElement[];
      let totalWidth = 0;
      let visible = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;

        if (totalWidth + width > aviableWidth) break;

        totalWidth += width;
        visible++;
      }

      setVisibleCount(visible);
    };

    const resizeObserver = new ResizeObserver(calculateVivible);
    resizeObserver.observe(conteinerRef.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, [data.length]);

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap items-center">
        {data.map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
