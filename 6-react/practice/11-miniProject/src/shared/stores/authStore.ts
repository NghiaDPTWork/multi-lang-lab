import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { UserRole } from "../types";

export interface AuthState {
  accessToken: string | null;
  role: UserRole | null;
}

export interface AuthAction {
  setAuth: (payload: { accessToken: string; role: UserRole | null }) => void;
  clearAuth: () => void;
}

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
