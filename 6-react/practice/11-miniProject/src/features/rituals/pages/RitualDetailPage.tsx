import { useParams, Link } from "react-router-dom";
import { useRitualDetails } from "../hooks/useRitual";
import { LoadingState, ErrorState } from "@/shared/components";

export default function RitualDetailPage() {
  const { id } = useParams<{ id: string }>();
  const {
    data: ritual,
    isLoading: isLoadingRitual,
    isError: isErrorRitual,
    error: ritualError,
  } = useRitualDetails(id || "");

  if (isLoadingRitual) return <LoadingState message="Đang tải chi tiết nghi lễ..." />;
  if (isErrorRitual || !ritual)
    return (
      <ErrorState
        message={ritualError?.message || "Không tìm thấy thông tin nghi lễ"}
      />
    );

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
    <div className="max-w-2xl mx-auto space-y-4 pb-10">
      <Link
        to="/rituals"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← Quay lại danh sách
      </Link>

      <div className="bg-white border rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
        {/* Tiêu đề & Độ khó */}
        <div className="border-b pb-4 flex justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {ritual.name}
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Nguồn: {ritual.reference || "Dân gian truyền miệng"}
            </p>
          </div>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full border capitalize shrink-0 ${getDifficultyStyles(
              ritual.difficultyLevel,
            )}`}
          >
            {ritual.difficultyLevel}
          </span>
        </div>

        {/* Thông tin thời gian */}
        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm border">
          <div>
            <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider mb-0.5">
              Ngày Âm lịch
            </span>
            <span className="font-semibold text-gray-800">
              {ritual.dateLunar}
            </span>
          </div>
          {ritual.timeOfExecution && (
            <div>
              <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider mb-0.5">
                Giờ thực hiện
              </span>
              <span className="font-semibold text-gray-800">
                {ritual.timeOfExecution}
              </span>
            </div>
          )}
        </div>

        {/* Giới thiệu */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">Giới thiệu nghi lễ</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {ritual.description}
          </p>
        </div>

        {/* Văn khấn */}
        <div className="space-y-3 border-t pt-5">
          <h2 className="text-lg font-bold text-gray-900">Nội dung văn khấn</h2>
          <div className="bg-amber-50/30 border border-amber-100 rounded-lg p-5 md:p-6 text-amber-950 leading-relaxed text-sm md:text-base whitespace-pre-line font-serif italic shadow-inner">
            {ritual.content}
          </div>
        </div>
      </div>
    </div>
  );
}
