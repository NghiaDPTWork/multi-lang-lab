import { queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../store";
import { authApi } from "../service";

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const clearTokens = useAuthStore((state) => state.clearTokens);

  return useMutation({
    mutationFn: () => authApi.logout(),

    onSuccess: () => {
      clearTokens();
      queryClient.removeQueries();
      navigate("/login");
      toast.success("Đăng xuất thành công!", {
        description: "Hẹn gặp lại bạn.",
      });
    },

    onError: (error: any) => {
      clearTokens();
      queryClient.removeQueries();
      navigate("/login");
      toast.success("Đăng xuất thành công!", {
        description: "Hẹn gặp lại bạn.",
      });
      console.log("This is some errors" + error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });
};
