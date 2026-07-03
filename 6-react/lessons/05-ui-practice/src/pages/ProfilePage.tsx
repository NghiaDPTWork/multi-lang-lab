import { useEffect, useState } from "react";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "../components/ui/StatusStates";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/8")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi tải dữ liệu");
        } else {
          return response.json();
        }
      })
      .then((data) => setUser(data))
      .catch(() => setError("Không tải được dữ liệu"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!user)
    return <EmptyState message="Không tìm thấy thông tin người dùng" />;

  return (
    <div className="p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <p className="text-gray-600">Chào mừng bạn đã trở lại, {user?.name}!</p>
    </div>
  );
}
