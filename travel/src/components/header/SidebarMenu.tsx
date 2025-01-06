import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  title: string;
  children?: MenuItem[];
}

const menuData: MenuItem[] = [
  { title: "HOME" },
  {
    title: "PAGES",
    children: [
      { title: "Page 1" },
      { title: "Page 2" },
    ],
  },
  {
    title: "TRAVEL",
    children: [
      { title: "Travel 1" },
      { title: "Travel 2" },
    ],
  },
  {
    title: "BLOG",
    children: [
      { title: "Blog 1" },
      { title: "Blog 2" },
    ],
  },
  {
    title: "SHOP",
    children: [
      { title: "Shop 1" },
      { title: "Shop 2" },
    ],
  },
  {
    title: "ELEMENTS",
    children: [
      {
        title: "Featured",
        children: [
          { title: "Map With Destinations" },
          { title: "Destination List" },
          { title: "Destination Category List" },
          { title: "Destination Slider" },
          { title: "Blog List" },
          { title: "Blog Slider" },
        ],
      },
    ],
  },
];

const SidebarMenu = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderMenu = (menu: MenuItem[], parentKey = "") => {
    return menu.map((item, index) => {
      const key = `${parentKey}-${item.title}`;
      const isOpen = openMenus[key];

      return (
        <div key={key} className="mb-2">
          <button
            onClick={() => toggleMenu(key)}
            className="flex justify-between w-full text-left text-lg duration-300 overflow-auto font-medium p-2 hover:bg-gray-200"
          >
            {item.title}
            {item.children && (
              <span>{isOpen ? <ChevronDown /> : <ChevronRight />}</span>
            )}
          </button>
          {item.children && isOpen && (
            <div className="pl-4 border-l border-gray-300">
              {renderMenu(item.children, key)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="p-4">
      {renderMenu(menuData)}
    </div>
  );
};

export default SidebarMenu;
