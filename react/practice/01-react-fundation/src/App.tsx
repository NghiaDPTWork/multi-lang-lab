function App() {
  const todos = [
    "Học React căn bản",
    "Làm bài tập JavaScript",
    "Đi chợ mua đồ",
  ];

  return (
    <div>
      <h1>To-do List</h1>

      <div>
        <input type="text" placeholder="Nhập công việc mới..." />
        <button>Thêm</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
