import { state } from "../state/game";

const mouseClickEventHandler = (e: MouseEvent) => {
  const posX = e.pageX;
  const posY = e.pageY;

  const x = Math.floor(posX / state.cellSize);
  const y = Math.floor(posY / state.cellSize);

  console.log({ x, y });
};

const touchstartEventHandler = (e: TouchEvent) => {
  const posX = e.touches[0].pageX;
  const posY = e.touches[0].pageY;

  const x = Math.floor(posX / state.cellSize);
  const y = Math.floor(posY / state.cellSize);
  console.log({ x, y });
};

const startDrawing = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const resetBtn = document.getElementById("reset-btn") as HTMLInputElement;
  const customStartBtn = document.getElementById("custom-start-btn") as HTMLInputElement;

  // removing previously added listners
  canvas.removeEventListener("click", mouseClickEventHandler);
  canvas.removeEventListener("touchstart", touchstartEventHandler);

  canvas.addEventListener("click", mouseClickEventHandler);
  canvas.addEventListener("touchstart", touchstartEventHandler);

  canvas.classList.add("drawing");
  resetBtn.style.display = "none";
  customStartBtn.style.display = "block";
};

export { startDrawing };
