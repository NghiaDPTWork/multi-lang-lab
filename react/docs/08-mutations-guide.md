# MUTATION & CACHE INVALIDATION - STUDENT GUIDE

## 🎯 Mục tiêu học tập

Làm chủ các thao tác thay đổi dữ liệu (Write/Update) và đồng bộ Cache:

- Hiểu sự khác biệt bản chất giữa **Query** (Read) và **Mutation** (Write/Side Effects)
- Sử dụng hook `useMutation` để xử lý Login, Register, và các thao tác CRUD
- Kỹ thuật **Invalidation**: "Vũ khí bí mật" để UI tự động cập nhật mà không cần F5
- Xử lý **Logout** sạch sẽ: Xóa Token + Xóa Cache
- Quản lý trạng thái Button (Loading/Disabled) chuyên nghiệp

---

## 🧠 Khái niệm cốt lõi

### 1. Mutation vs Query

| Đặc điểm | `useQuery` (Đọc) | `useMutation` (Ghi/Thay đổi) |
| :--- | :--- | :--- |
| **Mục đích** | Lấy dữ liệu về (GET) | Tạo, Sửa, Xóa dữ liệu (POST, PUT, DELETE) |
| **Kích hoạt** | Tự động khi component mount | Thủ công (User bấm nút, submit form) |
| **Cache** | Có cache (để tái sử dụng) | **Không cache** (hành động không cần lưu lại) |
| **Side Effects** | Không (Idempotent) | Có (Thay đổi dữ liệu trên Server) |
| **Lặp lại** | Tự động refetch (màn hình focus, v.v...) | Chỉ chạy khi ta ra lệnh |

> **💡 Quy tắc:** Muốn "Lấy" -> `useQuery`. Muốn "Làm gì đó" -> `useMutation`.

---

### 2. Vòng đời dữ liệu (The Invalidation Cycle)

Đây là lý do tại sao React Query cực kỳ mạnh mẽ. Hãy tưởng tượng bạn đổi tên mình trong trang Profile:

1. **Mutation:** Bạn bấm "Lưu". `useMutation` gọi API `PUT /users/me`.
2. **Success:** Server báo thành công (200 OK).
3. **Invalidate:** Bạn bảo React Query: *"Cái cache ['me'] cũ rồi, vứt đi!"*
4. **Refetch:** React Query tự động gọi lại API `GET /users/me` ngầm định.
5. **Update UI:** Tên mới hiện lên màn hình. **Zero Refresh!**

---

## 🛠️ PHASE 1: CƠ BẢN VỀ USEMUTATION

### 1. Cấu trúc cơ bản

```tsx
const mutation = useMutation({
  // 1. Hàm thực hiện gọi API (Bắt buộc)
  mutationFn: (newData) => axios.post('/api/data', newData),

  // 2. Callback khi thành công
  onSuccess: (data, variables, context) => {
    // Thường dùng để: Invalidate cache, thông báo, chuyển trang
  },

  // 3. Callback khi thất bại
  onError: (error, variables, context) => {
    // Thường dùng để: Hiển thị lỗi
  },

  // 4. Luôn chạy dù thành công hay thất bại
  onSettled: (data, error, variables, context) => {
    // Giống khối 'finally'
  }
});
```

### 2. Các giá trị trả về quan trọng

- `mutate`: Hàm để kích hoạt mutation (dùng trong `onClick` hoặc `onSubmit`).
- `isPending` (hoặc `isLoading` ở bản cũ): Đang đợi API trả về.
- `isSuccess` / `isError`: Trạng thái kết quả.
- `error`: Đối tượng lỗi nếu có.

---

## 🛠️ PHASE 2: AUTH FLOW (LOGIN/REGISTER)

Đây là ví dụ thực tế nhất về việc kết hợp React Query Mutation với Zustand.

### 1. Login Mutation

Tạo Custom Hook `src/hooks/useAuth.ts`:

```tsx
export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    // mutationFn nhận vào object credentials từ Form
    mutationFn: (credentials: LoginInput) => authApi.login(credentials),

    onSuccess: (data) => {
      // 1. Lưu token vào Zustand (Zustand sẽ tự lưu vao LocalStorage)
      setTokens(data.accessToken, data.refreshToken);

      // 2. Thông báo
      toast.success("Chào mừng bạn quay trở lại!");

      // 3. Điều hướng sang trang Profile
      navigate("/profile");
    },

    onError: (error: any) => {
      // Lấy message lỗi từ API trả về hoặc dùng mặc định
      const message = error.response?.data?.message || "Đăng nhập thất bại";
      toast.error(message);
    },
  });
};
```

### 2. Sử dụng trong Component

