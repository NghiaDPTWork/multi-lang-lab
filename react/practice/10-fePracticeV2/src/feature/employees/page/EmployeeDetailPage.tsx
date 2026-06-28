import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function EmployeeDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="p-6 border border-slate-200 rounded-xl max-w-md mx-auto space-y-4 bg-white shadow-sm">
      <Button onClick={() => navigate(-1)} variant="outline" className="text-xs text-slate-500 cursor-pointer">
        ← Quay lại
      </Button>
      <h2 className="text-xl font-bold text-slate-900">Chi tiết nhân viên {id}</h2>
      <div className="space-y-2 text-sm text-slate-600">
        <p><b>Họ và tên:</b> Nguyễn Văn A</p>
        <p><b>Email:</b> nva@example.com</p>
        <p><b>Chức vụ:</b> Developer</p>
      </div>
    </div>
  )
}
