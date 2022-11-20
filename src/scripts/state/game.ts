const state = {
  cellSize: 20,
};

const setState = (callBack: Function) => {
  callBack();
};

export { state, setState };
