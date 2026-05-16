/* 
    =================================================
    KIẾN THỨC: ARRAY VÀ OBJECT METHODS
    =================================================
    
    1. ĐẶC ĐIỂM MẢNG (ARRAY)
       - Chứa được nhiều kiểu dữ liệu khác nhau.
       - Là Mutable (có thể thay đổi giá trị trực tiếp).

    2. CÁC NHÓM METHOD MẢNG
       - Thay đổi mảng gốc: push(), pop() (cuối); unshift(), shift() (đầu); splice() (vị trí bất kỳ); sort(), reverse().
       - Không đổi mảng gốc (trả về bản sao/mảng mới): slice(), concat(), spread operator (...).
       - Xử lý dữ liệu (Dùng CallBack): 
           + map(): Biến đổi ptu.
           + filter(): Lọc ptu.
           + reduce(): Dồn ptu thành 1 giá trị duy nhất.
           + find() / findIndex(): Tìm ptu đầu tiên thỏa điều kiện.
           + every() / some(): Kiểm tra điều kiện trên toàn bộ/một phần mảng.

    3. OBJECT METHODS
       - delete object.property: Xóa thuộc tính (không để lại lỗ trống như delete array).
       - Object.assign(): Merge object (Shallow copy - cẩn thận khi dùng).
       - Spread Operator {...obj}: Merge object (An toàn hơn).
       - Object.keys() / Object.values(): Lấy mảng các key hoặc value.
*/

// TOPIC: Thêm/Xóa phần tử (Push, Pop, Shift, Unshift)
let list = ["Huệ", "Lan"];
list.push("Trà"); // ["Huệ", "Lan", "Trà"]
list.shift();    // ["Lan", "Trà"]

// TOPIC: Cắt và Chèn (Splice)
list.splice(1, 0, "Cúc"); // Chèn "Cúc" vào vị trí 1 -> ["Lan", "Cúc", "Trà"]

// TOPIC: Xử lý dữ liệu nâng cao (Filter, Map, Reduce)
let nums = [1, 2, 3, 4, 5];
let odds = nums.filter(n => n % 2 !== 0); // [1, 3, 5]
let double = nums.map(n => n * 2);        // [2, 4, 6, 8, 10]
let total = nums.reduce((sum, n) => sum + n, 0); // 15

// TOPIC: Object Spread và Keys/Values
let person = { name: "Nghĩa", age: 24 };
let job = { company: "PiedTeam", title: "Dev" };
let combined = { ...person, ...job };

console.log(Object.keys(combined)); // ["name", "age", "company", "title"]
