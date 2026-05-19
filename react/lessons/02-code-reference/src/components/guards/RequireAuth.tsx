import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  // Giả sử token được lưu trong localStorage sau khi đăng nhập thành công
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!token) {
    // Nì là đoạn code để chuyển hướng đến trang login nếu không có token
    // Còn nếu vừa đăng nhập xong sẽ đá về trang trước đó được lưu bởi hook useLocation() ở trên
    return <Navigate to="/login" state={{ from: location }} />;
    // Chuyển hướng đến trang login nếu không có token
  }
  return <Outlet />; // Cho phép truy cập vào các trang con nếu có token
};

export default RequireAuth;
