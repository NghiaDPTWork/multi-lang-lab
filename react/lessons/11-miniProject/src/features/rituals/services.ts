import apiClient from "@/lib/axios";
import type { Ritual } from "./types";

export const ritualService = {
  async getAll(): Promise<Ritual[]> {
    const response = await apiClient.get("/ritual") as any;
    return response.data as unknown as Ritual[];
  },
};
