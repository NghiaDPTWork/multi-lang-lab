interface EmptyStateProps {
  message?: string
}

export default function EmptyState({ message = "Không tìm thấy dữ liệu" }: EmptyStateProps) {
  return (
    <div className="p-8 text-center border border-dashed rounded-lg text-slate-400 bg-slate-50">
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}
