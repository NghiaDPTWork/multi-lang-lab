import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { Loader2, User, Mail, Lock } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import authApi from "@/lib/api/auth.api";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchemaType } from "@/utils/rules";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const {
    // Function để đăng ký input với RHF, sẽ trả về props cần thiết để kết nối input với RHF
    register,
    handleSubmit, 
    formState: {
      // Object chứa validation errors
      errors, 
      isSubmitting, // Boolean - đang submit hay không
    },
  } = useForm<RegisterSchemaType>({
    // Sử dụng zodResolver để tích hợp zod schema với react-hook-form
    // Mode: Khi nào validate
    mode: "onTouched",
    /*
      - onChange: Validate ngay khi người dùng thay đổi input (mỗi lần gõ sẽ validate)
      - onBlur: Validate khi người dùng rời khỏi input (chỉ validate khi blur)
      - onSubmit: Validate khi submit form (mặc định)
      - onTouched: Validate khi input bị touch (blur hoặc change đều được, nhưng chỉ validate lần đầu tiên sau khi touch)
    */
    resolver: zodResolver(registerSchema),
    
    },
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await authApi.register({ fullname, email, password });
      toast.success("Đăng ký thành công!", {
        description: "Bạn có thể đăng nhập ngay bây giờ.",
      });
      navigate("/login");
    } catch (error: any) {
      toast.error("Đăng ký thất bại", {
        description:
          error.response?.data?.message || "Có lỗi xảy ra. Vui lòng thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };

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
                placeholder="John Doe"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className={
                  errors.fullname
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.fullname && (
                <p className="text-destructive text-xs">{errors.fullname}</p>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  errors.email
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.email && (
                <p className="text-destructive text-xs">{errors.email}</p>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  errors.password
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.password && (
                <p className="text-destructive text-xs">{errors.password}</p>
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={
                  errors.confirmPassword
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-xs">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer bg-primary text-primary-foreground rounded py-2 mt-2"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? "Đang tạo tài khoản..." : "Đăng ký"}
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
