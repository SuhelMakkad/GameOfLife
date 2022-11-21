import { Generation, Seed } from "../game/types";

export type GameState = {
  isPlaying: boolean;
  isGridVisible: boolean;
  cellSize: number;
  seedType: Seed;
  customSeed: Generation | null;
};
