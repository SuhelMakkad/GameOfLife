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

const drawMatrix = (canvas: HTMLCanvasElement, matrix: number[][], cellSize: number) => {
  clearCanvas(canvas);
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = matrix[r][c];

      if (cell) {
        drawCell(canvas.getContext("2d")!, r, c, cellSize);
      }
    }
  }
};

export { clearCanvas, steupCanvas, drawCell, drawMatrix };
