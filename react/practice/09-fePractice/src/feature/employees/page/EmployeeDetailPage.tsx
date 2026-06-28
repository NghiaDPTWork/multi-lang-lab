import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import LoadingState from "@/components/common/LoadingState"
import ErrorState from "@/components/common/ErrorState"
import { useEmployeeByIdQuery } from "../hooks/useEmployeeByIdQuery"

export default function EmployeeDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    data: employee,
    isLoading,
    isError,
    refetch: refetchEmployee,
  } = useEmployeeByIdQuery(id || "")

  if (isLoading) return <LoadingState />

  if (isError)
    return (
      <ErrorState
        message="Không hiển thị được chi tiết nhân viên"
        onRetry={refetchEmployee}
      />
    )

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="p-6 border border-slate-200 rounded-xl max-w-md mx-auto space-y-4 bg-white shadow-sm">
      <Button
        onClick={handleBack}
        variant="outline"
        className="text-xs text-slate-500 cursor-pointer"
      >
        ← Quay lại
      </Button>
      <h2 className="text-xl font-bold text-slate-900">
        Chi tiết nhân viên {employee?.name}
      </h2>
      <div className="space-y-2 text-sm text-slate-600">
        <p>
          <b>Họ và tên:</b> {employee?.name}
        </p>
        <p>
          <b>Email:</b> {employee?.email}
        </p>
        <p>
          <b>Chức vụ:</b> {employee?.position}
        </p>
        <p>
          <b>Phòng ban:</b> {employee?.department}
        </p>
      </div>
    </div>
  )
}
