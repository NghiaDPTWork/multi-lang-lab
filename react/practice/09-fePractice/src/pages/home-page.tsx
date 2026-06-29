export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4 text-center">
      <h1 className="text-3xl font-bold">Homepage</h1>
      <p className="text-muted-foreground text-sm">Hệ thống Quản lý & Chấm công</p>
      <div className="text-xs text-muted-foreground border rounded-md p-2 bg-muted/40">
        Demo Accounts: admin@example.com (admin123) | employee@example.com (employee123)
      </div>
    </div>
  )
}
