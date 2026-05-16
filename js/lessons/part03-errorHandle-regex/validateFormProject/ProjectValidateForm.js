/* 
    =================================================
    PROJECT: VALIDATE FORM (KIỂM TRA FORM)
    =================================================
    
    1. MỤC TIÊU DỰ ÁN
       - Xây dựng hệ thống kiểm tra dữ liệu đầu vào (Validation) chuyên nghiệp.
       - Thực hành Regex (Regular Expression) cho Email và Name.
       - Thực hành kỹ thuật ParamObject để mô tả trạng thái của các Input Node.

    2. CÁC QUY TẮC (RULES)
       - Email: Phải đúng định dạng @...
       - Name: Không chứa số, max 50 ký tự.
       - Password: Min 8 ký tự.
       - ConfirmedPassword: Phải khớp với Password.
*/

// TOPIC: Cấu hình Regex
const REG_EMAIL = /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-Z]{1,5}$/;
const REG_NAME = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)+)?$/;

// TOPIC: Bộ hàm kiểm tra (Validators)
const isRequired = (value) => (value.trim() != "" ? "" : "Trường này là bắt buộc");
const isEmail = (value) => (REG_EMAIL.test(value) ? "" : "Email không hợp lệ");
const isName = (value) => (REG_NAME.test(value) ? "" : "Tên không hợp lệ");
const min = (num) => (value) => value.length >= num ? "" : `Tối thiểu ${num} ký tự`;
const max = (num) => (value) => value.length <= num ? "" : `Tối đa ${num} ký tự`;
const isSame = (paramValue, fieldName) => (value) =>
  value == paramValue ? "" : `Giá trị không khớp với ${fieldName}`;

// TOPIC: Logic xử lý Validation
const isValid = (paramObject) => {
  const { value, funcs, parentNode, controlNodes } = paramObject;
  for (const funcCheck of funcs) {
    let msg = funcCheck(value);
    if (msg) {
      createMsg(parentNode, controlNodes, msg);
      return msg;
    }
  }
  return "";
};

const createMsg = (parentNode, controlNodes, msg) => {
  let divMsg = document.createElement("div");
  divMsg.className = "invalid-feedback d-block";
  divMsg.innerHTML = msg;
  parentNode.appendChild(divMsg);
  controlNodes.forEach(node => node.classList.add("is-invalid"));
};

const clearMsg = () => {
  document.querySelectorAll(".invalid-feedback").forEach(item => item.remove());
  document.querySelectorAll(".is-invalid").forEach(node => node.classList.remove("is-invalid"));
};

// TOPIC: Sự kiện chính
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  clearMsg();

  const email = document.querySelector("#email");
  const name = document.querySelector("#name");
  const password = document.querySelector("#password");
  const confirm = document.querySelector("#confirmedPassword");

  const results = [
    isValid({ value: email.value, funcs: [isRequired, isEmail], parentNode: email.parentElement, controlNodes: [email] }),
    isValid({ value: name.value, funcs: [isRequired, isName], parentNode: name.parentElement, controlNodes: [name] }),
    isValid({ value: password.value, funcs: [isRequired, min(8)], parentNode: password.parentElement, controlNodes: [password] }),
    isValid({ value: confirm.value, funcs: [isRequired, isSame(password.value, "Mật khẩu")], parentNode: confirm.parentElement, controlNodes: [confirm] }),
  ];

  if (results.every(r => r === "")) {
    alert("Form đã hợp lệ! Đang gửi dữ liệu...");
  }
});
