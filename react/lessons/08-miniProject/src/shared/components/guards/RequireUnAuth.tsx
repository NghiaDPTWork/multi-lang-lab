import { useAuthStore } from "@/features/auth/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireUnAuth = () => {
  const token = useAuthStore((state) => state.accessToken);
  const location = useLocation();
  if (token) {
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireUnAuth;
