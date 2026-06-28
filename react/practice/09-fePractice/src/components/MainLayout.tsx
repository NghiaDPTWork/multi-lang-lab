import { useLogoutMutation } from "@/feature/auth/hooks/useLogout"
import { useAuthStore } from "@/store/auth-store"
import { Link, Outlet } from "react-router-dom"

export default function MainLayout() {
  const { token, user } = useAuthStore()
  const isAuthenticated = !!token && !!user
  const logoutMutation = useLogoutMutation()
  const onLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b bg-white shadow-xs">
        <h3 className="font-bold text-slate-800">Hệ Thống Quản Lý</h3>
        <div className="flex gap-4 items-center">
          {isAuthenticated === true ? (
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded cursor-pointer"
            >
              Đăng xuất
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1.5 rounded cursor-pointer"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
