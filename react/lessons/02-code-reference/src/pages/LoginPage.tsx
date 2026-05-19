import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Lấy đường dẫn trước đó từ state (nếu có) để chuyển hướng sau khi login

  const handleLogin = () => {
    // alert("Login successful now come to Home Page!");
    // Mock token sau khi login
    localStorage.setItem("accessToken", "fake-token-123-abc");
    navigate("/"); // Chuyển về trang Home sau khi login
  };
  return (
    <div>
      <h1 className="mb-4 pb-4">Login Page content display here ...</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
