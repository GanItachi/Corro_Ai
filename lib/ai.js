// lib/ai.js
// Helpers AI côté client.
//  - classifyDocument : auto-classification après OCR
//  - quizQuestion / quizEvaluate : quiz interactif Gemini Flash
// Tous lisent les clés utilisateur en IndexedDB et les passent en headers.

import { getUserKeys, userKeyHeaders } from "./keys";

async function headersWithKeys() {
  const keys = await getUserKeys();
  return { "Content-Type": "application/json", ...userKeyHeaders(keys) };
}

export async function classifyDocument(markdown) {
  if (!markdown || markdown.trim().length < 40) return null;
  try {
    const r = await fetch("/api/classify", {
      method: "POST",
      headers: await headersWithKeys(),
      body: JSON.stringify({ text: markdown }),
    });
    if (!r.ok) return null;
    const data = await r.json();
    if (!data || (data.matiere === "" && data.theme === "")) return null;
    return data;
  } catch {
    return null;
  }
}

export async function quizQuestion({ cours, matiere, history }) {
  try {
    const r = await fetch("/api/quiz", {
      method: "POST",
      headers: await headersWithKeys(),
      body: JSON.stringify({
        mode: "question",
        cours,
        matiere,
        history: Array.isArray(history)
          ? history.map((q) => ({ question: q.question }))
          : [],
      }),
    });
    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      return { error: err?.error || `Erreur (${r.status})` };
    }
    return r.json();
  } catch (e) {
    return { error: String(e?.message || e) };
  }
}

export async function quizEvaluate({ cours, matiere, question, userAnswer }) {
  try {
    const r = await fetch("/api/quiz", {
      method: "POST",
      headers: await headersWithKeys(),
      body: JSON.stringify({
        mode: "evaluate",
        cours,
        matiere,
        question,
        userAnswer,
      }),
    });
    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      return { error: err?.error || `Erreur (${r.status})` };
    }
    return r.json();
  } catch (e) {
    return { error: String(e?.message || e) };
  }
}

export async function testProviderKey(provider, key) {
  try {
    const r = await fetch("/api/test-key", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provider, key }),
    });
    return r.json();
  } catch (e) {
    return { ok: false, error: String(e?.message || e) };
  }
}
