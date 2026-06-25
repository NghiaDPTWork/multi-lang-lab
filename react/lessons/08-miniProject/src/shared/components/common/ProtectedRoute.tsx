import { useAuthStore } from "@/features/auth/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { UserRole } from "@/shared/types";

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const token = useAuthStore((state) => state.accessToken);
  const role = useAuthStore((state) => state.role);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && (!role || !allowedRoles.includes(role))) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
