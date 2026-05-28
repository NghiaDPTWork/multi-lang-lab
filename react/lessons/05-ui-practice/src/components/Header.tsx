import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Header() {
  const isAuthed = useAuthStore((state) => !!state.accessToken);
  const clearToken = useAuthStore((state) => state.clearTokens);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 px-4 py-3">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
          ShopApp
        </Link>
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              buttonVariants({
                variant: isActive ? "secondary" : "ghost",
                size: "sm",
              })
            }
          >
            Home
          </NavLink>

          {!isAuthed ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "secondary" : "ghost",
                  size: "sm",
                })
              }
            >
              Login
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    size: "sm",
                  })
                }
              >
                Profile
              </NavLink>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
