import { useAuthStore } from "@/store/auth-store"
import { Outlet, Link } from "react-router-dom"

export function MainLayout() {
  const { token, user, logout } = useAuthStore()
  const isAuthenticated = token && user
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="font-extrabold text-xl">AdminPortal</div>
          <nav className="flex space-x-6 text-sm font-semibold">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-destructive hover:text-destructive/80 transition cursor-pointer bg-transparent border-0 font-semibold p-0"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-primary hover:text-primary/80 transition"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
