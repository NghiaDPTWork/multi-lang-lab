import { useEffect, useState } from "react";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/components/ui/StatusStates";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  ShieldCheck,
  Hash,
  Shield,
  CreditCard,
  Key,
  Calendar,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import authApi from "@/lib/api/auth.api";
import { useAuthStore } from "@/stores/auth.store";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | any>(null);
  const accessToken = useAuthStore((state) => state.accessToken);

  const handleFetchProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      // Gọi API lấy thông tin user
      const profile = await authApi.getProfile();
      setUser(profile);
    } catch (err: any) {
      console.error("Error fetching profile:", err);
      setError(
        err.response?.data?.message ||
          "Có lỗi xảy ra khi tải thông tin người dùng.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchProfile();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!user)
    return <EmptyState message="Không tìm thấy thông tin người dùng" />;

  const displayName = user.fullName || "Dương Phạm Trọng Nghĩa";

  return (
    <div className="max-w-2xl mx-auto py-6">
      <Card className="shadow-sm border bg-card rounded-lg">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4 pb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold">
            {displayName.charAt(0)}
          </div>
          <div className="text-center sm:text-left space-y-1">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <CardTitle className="text-2xl font-bold text-foreground">
                {displayName}
              </CardTitle>
              <Badge
                variant="secondary"
                className="flex items-center gap-1 bg-muted border text-muted-foreground text-xs py-0.5 px-2 rounded-full"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Verified
              </Badge>
            </div>
            <CardDescription className="text-sm font-medium text-muted-foreground">
              @{user.email.split("@")[0]}
            </CardDescription>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6 space-y-6">
          {/* User ID */}
          <div className="flex items-center justify-between p-4 bg-muted/40 rounded border">
            <span className="font-semibold text-sm flex items-center gap-2 text-foreground">
              <Hash className="w-4 h-4 text-muted-foreground" />
              User ID
            </span>
            <code className="text-sm font-mono bg-background px-2 py-1 rounded border text-foreground">
              {user.id}
            </code>
          </div>

          {/* Grid Info: 2x2 fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded border bg-muted/20">
              <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Email
                </p>
                <p className="text-sm font-semibold truncate text-foreground">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded border bg-muted/20">
              <Shield className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Vai trò (Role)
                </p>
                <p className="text-sm font-semibold truncate text-foreground capitalize">
                  {user.role || "user"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded border bg-muted/20">
              <CreditCard className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Gói dịch vụ
                </p>
                <p className="text-sm font-semibold truncate text-foreground">
                  {user.userSubscriptions?.[0]?.subscriptionPlan?.name ||
                    "Free"}{" "}
                  ({user.userSubscriptions?.[0]?.status || "active"})
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded border bg-muted/20">
              <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Ngày tham gia
                </p>
                <p className="text-sm font-semibold truncate text-foreground">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("vi-VN")
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          <Separator className="bg-slate-100/50" />

          <div className="flex flex-col gap-1.5 p-3 bg-muted/30 rounded border">
            <span className="font-semibold text-xs flex items-center gap-1.5 text-foreground">
              <Key className="w-3.5 h-3.5 text-muted-foreground" />
              Access Token
            </span>
            <div className="relative">
              <pre className="text-[10px] bg-background p-2.5 rounded border text-muted-foreground overflow-y-auto max-h-16 break-all whitespace-pre-wrap font-mono leading-relaxed">
                {accessToken || "Không tìm thấy Token"}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
