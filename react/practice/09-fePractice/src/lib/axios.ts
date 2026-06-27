import { useAuthStore } from "@/store/auth-store"
import axios from "axios"

/**
 * Shared axios instance.
 *
 * `baseURL` comes from VITE_API_BASE_URL (see .env.example). It falls back to the
 * bundled reference backend on http://localhost:4000 so a fresh clone just works.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Tự động đính kèm Token từ Zustand Store
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Lắng nghe phản hồi và xử lý lỗi Token hết hạn (401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      useAuthStore.getState().logout()
    }
    return Promise.reject(error)
  },
)