```tsx
const loginMutation = useLoginMutation();

const onSubmit = (data) => {
  loginMutation.mutate(data);
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    {/* ... inputs ... */}
    <Button 
      type="submit" 
      disabled={loginMutation.isPending} // ⛔ Chống spam click
    >
      {loginMutation.isPending ? "Đang xử lý..." : "Đăng nhập"}
    </Button>
  </form>
);
```

---

## 🛠️ PHASE 3: CACHE INVALIDATION (THE MAGIC)

Làm sao để khi xóa một món hàng, danh sách tự mất món đó mà không cần load lại trang?

### 1. Invalidate danh sách sau khi Xóa

```tsx
export const useDeleteRitualMutation = () => {
  const queryClient = useQueryClient(); // 1. Lấy "Người quản lý cache"

  return useMutation({
    mutationFn: (id: string) => ritualApi.deleteRitual(id),

    onSuccess: () => {
      // 2. Ra lệnh: "Làm mới danh sách Rituals dùm tôi"
      queryClient.invalidateQueries({ queryKey: ["rituals"] });
      
      toast.success("Đã xóa thành công!");
    },
  });
};
```

---

## 🛠️ PHASE 4: LOGOUT FLOW (CLEANUP)

Logout không dùng Invalidate, mà dùng **Remove**.

```tsx
export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const clearTokens = useAuthStore((state) => state.clearTokens);

  return useMutation({
    mutationFn: () => {
      return authApi.logout();
    },

    onSuccess: () => {
      // 1. Xóa token trong store
      clearTokens();

      // 2. Xóa sạch mọi cache của React Query
      // (tránh user sau thấy data user trước)
      queryClient.removeQueries();

      // 3. Redirect
      navigate("/login");
      toast.info("Đã đăng xuất");
    },

    onError: () => {
      // Dù API lỗi, Client vẫn phải Logout để đảm bảo UX
      clearTokens();
      queryClient.removeQueries();
      navigate("/login");
    },
  });
};
```

---


## 🎓 BEST PRACTICES

### 1. Luôn Disabled Button khi `isPending`
Đừng bao giờ để user có cơ hội bấm nút 2 lần trong khi API đang chạy. Điều này giúp tránh việc gửi trùng request (Double post).

### 2. Invalidate thay vì SetQueryData thủ công
Ưu tiên `invalidateQueries` vì nó lấy dữ liệu "Chuẩn" từ Server. Tránh việc tự tính toán state ở Client dẫn đến sai lệch dữ liệu (Out of sync).

### 3. Đặt các Mutation vào Custom Hook
Thay vì viết `useMutation` trực tiếp trong file Component (View), hãy đưa vào `hooks/useAuth.ts` hoặc `hooks/useProducts.ts`.
- Giúp Component sạch sẽ.
- Tái sử dụng được ở nhiều màn hình (VD: Nút Logout ở Header và ở Profile Page).

---

## ⚠️ COMMON MISTAKES

### 1. Gọi Mutation ở cấp độ Render
**SAI:**
```tsx
function MyComponent() {
  const mutation = useMutation(...)
  mutation.mutate(data) // ❌ SAI cực nặng: Loop vô tận
  return <div>...</div>
}
```
**ĐÚNG:** Chỉ gọi trong Event Handler.

### 2. Quên Invalidate sau khi thay đổi
**Symptom:** Xóa item xong item vẫn còn đó, phải F5 mới mất.
**Fix:** Thêm `queryClient.invalidateQueries` vào `onSuccess`.

### 3. Quên xử lý Error
Nếu không có `onError` và toast thông báo, user sẽ không biết tại sao họ bấm nút mà "không có gì xảy ra" (trong khi API đang trả về lỗi 400).

---

## 🐛 DEBUGGING CHECKLIST

1. **Check Tab Network:** Xem request đã gửi đi chưa? Payload (Body) gửi lên có đúng format không?
2. **Check DevTools:** Icon hoa đỏ 🌸 của React Query. Xem sau khi mutation thành công, các query tương ứng có chuyển sang màu xanh dương (đang refetch) không?
3. **Log biến `error`:** Nếu bị lỗi, hãy `console.log(error.response?.data)` để xem server thực tế đang chửi gì mình.
4. **Kiểm tra Key:** `queryKey` trong `invalidateQueries` phải khớp 100% (cả thứ tự và kiểu dữ liệu) với `queryKey` trong `useQuery`.

---

> **💡 Mẹo học nhanh:** Hãy tưởng tượng `useQuery` là **Tivi** (chỉ để xem) và `useMutation` là **Điều khiển từ xa** (để bấm đổi kênh). Khi bấm nút trên điều khiển, nội dung tivi sẽ thay đổi!
