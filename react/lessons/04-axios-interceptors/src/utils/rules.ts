import * as z from "zod";

// Register Schema
export const registerSchema = z
  .object({
    // Validation cho email
    email: z
      .string()
      .min(1, { message: "Email không được để trống" })
      .email({ message: "Email không đúng định dạng" }),

    // Validation cho fullname
    fullname: z.string().min(1, { message: "Tên không được để trống" }).min(3, {
      message: "Tên phải ít nhất 3 ký tự",
    }),

    // Validation cho password
    password: z
      .string()
      .min(1, { message: "Password là bắt buộc" })
      .min(6, { message: "Password phải ít nhất 6 ký tự" }),

    // Validation cho confirm_password
    confirmPassword: z.string(),
  })
  // Super refine để thêm validation tùy chỉnh giữa các field với nhau
  // (như confirmPassword phải khớp với password) => Nhiều field
  // Refine cho phép chúng ta thêm validation tùy chỉnh sau khi đã validate các field riêng lẻ
  // => 1 field
  // ctx là util để chúng ta có thể thêm lỗi tùy chỉnh vào field nào đó nếu validation không
  // thành công
  .superRefine(({ password, confirmPassword }, ctx) => {
    // Custom validation để kiểm tra confirmPassword có khớp với password hay không
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Nhập lại mật khẩu không khớp",
        path: ["confirmPassword"],
        // Gán lỗi vào field này nhé !!!
      });
    }
  });

// Export type để dùng cho RHF(React Hook Form)
export type RegisterSchemaType = z.infer<typeof registerSchema>;
