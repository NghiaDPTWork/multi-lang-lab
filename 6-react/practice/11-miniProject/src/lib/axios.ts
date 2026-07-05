import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { env } from "./env";

// =========== API INSTANCE ===========
const apiClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15_000,
  withCredentials: true,
}) as AxiosInstance;

// TODO: Implement Request & Response Interceptors for authorization headers and refresh-token queue handling.

export default apiClient;
