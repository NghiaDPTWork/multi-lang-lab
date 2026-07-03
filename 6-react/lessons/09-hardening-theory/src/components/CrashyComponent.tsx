import { useState } from "react";

export default function CrashyComponent() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("Lỗi giả lập từ CrashyComponent!");
  }

  return (
    <div className="p-4 border rounded bg-white shadow-xs space-y-2">
      <h3 className="font-bold text-sm">Hợp phần dễ xảy ra lỗi</h3>
      <p className="text-xs text-muted-foreground">Bấm nút bên dưới để cố ý ném lỗi lúc render.</p>
      <button
        onClick={() => setShouldCrash(true)}
        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded cursor-pointer"
      >
        Gây crash component
      </button>
    </div>
  );
}
