const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const blockColor = "rgb(1, 122, 221)";
const configModal = document.getElementById("config-modal");
const slider = document.getElementById("gridSizeSlider");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const customStartBtn = document.getElementById("custom-start-btn");
const seedWrapper = document.getElementById("seed-wrapper");
const showGridCheckBox = document.getElementById("show-grid");

let blockSize = Number(slider.value) || 50;
let rows = canvas.height / blockSize;
let cols = canvas.width / blockSize;
let animationId;
let grid = matrix(rows, cols);
let seedType = "blinker";
let startLife = false;
let showGrid = true;

function stopDrawing() {
  canvas.removeEventListener("click", mouseClickEventHandler);
  canvas.removeEventListener("touchstart", touchstartEventHandler);

  canvas.classList.remove("drawing");
  configModal.style.display = "block";
  resetBtn.style.display = "none";
  customStartBtn.style.display = "none";
}

function startDrawing() {
  // removing previously added listners
  canvas.removeEventListener("click", mouseClickEventHandler);
  canvas.removeEventListener("touchstart", touchstartEventHandler);

  canvas.addEventListener("click", mouseClickEventHandler);
  canvas.addEventListener("touchstart", touchstartEventHandler);

  canvas.classList.add("drawing");
  customStartBtn.style.display = "block";
  configModal.style.display = "none";
  resetBtn.style.display = "none";
  customStartBtn.style.display = "block";
}

function matrix(rows, cols) {
  rows = Math.floor(rows);
  cols = Math.floor(cols);

  const arr = new Array(rows);
  let i, l;

  for (i = 0, l = cols; i < l; i++) {
    arr[i] = new Array(rows).fill(0);
  }
  return arr;
}

function drawGrid() {
  const gridStyle = "rgb(256, 256, 256)";
  for (let i = 0; i < cols; i++) {
    ctx.strokeStyle = gridStyle;
    ctx.beginPath();
    ctx.moveTo(i * blockSize, 0);
    ctx.lineTo(i * blockSize, canvas.height);
    ctx.stroke();
  }
  for (let i = 0; i < rows; i++) {
    ctx.strokeStyle = gridStyle;
    ctx.beginPath();
    ctx.moveTo(0, i * blockSize);
    ctx.lineTo(canvas.width, i * blockSize);
    ctx.stroke();
  }
}

function initLifeSeed() {
  const midX = Math.floor(cols / 2);
  const midY = Math.floor(rows / 2);

  grid = matrix(rows, cols);

  if (seedType === "glider") {
    if (grid[1]) {
      grid[1][midY] = 1;
      grid[1][midY + 3] = 1;
    }
    if (grid[2]) grid[2][midY + 4] = 1;
    if (grid[3]) grid[3][midY + 4] = 1;
    if (grid[4]) {
      grid[4][midY + 1] = 1;
      grid[4][midY + 4] = 1;
    }
    if (grid[5]) {
      grid[5][midY + 4] = 1;
      grid[5][midY + 3] = 1;
      grid[5][midY + 2] = 1;
    }
  } else if (seedType === "blinker") {
    if (grid[midX]) {
      grid[midX][midY] = 1;
      grid[midX][midY - 1] = 1;
      grid[midX][midY + 1] = 1;
    }
  }
}

function drawBlock(x, y) {
  ctx.beginPath();
  ctx.fillStyle = blockColor;
  ctx.rect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.fill();
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const col = (x + i + cols) % cols;
      const row = (y + j + rows) % rows;
      sum += grid[col] ? grid[col][row] : 0;
    }
  }
  sum -= grid[x][y] || 0;
  return sum || 0;
}

function animate() {
  ctx.fillStyle = "rgb(26, 26, 26)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const next = matrix(rows, cols);

  for (let i = 0; i < grid.length; i++) {
    if (grid[i] && grid[i].length) {
      for (let j = 0; j < grid[i].length; j++) {
        const state = grid[i][j];
        if (state) {
          drawBlock(i, j);
        }

        if (startLife) {
          let neighbors = countNeighbors(grid, i, j);

          if (!state && neighbors === 3) {
            if (next[i]) next[i][j] = 1;
          } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
            if (next[i]) next[i][j] = 0;
          } else {
            if (next[i]) next[i][j] = state;
          }
        }
      }
    }
    if (startLife) {
      setTimeout(() => {
        grid = next;
      }, 0);
    }
  }
  if (showGrid) drawGrid();
  animationId = window.requestAnimationFrame(animate);
}

function mouseClickEventHandler(e) {
  const posX = e.pageX - canvas.offsetLeft;
  const posY = e.pageY - canvas.offsetTop;

  const x = Math.floor(posX / blockSize);
  const y = Math.floor(posY / blockSize);

  console.log({ x, y });
  console.log(grid[x][y]);

  if (grid[x][y]) {
    grid[x][y] = 0;
  } else {
    grid[x][y] = 1;
  }
  console.log(grid[x][y]);
}

function touchstartEventHandler(e) {
  const posX = e.touches[0].pageX - canvas.offsetLeft;
  const posY = e.touches[0].pageY - canvas.offsetTop;

  const x = Math.floor(posX / blockSize);
  const y = Math.floor(posY / blockSize);
}

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

slider.addEventListener("input", (e) => {
  blockSize = e.target.value;
  rows = canvas.height / blockSize;
  cols = canvas.width / blockSize;
});

showGridCheckBox.addEventListener("input", (e) => {
  showGrid = e.target.checked;
});

seedWrapper.addEventListener("click", (e) => {
  const btn = e.target;
  const seed = btn.dataset.seedType;
  if (seed) {
    const activeBtn = seedWrapper.querySelectorAll(".active");
    activeBtn.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    seedType = seed;
    initLifeSeed();
  }
});

startBtn.addEventListener("click", () => {
  configModal.style.display = "none";
  if (seedType === "custom") {
    startDrawing();
  } else {
    startLife = true;
    initLifeSeed();
    resetBtn.style.display = "block";
  }
});

resetBtn.addEventListener("click", () => {
  startLife = false;

  stopDrawing();
});

customStartBtn.addEventListener("click", () => {
  startLife = true;
  resetBtn.style.display = "block";
  customStartBtn.style.display = "none";
  if (seedType === "custom") {
    canvas.classList.remove("drawing");
  }
});

animate();
