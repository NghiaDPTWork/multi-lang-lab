export function EmptyState({ message = "Không tìm thấy dữ liệu phù hợp" }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 border border-dashed rounded-lg">
      <p className="text-muted-foreground font-medium">{message}</p>
    </div>
  )
}
