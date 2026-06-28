import { Link } from "react-router-dom"
import { Users, CalendarCheck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Chào mừng đến với hệ thống</h1>
        <p className="text-slate-500 max-w-md mx-auto">Giải pháp quản lý nhân sự và chấm công thông minh.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <Link to="/admin" className="p-5 bg-white border rounded-xl hover:shadow-md transition text-left block group">
          <Users className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Quản trị viên →</h3>
          <p className="text-xs text-slate-400 mt-1">Xem danh sách, quản lý hồ sơ và chi tiết nhân sự.</p>
        </Link>
        <Link to="/attendance" className="p-5 bg-white border rounded-xl hover:shadow-md transition text-left block group">
          <CalendarCheck className="w-6 h-6 text-green-600 mb-2" />
          <h3 className="font-semibold text-slate-900 group-hover:text-green-600">Chấm công →</h3>
          <p className="text-xs text-slate-400 mt-1">Dành cho nhân viên thực hiện chấm công hàng ngày.</p>
        </Link>
      </div>
    </div>
  )
}
