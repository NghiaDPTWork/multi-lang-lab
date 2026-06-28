import { useMutation } from "@tanstack/react-query"
import { EmployeeFormField } from "../schema/employee-schema"

export const useCreateEmployeeMutation = () => {
  return useMutation({
    mutationFn: async (_data: EmployeeFormField) => {
      // TODO: Tự gọi API tạo mới nhân viên
    },
  })
}
