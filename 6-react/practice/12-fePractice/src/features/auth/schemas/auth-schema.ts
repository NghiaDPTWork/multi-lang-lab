import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
})

export type LoginFormField = z.infer<typeof LoginSchema>
