import { useQuery } from "@tanstack/react-query";
import { ritualService } from "../services";

export const useRitual = () => {
  return useQuery({
    queryKey: ["rituals"],
    queryFn: ritualService.getAll,
  });
};
