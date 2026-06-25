import { useAuthStore } from "@/features/auth/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function GuestRouter() {
  const token = useAuthStore((state) => state.accessToken);
  const location = useLocation();

  if (token) {
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/profile";
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
}
