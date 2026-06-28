import { z } from "zod"

export const employeeSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .email("Email không hợp lệ"),
  name: z.string().min(1, "Họ tên không được để trống"),
  position: z.string().min(1, "Vị trí không được để trống"),
  department: z.string().min(1, "Phòng ban không được để trống"),
})

export type EmployeeFormField = z.infer<typeof employeeSchema>
