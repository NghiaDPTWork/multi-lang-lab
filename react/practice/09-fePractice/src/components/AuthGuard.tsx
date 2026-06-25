import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "@/store/auth-store"

// Route chỉ dành cho khách chưa login (như trang /login)
export function GuestRoute() {
  const { token, user } = useAuthStore()

  if (token && user) {
    // Nếu đã đăng nhập, tự động đẩy về trang tương ứng của role đó
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} replace />
  }

  return <Outlet />
}

// Route yêu cầu đăng nhập và phân quyền role cụ thể
interface ProtectedRouteProps {
  allowedRoles: Array<"admin" | "employee">
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { token, user } = useAuthStore()

  if (!token || !user) {
    // Chưa đăng nhập -> quay về trang login
    return <Navigate to="/login" replace />
  }

  if (!allowedRoles.includes(user.role)) {
    // Đã đăng nhập nhưng không có quyền -> Đẩy về trang tương ứng của role của họ
    return <Navigate to={user.role === "admin" ? "/admin" : "/attendance"} replace />
  }

  return <Outlet />
}
