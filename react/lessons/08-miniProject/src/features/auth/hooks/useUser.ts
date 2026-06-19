import { useQuery } from "@tanstack/react-query";
import { authApi } from "../service";

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
