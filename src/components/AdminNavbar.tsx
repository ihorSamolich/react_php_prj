import { IconBell, IconMenu2, IconSettings, IconSquareRoundedX, IconUser } from "@tabler/icons-react";
import Breadcrumb from "components/Breadcrumb.tsx";
import { Button } from "components/ui/Button/button.tsx";
import Drawer from "components/ui/drawer.tsx";
import MenuItem from "components/ui/linkNav.tsx";
import UserCurrent from "components/user/UserCurrent.tsx";
import React, { useState } from "react";
import { selectCurrentUser } from "store/slice/authSlice.ts";
import { useAppSelector } from "store/store.ts";
import { classNames } from "utils/classNames.ts";

type AdminNavbarProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminNavbar = ({ showSidebar, setShowSidebar }: AdminNavbarProps) => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const user = useAppSelector(selectCurrentUser);

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
            {!user ? (
              <MenuItem title="Sign In" path={"/login"} icon={<IconUser />} variants="DARK" />
            ) : (
              <UserCurrent {...user} />
            )}

            <Button size="icon" variant="icon" aria-label="notification button">
              <IconBell />
            </Button>
            <Button
              onClick={() => setOpenSettings(!openSettings)}
              aria-label="setting button"
              size="icon"
              variant="icon"
            >
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
