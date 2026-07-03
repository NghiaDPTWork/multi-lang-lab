import { useState } from "react";

export default function Crud() {
  const [list, setList] = useState([
    { id: 1, txt: "Learn React" },
    { id: 2, txt: "Build App" },
  ]);
  const [inp, setInp] = useState("");

  const add = () => {
    if (inp.trim()) {
      setList([...list, { id: Date.now(), txt: inp }]);
      setInp("");
    }
  };

  const del = (id: number) => setList(list.filter((x) => x.id !== id));

  const edit = (id: number) =>
    setList(list.map((x) => (x.id === id ? { ...x, txt: x.txt + " ✅" } : x)));

  return (
    <div className="p-4 border rounded bg-gray-900 text-white col-span-full">
      <h3 className="font-bold mb-2">4. Immutability CRUD</h3>
      <div className="flex gap-2 mb-2">
        <input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          className="border p-1 rounded bg-gray-800 flex-1"
        />
        <button onClick={add} className="px-3 bg-red-600 rounded cursor-pointer">Add</button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id} className="flex justify-between border-b py-1 border-gray-800">
            <span>{item.txt}</span>
            <div className="flex gap-2">
              <button onClick={() => edit(item.id)} className="text-blue-400 cursor-pointer">Done</button>
              <button onClick={() => del(item.id)} className="text-red-400 cursor-pointer">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
