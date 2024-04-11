import React, { useState } from "react";
import { IconBell, IconMenu2, IconSettings, IconSquareRoundedX, IconUser } from "@tabler/icons-react";
import { Input } from "./ui/input.tsx";
import { classNames } from "../utils/classNames.ts";
import MenuItem from "./ui/linkNav.tsx";
import { Button } from "./ui/button.tsx";
import Breadcrumb from "./Breadcrumb.tsx";
import Drawer from "./ui/drawer.tsx";

type AdminNavbarProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminNavbar = ({ showSidebar, setShowSidebar }: AdminNavbarProps) => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  return (
    <nav className="px-3 py-3 md:px-6">
      <div className="container flex max-w-full items-center">
        <div className="flex items-center md:hidden">
          <button onClick={() => setShowSidebar(true)}>
            <IconMenu2 />
          </button>
          <div
            className={classNames(
              "absolute top-2 z-50 transition-all duration-1000 md:hidden",
              showSidebar ? "left-56 opacity-100" : "-left-10 opacity-0",
            )}
          >
            <button onClick={() => setShowSidebar(false)}>
              <IconSquareRoundedX />
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-end lg:justify-between">
          <Breadcrumb />

          <div className="flex gap-2 md:gap-5">
            <Input className="hidden md:flex" variant="search" placeholder="Search..." />

            <MenuItem title="Sign In" path={"/sign-in"} icon={<IconUser />} variants="DARK" />

            <Button size="icon" variant="icon">
              <IconBell />
            </Button>
            <Button onClick={() => setOpenSettings(!openSettings)} size="icon" variant="icon">
              <IconSettings />
            </Button>
          </div>
        </div>
      </div>
      <hr className="mt-4 min-w-full" />

      <Drawer open={openSettings} close={() => setOpenSettings(false)} />
    </nav>
  );
};

export default AdminNavbar;
