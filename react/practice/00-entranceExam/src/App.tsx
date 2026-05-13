import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const userName = "Nghia Duong";

  let statusText = "Normal";
  let statusColor = "green";

  if (count > 5) {
    statusText = "Too many!";
    statusColor = "red";
  } else if (count > 3) {
    statusText = "Getting high...";
    statusColor = "orange";
  }

  let messageText = "";
  if (count === 1) {
    messageText = "Good start!";
  } else if (count === 10) {
    messageText = "You reached 10!";
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Hello, {userName}!</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count is {count}
        </button>

        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ fontWeight: "bold", margin: "0" }}>
            Trạng thái: <span style={{ color: statusColor }}>{statusText}</span>
          </p>
        </div>

        {messageText && (
          <div
            style={{ marginTop: "0.5rem", fontStyle: "italic", color: "#555" }}
          >
            Thông báo: {messageText}
          </div>
        )}
      </section>

      <div className="ticks"></div>
    </>
  );
}

export default App;
