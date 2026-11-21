// The Global Ledger — Saturday 21 November 2026.
// Entry for make.fun news-image-20261121: copies the front-page image
// that ships in this repository (composed by gen.py from 13 generated
// scene illustrations) to the output path the harness expects.
// No network, no inputs; every run writes the same bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("wrote entry.png");
