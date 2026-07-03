import { useAuthStore } from "@/store/auth-store"
import { Link, Outlet } from "react-router-dom"
import { Button } from "../ui/button"

export default function MainLayout() {
  const { token, user } = useAuthStore()
  const isAuthenticated = token && user
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="font-extrabold text-xl">Fe-Test-Practice</div>
          <nav className="flex space-x-6 text-sm font-semibold">
            {isAuthenticated ? (
              <Button>Logout</Button>
            ) : (
              <Link to={"/login"}>Login</Link>
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
