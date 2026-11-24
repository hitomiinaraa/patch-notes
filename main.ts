import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "v2.3.6: fixed a bug where the foot found every piece of Lego in a dark room at 2 a.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
