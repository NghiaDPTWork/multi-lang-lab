import { api } from "@/lib/axios"
import { LoginFormFields } from "../schema/login-schema"

export async function login(credentential: LoginFormFields) {
  const response = await api.post("/auth/login", credentential)
  return response.data
}

export async function logout() {
  await api.post("/auth/logout")
}
