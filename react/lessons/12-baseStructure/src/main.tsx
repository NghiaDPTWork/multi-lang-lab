/**
 * FILE: src/main.tsx
 * VAI TRÒ: Điểm khởi chạy của toàn bộ ứng dụng React.
 * 
 * NƠI THỰC HIỆN:
 * 1. Khởi tạo React Root trên thẻ DOM id="root".
 * 2. Import global CSS stylesheet (styles/index.css).
 * 3. Bọc App bằng thẻ chứa các Provider tập trung (AppProviders).
 */

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app/App"
import AppProviders from "./app/providers/AppProviders"
import "./styles/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 
      Mẹo hay: Gom toàn bộ Provider (QueryClientProvider, ThemeProvider, Context...) 
      vào AppProviders để giữ file main.tsx luôn ngắn gọn, sạch sẽ.
    */}
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
