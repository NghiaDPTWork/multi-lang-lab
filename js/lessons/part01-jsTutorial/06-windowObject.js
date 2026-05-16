/* 
    =================================================
    KIẾN THỨC: WINDOW OBJECT (WO)
    =================================================
    
    1. ĐỊNH NGHĨA
       - Window Object đại diện cho cửa sổ trình duyệt.
       - Là Object cao nhất (Global Object) trong môi trường Browser.
       - Tất cả biến (var), hàm (fd) đều trở thành thuộc tính của Window.

    2. CÁC THUỘC TÍNH PHỔ BIẾN
       - innerHeight, innerWidth: Kích thước cửa sổ.
       - location: Thông tin URL hiện tại.
       - navigator: Thông tin trình duyệt và thiết bị người dùng.
       - history: Lịch sử duyệt web của tab hiện tại.
       - document: Cổng vào DOM (Document Object Model).

    3. POP-UP TRÌNH DUYỆT
       - Alert: Thông báo.
       - Confirm: Xác nhận Yes/No (trả về true/false).
       - Prompt: Nhập liệu từ người dùng.
*/

// TOPIC: Kích thước trình duyệt
console.log(window.innerHeight);
console.log(window.innerWidth);

// TOPIC: Thao tác Window
// window.open("https://google.com", "_blank", "width=500,height=500");

// TOPIC: Thông tin Navigator và Location
console.log(window.location.href);
console.log(window.navigator.userAgent);
