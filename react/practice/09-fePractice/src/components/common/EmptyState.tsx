interface EmptyStateProps {
  message?: string
}

export function EmptyState({ message = "Không có dữ liệu nào" }: EmptyStateProps) {
  return (
    <div className="text-center p-8 text-slate-500 border border-dashed rounded-md max-w-md mx-auto">
      {message}
    </div>
  )
}
