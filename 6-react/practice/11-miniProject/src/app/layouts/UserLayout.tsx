import { useAuthStore } from "@/features/auth";
import { Link, Outlet } from "react-router-dom";

export default function UserLayout() {
  const { accessToken, role } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="border-b px-6 py-4 bg-white shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          {role === "admin" ? "Admin Layout" : "User Layout"}
        </h1>

        <nav className="flex gap-6 font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600">
            Trang chủ
          </Link>
          <Link to="/rituals" className="hover:text-blue-600">
            Nghi lễ
          </Link>
          {accessToken ? (
            <Link to="/profile" className="hover:text-blue-600">
              Hồ sơ
            </Link>
          ) : (
            <Link to="/login" className="hover:text-blue-600">
              Đăng nhập
            </Link>
          )}
        </nav>
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
