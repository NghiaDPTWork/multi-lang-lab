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

// Cú pháp create<AuthState>()(...)
// (có dấu ngoặc tròn trống ở giữa để TypeScript hỗ trợ infer type tốt hơn)
export const useAuthStore = create<AuthState>()(
  // devtools để hỗ trợ debug state qua extension Redux DevTools
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
        // Key trong LocalStorage
        // storage: localStorage, // Cách lưu mặc định (localStorage)
        // Hydration: Khi load trang sẽ tự động lấy data từ localStorage để gán vào state của store
        name: "shopping-card-auth",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
