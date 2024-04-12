import Footer from "components/Footer.tsx";
import Sidebar from "components/Sidebar.tsx";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen flex-col font-body">
      <Sidebar />
      <div className="flex flex-grow flex-col justify-between px-6 md:ml-64">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
