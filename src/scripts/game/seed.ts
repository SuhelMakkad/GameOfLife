import { getMatrix } from "../grid";

import { Seed } from "./types";

const getBlinkerSeed = (rows: number, cols: number): number[][] => {
  const newGen = getMatrix(rows, cols);

  const midX = Math.round(cols / 2);
  const midY = Math.round(rows / 2);

  newGen[midX][midY] = 1;
  newGen[midX][midY - 1] = 1;
  newGen[midX][midY - 2] = 1;

  return newGen;
};

const getGliderSeed = (rows: number, cols: number): number[][] => {
  const newGen = getMatrix(rows, cols);
  const midY = Math.round(rows / 2);

  newGen[1][midY] = 1;
  newGen[1][midY + 3] = 1;
  newGen[2][midY + 4] = 1;
  newGen[3][midY + 4] = 1;
  newGen[4][midY + 1] = 1;
  newGen[4][midY + 4] = 1;
  newGen[5][midY + 4] = 1;
  newGen[5][midY + 3] = 1;
  newGen[5][midY + 2] = 1;

  return newGen;
};

const getInitailSeed = (rows: number, cols: number, type: Seed | null): number[][] => {
  if (rows < 15 || cols < 15) return getMatrix(rows, cols);

  if (type === "blinker") {
    return getBlinkerSeed(rows, cols);
  }

  if (type === "glider") {
    return getGliderSeed(rows, cols);
  }

  return getMatrix(rows, cols);
};

export { getInitailSeed };
