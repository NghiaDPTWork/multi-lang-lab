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

      toast.success("Login successfully!!!", {
        description: "Now you can view your persional information",
      });
    },

    onError: (error) => {
      toast.error("Login error!!!", {
        description:
          error.response?.data?.message ||
          "Somthing go wrong please wait in few minutes to try again",
      });
    },

    onSettled: () => {
      console.log("Hook useLogin run now");
    },
  });
};
