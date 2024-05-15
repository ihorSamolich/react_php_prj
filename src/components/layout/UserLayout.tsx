import Banner from "components/Banner.tsx";
import Footer from "components/Footer.tsx";
import Navbar from "components/Navbar.tsx";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "store/slice/authSlice.ts";
import { useAppSelector } from "store/store.ts";

const UserLayout = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="  min-h-screen  font-body">
      {!user?.verified && user && <Banner />}

      <div className=" flex flex-col flex-grow justify-between">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
