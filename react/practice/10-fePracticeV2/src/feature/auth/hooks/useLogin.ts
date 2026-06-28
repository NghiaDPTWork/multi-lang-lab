import { useMutation } from "@tanstack/react-query"
import { LoginFormFields } from "../schema/login-schema"

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (_credentials: LoginFormFields) => {
      // TODO: Tự viết logic đăng nhập, cập nhật store và gọi API
    },
  })
}
