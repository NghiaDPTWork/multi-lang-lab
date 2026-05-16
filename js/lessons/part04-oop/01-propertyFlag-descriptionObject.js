/* 
    =================================================
    KIẾN THỨC: OOP - PROPERTY FLAGS & DESCRIPTOR
    =================================================
    
    1. PROPERTY FLAGS (Bộ cờ thuộc tính)
       - value: Giá trị thuộc tính.
       - writable: true (sửa được), false (chỉ đọc).
       - enumerable: true (xuất hiện khi lặp for-in), false (ẩn khi lặp).
       - configurable: true (có thể xóa hoặc đổi bộ cờ), false (khóa thuộc tính).

    2. CÁC PHƯƠNG THỨC QUẢN LÝ CỜ
       - Object.getOwnPropertyDescriptor(obj, prop): Xem bộ cờ của 1 thuộc tính.
       - Object.defineProperty(obj, prop, descriptor): Định nghĩa/Sửa bộ cờ.
       - Lưu ý: Nếu dùng defineProperty để tạo thuộc tính mới mà không set flag, mặc định sẽ là FALSE.

    3. NIÊM PHONG ĐỐI TƯỢNG (SEALING)
       - Object.preventExtensions(obj): Cấm thêm thuộc tính mới.
       - Object.seal(obj): Cấm thêm/xóa, nhưng có thể sửa giá trị nếu writable: true.
       - Object.freeze(obj): Cấm thêm/xóa/sửa (Read-only hoàn toàn).

    4. ACCESSOR PROPERTIES (GETTER & SETTER)
       - get fullname(): Hàm lấy giá trị (truy cập như một biến).
       - set fullname(value): Hàm gán giá trị, dùng để lọc/kiểm tra dữ liệu trước khi lưu.
       - Tiền tố _ (ví dụ _name) thường dùng để quy ước thuộc tính private.
*/

// TOPIC: Xem và sửa Property Flags
let user = { name: "Nghĩa" };
console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "id", {
  value: "SE01",
  writable: false,
  enumerable: true
});

// TOPIC: Getter và Setter
let student = {
  _fname: "",
  get fname() { return this._fname; },
  set fname(val) {
    if (val.length < 4) {
      console.log("Tên quá ngắn!");
      return;
    }
    this._fname = val;
  }
};
student.fname = "Nghia"; // OK
student.fname = "An";    // Log: Tên quá ngắn!

// TOPIC: Clone Object kèm theo bộ cờ
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
