import { useState } from "react";

export default function Form() {
  const [val, setVal] = useState("");

  return (
    <div className="p-4 border rounded bg-gray-900 text-white">
      <h3 className="font-bold mb-2">3. Controlled Form</h3>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="border p-1 rounded bg-gray-800 w-full outline-none"
        placeholder="Type something..."
      />
      <p className="mt-2 text-yellow-400">Live: {val || "(empty...)"}</p>
    </div>
  );
}
