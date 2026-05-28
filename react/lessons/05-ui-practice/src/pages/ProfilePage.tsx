import { useEffect, useState } from "react";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/components/ui/StatusStates";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, Globe, Building2, MapPin } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/8")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi tải dữ liệu");
        } else {
          return response.json();
        }
      })
      .then((data) => setUser(data))
      .catch(() => setError("Không tải được dữ liệu"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!user)
    return <EmptyState message="Không tìm thấy thông tin người dùng" />;

  return (
    <div className="max-w-2xl mx-auto py-6">
      <Card className="shadow-lg border-muted">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4 pb-6 border-b">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold">
            {user.name ? user.name.charAt(0) : "U"}
          </div>
          <div className="text-center sm:text-left space-y-1">
            <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
            <CardDescription className="text-sm font-medium text-muted-foreground">
              @{user.username}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/20">
              <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">Email</p>
                <p className="text-sm font-semibold truncate">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/20">
              <Phone className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">Phone</p>
                <p className="text-sm font-semibold truncate">{user.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/20">
              <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">Website</p>
                <p className="text-sm font-semibold truncate">{user.website}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/20">
              <Building2 className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">Company</p>
                <p className="text-sm font-semibold truncate">{user.company?.name}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 p-3 rounded-lg border bg-muted/20">
            <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-medium">Address</p>
              <p className="text-sm font-semibold">
                {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
