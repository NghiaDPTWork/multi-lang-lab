import { api } from "@/lib/axios"
import { Employee } from "../types"
import { EmployeeFormField } from "../schema/employee-schema"

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<Employee[]>("/employees")
  return response.data
}

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const response = await api.get<Employee>(`/employees/${id}`)
  return response.data
}

export const createEmployee = async (
  data: EmployeeFormField,
): Promise<Employee> => {
  const response = await api.post<Employee>("/employees", data)
  return response.data
}
