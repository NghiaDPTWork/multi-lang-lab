import { useQuery } from "@tanstack/react-query"
import { getEmployees } from "../services/employee-service"

export const useEmployeesQuery = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  })
}
