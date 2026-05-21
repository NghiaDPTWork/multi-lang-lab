import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/guards/RequireAuth";
import ProfilePage from "./pages/ProfilePage";
import RequireUnAuth from "./components/guards/RequireUnAuth";

// 1. Sử dụng createBrowserRouter - API mới nhất của v6
export const router = createBrowserRouter([
  {
    // Đường dẫn gốc
    path: "/",
    element: <MainLayout />,
    // Layout bọc ngoài (Cái nhà)
    children: [
      // Các trang con (Nội thất)
      {
        index: true,
        element: <HomePage />,
      },
      // === PROTECTED ROUTES (Cần đăng nhập) ===
      {
        // Guard bọc ở đây
        element: <RequireAuth />,
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
      // === PROTECTED ROUTES (Không cần đăng nhập) ===
      {
        element: <RequireUnAuth />,
        children: [{ path: "login", element: <LoginPage /> }],
      },
    ],
  },
]);
