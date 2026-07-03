// rfc => React Function Component

import { useState } from "react";

const Hello = (props: { name: string }) => {
  const [name, setName] = useState("Hello");

  return (
    <div>
      <h2 className="text-xl font-bold text-cyan-400">
        Props từ Cha: {props.name}{" "}
      </h2>
      <p className="text-sm text-gray-300 mb-1">
        State nội bộ: {name || "(Chưa nhập gì)"}
      </p>
    </div>
  );
};

export default Hello;
