import {
  IconDashboard,
  IconHomeStats,
  IconListCheck,
  IconTruckDelivery,
  IconUsers,
} from "@tabler/icons-react";
import AdminNavbar from "components/AdminNavbar.tsx";
import { Link } from "components/ui/link.tsx";
import MenuItem from "components/ui/linkNav.tsx";
import { ReactNode, useState } from "react";
import { classNames } from "utils/classNames.ts";

type MenuItem = {
  title: string;
  path: string;
  icon: ReactNode;
};

const menu: MenuItem[] = [
  {
    title: "Users",
    path: "/admin/users",
    icon: <IconUsers />,
  },
  {
    title: "Categories",
    path: "/admin/categories",
    icon: <IconListCheck />,
  },
  {
    title: "Stats",
    path: "/admin/stats",
    icon: <IconHomeStats />,
  },
  {
    title: "Orders",
    path: "/admin/orders",
    icon: <IconTruckDelivery />,
  },
];

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <div className="md:ml-64">
        <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      <div
        className={classNames(
          "fixed top-0 z-10 h-screen w-64 flex-row flex-nowrap overflow-hidden overflow-y-auto bg-white px-6 py-4 shadow-xl transition-all duration-1000 md:left-0",
          showSidebar ? "left-0" : "-left-64",
        )}
      >
        <div className="relative min-h-full flex-col flex-nowrap items-stretch px-0">
          <Link href="/" className="font-bold text-black">
            <IconDashboard />
            <h1 className="font-title text-xl text-gray-900">Admin Dashboard</h1>
          </Link>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <div className="flex flex-col gap-y-5">
              {menu.map((menuItem) => (
                <MenuItem
                  key={menuItem.title}
                  title={menuItem.title}
                  path={menuItem.path}
                  icon={menuItem.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
