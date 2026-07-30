import { useState } from "react";
import { useRituals } from "../hooks/useRitual";
import {
  LoadingState,
  ErrorState,
  EmptyState,
  Pagination,
} from "@/shared/components/common";
import { RitualCard, RitualFilters } from "../components";
import { useDebounce } from "@/shared/hooks/useDebounce";

export default function RitualCategoryPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isHot, setIsHot] = useState<boolean | undefined>(undefined);
  const debounedSearch = useDebounce(searchTerm, 500);

  const { rituals, pagination, isLoading, isError, error, refetch } =
    useRituals({
      page: currentPage,
      limit: 6,
      search: debounedSearch || undefined,
      isHot: isHot,
    });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // const handleDifficultyChange = (difficulty: string) => {
  //   setSelectedDifficulty(difficulty);
  //   setCurrentPage(1);
  // };

  const handleIsHotChange = (value: boolean | undefined) => {
    setIsHot(value);
    setCurrentPage(1);
  };

  if (isLoading) return <LoadingState />;
  if (isError)
    return (
      <ErrorState
        message={error?.message || "Lỗi tải danh sách nghi lễ"}
        onRetry={() => refetch()}
      />
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Danh Sách Nghi Lễ
          </h1>
          <p className="text-sm text-muted-foreground">
            Tìm hiểu cách chuẩn bị và thực hiện các nghi lễ truyền thống.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <RitualFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        isHot={isHot}
        onIsHotChange={handleIsHotChange}
      />

      {/* Grid List */}
      {rituals.length === 0 ? (
        <EmptyState message="Không tìm thấy nghi lễ nào phù hợp với bộ lọc." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rituals.map((ritual) => (
            <RitualCard key={ritual.id} ritual={ritual} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination && (
        <Pagination meta={pagination} onPageChange={handlePageChange} />
      )}
    </div>
  );
}
