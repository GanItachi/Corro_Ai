// app/api/test-key/route.js
// Valide une clé fournie par l'utilisateur en faisant un appel minimal au provider.
// Pas de quota OCR consommé : on liste les modèles, c'est gratuit chez tous les providers ciblés.

import { guard } from "../../../lib/api-guards";

export const maxDuration = 15;

const ENDPOINTS = {
  gemini: {
    method: "GET",
    url: () => `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent("KEY")}`,
    buildUrl: (key) => `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`,
    headers: () => ({}),
    okOn: (status) => status === 200,
  },
  groq: {
    method: "GET",
    buildUrl: () => "https://api.groq.com/openai/v1/models",
    headers: (key) => ({ Authorization: `Bearer ${key}` }),
    okOn: (status) => status === 200,
  },
  openrouter: {
    method: "GET",
    buildUrl: () => "https://openrouter.ai/api/v1/models",
    headers: (key) => ({ Authorization: `Bearer ${key}` }),
    okOn: (status) => status === 200,
  },
};

export async function POST(req) {
  const blocked = guard(req, { rateMax: 100 });
  if (blocked) return blocked;

  try {
    const { provider, key } = await req.json();
    if (!provider || !key || typeof key !== "string" || key.length < 8) {
      return Response.json(
        { ok: false, error: "Clé manquante ou trop courte." },
        { status: 400 }
      );
    }
    const conf = ENDPOINTS[provider];
    if (!conf) {
      return Response.json(
        { ok: false, error: `Provider "${provider}" inconnu.` },
        { status: 400 }
      );
    }

    const r = await fetch(conf.buildUrl(key.trim()), {
      method: conf.method,
      headers: conf.headers(key.trim()),
    });

    if (conf.okOn(r.status)) {
      return Response.json({ ok: true });
    }
    if (r.status === 401 || r.status === 403) {
      return Response.json(
        { ok: false, error: "Clé refusée par le provider (invalide ou révoquée)." },
        { status: 200 }
      );
    }
    if (r.status === 429) {
      return Response.json(
        {
          ok: false,
          error: "Clé valide mais quota épuisé pour le moment (attends ou réessaie plus tard).",
          quotaIssue: true,
        },
        { status: 200 }
      );
    }
    const detail = (await r.text()).slice(0, 200);
    return Response.json(
      { ok: false, error: `Erreur du provider (${r.status})`, detail },
      { status: 200 }
    );
  } catch (e) {
    return Response.json(
      { ok: false, error: String(e?.message || e) },
      { status: 500 }
    );
  }
}
