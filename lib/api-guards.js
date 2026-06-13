// lib/api-guards.js
// Garde-fous partagés entre les routes API (/api/ocr, /api/classify, …).
//
// Ordre de priorité pour autoriser une requête :
//   1. SAME-ORIGIN : l'origin de la requête correspond à l'host du serveur.
//      C'est le cas le plus courant (le navigateur d'un utilisateur appelle
//      l'API du même site). Toujours autorisé.
//   2. DEV : en local on tolère localhost, 127.0.0.1, 0.0.0.0 et les IPs
//      privées (192.168.x.x, 10.x.x.x, 172.16-31.x.x) — tests mobiles
//      via réseau wifi.
//   3. ALLOWED_ORIGINS : allowlist explicite via env, + auto-injection des
//      URLs Vercel (VERCEL_URL, VERCEL_PROJECT_PRODUCTION_URL, VERCEL_BRANCH_URL).
//   4. Si rien n'est configuré : ouvert (premier déploiement) avec warning.

const LOCALHOST_OR_PRIVATE_RE =
  /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+)(:\d+)?$/i;

function selfOrigin(req) {
  try {
    const url = new URL(req.url);
    return `${url.protocol}//${url.host}`;
  } catch {
    return null;
  }
}

function matches(target, origin, referer) {
  if (!target) return false;
  if (origin === target) return true;
  if (referer === target) return true;
  if (referer.startsWith(target + "/")) return true;
  return false;
}

export function isAllowedOrigin(req) {
  const origin = req.headers.get("origin") || "";
  const referer = req.headers.get("referer") || "";

  // 1. Same-origin (toujours OK : c'est ton propre frontend qui appelle ton API).
  const self = selfOrigin(req);
  if (matches(self, origin, referer)) return true;

  // 2. Dev local + IPs privées (LAN).
  if (process.env.NODE_ENV !== "production") {
    if (!origin && !referer) return true;
    if (LOCALHOST_OR_PRIVATE_RE.test(origin)) return true;
    try {
      if (referer && LOCALHOST_OR_PRIVATE_RE.test(new URL(referer).origin))
        return true;
    } catch { /* referer mal formé */ }
  }

  // 3. Allowlist explicite + auto-injection Vercel.
  const allowed = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (process.env.VERCEL_URL) allowed.push(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    allowed.push(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  if (process.env.VERCEL_BRANCH_URL)
    allowed.push(`https://${process.env.VERCEL_BRANCH_URL}`);

  // 4. Aucune config : on log et on laisse passer.
  if (allowed.length === 0) {
    console.warn(
      "[corro] ALLOWED_ORIGINS non configuré — API ouverte (à corriger avant prod)."
    );
    return true;
  }

  return allowed.some((o) => matches(o, origin, referer));
}

export function clientIp(req) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

// Rate-limit en mémoire par instance serverless. Imparfait mais gratuit.
// Pour un rate-limit global, brancher Upstash Redis.
const _hits = new Map();
const RATE_WINDOW_MS = 5 * 60 * 1000;

export function rateLimit(key, max = 60) {
  const now = Date.now();
  const arr = (_hits.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= max) {
    _hits.set(key, arr);
    return false;
  }
  arr.push(now);
  _hits.set(key, arr);
  if (_hits.size > 5000) {
    for (const [k, v] of _hits) {
      const fresh = v.filter((t) => now - t < RATE_WINDOW_MS);
      if (fresh.length === 0) _hits.delete(k);
      else _hits.set(k, fresh);
    }
  }
  return true;
}

// Helper : origin check + rate-limit en un seul appel.
// Retourne null si OK, ou un Response prêt à renvoyer.
export function guard(req, { rateMax = 60 } = {}) {
  if (!isAllowedOrigin(req)) {
    const origin =
      req.headers.get("origin") ||
      req.headers.get("referer") ||
      "(en-tête origin absent)";
    console.warn(`[corro] Origine refusée : ${origin}`);
    return Response.json(
      {
        error: "Origine non autorisée.",
        origin,
        hint: "Si tu es admin, ajoute cette origine à ALLOWED_ORIGINS (séparées par virgule) dans les variables d'environnement Vercel.",
      },
      { status: 403 }
    );
  }
  const ip = clientIp(req);
  if (!rateLimit(ip, rateMax)) {
    return Response.json(
      { error: "Trop de requêtes — réessaie dans quelques minutes." },
      { status: 429 }
    );
  }
  return null;
}
