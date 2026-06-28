import { useQuery } from "@tanstack/react-query"

export const useEmployeesQuery = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      // TODO: Tự gọi API lấy danh sách nhân viên
      return []
    },
  })
}
