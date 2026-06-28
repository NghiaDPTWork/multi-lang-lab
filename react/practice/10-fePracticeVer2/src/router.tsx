import { createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { GuestRoute, ProtectedRoute } from "./components/AuthGuards"
import LoginPage from "./feature/auth/page/LoginPage"
import MainLayout from "./components/MainLayout"
import AdminPage from "./feature/employees/page/AdminPage"
import EmployeeCreatePage from "./feature/employees/page/EmployeeCreatePage"
import EmployeeDetailPage from "./feature/employees/page/EmployeeDetailPage"
import AttendancePage from "./feature/employees/page/AttendancePage"

export const router = createBrowserRouter([
  // 1. Don`t include MainLayout
  {
    element: <GuestRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  // 2. Include MainLayout and some core papges
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
            element: <AdminPage />,
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
