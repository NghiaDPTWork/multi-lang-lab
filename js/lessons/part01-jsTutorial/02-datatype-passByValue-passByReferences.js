/* 
    =================================================
    KIẾN THỨC: DATATYPE - PASS BY VALUE - PASS BY REFERENCE
    =================================================
    
    I. PRIMITIVE DATATYPE (Kiểu nguyên thủy)
       - Number, String, Boolean.
       - Null: Rỗng (biết kiểu là Object, không biết giá trị).
       - Undefined: Rỗng (không biết kiểu, không biết giá trị).
       - Symbol (ES6): Chuỗi mã hóa dùng làm key ẩn.

    II. OBJECT DATATYPE (Kiểu đối tượng)
       - Array trong JS: Lưu nhiều KDL, không nhất thiết liền kề trong bộ nhớ.
       - Plain Object: Đối tượng siêu phẳng.
       - RegExp, Function: Thực chất cũng là Object.

    III. SO SÁNH (== vs ===)
       - == : So sánh giá trị (ép kiểu).
       - ===: So sánh cả giá trị và kiểu dữ liệu (nghiêm ngặt).

    IV. TRUYỀN THAM TRỊ vs THAM CHIẾU
       - Pass By Value (Tham trị): Copy giá trị sang vùng nhớ mới (áp dụng cho Primitive).
       - Pass By Reference (Tham chiếu): Copy địa chỉ vùng nhớ (áp dụng cho Object).

    V. LƯU Ý KHÁC
       - Falsy: null, undefined, 0, -0, "", false, NaN.
       - Truthy: Các giá trị ngược lại Falsy.
       - Wrapper Class: Number(), String(), Boolean() dùng để ép kiểu.
       - NaN: Not a Number (typeof là Number).
*/

// TOPIC: So sánh Null và Undefined
console.log(typeof undefined); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false (khác kiểu)

// TOPIC: Hoisting trong thuộc tính Object và Function
let khoa = { name: "Ngô Khoa", height: 180 };
console.log(khoa.nguoiYeu); // undefined

function handle1(a, b) {
  return b;
}
console.log(handle1(2)); // undefined (thiếu đối số b)

// TOPIC: Pass By Value (Tham trị)
let a = 1;
let b = a;
b = 2;
console.log(a, b); // 1 2

// TOPIC: Pass By Reference (Tham chiếu)
let boyFriend1 = { girlFriend: "Huệ", size: "H cub" };
let boyFriend2 = boyFriend1;
boyFriend1.size = "E cub";
console.log(boyFriend2.size); // "E cub"

// TOPIC: Toán tử logic && và ||
// &&: Tìm giá trị False đầu tiên.
// ||: Tìm giá trị True đầu tiên.
let diep = "Điệp Lê";
let isDepTrai = diep == "Điệp Lê" ? true : false;
