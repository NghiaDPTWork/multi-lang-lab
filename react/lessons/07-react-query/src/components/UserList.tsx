import { useQuery } from "@tanstack/react-query";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Mạng có sự cố, không thể tải dữ liệu");
  return res.json();
};

export default function UserList() {
  const { data: users, isLoading, error, refetch } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div className="text-gray-500">Đang tải danh sách người dùng từ API (React Query)...</div>;
  if (error) return <div className="text-red-500">Lỗi: {error.message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Danh sách người dùng (React Query)</h3>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
        >
          Làm mới API
        </button>
      </div>

      <ul className="divide-y border rounded bg-white overflow-hidden shadow-xs">
        {users?.map((user) => (
          <li key={user.id} className="p-3 flex justify-between items-center hover:bg-gray-50">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500">@{user.username}</p>
            </div>
            <span className="text-xs text-blue-600 font-mono">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
