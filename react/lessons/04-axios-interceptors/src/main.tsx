import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/components/ui/theme";
import { queryClient } from "./lib/queryClient.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
    {/* Bật sẵn hay ko bặt sẵn staleTime */}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  // </StrictMode>
);
