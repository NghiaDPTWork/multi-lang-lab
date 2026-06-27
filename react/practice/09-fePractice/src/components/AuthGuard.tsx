import { useAuthStore } from "@/store/auth-store"
import { Navigate, Outlet } from "react-router-dom"

// 1. Just for User doesn`t Login
export function GuestRoute() {
  const { token, user } = useAuthStore()

  if (token && user) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} />
  }

  return <Outlet />
}

// 2. Just for User Login
interface ProtctedRouteProps {
  allowedRoles: Array<"admin" | "employee">
}

export function ProtectedRoute({ allowedRoles }: ProtctedRouteProps) {
  const { token, user } = useAuthStore()

  if (!token || !user) {
    return <Navigate to="/login" />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} />
  }

  return <Outlet />
}
