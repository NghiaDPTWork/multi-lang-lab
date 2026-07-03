/**
 * FILE: src/lib/queryClient.ts
 * VAI TRÒ: Cấu hình mặc định cho TanStack Query (React Query Client) được sử dụng toàn hệ thống.
 * 
 * PHƯƠNG PHÁP CẤU HÌNH:
 * * Thiết lập `staleTime` và `gcTime` hợp lý để tận dụng bộ nhớ đệm (caching).
 * * Cấu hình tự động tắt gọi lại mạng khi người dùng click tab khác rồi quay lại (`refetchOnWindowFocus`).
 * * Hạn chế số lần gọi thử lại khi lỗi (`retry: 1` hoặc tắt hẳn ở môi trường dev).
 */

import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Dữ liệu được coi là mới trong vòng 5 phút (không cần fetch lại nếu không cần thiết)
      gcTime: 1000 * 60 * 10,    // Giữ cache trong bộ nhớ tối đa 10 phút trước khi dọn rác
      refetchOnWindowFocus: false, // Tắt tự động gọi lại mạng khi focus lại cửa sổ trình duyệt (giảm tải cho Server)
      retry: 1, // Thử gọi lại 1 lần duy nhất nếu bị lỗi mạng trước khi báo lỗi ra màn hình
    },
    mutations: {
      // Cấu hình chung cho mutations nếu cần
    }
  },
})
