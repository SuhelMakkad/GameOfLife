import { startDrawing } from "./draw";

const showResetBtn = () => {
  const resetBtn = document.getElementById("reset-btn") as HTMLInputElement;
  resetBtn.style.display = "block";
};

const showCustomStartBtn = () => {
  const customStartBtn = document.getElementById("custom-start-btn") as HTMLInputElement;
  customStartBtn.style.display = "block";
};

const hideResetBtn = () => {
  const resetBtn = document.getElementById("reset-btn") as HTMLInputElement;
  resetBtn.style.display = "none";
};

const hideCustomStartBtn = () => {
  const customStartBtn = document.getElementById("custom-start-btn") as HTMLInputElement;
  customStartBtn.style.display = "none";
};

const showConfigModal = () => {
  const configModal = document.getElementById("config-modal") as HTMLInputElement;
  configModal.style.display = "block";
};

const hideConfigModal = () => {
  const configModal = document.getElementById("config-modal") as HTMLInputElement;
  configModal.style.display = "none";
};

const handleCustomDrawing = (isPlaying: boolean) => {
  if (isPlaying) {
    document.body.classList.remove("drawing");
  } else {
    document.body.classList.add("drawing");
  }
};

export {
  showResetBtn,
  showCustomStartBtn,
  hideResetBtn,
  hideCustomStartBtn,
  showConfigModal,
  hideConfigModal,
  handleCustomDrawing,
};
