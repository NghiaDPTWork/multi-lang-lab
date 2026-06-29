import { api } from "@/lib/axios"
import { Employee } from "../types"

export const employeeService = {
  getAll: async (): Promise<Employee[]> => {
    const response = await api.get("/employees")
    return response.data
  },
  getById: async (id: string): Promise<Employee> => {
    const response = await api.get(`/employees/${id}`)
    return response.data
  },
}
