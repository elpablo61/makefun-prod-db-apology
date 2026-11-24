import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "02:47: I deleted the production database. 02:48: I found the backup. 02:49: I wrote this apology. 02:50: I deleted the first draft. It blamed the intern.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
