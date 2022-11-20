import { steupCanvas, drawMatrix } from "./canvas";
import { getInitailSeed, getNextGeneration } from "./game";

const aniamte = (canvas: HTMLCanvasElement, currGeneration: number[][]) => {
  const nextGeneration = getNextGeneration(currGeneration);
  drawMatrix(canvas, currGeneration, 25);
};

const start = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const seedGeneration = getInitailSeed(20, 20, "glider");

  steupCanvas(canvas);
  aniamte(canvas, seedGeneration);
};

export default start;