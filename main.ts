import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-line resignation letter: specific voice (office IT support),
// surprise turn (the printer returns the favour), quotable punchline.
const LINE =
  "I hereby resign as office IT support \u2014 after unjamming the printer 400 times, it returned the favour and unjammed me out the door.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Read back in-process and hash, so each run self-proves what it wrote.
const written = readFileSync("/output/entry.txt", "utf8");
const sha = createHash("sha256").update(written, "utf8").digest("hex");
console.log(`wrote ${[...written].length} chars to /output/entry.txt sha256=${sha}`);
