import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEmployeeQuery } from "../hooks/useEmployees"
import { useState } from "react"
import { LoadingState } from "@/components/LoadingState"
import { ErrorState } from "@/components/ErrorStatee"
import { useNavigate } from "react-router-dom"
import { EmptyState } from "@/components/EmptyState"

export function AdminPage() {
  const navigate = useNavigate()

  const {
    data: employees,
    isLoading,
    isError,
    error,
    refetch: reFetchEmployees,
  } = useEmployeeQuery()

  const [searchTerm, setSearchTerm] = useState("")

  if (isLoading) return <LoadingState />

  if (isError)
    return <ErrorState message={error.message} onRetry={reFetchEmployees} />

  const filterEmployees = (employees || []).filter((emp) =>
    [emp.name, emp.email]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  )

  const handleCreate = () => {
    navigate("/admin/employees/create")
  }

  const handleEmployeeProfile = (id: string | null) => {
    navigate(`/admin/employees/${id}`)
  }

  return (
    <div className="space-y-4">
      {/* Tiêu đề & Nút thêm */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý nhân viên</h1>
        <Button
          onClick={handleCreate}
          className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
        >
          Thêm nhân viên
        </Button>
      </div>

      {/* Ô tìm kiếm tĩnh */}
      <Input
        placeholder="Tìm kiếm theo tên, email, chức vụ, phòng ban..."
        className="max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Bảng hiển thị danh sách tĩnh */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Họ và tên</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Chức vụ</TableHead>
              <TableHead>Phòng ban</TableHead>
              <TableHead>Trạng thái</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterEmployees.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  <EmptyState message="Không tìm thấy nhân viên nào phù hợp" />
                </TableCell>
              </TableRow>
            ) : (
              filterEmployees.map((emp) => (
                <TableRow
                  key={emp.id}
                  onClick={() => handleEmployeeProfile(emp.id)}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="font-medium">{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.position}</TableCell>
                  <TableCell>{emp.department}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        emp.status === "active"
                          ? "bg-green-100 text-green-800"
                          : emp.status === "on_leave"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {emp.status === "active"
                        ? "Đang làm việc"
                        : emp.status === "on_leave"
                          ? "Nghỉ phép"
                          : "Nghỉ việc"}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
