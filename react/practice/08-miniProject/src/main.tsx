import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ color: "#0070f3" }}>FestiveHub Practice Project</h1>
      <p>Ứng dụng đã sẵn sàng. Hãy bắt đầu xây dựng giao diện và logic của bạn tại đây!</p>
    </div>
  </StrictMode>
);
