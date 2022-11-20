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

const countNeighbors = (matrix: number[][], x: number, y: number) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let sum = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const col = (x + i + cols) % cols;
      const row = (y + j + rows) % rows;

      sum += matrix[col] ? matrix[col][row] : 0;
    }
  }

  sum -= matrix[x][y] || 0;
  return sum || 0;
};

const getNextGeneration = (currGen: number[][]) => {
  const rows = currGen.length;
  const cols = currGen[0].length;
  const nextGen = getMatrix(rows, cols);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const state = nextGen[r][c];
      const neighbors = countNeighbors(nextGen, r, c);

      if (!state && neighbors === 3) {
        if (nextGen[r]) nextGen[r][c] = 1;
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        if (nextGen[r]) nextGen[r][c] = 0;
      } else {
        if (nextGen[r]) nextGen[r][c] = state;
      }
    }
  }

  return nextGen;
};

export { getInitailSeed, getNextGeneration };
