import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

export default function Header() {
  const isAuthed = useAuthStore((state) => !!state.accessToken);
  const clearToken = useAuthStore((state) => state.clearTokens);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          ShopApp
        </Link>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold underline"
                : "hover:text-blue-200"
            }
          >
            Home
          </NavLink>

          {!isAuthed ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold underline"
                  : "hover:text-blue-200"
              }
            >
              Login
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold underline"
                    : "hover:text-blue-200"
                }
              >
                Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="hover:text-blue-200 cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
