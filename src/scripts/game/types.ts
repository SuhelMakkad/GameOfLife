const seeds = ["glider", "blinker", "random", "custom"] as const;
export type Seed = typeof seeds[number];
