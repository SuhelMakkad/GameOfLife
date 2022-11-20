const state = {
  cellSize: 30,
};

const setState = (callBack: Function) => {
  callBack();
};

export { state, setState };
