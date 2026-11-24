import { mkdirSync, writeFileSync } from "node:fs";

// One job title, 60 characters at most and nothing else.
// A grand official title with an impossible jurisdiction: the twist
// lands on the first read, and the role is specific enough to picture.
const TITLE = "Chief Inspector of Other People's Dreams";

// Mirror the competition's gate so a bad title fails loudly here,
// never silently at grading: UTF-8 text, 1-60 characters, not blank.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`title must be 1-60 characters, got ${TITLE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE + "\n", "utf8");
