const getMatrix = (rows: number, cols: number, defaultState = 0): number[][] => {
  return new Array(rows).fill(0).map((_) => new Array(cols).fill(defaultState));
};

export { getMatrix };
