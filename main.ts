// Exactly one line, nothing else.
// One line, at most 160 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "v1.9.2: fixed a bug where the brain replayed an embarrassing moment from 2014 at 3 a.m. instead of sleeping.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
