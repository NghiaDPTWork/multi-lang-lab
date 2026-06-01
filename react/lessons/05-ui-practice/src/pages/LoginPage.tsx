import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Lấy địa chỉ user muốn đến dự định ban đầu
  const from = location.state?.from?.pathname || "/";
  const setToken = useAuthStore((state) => state.setTokens);

  const handleLogin = () => {
    // mock delay to feel like logging in, or do it immediately
    setToken("fake-token-123456", "fake-refresh-token-654321");
    navigate(from, { replace: true });
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
        className="bg-blue-600 text-white p-3 rounded cursor-pointer hover:bg-blue-700 transition-colors"
      >
        Đăng nhập & Tiếp tục
      </button>
    </div>
  );
}
