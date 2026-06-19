import apiClient from "@/lib/axios";
import type { AuthTokens, User, userLogin, userRegister } from "./types";

// Định nghĩa API
export const authApi = {
  // Đăng nhập
  async login(credentials: userLogin): Promise<AuthTokens> {
    const { data } = await apiClient.post("/auth/login", credentials);

    console.log("Raw response from API", data);
    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  },

  // Đăng ký
  async register(credentials: userRegister): Promise<void> {
    await apiClient.post("/auth/register", credentials);
  },

  // Get profile (ví dụ để test interceptor)
  async getProfile(): Promise<User> {
    const { data } = await apiClient.get("/user/me");
    return data;
  },

  // Đăng xuất
  async logout(): Promise<void> {
    await apiClient.post("/auth/logout");
  },
};
