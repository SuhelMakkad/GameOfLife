import { GameState } from "./type";

import start from "../app";

const state: GameState = {
  isPlaying: false,
  cellSize: 30,
  seedType: "random",
  customSeed: null,
};

const setState = (callBack: Function) => {
  callBack();
  start(null);
};

export { state, setState };
