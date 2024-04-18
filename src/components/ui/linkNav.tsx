import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "utils/classNames.ts";

type MenuLinkProps = {
  title: string | React.ReactNode;
  path: string;
  variants?: "PRIMARY" | "DARK";
  icon?: ReactNode;
};

const LinkNav = ({ title, path, icon, variants }: MenuLinkProps) => {
  return (
    <div className="w-full rounded-lg">
      <NavLink
        to={path}
        className={({ isActive }: { isActive: boolean }) =>
          classNames(
            "flex items-center gap-4 rounded-lg px-2 py-1 text-sm font-semibold text-black hover:bg-gray-200 md:px-4 md:py-3",
            isActive && "bg-black text-gray-50 shadow-md hover:bg-black",
            variants === "DARK" && "bg-black text-white  hover:bg-black",
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
