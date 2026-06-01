import apiClient from "@/lib/http/apiClient";

// Define interface Frontend cần (CHUẨN HÓA)
interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

// Định nghĩa API
const authApi = {
  // Đăng nhập
  async login(credentials: {
    email: string;
    password: string;
  }): Promise<AuthTokens> {
    // Nếu gặp 404
    // Thì API endpoint có thể đã bị thay đổi,
    // Hoặc Base-URL không đúng, hoặc server đang gặp sự cố
    // => FE sẽ nhận được lỗi 404, và có thể hiển thị thông báo lỗi phù hợp cho người dùng
    // Nếu gặp lỗi CORS
    // Thì có thể do BE chưa cấu hình CORS đúng port hoặc domain của FE
    // => FE sẽ nhận được lỗi CORS
    // Nếu gặp lỗi 400
    // Thì có thể do dữ liệu gửi lên không hợp lệ (ví dụ thiếu trường email hoặc password)
    // => FE sẽ nhận được lỗi 400, và có thể hiển thị thông báo lỗi phù hợp cho người dùng
    // Nếu gặp lỗi 401
    // Thì có thể do email hoặc password không chính xác
    // => FE sẽ nhận được lỗi 401, và có thể hiển thị thông báo lỗi phù hợp cho người dùng
    const { data } = await apiClient.post("/auth/login", credentials);

    // Giả sử BE trả về: {message, result: { access_token, refres_token }}
    // FE chỉ cần accessToken và refreshToken nên sẽ chuẩn hóa data về cho FE dễ xử lý
    // Lúc này FE sẽ chỉ cần { accessToken, refreshToken } mà không cần quan tâm đến message hay các trường khác
    return {
      accessToken: data.result.access_token,
      refreshToken: data.result.refresh_token,
    };
  },
};

export default authApi;
