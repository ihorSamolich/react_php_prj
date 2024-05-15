import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "utils/classNames.ts";

type MenuLinkProps = {
  title: string | React.ReactNode;
  path: string;
  variants?: "PRIMARY" | "DARK" | "ORANGE";
  icon?: ReactNode;
};

const LinkNav = ({ title, path, icon, variants }: MenuLinkProps) => {
  return (
    <div className="w-full rounded-lg">
      <NavLink
        to={path}
        className={({ isActive }: { isActive: boolean }) =>
          classNames(
            "flex items-center gap-4 rounded-lg px-2 text-sm font-semibold text-black hover:bg-gray-200 md:px-4 py-3",
            isActive && "bg-black text-gray-50 shadow-md hover:bg-black",
            variants === "DARK" && "bg-black text-white  hover:bg-black",
            variants === "ORANGE" &&
              "text-orange-500 hover:bg-orange-100 gap-2 font-extrabold font-title p-1",
            isActive && variants === "ORANGE" && "bg-orange-500 text-white shadow-md hover:bg-orange-500",
          )
        }
      >
        {icon}
        {title}
      </NavLink>
    </div>
  );
};

export default LinkNav;
