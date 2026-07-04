# So Sánh Khác Biệt Giữa Lesson và Practice - Topic 11 (Mini Project)

Tài liệu này tổng hợp các điểm khác biệt chính giữa thư mục **`lessons/11-miniProject`** (mã nguồn khi học lý thuyết) và **`practice/11-miniProject`** (mã nguồn khi thực hành tối ưu).

---

## 1. Mục Tiêu Tổng Quan
*   **`lessons/11-miniProject`**: Hướng tới việc xây dựng giao diện hoàn chỉnh (giao diện đẹp mắt với Tailwind CSS, Lucide icons, Shadcn UI), xử lý biểu mẫu đầy đủ (React Hook Form + Zod) và kết nối API lấy dữ liệu thực tế.
*   **`practice/11-miniProject`**: Hướng tới việc **tối ưu hóa cấu trúc dự án (Refactoring Architecture)**. Gỡ bỏ giao diện phức tạp để tập trung vào cơ chế phân quyền (Routing guards), tối ưu luồng gọi API nâng cao (Axios interceptors + Refresh token queue) và chuẩn hóa phân chia thư mục (Clean Architecture).

---

## 2. Các Khác Biệt Chi Tiết

### 2.1 Định Tuyến & Bố Cục (Routing & Layouts)
*   **Trong Lesson**:
    *   Sử dụng cơ chế bọc route thủ công cho từng component trong cấu hình router. Ví dụ:
        ```tsx
        {
          path: "login",
          element: (
            <GuestRouter>
              <LoginPage />
            </GuestRouter>
          ),
        }
        ```
    *   Tách biệt hoàn toàn `UserLayout` và `AdminLayout` thành 2 layout cha ở tầng gốc.
*   **Trong Practice**:
    *   Chuyển sang sử dụng **Layout Routes (Nested Routes)** với `<Outlet />` giúp gộp nhóm các route có cùng phân quyền/điều kiện đăng nhập:
        ```tsx
        {
          element: <GuestRouter />,
          children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
          ]
        }
        ```
    *   Xóa bỏ hoàn toàn `AdminLayout`, tích hợp quản lý toàn bộ luồng hiển thị qua `UserLayout` và kiểm soát quyền Admin bằng cách lồng tiếp `<ProtectedRoute allowedRoles={["admin"]} />` ở lớp con.

### 2.2 Kiến Trúc & Cấu Trúc Thư Mục (Folder Structure)
Để chuẩn hóa theo hướng Feature-Driven Development, dự án thực hành đã di chuyển các file về đúng trách nhiệm của chúng:
*   **Router Guards**:
    *   *Lesson*: Để ở `shared/components/guards/` (`ProtectedRoute.tsx`, `GuestRouter.tsx`).
    *   *Practice*: Chuyển về `features/auth/components/guards/` và re-export thông qua file index của feature Auth. Tránh tràn lan thư mục shared.
*   **Bố Cục (Layouts)**:
    *   *Lesson*: Để ở `shared/layouts/`.
    *   *Practice*: Chuyển `UserLayout.tsx` về `app/layouts/` (thuộc tầng Application quản lý cấu trúc chung của app) và xóa bỏ `AdminLayout.tsx`.
*   **Dọn Dẹp Thành Phần Không Dùng**:
    *   *Practice* đã loại bỏ các file không thiết thực như `shared/components/common` (`EmptyState.tsx`, `ErrorState.tsx`, `LoadingState.tsx`) và `shared/hooks/useTheme.ts` để giữ codebase gọn nhẹ.

### 2.3 API Client & Cơ Chế Refresh Token (Axios Interceptors)
Đây là phần nâng cấp kỹ thuật quan trọng nhất trong thư mục Practice:
*   **Trong Lesson**:
    *   `apiClient` được định nghĩa ở `lib/axios.ts`. Khi gọi các API ở Feature Service, ta phải ép kiểu thủ công (`as unknown as Promise<User>`) do kiểu mặc định của Axios.
    *   Cơ chế Refresh Token hoạt động đơn lẻ, chưa tối ưu cho các request đồng thời.
*   **Trong Practice**:
    *   Di chuyển định nghĩa `apiClient` vào trực tiếp `features/auth/service.ts`.
    *   Định nghĩa lại kiểu dữ liệu chặt chẽ bằng cách bổ sung interface `CustomAxiosInstance` và `RetryConfig`. Nhờ đó, các hàm `apiClient.get`, `apiClient.post` trả về dữ liệu chuẩn trực tiếp mà không cần dùng cú pháp ép kiểu ở nơi gọi.
    *   Nâng cấp cơ chế **Refresh Token Queue**: Sử dụng biến trạng thái `isRefreshing` và mảng hàng đợi `failedQueue`. Khi Access Token hết hạn, request đầu tiên bị lỗi 401 sẽ kích hoạt refresh token. Trong thời gian chờ lấy token mới, toàn bộ các request khác gửi lên đồng thời sẽ được đưa vào hàng đợi (`failedQueue`). Khi có token mới thành công, toàn bộ hàng đợi sẽ tự động được gửi lại (retry) với token mới, giúp trải nghiệm người dùng không bị gián đoạn.

### 2.4 Trang & Giao Diện (Pages & UI)
*   **Trong Lesson**:
    *   Các trang như `LoginPage`, `RegisterPage`, `ProfilePage`, `RitualCategoryPage` có code giao diện đầy đủ, sử dụng các component của Shadcn UI như Card, Button, Input và thư viện biểu tượng Lucide. Có form validation hoàn chỉnh.
*   **Trong Practice**:
    *   Được tối giản hóa tối đa thành các thẻ `div` và tiêu đề `h2` đơn giản để phục vụ cho việc kiểm tra hoạt động của luồng phân quyền và định tuyến nhanh chóng, không bị xao nhãng bởi giao diện.

### 2.5 Cấu Hình Môi Trường (Environment Variables)
*   **Trong Lesson**:
    *   Kiểm tra nghiêm ngặt `VITE_API_URL`. Nếu không có trong file `.env`, ứng dụng sẽ dừng hoạt động và quăng lỗi (`throw new Error(...)`).
*   **Trong Practice**:
    *   Bổ sung giá trị fallback mặc định: `API_URL: import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1/"` để ứng dụng có thể khởi chạy độc lập ngay cả khi chưa thiết lập file `.env`.
