import React, { useEffect, useState } from "react";
import LetsTalkButton from "./LetsTalkButton";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { SidebarType } from "@/types/componentTypes";
import BlackCursor from "../customs/cursors/BlackCursor";
import SidebarMenu from "./SidebarMenu";
import SidebarInformation from "./SidebarInformation";
import axios from "axios";
import { SettingMapper } from "@/utils/mapper";

const Sidebar: React.FC<SidebarType> = ({ hidden, toggle }) => {
  const [isCursorWhite, setIsCursorWhite] = useState<boolean>(false);
  const [isCursortransparent, setIsCursortransparent] =
    useState<boolean>(false);
  const [cursorSize, setCursorSize] = useState<string>("10px");
  const [setting, setSetting] = useState<any>();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST}/api/settings`)
      .then((res) => {
        const settingData = SettingMapper.toDomain(res?.data?.data);
        setSetting(settingData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="absolute md:cursor-none">
      <div
        style={{ display: hidden ? "none" : "block" }}
        className="fixed right-0 top-0 h-screen w-screen bg-black opacity-75"
        onClick={() => toggle()}
        onMouseEnter={() => setIsCursorWhite(true)}
        onMouseLeave={() => setIsCursorWhite(false)}
      ></div>
      <div
        style={{ transform: hidden ? "translateX(100%)" : "translateX(0%)" }}
        className="fixed right-0 top-0 flex h-screen w-full flex-col gap-6 overflow-y-auto bg-white duration-300 max-md:px-[20px] max-sm:py-[25px] md:w-[840px] md:px-[70px] lg:px-[112px]"
      >
        <div
          className="flex h-[104px] w-full items-center justify-end gap-16"
          onClick={() => toggle()}
        >
          <LetsTalkButton
            onMouseEnter={() => setIsCursorWhite(true)}
            onMouseLeave={() => setIsCursorWhite(false)}
            className="!cursor-none"
          />
          <Button
            aria-label="glassgroup"
            className="bg-blue-black h-[56px] w-[56px] cursor-none rounded-full"
            onMouseEnter={() => setIsCursorWhite(true)}
            onMouseLeave={() => setIsCursorWhite(false)}
          >
            <X />
          </Button>
        </div>
        <SidebarMenu
          setting={setting}
          onMouseEnter={(
            size: React.SetStateAction<string>,
            transparent: boolean | ((prevState: boolean) => boolean),
          ) => {
            setCursorSize(size);
            setIsCursortransparent(transparent);
          }}
          onMouseLeave={(
            size: React.SetStateAction<string>,
            transparent: boolean | ((prevState: boolean) => boolean),
          ) => {
            setCursorSize(size);
            setIsCursortransparent(transparent);
          }}
          onToggle={() => toggle()}
        />
        {/* <SidebarInformation setting={setting} onToggle={() => toggle()} />
        <LetsTalkButton
          onMouseEnter={() => setIsCursorWhite(true)}
          onMouseLeave={() => setIsCursorWhite(false)}
          onClick={() => toggle()}
          className="mb-6 hidden !w-full max-sm:!flex"
        /> */}
      </div>
      
    </div>
  );
};

export default Sidebar;
