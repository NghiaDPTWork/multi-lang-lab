/**
 * FILE: src/features/auth/components/LoginForm.tsx
 * VAI TRÒ: Component hiển thị form Đăng nhập (Presentation Component).
 * 
 * PHƯƠNG PHÁP THIẾT KẾ:
 * * Sử dụng `react-hook-form` kết hợp `zodResolver` để tự động validate.
 * * Nhận prop `onSubmit` và `isLoading` để truyền ngược hành động lên Page Container xử lý.
 * * Hoàn toàn không tự gọi API hay tự định hướng trang.
 */

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginFormFields } from "../schemas/loginSchema"
import { Button } from "@/shared/components/Button"
import { Input } from "@/shared/components/Input"

interface LoginFormProps {
  onSubmit: (data: LoginFormFields) => void
  isLoading: boolean
}

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Ô nhập Email dùng Shared Component */}
      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-700">Email</label>
        <Input
          type="email"
          placeholder="admin@example.com"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      {/* Ô nhập Mật khẩu dùng Shared Component */}
      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-700">Mật khẩu</label>
        <Input
          type="password"
          placeholder="••••••••"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      {/* Nút submit dùng Shared Component */}
      <Button type="submit" className="w-full" isLoading={isLoading}>
        Đăng nhập
      </Button>
    </form>
  )
}
