interface ErrorStateProps {
  message?: string
  onRetry: () => void
}

export function ErrorState({
  message = "Có lỗi xảy ra khi tải dữ liệu",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-4 border border-destructive/20 bg-destructive/5 rounded-lg">
      <p className="text-destructive font-medium">{message}</p>
      <button
        onClick={onRetry}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium cursor-pointer"
      >
        Thử lại
      </button>
    </div>
  )
}
