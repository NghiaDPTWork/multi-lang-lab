/* 
    =================================================
    KIẾN THỨC: HÀM (FUNCTION) VÀ NUMBER METHOD
    =================================================
    
    1. PHÂN LOẠI HÀM
       - Function Declaration (Khai báo hàm): Có hoisting, là method của window.
       - Function Expression (Biểu thức hàm): Gán hàm vào biến, KHÔNG có hoisting.
       - IIFE (Immediately Invokable Function Expression): Hàm chạy ngay lập tức, không tái sử dụng.
       - Arrow Function: Cú pháp ngắn gọn, không giam "this" (thả this ra scope ngoài).
       - Callback Function: Hàm nhận một hàm khác làm đối số.

    2. CƠ CHẾ "THIS" TRONG HÀM
       - FD và FE: Giam this (xác định khi có người gọi).
       - Arrow Function: Thả this ra ngoài (luôn là window hoặc scope cha bọc nó).

    3. THAM SỐ (PARAMETER)
       - Default Parameter: Gán giá trị mặc định cho tham số.
       - Rest Parameter (...): Gom các tham số còn lại vào một mảng.

    4. NUMBER METHOD & LƯU Ý SỐ TRONG JS
       - JS dùng kiểu Number (64-bit float).
       - Độ chính xác: Số nguyên < 15 chữ số, số thực < 17 chữ số.
       - Phép cộng ưu tiên Chuỗi, các phép khác (-, *, /) ưu tiên Số.
       - toFixed(n): Làm tròn đến n chữ số thập phân.
*/

// TOPIC: Các loại khai báo hàm
function handle1() { console.log("Declaration"); } // Hoisting OK

let handle2 = () => { console.log("Expression/Arrow"); }; // No hoisting

(function() { console.log("IIFE"); })(); // Runs immediately

// TOPIC: Callback và setTimeout
setTimeout(() => {
  console.log("Ahihi đồ chó! (sau 3s)");
}, 3000);

// TOPIC: Rest Parameter và Spread
function sumAll(...numList) {
  return numList.reduce((sum, val) => sum + val, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// TOPIC: Number Methods
let x = 0.2 + 0.1;
console.log(x); // 0.30000000000000004
console.log(Number(x.toFixed(1))); // 0.3

console.log("2" + 2); // "22" (Cộng ưu tiên chuỗi)
console.log("2" - 2); // 0 (Trừ ưu tiên số)
