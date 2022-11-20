import { Seed } from "../game/types";
import { setState, state } from "../state/game";
import { showConfigModal, hideConfigModal, showResetBtn, hideResetBtn } from "../ui";

const slider = document.getElementById("grid-size-slider") as HTMLInputElement;
const startBtn = document.getElementById("start-btn") as HTMLInputElement;
const seedSelect = document.getElementById("seed-select") as HTMLInputElement;
const resetBtn = document.getElementById("reset-btn") as HTMLInputElement;
// const customStartBtn = document.getElementById("custom-start-btn") as HTMLInputElement;
// const showGridCheckBox = document.getElementById("show-grid") as HTMLInputElement;

const setEventListners = () => {
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
      state.isPlaying = true;
    });

    showResetBtn();
    hideConfigModal();
  });

  resetBtn.addEventListener("click", () => {
    setState(() => {
      state.isPlaying = false;
    });

    hideResetBtn();
    showConfigModal();
  });
};

export default setEventListners;
