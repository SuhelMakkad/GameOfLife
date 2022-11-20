import start from "../app";

const state = {
  cellSize: 30,
  isPlaying: false,
};

const setState = (callBack: Function) => {
  callBack();
  start();
};

export { state, setState };
