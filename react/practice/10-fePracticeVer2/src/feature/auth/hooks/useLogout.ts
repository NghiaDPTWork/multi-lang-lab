import { useMutation } from "@tanstack/react-query"

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      // TODO: Tự viết logic đăng xuất, xóa store và gọi API
    },
  })
}
