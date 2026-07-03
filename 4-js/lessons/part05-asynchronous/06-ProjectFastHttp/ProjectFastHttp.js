/* 
    =================================================
    PROJECT: FAST HTTP (THƯ VIỆN GỌI API)
    =================================================
    
    1. MỤC TIÊU DỰ ÁN
       - Xây dựng một Library (Thư viện) riêng để xử lý các yêu cầu HTTP (GET, POST, PUT, DELETE).
       - Thực hành Fetch API và xử lý Promise/Async-Await.
       - Thực hành đóng gói logic vào Class để tái sử dụng.

    2. CÁC PHƯƠNG THỨC CHÍNH
       - get(url): Lấy dữ liệu.
       - post(url, body): Thêm mới dữ liệu.
       - put(url, body): Cập nhật dữ liệu.
       - delete(url): Xóa dữ liệu.
*/

// TOPIC: Định nghĩa lớp Http (Thư viện)
class Http {
  async send(method, url, body) {
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });
    if (response.ok) return await response.json();
    throw new Error(response.statusText);
  }

  get(url) { return this.send("GET", url, null); }
  post(url, body) { return this.send("POST", url, body); }
  put(url, body) { return this.send("PUT", url, body); }
  delete(url) { return this.send("DELETE", url, null); }
}

// TOPIC: Sử dụng thư viện thực tế
const BASE_URL = "https://69057f5cee3d0d14c132c76a.mockapi.io/users";
const http = new Http();

(async () => {
  try {
    console.log("--- Đang lấy danh sách người dùng ---");
    const users = await http.get(BASE_URL);
    console.table(users);
  } catch (err) {
    console.error("Lỗi API:", err);
  }
})();
