import { useAuthStore } from "@/store/auth-store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { authService } from "../services/auth-service"

export const useLogin = () => {
  const navigate = useNavigate()
  const setToken = useAuthStore.getState().setToken

  return useMutation({
    mutationFn: authService.login,

    onSuccess(payload) {
      setToken(payload.accessToken, payload.user)

      if (payload.user.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/attendance")
      }

      console.log("Login successfull !!!")
    },

    onError(error: any) {
      console.log("Osp!!! Something go wrong for Login " + error.message)
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const logoutStore = useAuthStore.getState().logout
  const navigate = useNavigate()

  return useMutation({
    mutationFn: authService.logout,

    onSuccess() {
      logoutStore()
      queryClient.clear()
      navigate("/login")
      console.log("Logout successfull")
    },

    onError(error: any) {
      logoutStore()
      queryClient.clear()
      navigate("/")
      console.log("Something go wrong for Logout " + error.message)
    },
  })
}
