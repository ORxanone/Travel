"use client";
import Image from "next/image";
import { navMenu } from "~/lib/navMenu";
import Link from "next/link";
import React, { useState } from "react";
import logo from "public/gaiaLogo.png";
import { Button } from "~/components/ui/button";
import SidebarIcon from "../icons/SidebarIcon";
import SidebarMenu from "./SidebarMenu";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <header className="relative">
      <div className="relative flex h-[110] w-full items-center justify-between gap-10 bg-transparent max-lg:absolute max-md:px-[10px] md:px-[70px] lg:px-[112px]">
        <Link href="/">
          <Image src={logo} width={120} alt="logo" />
        </Link>

        <nav>
          <ul className="hidden gap-6 text-base font-medium text-gray-900 lg:flex xl:text-lg">
            {navMenu.map((menu: any, index: number) => (
              <li
                key={index}
                className="group relative cursor-pointer border-b border-b-transparent pb-3 hover:border-b-gray-900"
              >
                <Link href={menu.href || "#"}>{menu.label}</Link>
                {menu.children?.length > 0 && (
                  <ul className="absolute right-1/2 top-full hidden min-w-48 translate-x-1/2 space-y-2 rounded-lg bg-white py-3 text-black group-hover:block">
                    {menu.children.map((child: any, i: number) => (
                      <li
                        key={i}
                        className="peer px-3 duration-300 hover:bg-slate-300"
                      >
                        <Link
                          className="block w-full"
                          href={
                            menu.label === "Products"
                              ? menu.href + "/" + child.href
                              : child.href || "#"
                          }
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-16 max-lg:flex">
          <Button
            aria-label="travel"
            className="hidden h-[56px] w-[56px] rounded-full max-lg:block"
            onClick={toggleSidebar}
          >
            <SidebarIcon />
          </Button>
        </div>
        <Sidebar hidden={sidebar} toggle={toggleSidebar} />
      </div>
    </header>
  );
};

export default Header;
