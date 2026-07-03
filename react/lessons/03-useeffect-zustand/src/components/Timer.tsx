import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Hàm dọn dẹp (Cleanup) để tránh rò rỉ bộ nhớ khi Component unmount
    return () => {
      clearInterval(interval);
      console.log("Timer cleanup!");
    };
  }, []);

  return (
    <div className="p-4 border rounded bg-card shadow-xs">
      <h3 className="font-bold text-lg text-primary">Bộ đếm thời gian</h3>
      <p className="text-sm">Đã chạy: <span className="font-bold text-red-500">{seconds}</span> giây</p>
    </div>
  );
}
