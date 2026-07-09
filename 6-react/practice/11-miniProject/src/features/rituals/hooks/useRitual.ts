import { useQuery } from "@tanstack/react-query";
import { ritualService } from "../service";
import type { RitualFliterParams } from "../types";

export const useRituals = (params?: RitualFliterParams) => {
  const query = useQuery({
    queryKey: ["rituals", params],
    queryFn: () => ritualService.getAll(params),
  });

  return {
    data: query.data?.data ?? [],
    pagination: query.data?.meta,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error as Error | null,
    refetch: query.refetch,
  };
};

export const useRitualDetail = (id?: string) => {
  const query = useQuery({
    queryKey: ["ritual", id],
    queryFn: () => {
      if (!id) throw new Error("Id is required");
      return ritualService.getById(id);
    },
    enabled: !!id,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error as Error | null,
  };
};
