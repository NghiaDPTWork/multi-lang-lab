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
import { RegisterSchema, type RegisterFormFields } from "../schema";
import { useRegister } from "../hooks/useRegister";

export default function RegisterPage() {
  const {
    register,
    handleSubmit: handleRegister,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    mode: "onTouched",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate: registerMutate, isPending } = useRegister();

  const onSubmit = (formData: RegisterFormFields) => {
    const apiData = { ...formData } as Partial<RegisterFormFields>;
    delete apiData.confirmPassword;
    registerMutate(apiData as RegisterRequest);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Đăng ký</CardTitle>
          <CardDescription>Tạo tài khoản mới bên dưới</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="fullname"
                className={errors.fullname ? "text-red-500" : ""}
              >
                Họ và tên
              </Label>
              <Input
                id="fullname"
                placeholder="Nguyễn Văn A"
                {...register("fullname")}
                className={
                  errors.fullname
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={errors.email ? "text-red-500" : ""}
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email")}
                className={
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className={errors.password ? "text-red-500" : ""}
              >
                Mật khẩu
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className={
                  errors.password
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className={errors.confirmPassword ? "text-red-500" : ""}
              >
                Xác nhận mật khẩu
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword")}
                className={
                  errors.confirmPassword
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full mt-2 cursor-pointer"
            >
              {isPending ? "Đang đăng ký..." : "Đăng ký"}
            </Button>
          </form>

          <div className="text-center mt-4 text-xs text-muted-foreground">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="text-primary underline font-medium hover:text-primary/80"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
