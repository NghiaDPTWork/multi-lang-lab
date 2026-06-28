/**
 * FILE: src/shared/services/localStorage.ts
 * VAI TRÒ: Các hàm tiện ích dùng chung để tương tác an toàn với LocalStorage (Get, Set, Remove, Clear).
 * 
 * TẠI SAO LÀM THẾ NÀY?
 * * Tránh việc viết trực tiếp `localStorage.getItem("key")` rải rác khắp dự án.
 * * Tự động parse JSON và bắt lỗi (try-catch) khi truy cập bộ nhớ trình duyệt bị lỗi.
 */

export const storage = {
  // Lấy dữ liệu và tự động ép kiểu JSON
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : null
    } catch (error) {
      console.error(`Lỗi đọc localStorage key "${key}":`, error)
      return null
    }
  },

  // Lưu dữ liệu chuyển hóa sang JSON string
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Lỗi ghi localStorage key "${key}":`, error)
    }
  },

  // Xóa key
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Lỗi xóa localStorage key "${key}":`, error)
    }
  },

  // Xóa sạch bộ nhớ
  clear: (): void => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error("Lỗi dọn dẹp localStorage:", error)
    }
  },
}
