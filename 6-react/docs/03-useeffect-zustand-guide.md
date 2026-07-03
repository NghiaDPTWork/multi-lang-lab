# 📘 SUMMARY: USEEFFECT & ZUSTAND AUTH (SESSION 04-05)

Chào mừng bạn đến với Session 04-05. Hôm nay chúng ta sẽ làm chủ `useEffect`, chuẩn hóa UI States, và xây dựng hệ thống Auth thật với Zustand.

---

## 1. USEEFFECT: "ĐỒNG BỘ HÓA" VỚI THẾ GIỚI BÊN NGOÀI 🔄

### Mental Model

`useEffect` KHÔNG phải nơi để "tính toán" hay "validate" trong React. Nó dùng để **đồng bộ** Component với một hệ thống BÊN NGOÀI React:

- **External Systems:** API server, Browser API (document.title, localStorage), Timer/Interval, WebSocket

> **💡 Quy tắc vàng:** Nếu nó nằm bên ngoài React → `useEffect`. Nếu nó tính được từ state/props → tính trực tiếp, KHÔNG dùng Effect.

---

## 2. USEEFFECT: RULES OF THUMB ✅

### Rule 1: Dependency Array luôn phải ĐẦY ĐỦ

```tsx
useEffect(() => {
  document.title = `Profile - ${userName}`;
}, [userName]); // userName dùng trong effect → PHẢI có trong deps
```

- Dùng biến nào trong effect → phải có trong mảng dependencies.
- Thiếu deps → Stale data (dữ liệu cũ), bug khó debug.
- Dùng ESLint plugin `eslint-plugin-react-hooks` để tự động kiểm tra.

### Rule 2: Empty array `[]` = Chạy 1 lần khi mount

```tsx
useEffect(() => {
  const timer = setInterval(() => console.log("ping"), 1000);

  // Cleanup function: chạy khi component unmount
  return () => clearInterval(timer);
}, []); // Chỉ chạy 1 lần sau lần render đầu tiên
```

### Rule 3: `[x, y]` = Chạy lại khi x hoặc y đổi

```tsx
useEffect(() => {
  setLoading(true);
  fetch(`/api/users/${userId}`)
    .then((r) => r.json())
    .then((data) => {
      setUser(data);
      setLoading(false);
    });
}, [userId]); // userId đổi → Effect chạy lại
```

### Rule 4: KHÔNG dùng Effect cho Derived State / Validation

```tsx
// ❌ SAI - Tính toán đơn giản không cần Effect
useEffect(() => {
  if (password.length < 8) setError("Quá ngắn");
}, [password]);

// ✅ ĐÚNG - Tính trực tiếp (Derived State)
const error = password.length < 8 ? "Quá ngắn" : "";
```

```tsx
// ❌ SAI - Dùng Effect để tính doubled
function BadCounter() {
  const [count, setCount] = useState(0);
  const [doubled, setDoubled] = useState(0);

  useEffect(() => {
    setDoubled(count * 2);
  }, [count]);

  return <div>{doubled}</div>;
}

// ✅ ĐÚNG - Tính trực tiếp
function GoodCounter() {
  const [count, setCount] = useState(0);
  const doubled = count * 2; // Derived state

  return <div>{doubled}</div>;
}
```

### Rule 5: Tránh Infinite Loop

```tsx
// ❌ SAI - Infinite Loop: setState + state trong deps
useEffect(() => {
  setCount(count + 1); // count đổi → Effect chạy → setCount → count đổi → ...
}, [count]);

// ✅ ĐÚNG - Functional update (không cần count trong deps)
useEffect(() => {
  setCount((prev) => prev + 1);
}, []);
```

```tsx
// ❌ SAI - Infinite Loop: fetch không có deps
useEffect(() => {
  fetch("/api/data")
    .then((r) => r.json())
    .then((d) => setData(d));
}); // Không có deps → chạy mỗi render → setData → re-render → ...

// ✅ ĐÚNG - Empty deps = chỉ fetch 1 lần
useEffect(() => {
  fetch("/api/data")
    .then((r) => r.json())
    .then((d) => setData(d));
}, []);
```

> **📌 Rule of Thumb Summary:**
>
> 1. Effect = Sync với external system (API, DOM, Timer)
> 2. Empty deps `[]` = Run once on mount
> 3. Deps `[x, y]` = Run khi x hoặc y đổi
> 4. TUYỆT ĐỐI khai báo đủ dependencies (dùng ESLint)
> 5. KHÔNG dùng Effect cho: validation, derived state, event handlers

---

## 3. UI STATES: LOADING, ERROR, EMPTY 🧩

Chuẩn hóa các trạng thái UI giúp app chuyên nghiệp và dễ tái sử dụng.

