// src/stores/auth.store.ts
import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;

  // Actions
  setTokens: (access: string, refresh: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // Initial state
  accessToken: null,
  refreshToken: null,

  // Actions
  setTokens: (access, refresh) =>
    set({ accessToken: access, refreshToken: refresh }),

  clearTokens: () => set({ accessToken: null, refreshToken: null }),
}));
