import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { useEmployees } from "./hooks/use-employees"
import { LoadingState } from "@/components/common/loading-state"
import { ErrorState } from "@/components/common/error-state"
import { EmptyState } from "@/components/common/empty-state"

export function EmployeeListPage() {
  const { data: employees, isLoading, isError, refetch } = useEmployees()
  const [searchTerm, setSearchTerm] = useState("")

  if (isLoading) {
    return <LoadingState message="Đang tải danh sách nhân viên..." />
  }

  if (isError) {
    return (
      <ErrorState
        message="Lỗi khi tải danh sách nhân viên."
        onRetry={refetch}
      />
    )
  }

  const filteredEmployees = (employees || []).filter((emp) =>
    [emp.name, emp.email, emp.position]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-card p-4 rounded-xl border shadow-sm">
        <Input
          placeholder="Tìm kiếm nhân viên..."
          className="max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/admin/employees/create">
          <Button className="cursor-pointer">Thêm nhân viên mới</Button>
        </Link>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {filteredEmployees.length === 0 ? (
            <div className="p-8">
              <EmptyState message="Không tìm thấy nhân viên nào phù hợp." />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Họ và tên</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Chức vụ</TableHead>
                  <TableHead>Phòng ban</TableHead>
                  <TableHead className="text-right">Hành động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((emp) => (
                  <TableRow
                    key={emp.id}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-mono text-xs">
                      {emp.id}
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">
                      {emp.name}
                    </TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>{emp.department || "Chưa phân"}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Link to={`/admin/employees/${emp.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                        >
                          Chi tiết
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
