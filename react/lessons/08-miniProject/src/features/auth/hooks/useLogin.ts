import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../store";
import { authApi } from "../service";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: (userData: { email: string; password: string }) =>
      authApi.login(userData),

    onSuccess: (tokens) => {
      setTokens(tokens.accessToken, tokens.refreshToken);
      toast.success("Đăng nhập thành công");
      const from = location.state?.from?.pathname || "/profile";
      navigate(from, { replace: true });
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Đăng nhập thất bại, vui lòng thử lại",
      );
    },

    onSettled: () => {
      console.log("onSettled");
    },
  });
};
