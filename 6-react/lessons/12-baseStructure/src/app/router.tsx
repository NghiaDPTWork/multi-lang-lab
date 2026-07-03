/**
 * FILE: src/app/router.tsx
 * VAI TRÒ: Quản lý toàn bộ cấu trúc định tuyến (URL Router), phân quyền (Guards) và Lazy Loading.
 * 
 * PHƯƠNG PHÁP THIẾT KẾ CHO DỰ ÁN LỚN:
 * 1. Phân nhóm route theo vai trò (Public Route, Guest Route, Private/Protected Route).
 * 2. Sử dụng Lazy Loading (`React.lazy` hoặc `lazy` của React Router) cho các trang để tối ưu kích thước gói code (bundle size) lúc ban đầu.
 * 3. Tổ chức layout lồng nhau (Nested Routing) để tận dụng layout dùng chung (MainLayout, AuthLayout).
 */

import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/shared/layouts/MainLayout"
import NotFoundPage from "@/shared/pages/NotFoundPage"

// Sử dụng Lazy Loading để tối ưu hiệu suất tải trang
// import { lazy } from "react"
// const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"))
// const AdminPage = lazy(() => import("@/features/employees/pages/AdminPage"))

export const router = createBrowserRouter([
  // 1. GUEST ROUTES (Chỉ những người CHƯA ĐĂNG NHẬP mới được truy cập, ví dụ: Login)
  {
    // element: <GuestGuardOutlet /> (Nếu bạn viết Guard component bọc ngoài)
    children: [
      {
        path: "/login",
        element: <div>LoginPage Placeholder</div>,
      },
    ],
  },

  // 2. PROTECTED ROUTES (Bắt buộc phải ĐĂNG NHẬP mới được vào)
  {
    element: <MainLayout />, // Bọc giao diện chung cho các màn hình bên trong
    children: [
      {
        path: "/",
        element: <div>Homepage Placeholder</div>,
      },
      // 2.1 Route chỉ dành cho vai trò ADMIN
      {
        // element: <RoleGuardOutlet allowedRoles={["admin"]} />
        children: [
          {
            path: "/admin",
            element: <div>Admin Dashboard Placeholder</div>,
          },
          {
            path: "/admin/employees/create",
            element: <div>Create Employee Page Placeholder</div>,
          },
        ],
      },
      // 2.2 Route chỉ dành cho vai trò EMPLOYEE
      {
        // element: <RoleGuardOutlet allowedRoles={["employee"]} />
        children: [
          {
            path: "/attendance",
            element: <div>Attendance Page Placeholder</div>,
          },
        ],
      },
    ],
  },

  // 3. FALLBACK ROUTES (Báo lỗi, không tìm thấy trang)
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
