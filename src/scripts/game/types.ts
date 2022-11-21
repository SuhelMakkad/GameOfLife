const seeds = ["random", "spaceship", "blinker", "beacon", "custom"] as const;
export type Seed = typeof seeds[number];
