import { useQuery } from "@tanstack/react-query";
import { authService } from "../service";
import type { ApiErrorResponse, User } from "../types";
import type { AxiosError } from "axios";
import { useAuthStore } from "@/shared/stores/authStore";

export const useUser = () => {
  const accessToken = useAuthStore.getState().accessToken;
  return useQuery<User, AxiosError<ApiErrorResponse>>({
    queryKey: ["me"],
    queryFn: authService.getMe,
    // Sẽ tiến hành gọi api khi có accesstoken rồi
    enabled: !!accessToken,
    // !! phép chuyển đổi bất kỳ KDL nào về Boolean
  });
};
