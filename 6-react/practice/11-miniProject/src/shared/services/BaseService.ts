import type { AxiosInstance } from "axios";
import type { PaginationResponse, SelectOption } from "../types";
import apiClient from "@/lib/axios";

// Input
export interface BaseServiceConfig<
  TEntity,
  TCreateDto,
  TUpdateDto,
  TFliterParams,
> {
  endpoint: string;
  axios?: AxiosInstance;
  getAll?: (params?: TFliterParams) => Promise<PaginationResponse<TEntity>>;
  getById?: (id: string | number) => Promise<TEntity>;
  create?: (data: TCreateDto) => Promise<TEntity>;
  update?: (id: string | number, data: TUpdateDto) => Promise<TEntity>;
  remove?: (id: string | number) => Promise<void>;
  getSelectOptions?: () => Promise<SelectOption[]>;
}

// Output
export interface BaseService<TEntity, TCreateDto, TUpdateDto, TFliterParams> {
  getAll: (param?: TFliterParams) => Promise<PaginationResponse<TEntity>>;
  getById: (id: string | number) => Promise<TEntity>;
  create: (data: TCreateDto) => Promise<TEntity>;
  update: (id: string | number, data: TUpdateDto) => Promise<TEntity>;
  remove: (id: string | number) => Promise<void>;
  getSelectOptions: () => Promise<SelectOption[]>;
}

// Function
export function createBaseService<
  TEntity,
  TCreateDto = Partial<TEntity>,
  TUpdateDto = Partial<TEntity>,
  TFliterParams = Record<string, unknown>,
>(config: BaseServiceConfig<TEntity, TCreateDto, TUpdateDto, TFliterParams>) {
  const axios = config.axios ?? apiClient;
  const endpoint = config.endpoint;

  return {
    getAll:
      config.getAll ??
      (async (params?: TFliterParams) => {
        return axios.get<PaginationResponse<TEntity>>(endpoint, {
          params,
        }) as unknown as Promise<PaginationResponse<TEntity>>;
      }),

    getById:
      config.getById ??
      (async (id: string | number) => {
        return axios.get<TEntity>(
          `${endpoint}/${id}`,
        ) as unknown as Promise<TEntity>;
      }),

    create:
      config.create ??
      (async (data: TCreateDto) => {
        return axios.post<TEntity>(
          endpoint,
          data,
        ) as unknown as Promise<TEntity>;
      }),

    update:
      config.update ??
      (async (id: string | number, data: TUpdateDto) => {
        return axios.put<TEntity>(
          `${endpoint}/${id}`,
          data,
        ) as unknown as Promise<TEntity>;
      }),

    remove:
      config.remove ??
      (async (id: string | number) => {
        await axios.delete(`${endpoint}/${id}`);
      }),

    getSelectOptions:
      config.getSelectOptions ??
      (async () => {
        return axios.get<SelectOption[]>(
          `${endpoint}/select`,
        ) as unknown as Promise<SelectOption[]>;
      }),
  };
}
