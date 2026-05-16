/* 
    =================================================
    KIẾN THỨC: OBJECT METHOD - THIS - HOF - BIND
    =================================================
    
    1. OBJECT METHOD
       - Method là hàm được sở hữu bởi Object/Class.
       - Frozen Object: Chặn việc thêm thuộc tính mới vào Object.

    2. CƠ CHẾ "THIS" NÂNG CAO
       - this chỉ có giá trị khi runtime (khi hàm được gọi).
       - fd/fe giam this => lệ thuộc người gọi.
       - fa (arrow) thả this => tìm scope cha.
       - Khi lồng hàm: Nên dùng fa bên trong để giữ đúng this của hàm cha.

    3. HIGH ORDER FUNCTION (HOF)
       - Callback: Hàm nhận hàm làm đối số (forEach, setTimeout).
       - Closure: Hàm return ra một hàm khác. Giúp tạo biến private/id không trùng.
       - Lexical Scoping: Hàm con sử dụng biến của hàm cha.
       - Currying: Kỹ thuật tách đối số thành nhiều lượt gọi hàm.

    4. CALL - APPLY - BIND
       - Dùng để hiệu chỉnh/ép buộc giá trị của "this".
       - Call: Truyền tham số rời rạc.
       - Apply: Truyền tham số dưới dạng mảng [].
       - Bind: Tạo ra hàm mới với "this" được mượn, không chạy ngay.

    5. DATETIME TRONG JS
       - Là Object, dựa trên miliseconds tính từ 1/1/1970 (UTC).
       - Các method: getDate(), getMonth() (0-11), getFullYear(), toISOString().
*/

// TOPIC: Phân biệt "this" trong FD và FA
let user = {
  name: "Nghĩa",
  showFD() { console.log(this.name); }, // fd giam this -> Nghĩa
  showFA: () => { console.log(this.name); } // fa thả this -> window.name -> undefined
};
user.showFD();
user.showFA();

// TOPIC: HOF - Closure ứng dụng tạo ID
const initIdentity = () => {
  let newID = 0;
  return () => ++newID;
};
let getNextID = initIdentity();
console.log(getNextID()); // 1
console.log(getNextID()); // 2

// TOPIC: Call, Apply và Bind
const people = {
  print(age) { console.log(this.fullName + " " + age); }
};
const person = { fullName: "Lê Mười Điệp" };

people.print.call(person, 10); // Call
people.print.apply(person, [10]); // Apply
let boundFunc = people.print.bind(person, 10); // Bind
boundFunc();

// TOPIC: Date time
let now = new Date();
console.log(now.toISOString()); // Chuẩn database ISO8601
