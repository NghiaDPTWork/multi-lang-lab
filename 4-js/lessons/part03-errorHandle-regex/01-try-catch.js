/* 
    =================================================
    KIẾN THỨC: ERROR HANDLING (TRY-CATCH) & REGEX
    =================================================
    
    1. CÁC LOẠI LỖI
       - Runtime Error: Lỗi khi chạy (do dữ liệu, người dùng). Xử lý bằng try-catch.
       - Syntax Error: Sai cú pháp (do người code).
       - Logic Error: Sai thuật toán, khó bắt nhất.

    2. CẤU TRÚC ĐỐI TƯỢNG ERROR
       - name: Tên loại lỗi.
       - message: Thông điệp mô tả lỗi.
       - stack: Cây thư mục dẫn đến lỗi (nên che giấu ở môi trường production để bảo mật).

    3. KỸ THUẬT XỬ LÝ LỖI
       - Try-Catch: Chỉ bắt được lỗi đồng bộ. Với bất đồng bộ (setTimeout), cần bọc try-catch bên trong callback.
       - Throw: Chủ động ném lỗi để chuyển luồng xử lý sang catch.
       - Custom Error: Tạo class lỗi riêng (extends Error) để quản lý mã lỗi/status tốt hơn.

    4. REGEX (BIỂU THỨC CHÍNH QUY)
       - ^ : Bắt đầu chuỗi.
       - $ : Kết thúc chuỗi.
       - . : Ký tự bất kỳ.
       - *, +, ? : Lặp lại 0-n, 1-n, 0-1 lần.
       - \d (số), \w (chữ & số), \s (khoảng trắng).
       - \b : Ký tự biên (boundary).
       - test(): Kiểm tra chuỗi có khớp pattern không (trả về true/false).
*/

// TOPIC: Xử lý lỗi đồng bộ
try {
  let a = b + 1; // Lỗi ReferenceError
} catch (error) {
  console.log("Message:", error.message);
}

// TOPIC: Custom Error class
class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
try {
  throw new ApiError(404, "Không tìm thấy dữ liệu");
} catch (err) {
  console.log(`${err.status}: ${err.message}`);
}

// TOPIC: Sử dụng Regex cơ bản
let pattern = /name/i; // i: không phân biệt hoa thường
console.log(pattern.test("My name is Nghia")); // true
console.log("NghiaDPT".match(/[A-Z]/g)); // Tìm các chữ hoa -> ["N", "D", "P", "T"]
