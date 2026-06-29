import { useMutation } from "@tanstack/react-query"
import { authService } from "../services/auth-service"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth-store"
import { AuthResponse } from "../types"
import { toast } from "sonner"

export function useLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  const setAuth = useAuthStore.getState().setToken

  const from = location.state?.from?.pathname || "/"
  return useMutation({
    mutationFn: authService.login,

    onSuccess(response: AuthResponse) {
      setAuth(response.token, response.user)
      toast.success("Đăng nhập thành công!")
      navigate(from, { replace: true })
    },

    onError(error: any) {
      toast.error(error.message || "Dang xuat loi roi")
      console.log("")
    },
  })
}
