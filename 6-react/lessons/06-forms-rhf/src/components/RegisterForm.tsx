import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerSchema = z.object({
  email: z.string().min(1, "Email không được để trống").email("Email không đúng định dạng"),
  fullname: z.string().min(3, "Tên phải dài ít nhất 3 ký tự"),
  password: z.string().min(6, "Mật khẩu phải dài ít nhất 6 ký tự"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"]
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: RegisterFormData) => {
    alert("Đăng ký thành công!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-6 bg-white rounded shadow-sm">
      <h3 className="text-lg font-bold">Đăng Ký Thành Viên (RHF + Zod)</h3>

      <div className="space-y-1">
        <label className="block text-sm font-medium">Họ và tên</label>
        <input
          type="text"
          {...register("fullname")}
          className="w-full border p-2 rounded"
          placeholder="Nhập họ và tên"
        />
        {errors.fullname && <p className="text-red-500 text-xs">{errors.fullname.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border p-2 rounded"
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium">Mật khẩu</label>
        <input
          type="password"
          {...register("password")}
          className="w-full border p-2 rounded"
          placeholder="••••••"
        />
        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium">Xác nhận mật khẩu</label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-full border p-2 rounded"
          placeholder="••••••"
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
        Đăng Ký
      </button>
    </form>
  );
}
