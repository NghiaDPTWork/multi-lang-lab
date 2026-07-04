import { useAuthStore } from "@/features/auth";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  const role = useAuthStore((state) => state.role);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="border-b px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">
          {role === "admin" ? "Admin Layout" : "User Layout"}
        </h1>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
