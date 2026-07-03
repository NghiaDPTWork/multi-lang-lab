import React from "react";

// 5. Composition
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border-2 border-dashed border-gray-600 rounded bg-gray-900 text-white">
      <h3 className="font-bold mb-2">5. Composition</h3>
      <div className="p-2 bg-gray-800 rounded">{children}</div>
    </div>
  );
}
