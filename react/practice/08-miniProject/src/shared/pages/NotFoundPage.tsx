import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center space-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Compass className="w-8 h-8 animate-pulse" />
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">
          404 - Không Tìm Thấy Trang
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          Đường dẫn bạn yêu cầu không tồn tại hoặc đã bị di chuyển sang địa chỉ
          khác.
        </p>
      </div>
      <div className="pt-2">
        <Button asChild className="cursor-pointer">
          <Link to="/">Quay về Trang Chủ</Link>
        </Button>
      </div>
    </div>
  );
}
