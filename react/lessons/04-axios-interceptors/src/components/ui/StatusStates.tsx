import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, AlertCircle, Inbox } from "lucide-react";

export const LoadingState = () => (
  <div className="flex flex-col items-center justify-center p-20 gap-4">
    <Loader2 className="w-10 h-10 animate-spin text-primary" />
    <p className="text-muted-foreground animate-pulse text-sm font-medium">
      Đang tải dữ liệu...
    </p>
  </div>
);

export const ErrorState = ({
  message = "Đã có lỗi xảy ra",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) => (
  <Card className="border-destructive/30 bg-destructive/5 text-center max-w-md mx-auto shadow-sm">
    <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
      <div className="p-3 rounded-full bg-destructive/10">
        <AlertCircle className="w-6 h-6 text-destructive" />
      </div>
      <div className="space-y-1.5">
        <p className="font-semibold text-destructive text-lg">Đã xảy ra lỗi!</p>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => window.location.reload()}
        className="mt-2 cursor-pointer"
      >
        Thử lại
      </Button>
    </CardContent>
  </Card>
);

export const EmptyState = ({
  message = "Không có dữ liệu nào",
}: {
  message?: string;
}) => (
  <Card className="border-dashed text-center max-w-md mx-auto shadow-none">
    <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
      <div className="p-3 rounded-full bg-muted/60">
        <Inbox className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground font-medium">{message}</p>
    </CardContent>
  </Card>
);
