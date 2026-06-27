import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import { HomePage } from "./pages/HomePage"
import { GuestRoute, ProtectedRoute } from "./components/AuthGuard"
import { LoginPage } from "./features/auth/LoginPage"
import { AttendancePage } from "./features/employees/pages/AttendancePage"
import { AdminPage } from "./features/employees/pages/AdminPage"
import { CreateEmployee } from "./features/employees/pages/CreateEmployee"
import { EmployeeDetail } from "./features/employees/pages/EmployeeDetail"

export const router = createBrowserRouter([
  // 1. Login Page
  {
    element: <GuestRoute />,
    children: [
      {
        element: <LoginPage />,
        path: "/login",
      },
    ],
  },

  // 2. Main Pages
  {
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          {
            element: <AdminPage />,
            path: "/admin",
          },
          {
            element: <CreateEmployee />,
            path: "/admin/employees/create",
          },
          {
            element: <EmployeeDetail />,
            path: "/admin/employees/:id",
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["employee"]} />,
        children: [
          {
            element: <AttendancePage />,
            path: "/attendance",
          },
        ],
      },
    ],
  },
])
