import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EmployeeCreatePage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Thêm nhân viên mới</h2>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1"><Label htmlFor="name">Họ và Tên</Label><Input id="name" placeholder="Nguyễn Văn A" /></div>
        <div className="space-y-1"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="nva@example.com" /></div>
        <div className="space-y-1"><Label htmlFor="phone">Số điện thoại</Label><Input id="phone" placeholder="0987654321" /></div>
        <div className="space-y-1"><Label htmlFor="position">Chức vụ</Label><Input id="position" placeholder="Developer" /></div>
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="outline" onClick={() => navigate("/admin")} className="cursor-pointer">Hủy</Button>
          <Button type="submit" className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700">Lưu</Button>
        </div>
      </form>
    </div>
  )
}
