import { useLogoutMutation } from "@/features/auth/hooks/useLogout"
import { useAuthStore } from "@/store/auth-store"
import { Link, Outlet } from "react-router-dom"

export default function MainLayout() {
  const { user, token } = useAuthStore()
  const isAuthenticated = !!token && !!user
  const logoutMutation = useLogoutMutation()

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <div>
      <header className="flex justify-between p-4 border-b">
        <h3 className="font-bold">Hệ Thống Quản Lý</h3>

        <div>
          {isAuthenticated && user ? (
            <>
              <span>
                Xin chào, {user.name} ({user.role})
              </span>
              {/* Nút màu đỏ đơn giản */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            // Nút màu xanh dương đơn giản
            <Link
              to="/login"
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
