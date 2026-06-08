import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import authApi from "@/lib/api/auth.api";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchemaType } from "@/utils/rules";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Lock, Mail, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const navigate = useNavigate();

  console.log("RegisterPage render");
  const {
    // Function để đăng ký input với RHF, sẽ trả về props cần thiết để kết nối input với RHF
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({
    // Sử dụng zodResolver để tích hợp zod schema với react-hook-form
    // Mode: Khi nào validate
    mode: "onTouched",
    /*
      - onChange: Validate ngay khi người dùng thay đổi input (mỗi lần gõ sẽ validate)
      - onBlur: Validate khi người dùng rời khỏi input (chỉ validate khi blur)
      - onSubmit: Validate khi submit form (mặc định)
      - onTouched: Validate khi input bị touch (blur hoặc change đều được,
       nhưng chỉ validate lần đầu tiên sau khi touch)
      - all: Validate tất cả các trường ngay khi có sự thay đổi hoặc blur

    */
    // resolver là apdapter để chuyển đổi kết quả validate từ zod
    // thành format mà react-hook-form hiểu được
    resolver: zodResolver(registerSchema),

    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = handleSubmit(async (data) => {
    try {
      await authApi.register({
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      });
      toast.success("Đăng ký thành công!", {
        description: "Bạn có thể đăng nhập ngay bây giờ.",
      });
      navigate("/login");
    } catch (error: any) {
      toast.error("Đăng ký thất bại", {
        description: error.response?.data?.message || "Có lỗi xảy ra.",
      });
    }
  });

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md shadow-md border bg-card rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground">
            Tạo tài khoản
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Đăng ký để bắt đầu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="fullname"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <User className="w-4 h-4 text-muted-foreground" />
                Full Name
              </Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Nghĩa Dương"
                {...register("fullname")}
                /*
                  ... thì cái obj đc trả về là như này 
                  {
                  onChange: () => void,
                  onBlur: () => void,
                  name: "fullname",
                  ref: () => void
                  }
                   Chúng ta sẽ gán các props này vào input để kết nối input với RHF
                   onChange: Hàm để gọi khi input thay đổi, sẽ cập nhật giá trị và validate nếu cần
                   onBlur: Hàm để gọi khi input bị blur, sẽ đánh dấu field là touched và validate nếu cần
                   name: Tên của field, dùng để RHF quản lý state
                   ref: Ref để gán cho input, giúp RHF theo dõi và quản lý input này
                */
                className={
                  errors.fullname
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.fullname && (
                <p className="text-destructive text-xs">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Mail className="w-4 h-4 text-muted-foreground" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
                className={
                  errors.email
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.email && (
                <p className="text-destructive text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Lock className="w-4 h-4 text-muted-foreground" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className={
                  errors.password
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.password && (
                <p className="text-destructive text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Lock className="w-4 h-4 text-muted-foreground" />
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword")}
                className={
                  errors.confirmPassword
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer bg-primary text-primary-foreground rounded py-2 mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isSubmitting ? "Đang tạo tài khoản..." : "Đăng ký"}
            </Button>
          </form>
          <div className="text-center mt-4">
            <span className="text-xs text-muted-foreground">
              Đã có tài khoản?{" "}
              <Link to="/login" className="text-primary underline font-medium">
                Đăng nhập
              </Link>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
