/**
 * FILE: src/shared/hooks/useDebounce.ts
 * VAI TRÒ: Trì hoãn việc cập nhật một giá trị trong một khoảng thời gian (Debounce).
 * 
 * KHI NÀO DÙNG?
 * * Khi làm tính năng tìm kiếm gõ phím liên tục (Search Input) gọi API. 
 * * Tránh việc gửi 10 requests lên server khi người dùng gõ nhanh 10 chữ cái.
 */

import { useState, useEffect } from "react"

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Thiết lập timer cập nhật sau khoảng delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clear timer nếu value thay đổi trước thời gian delay (người dùng vẫn đang gõ tiếp)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
