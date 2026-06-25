import { z } from "zod"

export const loginSchema = z.object({
  // Định nghĩa luật validate cho email và password tại đây
})

export type LoginFormFields = z.infer<typeof loginSchema>
