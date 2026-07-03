import "./App.css";
import Card from "./components/Card";
import LogicalAndLesson from "./components/LogicalAndLesson";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300 p-6 font-sans">
      <h1 className="text-3xl font-extrabold text-white text-center mb-6">
        React Core Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <p className="text-sm text-emerald-400">
            Directly Injected Children!
          </p>
        </Card>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <LogicalAndLesson />
      </div>
    </div>
  );
}

