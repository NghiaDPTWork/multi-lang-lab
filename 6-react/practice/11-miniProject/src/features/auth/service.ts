import apiClient from "@/lib/axios";
import type { AuthResponse, User, userLogin, userRegister } from "./types";

export const authService = {
  async login(credentials: userLogin): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>("/auth/login", credentials);
  },

  async register(credentials: userRegister): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>("/auth/resgister", credentials);
  },

  async getMe(): Promise<User> {
    return apiClient.get<User>("auth/me");
  },

  async logout(): Promise<void> {
    return apiClient.post<void>("auth/logout");
  },
};
