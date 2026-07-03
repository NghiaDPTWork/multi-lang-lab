export default function HeavyContent() {
  return (
    <div className="p-4 border border-green-200 bg-green-50 text-green-800 rounded-lg shadow-xs space-y-1">
      <h3 className="font-bold text-sm">Nội dung nặng (Được load Lazily)</h3>
      <p className="text-xs">Tệp tin bundle này chỉ được tải xuống trình duyệt khi component được kích hoạt hiển thị!</p>
    </div>
  );
}
