const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const CELL = 75;

const lvls = { 
  1:[
  [0, 0, 0, 0, 0, 0 ,0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
],
2:[
  [0, 0, 0, 0, 0, 0 ,0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
],
3:[
  [0, 0, 0, 0, 0, 1 ,0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
],
4:[
  [0, 0, 0, 1, 1, 1 ,0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
],
5:[
  [0, 1, 1, 1, 0, 0 ,0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]
};

function drawBoard(lvl) {
  const board = lvls[lvl];
  const end = finish[lvl];
  canvas.style.display = "block";
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x]) {
        ctx.fillStyle = (x + y) % 2 === 0 ? "#ffffff" : "#000000";
      } else {
        ctx.fillStyle = "#DEB887";
      }
      ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
    }
  }
  if (end) {
    ctx.fillStyle = "#F08080";
    ctx.fillRect(end.x * CELL, end.y * CELL, CELL, CELL);
  }
}
document.getElementById("1lvl").addEventListener("click", () => drawBoard(1));
document.getElementById("2lvl").addEventListener("click", () => drawBoard(2));
document.getElementById("3lvl").addEventListener("click", () => drawBoard(3));
document.getElementById("4lvl").addEventListener("click", () => drawBoard(4));
document.getElementById("5lvl").addEventListener("click", () => drawBoard(5));