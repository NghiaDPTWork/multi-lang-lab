import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/shared/stores/authStore";
import { useMutation } from "@tanstack/react-query";
import type {
  ApiErrorResponse,
  AuthResponse,
  JwtPayload,
  LoginRequest,
} from "../types";
import { authService } from "../service";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuthStore((state) => state.setAuth);
  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname || "/";

  return useMutation<AuthResponse, AxiosError<ApiErrorResponse>, LoginRequest>({
    mutationFn: (loginData: LoginRequest) => authService.login(loginData),

    onSuccess: (response) => {
      const decoded = jwtDecode<JwtPayload>(response.accessToken);
      setAuth({
        accessToken: response.accessToken,
        role: decoded.role,
      });

      if (decoded.role === "admin") {
        navigate("/admin");
      } else {
        navigate(from, { replace: true });
      }

      toast.success("Đăng nhập thành công!!!", {
        description: "Bây giờ bạn có thể xem thông tin cá nhân của mình",
      });
    },

    onError: (error) => {
      toast.error("Đăng nhập thất bại!!!", {
        description:
          error.response?.data?.message ||
          "Đã có lỗi xảy ra, vui lòng thử lại sau vài phút",
      });
    },

    onSettled: () => {
      console.log("Hook useLogin đang chạy");
    },
  });
};
