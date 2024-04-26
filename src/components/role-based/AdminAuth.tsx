import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentToken } from "store/slice/authSlice.ts";
import { useAppSelector } from "store/store.ts";
import { checkToken } from "utils/checkTokenExp.ts";

const AdminAuth = () => {
  const location = useLocation();
  const token = useAppSelector(selectCurrentToken);

  return checkToken(token) ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminAuth;
