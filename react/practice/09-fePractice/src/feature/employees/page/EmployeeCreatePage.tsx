import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCreateEmployeeMutation } from "../hooks/useCreateEmployee"
import { useForm } from "react-hook-form"
import { EmployeeFormField, employeeSchema } from "../schema/employee-schema"
import { zodResolver } from "@hookform/resolvers/zod"

export default function EmployeeCreatePage() {
  const navigate = useNavigate()
  const handleBack = () => navigate(-1)

  const {
    register: newEmployee,
    handleSubmit: handleCreateEmployee,
    formState: { errors },
  } = useForm<EmployeeFormField>({
    mode: "onTouched",
    resolver: zodResolver(employeeSchema),
    defaultValues: { name: "", email: "", position: "", department: "" },
  })

  const createEmployeeMutation = useCreateEmployeeMutation()
  const onCreate = async (data: EmployeeFormField) => createEmployeeMutation.mutate(data)

  const fields: {
    id: "name" | "email" | "department" | "position"
    label: string
    placeholder: string
    type?: string
  }[] = [
    { id: "name", label: "Họ và Tên", placeholder: "Nguyễn Văn A" },
    { id: "email", label: "Email", placeholder: "nva@example.com", type: "email" },
    { id: "department", label: "Phòng ban", placeholder: "Engineering" },
    { id: "position", label: "Chức vụ", placeholder: "Developer" },
  ]

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl border shadow-xs space-y-4">
      <h2 className="text-xl font-bold">Thêm nhân viên mới</h2>
      <form onSubmit={handleCreateEmployee(onCreate)} className="space-y-3">
        {fields.map((f) => (
          <div key={f.id} className="space-y-1">
            <Label htmlFor={f.id}>{f.label}</Label>
            <Input
              id={f.id}
              type={f.type || "text"}
              placeholder={f.placeholder}
              {...newEmployee(f.id)}
              className={errors[f.id] ? "border-red-500" : ""}
            />
            {errors[f.id] && <p className="text-red-500 text-xs">{errors[f.id]?.message}</p>}
          </div>
        ))}
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="outline" onClick={handleBack} className="cursor-pointer">Hủy</Button>
          <Button type="submit" className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700">Lưu</Button>
        </div>
      </form>
    </div>
  )
}
