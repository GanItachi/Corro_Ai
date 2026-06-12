// lib/keys.js
// Gestion des clés API personnelles (BYOK) stockées en IndexedDB côté navigateur.
// Mode "perso" = utilisateur a au moins sa clé Gemini configurée.
// Mode "partagé" = repose sur les clés env du déploiement (quotas partagés).

import { getPref, setPref } from "./db";

export const PROVIDERS = [
  {
    key: "gemini",
    label: "Gemini Flash (Google AI Studio)",
    role: "OCR principal · auto-détection · quiz",
    url: "https://aistudio.google.com/apikey",
    required: true,
    placeholder: "AIzaSy…",
    note: "Obligatoire pour faire tourner l'app sans dépendre du mode partagé. Aucune carte bancaire demandée.",
  },
  {
    key: "groq",
    label: "Groq (vision)",
    role: "OCR de secours quand Gemini est saturé",
    url: "https://console.groq.com/keys",
    required: false,
    placeholder: "gsk_…",
    note: "Optionnel mais recommandé. Très généreux, pas de CB. Compte créé en 30 secondes via GitHub/Google.",
  },
  {
    key: "openrouter",
    label: "OpenRouter (modèles :free)",
    role: "Ultime repli OCR si Gemini et Groq sont down",
    url: "https://openrouter.ai/keys",
    required: false,
    placeholder: "sk-or-…",
    note: "Optionnel. Quotas variables selon les modèles :free. Inscription rapide.",
  },
];

function prefKey(provider) {
  return `key:${provider}`;
}

export async function getUserKeys() {
  const out = {};
  for (const p of PROVIDERS) {
    out[p.key] = (await getPref(prefKey(p.key))) || "";
  }
  return out;
}

export async function setUserKey(provider, value) {
  await setPref(prefKey(provider), (value || "").trim());
}

export async function clearUserKey(provider) {
  await setPref(prefKey(provider), "");
}

// "perso" si l'utilisateur a au moins la clé Gemini (la seule vraiment requise).
// "partagé" sinon.
export async function getMode() {
  const k = await getUserKeys();
  return k.gemini ? "perso" : "shared";
}

// Headers à injecter dans les fetch vers les routes API.
export function userKeyHeaders(keys) {
  const h = {};
  for (const p of PROVIDERS) {
    if (keys?.[p.key]) h[`x-user-${p.key}-key`] = keys[p.key];
  }
  return h;
}

/* ============ Flag onboarding ============ */

const ONBOARDING_KEY = "onboardingDone";

export async function isOnboardingDone() {
  return (await getPref(ONBOARDING_KEY)) === true;
}

export async function markOnboardingDone() {
  await setPref(ONBOARDING_KEY, true);
}
