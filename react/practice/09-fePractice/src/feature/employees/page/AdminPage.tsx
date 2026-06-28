import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoadingState from "@/components/common/LoadingState"
import ErrorState from "@/components/common/ErrorState"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEmployeesQuery } from "../hooks/useEmployees"

export default function AdminPage() {
  const {
    data: employees,
    isLoading,
    isError,
    refetch: refetchEmployee,
  } = useEmployeesQuery()
  const navigate = useNavigate()
  const [searchKey, setSearchKey] = useState("")

  const handleCreate = () => {
    navigate("/admin/employees/create")
  }

  const handleDetail = (id: string) => {
    navigate(`/admin/employees/${id}`)
  }

  const filterEmployees = (employees || []).filter((emp) => {
    return [emp.name, emp.email, emp.position, emp.department]
      .join(" ")
      .toLowerCase()
      .includes(searchKey.toLowerCase())
  })

  if (isLoading) return <LoadingState />

  if (isError) {
    return (
      <ErrorState
        message="Không hiển thị được danh sách nhân viên"
        onRetry={refetchEmployee}
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Quản lý nhân viên</h1>
        <Button
          onClick={handleCreate}
          className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
        >
          Thêm nhân viên
        </Button>
      </div>

      <Input
        placeholder="Tìm kiếm theo tên, email..."
        className="max-w-md"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyDown={() => filterEmployees}
      />

      <div className="border rounded-md bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Họ và tên</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Chức vụ</TableHead>
              <TableHead>Phòng ban</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterEmployees.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-8 text-slate-500"
                >
                  Không tìm thấy nhân viên nào phù hợp
                </TableCell>
              </TableRow>
            ) : (
              filterEmployees.map((emp) => (
                <TableRow
                  key={emp.id}
                  onClick={() => handleDetail(emp.id)}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="font-medium">{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.position}</TableCell>
                  <TableCell>{emp.department}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
