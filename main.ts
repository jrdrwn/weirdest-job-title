import { mkdirSync, writeFileSync } from "node:fs";

// One job title, 60 characters at most and nothing else.
const TITLE = "Chief Inspector of Other People's Dreams";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE + "\n", "utf8");
