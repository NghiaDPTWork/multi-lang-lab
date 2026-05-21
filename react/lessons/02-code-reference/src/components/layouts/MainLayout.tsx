import { useState } from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const token = localStorage.getItem("accessToken");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    // Sau khi logout thì mình muốn nhảy về trang chủ
    setIsLogin(!isLogin);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== HEADER - Tường nhà (Cố định) ===== */}
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          {/* <a/> không đảm bảo spa + mất state + reload trang */}
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

            {!token ? (
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
                  className="hover: :text-blue-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* ===== MAIN CONTENT - Outlet (Thay đổi theo URL) ===== */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6">
        {/* 👈 LỖ HỔNG THẦN THÁNH: Nơi render các trang con */}
        <Outlet />
      </main>

      {/* ===== FOOTER - Nền nhà (Cố định) ===== */}
      <footer className="bg-gray-200 p-6 text-center text-sm text-gray-600">
        © 2024 ShopApp - Piedteam ReactJS Course
      </footer>
    </div>
  );
}
