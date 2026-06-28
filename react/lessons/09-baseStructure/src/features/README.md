# Hướng dẫn cấu trúc thư mục của một Feature độc lập

Mỗi thư mục trong `src/features/` đại diện cho một nghiệp vụ hoàn chỉnh (Domain Module). 
Để đảm bảo code có tính cô lập cao (High Cohesion) và dễ tái sử dụng hoặc mở rộng, một feature chuẩn sẽ được chia nhỏ như sau:

---

## 📁 Cấu trúc thư mục của 1 Feature

```txt
[feature-name]/
├── components/   # Các Component con chỉ dùng riêng cho Feature này
│   └── LoginForm.tsx
├── hooks/        # React Query custom hooks (Queries & Mutations) riêng của Feature
│   └── useLogin.ts
├── pages/        # Các Page hiển thị kết nối với Router đại diện cho các route của Feature
│   └── LoginPage.tsx
├── schemas/      # Zod validation schema (nếu có form nhập liệu)
│   └── loginSchema.ts
├── services/     # Gọi API endpoints riêng liên quan trực tiếp đến Feature này
│   └── authService.ts
└── types/        # Kiểu dữ liệu TypeScript đặc thù của Feature
    └── authTypes.ts
```

---

## 💡 Vai trò và chi tiết từng thư mục con:

### 1. `components/`
* Chứa các Component nhỏ, tập trung hiển thị giao diện (Presentation Components).
* **Quy tắc:** Component ở đây nhận dữ liệu qua `props`, không gọi API trực tiếp. Giúp tái sử dụng hoặc thay thế giao diện dễ dàng.

### 2. `hooks/`
* Đóng gói toàn bộ logic gọi API (từ service) và quản lý trạng thái tải/lỗi thông qua TanStack Query (`useQuery`, `useMutation`).
* **Ví dụ:** `useEmployeesQuery`, `useCreateEmployeeMutation`.

### 3. `pages/`
* Đây là Component đóng vai trò "Container". Nó liên kết trực tiếp với React Router.
* **Nhiệm vụ:** Gọi custom hooks để lấy dữ liệu, truyền dữ liệu xuống các con trong `components/`, hiển thị màn hình Loading/Error, điều hướng người dùng bằng `useNavigate`.

### 4. `schemas/`
* Dùng thư viện Zod định nghĩa form validation rules.
* **Mẹo:** Xuất khẩu kiểu dữ liệu `FormFields` trực tiếp từ Schema sử dụng `z.infer<typeof schema>`.

### 5. `services/`
* Các hàm JavaScript không phụ thuộc vào React, thực hiện gọi Axios trực tiếp đến các endpoint cụ thể của Feature.

### 6. `types/`
* Chứa interfaces định nghĩa payload gửi đi và dữ liệu trả về từ API của Feature đó.
