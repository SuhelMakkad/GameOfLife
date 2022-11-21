import { steupCanvas, aniamte } from "./canvas";
import { getInitailSeed } from "./game/seed";

import { state } from "./state/game";
import { handleCustomDrawing } from "./ui";

const start = (seedGeneration: number[][] | null) => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  cancelAnimationFrame(state.animationId);
  steupCanvas(canvas);

  if (!seedGeneration) {
    const { height, width } = canvas;
    const cols = Math.round(height / state.cellSize);
    const rows = Math.round(width / state.cellSize);

    seedGeneration = getInitailSeed(rows, cols, state.seedType);
  }

  if (state.seedType === "custom") {
    handleCustomDrawing(state.isPlaying);
  }

  aniamte(canvas, seedGeneration);
};

export default start;
