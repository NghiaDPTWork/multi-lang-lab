import apiClient from "@/lib/http/apiClient";

// Define interface Frontend cần (CHUẨN HÓA)
interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface User {
  _id: string;
  email: string;
  name: string;
}

// Định nghĩa API
const authApi = {
  // Đăng nhập
  async login(credentials: {
    email: string;
    password: string;
  }): Promise<AuthTokens> {
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
