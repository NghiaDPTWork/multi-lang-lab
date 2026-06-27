import { LoadingState } from "@/components/LoadingState"
import { Button } from "@/components/ui/button"
import { useNavigate, useParams } from "react-router-dom"
import { EmptyState } from "@/components/EmptyState"
import { ErrorState } from "@/components/ErrorStatee"
import { useEmployeeByIdQuery } from "../hooks/useEmployees"

export function EmployeeDetail() {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    data: emp,
    isLoading,
    isError,
    error,
    refetch: reFetchEmployee,
  } = useEmployeeByIdQuery(id || "")

  if (isLoading) {
    return <LoadingState />
  }

  if (isError) {
    return <ErrorState message={error.message} onRetry={reFetchEmployee} />
  }

  if (!emp) {
    return <EmptyState message="Không tìm thấy nhân viên" />
  }
  return (
    <div className="p-6 border rounded max-w-md mx-auto space-y-4">
      <Button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 cursor-pointer"
      >
        ← Quay lại
      </Button>
      <h2 className="text-xl font-bold">{emp.name}</h2>
      <p>
        <b>Email:</b> {emp.email}
      </p>
      <p>
        <b>Chức vụ:</b> {emp.position}
      </p>
      <p>
        <b>Phòng ban:</b> {emp.department}
      </p>
      <p>
        <b>Trạng thái:</b> {emp.status === "active" ? "Đang làm việc" : "Nghỉ"}
      </p>
    </div>
  )
}
