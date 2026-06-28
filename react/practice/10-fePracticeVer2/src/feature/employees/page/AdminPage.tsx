import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Quản lý nhân viên</h1>
        <Button onClick={() => navigate("/admin/employees/create")} className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700">
          Thêm nhân viên
        </Button>
      </div>
      <Input placeholder="Tìm kiếm theo tên, email..." className="max-w-md" />
      <div className="border border-dashed rounded-lg p-12 text-center text-slate-400 bg-slate-50/50">
        <p className="font-semibold text-slate-700">Khung hiển thị Danh sách nhân viên (Table)</p>
        <div className="mt-4 flex justify-center gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate("/admin/employees/e1")} className="cursor-pointer">
            Xem chi tiết NV e1
          </Button>
        </div>
      </div>
    </div>
  )
}
