/**
 * FILE: src/features/auth/types/authTypes.ts
 * VAI TRÒ: Khai báo các TypeScript types/interfaces đặc thù cho nghiệp vụ Xác thực (Authentication).
 */

import { User } from "@/shared/types/common"

/**
 * Định nghĩa cấu trúc dữ liệu trả về từ API đăng nhập thành công
 */
export interface LoginResponse {
  token: string
  user: User
}

/**
 * Bạn có thể định nghĩa thêm các kiểu dữ liệu khác như RegisterInput, ResetPasswordInput... tại đây
 */
export interface RegisterResponse {
  message: string
}
