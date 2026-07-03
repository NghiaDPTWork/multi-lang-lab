import { useQuery } from "@tanstack/react-query";
import type { Ritual } from "../types";

export const useRitual = () => {
  // TODO: Tự viết custom hook useRitual lấy danh sách
  return useQuery<Ritual[], Error>({
    queryKey: ["rituals"],
    queryFn: async () => {
      throw new Error("Chưa implement");
    },
    enabled: false,
  });
};
