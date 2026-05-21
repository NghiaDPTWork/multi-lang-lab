import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Lấy địa chỉ user muốn đến dự định ban đầu
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    // Mock lưu token
    localStorage.setItem("accessToken", "fake-token-123456");

    // 2. Login xong quay lại đúng trang cũ
    // Nếu không cho nhảy về trang cũ (vì auth role) thì mình dùng
    // replace: true
    // 1 -> 2 -> 3
    // 1 -> 2 -> 3 -> 2 (nếu không dùng replace)
    // 1 -> 3 -> 3 (nếu dùng replace)
    navigate(from, { replace: true });
    // Chưa demo được ở đây đâu
  };

  return (
    <div className="p-8">
      {location.state?.from && (
        <p className="text-orange-600 mb-4">
          ⚠️ Bạn cần đăng nhập để truy cập {location.state.from.pathname}
        </p>
      )}
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white p-3 rounded"
      >
        Đăng nhập & Tiếp tục
      </button>
    </div>
  );
}
