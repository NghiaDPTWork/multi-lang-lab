import apiClient from "@/lib/axios";
import type { Ritual } from "./types";

export const ritualService = {
  /* 
  Unwrap just 1 layer in interceptor
    {
      "data": [ ... ],
      "pagination": { ... }
    }
  */
  async getAll(): Promise<Ritual[]> {
    const response = await apiClient.get<{ data: Ritual[] }>("/ritual");
    return response.data;
  },

  getById(id: string): Promise<Ritual> {
    return apiClient.get<Ritual>(`/ritual/${id}`);
  },
};
