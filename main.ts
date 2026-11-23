import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I can perfectly parallel-park any car, telepathically — but only cars that are already parked.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
