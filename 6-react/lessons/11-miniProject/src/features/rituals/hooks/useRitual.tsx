import { useQuery } from "@tanstack/react-query";
import { ritualService } from "../services";
import { useParams } from "react-router-dom";

export const useRituals = () => {
  const filters = useParams();
  const query = useQuery({
    queryKey: ["rituals"],
    queryFn: () => ritualService.getAll(filters),
    placeholderData: (prev) => prev,
  });

  return {
    rituals: query.data?.data ?? [],
    pagination: query.data?.meta,
    isLoading: query.isLoading,
    error: query.error,
    isError: query.isError,
    refetch: query.refetch,
  };
};
