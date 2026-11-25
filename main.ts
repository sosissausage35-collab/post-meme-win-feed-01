// Entry for the make.fun bounty "Post the Meme, Win the Feed"
// (u-myronera-post-the-meme-win-the-feed-2de960bf).
// Node 22, standard library only. The whole job of this program is to
// copy POST.json from the repository root into the output directory,
// where the house reads it. The entry itself is the X post named in
// POST.json; nothing this program writes about the post is scored.
//
// Grader-style run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
