import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { AuthSchema, type LoginFormFields } from "../schema";
import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  const {
    register: login,
    handleSubmit: handleLogin,
    formState: { errors },
  } = useForm<LoginFormFields>({
    mode: "onTouched",
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "t.nghia2112278@gmail.com",
      password: "12345678",
    },
  });

  const { mutate: loginMutation, isPending } = useLogin();

  const onSubmit = (data: LoginFormFields) => {
    loginMutation(data);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Đăng nhập</CardTitle>
          <CardDescription>
            Nhập thông tin tài khoản của bạn bên dưới
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin(onSubmit)} className="space-y-4">
            {/* Trường Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...login("email")}
                className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Trường Mật khẩu */}
            <div className="space-y-2">
              <Label htmlFor="password" className={errors.password ? "text-red-500" : ""}>
                Mật khẩu
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...login("password")}
                className={errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Nút Đăng nhập */}
            <Button type="submit" disabled={isPending} className="w-full cursor-pointer">
              {isPending ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-primary underline font-medium hover:text-primary/80"
            >
              Đăng ký ngay
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
