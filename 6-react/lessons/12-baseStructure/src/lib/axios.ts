/**
 * FILE: src/lib/axios.ts
 * VAI TRÒ: Cấu hình và xuất khẩu Axios Instance được cấu hình sẵn cho toàn bộ dự án.
 * 
 * PHƯƠNG PHÁP CẤU HÌNH:
 * 1. Đọc baseURL từ biến môi trường (`import.meta.env.VITE_API_BASE_URL`).
 * 2. Cài đặt Request Interceptor: Tự động đính kèm Bearer Token từ Zustand Store hoặc LocalStorage vào header `Authorization` trước khi request gửi đi.
 * 3. Cài đặt Response Interceptor: Bắt các mã lỗi chung (như 401 Unauthorized, 403 Forbidden) để tự động đăng xuất người dùng hoặc chuyển hướng.
 */

import axios from "axios"
import { useAuthStore } from "@/app/store"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request Interceptor: Tự động đính kèm Token bảo mật
api.interceptors.request.use(
  (config) => {
    // Lấy token từ Zustand Store
    const token = useAuthStore.getState().token
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor: Xử lý tập trung các mã lỗi HTTP toàn cục
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    if (status === 401) {
      // Token hết hạn hoặc không hợp lệ -> Xóa Auth Store và đẩy về Login
      useAuthStore.getState().clearAuth()
      window.location.href = "/login"
    }

    return Promise.reject(error)
  }
)
