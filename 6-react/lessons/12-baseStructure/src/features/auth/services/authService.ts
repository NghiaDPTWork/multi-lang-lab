/**
 * FILE: src/features/auth/services/authService.ts
 * VAI TRÒ: Chứa các hàm JavaScript không phụ thuộc vào React, gọi trực tiếp API Xác thực qua Axios.
 */

import { api } from "@/lib/axios"
import { LoginFormFields } from "../schemas/loginSchema"
import { LoginResponse } from "../types/authTypes"

/**
 * Hàm gọi API đăng nhập tài khoản
 * @param credentials Chứa email và password người dùng nhập
 */
export async function loginApi(credentials: LoginFormFields): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>("/auth/login", credentials)
  return data
}

/**
 * Hàm gọi API đăng xuất
 */
export async function logoutApi(): Promise<void> {
  await api.post("/auth/logout")
}
