import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Học React căn bản",
    "Làm bài tập JavaScript",
    "Đi chợ mua đồ",
  ]);

  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleDeleteTodo = (indexToDelete: number) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  // BƯỚC TIẾP THEO: Hàm dọn sạch toàn bộ danh sách (Clear All)
  const handleClearAll = () => {
    // Truyền một mảng rỗng [] để xoá sạch sành sanh mọi thứ
    setTodos([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-20 font-sans text-slate-800">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-slate-200">
        
        <h1 className="text-2xl font-bold text-emerald-600 text-center mb-6">
          To-do List
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Nhập công việc mới..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Thêm
          </button>
        </div>

        <p className="text-xs text-slate-400 italic text-center mb-4">
          Đang nhập: {todo || "..."}
        </p>

        <ul className="space-y-2">
          {todos.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-slate-100 px-3 py-2 rounded-lg text-slate-700 border border-slate-200 hover:bg-slate-200/50 transition-colors"
            >
              <span className="font-medium">{item}</span>

              <button
                onClick={() => handleDeleteTodo(index)}
                className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors"
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>

        {/* BƯỚC MỚI: THÀNH PHẦN THỐNG KÊ VÀ DỌN DẸP NHANH */}
        {/* Chỉ hiển thị thanh này nếu có ít nhất 1 công việc trong danh sách (Conditional Rendering) */}
        {todos.length > 0 && (
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
            {/* Đếm số lượng động bằng độ dài của mảng (.length) */}
            <span className="text-xs text-slate-500">
              Bạn đang có <strong className="text-slate-700">{todos.length}</strong> công việc
            </span>

            {/* Nút kích hoạt việc xoá sạch danh sách */}
            <button
              onClick={handleClearAll}
              className="text-xs font-medium text-slate-400 hover:text-red-500 hover:underline transition-colors"
            >
              Xóa tất cả
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
