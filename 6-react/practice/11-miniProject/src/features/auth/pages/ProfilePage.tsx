import { useGetMe } from "../hooks/useGetMe";
import { LoadingState, ErrorState } from "@/shared/components";

export default function ProfilePage() {
  const { data: user, isPending, isError, error } = useGetMe();

  if (isPending) {
    return <LoadingState message="Đang tải thông tin cá nhân..." />;
  }

  if (isError) {
    return (
      <ErrorState
        message={`Không thể lấy thông tin cá nhân: ${
          error.response?.data?.message || error.message
        }`}
      />
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Thông tin cá nhân
      </h2>

      <div className="space-y-4">
        <div className="border-b pb-2">
          <span className="text-xs text-gray-400 block">Họ và tên</span>
          <span className="text-gray-800 font-medium">
            {user.fullname || "Dương P. Trọng Nghĩa"}
          </span>
        </div>

        <div className="border-b pb-2">
          <span className="text-xs text-gray-400 block">Email</span>
          <span className="text-gray-800 font-medium">{user.email}</span>
        </div>

        <div className="border-b pb-2">
          <span className="text-xs text-gray-400 block">Vai trò</span>
          <span className="text-gray-800 font-medium uppercase">
            {user.role}
          </span>
        </div>

        <div>
          <span className="text-xs text-gray-400 block">
            Ngày tạo tài khoản
          </span>
          <span className="text-gray-800 font-medium">
            {new Date(user.createdAt).toLocaleDateString("vi-VN")}
          </span>
        </div>
      </div>
    </div>
  );
}
