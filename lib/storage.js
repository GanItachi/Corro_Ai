// lib/storage.js
// État général léger en localStorage : préférences UI, dernier item ouvert.
// La base des cours/TDs/examens vit dans IndexedDB (voir lib/db.js).

const KEY = "corroai:v1";

export function loadState() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function saveState(state) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Quota dépassé ou mode privé.
  }
}

export function clearState() {
  if (typeof window !== "undefined") localStorage.removeItem(KEY);
}
