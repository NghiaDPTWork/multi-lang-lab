import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store";

export default function GuestRouter() {
  const { accessToken, role } = useAuthStore();
  const isAuthenticated = accessToken && role;

  if (isAuthenticated) {
    const authPath = role === "admin" ? "/admin" : "/";
    return <Navigate to={authPath} replace />;
  }

  return <Outlet />;
}
