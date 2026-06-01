import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center py-16 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Welcome to ShopApp
      </h1>
      <p className="text-slate-500 max-w-md mx-auto">
        Đây là giao diện trang chủ cơ bản của bài học. Hãy điều hướng đến trang Login hoặc Profile để xem thêm.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/login">
          <Button className="cursor-pointer">Get Started</Button>
        </Link>
      </div>
      <img
        src="../assets/1.jpg"
        alt="Picture"
        className="mx-auto mt-10 rounded-lg shadow-md w-full max-w-md border border-slate-200"
      />
    </div>
  );
}

