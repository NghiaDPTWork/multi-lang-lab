import { useAuthStore } from "@/features/auth";
import { Link, Outlet } from "react-router-dom";

export default function UserLayout() {
  const { accessToken, role } = useAuthStore();

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r p-6 flex flex-col gap-6">
        <h2 className="text-xl font-bold text-blue-600">Menu</h2>
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Trang chủ
          </Link>
          <Link
            to="/rituals"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Nghi lễ
          </Link>
          {accessToken ? (
            <Link
              to="/profile"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Hồ sơ
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Đăng nhập
            </Link>
          )}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="border-b px-6 py-4 bg-white shadow-sm">
          <h1 className="text-xl font-bold text-blue-600">
            {role === "admin" ? "Admin Layout" : "User Layout"}
          </h1>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
