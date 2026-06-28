import { useAuthStore } from "@/store/auth-store"
import { Navigate, Outlet } from "react-router-dom"

// Don`t need Login
export function GuestRoute() {
  const { user, token } = useAuthStore()
  const isAuthenticated = token && user

  if (isAuthenticated) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} />
  }

  return <Outlet />
}

export interface ProtectedRoute {
  allowedRoles: Array<"admin" | "employee">
}

// Require login for this Page to hand-on
export function ProtectedRoute({ allowedRoles }: ProtectedRoute) {
  const { user, token } = useAuthStore()
  const isAuthenticated = token && user

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} />
  }

  return <Outlet />
}
