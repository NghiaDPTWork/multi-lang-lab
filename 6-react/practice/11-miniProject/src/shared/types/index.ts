export type UserRole = "admin" | "user";

export interface SelectOption {
  id: string;
  name: string;
}

// Use for base Service
export interface PaginationMeta {
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PaginationResponse<T> {
  data: T[];
  meta: PaginationMeta;
}
