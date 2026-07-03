/**
 * FILE: src/app/App.tsx
 * VAI TRÒ: Component gốc của ứng dụng (Root Component).
 * 
 * NƠI THỰC HIỆN:
 * 1. Cung cấp RouterProvider để kích hoạt hệ thống định tuyến (React Router).
 * 2. Đặt các component thông báo toàn cục (ví dụ: Toaster của sonner).
 * 3. Chứa Error Boundary toàn cục nếu cần thiết.
 */

import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"
import { router } from "./router"

export default function App() {
  return (
    <>
      {/* Cung cấp Router cấu hình định tuyến cho toàn ứng dụng */}
      <RouterProvider router={router} />
      
      {/* 
        Toaster đặt tại gốc của ứng dụng để bạn có thể gọi toast() 
        từ bất kỳ page/hook/component nào đều hiển thị thành công.
      */}
      <Toaster richColors position="top-right" closeButton />
    </>
  )
}
