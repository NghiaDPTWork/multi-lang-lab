import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireUnAuth = () => {
  // Giả sử token được lưu trong localStorage sau khi đăng nhập thành công
  const token = localStorage.getItem("accessToken");
  const location = useLocation();
  if (token) {
    // Nếu đã có token, chuyển hướng đến trang home hoặc trang trước đó
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
  // Cho phép truy cập vào các trang con nếu không có token
};

export default RequireUnAuth;
