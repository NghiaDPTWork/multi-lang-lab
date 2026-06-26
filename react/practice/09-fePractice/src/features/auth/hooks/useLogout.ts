import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth-store"
import { logout } from "../services/auth-service" // Import hàm logout riêng lẻ
import { toast } from "sonner"

export const useLogoutMutation = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const logoutStore = useAuthStore((state) => state.logout)

  return useMutation({
    mutationFn: () => logout(),

    onSuccess: () => {
      logoutStore()

      queryClient.clear()

      navigate("/login", { replace: true })
      toast.success("Đăng xuất thành công!", {
        description: "Hẹn gặp lại bạn.",
      })
    },

    onError: (error: any) => {
      logoutStore()
      queryClient.clear()
      navigate("/login", { replace: true })

      toast.success("Đăng xuất thành công!", {
        description: "Phiên làm việc đã kết thúc.",
      })
      console.log("Lỗi khi gọi API logout: " + error)
    },
  })
}
