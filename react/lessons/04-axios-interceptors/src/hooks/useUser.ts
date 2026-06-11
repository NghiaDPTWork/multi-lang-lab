import authApi from "@/lib/api/auth.api";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  //useQuery
  return useQuery({
    /**
     * 🧠 Query Key Concept:
     *
     * - Key = ID của Cache
     * - Cùng Key = Chung Cache
     * - Khác Key = Khác Cache
     *
     * Ví dụ:
     * ['me'] ≠ ['user'] ≠ ['user', 1] ≠ ['user', 2]
     *
     * Key là Array vì:
     * - Dễ nest: ['user', userId, 'posts', postId]
     * - Dễ invalidate theo pattern
     * - React Query so sánh array theo giá trị (deep equal)
     */
    queryKey: ["me"],

    /**
     * queryFn PHẢI:
     * 1. Return Promise
     * 2. Throw error nếu fail (đừng catch!)
     * 3. Return data cần cache (không phải raw response)
     */
    queryFn: async () => {
      const user = await authApi.getProfile();
      return user;
    },

    // refetchInterval => gọi lại sau x seconds
    // không quan tâm cũ mới khác với purpose của
  });
};
