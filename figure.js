let selectFigure = null; 
let lvl = 1;
const figure = []; 

class Figure {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = `img/${type}.png`;
  }
  draw() {
    ctx.drawImage(this.img, this.x * CELL, this.y * CELL, CELL, CELL);
  }

  canMoveTo(x, y) {
    const dx = x - this.x;
    const dy = y - this.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const board = lvls[lvl];

    if (x < 0 || y < 0 || y >= board.length || x >= board[0].length) return false;
    if (board[y][x] === 0) return false;

    switch (this.type) {
      case "king":
        return absDx <= 1 && absDy <= 1;
      case "queen":
        return (dx === 0 || dy === 0 || absDx === absDy) && pathClear(this, x, y);
      case "rook":
        return (dx === 0 || dy === 0) && pathClear(this, x, y);
      case "elephant":
        return (absDx === absDy) && pathClear(this, x, y);
      case "horse":
        return (absDx === 2 && absDy === 1) || (absDx === 1 && absDy === 2);
      default:
        return false;
    }
  }
}

let compliteLvl = new Set();
function update() {
  const progres = (compliteLvl.size / 5) * 100;
  document.getElementById("bar").style.width = `${progres}%`;
}

function unlock (level) {
  const button = document.getElementById(`${level}lvl`);
  if (button) {
    button.disabled = false;
  }
}
function pathClear(piece, x, y) {
  let dx = Math.sign(x - piece.x);
  let dy = Math.sign(y - piece.y);
  let cx = piece.x + dx;
  let cy = piece.y + dy;

  while (cx !== x || cy !== y) {
    if (figure.some(p => p.x === cx && p.y === cy)) return false; 
    if (lvls[lvl][cy][cx] === 0) return false;
    cx += dx;
    cy += dy;
  }
  return true;
}

function addFigure(type, x, y) {
  figure.push(new Figure(type, x, y));
}
function drawFigure() {
  for (const p of figure) { 
    p.draw();
  }
}

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / CELL);
  const y = Math.floor((e.clientY - rect.top) / CELL);
  const clicked = figure.find(p => p.x === x && p.y === y); 

  if (clicked) {
    selectFigure = clicked; 
  } else if (selectFigure && selectFigure.canMoveTo(x, y)) { 
    selectFigure.x = x;
    selectFigure.y = y;
    if (selectFigure.type == "king") {
      const end = finish[lvl];
      if (end && selectFigure.x === end.x && selectFigure.y === end.y) {
  setTimeout(() => {
    alert(`Уровень ${lvl} пройден!`);
    compliteLvl.add(lvl);
    update();
    if (lvl < 5) {
      lvl++;
      unlock(lvl);
      handleLevelClick(lvl);
    } else {
      alert("Поздравляю, Вы прошли все уровни");
    }
  }, 50);};
};
    selectFigure = null;
  } else {
    selectFigure = null;
  }
  drawBoard(lvl);
  if (selectFigure) {
  ctx.fillStyle = "#00FF7F";
  ctx.fillRect(selectFigure.x * CELL, selectFigure.y * CELL, CELL, CELL);
}
  drawFigure();
});

function setupLevelFigure(lvl) {
  figure.length = 0;
  if (lvl === 1) {
    addFigure("king", 0, 1);
    addFigure("queen", 0, 2);
    addFigure("rook", 1, 3);
    addFigure("rook", 1, 2);
    addFigure("elephant", 5, 7);
    addFigure("horse", 3, 4);
  }
  if (lvl===2) {
    addFigure("king", 0, 7);
    addFigure("elephant", 0, 6);
    addFigure("elephant", 1, 4);
    addFigure("horse", 1, 6);
    addFigure("horse", 0, 4);
    addFigure("horse", 2, 3);
    addFigure("queen", 1, 5);
  }
  if (lvl === 3) {
    addFigure("king", 4, 1);
    addFigure("elephant", 5, 2);
    addFigure("horse", 6, 1);
    addFigure("horse", 6, 3);
    addFigure("horse", 5, 3);
    addFigure("horse", 6, 5);
    addFigure("horse", 5, 5);
    addFigure("rook", 5, 6);
    addFigure("rook", 5, 1);
  }
  if (lvl === 4) {
    addFigure("king", 3, 0);
    addFigure("rook", 4, 0);
    addFigure("horse", 4, 1);
    addFigure("horse", 4, 2);
    addFigure("horse", 4, 3);
    addFigure("horse", 3, 3);
    addFigure("horse", 2, 3);
    addFigure("horse", 5, 3);
    addFigure("horse", 6, 3);
    addFigure("horse", 2, 4);
    addFigure("horse", 2, 5);
    addFigure("horse", 3, 4);
    addFigure("horse", 3, 5);
    addFigure("horse", 4, 5);
    addFigure("horse", 5, 5);
    addFigure("horse", 6, 5);
    addFigure("horse", 5, 4);
    addFigure("horse", 6, 4);
  }
  if (lvl === 5) {
    addFigure("king", 1, 0);
    addFigure("elephant", 2, 0);
    addFigure("elephant", 3, 2);
    addFigure("elephant", 3, 3);
    addFigure("elephant", 5, 3);
    addFigure("horse", 1, 1);
    addFigure("horse", 3, 1);
    addFigure("horse", 4, 3);
    addFigure("horse", 5, 4);
    addFigure("rook", 2, 1);
    addFigure("rook", 2, 2);
    addFigure("rook", 4, 2);
    addFigure("rook", 4, 4);
  }
};
const finish = {
  1:{x: 6, y: 7},
  2:{x: 2, y: 4},
  3:{x: 5, y: 7},
  4:{x: 5, y: 0},
  5:{x: 6, y: 5},
};

function handleLevelClick(levels) {
  lvl = levels;
  drawBoard(levels);
  setupLevelFigure(levels);
  drawFigure();
};
document.getElementById("1lvl").addEventListener("click", () => handleLevelClick(1));
document.getElementById("2lvl").addEventListener("click", () => handleLevelClick(2));
document.getElementById("3lvl").addEventListener("click", () => handleLevelClick(3));
document.getElementById("4lvl").addEventListener("click", () => handleLevelClick(4));
document.getElementById("5lvl").addEventListener("click", () => handleLevelClick(5));