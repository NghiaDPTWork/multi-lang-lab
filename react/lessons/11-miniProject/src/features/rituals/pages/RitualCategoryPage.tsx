import { useState } from "react";
import { useRitual } from "../hooks/useRitual";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { LoadingState, ErrorState, EmptyState } from "@/shared/components/common";
import { Search, Flame, Calendar, Award } from "lucide-react";

export default function RitualCategoryPage() {
  const { data: rituals, isLoading, isError, error, refetch } = useRitual();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState message={error?.message || "Lỗi tải danh sách nghi lễ"} onRetry={() => refetch()} />;

  const filteredRituals = (rituals || []).filter((ritual) => {
    const matchesSearch = ritual.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ritual.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || ritual.difficultyLevel === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const difficulties = ["dễ", "trung bình", "khó", "rất khó"];

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "dễ":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "trung bình":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "khó":
        return "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20";
      case "rất khó":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Danh Sách Nghi Lễ</h1>
          <p className="text-sm text-muted-foreground">Tìm hiểu cách chuẩn bị và thực hiện các nghi lễ truyền thống.</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm nghi lễ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-transparent border-input rounded"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <Button
            variant={selectedDifficulty === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedDifficulty("all")}
            className="cursor-pointer text-xs"
          >
            Tất cả
          </Button>
          {difficulties.map((level) => (
            <Button
              key={level}
              variant={selectedDifficulty === level ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty(level)}
              className="cursor-pointer text-xs capitalize"
            >
              {level}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      {filteredRituals.length === 0 ? (
        <EmptyState message="Không tìm thấy nghi lễ nào phù hợp với bộ lọc." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRituals.map((ritual) => (
            <Card key={ritual.id} className="group relative overflow-hidden border bg-card rounded-lg transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                        <Link to={`/rituals/${ritual.id}`}>{ritual.name}</Link>
                      </CardTitle>
                      {ritual.isHot && (
                        <Badge variant="destructive" className="flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full bg-red-500 text-white border-0">
                          <Flame className="w-3 h-3 fill-current" />
                          Hot
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-xs text-muted-foreground line-clamp-1">
                      {ritual.reference || "Nguồn dân gian"}
                    </CardDescription>
                  </div>
                  <Badge className={`${getDifficultyColor(ritual.difficultyLevel)} border-0 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full`}>
                    {ritual.difficultyLevel}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {ritual.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Âm lịch: {ritual.dateLunar}
                    </span>
                    {ritual.timeOfExecution && (
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        Giờ: {ritual.timeOfExecution}
                      </span>
                    )}
                  </div>
                  <Button variant="link" size="sm" asChild className="p-0 h-auto cursor-pointer font-medium text-primary hover:underline">
                    <Link to={`/rituals/${ritual.id}`}>Xem chi tiết →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
