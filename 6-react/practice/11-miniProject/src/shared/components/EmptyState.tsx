interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({
  message = "Không có dữ liệu hiển thị.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-4 text-center border border-dashed rounded-lg bg-gray-50/50 text-gray-500">
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
