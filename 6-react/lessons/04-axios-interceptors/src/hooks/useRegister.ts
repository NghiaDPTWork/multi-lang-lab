import authApi from "@/lib/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (userData: {
      fullname: string;
      email: string;
      password: string;
      confirmPassword: string;
    }) => authApi.register(userData),

    onSuccess: () => {
      toast.success("Đăng ký thành công", {
        description: "Vui lòng đăng nhập để tiếp tục",
      });
      navigate("/login");
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Đăng ký thất bại, vui lòng thử lại",
      );
    },

    onSettled: () => {
      console.log("onSettled");
    },
  });
};
