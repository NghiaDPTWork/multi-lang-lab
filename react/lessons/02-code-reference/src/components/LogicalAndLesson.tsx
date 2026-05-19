export default function LogicalAndLesson() {
  return (
    <div className="mt-12 bg-white border border-slate-100 shadow-xl rounded-2xl p-8 text-left max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white text-sm font-bold">
          💡
        </span>
        React Conditional Rendering & Logical AND (&&)
      </h2>

      <p className="text-slate-600 mb-8 text-sm leading-relaxed">
        Trong React JSX, ngoặc nhọn{" "}
        <code className="bg-slate-100 text-pink-600 px-1.5 py-0.5 rounded text-xs font-mono">{`{}`}</code>{" "}
        tính toán biểu thức JavaScript trước rồi mới hiển thị kết quả cuối cùng.
      </p>

      <div className="space-y-6">
        {/* Item 1 */}
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
              {`{null && <p>Hello</p>}`}
            </span>
            <span className="text-xs text-slate-400">
              Kết quả JS: <code className="text-pink-600 font-mono">null</code>
            </span>
          </div>
          <div className="text-sm text-slate-700 bg-slate-50 p-2.5 rounded flex items-center gap-2">
            <strong>Giao diện hiển thị:</strong>
            <span className="text-slate-400 italic text-xs">
              (Trống - null không render)
            </span>
            {null && <p>Hello</p>}
          </div>
        </div>

        {/* Item 2 */}
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
              {`{[1, 2, 3].length && 0}`}
            </span>
            <span className="text-xs text-slate-400">
              Kết quả JS: <code className="text-pink-600 font-mono">0</code>
            </span>
          </div>
          <div className="text-sm text-slate-700 bg-slate-50 p-2.5 rounded flex items-center gap-2">
            <strong>Giao diện hiển thị:</strong>
            <span className="inline-block px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded">
              {[1, 2, 3].length && 0}
            </span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
              {`{[1, 2, 3].length && "hello"}`}
            </span>
            <span className="text-xs text-slate-400">
              Kết quả JS:{" "}
              <code className="text-pink-600 font-mono">"hello"</code>
            </span>
          </div>
          <div className="text-sm text-slate-700 bg-slate-50 p-2.5 rounded flex items-center gap-2">
            <strong>Giao diện hiển thị:</strong>
            <span className="inline-block px-2.5 py-0.5 text-xs font-bold bg-green-100 text-green-800 rounded">
              {[1, 2, 3].length && "hello"}
            </span>
          </div>
        </div>

        {/* Item 4 */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
              {`{2 && [1, 2, 3].length}`}
            </span>
            <span className="text-xs text-slate-400">
              Kết quả JS: <code className="text-pink-600 font-mono">3</code>
            </span>
          </div>
          <div className="text-sm text-slate-700 bg-slate-50 p-2.5 rounded flex items-center gap-2">
            <strong>Giao diện hiển thị:</strong>
            <span className="inline-block px-2.5 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-800 rounded">
              {2 && [1, 2, 3].length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
