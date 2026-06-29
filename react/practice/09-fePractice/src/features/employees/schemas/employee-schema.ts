import { z } from "zod"

export const employeeSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  position: z.string().min(1, "Position is required"),
  department: z.string().min(1, "Department is required"),
  status: z.enum(["active", "on_leave", "inactive"]).default("active"),
})

export type EmployeeFormValues = z.infer<typeof employeeSchema>
