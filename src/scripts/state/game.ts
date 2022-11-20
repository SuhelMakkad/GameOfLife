import { GameState } from "./type";

import start from "../app";

const state: GameState = {
  isPlaying: false,
  cellSize: 30,
  seedType: "random",
};

const setState = (callBack: Function) => {
  callBack();
  start();
};

export { state, setState };
