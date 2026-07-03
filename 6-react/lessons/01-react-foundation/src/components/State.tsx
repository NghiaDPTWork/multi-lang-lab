import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div className="p-4 border rounded bg-gray-900 text-white">
      <h3 className="font-bold mb-2">1. Basic State</h3>
      <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-blue-600 rounded cursor-pointer mr-2">
        Count: {count}
      </button>
      <button onClick={() => setShow(!show)} className="px-3 py-1 bg-gray-600 rounded cursor-pointer">
        Toggle
      </button>
      {show && <p className="mt-2 text-green-400">Hello World!</p>}
    </div>
  );
}
