import { create } from "zustand"
import { persist } from "zustand/middleware"

/**
 * Example Zustand store (skeleton).
 *
 * Demonstrates the pattern: state + actions in one slice, persisted to
 * localStorage. Replace with whatever global state your feature needs.
 */

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "employee"
}
interface AuthState {
  token: string | null
  user: User | null
  setToken: (token: string | null, user: User | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token, user) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
    }),
    { name: "auth-storage" },
  ),
)
