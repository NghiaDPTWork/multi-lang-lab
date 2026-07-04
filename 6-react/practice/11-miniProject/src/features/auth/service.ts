import apiClient from "@/lib/axios";
import type { AuthResponse, User, userLogin, userRegister } from "./types";

export const UserService = {
  async login(credentials: userLogin): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>("/auth/login", credentials);
  },

  async register(credentials: userRegister): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>("/auth/register", credentials);
  },

  async getMe(): Promise<User> {
    return apiClient.get<User>("/user/me");
  },

  async logout(): Promise<void> {
    return apiClient.post<void>("/auth/logout");
  },
};
