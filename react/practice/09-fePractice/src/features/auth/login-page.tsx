import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useLogin } from "./hooks/use-auth"
import { loginSchema, LoginFormValues } from "./schemas/auth-schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function LoginPage() {
  const loginMutation = useLogin()

  const {
    register: login,
    handleSubmit: handleLogin,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@example.com",
      password: "admin123",
    },
  })

  const onLogin = (values: LoginFormValues) => {
    loginMutation.mutate(values)
  }

  return (
    <div className="flex h-screen items-center justify-center p-4 bg-muted/20">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Admin Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin(onLogin)} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="admin@example.com"
                {...login("email")}
              />
              {errors.email && (
                <span className="text-xs text-destructive mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <Input
                type="password"
                placeholder="admin123"
                {...login("password")}
              />
              {errors.password && (
                <span className="text-xs text-destructive mt-1 block">
                  {errors.password.message}
                </span>
              )}
            </div>
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
