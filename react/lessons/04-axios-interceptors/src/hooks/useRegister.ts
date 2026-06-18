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
      // Truyền dư Props ko gây lỗi đâu
    }) => authApi.register(userData),

    // Thành công thì làm gì
    onSuccess: () => {
      toast.success("Đăng ký thành công", {
        description: "Vui lòng đăng nhập để tiếp tục",
      });
      navigate("/login");
    },

    // Thất bại thì làm gì
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Đăng ký thất bại, vui lòng thử lại",
      );
    },

    // Luôn luôn chạy như Final
    onSettled: () => {
      console.log("onSettled");
    },
  });
};
