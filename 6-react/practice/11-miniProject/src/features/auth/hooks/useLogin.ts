import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store";
import { authService } from "../service";
import type {
  ApiErrorResponse,
  AuthResponse,
  JwtPayload,
  LoginRequest,
} from "../types";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";
import type { AxiosError } from "axios";

export function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuthStore((state) => state.setAuth);

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/";

  return useMutation<AuthResponse, AxiosError<ApiErrorResponse>, LoginRequest>({
    mutationFn: (loginForm) => authService.login(loginForm),

    onSuccess(response) {
      const decoded = jwtDecode<JwtPayload>(response.accessToken);
      setAuth({
        accessToken: response.accessToken,
        role: decoded.role,
      });

      toast.success("Đăng nhập thành công!");

      if (decoded.role === "admin") {
        navigate("/admin");
      } else {
        navigate(from, { replace: true });
      }
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Đăng nhập thất bại, vui lòng thử lại sau vài phút",
      );
    },

    onSettled: () => {
      console.log("Hook đăng nhập đã được chạy");
    },
  });
}
