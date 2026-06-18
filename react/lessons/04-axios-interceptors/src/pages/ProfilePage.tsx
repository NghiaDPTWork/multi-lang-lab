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
import { Mail, ShieldCheck, Hash, Shield, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";

//
export default function ProfilePage() {
  const {
    //
    data: user,
    // Check coi có đang call api ko
    isLoading: isLoadingUser,
    // Khác nhau ở cái case fetch lầm thứ 2 trở đi
    isError: isErrorUser,
    //
    error,
    // Hàm để fetch lại
    refetch: refetchUser,
    isFetching: isFetchingUser,
    // Khác nhau ở cái case fetch lầm thứ 2 trở đi
  } = useUser();

  if (isLoadingUser) {
    return <LoadingState />;
  }

  if (isErrorUser) {
    return (
      <ErrorState
        message={error?.message || "Failed to load profile"}
        onRetry={() => refetchUser()}
      />
    );
  }

  if (!user) {
    return (
      <div className="text-center p-10">
        <p className="text-gray-500">No user data available</p>
      </div>
    );
  }
  // Liên quan đến kiến thức về Event Loop trong JavaScript
  // Khi gọi API, JavaScript sẽ gửi request đi và tiếp tục thực thi code phía dưới mà không chờ response trả về
  // => FE vẫn có thể render UI, hiển thị loading state, hoặc thực hiện các tác vụ khác trong khi chờ API phản hồi
  // Khi API trả về response, callback trong .then() hoặc phần code sau await sẽ được đưa vào hàng đợi (task queue)
  // và sẽ được thực thi sau khi tất cả code đồng bộ hiện tại đã chạy xong

  const displayName = user.fullname || "Dương Phạm Trọng Nghĩa";

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
              <Button
                onClick={() => refetchUser()}
                disabled={isFetchingUser}
                variant="secondary"
                className="relative"
              >
                Refresh
                {isFetchingUser && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-spin">🔄</span>
                  </span>
                )}
              </Button>
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
                  {user?.role || "user"}
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
        </CardContent>
      </Card>
    </div>
  );
}
