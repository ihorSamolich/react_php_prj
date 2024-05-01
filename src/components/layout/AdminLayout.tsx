import Banner from "components/Banner.tsx";
import Footer from "components/Footer.tsx";
import Sidebar from "components/Sidebar.tsx";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "store/slice/authSlice.ts";
import { useAppSelector } from "store/store.ts";

const AdminLayout = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="flex min-h-screen flex-col font-body">
      {!user?.verified && user && <Banner />}
      <Sidebar />
      <div className="px-6 flex flex-col flex-grow justify-between md:ml-64">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
