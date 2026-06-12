"use client";

import { useMemo, useState } from "react";

const TYPE_ORDER = { cours: 0, td: 1, examen: 2 };
const normalize = (t) => (t === "sujet" ? "examen" : t);
const RECENT_MS = 7 * 24 * 60 * 60 * 1000;

function timeAgo(ts) {
  if (!ts) return "—";
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "à l'instant";
  if (mins < 60) return `il y a ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `il y a ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "hier";
  if (days < 7) return `il y a ${days} jours`;
  if (days < 30) return `il y a ${Math.floor(days / 7)} sem.`;
  if (days < 365) return `il y a ${Math.floor(days / 30)} mois`;
  return `il y a ${Math.floor(days / 365)} an${days >= 730 ? "s" : ""}`;
}

const SORT_LABEL = {
  activity: "Activité ↓",
  name: "Nom A→Z",
  count: "Nombre d'items ↓",
};

export default function Dashboard({
  baseItems,
  lastOpenedItemId,
  onMatiereAction,
  onOpenItem,
  busy,
}) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("activity");

  const lastOpenedItem = useMemo(
    () =>
      lastOpenedItemId
        ? (baseItems || []).find((it) => it.id === lastOpenedItemId)
        : null,
    [baseItems, lastOpenedItemId]
  );

  const matieres = useMemo(() => {
    const map = new Map();
    const now = Date.now();
    for (const it of baseItems || []) {
      const m = it.matiere || "Sans matière";
      if (!map.has(m))
        map.set(m, { name: m, items: [], lastUpdate: 0, recent: 0 });
      const entry = map.get(m);
      entry.items.push(it);
      if ((it.updatedAt || 0) > entry.lastUpdate) entry.lastUpdate = it.updatedAt || 0;
      if (now - (it.createdAt || 0) < RECENT_MS) entry.recent += 1;
    }
    let list = [...map.values()];
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((m) => m.name.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "count") return b.items.length - a.items.length;
      return b.lastUpdate - a.lastUpdate;
    });
    return list;
  }, [baseItems, query, sortBy]);

  if ((baseItems || []).length === 0) {
    return (
      <section className="dash dash-empty">
        <header className="dash-head">
          <h2 className="dash-title">Bienvenue dans Corro AI</h2>
          <p className="dash-sub">
            Ta base est vide. Voici les 3 façons de la peupler.
          </p>
        </header>

        <ol className="onboard">
          <li>
            <span className="onboard-num">1</span>
            <div>
              <h3>Drop un dossier matière</h3>
              <p>
                Si tu as déjà une arborescence{" "}
                <code>Analyse&nbsp;1/Cours/</code>,{" "}
                <code>/Tds/</code>, <code>/Devoir/</code> sur ton disque, glisse-la
                dans la zone de dépôt ci-dessus. Corro détecte la structure et
                transcrit tout en lot.
              </p>
            </div>
          </li>
          <li>
            <span className="onboard-num">2</span>
            <div>
              <h3>Ou un fichier .zip avec la même structure</h3>
              <p>
                Pratique pour les dossiers partagés via Drive/iCloud. Bouton{" "}
                <strong>🗜️ .zip</strong> dans la zone de dépôt.
              </p>
            </div>
          </li>
          <li>
            <span className="onboard-num">3</span>
            <div>
              <h3>Ou un PDF à la fois</h3>
              <p>
                Drop classique, ou bouton{" "}
                <strong>Photo</strong> pour scanner depuis le téléphone.
              </p>
            </div>
          </li>
        </ol>

        <p className="onboard-tip mono">
          Tout reste local (IndexedDB) et anonyme. Aucun compte. Pour porter ta
          base sur une autre machine : ⬇ Exporter ma base (en bas du sidebar).
        </p>
      </section>
    );
  }

  return (
    <section className="dash">
      {lastOpenedItem && (
        <button
          className="resume-card"
          onClick={() => onOpenItem(lastOpenedItem)}
          disabled={busy}
        >
          <div className="resume-tag">Reprendre où tu étais</div>
          <div className="resume-body">
            <span className={`gb-type t-${normalize(lastOpenedItem.type)}`}>
              {normalize(lastOpenedItem.type) === "cours"
                ? "Cours"
                : normalize(lastOpenedItem.type) === "td"
                  ? "TD"
                  : "Examen"}
            </span>
            <span className="resume-titre">{lastOpenedItem.titre}</span>
            <span className="resume-matiere">· {lastOpenedItem.matiere}</span>
          </div>
          <div className="resume-meta mono">
            Dernière modification : {timeAgo(lastOpenedItem.updatedAt)}
            <span className="resume-arrow">→</span>
          </div>
        </button>
      )}

      <header className="dash-head">
        <div>
          <h2 className="dash-title">Mes matières</h2>
          <p className="dash-sub">
            Une carte par matière. Les actions opèrent sur tous les items de la
            matière concernée.
          </p>
        </div>
      </header>

      <div className="dash-controls">
        <input
          type="search"
          className="dash-search"
          placeholder="Filtrer les matières…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="dash-sort">
          <span>Tri</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {Object.entries(SORT_LABEL).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>

      {matieres.length === 0 ? (
        <p className="mono dash-noresult">Aucune matière ne matche « {query} ».</p>
      ) : (
        <div className="dash-grid">
          {matieres.map((m) => {
            const counts = { cours: 0, td: 0, examen: 0 };
            for (const it of m.items) {
              const t = normalize(it.type);
              counts[t] = (counts[t] || 0) + 1;
            }
            return (
              <article key={m.name} className="mat-card">
                <header className="mat-head">
                  <h3 className="mat-name">{m.name}</h3>
                  <span className="mat-total">
                    {m.items.length} item{m.items.length > 1 ? "s" : ""}
                  </span>
                </header>

                <div className="mat-counts">
                  {counts.cours > 0 && (
                    <span className="gb-type t-cours">{counts.cours} Cours</span>
                  )}
                  {counts.td > 0 && (
                    <span className="gb-type t-td">
                      {counts.td} TD{counts.td > 1 ? "s" : ""}
                    </span>
                  )}
                  {counts.examen > 0 && (
                    <span className="gb-type t-examen">
                      {counts.examen} Examen{counts.examen > 1 ? "s" : ""}
                    </span>
                  )}
                  {m.recent > 0 && (
                    <span className="mat-recent" title="Ajoutés dans les 7 derniers jours">
                      🆕 {m.recent} récent{m.recent > 1 ? "s" : ""}
                    </span>
                  )}
                </div>

                <p className="mat-last mono">Dernière activité : {timeAgo(m.lastUpdate)}</p>

                <div className="mat-actions">
                  <button
                    className="ghost sm"
                    disabled={busy || counts.examen < 2}
                    onClick={() => onMatiereAction(m.name, "analyzeProf")}
                    title={counts.examen < 2 ? "Il faut au moins 2 examens" : "Analyser le prof"}
                  >
                    Analyser le prof
                  </button>
                  <button
                    className="ghost sm"
                    disabled={busy || counts.td < 1 || counts.examen < 1}
                    onClick={() => onMatiereAction(m.name, "rankTds")}
                    title={
                      counts.td < 1 || counts.examen < 1
                        ? "Il faut ≥ 1 TD et ≥ 1 examen"
                        : "Ranker les TDs"
                    }
                  >
                    Ranker les TDs
                  </button>
                  <button
                    className="ghost sm"
                    disabled={busy}
                    onClick={() => onMatiereAction(m.name, "plan")}
                    title="Plan de révision sur cette matière"
                  >
                    Plan de révision
                  </button>
                  <button
                    className="ghost sm"
                    disabled={busy || counts.cours < 1}
                    onClick={() => onMatiereAction(m.name, "quiz")}
                    title={counts.cours < 1 ? "Pas de cours dans cette matière" : "Quiz interactif"}
                  >
                    Quiz du cours
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
