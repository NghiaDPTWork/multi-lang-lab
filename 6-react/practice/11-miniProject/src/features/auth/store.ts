import { create } from "zustand";
import type { AuthAction, AuthState } from "./types";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export const useAuthStore = create<AuthState & AuthAction>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        role: null,
        setAuth: ({ accessToken, role }) => set({ accessToken, role }),
        clearAuth: () => set({ accessToken: null, role: null }),
      }),
      {
        name: "auth-storage-practice",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
