import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/guards/RequireAuth";
import ProfilePage from "./pages/ProfilePage";
// 1. Sử dụng createBrowserRouter - API mới nhất của v6
export const router = createBrowserRouter([
  {
    path: "/", // Đường dẫn gốc
    element: <MainLayout />,
    // Layout bọc ngoài (Cái nhà)
    children: [
      // Các trang con (Nội thất)
      {
        index: true,
        // Trang mặc định khi vào "/"
        element: <HomePage />,
      },
      {
        path: "login",
        // Đường dẫn "/login"
        element: <LoginPage />,
      },
      // === PROTECTED ROUTES (Cần đăng nhập) ===
      {
        element: <RequireAuth />, // Guard bọc ở đây
        children: [
          { path: "profile", element: <ProfilePage /> },
          // { path: "settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
]);
