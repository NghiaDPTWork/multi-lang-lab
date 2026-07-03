import { useState } from "react";
import Button from "./Button";

export default function Props() {
  const [score, setScore] = useState(0);

  return (
    <div className="p-4 border rounded bg-gray-900 text-white">
      <h3 className="font-bold mb-2">2. Inverse Props</h3>
      <p className="mb-2">Score in Parent: {score}</p>
      <Button onAdd={() => setScore(score + 1)} />
    </div>
  );
}
