import { Link, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEmployeeById } from "./hooks/use-employees";
import { LoadingState } from "@/components/common/loading-state";
import { ErrorState } from "@/components/common/error-state";
import { Badge } from "@/components/ui/badge";

export function EmployeeDetailPage() {
  const { id } = useParams();
  const { data: employee, isLoading, isError, refetch } = useEmployeeById(id);

  if (isLoading) {
    return <LoadingState message="Loading employee details..." />;
  }

  if (isError || !employee) {
    return <ErrorState message="Failed to load employee details." onRetry={refetch} />;
  }

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
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <Link to="/admin">
          <Button variant="outline">← Back</Button>
        </Link>
      </div>
      <Card className="shadow-sm border">
        <CardHeader className="bg-muted/10 border-b pb-4">
          <CardTitle className="text-xl font-bold">Employee Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6 text-sm">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-semibold text-muted-foreground">Employee ID</span>
            <span className="font-medium text-foreground">{employee.id}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-semibold text-muted-foreground">Full Name</span>
            <span className="font-medium text-foreground">{employee.name}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-semibold text-muted-foreground">Email Address</span>
            <span className="font-medium text-foreground">{employee.email}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-semibold text-muted-foreground">Position</span>
            <span className="font-medium text-foreground">{employee.position}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-semibold text-muted-foreground">Department</span>
            <span className="font-medium text-foreground">{employee.department}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-semibold text-muted-foreground">Status</span>
            <Badge variant={getStatusBadgeVariant(employee.status)}>
              {employee.status}
            </Badge>
          </div>
          {employee.createdAt && (
            <div className="flex justify-between items-center">
              <span className="font-semibold text-muted-foreground">Created At</span>
              <span className="font-medium text-foreground">
                {new Date(employee.createdAt).toLocaleDateString()}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
