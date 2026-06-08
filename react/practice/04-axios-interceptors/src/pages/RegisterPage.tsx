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
import { toast } from "sonner";
import authApi from "@/lib/api/auth.api";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const getPasswordStrength = (pass: string) => {
    if (!pass) return "";
    if (pass.length < 6) return "Yếu";
    const hasLetters = /[a-zA-Z]/.test(pass);
    const hasNumbers = /[0-9]/.test(pass);
    const hasSpecial = /[^a-zA-Z0-9]/.test(pass);
    if (hasLetters && hasNumbers && hasSpecial && pass.length >= 8) {
      return "Mạnh";
    }
    if (hasLetters && hasNumbers) {
      return "Trung bình";
    }
    return "Yếu";
  };

  const getStrengthColor = (strength: string) => {
    if (strength === "Mạnh") return "text-green-500";
    if (strength === "Trung bình") return "text-yellow-500";
    return "text-destructive";
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!username.trim()) {
      newErrors.username = "Tên đăng nhập không được để trống";
    }
    if (!email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải từ 6 ký tự";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await authApi.register({ username, email, password });
      toast.success("Đăng ký thành công!", {
        description: "Bạn có thể đăng nhập ngay bây giờ.",
      });
      navigate("/login");
    } catch (error: any) {
      toast.error("Đăng ký thất bại, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  const strength = getPasswordStrength(password);

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
                htmlFor="username"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <User className="w-4 h-4 text-muted-foreground" />
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={
                  errors.username
                    ? "border-destructive focus-visible:ring-destructive rounded"
                    : "bg-transparent border-input rounded"
                }
              />
              {errors.username && (
                <p className="text-destructive text-xs">{errors.username}</p>
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
              {password && (
                <div className="text-xs">
                  Mức độ bảo mật:{" "}
                  <span className={`font-semibold ${getStrengthColor(strength)}`}>
                    {strength}
                  </span>
                </div>
              )}
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
              {loading ? "Đang xử lý" : "Đăng ký"}
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
