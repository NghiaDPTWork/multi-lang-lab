/**
 * FILE: src/app/providers/AppProviders.tsx
 * VAI TRÒ: Gom các React Context Providers toàn cục của ứng dụng vào một nơi duy nhất.
 * 
 * TẠI SAO LÀM THẾ NÀY?
 * * Tránh tình trạng "Provider Hell" (quá nhiều thẻ bọc lồng nhau ở main.tsx làm rối mắt).
 * * Dễ dàng quản lý thứ tự bọc của các Provider (ví dụ: QueryClientProvider bọc bên ngoài ThemeProvider...).
 */

import { ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/queryClient"

interface AppProvidersProps {
  children: ReactNode
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 
        Bạn có thể thêm các Provider khác tại đây khi dự án phình to:
        <ThemeProvider>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </ThemeProvider>
      */}
      {children}
    </QueryClientProvider>
  )
}
