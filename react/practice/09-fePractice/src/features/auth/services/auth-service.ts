import { api } from "@/lib/axios"
import { LoginFormField } from "../schemas/auth-schema"
import { AuthResponse } from "../types"

export const authService = {
  login: async (cerdentials: LoginFormField): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/login", cerdentials)
    return response.data
  },

  logout: async () => {
    return api.post("/auth/logout")
  },
}
