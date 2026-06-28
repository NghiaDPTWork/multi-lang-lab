import { useQuery } from "@tanstack/react-query"

export const useEmployeeByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["employees", id],
    queryFn: async () => {
      // TODO: Tự gọi API chi tiết nhân viên
      return null
    },
    enabled: !!id,
  })
}
