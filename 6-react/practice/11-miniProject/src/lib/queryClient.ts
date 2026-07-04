import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: "always",
      retry: 1,
      staleTime: 5000,
      gcTime: 5 * 60 * 1000,
    },
  },
});
