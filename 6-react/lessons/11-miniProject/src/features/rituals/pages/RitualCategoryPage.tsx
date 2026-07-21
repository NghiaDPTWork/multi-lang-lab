import { useState } from "react";
import { useRituals } from "../hooks/useRitual";
import {
  LoadingState,
  ErrorState,
  EmptyState,
} from "@/shared/components/common";
import { RitualCard, RitualFilters } from "../components";

export default function RitualCategoryPage() {
  const { rituals, isLoading, isError, error, refetch } = useRituals();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  if (isLoading) return <LoadingState />;
  if (isError)
    return (
      <ErrorState
        message={error?.message || "Lỗi tải danh sách nghi lễ"}
        onRetry={() => refetch()}
      />
    );

  const filteredRituals = rituals.filter((ritual) => {
    const matchesSearch =
      ritual.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ritual.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      ritual.difficultyLevel === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

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
        onSearchChange={setSearchTerm}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
      />

      {/* Grid List */}
      {filteredRituals.length === 0 ? (
        <EmptyState message="Không tìm thấy nghi lễ nào phù hợp với bộ lọc." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRituals.map((ritual) => (
            <RitualCard key={ritual.id} ritual={ritual} />
          ))}
        </div>
      )}
    </div>
  );
}
