// app/api/classify/route.js
// Classifie un document académique : matière et thème principal.
// Léger appel Gemini Flash, JSON strict en sortie.

import { guard } from "../../../lib/api-guards";

export const maxDuration = 30;

const MAX_TEXT = 8000;
const MODEL = process.env.GEMINI_CLASSIFY_MODEL || "gemini-2.5-flash";

const PROMPT_TEMPLATE = `Tu es un classificateur de documents académiques (mathématiques, statistiques, économie, physique, informatique théorique).

Document à classer (extrait, OCR possiblement imparfait) :
<document>
{TEXT}
</document>

Réponds en JSON STRICT, sans commentaire, sans backticks, sans markdown autour :
{"matiere": "...", "theme": "..."}

Règles :
- "matiere" : 1 à 4 mots, le nom du cours/de la matière (ex. "Analyse 1", "Statistiques inférentielles", "Algèbre linéaire", "Probabilités"). Pas d'année.
- "theme" : 2 à 6 mots, la notion centrale du document (ex. "Suites et séries numériques", "Tests d'hypothèses", "Diagonalisation").
- Si l'extrait ne permet pas de trancher, mets une chaîne vide pour la valeur concernée.`;

export async function POST(req) {
  const blocked = guard(req, { rateMax: 120 });
  if (blocked) return blocked;

  try {
    const { text } = await req.json();
    if (typeof text !== "string" || !text.trim()) {
      return Response.json({ error: "Texte manquant." }, { status: 400 });
    }
    const userKey = req.headers.get("x-user-gemini-key");
    const apiKey = (userKey || process.env.GEMINI_API_KEY || "").trim();
    if (!apiKey) {
      return Response.json(
        { error: "Pas de clé Gemini disponible.", skip: true, needsKey: true },
        { status: 501 }
      );
    }

    const sample = text.slice(0, MAX_TEXT);
    const prompt = PROMPT_TEMPLATE.replace("{TEXT}", sample);

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (r.status === 429) {
      return Response.json(
        { error: "Quota Gemini atteint.", retry: true },
        { status: 429 }
      );
    }
    if (!r.ok) {
      const detail = await r.text();
      return Response.json(
        { error: `Erreur Gemini (${r.status})`, detail: detail.slice(0, 300) },
        { status: 502 }
      );
    }

    const data = await r.json();
    const raw =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") ||
      "";
    try {
      const parsed = JSON.parse(raw.trim());
      return Response.json({
        matiere: String(parsed.matiere || "").trim().slice(0, 60),
        theme: String(parsed.theme || "").trim().slice(0, 120),
      });
    } catch {
      return Response.json(
        { error: "Réponse Gemini illisible.", raw: raw.slice(0, 200) },
        { status: 502 }
      );
    }
  } catch (e) {
    return Response.json({ error: String(e?.message || e) }, { status: 500 });
  }
}
