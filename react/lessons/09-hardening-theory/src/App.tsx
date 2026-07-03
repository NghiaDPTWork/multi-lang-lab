import { useState, lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import CrashyComponent from "./components/CrashyComponent";

// Lazy load HeavyContent
const HeavyContent = lazy(() => import("./components/HeavyContent"));

export default function App() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex justify-center">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-2xl font-bold text-center mb-6">Lesson 09: Production Hardening</h1>

        {/* Section 1: Error Boundary */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">1. Error Boundary (Cơ chế cô lập lỗi)</h2>
          <ErrorBoundary>
            <CrashyComponent />
          </ErrorBoundary>
        </section>

        {/* Section 2: Lazy Loading */}
        <section className="space-y-4 border-t pt-6">
          <h2 className="text-lg font-bold">2. Lazy Loading (Tải chậm tối ưu bundle)</h2>
          <button
            onClick={() => setShowHeavy(!showHeavy)}
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded text-sm font-medium cursor-pointer"
          >
            {showHeavy ? "Ẩn hợp phần nặng" : "Tải & Hiện hợp phần nặng"}
          </button>
          
          {showHeavy && (
            <Suspense fallback={<div className="text-xs text-gray-500 animate-pulse">Đang tải bundle của HeavyContent...</div>}>
              <HeavyContent />
            </Suspense>
          )}
        </section>
      </div>
    </div>
  );
}
