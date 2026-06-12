"use client";

import { useMemo, useState } from "react";
import { TYPE_LABEL } from "../lib/db";

const normalize = (t) => (t === "sujet" ? "examen" : t);

export default function ToolsPanel({
  baseItems,
  gbakiManifest,
  selectedIds,
  studyPrompt,
  studyToolLabel,
  onClearSelection,
  onAnalyzeProf,
  onRankTds,
  onPlanRevision,
  onQuizCours,
  onCopy,
  onDownload,
  copiedTag,
  busy,
}) {
  const [targetDate, setTargetDate] = useState("");

  const selSummary = useMemo(() => {
    const counts = { cours: 0, td: 0, examen: 0 };
    const matieres = new Set();
    const titres = [];
    for (const sid of selectedIds || []) {
      if (sid.startsWith("base:")) {
        const it = (baseItems || []).find((x) => x.id === sid.slice(5));
        if (it) {
          counts[normalize(it.type)] = (counts[normalize(it.type)] || 0) + 1;
          if (it.matiere) matieres.add(it.matiere);
          titres.push({ titre: it.titre, type: normalize(it.type) });
        }
      } else if (sid.startsWith("gbaki:")) {
        const it = (gbakiManifest || []).find((x) => x.id === sid.slice(6));
        if (it) {
          counts[normalize(it.type)] = (counts[normalize(it.type)] || 0) + 1;
          if (it.matiere) matieres.add(it.matiere);
          titres.push({ titre: it.titre, type: normalize(it.type) });
        }
      }
    }
    return { counts, matieres: [...matieres], titres };
  }, [selectedIds, baseItems, gbakiManifest]);

  const totalSel = (selectedIds || []).length;
  const canAnalyzeProf = selSummary.counts.examen >= 2;
  const canRankTds =
    selSummary.counts.td >= 1 && selSummary.counts.examen >= 1;
  const canPlan = totalSel >= 1;
  const canQuiz = selSummary.counts.cours >= 1;
  const mixedMatieres = selSummary.matieres.length > 1;

  // Le panneau est inutile si rien n'est sélectionné ET pas de prompt à afficher.
  if (totalSel === 0 && !studyPrompt) return null;

  return (
    <section className="tools-panel">
      {totalSel > 0 && (
        <>
          <header className="tools-head">
            <div>
              <h2 className="tools-title">Outils d&apos;étude</h2>
              <p className="tools-sub">
                Sélection de {totalSel} item{totalSel > 1 ? "s" : ""}.
                {mixedMatieres ? (
                  <span className="tools-warn">
                    {" "}
                    ⚠ matières mélangées ({selSummary.matieres.join(", ")}) —
                    déselectionne pour ne garder qu&apos;une matière.
                  </span>
                ) : selSummary.matieres.length === 1 ? (
                  <> Matière : <strong>{selSummary.matieres[0]}</strong>.</>
                ) : null}
              </p>
            </div>
            <button className="link-btn" onClick={onClearSelection}>
              Vider la sélection
            </button>
          </header>

          <div className="tools-meta">
            <span className="tools-chip">
              {selSummary.counts.cours} cours · {selSummary.counts.td} TD ·{" "}
              {selSummary.counts.examen} examen
              {selSummary.counts.examen > 1 ? "s" : ""}
            </span>
          </div>

          <div className="tools-grid">
            <ToolCard
              title="Analyser le prof"
              hint="≥ 2 examens du même prof. Génère un prompt qui repère les notions récurrentes et propose un sujet blanc."
              disabled={!canAnalyzeProf || mixedMatieres || busy}
              onClick={onAnalyzeProf}
            />
            <ToolCard
              title="Ranker mes TDs"
              hint="≥ 1 TD + ≥ 1 examen. L'IA croise les TDs avec les examens et te dit lesquels sont prioritaires."
              disabled={!canRankTds || mixedMatieres || busy}
              onClick={onRankTds}
            />
            <ToolCard
              title="Plan de révision"
              hint="N'importe quel mix (cours + TDs + examens). Génère un planning de sessions ciblées."
              disabled={!canPlan || mixedMatieres || busy}
              onClick={() => onPlanRevision(targetDate)}
              extra={
                <input
                  type="date"
                  className="tools-date-input"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  placeholder="Date cible (optionnel)"
                  aria-label="Date cible de l'examen"
                />
              }
            />
            <ToolCard
              title="Quiz du cours"
              hint="≥ 1 cours. Quiz interactif de 8 questions corrigées par Gemini, directement dans l'app."
              disabled={!canQuiz || mixedMatieres || busy}
              onClick={onQuizCours}
              accent
            />
          </div>
        </>
      )}

      {studyPrompt && (
        <div className="tools-result">
          <div className="tools-result-head">
            <p className="tools-result-label">
              Prompt généré — <em>{studyToolLabel}</em>
            </p>
            <span className="mono small">
              ≈ {Math.round(studyPrompt.length / 4).toLocaleString("fr-FR")} tokens
            </span>
          </div>
          <textarea
            className="promptbox tools-promptbox"
            value={studyPrompt}
            readOnly
            rows={9}
          />
          <p className="mono small">
            Colle ce prompt dans une IA frontière. DeepSeek DeepThink (R1) est le
            plus rigoureux sur les maths ; Claude est solide partout.
          </p>
          <div className="btnrow">
            <button className="ghost" onClick={() => onCopy(studyPrompt, "study")}>
              {copiedTag === "study" ? "Copié ✓" : "Copier le prompt"}
            </button>
            <button
              className="ghost"
              onClick={() => onDownload(`${studyToolLabel || "prompt"}.txt`, studyPrompt)}
            >
              Télécharger .txt
            </button>
            <a
              className="btn ghost"
              href="https://chat.deepseek.com"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir DeepSeek ↗
            </a>
            <a
              className="btn ghost"
              href="https://claude.ai/new"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir Claude ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

function ToolCard({ title, hint, disabled, onClick, extra, accent }) {
  return (
    <div className={`tool-card ${accent ? "tool-card-accent" : ""}`}>
      <h3 className="tool-card-title">{title}</h3>
      <p className="tool-card-hint">{hint}</p>
      {extra}
      <button
        className={`${accent ? "primary" : "ghost"} tool-card-cta`}
        disabled={disabled}
        onClick={onClick}
      >
        {accent ? "Lancer le quiz" : "Générer le prompt"}
      </button>
    </div>
  );
}
