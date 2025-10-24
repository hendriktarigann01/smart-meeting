import { useState } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ProductCategory } from "@/types";

interface ProductMenuProps {
  onCategoryChange?: (category: ProductCategory) => void;
}

const categories: { label: string; value: ProductCategory }[] = [
  { label: "Interactive Whiteboard", value: "interactive-whiteboard" },
  { label: "Video Wall", value: "video-wall" },
  { label: "LED Indoor", value: "led-indoor" },
];

export function ProductMenu({ onCategoryChange }: ProductMenuProps) {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("video-wall");

  const handleCategoryClick = (category: ProductCategory) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <Menubar className="border-0 bg-gray-100 p-1 h-auto">
      {categories.map((category) => (
        <MenubarMenu key={category.value}>
          <MenubarTrigger
            onClick={() => handleCategoryClick(category.value)}
            className={`
              cursor-pointer w-48 px-4 py-2.5 justify-center rounded-md text-sm font-medium transition-all duration-200
                  ${
                    activeCategory === category.value
                      ? "bg-teal-500 text-white data-[state=open]:bg-teal-500 data-[state=open]:text-white"
                      : "text-gray-700 hover:ring-1 hover:ring-teal-500 "
                  }
            `}
          >
            {category.label}
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
