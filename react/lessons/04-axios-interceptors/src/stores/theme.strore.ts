import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const applyTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      },
    }),
    {
      name: "theme-store",
    },
  ),
);

// Listen to system theme changes
if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const state = useThemeStore.getState();
      if (state.theme === "system") {
        applyTheme("system");
      }
    });
}
