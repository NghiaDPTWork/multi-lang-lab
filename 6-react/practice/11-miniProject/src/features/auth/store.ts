import { create } from "zustand";
import type { AuthAction, AuthState } from "./types";

export const useAuthStore = create<AuthState & AuthAction>();
