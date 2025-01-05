import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { SidebarType } from "~/types/componentTypes";
import SidebarMenu from "./SidebarMenu";


const Sidebar: React.FC<SidebarType> = ({ hidden, toggle }) => {
  const [isCursorWhite, setIsCursorWhite] = useState<boolean>(false);

  return (
    <div className="absolute">
      <div
        style={{ display: hidden ? "none" : "block" }}
        className="fixed right-0 top-0 h-screen w-screen bg-black opacity-50"
        onClick={() => toggle()}
      ></div>
      <div
        style={{ transform: hidden ? "translateX(100%)" : "translateX(0%)" }}
        className="fixed right-0 top-0 flex h-screen max-sm:w-full w-72 flex-col gap-4 overflow-y-auto bg-white shadow-lg duration-300"
      >
        <div
          className="flex h-[64px] w-full items-center justify-end px-4"
          onClick={() => toggle()}
        >
          <Button
            aria-label="Close"
            className="h-[40px] w-[40px] rounded-full bg-gray-100"
          >
            <X />
          </Button>
        </div>
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
