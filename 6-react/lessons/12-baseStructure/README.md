# Hướng dẫn cấu trúc dự án lớn (Enterprise React Architecture)

Cấu trúc này được mở rộng từ `08-miniProject` để đáp ứng các dự án quy mô vừa và lớn (Middle to Large Scale). Quy trình tổ chức thư mục tuân thủ triết lý **Feature-Driven Development (FDD)** và **Separation of Concerns (SoC)**.

---

## 📁 Sơ đồ Cấu trúc Tổng quan

```txt
src/
├── app/                  # Trọng tâm điều phối (Core App Orchestration)
│   ├── providers/        # Hợp nhất các React Context Providers (Query, Theme, Auth...)
│   │   └── AppProviders.tsx
│   ├── App.tsx           # Entry component chính, chứa Error Boundary, Toast, Router Outlet
│   ├── router.tsx        # Cấu hình Routing, phân quyền truy cập (Guards) và Lazy Loading
│   └── store.ts          # Zustand Store toàn cục cho trạng thái Client-side
│
├── features/             # Chứa các mô-đun nghiệp vụ (Domain Features)
│   ├── auth/             # Ví dụ về Feature Đăng nhập/Xác thực
│   │   ├── components/   # Các component chỉ dùng riêng cho Feature này (LoginForm...)
│   │   ├── hooks/        # React Query custom hooks (useLoginMutation, useLogout...)
│   │   ├── pages/        # Các trang màn hình thuộc Feature này (LoginPage...)
│   │   ├── schemas/      # Định nghĩa Zod Validation Schemas riêng cho Feature
│   │   ├── services/     # Gọi API endpoints riêng cho Feature
│   │   └── types.ts      # TypeScript interfaces riêng của Feature
│   │
│   └── employees/        # Feature Quản lý Nhân sự (có cấu trúc tương tự)
│
├── lib/                  # Cấu hình các thư viện bên thứ ba (Third-party Configurations)
│   ├── axios.ts          # Cấu hình Axios Client, Interceptors tự động đính kèm Token
│   └── queryClient.ts    # Cấu hình mặc định cho TanStack Query (cacheTime, retry...)
│
├── shared/               # Tài nguyên dùng chung giữa các features (Reusable Shared Assets)
│   ├── components/       # Các UI Component nguyên tử (Button, Input, Table...)
│   ├── constants/        # Hằng số toàn cục (API_URL, HTTP_STATUS, REGEX...)
│   ├── hooks/            # Custom hooks dùng chung (useDebounce, useClickAway...)
│   ├── layouts/          # Các bộ khung màn hình (MainLayout, AuthLayout, Sidebar...)
│   ├── pages/            # Trang dùng chung toàn hệ thống (NotFound, Forbidden...)
│   ├── services/         # Các service tiện ích toàn cục (localStorageHelper...)
│   └── types/            # Khai báo Types/Interfaces toàn cục dùng chung
│
└── styles/               # Chứa cấu hình styles toàn dự án
    └── index.css         # CSS chính kết hợp Tailwind, Custom CSS và Theme Variables
```

---

## 💎 Quy tắc Thiết kế & Phát triển (Design & Development Principles)

1. **Quy tắc Feature Isolation (Cô lập Feature):**
   * Các components, hooks, services nào **chỉ sử dụng cho duy nhất một tính năng** phải nằm trong thư mục của tính năng đó (`src/features/[feature-name]/`).
   * Không được import chéo giữa các features (ví dụ: Feature `employees` không được import trực tiếp component từ Feature `auth`). Nếu cần dùng chung, hãy chuyển thành phần đó ra thư mục `src/shared/`.

2. **Quy tắc Presentation & Container Components (Tách biệt Giao diện và Logic):**
   * **Page/Container (Logic):** Lấy dữ liệu từ Hook, xử lý định hướng (navigate), hiển thị trạng thái Loading/Error.
   * **Component (Presentation):** Chỉ nhận dữ liệu qua `props`, hiển thị UI và gọi hàm callback truyền ngược lại. Giúp components dễ dàng tái sử dụng và viết Unit Test.

3. **Tự động hóa Token qua Axios Interceptors:**
   * Không lấy và truyền thủ công Bearer Token ở từng API. Hãy xử lý việc tự động đính kèm token từ store/localStorage vào header của các request trong `src/lib/axios.ts`.

4. **Sử dụng Path Alias `@/*`:**
   * Tránh sử dụng đường dẫn tương đối phức tạp như `../../../shared/components`.
   * Luôn sử dụng `@/` để trỏ trực tiếp về thư mục `src/` (ví dụ: `import { Button } from "@/shared/components/Button"`).
