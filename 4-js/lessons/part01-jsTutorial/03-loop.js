/* 
    =================================================
    KIẾN THỨC: VÒNG LẶP (LOOP) TRONG JS
    =================================================
    
    1. PHÂN LOẠI TÁI SỬ DỤNG
       - Reuse (Dùng lại): Function.
       - Repeat (Lặp lại): Loop.

    2. CÁC LOẠI VÒNG LẶP
       - Vòng lặp cơ bản: for, while, do-while.
       - Vòng lặp cải tiến (Duyệt Iterable): for-in, for-of.

    3. CHI TIẾT CÁC VÒNG LẶP ĐẶC BIỆT
       - For-in: Duyệt qua KEY (thuộc tính) của Object.
       - For-of: Duyệt qua VALUE của các Iterable (Array, Set, Map, String...).
       - ForEach: Một phương thức (method) của Array, nhận vào một CallBack function.

    4. LƯU Ý VỀ SET VÀ ITERABLE
       - SET là tập hợp loại trùng, không có Key (Index) cố định nên không dùng for-in được.
       - Object thường không có tính khả lặp (Iterator) nên không dùng for-of trực tiếp được.
*/

// TOPIC: Duyệt Key bằng For-in (Dành cho Object)
let student1 = { name: "Diep", point: 10, major: "SA" };
for (const x in student1) {
  console.log(x); // name, point, major
  console.log(student1[x]); // Diep, 10, SA
}

// TOPIC: Duyệt Value bằng For-of (Dành cho Iterable như Array, Set)
let workList = ["Điệp", "Nghĩa", "Lan", "Điệp"];
for (const x of workList) {
  console.log(x);
}

let demoSet = new Set(["Điệp", "Nghĩa", "Lan", "Điệp"]);
for (const x of demoSet) {
  console.log(x); // Duyệt value trong Set
}

// TOPIC: Method ForEach (Sử dụng CallBack)
workList.forEach((value, key) => {
  console.log(`Index: ${key}, Value: ${value}`);
});
