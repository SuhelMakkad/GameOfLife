import { steupCanvas, drawMatrix, drawGrid, clearCanvas } from "./canvas";
import { getNextGeneration } from "./game";
import { getInitailSeed } from "./game/seed";

import { state } from "./state/game";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
let animationId: number = 0;

const aniamte = (ctx: CanvasRenderingContext2D, currGeneration: number[][]) => {
  const nextGeneration = getNextGeneration(currGeneration);
  const rows = nextGeneration.length;
  const cols = nextGeneration[0].length;

  drawMatrix(ctx, currGeneration, state.cellSize);
  drawGrid(ctx, cols, rows, state.cellSize, canvas.height, canvas.width);

  if (!state.isPlaying) return;

  animationId = window.requestAnimationFrame(() => {
    clearCanvas(canvas);
    aniamte(ctx, nextGeneration);
  });
};

const start = () => {
  cancelAnimationFrame(animationId);
  steupCanvas(canvas);

  const { height, width } = canvas;

  const rows = Math.round(height / state.cellSize);
  const cols = Math.round(width / state.cellSize);

  const seedGeneration = getInitailSeed(rows, cols, state.seedType);

  aniamte(ctx, seedGeneration);
};

export default start;
