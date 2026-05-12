function counter(value) {
  // BUG: value++ là post-increment operator. Nó sẽ trả về giá trị BAN ĐẦU trước khi tăng.
  // Kết quả là hàm luôn trả về giá trị cũ, không bao giờ tăng được.
  return value++;
}

function notification(value) {
  if (value > 0 && value <= 3) {
    return "Normal";
  } else if (value > 3) {
    return "Getting high ...";
  } else {
    // LOGIC ERROR: Nhánh else này sẽ chạy khi value <= 0. 
    // Trả về "Too many ..." cho số <= 0 là hoàn toàn ngược logic. 
    // Đáng lẽ "Too many" phải dành cho ngưỡng cao nhất (ví dụ > 10).
    return "Too many ...";
  }
}

// ARCHITECTURAL BUG: Thiếu liên kết logic với DOM (Document Object Model)
// Hiện tại file JavaScript chỉ mới khai báo các hàm rời rạc, hoàn toàn CHƯA CÓ:
// 1. Câu lệnh lấy phần tử từ HTML (ví dụ: document.querySelector('#value'))
// 2. Sự kiện lắng nghe khi người dùng click chuột (ví dụ: .addEventListener('click', ...))
// 3. Logic cập nhật giao diện khi dữ liệu thay đổi (chèn text vào HTML).
// Vì vậy, khi chạy trang web, bấm nút "Count" sẽ không bao giờ kích hoạt được code trong file này!
