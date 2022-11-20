import { steupCanvas, clearCanvas } from "./canvas";
import { getInitailSeed, getNextGeneration } from "./game";

const aniamte = (canvas: HTMLCanvasElement, currGeneration: number[][]) => {
  clearCanvas(canvas);

  const nextGeneration = getNextGeneration(currGeneration);
};

const start = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const seedGeneration = getInitailSeed(50, 50, "blinker");

  steupCanvas(canvas);
  aniamte(canvas, seedGeneration);
};

export default start;
