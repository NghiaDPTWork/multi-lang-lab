import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLoginMutation } from "../hooks/useLogin"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormFields, loginSchema } from "../schema/login-schema"

export default function LoginPage() {
  const loginMutation = useLoginMutation()
  const {
    register: login,
    handleSubmit: handleLogin,
    formState: { errors },
  } = useForm<LoginFormFields>({
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onLogin = async (data: LoginFormFields) => {
    loginMutation.mutate(data)
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-center">Đăng nhập</h2>
        <form className="space-y-3" onSubmit={handleLogin(onLogin)}>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...login("email")}
              className={
                errors.email
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
            />
          </div>
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
          <div className="space-y-1">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...login("password")}
              className={
                errors.password
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
            />
          </div>
          {errors.password && (
            <p className="text-destructive text-xs">
              {errors.password.message}
            </p>
          )}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer mt-2"
          >
            Đăng nhập
          </Button>
        </form>
      </div>
    </div>
  )
}
