// lib/tokens.js
// Heuristique grossière : ~4 caractères par token en français/anglais.
// Largement suffisant pour avertir avant que le prompt sature DeepSeek/Claude.

export function estimateTokens(text) {
  return Math.round((text || "").length / 4);
}

// Seuils pratiques (au printemps 2026) :
//  - DeepSeek Chat (web) : ~64k contexte, sûr jusqu'à ~30k
//  - Claude (claude.ai)  : ~200k, sûr jusqu'à ~100k
//  - Gemini (aistudio)   : ~1M, sûr partout
export function tokenStatus(tokens) {
  if (tokens < 8_000)   return { kind: "ok",     label: "court" };
  if (tokens < 30_000)  return { kind: "ok",     label: "OK partout" };
  if (tokens < 100_000) return { kind: "warn",   label: "long — préfère Claude ou attache le .txt" };
  return                       { kind: "danger", label: "trop long — divise le sujet en parties" };
}
