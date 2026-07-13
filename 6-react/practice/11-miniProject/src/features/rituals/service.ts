import apiClient from "@/lib/axios";
import type {
  createRitualDto,
  Ritual,
  RitualFliterParams,
  UpdateRitualDto,
} from "./types";
import { createBaseService } from "@/shared/services/BaseService";

export const ritualService = createBaseService<
  Ritual,
  createRitualDto,
  UpdateRitualDto,
  RitualFliterParams
>({
  endpoint: "ritual",
  remove: async (id: string | number) => {
    await apiClient.patch(`ritual/${id}/soft-remove`);
  },
});

