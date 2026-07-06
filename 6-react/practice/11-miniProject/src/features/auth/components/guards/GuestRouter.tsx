import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function GuestRouter() {
  const { isAuthenticated, role } = useAuth();

  if (isAuthenticated) {
    const authPath = role === "admin" ? "/admin" : "/";
    return <Navigate to={authPath} replace />;
  }

  return <Outlet />;
}
