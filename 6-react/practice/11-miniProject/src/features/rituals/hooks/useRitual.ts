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

export const useRitualDetails = (id: string) => {
  return useQuery<Ritual, AxiosError<ApiErrorResponse>>({
    queryKey: ["ritual", id],
    queryFn: () => ritualService.getById(id),
    enabled: !!id,
  });
};
