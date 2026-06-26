import { api } from "@/lib/axios"
import { LoginFormFields } from "../schemas/login-schema"
import { LoginResponse } from "../types"

export async function login(
  credentials: LoginFormFields,
): Promise<LoginResponse> {
  const data = await api.post<LoginResponse>("/auth/login", credentials)
  return data.data
}

export async function logout(): Promise<void> {
  await api.post("/auth/logout")
}
