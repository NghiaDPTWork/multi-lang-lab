import { useAuthStore } from "@/store/auth-store"
import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom"
import { LoginFormFields } from "../schemas/login-schema"
import { login } from "../services/auth-service"
import { toast } from "sonner"

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const setToken = useAuthStore((state) => state.setToken)

  const from = location.state?.from?.pathname || "/"

  return useMutation({
    mutationFn: (cerdentials: LoginFormFields) => login(cerdentials),

    // If Success do sth
    onSuccess: (data) => {
      setToken(data.token, data.user)
      toast.success("Đăng nhập thành công")
      navigate(from, { replace: true })
    },

    // If Error do sth
    onError: (error: any) => {
      toast.error(error.response.data.message || "Đăng nhập thất bại")
    },
  })
}
