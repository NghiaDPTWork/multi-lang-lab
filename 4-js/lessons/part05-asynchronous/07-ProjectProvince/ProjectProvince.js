/* 
    =================================================
    PROJECT: PROVINCE API (QUẢN LÝ ĐỊA CHỈ)
    =================================================
    
    1. MỤC TIÊU DỰ ÁN
       - Xây dựng hệ thống chọn địa chỉ (Tỉnh -> Quận -> Phường) sử dụng Open API.
       - Thực hành xử lý dữ liệu bất đồng bộ liên tiếp (Cascading API calls).
       - Thực hành Async/Await và xử lý dữ liệu phức tạp (Depth parameter).

    2. CƠ CHẾ HOẠT ĐỘNG
       - Khi chọn Tỉnh: Gọi API lấy danh sách Quận của Tỉnh đó.
       - Khi chọn Quận: Gọi API lấy danh sách Phường của Quận đó.
       - Tận dụng `async/await` để đảm bảo thứ tự dữ liệu luôn đúng.
*/

const BASE_URL = "https://provinces.open-api.vn/api";

// TOPIC: Service (Http)
class Http {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  }
}

// TOPIC: Data Manager (Store)
class Store {
  constructor() { this.http = new Http(); }

  async getProvinces() {
    return await this.http.get(`${BASE_URL}/p/`);
  }

  async getDistricts(pCode) {
    const province = await this.http.get(`${BASE_URL}/p/${pCode}/?depth=2`);
    return province.districts;
  }

  async getWards(dCode) {
    const district = await this.http.get(`${BASE_URL}/d/${dCode}/?depth=2`);
    return district.wards;
  }
}

// TOPIC: UI Manager (Render)
class RenderUI {
  fillSelect(id, list) {
    const content = list.map(item => `<option value="${item.code}">${item.name}</option>`).join("");
    document.querySelector(`#${id}`).innerHTML = content;
  }

  renderInfo(info) {
    const div = document.querySelector("#information");
    div.innerHTML = `<strong>Địa chỉ:</strong> ${info.address}, ${info.ward}, ${info.district}, ${info.province}`;
    div.classList.remove("d-none");
  }
}

// TOPIC: Main Logic
const store = new Store();
const ui = new RenderUI();

const updateDistricts = async () => {
  const pCode = document.querySelector("#province").value;
  const districts = await store.getDistricts(pCode);
  ui.fillSelect("district", districts);
  await updateWards();
};

const updateWards = async () => {
  const dCode = document.querySelector("#district").value;
  const wards = await store.getWards(dCode);
  ui.fillSelect("ward", wards);
};

document.addEventListener("DOMContentLoaded", async () => {
  const provinces = await store.getProvinces();
  ui.fillSelect("province", provinces);
  await updateDistricts();
});

document.querySelector("#province").addEventListener("change", updateDistricts);
document.querySelector("#district").addEventListener("change", updateWards);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const info = {
    province: document.querySelector("#province option:checked").text,
    district: document.querySelector("#district option:checked").text,
    ward: document.querySelector("#ward option:checked").text,
    address: document.querySelector("#address").value
  };
  ui.renderInfo(info);
});
