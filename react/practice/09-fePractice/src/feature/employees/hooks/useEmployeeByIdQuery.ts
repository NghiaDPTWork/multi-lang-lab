import { useQuery } from "@tanstack/react-query"
import { getEmployeeById } from "../services/employee-service"

export const useEmployeeByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["employees", id],
    queryFn: () => getEmployeeById(id),
    enabled: !!id, // Cái này quan trọng nè
  })
}
