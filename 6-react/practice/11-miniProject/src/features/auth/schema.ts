import * as z from "zod";

export const AuthSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không đúng định dạng" }),
  password: z
    .string()
    .min(8, "Tối thiểu 8 ký tự")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Phải có ít nhất 1 chữ hoa",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Phải có ít nhất 1 số",
    })
    .refine((val) => /[!@#$%^&*]/.test(val), {
      message: "Phải có ít nhất 1 ký tự đặc biệt",
    }),
});

export const RegisterSchema = AuthSchema.extend({
  fullname: z
    .string()
    .min(1, { message: "Họ và tên không được để trống" })
    .max(50, { message: "Họ và tên không quá 50 ký tự" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Vui lòng xác nhận lại mật khẩu" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

export type LoginFormFields = z.infer<typeof AuthSchema>;
export type RegisterFormFields = z.infer<typeof RegisterSchema>;
