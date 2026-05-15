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
  const [searchTerm, setSearchTerm] = useState("");

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
    const matchesFilter =
      filter === "ALL" ||
      (filter === "DONE" && item.completed) ||
      (filter === "NOT_YET" && !item.completed);

    if (!matchesFilter) return false;

    return item.text.toLowerCase().includes(searchTerm.toLowerCase().trim());
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

        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            />
          </div>
          <div className="relative w-32">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full appearance-none pl-3 pr-8 py-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none cursor-pointer transition-all"
            >
              <option value="ALL">Tất cả</option>
              <option value="DONE">Đã xong</option>
              <option value="NOT_YET">Chưa xong</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
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
