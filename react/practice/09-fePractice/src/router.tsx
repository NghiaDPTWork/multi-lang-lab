import { createBrowserRouter } from "react-router-dom"
import { GuestRoute, ProtectedRoute } from "./components/auth-guard"
import LoginPage from "./features/auth/login-page"
import MainLayout from "./components/common/main-layout"
import EmployeeListPage from "./features/employees/employee-list-page"
import EmployeeDetailPage from "./features/employees/employee-detail-page"
import EmployeeCreatePage from "./features/employees/employee-create-page"
import EmployeeAttendancePage from "./features/attendance/employee-attedance-page"
import HomePage from "./pages/home-page"

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
            path: "/employee/:id",
            element: <EmployeeDetailPage />,
          },
          {
            path: "/employees/create",
            element: <EmployeeCreatePage />,
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["employee"]} />,
        children: [
          {
            path: "/attendance",
            element: <EmployeeAttendancePage />,
          },
        ],
      },
    ],
  },
])
