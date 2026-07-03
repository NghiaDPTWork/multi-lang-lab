/**
 * FILE: src/app/store.ts
 * VAI TRÒ: Quản lý trạng thái client-side toàn cục (Global Client-side State) bằng Zustand.
 * 
 * KHI NÀO DÙNG ZUSTAND?
 * * Khi trạng thái đó cần dùng chung ở nhiều feature khác xa nhau (ví dụ: thông tin user đăng nhập, theme sáng/tối, giỏ hàng...).
 * * KHÔNG DÙNG cho dữ liệu lấy từ API (Server State) - phần đó hãy để TanStack Query xử lý.
 * 
 * PHƯƠNG PHÁP THIẾT KẾ:
 * * Sử dụng middleware `persist` để tự động lưu trạng thái xuống LocalStorage/SessionStorage nếu muốn thông tin không bị mất khi F5 (như Token đăng nhập).
 */

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  token: string | null
  user: { id: string; email: string; role: "admin" | "employee" } | null
  setAuth: (token: string, user: any) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    {
      name: "auth-storage", // Tên key lưu trữ dưới localStorage
    },
  ),
)
