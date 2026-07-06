interface ErrorStateProps {
  message?: string;
}

export default function ErrorState({
  message = "Đã xảy ra lỗi khi tải dữ liệu.",
}: ErrorStateProps) {
  return (
    <div className="text-red-500 p-4 border border-red-200 rounded-md bg-red-50 text-center text-sm font-medium">
      {message}
    </div>
  );
}
