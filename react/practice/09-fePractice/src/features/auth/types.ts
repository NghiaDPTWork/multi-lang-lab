export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "employee"
}

export interface LoginResponse {
  token: string
  user: User
}
