import LoginPage from "@/features/auth/pages/LoginPage";
import ProfilePage from "@/features/auth/pages/ProfilePage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import HomePage from "@/features/landing/pages/HomePage";
import RequireAuth from "@/shared/components/guards/RequireAuth";
import RequireUnAuth from "@/shared/components/guards/RequireUnAuth";
import MainLayout from "@/shared/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <RequireAuth />,
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
      {
        element: <RequireUnAuth />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
    ],
  },
]);
