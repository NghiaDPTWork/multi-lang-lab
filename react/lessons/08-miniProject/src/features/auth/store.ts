// src/stores/auth.store.ts
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;

  // Actions
  setTokens: (access: string, refresh: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        refreshToken: null,
        setTokens: (access, refresh) =>
          set({ accessToken: access, refreshToken: refresh }),
        clearTokens: () => set({ accessToken: null, refreshToken: null }),
      }),
      {
        name: "shopping-ritual",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
