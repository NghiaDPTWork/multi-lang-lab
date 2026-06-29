import { z } from 'zod';

export const employeeSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  position: z.string().min(1, 'Position is required')
});

export type EmployeeFormValues = z.infer<typeof employeeSchema>;
