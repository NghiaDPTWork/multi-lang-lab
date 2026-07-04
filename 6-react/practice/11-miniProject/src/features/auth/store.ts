import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { AuthAction, AuthState } from "./types";

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
