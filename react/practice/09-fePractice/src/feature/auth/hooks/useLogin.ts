import { useAuthStore } from "@/store/auth-store"
import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom"
import { LoginFormFields } from "../schema/login-schema"
import { login } from "../services/auth-service"
import { toast } from "sonner"

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const setAuth = useAuthStore.getState().setToken

  const from = location.state?.from?.pathname || "/"

  return useMutation({
    mutationFn: (cerdentials: LoginFormFields) => login(cerdentials),

    // If Success do sth
    onSuccess: (data) => {
      setAuth(data.token, data.user)
      ;(navigate(from, { replace: true }),
        toast.success("Đăng nhập thành công"))
    },

    // If error do sth
    onError: (error: any) => {
      toast.error(error.response.data.message || "Đăng nhập thất bại")
    },

    // Final
    onSettled: () => {
      // toast.dismiss()
    },
  })
}
