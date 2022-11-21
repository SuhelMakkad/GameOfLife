import { Seed } from "../game/types";
import { setState, state } from "../state/game";
import {
  showConfigModal,
  hideConfigModal,
  showResetBtn,
  hideResetBtn,
  hideCustomStartBtn,
} from "../ui";
import { startDrawing } from "../ui/draw";

const setEventListners = () => {
  const slider = document.getElementById("grid-size-slider") as HTMLInputElement;
  const startBtn = document.getElementById("start-btn") as HTMLInputElement;
  const seedSelect = document.getElementById("seed-select") as HTMLInputElement;
  const resetBtn = document.getElementById("reset-btn") as HTMLInputElement;
  const customStartBtn = document.getElementById("custom-start-btn") as HTMLInputElement;
  // const showGridCheckBox = document.getElementById("show-grid") as HTMLInputElement;

  slider.value = state.cellSize.toString();
  seedSelect.value = state.seedType;

  slider.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const cellSize = target.value;

    setState(() => {
      state.cellSize = +cellSize;
    });
  });

  seedSelect.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const seedType = target.value;

    setState(() => {
      state.seedType = seedType as Seed;
    });
  });

  startBtn.addEventListener("click", () => {
    setState(() => {
      if (state.seedType !== "custom") {
        state.isPlaying = true;
      }
    });

    showResetBtn();
    hideConfigModal();

    if (state.seedType === "custom") {
      startDrawing();
    }
  });

  customStartBtn.addEventListener("click", () => {
    setState(() => {
      state.isPlaying = true;
    });

    hideCustomStartBtn();
    hideConfigModal();
    showResetBtn();
  });

  resetBtn.addEventListener("click", () => {
    setState(() => {
      state.isPlaying = false;
      state.customSeed = null;
    });

    showConfigModal();
    hideResetBtn();
    hideCustomStartBtn();
  });
};

export default setEventListners;
