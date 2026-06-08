import { useAuthStore } from "@/stores/auth.store";
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
  withCredentials: true,
  // Nếu BE có sử dụng cookie để lưu session thì
  // phải có cái này để FE tự động gửi cookie theo mỗi request
  // Cookie - Session - Local Storage
  // Cookie là BE set
  // Local Storage - Session là FE set
  // Tấn công XSS -
});

// Sau khi tạo instance, có thể config thêm các interceptor ở đây
// Nếu không có cái này là mình chưa đinh token dô header được, nên sẽ bị lỗi 401 khi gọi API cần auth
// =================== REQUEST INTERCEPTOR ===================
// Mỗi lần FE gọi API, interceptor này sẽ tự động chạy trước khi request được gửi đi
// Nếu FE thì
// Đối vs file ts thì không được dùng hook, nên phải dùng cách getState() để lấy token
// useAuthStore lúc này không phải là hook mà chỉ là 1 object bình
// thường nên có thể gọi getState() để lấy token
// Nếu được cóa thể dùng API key
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// =================== REFRESH TOKEN ====================
apiClient.interceptors.response.use(
  // Nếu response trả về thành công, thì chỉ cần trả về data cho FE dễ xử lý
  // Nếu response trả về lỗi, thì sẽ vào phần error của interceptor
  (response) => response.data,
  async (error) => {
    // Nếu truy cập  API mà token đã hết hạn, thì BE sẽ trả về lỗi 401 - Unauthorized
    // Thế để biết được có cần phải handle refresh token hay không
    // Nhớ về cái địa chỉ cũ  + status code của response trả về khi token hết hạn

    const originalRequest = error.config;
    const status = error.response?.status;

    // TODO: Handle 401 errors - Unauthorized (Nổi bật nhất)
    // Logic refresh token
    if (status === 401 && !originalRequest._retry) {
      // Đánh dấu đã retry để tránh vòng lặp vô hạn khi refresh token cũng bị lỗi 401
      // Nếu rt đc lưu ở local storage thì có thể lấy trực tiếp ở đây
      originalRequest._retry = true;
      const refreshToken = useAuthStore.getState().refreshToken;
      if (!refreshToken) throw new Error("No refresh token available");

      try {
        // Gọi API refresh token
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}auth/refresh`,
          {}, // Nếu BE cần gửi refresh token trong body thì truyền ở đây
          { withCredentials: true },
        );

        const { accessToken } = response.data;

        // Cập nhật access token mới vào store
        useAuthStore.getState().setTokens(accessToken, refreshToken);

        // Cập nhật access token mới vào header của request gốc và retry request đó
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Nếu refresh cũng fail → Logout luôn
        useAuthStore.getState().clearTokens();
        // window.location.href = "/login"; // Redirect cứng
        // Nếu muốn mềm mại hơn có thể dùng router của React để redirect
        //
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
