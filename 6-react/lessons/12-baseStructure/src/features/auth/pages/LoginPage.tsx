/**
 * FILE: src/features/auth/pages/LoginPage.tsx
 * VAI TRÒ: Trang Đăng nhập (Page/Container Component).
 * 
 * PHƯƠNG PHÁP THIẾT KẾ:
 * * Đóng vai trò điều phối chính cho trang.
 * * Import và kết hợp các custom hook (`useLoginMutation`) và view component (`LoginForm`).
 * * Chứa cấu trúc HTML khung của trang (như căn giữa màn hình, hình nền...).
 */

import { useLoginMutation } from "../hooks/useLogin"
import { LoginForm } from "../components/LoginForm"
import { LoginFormFields } from "../schemas/loginSchema"

export default function LoginPage() {
  // Lấy hook xử lý Đăng nhập mạng
  const loginMutation = useLoginMutation()

  const handleLoginSubmit = (data: LoginFormFields) => {
    // Kích hoạt gọi API
    loginMutation.mutate(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-200 shadow-lg space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Chào mừng trở lại</h2>
          <p className="text-slate-500 text-sm">Vui lòng đăng nhập để tiếp tục quản lý hệ thống</p>
        </div>

        {/* Truyền callback handleSubmit và trạng thái loading xuống form */}
        <LoginForm 
          onSubmit={handleLoginSubmit} 
          isLoading={loginMutation.isPending} 
        />
      </div>
    </div>
  )
}
