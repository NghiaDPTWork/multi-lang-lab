/**
 * FILE: src/shared/types/common.ts
 * VAI TRÒ: Chứa các kiểu dữ liệu (Types/Interfaces) dùng chung ở nhiều Module nghiệp vụ khác nhau.
 */

/**
 * Định nghĩa thực thể User dùng chung cho Xác thực và hiển thị Layout Header
 */
export interface User {
  id: string
  email: string
  role: "admin" | "employee"
  fullName: string
}

/**
 * Định nghĩa cấu trúc lỗi chung trả về từ phía API
 */
export interface ApiErrorResponse {
  message: string
  statusCode: number
  error?: string
}
