import { useRituals } from "../hooks/useRitual";
import { Link } from "react-router-dom";
import { LoadingState, ErrorState, EmptyState } from "@/shared/components";

export default function RitualCategoryPage() {
  const {
    data: rituals,
    isLoading: isLoadingRituals,
    isError: isErrorRituals,
    error: ritualsError,
  } = useRituals();

  if (isLoadingRituals) return <LoadingState />;
  if (isErrorRituals)
    return (
      <ErrorState
        message={ritualsError?.message || "Lỗi tải danh sách nghi lễ"}
      />
    );
  if (!rituals || rituals.length === 0)
    return <EmptyState message="Không có nghi lễ nào." />;

  const getDifficultyStyles = (level: string) => {
    switch (level) {
      case "dễ":
        return "bg-green-50 text-green-700 border-green-200";
      case "trung bình":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "khó":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "rất khó":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Danh Sách Nghi Lễ
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Tìm hiểu cách chuẩn bị và thực hiện các nghi lễ truyền thống.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rituals.map((ritual) => (
          <div
            key={ritual.id}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <h2 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <Link to={`/rituals/${ritual.id}`}>{ritual.name}</Link>
                </h2>
                <span
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border capitalize shrink-0 ${getDifficultyStyles(
                    ritual.difficultyLevel,
                  )}`}
                >
                  {ritual.difficultyLevel}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-5 leading-relaxed">
                {ritual.description}
              </p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3 mt-auto">
              <div className="flex gap-4">
                <span>
                  Âm lịch: {ritual.dateLunar}
                </span>
                {ritual.timeOfExecution && (
                  <span>
                    Giờ: {ritual.timeOfExecution}
                  </span>
                )}
              </div>
              <Link
                to={`/rituals/${ritual.id}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                Chi tiết →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
