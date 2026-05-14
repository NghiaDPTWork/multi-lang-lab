import "./App.css";
import State from "./components/State";
import Props from "./components/Props";
import Form from "./components/Form";
import Crud from "./components/Crud";
import Card from "./components/Card";
import Hello from "./components/Hello";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-6 font-sans">
      <h1 className="text-3xl font-extrabold text-white text-center mb-6">
        React Core Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <State />
        <Props />
        <Form />
        <Card>
          <p className="text-sm text-emerald-400">
            Directly Injected Children!
          </p>
          <Hello name="Nghia Duong" />
        </Card>
        <Crud />
      </div>
    </div>
  );
}
