import { useQuery } from "@tanstack/react-query";
import { authService } from "../service";

export const useUser = () => {
  //useQuery
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const user = await authService.getProfile();
      return user;
    },
  });
};
