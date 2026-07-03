import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newPost: { title: string; body: string; userId: number }) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!res.ok) throw new Error("Không thể tạo bài viết");
      return res.json();
    },
    onSuccess: (data) => {
      // Thông báo thành công
      alert("Tạo bài viết thành công: " + data.title);
      // Vô hiệu hóa cache danh sách posts để làm mới
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setTitle("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    mutation.mutate({ title, body: "Nội dung bài viết mẫu", userId: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 bg-white rounded shadow-xs space-y-3">
      <h3 className="font-bold text-lg">Tạo bài viết mới (useMutation)</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nhập tiêu đề bài viết..."
          className="flex-1 border p-2 rounded text-sm"
          disabled={mutation.isPending}
        />
        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm disabled:opacity-50 cursor-pointer"
        >
          {mutation.isPending ? "Đang gửi..." : "Đăng bài"}
        </button>
      </div>
      {mutation.isError && <p className="text-red-500 text-xs">Lỗi: {mutation.error.message}</p>}
    </form>
  );
}
