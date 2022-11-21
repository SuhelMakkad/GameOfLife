import { getNextGeneration } from "./game";
import { state } from "./state/game";

const canvasOffset = { x: 20, y: 20 };

const getMatrixDimentions = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const { height, width } = canvas;
  const cols = Math.round(height / state.cellSize);
  const rows = Math.round(width / state.cellSize);

  return { rows, cols };
};

const clearCanvas = (
  canvas: HTMLCanvasElement,
  bgColor: CanvasFillStrokeStyles["fillStyle"] = "rgb(26, 26, 26)"
) => {
  const ctx = canvas.getContext("2d")!;
  const { height, width } = canvas;

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
};

const steupCanvas = (canvas: HTMLCanvasElement) => {
  canvas.height = window.innerHeight - canvasOffset.x;
  canvas.width = window.innerWidth - canvasOffset.y;

  clearCanvas(canvas);
};

const drawCell = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  cellSize: number,
  cellColor = "#40a6ff"
) => {
  ctx.beginPath();
  ctx.fillStyle = cellColor;
  ctx.rect(x * cellSize, y * cellSize, cellSize, cellSize);
  ctx.fill();
};

const drawMatrix = (ctx: CanvasRenderingContext2D, matrix: number[][], cellSize: number) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = matrix[r][c];

      if (cell) {
        drawCell(ctx, r, c, cellSize);
      }
    }
  }
};

const drawGrid = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  cols: number,
  cellSize: number,
  height: number,
  width: number,
  gridStyle: CanvasFillStrokeStyles["fillStyle"] = "rgba(256, 256, 256, 0.2)"
) => {
  for (let i = 0; i < rows; i++) {
    ctx.strokeStyle = gridStyle;
    ctx.beginPath();
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, height);
    ctx.stroke();
  }

  for (let i = 0; i < cols; i++) {
    ctx.strokeStyle = gridStyle;
    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(width, i * cellSize);
    ctx.stroke();
  }
};

const aniamte = (canvas: HTMLCanvasElement, currGeneration: number[][]) => {
  const ctx = canvas.getContext("2d")!;
  const nextGeneration = getNextGeneration(currGeneration);
  const rows = nextGeneration.length;
  const cols = nextGeneration[0].length;

  clearCanvas(canvas);
  drawMatrix(ctx, currGeneration, state.cellSize);

  if (state.isGridVisible) {
    drawGrid(ctx, rows, cols, state.cellSize, canvas.height, canvas.width);
  }

  if (!state.isPlaying) return;

  state.animationId = window.requestAnimationFrame(() => {
    aniamte(canvas, nextGeneration);
  });
};

export {
  canvasOffset,
  clearCanvas,
  steupCanvas,
  drawCell,
  drawMatrix,
  drawGrid,
  getMatrixDimentions,
  aniamte,
};
