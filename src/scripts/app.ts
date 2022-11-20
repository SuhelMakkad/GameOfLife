import { steupCanvas, clearCanvas } from "./canvas";

const aniamte = (canvas: HTMLCanvasElement) => {
  clearCanvas(canvas);
};

const start = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  steupCanvas(canvas);
  aniamte(canvas);
};

export default start;
