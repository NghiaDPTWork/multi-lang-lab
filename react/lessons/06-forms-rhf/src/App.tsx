import RegisterForm from "./components/RegisterForm";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Lesson 06: React Hook Form & Zod</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
