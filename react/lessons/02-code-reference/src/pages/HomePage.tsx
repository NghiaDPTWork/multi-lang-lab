import LogicalAndLesson from "../components/LogicalAndLesson";

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to ShopApp</h1>
      <p className="text-gray-500 mt-4">This is the Home Page</p>

      {/* Lesson Component */}
      <LogicalAndLesson />
    </div>
  );
}
