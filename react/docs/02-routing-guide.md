# 📘 SUMMARY: ROUTING & PROTECTED ROUTES (SESSION 03)

Chào mừng bạn đến với Session 03. Hôm nay chúng ta đã biến ứng dụng "một trang duy nhất" thành một hệ thống đa trang chuyên nghiệp với **React Router v6**.

---

## 1. MENTAL MODEL: CẤU TRÚC NGÔI NHÀ 🏠

Để hiểu React Router, hãy tưởng tượng ứng dụng của bạn là một ngôi nhà:
- **`createBrowserRouter`**: Bản vẽ thiết kế của ngôi nhà.
- **`MainLayout`**: Khung nhà (Tường, mái, cửa chính) - luôn cố định.
- **`<Outlet />`**: Các gian phòng trống. Tùy vào người khách muốn vào phòng nào (URL nào), React sẽ "lắp" nội thất của phòng đó vào gian trống này.

| Khái niệm | Giải thích | Ẩn dụ |
| :--- | :--- | :--- |
| **Route** | Một cặp (Đường dẫn, Component). | Địa chỉ phòng (Số phòng 101 -> Phòng ngủ). |
| **Layout** | Component chứa Header/Footer chung. | Khung nhà cố định. |
| **Outlet** | Vị trí hiển thị các trang con trong Layout. | Gian phòng trống đợi lắp nội thất. |

---

## 2. SPA VS TRADITIONAL WEB 🚀

Tại sao chúng ta không dùng thẻ `<a>` bình thường?

| Đặc điểm | Thẻ `<a>` (Traditional) | Thẻ `<Link>` (SPA) |
| :--- | :--- | :--- |
| **Cơ chế** | Load lại toàn bộ trang từ Server. | Chỉ thay đổi Component cần thiết. |
| **Trải nghiệm** | Bị "giật", trắng màn hình khi đổi trang. | Mượt mà, tức thì (Instant). |
| **State** | **Bị mất toàn bộ State** (Reset app). | **Giữ nguyên State** của ứng dụng. |

---

## 3. CÁC LOẠI ĐIỀU HƯỚNG (NAVIGATION) 🗺️

Trong React Router v6, chúng ta có 3 "vũ khí" chính để di chuyển giữa các trang:

### 3.1 `<Link>` - Cơ bản nhất
Dùng cho các nút bấm, icon hoặc text đơn thuần để chuyển trang.
```tsx
<Link to="/login">Đăng nhập</Link>
```

### 3.2 `<NavLink>` - Dành cho Menu
Tự động biết mình có đang ở trang đó hay không để thêm class `active`.
```tsx
<NavLink 
  to="/home" 
  className={({ isActive }) => isActive ? "font-bold text-blue-500" : ""}
>
  Trang chủ
</NavLink>
```

### 3.3 `useNavigate` - Điều hướng bằng Logic
Dùng khi bạn muốn chuyển trang sau khi thực hiện xong một hành động (Ví dụ: Logout xong thì về Home, Order xong thì về Profile).
```tsx
const navigate = useNavigate();
const handleOrder = () => {
    // ... logic đặt hàng
    navigate("/profile");
};
```

---

## 4. PROTECTED ROUTES: "CÁC CHÚ BẢO VỆ" 🛡️

Trong thực tế, không phải trang nào khách cũng vào được (Ví dụ: Trang `Profile`, `Settings`). Chúng ta cần một "Người gác cổng" (**Guard**).

### Cơ chế hoạt động:
1. Tạo một component bọc ngoài (**RequireAuth**).
2. Kiểm tra Token trong `localStorage`.
3. **Có Token:** Cho phép vào tiếp (`<Outlet />`).
4. **Không có Token:** Đá về trang `/login` (`<Navigate />`).

```tsx
function RequireAuth() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
```

---

## ✅ CHECKLIST BÀI TẬP VỀ NHÀ

1. [ ] **Nút Logout (Đăng xuất):** 
    - Thêm một nút "Logout" trên Header hoặc trang Profile. 
    - Khi bấm vào: Xóa `accessToken` khỏi `localStorage` và chuyển người dùng về trang chủ hoặc trang Login.

2. [ ] **Ẩn/Hiện Logic Đăng nhập:**
    - Nếu đã có Token: Header hiện "Profile" và "Logout".
    - Nếu chưa có Token: Header hiện "Login".
    - *Gợi ý:* Sử dụng lại biến check token giống như trong `RequireAuth`.

3. [ ] **"Chú bảo vệ" đảo ngược (GuestGuard):**
    - Tạo một Guard mới tên là `GuestGuard` hoặc `RejectAuth`.
    - **Nhiệm vụ:** Ngăn những người **đã đăng nhập** quay lại trang `/login` (vì đã login rồi thì vào đó làm gì nữa?).
    - Nếu có Token mà cố vào `/login`: Tự động đá họ về trang trước đó.
    - Áp dụng Guard này cho trang `LoginPage` trong file `router.tsx`.


---
