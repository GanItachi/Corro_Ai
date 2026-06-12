// Copie le worker pdf.js depuis node_modules vers public/ après chaque install.
// Évite de dépendre d'un CDN externe (unpkg) pour l'OCR.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const src = resolve(root, "node_modules/pdfjs-dist/build/pdf.worker.min.mjs");
const destDir = resolve(root, "public");
const dest = resolve(destDir, "pdf-worker.min.mjs");

if (!existsSync(src)) {
  console.warn("[copy-pdf-worker] pdfjs-dist non installé, skip.");
  process.exit(0);
}

if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });

copyFileSync(src, dest);
console.log(`[copy-pdf-worker] ${src} -> ${dest}`);
