/**
 * FILE: src/shared/constants/common.ts
 * VAI TRÒ: Chứa các hằng số dùng chung của toàn hệ thống (Constants).
 */

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 210,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const

export const APP_ROLES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
} as const

export const REGEX_PATTERNS = {
  PHONE_NUMBER: /^[0-9]{10,11}$/, // Kiểm tra định dạng số điện thoại Việt Nam
} as const
