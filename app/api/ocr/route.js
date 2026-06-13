// app/api/ocr/route.js — v7 : chaîne d'OCR + garde-fous abus partagés.
// Moteurs : gemini -> gemini-lite -> groq (vision) -> openrouter (vision).

import { OCR_PROMPT, OCR_VERIFY_PROMPT } from "../../../lib/prompts";
import { guard } from "../../../lib/api-guards";

export const maxDuration = 60;

const ENGINES = {
  gemini: {
    kind: "gemini",
    model: process.env.GEMINI_OCR_MODEL || "gemini-2.5-flash",
    keyEnv: "GEMINI_API_KEY",
    headerKey: "x-user-gemini-key",
  },
  "gemini-lite": {
    kind: "gemini",
    model: process.env.GEMINI_OCR_FALLBACK_MODEL || "gemini-2.5-flash-lite",
    keyEnv: "GEMINI_API_KEY",
    headerKey: "x-user-gemini-key",
  },
  groq: {
    kind: "openai",
    url: "https://api.groq.com/openai/v1/chat/completions",
    model: process.env.GROQ_OCR_MODEL || "meta-llama/llama-4-scout-17b-16e-instruct",
    keyEnv: "GROQ_API_KEY",
    headerKey: "x-user-groq-key",
  },
  openrouter: {
    kind: "openai",
    url: "https://openrouter.ai/api/v1/chat/completions",
    model: process.env.OPENROUTER_OCR_MODEL || "qwen/qwen2.5-vl-72b-instruct:free",
    keyEnv: "OPENROUTER_API_KEY",
    headerKey: "x-user-openrouter-key",
  },
};

function resolveKey(req, conf) {
  const userKey = req.headers.get(conf.headerKey);
  const envKey = process.env[conf.keyEnv];
  const key = (userKey || envKey || "").trim();
  return { key, source: userKey ? "user" : envKey ? "shared" : null };
}

const MAX_REQUEST_BYTES = 4_000_000;

export async function POST(req) {
  const blocked = guard(req, { rateMax: 60 });
  if (blocked) return blocked;

  try {
    const { images, draft, engine = "gemini" } = await req.json();
    if (!Array.isArray(images) || images.length === 0 || images.length > 3) {
      return Response.json({ error: "Envoyer entre 1 et 3 images par requête." }, { status: 400 });
    }

    const totalBytes = images.reduce((s, img) => s + (img?.length || 0), 0);
    if (totalBytes > MAX_REQUEST_BYTES) {
      return Response.json(
        { error: `Payload trop volumineux (${(totalBytes / 1_000_000).toFixed(1)} Mo, max 4 Mo).` },
        { status: 413 }
      );
    }

    const conf = ENGINES[engine];
    if (!conf) return Response.json({ error: "Moteur OCR inconnu." }, { status: 400 });

    const { key: apiKey, source: keySource } = resolveKey(req, conf);
    if (!apiKey) {
      return Response.json(
        {
          error:
            `Pas de clé ${conf.keyEnv} disponible. ` +
            `Configure ta clé personnelle dans Paramètres ⚙ ou demande à l'admin de configurer la clé partagée.`,
          skip: true,
          needsKey: true,
        },
        { status: 501 }
      );
    }

    for (const dataUrl of images) {
      if (!/^data:image\/(?:jpeg|png|webp);base64,/.test(dataUrl)) {
        return Response.json({ error: "Format d'image invalide." }, { status: 400 });
      }
    }

    const isVerify = typeof draft === "string" && draft.trim().length > 0;
    const prompt = isVerify ? OCR_VERIFY_PROMPT : OCR_PROMPT;

    let r;
    if (conf.kind === "gemini") {
      const parts = [{ text: prompt }];
      for (const dataUrl of images) {
        const m = /^data:(image\/[a-z]+);base64,(.+)$/.exec(dataUrl);
        parts.push({ inline_data: { mime_type: m[1], data: m[2] } });
      }
      if (isVerify) parts.push({ text: `BROUILLON À RELIRE :\n\n${draft}` });

      r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${conf.model}:generateContent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
          body: JSON.stringify({ contents: [{ parts }], generationConfig: { temperature: 0 } }),
        }
      );
    } else {
      const content = [{ type: "text", text: prompt }];
      for (const dataUrl of images) {
        content.push({ type: "image_url", image_url: { url: dataUrl } });
      }
      if (isVerify) content.push({ type: "text", text: `BROUILLON À RELIRE :\n\n${draft}` });

      r = await fetch(conf.url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: conf.model,
          messages: [{ role: "user", content }],
          temperature: 0,
        }),
      });
    }

    if (r.status === 429) {
      const detail = await r.text();
      const daily = /PerDay|daily|RPD/i.test(detail);
      return Response.json(
        {
          error: daily ? `Quota journalier épuisé sur ${engine}.` : `Quota par minute atteint sur ${engine}.`,
          retry: !daily,
          daily,
          detail: detail.slice(0, 300),
        },
        { status: 429 }
      );
    }
    if ([502, 503, 504].includes(r.status)) {
      return Response.json(
        { error: `Serveurs ${engine} surchargés (${r.status}).`, retry: true },
        { status: 503 }
      );
    }
    if (r.status === 404) {
      return Response.json(
        { error: `Modèle introuvable sur ${engine} (à mettre à jour dans les variables d'env).`, skip: true },
        { status: 501 }
      );
    }
    if (!r.ok) {
      const detail = await r.text();
      return Response.json(
        { error: `Erreur ${engine} (${r.status})`, detail: detail.slice(0, 500) },
        { status: 502 }
      );
    }

    const raw = await r.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      // Le moteur a renvoyé du texte brut — pas du JSON.
      return Response.json(
        { error: `Réponse inattendue de ${engine} : ${raw.slice(0, 200)}` },
        { status: 502 }
      );
    }
    
    const markdown =
      conf.kind === "gemini"
        ? data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || ""
        : data?.choices?.[0]?.message?.content || "";
    
    // Gemini peut répondre 200 avec un champ error dans le body
    if (data?.error) {
      const msg = data.error?.message || JSON.stringify(data.error).slice(0, 200);
      const daily = /quota|limit|exhausted/i.test(msg);
      return Response.json(
        { error: msg, daily, retry: !daily },
        { status: daily ? 429 : 502 }
      );
    }
    
    if (!markdown.trim()) {
      return Response.json(
        {
          error: `Aucun texte extrait par ${engine}.
                  Le fichier est peut-être vide ou illisible.`
        },
        { status: 502 }
      );
    }
    
    return Response.json({ markdown, engine, keySource });
  } catch (e) {
    return Response.json({ error: String(e?.message || e) }, { status: 500 });
  }
}
