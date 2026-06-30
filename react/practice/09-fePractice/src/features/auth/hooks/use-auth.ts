import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../services/auth-service"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth-store"

export function useLogin() {
  const navigate = useNavigate()
  const setToken = useAuthStore((state) => state.setToken)
  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setToken(data.token, data.user)
      if (data.user.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/attendance")
      }
    },
  })
}

export function useLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const logout = useAuthStore.getState().logout

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      logout()
      queryClient.clear()
      navigate("/login")
    },
    onError: () => {
      logout()
      queryClient.clear()
      navigate("/login")
    },
  })
}
