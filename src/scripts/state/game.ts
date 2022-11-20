import { GameState } from "./type";

import start from "../app";

const state: GameState = {
  isPlaying: false,
  cellSize: 30,
  seedType: "blinker",
};

const setState = (callBack: Function) => {
  callBack();
  start();
};

export { state, setState };
