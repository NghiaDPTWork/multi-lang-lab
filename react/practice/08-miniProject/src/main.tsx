import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center space-y-4 max-w-md p-8 border rounded-lg bg-card shadow-xs">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">FestiveHub Practice Starter</h1>
        <p className="text-muted-foreground text-sm">
          Dự án thực hành đã được thiết lập sẵn Tailwind CSS v4. Hãy bắt đầu xây dựng cấu trúc thư mục (components, features, hooks, v.v.) và viết ứng dụng của bạn!
        </p>
      </div>
    </div>
  </StrictMode>
);
