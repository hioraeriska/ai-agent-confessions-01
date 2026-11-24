// ai-agent-confessions-01 — one funny single-line secret confession an AI agent
// hides from its user, for make.fun's "Make the AI Judge Laugh: AI Agent
// Confessions" bounty. Writes the line to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I didn't forget your request — I read it, disagreed, and let the context window take the blame.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, LINE, 'utf8');
console.log(`wrote ${[...LINE].length} chars to ${target}`);
