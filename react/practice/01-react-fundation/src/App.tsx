import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Học React căn bản", completed: false },
    { id: crypto.randomUUID(), text: "Làm bài tập JavaScript", completed: false },
    { id: crypto.randomUUID(), text: "Đi chợ mua đồ", completed: true },
  ]);

  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: todo, completed: false },
    ]);
    setTodo("");
  };

  const handleDeleteTodo = (idToDelete: string) => {
    const updatedTodos = todos.filter((item) => item.id !== idToDelete);
    setTodos(updatedTodos);
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  const handleToggleTodo = (idToToggle: string) => {
    const updatedTodos = todos.map((item) =>
      item.id === idToToggle ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
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
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-slate-100 px-3 py-2 rounded-lg text-slate-700 border border-slate-200 hover:bg-slate-200/50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleToggleTodo(item.id)}
                  className="w-4 h-4 rounded text-emerald-600 border-slate-300 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                />
                <span
                  className={`font-medium transition-all cursor-pointer ${
                    item.completed ? "line-through text-slate-400 italic" : ""
                  }`}
                  onClick={() => handleToggleTodo(item.id)}
                >
                  {item.text}
                </span>
              </div>

              <button
                onClick={() => handleDeleteTodo(item.id)}
                className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors ml-2"
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>

        {todos.length > 0 && (
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Bạn đang có{" "}
              <strong className="text-slate-700">{todos.length}</strong> công
              việc
            </span>

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
