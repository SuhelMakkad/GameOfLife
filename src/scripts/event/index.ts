import { setState, state } from "../state/game";

const slider = document.getElementById("gridSizeSlider") as HTMLInputElement;
const startBtn = document.getElementById("start-btn") as HTMLInputElement;
// const resetBtn = document.getElementById("reset-btn") as HTMLInputElement;
// const customStartBtn = document.getElementById("custom-start-btn") as HTMLInputElement;
// const seedWrapper = document.getElementById("seed-wrapper") as HTMLInputElement;
// const showGridCheckBox = document.getElementById("show-grid") as HTMLInputElement;

const setEventListners = () => {
  slider.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;

    const cellSize = target.value;

    setState(() => {
      state.cellSize = +cellSize;
    });
  });

  startBtn.addEventListener("click", () => {
    setState(() => {
      state.isPlaying = true;
    });
  });
};

export default setEventListners;
