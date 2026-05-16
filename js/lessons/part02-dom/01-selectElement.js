/* 
    =================================================
    KIẾN THỨC: DOM - SELECT ELEMENT & EVENTS
    =================================================
    
    1. SELECT ELEMENT (Chọn phần tử)
       - getElementById("id"): Chọn theo ID.
       - querySelector("selector"): Chọn 1 phần tử theo CSS selector (#id, .class, tag).
       - querySelectorAll("selector"): Chọn tất cả (trả về NodeList có thể dùng forEach).
       - getElementsByClassName: Trả về HTMLCollection (không có forEach, cần dùng spread [...] để chuyển sang mảng).

    2. ĐIỀU HƯỚNG (TRAVERSING)
       - children: Lấy các Node con là Element.
       - parentElement: Lấy Node cha.
       - nextElementSibling: Lấy anh em kế tiếp.

    3. THAO TÁC ELEMENT
       - createElement("tag"): Tạo Node mới.
       - classList.add/remove("class"): Thêm/xóa class.
       - innerHTML: Gán nội dung HTML (cẩn thận XSS).
       - textContent: Gán nội dung văn bản thuần.
       - appendChild(node): Thêm node vào cuối danh sách con.

    4. ATTRIBUTES & DATASET
       - setAttribute / getAttribute: Thao tác thuộc tính HTML.
       - dataset: Truy cập các thuộc tính data-* (ví dụ: data-id -> element.dataset.id).

    5. SỰ KIỆN (EVENTS)
       - addEventListener("event", callback): Lắng nghe sự kiện (click, dblclick, mouseover, change, input...).
       - event.target: Đối tượng phát sinh sự kiện.

    6. LƯU TRỮ (LOCAL STORAGE & COOKIES)
       - Cookies: Lưu trữ nhỏ, có thể gửi lên server, bảo mật hơn nếu cấu hình đúng.
       - LocalStorage: Lưu trữ lớn ở máy khách, vĩnh viễn, chỉ lưu String/JSON.
*/

// TOPIC: Chọn phần tử và điều hướng
let inputNode = document.querySelector("#name");
let card = document.querySelector(".card");
console.log(card.parentElement);

// TOPIC: Tạo mới và thêm Element
let newCard = document.createElement("div");
newCard.classList.add("card", "p-1");
newCard.innerHTML = "<h1>New Card</h1>";
document.querySelector(".card-list").appendChild(newCard);

// TOPIC: Lắng nghe sự kiện Click
let btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", (event) => {
  let val = inputNode.value;
  console.log("Input value:", val);
});

// TOPIC: LocalStorage (Lưu trữ Object)
const profile = { name: "Nghĩa", age: 26 };
localStorage.setItem("profile", JSON.stringify(profile));
console.log(JSON.parse(localStorage.getItem("profile")));
