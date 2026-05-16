/* 
    =================================================
    PROJECT: STUDENT MANAGEMENT (QUẢN LÝ SINH VIÊN)
    =================================================
    
    1. MỤC TIÊU DỰ ÁN
       - Xây dựng ứng dụng quản lý sinh viên sử dụng tư duy hướng đối tượng (OOP).
       - Thực hành Prototype Pattern và ES6 Class Pattern.
       - Tách biệt logic xử lý dữ liệu (Store) và logic hiển thị (RenderUI).

    2. CẤU TRÚC ĐỐI TƯỢNG
       - Student: Đối tượng chứa thông tin sinh viên (name, birthday, id).
       - Store: Chịu trách nhiệm tương tác với LocalStorage.
       - RenderUI: Chịu trách nhiệm vẽ dữ liệu lên màn hình HTML.
*/

// TOPIC: Định nghĩa đối tượng Student
class Student {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.id = new Date().toISOString();
  }
}

// TOPIC: Logic lưu trữ (Store)
class Store {
  getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
  }

  add(student) {
    let students = this.getStudents();
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
  }

  remove(id) {
    let students = this.getStudents().filter(s => s.id !== id);
    localStorage.setItem("students", JSON.stringify(students));
  }
}

// TOPIC: Logic hiển thị (RenderUI)
class RenderUI {
  renderAll() {
    let students = new Store().getStudents();
    let content = students.map((s, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.birthday}</td>
        <td>
          <button class="btn btn-danger btn-sm btn-remove" data-id="${s.id}">Xóa</button>
        </td>
      </tr>
    `).join("");
    document.querySelector("tbody").innerHTML = content;
  }

  alert(msg, type = "success") {
    let div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.innerHTML = msg;
    document.querySelector("#notification").appendChild(div);
    setTimeout(() => div.remove(), 2000);
  }
}

// TOPIC: Khởi tạo và Sự kiện
const store = new Store();
const ui = new RenderUI();

document.addEventListener("DOMContentLoaded", () => ui.renderAll());

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let birthday = document.querySelector("#birthday").value;

  if (!name || !birthday) {
    ui.alert("Vui lòng nhập đủ thông tin!", "warning");
    return;
  }

  store.add(new Student(name, birthday));
  ui.renderAll();
  ui.alert("Thêm sinh viên thành công!");
  document.querySelector("form").reset();
});

document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove")) {
    let id = e.target.dataset.id;
    if (confirm("Xóa sinh viên này?")) {
      store.remove(id);
      ui.renderAll();
      ui.alert("Đã xóa!", "danger");
    }
  }
});
