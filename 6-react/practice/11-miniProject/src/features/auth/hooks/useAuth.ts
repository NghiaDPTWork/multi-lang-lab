import { useAuthStore } from "@/shared/stores/authStore";

export function useAuth() {
  const { accessToken, role } = useAuthStore();

  return {
    isAuthenticated: !!(accessToken && role),
    role,
    accessToken,
  };
}
