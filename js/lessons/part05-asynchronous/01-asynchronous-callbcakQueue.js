/* 
    =================================================
    KIẾN THỨC: ASYNCHRONOUS & EVENT LOOP
    =================================================
    
    1. ĐƠN LUỒNG vs ĐA LUỒNG
       - JS là ngôn ngữ đơn luồng (Single-thread): Chỉ làm một việc tại một thời điểm.
       - Browser (Web APIs) hỗ trợ đa luồng: Giúp JS xử lý các tác vụ nặng (DOM, AJAX, Timeout) mà không làm đứng trang.

    2. CƠ CHẾ BẤT ĐỒNG BỘ (ASYNCHRONOUS)
       - Đồng bộ (Synchronous): Phải đợi tác vụ trước xong mới làm tiếp (L1 xong mới tới L2).
       - Bất đồng bộ (Asynchronous): Không đợi, cho phép tác vụ chạy ngầm và thông báo kết quả sau qua Callback/Promise.

    3. CÁC THÀNH PHẦN QUAN TRỌNG
       - Call Stack: Nơi chứa các lệnh đang thực thi (LIFO).
       - Web APIs: Nơi xử lý các tác vụ bất đồng bộ của trình duyệt.
       - Callback Queue: Nơi chứa các hàm callback đang chờ để được đưa vào Stack.
       - Event Loop: Luôn kiểm tra Stack, nếu Stack trống sẽ lấy hàm từ Queue đưa vào Stack để chạy.
*/

// TOPIC: Minh họa Bất đồng bộ với setTimeout
console.log("1. Bắt đầu");

setTimeout(() => {
  console.log("2. Tác vụ chạy ngầm hoàn tất (sau 1s)");
}, 1000);

console.log("3. Kết thúc (Lệnh này chạy trước khi setTimeout xong)");

// TOPIC: Callback đơn giản
function fetchData(callback) {
  console.log("Đang lấy dữ liệu...");
  setTimeout(() => {
    callback("Dữ liệu từ Server");
  }, 2000);
}

fetchData((res) => {
  console.log("Nhận kết quả:", res);
});
