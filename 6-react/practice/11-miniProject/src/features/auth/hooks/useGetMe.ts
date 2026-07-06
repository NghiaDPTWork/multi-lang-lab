import { useQuery } from "@tanstack/react-query";
import { authService } from "../service";
import { useAuthStore } from "@/shared/stores/authStore";
import type { User, ApiErrorResponse } from "../types";
import type { AxiosError } from "axios";

export const useGetMe = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery<User, AxiosError<ApiErrorResponse>>({
    queryKey: ["getMe"],
    queryFn: authService.getMe,
    enabled: !!accessToken,
  });
};
