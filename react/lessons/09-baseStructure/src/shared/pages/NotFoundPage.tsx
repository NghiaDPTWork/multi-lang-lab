/**
 * FILE: src/shared/pages/NotFoundPage.tsx
 * VAI TRÒ: Trang báo lỗi 404 (Không tìm thấy trang) dùng chung toàn hệ thống.
 */

import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-2xl font-bold text-slate-900">Không tìm thấy trang</h2>
        <p className="text-slate-500 max-w-md">
          Đường dẫn bạn truy cập không tồn tại hoặc đã bị di chuyển sang nơi khác.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}
