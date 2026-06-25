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
  // 2. Trang dành cho khách chưa login
  // (Trang Login)
  {
    element: <GuestRoute />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },

  // 2. Các trang cần bảo mật sử dụng chung MainLayout
  {
    element: <MainLayout />,
    children: [
      // Nhánh này cho Public Route
      { path: "/", element: <HomePage /> },

      // Nhánh dành riêng cho Employee
      // (Vừa bảo vệ đăng nhập, vừa check role employee)
      {
        element: <ProtectedRoute allowedRoles={["employee"]} />,
        children: [{ path: "/attendance", element: <AttendancePage /> }],
      },

      // Nhánh dành riêng cho Admin
      // (Vừa bảo vệ đăng nhập, vừa check role admin)
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          { path: "/admin", element: <AdminPage /> },
          { path: "/admin/employees/create", element: <CreateEmployee /> },
          { path: "/admin/employees/:id", element: <EmployeeDetail /> },
        ],
      },
    ],
  },

  // 3. Trang 404
  {
    path: "*",
    element: (
      <div className="p-8 text-center text-red-500 font-bold">
        404 - Không tìm thấy trang
      </div>
    ),
  },
])
