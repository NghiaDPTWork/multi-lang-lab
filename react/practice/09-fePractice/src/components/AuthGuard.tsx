import { useAuthStore } from "@/store/auth-store"
import { Navigate, Outlet } from "react-router-dom"

export function GuestRoute() {
  const { user, token } = useAuthStore()

  if (user && token) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} />
  }

  return <Outlet />
}

export interface ProtectedRouteProps {
  allowedRoles: Array<"admin" | "employee">
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user, token } = useAuthStore()

  if (!user || !token) {
    return <Navigate to="/login" />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} />
  }

  return <Outlet />
}

