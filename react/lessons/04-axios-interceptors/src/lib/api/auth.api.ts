import apiClient from "@/lib/http/apiClient";

// Define interface Frontend cần (CHUẨN HÓA)
interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface userRegister {
  fullname: string;
  email: string;
  password: string;
}

interface userLogin {
  email: string;
  password: string;
}

// Định nghĩa API
const authApi = {
  // Đăng nhập
  async login(credentials: userLogin): Promise<AuthTokens> {
    // Nếu gặp 404 - Not Found
    // Sai enddpoint
    // Thì API endpoint có thể đã bị thay đổi,
    // Hoặc Base-URL không đúng, hoặc server đang gặp sự cố
    // => FE sẽ nhận được lỗi 404, và có thể hiển thị thông báo lỗi phù hợp cho người dùng
    // Nếu gặp lỗi CORS
    // Thì có thể do BE chưa cấu hình CORS đúng port hoặc domain của FE
    // => FE sẽ nhận được lỗi CORS
    // Nếu gặp lỗi 400 - Bad Request
    // Thì có thể do dữ liệu gửi lên không hợp lệ (ví dụ thiếu trường email hoặc password)
    // => FE sẽ nhận được lỗi 400, và có thể hiển thị thông báo lỗi phù hợp cho người dùng
    // Nếu gặp lỗi 401 - Unauthorized
    // Thì có thể do email hoặc password không chính xác
    // Hoặc do token đã hết hạn (nếu có sử dụng token)
    // Có token nhưng chưa đính
    // => FE sẽ nhận được lỗi 401, và có thể hiển thị thông báo lỗi phù hợp cho người dùng
    const { data } = await apiClient.post("/auth/login", credentials);

    console.log("Raw response from API", data);
    // Giả sử BE trả về: {message, result: { access_token, refres_token }}
    // FE chỉ cần accessToken và refreshToken nên sẽ chuẩn hóa data về cho FE dễ xử lý
    // Lúc này FE sẽ chỉ cần { accessToken, refreshToken } mà không cần quan tâm đến message hay các trường khác
    return {
      // Khúc này phải là data.data
      // Vì axios trả về response có cấu trúc (NestJS)
      /*
      {
        status: 200,
        statusText: "OK",
        headers: { ... },
        config: { ... },
        request: { ... },
        // Đây là nơi chứa cục JSON thực sự mà Backend trả về
        data: { 
          message: "Success",
          // Cục JSON thực sự mà BE trả về nằm trong trường data của response
          data: { 
              accessToken: "...",
              refreshToken: "..."
          }
        }
      }
      */
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  },

  // Đăng ký
  async register(credentials: userRegister): Promise<void> {
    await apiClient.post("/auth/register", credentials);
  },

  // Get profile (ví dụ để test interceptor)
  async getProfile(): Promise<User> {
    const { data } = await apiClient.get("/user/me");
    return data;
  },
};

export default authApi;
