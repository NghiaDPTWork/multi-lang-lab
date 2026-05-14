import { useState } from "react"; // 1. Nhập khẩu (import) useState để sử dụng vùng nhớ cho App

function App() {
  const todos = [
    "Học React căn bản",
    "Làm bài tập JavaScript",
    "Đi chợ mua đồ",
  ];

  const [todo, setTodo] = useState("");

  return (
    <div>
      <h1>To-do List</h1>

      <div>
        <input
          type="text"
          placeholder="Nhập công việc mới..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Thêm</button>
      </div>

      <p style={{ color: "gray" }}>
        Nội dung bạn đang nhập: <b>{todo}</b>
      </p>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
