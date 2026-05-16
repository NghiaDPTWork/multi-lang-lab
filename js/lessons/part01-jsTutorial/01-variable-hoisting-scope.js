/* 
    =================================================
    KIẾN THỨC: JS - VARIABLE - HOISTING - SCOPE
    =================================================
    
    1. QUY TẮC ĐẶT TÊN
       - Không bắt đầu bằng số => phải bắt đầu bằng chữ.
       - camelCase (biến), under_score (database), PascalCase (class).
       - Được phép dùng _ và $ : thường dùng cho private.

    2. CƠ CHẾ HOISTING
       - Hoisting với var (Móc ngược lên): Chỉ diễn ra khi dùng biến trước khi khai báo.
       - Phản ứng với môi trường web để hạn chế lỗi/đứng web.
       - ES6 (2015): let và const ra đời để thay thế var, đặc biệt là KHÔNG có hoisting.

    3. CÁC HIỂU LẦM VỀ CONST
       - Const với Object/Array: Bản chất là lưu địa chỉ (con trỏ).
       - Có thể add/delete/update value của thuộc tính bên trong.
       - KHÔNG THỂ gán lại địa chỉ mới (vi phạm hằng số).

    4. SCOPE (PHẠM VI)
       - Global Scope: Toàn cục.
       - Function Scope: Nội hàm.
       - Block Scope: Cục bộ (if, for, ...).
       - var không bị can thiệp bởi bất kỳ scope nào (thành thuộc tính của Window).

    5. LƯU Ý KHÁC
       - JS là ngôn ngữ hướng kịch bản, đơn luồng nhưng có thể kết hợp thành đa luồng.
       - Normal Mode vs Use Strict: Use Strict nghiêm khắc hơn trong việc khai báo.
       - Khai báo var => tạo thuộc tính cho Object Window.
*/

// TOPIC: Khai báo biến và datatype
var name1 = "Nghĩa nè ...";
console.log(name1);

var age;
console.log(age); // undefined

// TOPIC: Const với Object và Array (Tính chất tham chiếu)
const prof = {
  name: "Toàn",
  height: 160,
};
prof.height = 170; // OK

const array1 = [1, 2, 3, 4, 5];
array1.push(6); // OK

// TOPIC: Scope (Phạm vi biến)
let hoa = "Toàn";
if (true) {
  // var hoa = "Hùng";
  // Sẽ gây lỗi nếu hoa đã khai báo bằng let ở scope ngoài
}
console.log(hoa);
