export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-2">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xs text-slate-500">Đang tải dữ liệu...</p>
    </div>
  )
}
