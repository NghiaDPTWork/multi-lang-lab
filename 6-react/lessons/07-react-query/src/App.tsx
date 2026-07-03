import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Lesson 07: TanStack Query (React Query)</h1>
        <UserList />
      </div>
    </div>
  );
}
