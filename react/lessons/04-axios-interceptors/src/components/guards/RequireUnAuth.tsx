import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/auth.store";

const RequireUnAuth = () => {
  // Giả sử token được lưu trong localStorage sau khi đăng nhập thành công
  // const token = localStorage.getItem("accessToken");
  // Sử dụng Zustand store để lấy token
  const token = useAuthStore((state) => state.accessToken);
  const location = useLocation();
  if (token) {
    // Nếu đã có token, chuyển hướng đến trang home hoặc trang trước đó
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }
  return <Outlet />;
  // Cho phép truy cập vào các trang con nếu không có token
};

export default RequireUnAuth;
