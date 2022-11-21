import { GameState } from "./type";

import start from "../app";

const state: GameState = {
  isPlaying: false,
  isGridVisible: true,
  cellSize: 30,
  seedType: "random",
  customSeed: null,
};

const setState = (callBack: Function) => {
  callBack();

  start(state.seedType === "custom" ? state.customSeed : null);
};

export { state, setState };
