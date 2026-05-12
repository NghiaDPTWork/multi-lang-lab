import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const userName = "Nghia Duong";

  return (
    <>
      <section id="center">
        <div>
          <h1>Hello, {userName}!</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  );
}

export default App;
