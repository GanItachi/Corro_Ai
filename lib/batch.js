// lib/batch.js
// Import d'un dossier matière (drag-drop natif) ou d'un .zip.
// Structure attendue :
//   Analyse 1/
//     Cours/   ou Cours,Chapitre,Lecon,CM,...
//       ch1.pdf
//     TDs/     ou TD,Tps,Exercices,...
//       td1.pdf
//     Devoir/  ou Examens,Sujets,Partiel,Controle,QCM,...
//       exam-2023.pdf

import JSZip from "jszip";

const PDF_OR_IMAGE = /\.(pdf|jpe?g|png|webp)$/i;

const TYPE_PATTERNS = [
  { type: "cours", re: /^(cours?|chapitres?|chap|le[cç]ons?|cm|polys?)/i },
  { type: "td", re: /^(tds?|tps?|exos?|exercices?|series?|fiches?)/i },
  {
    type: "examen",
    re: /^(devoirs?|examens?|exams?|sujets?|partiels?|contr[oô]les?|qcm|annales?|interrogations?)/i,
  },
];

export function detectType(folderName) {
  const f = (folderName || "").trim();
  for (const { type, re } of TYPE_PATTERNS) {
    if (re.test(f)) return type;
  }
  return null;
}

/* ============ Collecte depuis un drop natif (DataTransfer) ============ */

export async function collectFromDataTransfer(dataTransfer) {
  const items = Array.from(dataTransfer.items || []);
  const entries = [];

  // Tentative via webkitGetAsEntry (drop d'un dossier).
  const fsEntries = items
    .map((it) => (it.kind === "file" ? it.webkitGetAsEntry?.() : null))
    .filter(Boolean);

  if (fsEntries.length > 0) {
    for (const e of fsEntries) {
      await traverseEntry(e, "", entries);
    }
    if (entries.length > 0) return entries;
  }

  // Fallback : juste les Files plats.
  const flat = [];
  for (const it of items) {
    if (it.kind !== "file") continue;
    const f = it.getAsFile();
    if (f) flat.push({ path: f.name, file: f });
  }
  return flat;
}

async function traverseEntry(entry, parentPath, out) {
  if (entry.isFile) {
    const file = await new Promise((res, rej) => entry.file(res, rej));
    const path = parentPath ? `${parentPath}/${file.name}` : file.name;
    out.push({ path, file });
    return;
  }
  if (entry.isDirectory) {
    const reader = entry.createReader();
    const here = parentPath ? `${parentPath}/${entry.name}` : entry.name;
    let done = false;
    while (!done) {
      const batch = await new Promise((res, rej) =>
        reader.readEntries(res, rej)
      );
      if (batch.length === 0) {
        done = true;
      } else {
        for (const child of batch) await traverseEntry(child, here, out);
      }
    }
  }
}

/* ============ Collecte depuis un .zip ============ */

export async function collectFromZip(file) {
  const zip = await JSZip.loadAsync(file);
  const tasks = [];
  const out = [];
  zip.forEach((path, entry) => {
    if (entry.dir) return;
    if (!PDF_OR_IMAGE.test(path)) return;
    tasks.push(
      entry.async("blob").then((blob) => {
        const name = path.split("/").pop() || "file";
        const ext = name.split(".").pop().toLowerCase();
        const mime =
          ext === "pdf"
            ? "application/pdf"
            : ext === "png"
              ? "image/png"
              : ext === "webp"
                ? "image/webp"
                : "image/jpeg";
        const fileObj = new File([blob], name, { type: mime });
        out.push({ path, file: fileObj });
      })
    );
  });
  await Promise.all(tasks);
  return out;
}

/* ============ Collecte depuis un input file (webkitdirectory) ============ */

export function collectFromFileList(fileList) {
  const out = [];
  for (const f of fileList) {
    // webkitRelativePath rempli par <input webkitdirectory>
    const path = f.webkitRelativePath || f.name;
    out.push({ path, file: f });
  }
  return out;
}

/* ============ Parsing structure → matière + groupes typés ============ */

function commonRoot(paths) {
  if (paths.length === 0) return "";
  const split = paths.map((p) => p.split("/"));
  const first = split[0];
  let depth = first.length - 1; // au max, tous sauf le filename
  for (const parts of split) {
    for (let i = 0; i < depth; i++) {
      if (parts[i] !== first[i]) {
        depth = i;
        break;
      }
    }
    if (depth === 0) break;
  }
  return first.slice(0, depth).join("/");
}

export function parseFolderStructure(entries) {
  const usable = (entries || []).filter((e) => PDF_OR_IMAGE.test(e.path));
  if (usable.length === 0) return null;

  const root = commonRoot(usable.map((e) => e.path));
  const rootName = root ? root.split("/").pop() : "";

  const items = usable.map((e) => {
    const rel = root ? e.path.slice(root.length + 1) : e.path;
    const parts = rel.split("/");
    const folder = parts.length > 1 ? parts[0] : "";
    const filename = parts[parts.length - 1];
    const titre = filename.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
    const detected = detectType(folder);
    // Si fichier directement à la racine du dossier matière, on défaut à "cours".
    const type = detected || "cours";
    return {
      path: e.path,
      file: e.file,
      titre,
      type,
      subfolder: folder,
      autoDetected: !!detected,
    };
  });

  // Tri : cours d'abord, puis td, puis examen, puis nom.
  const order = { cours: 0, td: 1, examen: 2 };
  items.sort(
    (a, b) =>
      (order[a.type] ?? 9) - (order[b.type] ?? 9) || a.titre.localeCompare(b.titre)
  );

  const counts = items.reduce(
    (acc, it) => ({ ...acc, [it.type]: (acc[it.type] || 0) + 1 }),
    { cours: 0, td: 0, examen: 0 }
  );

  return {
    matiere: rootName || "Sans matière",
    rootDetected: !!root,
    items,
    counts,
  };
}

/* ============ Helper : décider si un drop est "batch" ou "simple" ============ */

export function isLikelyBatchDrop(entries) {
  if (!entries || entries.length === 0) return false;
  // Batch si on a un .zip OU plusieurs fichiers dans une structure de dossier.
  if (entries.length === 1) {
    return /\.zip$/i.test(entries[0].path || entries[0].file?.name || "");
  }
  // Plusieurs fichiers avec au moins un slash dans un path = arbo détectée.
  return entries.some((e) => (e.path || "").includes("/"));
}
