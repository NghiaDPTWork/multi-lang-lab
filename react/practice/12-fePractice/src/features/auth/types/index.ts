export interface User {
  _id: string
  email: string
  password: string
  role: "admin" | "employee"
}

export interface AuthResponse {
  accessToken: string
  user: User
}
