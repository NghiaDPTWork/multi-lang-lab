/* 
    =================================================
    PROJECT: TODO LIST (QUẢN LÝ CÔNG VIỆC)
    =================================================
    
    1. MỤC TIÊU DỰ ÁN
       - Xây dựng ứng dụng quản lý công việc (Thêm, Xóa, Tìm kiếm).
       - Thực hành lưu trữ dữ liệu bền vững với LocalStorage.
       - Thực hành xử lý sự kiện Form (submit) và lọc danh sách (filter).

    2. CÁC TÁC VỤ CHÍNH
       - Create: Thêm mới item vào mảng và lưu vào LocalStorage.
       - Read: Đọc mảng từ LocalStorage và render lên giao diện (init).
       - Delete: Xóa item dựa trên ID (dataset.id).
       - Filter: Tìm kiếm công việc dựa trên từ khóa (keyup).
*/

// TOPIC: Quản lý dữ liệu (LocalStorage)
const getList = () => JSON.parse(localStorage.getItem("list")) || [];

const addItemtoLS = (item) => {
  let list = getList();
  list.push(item);
  localStorage.setItem("list", JSON.stringify(list));
};

const removeItemFormLS = (itemId) => {
  let list = getList().filter(item => item.id !== itemId);
  localStorage.setItem("list", JSON.stringify(list));
};

// TOPIC: Giao diện (UI)
const addItemToUI = ({ id, name }) => {
  let newCard = document.createElement("div");
  newCard.className = "card d-flex flex-row justify-content-between align-items-center p-2 mb-3 shadow-sm";
  newCard.innerHTML = `
    <span>${name}</span>
    <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">Remove</button>
  `;
  document.querySelector("#list").appendChild(newCard);
};

const init = () => {
  getList().forEach(item => addItemToUI(item));
};
init();

// TOPIC: Sự kiện Form
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let nameInp = document.querySelector("#name");
  if (nameInp.value.trim() === "") return;

  let item = { id: new Date().toISOString(), name: nameInp.value };
  addItemtoLS(item);
  addItemToUI(item);
  nameInp.value = "";
});

// TOPIC: Xóa Item
document.querySelector("#list").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-remove")) {
    let itemId = event.target.dataset.id;
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
      event.target.parentElement.remove();
      removeItemFormLS(itemId);
    }
  }
});

// TOPIC: Tìm kiếm (Filter)
document.querySelector("#filter").addEventListener("keyup", (event) => {
  let val = event.target.value.toLowerCase();
  document.querySelector("#list").innerHTML = "";
  getList()
    .filter(item => item.name.toLowerCase().includes(val))
    .forEach(item => addItemToUI(item));
});
