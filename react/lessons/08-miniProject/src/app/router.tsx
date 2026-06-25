import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ProfilePage from "@/features/auth/pages/ProfilePage";
import HomePage from "@/features/landing/pages/HomePage";
import AdminLayout from "@/shared/layouts/AdminLayout";
import UserLayout from "@/shared/layouts/UserLayout";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, GuestRouter } from "@/shared/components/common";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <GuestRouter />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
