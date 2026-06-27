import { api } from "@/lib/axios"
import { Employee } from "../types"

export async function getEmployees(): Promise<Employee[]> {
  const { data } = await api.get<Employee[]>("/employees")
  return data
}

export async function getEmployeeById(id: string): Promise<Employee> {
  const { data } = await api.get<Employee>(`/employees/${id}`)
  return data
}
