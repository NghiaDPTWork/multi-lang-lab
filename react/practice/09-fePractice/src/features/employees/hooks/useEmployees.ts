import { useQuery } from "@tanstack/react-query"
import { getEmployeeById, getEmployees } from "../services/employee-service"

export const useEmployeeQuery = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  })
}

export const useEmployeeByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["employees", id],
    queryFn: () => getEmployeeById(id),
    enabled: !!id, // Cái này quan trọng nè
  })
}
