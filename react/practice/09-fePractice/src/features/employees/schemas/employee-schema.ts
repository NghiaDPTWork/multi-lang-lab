import { z } from "zod"

export const employeeSchema = z.object({
  // Định nghĩa luật validate cho employee tại đây (name, email, position, department)
})

export type EmployeeFormFields = z.infer<typeof employeeSchema>
