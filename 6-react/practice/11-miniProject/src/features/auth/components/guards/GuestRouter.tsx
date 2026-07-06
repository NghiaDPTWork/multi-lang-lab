import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/shared/stores/authStore";

export default function GuestRouter() {
  const { accessToken, role } = useAuthStore();
  const isAuthenticated = accessToken && role;

  if (isAuthenticated) {
    const authPath = role === "admin" ? "/admin" : "/";
    return <Navigate to={authPath} replace />;
  }

  return <Outlet />;
}
