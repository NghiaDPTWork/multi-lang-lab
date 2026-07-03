/**
 * FILE: src/features/auth/hooks/useLogin.ts
 * VAI TRÒ: Hook đóng gói logic gọi API và xử lý trạng thái Đăng nhập sử dụng TanStack Query (React Query).
 */

import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { loginApi } from "../services/authService"
import { useAuthStore } from "@/app/store"

export function useLoginMutation() {
  const navigate = useNavigate()
  const setAuth = useAuthStore((s) => s.setAuth)

  return useMutation({
    // 1. Chỉ định API function thực hiện gọi mạng
    mutationFn: loginApi,

    // 2. Xử lý sau khi API trả về thành công
    onSuccess: (response) => {
      // Lưu token & user vào Zustand Store toàn cục
      setAuth(response.token, response.user)
      
      toast.success("Đăng nhập thành công!")
      
      // Chuyển hướng người dùng dựa vào Role
      if (response.user.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/attendance")
      }
    },

    // 3. Xử lý khi API bị lỗi (Mạng lỗi, thông tin sai...)
    onError: (error: any) => {
      const errorMsg = error.response?.data?.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin."
      toast.error(errorMsg)
    },
  })
}
