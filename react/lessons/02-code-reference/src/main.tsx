import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* 👆 BỎ APP ĐI, CHUYỂN SANG DÙNG ROUTER */}
    <RouterProvider router={router} />
  </StrictMode>,
);
