interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = "Đang tải dữ liệu...",
}: LoadingStateProps) {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-3 text-gray-500">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
