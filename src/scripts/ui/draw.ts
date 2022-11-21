import { state } from "../state/game";
import start from "../app";
import { getMatrix } from "../grid";
import { canvasOffset, getMatrixDimentions } from "../canvas";
import { hideResetBtn, showCustomStartBtn } from ".";

const getPostion = (posX: number, posY: number) => {
  const x = Math.floor((posX - canvasOffset.x / 2) / state.cellSize);
  const y = Math.floor((posY - canvasOffset.y / 2) / state.cellSize);

  return { x, y };
};

const mouseClickEventHandler = (e: MouseEvent) => {
  const posX = e.pageX;
  const posY = e.pageY;

  const { x, y } = getPostion(posX, posY);

  if (!state.customSeed) {
    const { rows, cols } = getMatrixDimentions();
    state.customSeed = getMatrix(rows, cols);
  }

  state.customSeed[x][y] = state.customSeed[x][y] ? 0 : 1;
  start(state.customSeed);
};

const touchstartEventHandler = (e: TouchEvent) => {
  const posX = e.touches[0].pageX;
  const posY = e.touches[0].pageY;

  const { x, y } = getPostion(posX, posY);

  if (!state.customSeed) {
    const { rows, cols } = getMatrixDimentions();
    state.customSeed = getMatrix(rows, cols);
  }

  state.customSeed[x][y] = state.customSeed[x][y] ? 0 : 1;
  start(state.customSeed);
};

const startDrawing = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  /* removing previously added listners */
  canvas.removeEventListener("click", mouseClickEventHandler);
  canvas.removeEventListener("touchstart", touchstartEventHandler);

  canvas.addEventListener("click", mouseClickEventHandler);
  canvas.addEventListener("touchstart", touchstartEventHandler);

  hideResetBtn();
  showCustomStartBtn();
};

export { startDrawing };
