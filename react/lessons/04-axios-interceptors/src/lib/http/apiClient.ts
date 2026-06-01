import axios from "axios";

// Create instance
const apiClient = axios.create({
  // Nhớ config .env file với VITE_API_URL
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    // Mặc định sẽ gửi data dưới dạng JSON
    "Content-Type": "application/json",
  },
  // 10s timeout cho tất cả request,
  // Nếu server không phản hồi trong 10s
  // Sẽ tự động hủy request và trả về lỗi Timeout

  // Cơ chế phòng thủ
  // Gọi API có thể gặp nhiều vấn đề như:
  // - Server chậm, không phản hồi
  // - BE trả về không nhất quán
  // => Phải chuẩn hóa data về cho fe dễ xử lý
  timeout: 10000,
});

export default apiClient;
