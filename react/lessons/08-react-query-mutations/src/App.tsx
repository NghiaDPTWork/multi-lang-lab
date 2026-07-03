import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex justify-center">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-center mb-6">Lesson 08: TanStack Query Mutations</h1>
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
}
