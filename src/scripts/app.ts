import { steupCanvas, drawMatrix, drawGrid, clearCanvas } from "./canvas";
import { getInitailSeed, getNextGeneration } from "./game";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const aniamte = (ctx: CanvasRenderingContext2D, currGeneration: number[][]) => {
  const nextGeneration = getNextGeneration(currGeneration);
  const rows = nextGeneration.length;
  const cols = nextGeneration[0].length;

  drawMatrix(ctx, currGeneration, 20);
  drawGrid(ctx, cols, rows, 20, canvas.height, canvas.width);

  window.requestAnimationFrame(() => {
    clearCanvas(canvas);
    aniamte(ctx, nextGeneration);
  });
};

const start = () => {
  const seedGeneration = getInitailSeed(60, 60, "glider");

  steupCanvas(canvas);
  aniamte(ctx, seedGeneration);
};

export default start;
