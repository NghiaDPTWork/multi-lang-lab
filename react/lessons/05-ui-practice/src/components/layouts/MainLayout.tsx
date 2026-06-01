import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6">
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-200 p-6 text-center text-sm text-gray-600">
        © 2024 ShopApp - Piedteam ReactJS Course
      </footer>
    </div>
  );
}
