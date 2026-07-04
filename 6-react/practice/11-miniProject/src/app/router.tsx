import {
  GuestRouter,
  LoginPage,
  ProfilePage,
  ProtectedRoute,
  RegisterPage,
} from "@/features/auth";
import { HomePage } from "@/features/landing";
import {
  AdminDashboard,
  ManageRitualCreatePage,
  ManageRitualEditPage,
  ManageRitualsListPage,
  ManageUserListPage,
  RitualCategoryPage,
  RitualDetailPage,
} from "@/features/rituals";
import { UserLayout } from "./layouts";
import { NotFoundPage, UnAuthorizedPage } from "@/shared/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      //Public routes
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/rituals",
        element: <RitualCategoryPage />,
      },
      {
        path: "/rituals:id",
        element: <RitualDetailPage />,
      },
      // For authorized proccessing
      {
        element: <GuestRouter />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
        ],
      },
      // For user role
      {
        element: <ProtectedRoute allowedRoles={["user"]} />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
      // For admin role
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          {
            path: "admin",
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
      // For 404
      {
        path: "*",
        element: <NotFoundPage />,
      },
      // For 401
      {
        path: "/unauthorized",
        element: <UnAuthorizedPage />,
      },
    ],
  },
]);
