import { useAuthStore } from "@/shared/stores/authStore";
import { NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `hover:text-blue-600 transition-colors ${
    isActive
      ? "text-blue-600 underline decoration-2 underline-offset-4"
      : "text-gray-600"
  }`;

export default function UserLayout() {
  const { accessToken, role, clearAuth } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="border-b px-6 py-4 bg-white shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          {role === "admin" ? "Admin Layout" : "User Layout"}
        </h1>

        <nav className="flex gap-6 font-medium items-center">
          <NavLink to="/" end className={navLinkClass}>
            Trang chủ
          </NavLink>
          <NavLink to="/rituals" className={navLinkClass}>
            Nghi lễ
          </NavLink>
          {accessToken ? (
            // Muốn render được nhiều thì phải có Fragment Tag bọc lại
            <>
              <NavLink to="/profile" className={navLinkClass}>
                Hồ sơ
              </NavLink>
              <button
                onClick={clearAuth}
                className="hover:text-blue-600 text-gray-600 font-medium cursor-pointer transition-colors"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <NavLink to="/login" className={navLinkClass}>
              Đăng nhập
            </NavLink>
          )}
        </nav>
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
