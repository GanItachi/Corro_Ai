// lib/export.js
// Export / import de la base perso en archive .zip.
// Format : manifest.json + un .md par item, rangé par matière/type/slug.md.
// Les sourceImages NE sont PAS incluses (trop lourdes, regenerables par re-OCR).

import JSZip from "jszip";
import { listItems, addItem, getItem } from "./db";

const VERSION = 1;

function slug(s) {
  return (
    (s || "untitled")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "") // accents
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "untitled"
  );
}

const TYPE_FOLDER = { cours: "cours", td: "td", examen: "examen" };

function normalizeType(t) {
  if (t === "sujet") return "examen";
  return TYPE_FOLDER[t] ? t : "cours";
}

export async function exportBaseAsZip() {
  const items = await listItems();
  if (items.length === 0) {
    throw new Error("Ta base est vide — rien à exporter.");
  }

  const zip = new JSZip();
  const manifest = {
    version: VERSION,
    exportedAt: Date.now(),
    appName: "Corro AI",
    count: items.length,
    items: [],
  };

  // Pour éviter les collisions de noms de fichier dans la même matière/type.
  const usedPaths = new Set();

  for (const it of items) {
    const type = normalizeType(it.type);
    const matiereFolder = slug(it.matiere || "sans-matiere") || "sans-matiere";
    const titreSlug = slug(it.titre || it.id);
    let filename = `${titreSlug}.md`;
    let i = 1;
    while (usedPaths.has(`${matiereFolder}/${type}/${filename}`)) {
      filename = `${titreSlug}-${i}.md`;
      i++;
    }
    const filePath = `${matiereFolder}/${type}/${filename}`;
    usedPaths.add(filePath);

    // En-tête YAML-like pour rester lisible si on ouvre le .md directement.
    const header =
      `---\n` +
      `titre: ${escYaml(it.titre || "")}\n` +
      `matiere: ${escYaml(it.matiere || "")}\n` +
      `type: ${type}\n` +
      (it.annee ? `annee: ${escYaml(it.annee)}\n` : "") +
      (it.theme ? `theme: ${escYaml(it.theme)}\n` : "") +
      `---\n\n`;
    zip.file(filePath, header + (it.markdown || ""));

    manifest.items.push({
      id: it.id,
      matiere: it.matiere || "",
      type,
      titre: it.titre || "",
      annee: it.annee || "",
      theme: it.theme || "",
      source: it.source || "upload",
      gbakiRef: it.gbakiRef || null,
      filePath,
      createdAt: it.createdAt || 0,
      updatedAt: it.updatedAt || 0,
    });
  }

  zip.file("manifest.json", JSON.stringify(manifest, null, 2));

  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
  return blob;
}

function escYaml(s) {
  if (/[:#&*!?{}\[\]|>"'\n]/.test(s)) return `"${s.replace(/"/g, '\\"')}"`;
  return s;
}

// Retire le bloc front-matter YAML d'un markdown s'il y en a un.
function stripFrontMatter(md) {
  if (!md) return "";
  const m = md.match(/^---\n([\s\S]*?)\n---\n+/);
  if (!m) return md;
  return md.slice(m[0].length);
}

export async function importBaseFromZip(file) {
  const zip = await JSZip.loadAsync(file);
  const manifestFile = zip.file("manifest.json");
  if (!manifestFile) {
    throw new Error(
      "Archive invalide : manifest.json introuvable. Vérifie que c'est bien un export Corro AI."
    );
  }
  let manifest;
  try {
    manifest = JSON.parse(await manifestFile.async("string"));
  } catch {
    throw new Error("manifest.json corrompu — JSON invalide.");
  }
  if (!Array.isArray(manifest?.items)) {
    throw new Error("manifest.json invalide : champ 'items' attendu.");
  }

  let added = 0;
  let skippedExisting = 0;
  let skippedMissingFile = 0;

  for (const entry of manifest.items) {
    if (!entry?.id || !entry?.filePath) continue;

    // Skip si l'item existe déjà (même id).
    const existing = await getItem(entry.id);
    if (existing) {
      skippedExisting++;
      continue;
    }

    const mdFile = zip.file(entry.filePath);
    if (!mdFile) {
      skippedMissingFile++;
      continue;
    }
    const raw = await mdFile.async("string");
    const markdown = stripFrontMatter(raw);

    await addItem({
      id: entry.id,
      matiere: entry.matiere || "Sans matière",
      type: normalizeType(entry.type),
      titre: entry.titre || "Sans titre",
      annee: entry.annee || "",
      theme: entry.theme || "",
      markdown,
      sourceImages: [],
      source: "import",
      gbakiRef: entry.gbakiRef || null,
      createdAt: entry.createdAt || Date.now(),
    });
    added++;
  }

  return { added, skippedExisting, skippedMissingFile };
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
