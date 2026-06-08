import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/components/ui/theme";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
    <Toaster position="top-right" richColors />
  </ThemeProvider>,
  // </StrictMode>
);
