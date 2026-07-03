/**
 * FILE: src/features/auth/schemas/loginSchema.ts
 * VAI TRÒ: Định nghĩa quy tắc validate Form Đăng nhập bằng thư viện Zod.
 */

import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .email("Email không đúng định dạng"),
  password: z
    .string()
    .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự"),
})

// Trích xuất kiểu dữ liệu TS từ Zod Schema để dùng với react-hook-form
export type LoginFormFields = z.infer<typeof loginSchema>
