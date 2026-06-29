import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function EmployeeCreatePage() {
  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create Employee</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Position" />
            <div className="flex justify-end gap-2 border-t pt-4">
              <Link to="/admin">
                <Button type="button" variant="outline">Cancel</Button>
              </Link>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
