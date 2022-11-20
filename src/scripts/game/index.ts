import { getMatrix } from "../grid";

import { Seed } from "./types";

const getInitailSeed = (rows: number, cols: number, type: Seed | null): number[][] => {
  const newGen = getMatrix(rows, cols);

  if (rows < 15 || cols < 15) return newGen;

  const midX = Math.floor(cols / 2);
  const midY = Math.floor(rows / 2);

  if (type === "glider") {
    newGen[midX + 1][0] = 1;
    newGen[midX + 1][0 + 3] = 1;
    newGen[midX + 2][0 + 4] = 1;
    newGen[midX + 3][0 + 4] = 1;
    newGen[midX + 4][0 + 1] = 1;
    newGen[midX + 4][0 + 4] = 1;
    newGen[midX + 5][0 + 4] = 1;
    newGen[midX + 5][0 + 3] = 1;
    newGen[midX + 5][0 + 2] = 1;

    return newGen;
  }

  if (type === "blinker") {
    newGen[midX][midY] = 1;
    newGen[midX][midY - 1] = 1;
    newGen[midX][midY - 2] = 1;

    return newGen;
  }

  return newGen;
};

const countNeighbors = (matrix: number[][], row: number, col: number) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let sum = 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [1, 1],
  ];

  directions.forEach(([i, j]) => {
    const r = (row + i) % rows;
    const c = (col + j) % cols;

    if (r >= 0 && c >= 0) {
      sum += matrix[r][c];
    }
  });

  return sum;
};

const getNextGeneration = (currGen: number[][]) => {
  const rows = currGen.length;
  const cols = currGen[0].length;
  const nextGen = getMatrix(rows, cols);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const state = currGen[r][c];
      const neighbors = countNeighbors(currGen, r, c);

      if (state) {
        console.log("neighbors, state");
        console.log({ r, c, neighbors, state }, currGen);
      }

      if (state && (neighbors < 2 || neighbors > 3)) {
        nextGen[r][c] = 0;
      } else if (!state && neighbors === 3) {
        nextGen[r][c] = 1;
      } else {
        nextGen[r][c] = state;
      }
    }
  }

  return nextGen;
};

export { getInitailSeed, getNextGeneration };
