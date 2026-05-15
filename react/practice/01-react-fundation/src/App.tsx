import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Học React căn bản", completed: false },
    {
      id: crypto.randomUUID(),
      text: "Làm bài tập JavaScript",
      completed: false,
    },
    { id: crypto.randomUUID(), text: "Đi chợ mua đồ", completed: true },
  ]);

  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("ALL");

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: todo, completed: false },
    ]);
    setTodo("");
  };

  // .fliter() for delete
  // mindset flow for solve problem: that loop through item and which one
  // has same id - choose or expect => Diffrent size of items
  const handleDeleteTodo = (idToDelete: string) => {
    const updatedTodos = todos.filter((item) => item.id !== idToDelete);
    setTodos(updatedTodos);
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  //.map() for update
  // mindset flow for solve problem: that loop through item and which one
  // has same id - changing status => Same size of items
  const handleToggleTodo = (idToToggle: string) => {
    const updatedTodos = todos.map((item) =>
      item.id === idToToggle ? { ...item, completed: !item.completed } : item,
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((item) => {
    if (filter === "DONE") return item.completed;
    if (filter === "NOT_YET") return !item.completed;
    return true;
  });

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
            // From controller
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

        <div className="flex justify-center gap-2 mb-4 border-b border-slate-100 pb-3">
          <button
            onClick={() => setFilter("ALL")}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter("DONE")}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Đã xong
          </button>
          <button
            onClick={() => setFilter("NOT_YET")}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Chưa xong
          </button>
        </div>

        <ul className="space-y-2">
          {filteredTodos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              // This is REMOTE CONTROL
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
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
