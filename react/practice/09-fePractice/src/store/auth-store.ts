import { AuthState } from "@/features/auth/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

/**
 * Example Zustand store (skeleton).
 *
 * Demonstrates the pattern: state + actions in one slice, persisted to
 * localStorage. Replace with whatever global state your feature needs.
 */
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
