// lib/db.js
// Base persistante (cours, TDs, examens) en IndexedDB.
// Anonyme, par navigateur. Plusieurs centaines de Mo dispos sans config serveur.
// Pour synchroniser entre appareils : export/import .zip (à venir).

import { openDB } from "idb";

const DB_NAME = "corroai";
const DB_VERSION = 1;

// Types canoniques. "sujet" était utilisé dans le vieux Gbaki -> on normalise.
export const TYPES = ["cours", "td", "examen"];
export const TYPE_LABEL = { cours: "Cours", td: "TD", examen: "Examen" };

let _dbPromise;
function db() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("IndexedDB indisponible côté serveur."));
  }
  if (!_dbPromise) {
    _dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(d, oldVersion) {
        if (oldVersion < 1) {
          const items = d.createObjectStore("items", { keyPath: "id" });
          items.createIndex("matiere", "matiere", { unique: false });
          items.createIndex("type", "type", { unique: false });
          items.createIndex("matiere_type", ["matiere", "type"], { unique: false });
          items.createIndex("gbakiRef", "gbakiRef", { unique: false });
          items.createIndex("updatedAt", "updatedAt", { unique: false });

          d.createObjectStore("prefs", { keyPath: "key" });
        }
      },
    });
  }
  return _dbPromise;
}

function newId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  return "id_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function normalizeType(t) {
  if (t === "sujet") return "examen"; // alias rétro-compat
  return TYPES.includes(t) ? t : "cours";
}

export async function addItem(partial) {
  const now = Date.now();
  const item = {
    id: partial.id || newId(),
    matiere: partial.matiere || "Sans matière",
    type: normalizeType(partial.type),
    titre: partial.titre || "Sans titre",
    annee: partial.annee || "",
    theme: partial.theme || "",
    markdown: partial.markdown || "",
    sourceImages: partial.sourceImages || [],
    source: partial.source || "upload", // gbaki | upload | import
    gbakiRef: partial.gbakiRef || null,
    createdAt: partial.createdAt || now,
    updatedAt: now,
  };
  const d = await db();
  await d.put("items", item);
  return item;
}

export async function getItem(id) {
  if (!id) return null;
  const d = await db();
  return (await d.get("items", id)) || null;
}

export async function updateItem(id, patch) {
  const existing = await getItem(id);
  if (!existing) return null;
  const updated = { ...existing, ...patch, id, updatedAt: Date.now() };
  const d = await db();
  await d.put("items", updated);
  return updated;
}

export async function deleteItem(id) {
  if (!id) return;
  const d = await db();
  await d.delete("items", id);
}

export async function listItems() {
  const d = await db();
  return (await d.getAll("items")).sort((a, b) => b.updatedAt - a.updatedAt);
}

export async function listByMatiere(matiere, type) {
  const d = await db();
  if (type) {
    return d.getAllFromIndex("items", "matiere_type", [matiere, normalizeType(type)]);
  }
  return d.getAllFromIndex("items", "matiere", matiere);
}

export async function listMatieres() {
  const items = await listItems();
  const map = new Map();
  for (const it of items) {
    const m = it.matiere || "Sans matière";
    if (!map.has(m)) map.set(m, { name: m, total: 0, cours: 0, td: 0, examen: 0 });
    const e = map.get(m);
    e.total++;
    e[it.type] = (e[it.type] || 0) + 1;
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export async function findByGbakiRef(gbakiId) {
  const d = await db();
  const all = await d.getAllFromIndex("items", "gbakiRef", gbakiId);
  return all[0] || null;
}

// Helpers Gbaki : créer ou retrouver un item à partir d'une entrée du manifeste.
export async function getOrCreateFromGbaki(manifestItem) {
  const existing = await findByGbakiRef(manifestItem.id);
  if (existing) return existing;
  return addItem({
    matiere: manifestItem.matiere,
    type: manifestItem.type,
    titre: manifestItem.titre,
    annee: manifestItem.annee,
    source: "gbaki",
    gbakiRef: manifestItem.id,
  });
}

// Export / import (Phase 5). Stub pour l'instant pour ne pas casser la signature.
export async function exportAll() {
  return listItems();
}

export async function importMany(items) {
  for (const it of items) {
    await addItem({ ...it, id: it.id || newId(), source: "import" });
  }
}

/* ============ Préférences UI (durables) ============ */

export async function getPref(key, fallback = null) {
  const d = await db();
  const row = await d.get("prefs", key);
  return row ? row.value : fallback;
}

export async function setPref(key, value) {
  const d = await db();
  await d.put("prefs", { key, value });
}
