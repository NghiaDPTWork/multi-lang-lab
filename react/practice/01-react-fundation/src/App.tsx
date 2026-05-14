function App() {
  // BƯỚC 1: Tạo một danh sách "cứng" (tĩnh) bằng mảng các chuỗi để tập hiển thị dữ liệu
  const todos = [
    "Học React căn bản",
    "Làm bài tập JavaScript",
    "Đi chợ mua đồ",
  ];

  return (
    <div>
      <h1>To-do List</h1>

      {/* Hiển thị danh sách ra màn hình bằng hàm .map() */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
