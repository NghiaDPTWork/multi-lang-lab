export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-4">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground text-sm font-medium">
        Đang tải dữ liệu...
      </p>
    </div>
  )
}
