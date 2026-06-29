import { AuthResponse } from "../types"
import { LoginFormValues } from "../schemas/auth-schema"
import { api } from "@/lib/axios"

export const authService = {
  login: async (credentials: LoginFormValues): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/login", credentials)
    return response.data
  },
}
