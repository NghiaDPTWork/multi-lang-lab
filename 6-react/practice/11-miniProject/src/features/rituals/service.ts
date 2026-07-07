import apiClient from "@/lib/axios";
import type { Ritual } from "./types";

export const ritualService = {
  async getAll(): Promise<Ritual[]> {
    const res = await apiClient.get<{ data: Ritual[] }>("/ritual");
    return res.data;
  },

  getById(id: string): Promise<Ritual> {
    return apiClient.get<Ritual>(`/ritual/${id}`);
  },
};
