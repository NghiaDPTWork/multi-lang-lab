import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ProfilePage from "@/features/auth/pages/ProfilePage";
import HomePage from "@/features/landing/pages/HomePage";
import AdminLayout from "@/shared/layouts/AdminLayout";
import UserLayout from "@/shared/layouts/UserLayout";
import { createBrowserRouter } from "react-router-dom";
import GuestRouter from "@/shared/components/guards/GuestRouter";
import ProtectedRoute from "@/shared/components/guards/ProtectedRoute";
import RitualCategoryPage from "@/features/rituals/pages/RitualCategoryPage";
import RitualDetailPage from "@/features/rituals/pages/RitualDetailPage";
import UnAuthorizedPage from "@/shared/pages/UnAuthorizedPage";
import NotFoundPage from "@/shared/pages/NotFoundPage";
import AdminDashboard from "@/features/rituals/pages/AdminDashboard";
import ManageRitualsListPage from "@/features/rituals/pages/ManageRitualsListPage";
import ManageRitualCreatePage from "@/features/rituals/pages/ManageRitualCreatePage";
import ManageRitualEditPage from "@/features/rituals/pages/ManageRitualEditPage";
import ManageUserListPage from "@/features/rituals/pages/ManageUserListPage";

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
        path: "rituals",
        element: <RitualCategoryPage />,
      },
      {
        path: "rituals/:id",
        element: <RitualDetailPage />,
      },
      {
        path: "login",
        element: (
          <GuestRouter>
            <LoginPage />
          </GuestRouter>
        ),
      },
      {
        path: "register",
        element: (
          <GuestRouter>
            <RegisterPage />
          </GuestRouter>
        ),
      },

      // Process Wrong Role for User
      {
        path: "unauthorized",
        element: <UnAuthorizedPage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },

      // Handle 404 Error
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  // Admin
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "rituals",
        element: <ManageRitualsListPage />,
      },
      {
        path: "rituals/create",
        element: <ManageRitualCreatePage />,
      },
      {
        path: "rituals/:id/edit",
        element: <ManageRitualEditPage />,
      },
      {
        path: "users",
        element: <ManageUserListPage />,
      },
    ],
  },
]);
