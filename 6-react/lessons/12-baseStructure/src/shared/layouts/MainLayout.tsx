/**
 * FILE: src/shared/layouts/MainLayout.tsx
 * VAI TRÒ: Khung Layout chính của hệ thống sau khi đã đăng nhập (Sidebar, Header, Main content area).
 * 
 * PHƯƠNG PHÁP CẤU HÌNH:
 * * Sử dụng `<Outlet />` từ `react-router-dom` để render các component/trang con tùy ứng với Router URL.
 */

import { Outlet, Link } from "react-router-dom"
import { useAuthStore } from "@/app/store"

export default function MainLayout() {
  const { user, clearAuth } = useAuthStore()

  const handleLogout = () => {
    clearAuth()
    // Chuyển hướng hoặc xử lý API logout tại đây
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. Header dùng chung */}
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200">
        <h3 className="font-bold text-lg text-slate-900">
          <Link to="/">Hệ Thống Admin</Link>
        </h3>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-slate-600">
                Xin chào, <strong className="text-slate-900">{user.email}</strong> ({user.role})
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg cursor-pointer transition"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-lg transition"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </header>

      {/* 2. Phần nội dung chính thay đổi linh hoạt */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6">
        {/* Outlet đại diện cho vị trí render các Route con */}
        <Outlet />
      </main>
    </div>
  )
}
