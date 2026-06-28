interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export default function ErrorState({ message = "Có lỗi xảy ra", onRetry }: ErrorStateProps) {
  return (
    <div className="p-6 text-center space-y-3 bg-red-50 text-red-700 rounded-lg max-w-sm mx-auto">
      <p className="text-sm font-medium">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded cursor-pointer transition">
          Thử lại
        </button>
      )}
    </div>
  )
}
