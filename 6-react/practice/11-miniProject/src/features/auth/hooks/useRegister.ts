import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { ApiErrorResponse, AuthResponse, RegisterRequest } from "../types";
import { authService } from "../service";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<
    // Phải truyền đúng vị trí nha
    // 1. Response trả về khi thành công
    // 2. Lỗi Axios
    // 3. Request truyền vào
    AuthResponse,
    AxiosError<ApiErrorResponse>,
    RegisterRequest
  >({
    mutationFn: (registerData: RegisterRequest) =>
      authService.register(registerData),

    onSuccess: () => {
      toast.success("Register successfully", {
        description: "Please login before continue.",
      });

      navigate("/login");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Register error, please try again in few minutes",
      );
    },

    onSettled: () => {
      console.log("Run useRegister hook now.");
    },
  });
};
