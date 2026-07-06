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
      toast.success("Đăng ký thành công", {
        description: "Vui lòng đăng nhập để tiếp tục.",
      });

      navigate("/login");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Đăng ký thất bại, vui lòng thử lại sau vài phút",
      );
    },

    onSettled: () => {
      console.log("Hook useRegister đang chạy.");
    },
  });
};
