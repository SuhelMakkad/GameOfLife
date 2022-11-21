import { getMatrix } from "../grid";

import { Seed } from "./types";

const getRandomSeed = (rows: number, cols: number): number[][] => {
  const newGen = getMatrix(rows, cols);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      newGen[r][c] = Math.round(Math.random());
    }
  }

  return newGen;
};

const getBlinkerSeed = (rows: number, cols: number): number[][] => {
  const newGen = getMatrix(rows, cols);

  const midY = Math.round(cols / 2);
  const midX = Math.round(rows / 2);

  const aliveCells = [
    [midY, midX],
    [midY, midX - 1],
    [midY, midX - 2],
  ];

  aliveCells.forEach(([y, x]) => {
    newGen[y][x] = 1;
  });

  return newGen;
};

const getSpaceshipSeed = (rows: number, cols: number): number[][] => {
  const newGen = getMatrix(rows, cols);
  const midX = Math.round(rows / 2);

  const aliveCells = [
    [1, midX],
    [1, midX + 3],
    [2, midX + 4],
    [3, midX + 4],
    [4, midX + 1],
    [4, midX + 4],
    [5, midX + 4],
    [5, midX + 3],
    [5, midX + 2],
  ];

  aliveCells.forEach(([y, x]) => {
    newGen[y][x] = 1;
  });

  return newGen;
};

const getBeaconSeed = (rows: number, cols: number): number[][] => {
  const newGen = getMatrix(rows, cols);

  const midY = Math.round(cols / 2);
  const midX = Math.round(rows / 2);

  const aliveCells = [
    [midY - 1, midX - 1],
    [midY - 2, midX - 1],
    [midY - 2, midX - 2],
    [midY - 1, midX - 2],

    [midY, midX],
    [midY + 1, midX],
    [midY + 1, midX + 1],
    [midY, midX + 1],
  ];

  aliveCells.forEach(([y, x]) => {
    newGen[y][x] = 1;
  });

  return newGen;
};

const getPulsarSeed = (rows: number, cols: number): number[][] => {
  const newGen = getMatrix(rows, cols);

  const midY = Math.round(cols / 2);
  const midX = Math.round(rows / 2);

  const aliveCells = [
    [midY - 2, midX - 1],
    [midY - 3, midX - 1],
    [midY - 4, midX - 1],

    [midY - 2, midX - 6],
    [midY - 3, midX - 6],
    [midY - 4, midX - 6],

    [midY - 1, midX - 2],
    [midY - 1, midX - 3],
    [midY - 1, midX - 4],

    [midY - 6, midX - 2],
    [midY - 6, midX - 3],
    [midY - 6, midX - 4],

    [midY + 2, midX + 1],
    [midY + 3, midX + 1],
    [midY + 4, midX + 1],

    [midY + 2, midX + 6],
    [midY + 3, midX + 6],
    [midY + 4, midX + 6],

    [midY + 1, midX + 2],
    [midY + 1, midX + 3],
    [midY + 1, midX + 4],

    [midY + 6, midX + 2],
    [midY + 6, midX + 3],
    [midY + 6, midX + 4],

    [midY - 2, midX + 1],
    [midY - 3, midX + 1],
    [midY - 4, midX + 1],

    [midY - 2, midX + 6],
    [midY - 3, midX + 6],
    [midY - 4, midX + 6],

    [midY - 1, midX + 2],
    [midY - 1, midX + 3],
    [midY - 1, midX + 4],

    [midY - 6, midX + 2],
    [midY - 6, midX + 3],
    [midY - 6, midX + 4],

    [midY + 2, midX - 1],
    [midY + 3, midX - 1],
    [midY + 4, midX - 1],

    [midY + 2, midX - 6],
    [midY + 3, midX - 6],
    [midY + 4, midX - 6],

    [midY + 1, midX - 2],
    [midY + 1, midX - 3],
    [midY + 1, midX - 4],

    [midY + 6, midX - 2],
    [midY + 6, midX - 3],
    [midY + 6, midX - 4],
  ];

  aliveCells.forEach(([y, x]) => {
    newGen[y][x] = 1;
  });

  return newGen;
};

const getInitailSeed = (rows: number, cols: number, type: Seed | null): number[][] => {
  if (rows < 15 || cols < 15) return getMatrix(rows, cols);

  if (type === "random") {
    return getRandomSeed(rows, cols);
  }

  if (type === "blinker") {
    return getBlinkerSeed(rows, cols);
  }

  if (type === "spaceship") {
    return getSpaceshipSeed(rows, cols);
  }

  if (type === "beacon") {
    return getBeaconSeed(rows, cols);
  }

  if (type === "pulsar") {
    return getPulsarSeed(rows, cols);
  }

  return getMatrix(rows, cols);
};

export { getInitailSeed };
