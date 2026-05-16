/* 
    =================================================
    PROJECT: SCISSORS - ROCK - PAPER (KÉO BÚA BAO)
    =================================================
    
    1. MỤC TIÊU DỰ ÁN
       - Xây dựng trò chơi Kéo Búa Bao với máy.
       - Thực hành logic so sánh (Index logic).
       - Thực hành setInterval và clearInterval để làm hiệu ứng máy chọn.

    2. LOGIC SO SÁNH (Check)
       - Thắng: indexPlayer - indexComputer = -2 hoặc 1.
       - Hòa: indexPlayer - indexComputer = 0.
       - Thua: Các trường hợp còn lại.
*/

// TOPIC: Cấu hình và Dữ liệu
let VALUE = [
  { id: "scissors", value: "✌️" },
  { id: "rock", value: "✊" },
  { id: "paper", value: "🖐" },
];

let i = 0;
let handleChange = () => {
  let computer = document.querySelector("#computer");
  computer.innerHTML = VALUE[i].value;
  computer.dataset.id = VALUE[i].id;
  i = (i + 1) % 3;
};

let interval = setInterval(handleChange, 100);

// TOPIC: Xử lý khi người chơi chọn
let playerItems = document.querySelectorAll(".user");
playerItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    clearInterval(interval);
    
    playerItems.forEach((_item) => {
      _item.classList.remove("actived");
      _item.style.pointerEvents = "none";
    });
    event.target.classList.add("actived");

    let idPlayer = event.target.id;
    let idComputer = document.querySelector("#computer").dataset.id;
    
    // So sánh
    let indexP = VALUE.findIndex(v => v.id == idPlayer);
    let indexC = VALUE.findIndex(v => v.id == idComputer);
    let check = indexP - indexC;
    
    let msg, color;
    if (check == -2 || check == 1) { msg = "Bạn THẮNG rồi!"; color = "success"; }
    else if (check == 0) { msg = "HÒA rồi!"; color = "warning"; }
    else { msg = "Bạn THUA máy rồi!"; color = "danger"; }

    let alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${color}`;
    alertDiv.innerHTML = msg;
    document.querySelector(".notification").appendChild(alertDiv);
    document.querySelector("#play-again").classList.remove("d-none");
  });
});

// TOPIC: Chơi lại
document.querySelector(".btn-play-again").addEventListener("click", () => {
  interval = setInterval(handleChange, 100);
  playerItems.forEach((_item) => {
    _item.classList.remove("actived");
    _item.style.pointerEvents = "";
  });
  document.querySelector(".notification").innerHTML = "";
  document.querySelector("#play-again").classList.add("d-none");
});
