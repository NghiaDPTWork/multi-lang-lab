import { Loader2 } from "lucide-react";

export const LoadingState = () => (
  <div className="flex flex-col items-center justify-center p-20 gap-4">
    <Loader2 className="w-10 h-10 animate-spin text-primary" />
    <p className="text-muted-foreground animate-pulse text-sm font-medium">
      Đang tải dữ liệu...
    </p>
  </div>
);
