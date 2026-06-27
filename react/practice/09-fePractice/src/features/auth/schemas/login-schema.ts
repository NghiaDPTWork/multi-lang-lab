import { z } from "zod"

export const loginSchema = z.object({
  // Định nghĩa luật validate cho email và password tại đây
  email: z
    .string()
    .min(1, "Email không được để trống")
    .email("Email không hợp lệ"),
  password: z
    .string()
    .min(1, "Mật khẩu không được để trống")
    .max(10, "Mật khẩu quá dài"),
})

export type LoginFormFields = z.infer<typeof loginSchema>
