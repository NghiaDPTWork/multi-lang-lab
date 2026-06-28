import { EmployeeFormField } from "../schema/employee-schema"
import { Employee } from "../types"

export const getEmployees = async (): Promise<Employee[]> => {
  // TODO: Tự gọi API GET /employees
  return []
}

export const getEmployeeById = async (_id: string): Promise<Employee> => {
  // TODO: Tự gọi API GET /employees/:id
  return {} as any
}

export const createEmployee = async (_data: EmployeeFormField): Promise<Employee> => {
  // TODO: Tự gọi API POST /employees
  return {} as any
}
