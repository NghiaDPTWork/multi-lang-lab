import { createBrowserRouter } from "react-router-dom"

import { MainLayout } from "@/components/common/main-layout"
import { GuestRoute, ProtectedRoute } from "@/components/AuthGuard"
import { LoginPage } from "@/features/auth/login-page"
import { EmployeeListPage } from "@/features/employees/employee-list-page"
import { EmployeeCreatePage } from "@/features/employees/employee-create-page"
import { EmployeeDetailPage } from "@/features/employees/employee-detail-page"
import { AttendancePage } from "@/features/attendance/attendance-page"
import HomePage from "./pages/home-page"

/**
 * App router — React Router v7 data API (`createBrowserRouter`).
 *
 * Add your own routes to the array, e.g.:
 *   { path: "/login", element: <LoginPage /> },
 *   { path: "/users", element: <UsersPage /> },
 *   { path: "/users/:id", element: <UserDetailPage /> },
 *
 * Wrap protected pages in a layout/guard route with `children` when you need
 * auth, and use loaders if you want route-level data fetching.
 */
export const router = createBrowserRouter([
  {
    element: <GuestRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          {
            path: "/admin",
            element: <EmployeeListPage />,
          },
          {
            path: "/admin/employees/create",
            element: <EmployeeCreatePage />,
          },
          {
            path: "/admin/employees/:id",
            element: <EmployeeDetailPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["employee"]} />,
        children: [
          {
            path: "/attendance",
            element: <AttendancePage />,
          },
        ],
      },
    ],
  },
])
