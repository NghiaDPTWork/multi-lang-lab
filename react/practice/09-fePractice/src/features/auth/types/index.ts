export interface User {
  id: string
  email: string
  fullName: string
  role: "admin" | "employee"
}

export interface AuthState {
  token: string | null
  user: User | null
  setToken: (token: string | null, user: User | null) => void
  logout: () => void
}

export interface AuthResponse {
  token: string
  user: User
}
