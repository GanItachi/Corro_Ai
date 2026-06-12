// lib/api-guards.js
// Garde-fous partagés entre les routes API (/api/ocr, /api/classify, …).
// Tous les checks sont au mieux ; en absence de config, ils logguent un warning
// mais n'interdisent pas (pour ne pas casser un premier déploiement).

const LOCALHOST_RE = /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/i;

export function isAllowedOrigin(req) {
  const origin = req.headers.get("origin") || "";
  const referer = req.headers.get("referer") || "";

  // Dev local : tout localhost / 127.0.0.1 / 0.0.0.0 sur n'importe quel port.
  if (process.env.NODE_ENV !== "production") {
    if (!origin && !referer) return true;
    if (LOCALHOST_RE.test(origin)) return true;
    try {
      if (referer && LOCALHOST_RE.test(new URL(referer).origin)) return true;
    } catch { /* referer mal formé */ }
  }

  const allowed = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (process.env.VERCEL_URL) allowed.push(`https://${process.env.VERCEL_URL}`);

  if (allowed.length === 0) {
    console.warn("[corro] ALLOWED_ORIGINS non configuré — API ouverte (à corriger avant prod).");
    return true;
  }
  return allowed.some(
    (o) => origin === o || referer === o || referer.startsWith(o + "/")
  );
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
  // Purge opportuniste.
  if (_hits.size > 5000) {
    for (const [k, v] of _hits) {
      const fresh = v.filter((t) => now - t < RATE_WINDOW_MS);
      if (fresh.length === 0) _hits.delete(k);
      else _hits.set(k, fresh);
    }
  }
  return true;
}

// Helper pratique : check origin + rate-limit en un seul appel.
// Retourne null si OK, ou un Response déjà prêt à renvoyer.
export function guard(req, { rateMax = 60 } = {}) {
  if (!isAllowedOrigin(req)) {
    return Response.json({ error: "Origine non autorisée." }, { status: 403 });
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
