import { useAuthStore } from "@/store/auth-store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { logout } from "../services/auth-service"

export function useLogoutMutation() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const logoutStore = useAuthStore((state) => state.logout)

  return useMutation({
    mutationFn: () => logout(),

    // If success do somthing
    onSuccess: () => {
      logoutStore()
      queryClient.clear()
      navigate("/login")
      toast.success("Đăng xuất thành công")
    },

    // If error do something
    onError: (error: any) => {
      logoutStore()
      queryClient.clear()
      navigate("/login")
      toast.success("Đăng xuất thành công")
      console.log("Logout error: " + error)
    },
  })
}
