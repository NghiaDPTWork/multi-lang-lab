interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({ message = "Đã xảy ra lỗi", onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-3 border border-red-200 bg-red-50 rounded-md text-red-700 max-w-md mx-auto">
      <p className="font-semibold">{message}</p>
      <button
        onClick={onRetry || (() => window.location.reload())}
        className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-sm cursor-pointer transition-colors"
      >
        Thử lại
      </button>
    </div>
  )
}
