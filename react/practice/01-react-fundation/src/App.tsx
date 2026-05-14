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

    // **** BANH XÁC NHA MÁ (Tính Bất biến - Immutability):
    setTodos([...todos, todo]);

    setTodo("");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-20 font-sans text-slate-800">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-slate-200">
        <h1 className="text-2xl font-bold text-indigo-600 text-center mb-6">
          To-do List
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Nhập công việc mới..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
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
              className="bg-slate-100 px-3 py-2 rounded-lg text-slate-700 border border-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
