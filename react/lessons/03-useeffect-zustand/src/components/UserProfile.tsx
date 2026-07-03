import { useState, useEffect } from "react";

export default function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Sử dụng Mock API placeholder
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Không tải được dữ liệu");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div className="text-gray-500">Đang tải thông tin người dùng...</div>;
  if (error) return <div className="text-red-500">Lỗi: {error}</div>;

  return (
    <div className="p-4 border rounded bg-card shadow-xs">
      <h3 className="font-bold text-lg text-primary">{user?.name}</h3>
      <p className="text-sm text-muted-foreground">Email: {user?.email}</p>
      <p className="text-sm text-muted-foreground">Điện thoại: {user?.phone}</p>
    </div>
  );
}
