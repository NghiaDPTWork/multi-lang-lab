import authApi from "@/lib/api/auth.api";
import { useAuthStore } from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLoginMutation = () => {
  // Cần navigate về trang trước đó user từng đô tracking location đi
  const navigate = useNavigate();
  const location = useLocation();
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: (userData: {
      email: string;
      password: string;
      // Truyền dư Props ko gây lỗi đâu
    }) => authApi.login(userData),

    // Thành công thì làm gì
    onSuccess: (tokens) => {
      setTokens(tokens.accessToken, tokens.refreshToken);
      toast.success("Đăng nhập thành công");
      const from = location.state?.from?.pathname || "/profile";
      navigate(from, { replace: true });
    },

    // Thất bại thì làm gì
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Đăng nhập thất bại, vui lòng thử lại",
      );
    },

    // Luôn luôn chạy như final
    onSettled: () => {
      console.log("onSettled");
    },
  });
};
