const steupCanvas = (canvas: HTMLCanvasElement) => {
  canvas.height = window.innerHeight - 20;
  canvas.width = window.innerWidth - 20;
};

const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d")!;
  const { height, width } = canvas;

  ctx.fillStyle = "rgb(26, 26, 26)";
  ctx.fillRect(0, 0, width, height);
};

export { steupCanvas, clearCanvas };
