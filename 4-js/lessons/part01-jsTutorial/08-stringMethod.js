/* 
    =================================================
    KIẾN THỨC: STRING METHODS (CHUỖI)
    =================================================
    
    1. THUỘC TÍNH VÀ TÌM KIẾM
       - length: Độ dài chuỗi (Property).
       - indexOf() / lastIndexOf(): Tìm vị trí ký tự đầu/cuối. Trả về -1 nếu không thấy.

    2. TRÍCH XUẤT CHUỖI
       - slice(start, end): Cắt chuỗi, hỗ trợ chỉ mục âm (cắt từ cuối).
       - substring(start, end): Cắt chuỗi, tự hoán đổi start/end nếu start > end, không hỗ trợ chỉ mục âm.

    3. THAY THẾ VÀ BIẾN ĐỔI
       - replace() / replaceAll(): Thay thế ký tự (có thể dùng Regex).
       - toUpperCase() / toLowerCase(): Chuyển đổi hoa/thường.
       - trim() / trimStart() / trimEnd(): Xóa khoảng trắng dư thừa.

    4. NỐI CHUỖI
       - Dùng concat(), toán tử +, hoặc Template Literals `${}` (Khuyên dùng).

    5. LIÊN KẾT MẢNG VÀ CHUỖI
       - split(delimiter): Băm chuỗi thành mảng.
       - join(delimiter): Nối mảng thành chuỗi (method của Array).
*/

// TOPIC: Trích xuất chuỗi (Slice)
let x = "Xin Chào Piedteam, Mình là Nghĩa";
console.log(x.slice(9, 17)); // "Piedteam"
console.log(x.slice(-14));    // "Mình là Nghĩa"

// TOPIC: Thay thế (Replace)
let str = "Dương Nghĩa, xin chào mọi người, Nghĩa";
console.log(str.replace(/Nghĩa/g, "Nhân")); // Dùng Regex thay hết

// TOPIC: Template Literals
let s1 = "Xin chào";
let s2 = "PiedTeam";
console.log(`${s1} mừng bạn đến với ${s2}`);

// TOPIC: Split và Join
let list = "Táo, Cam, Chuối";
let arr = list.split(", "); // ["Táo", "Cam", "Chuối"]
console.log(arr.join(" - ")); // "Táo - Cam - Chuối"
