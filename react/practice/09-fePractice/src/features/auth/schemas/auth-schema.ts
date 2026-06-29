import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is requirement")
    .email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password needs at least 8 characters"),
})

export type LoginFormValues = z.infer<typeof loginSchema>
