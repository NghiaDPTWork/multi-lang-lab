import { useAuthStore } from "@/store/auth-store"

export default function useAuth() {
  const { token, user, logout } = useAuthStore()
  const isAuthenticated = !token && !user
  const role = user?.role || null

  return { user, role, isAuthenticated, logout }
}
