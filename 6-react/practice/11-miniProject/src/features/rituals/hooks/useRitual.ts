import { useQuery } from "@tanstack/react-query";
import { ritualService } from "../service";
import type { Ritual } from "../types";
import type { AxiosError } from "axios";
import type { ApiErrorResponse } from "@/features/auth";

export const useRituals = () => {
  return useQuery<Ritual[], AxiosError<ApiErrorResponse>>({
    queryKey: ["rituals"],
    queryFn: ritualService.getAll,
  });
};

export const useRitualDetail = (id: string | undefined) => {
  return useQuery<Ritual, AxiosError<ApiErrorResponse>>({
    // ! phía sau là Khẳng định ko có giá trị null
    queryKey: ["ritual", id],
    queryFn: () => ritualService.getById(id!),
    enabled: !!id,
  });
};
