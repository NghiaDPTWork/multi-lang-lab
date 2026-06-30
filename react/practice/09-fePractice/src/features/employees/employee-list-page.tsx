import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEmployees } from "./hooks/use-employees"
import { LoadingState } from "@/components/common/loading-state"
import { ErrorState } from "@/components/common/error-state"
import { EmptyState } from "@/components/common/empty-state"

export function EmployeeListPage() {
  const navigate = useNavigate()
  const { data: employees, isLoading, isError, refetch } = useEmployees()
  const [searchTerm, setSearchTerm] = useState("")

  if (isLoading) {
    return <LoadingState message="Loading employees..." />
  }

  if (isError) {
    return <ErrorState message="Failed to load employee list." onRetry={refetch} />
  }

  const filteredEmployees = employees?.filter((employee) =>
    [employee.name, employee.email, employee.position, employee.department]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  ) || []

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "on_leave":
        return "secondary"
      case "inactive":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center bg-card p-4 rounded-xl border shadow-sm">
        <Input
          placeholder="Search employees..."
          className="max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/admin/employees/create">
          <Button>Add Employee</Button>
        </Link>
      </div>

      <Card className="overflow-hidden shadow-xs border">
        <CardHeader className="bg-muted/10 border-b pb-4">
          <CardTitle className="text-xl font-bold">Employee Directory</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {filteredEmployees.length === 0 ? (
            <div className="p-6">
              <EmptyState message={searchTerm ? "No employees match your search query." : "No employees registered yet."} />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Full Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow
                    key={employee.id}
                    className="cursor-pointer transition hover:bg-muted/50"
                    onClick={() => navigate(`/admin/employees/${employee.id}`)}
                  >
                    <TableCell className="font-semibold text-muted-foreground">{employee.id}</TableCell>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(employee.status)}>
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                      <Link to={`/admin/employees/${employee.id}`}>
                        <Button variant="outline" size="sm" className="mr-2">
                          Detail
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
  )
}
