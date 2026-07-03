import authApi from "@/lib/api/auth.api";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  //useQuery
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const user = await authApi.getProfile();
      return user;
    },
  });
};
