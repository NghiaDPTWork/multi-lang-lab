import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Đăng ký</h2>

      <form className="flex flex-col gap-4">
        {/* Họ và tên */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
          <input
            type="text"
            placeholder="Nguyễn Văn A"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mật khẩu */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Xác nhận mật khẩu */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nút Đăng ký */}
        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
        >
          Đăng ký
        </button>
      </form>

      {/* Link về đăng nhập */}
      <div className="text-center mt-4 text-xs text-gray-500">
        Đã có tài khoản?{" "}
        <Link to="/login" className="text-blue-600 underline font-medium hover:text-blue-800">
          Đăng nhập ngay
        </Link>
      </div>
    </div>
  );
}
