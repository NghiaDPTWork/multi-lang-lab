import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth-store"
import { login } from "../services/auth-service"
import { toast } from "sonner"
import type { LoginFormFields } from "../schemas/login-schema"

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const setToken = useAuthStore((state) => state.setToken)

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/attendance"

  return useMutation({
    mutationFn: (credentials: LoginFormFields) => login(credentials),

    onSuccess: (response) => {
      setToken(response.token, response.user)
      toast.success("Đăng nhập thành công!")

      if (response.user.role === "admin") {
        navigate("/admin", { replace: true })
      } else {
        navigate(from, { replace: true })
      }
    },

    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Đăng nhập thất bại, vui lòng thử lại")
    },
  })
}
