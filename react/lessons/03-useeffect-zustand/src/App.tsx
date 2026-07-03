import { useState } from "react";
import { useThemeStore } from "./store/themeStore";
import UserProfile from "./components/UserProfile";
import Timer from "./components/Timer";

export default function App() {
  const { theme, toggleTheme } = useThemeStore();
  const [userId, setUserId] = useState("1");
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className={`min-h-screen p-8 transition-colors ${theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}>
      <div className="max-w-xl mx-auto space-y-8">
        <header className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold">Lesson 03: useEffect & Zustand</h1>
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 border rounded text-sm hover:opacity-90 font-medium cursor-pointer"
          >
            Chế độ: {theme === "light" ? "Sáng" : "Tối"}
          </button>
        </header>

        {/* Section 1: useEffect Data Fetching */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">1. useEffect Data Fetching (Derived State)</h2>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((id) => (
              <button
                key={id}
                onClick={() => setUserId(id.toString())}
                className={`px-3 py-1 border rounded text-xs cursor-pointer ${userId === id.toString() ? "bg-primary text-white" : ""}`}
              >
                User {id}
              </button>
            ))}
          </div>
          <UserProfile userId={userId} />
        </section>

        {/* Section 2: useEffect Cleanup */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">2. useEffect Cleanup</h2>
          <button
            onClick={() => setShowTimer(!showTimer)}
            className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 cursor-pointer"
          >
            {showTimer ? "Ẩn bộ đếm" : "Hiện bộ đếm"}
          </button>
          {showTimer && <Timer />}
        </section>
      </div>
    </div>
  );
}
