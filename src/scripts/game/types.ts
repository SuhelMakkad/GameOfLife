const seeds = ["random", "spaceship", "blinker", "beacon", "pulsar", "custom"] as const;
export type Seed = typeof seeds[number];

export type Generation = number[][];
