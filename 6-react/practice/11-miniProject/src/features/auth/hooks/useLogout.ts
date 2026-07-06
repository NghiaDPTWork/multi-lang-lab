import { useAuthStore } from "@/shared/stores/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "../service";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { ApiErrorResponse } from "../types";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const clearAuth = useAuthStore.getState().clearAuth;

  return useMutation<void, AxiosError<ApiErrorResponse>>({
    mutationFn: authService.logout,

    onError: (error) => {
      console.log("Đã xảy ra lỗi khi đăng xuất: " + error.message);
    },

    onSettled: () => {
      clearAuth();
      queryClient.clear();
      navigate("/login");
      toast.success("Đăng xuất thành công!", {
        description: "Vui lòng đăng nhập lại để tiếp tục sử dụng.",
      });
      console.log("Đã chạy tới phần Đăng xuất");
    },
  });
}
