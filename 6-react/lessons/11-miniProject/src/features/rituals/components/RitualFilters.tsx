import { Search } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

export interface RitualFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

const DIFFICULTIES = ["dễ", "trung bình", "khó", "rất khó"];

export function RitualFilters({
  searchTerm,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
}: RitualFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Tìm kiếm nghi lễ..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 bg-transparent border-input rounded"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        <Button
          variant={selectedDifficulty === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => onDifficultyChange("all")}
          className="cursor-pointer text-xs"
        >
          Tất cả
        </Button>
        {DIFFICULTIES.map((level) => (
          <Button
            key={level}
            variant={selectedDifficulty === level ? "default" : "outline"}
            size="sm"
            onClick={() => onDifficultyChange(level)}
            className="cursor-pointer text-xs capitalize"
          >
            {level}
          </Button>
        ))}
      </div>
    </div>
  );
}
