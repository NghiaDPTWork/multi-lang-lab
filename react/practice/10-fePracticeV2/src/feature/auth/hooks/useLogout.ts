import { useAuthStore } from "@/store/auth-store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout } from "../services/auth-service"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const useLogoutMutation = () => {
  const navigate = useNavigate()
  const logoutStore = useAuthStore.getState().logout
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => logout(),

    // If success do something
    onSuccess: () => {
      logoutStore()
      queryClient.clear()
      navigate("/login", { replace: true })
      toast.success("Đăng xuất thành công")
    },

    // If error do something
    onError: (error: any) => {
      logoutStore()
      queryClient.clear()
      navigate("/login", { replace: true })
      toast.success("Đăng xuất thành công")
      console.log("Logout error: " + error.message)
    },

    // Final
    onSettled: () => {
      toast.dismiss()
    },
  })
}