### StatusStates Components

```tsx
// src/components/ui/StatusStates.tsx
export const LoadingState = () => (
  <div className="flex flex-col items-center justify-center p-20 gap-4">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-gray-500 animate-pulse">Đang tải dữ liệu...</p>
  </div>
);

export const ErrorState = ({
  message = "Đã có lỗi xảy ra",
}: {
  message?: string;
}) => (
  <div className="p-10 border border-red-200 bg-red-50 text-red-600 rounded-lg text-center">
    <p className="font-bold">Oops!</p>
    <p>{message}</p>
    <button className="mt-4 underline" onClick={() => window.location.reload()}>
      Thử lại
    </button>
  </div>
);
```

### Áp dụng trong Component

```tsx
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch(() => setError("Không tải được dữ liệu"))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  return <div>{user?.name}</div>;
}
```

---

## 4. ZUSTAND: GLOBAL STATE MANAGER 🐻

### Tại sao dùng Zustand?

| Đặc điểm        | Context API           | Redux                        | Zustand            |
| :-------------- | :-------------------- | :--------------------------- | :----------------- |
| **Setup**       | Đơn giản              | Phức tạp (nhiều boilerplate) | Cực đơn giản       |
| **Performance** | Re-render toàn bộ cây | Tốt (với selector)           | Tốt (với selector) |
| **Code**        | Ít code               | Nhiều code                   | Rất ít code        |
| **Use Case**    | Theme, User nhẹ       | App lớn, phức tạp            | Hầu hết cases      |

> **💡 Ẩn dụ:**
>
> - **Redux:** Bộ máy hành chính cồng kềnh. Muốn sửa dữ liệu phải qua 3-4 cửa.
> - **Context API:** Hệ thống loa phát thanh. Dễ dùng nhưng re-render thừa.
> - **Zustand:** Biến toàn cục siêu thông minh. Component nào cần "móc" vào lấy.

---

## 5. SETUP ZUSTAND AUTH STORE 🔧

### Cài đặt

```bash
npm install zustand
```

### Tạo Auth Store cơ bản

```ts
// src/stores/auth.store.ts
import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;

  // Actions
  setTokens: (access: string, refresh: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // Initial state
  accessToken: null,
  refreshToken: null,

  // Actions
  setTokens: (access, refresh) =>
    set({ accessToken: access, refreshToken: refresh }),

  clearTokens: () => set({ accessToken: null, refreshToken: null }),
}));
```

---

## 6. PERSISTENCE: LƯU TOKEN VÀO LOCALSTORAGE 💾

### Thêm Persist Middleware

```ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  /* như trên */
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setTokens: (access, refresh) =>
        set({ accessToken: access, refreshToken: refresh }),
      clearTokens: () => set({ accessToken: null, refreshToken: null }),
    }),
    {
      name: "shopping-card-auth", // Key trong LocalStorage
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
```

> **Kết quả:** F5 lại trang → Token vẫn còn (lưu trong LocalStorage).  
> Kiểm tra: DevTools → Application → Local Storage → `shopping-card-auth`

---

## 7. SELECTOR PATTERN: TỐI ƯU HIỆU NĂNG ⚡

### ❌ TUYỆT ĐỐI KHÔNG: Lấy toàn bộ Store

```tsx
// ❌ SAI - Component re-render khi BẤT KỲ field nào trong store đổi
function Header() {
  const store = useAuthStore(); // Lấy TOÀN BỘ
  const isAuthed = !!store.accessToken;

  // Bug: Header re-render khi refreshToken đổi (dù không dùng)
  return <div>{isAuthed ? "Logged In" : "Guest"}</div>;
}
```

### ✅ ĐÚNG: Selector Pattern

```tsx
// ✅ Pattern 1: Lấy 1 field
function Header() {
  const isAuthed = useAuthStore((state) => !!state.accessToken);
  // Component CHỈ re-render khi accessToken đổi

  return <div>{isAuthed ? "Logged In" : "Guest"}</div>;
}

// ✅ Pattern 2: Lấy action
function LoginPage() {
  const setTokens = useAuthStore((state) => state.setTokens);

  const handleLogin = () => {
    setTokens("ey...fake-access", "ey...fake-refresh");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## ✅ CHECKLIST BÀI TẬP VỀ NHÀ

ÔN KĨ KIẾN THỨC VỀ ROUTING, USEEFECT, ZUSTAND, đầu giờ khảo bài

---

> **Ghi nhớ:**
>
> - Effect để đồng bộ với THẾ GIỚI BÊN NGOÀI. Mọi thứ trong React → tính trực tiếp.
> - Zustand mạnh nhất khi dùng đúng Selector Pattern. Đừng lấy toàn bộ store – chỉ lấy thứ bạn cần.
