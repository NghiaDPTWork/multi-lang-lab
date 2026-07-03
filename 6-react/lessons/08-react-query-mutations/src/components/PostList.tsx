import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error("Không thể tải danh sách");
  return res.json();
};

export default function PostList() {
  const { data: posts, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p className="text-gray-500">Đang tải danh sách bài viết...</p>;
  if (error) return <p className="text-red-500">Lỗi: {error.message}</p>;

  return (
    <div className="space-y-2">
      <h3 className="font-bold text-lg">Danh sách bài viết (Đầu tiên)</h3>
      <ul className="border rounded bg-white divide-y shadow-xs">
        {posts?.map((post) => (
          <li key={post.id} className="p-3 text-sm hover:bg-gray-50">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
