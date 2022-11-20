const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d")!;
  const { height, width } = canvas;

  ctx.fillStyle = "rgb(26, 26, 26)";
  ctx.fillRect(0, 0, width, height);
};

const steupCanvas = (canvas: HTMLCanvasElement) => {
  canvas.height = window.innerHeight - 20;
  canvas.width = window.innerWidth - 20;

  clearCanvas(canvas);
};

const drawCell = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  cellSize: number,
  cellColor = "rgb(1, 122, 221)"
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
  cols: number,
  rows: number,
  cellSize: number,
  height: number,
  width: number,
  gridStyle = "rgba(256, 256, 256, 0.2)"
) => {
  for (let i = 0; i < cols; i++) {
    ctx.strokeStyle = gridStyle;
    ctx.beginPath();
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, height);
    ctx.stroke();
  }
  for (let i = 0; i < rows; i++) {
    ctx.strokeStyle = gridStyle;
    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(width, i * cellSize);
    ctx.stroke();
  }
};

export { clearCanvas, steupCanvas, drawCell, drawMatrix, drawGrid };
