import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";
import { env } from "./env";
import { toast } from "sonner";
import { useAuthStore } from "@/shared/stores/authStore";

// =========== INTERFACE DEF ===========
interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface CustomAxiosInstance extends Omit<
  AxiosInstance,
  "get" | "post" | "put" | "patch" | "delete"
> {
  <T = unknown>(config: AxiosRequestConfig): Promise<T>;
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T>;
  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T>;
  patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T>;
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

// =========== API INSTANCE ===========
const apiClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15_000,
  withCredentials: true,
}) as CustomAxiosInstance;

// =========== REQUEST INTERCEPTOR ===========
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.log("Something error in API ", error);
    Promise.reject(error);
  },
);

// =========== RESPONSE INTERCEPTOR ===========

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response) => {
    return response?.data?.data !== undefined
      ? response.data.data
      : response.data;
  },

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryConfig;
    const notAuthRequest = !originalRequest?.url?.includes("/auth/");
    const is401 = error.response?.status === 401;
    const notRetriedYet = !originalRequest?._retry;

    // Case: Là người đầu tiên hoặc là người thứ 2 trở đi
    if (is401 && notAuthRequest && notRetriedYet) {
      // Case 1: Là người thứ 2 trở đi (đang có 1 request refresh chạy rồi)
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          // Lưu resolve/reject vào queue để chờ
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          // Khi refresh xong, retry request này với token mới
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return apiClient(originalRequest);
        });
      }

      // Case 2: Là người đầu bị lỗi -> chủ động refresh
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          `${env.API_URL}/auth/refresh`,
          {
            // Nếu BE cần gửi refresh token trong body thì truyền ở đây
          },
          { withCredentials: true },
        );

        const accessToken: string =
          response.data?.data?.accessToken ?? response.data?.accessToken;

        useAuthStore.getState().setAuth({
          accessToken: accessToken,
          role: useAuthStore.getState().role,
        });

        // Xử lý Queue
        processQueue(null, accessToken);

        // Retry request token hiện tại
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        useAuthStore.getState().clearAuth();
        toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Toast error cho user, TRỪ endpoint logout
    const message =
      (error.response?.data as { message?: string })?.message ??
      error.message ??
      "Đã có lỗi xảy ra";

    const isLogoutEndpoint = originalRequest?.url?.includes("/auth/logout");
    if (!isLogoutEndpoint) {
      toast.error(message);
    }

    return Promise.reject(error);
  },
);

export default apiClient;
