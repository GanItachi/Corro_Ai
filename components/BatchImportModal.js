"use client";

import { useState } from "react";
import { TYPE_LABEL, TYPES } from "../lib/db";

const TYPE_EMOJI = { cours: "📚", td: "📝", examen: "🎯" };

export default function BatchImportModal({
  parsed,
  matiereSuggestions,
  onCancel,
  onConfirm,
}) {
  const [matiere, setMatiere] = useState(parsed.matiere || "");
  const [overrides, setOverrides] = useState({}); // index → type
  const [excluded, setExcluded] = useState(() => new Set()); // index rejetés
  const [verifyPass, setVerifyPass] = useState(true);

  function setItemType(idx, type) {
    setOverrides((o) => ({ ...o, [idx]: type }));
  }

  function toggleExclude(idx) {
    setExcluded((s) => {
      const next = new Set(s);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  function setAll(include) {
    if (include) setExcluded(new Set());
    else setExcluded(new Set(parsed.items.map((_, i) => i)));
  }

  const items = parsed.items.map((it, idx) => ({
    ...it,
    type: overrides[idx] || it.type,
    idx,
    kept: !excluded.has(idx),
  }));

  const keptItems = items.filter((it) => it.kept);
  const counts = keptItems.reduce(
    (acc, it) => ({ ...acc, [it.type]: (acc[it.type] || 0) + 1 }),
    { cours: 0, td: 0, examen: 0 }
  );
  const total = keptItems.length;
  const rejectedCount = items.length - total;

  // Estimation : ~50s par fichier en moyenne avec relecture activée.
  const estimatedMinutes = Math.max(1, Math.round(total * (verifyPass ? 0.8 : 0.45)));

  function submit() {
    if (!matiere.trim() || total === 0) return;
    onConfirm({
      matiere: matiere.trim(),
      items: keptItems.map(({ idx, kept, ...rest }) => rest),
      verifyPass,
    });
  }

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div
        className="modal modal-wide"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className="modal-head">
          <h3>Importer un dossier matière</h3>
          <button className="close" onClick={onCancel} aria-label="Fermer">
            ×
          </button>
        </header>

        <div className="modal-body">
          <label className="field block">
            <span>Nom de la matière</span>
            <input
              type="text"
              list="matiere-suggestions-batch"
              value={matiere}
              onChange={(e) => setMatiere(e.target.value)}
              autoFocus
            />
            <datalist id="matiere-suggestions-batch">
              {(matiereSuggestions || []).map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
            {!parsed.rootDetected && (
              <small className="field-hint">
                Aucun dossier racine clair : nomme la matière manuellement.
              </small>
            )}
          </label>

          <div className="batch-summary">
            {Object.entries(counts).map(([t, n]) =>
              n > 0 ? (
                <span key={t} className={`gb-type t-${t}`}>
                  {TYPE_EMOJI[t]} {n} {TYPE_LABEL[t]}
                  {n > 1 && t !== "td" ? "s" : ""}
                </span>
              ) : null
            )}
            <span className="batch-total">
              {total} retenu{total > 1 ? "s" : ""}
              {rejectedCount > 0 && ` · ${rejectedCount} rejeté${rejectedCount > 1 ? "s" : ""}`}
            </span>
          </div>

          <p className="batch-est mono">
            Estimation : ~{estimatedMinutes} min de transcription, séquentielle.
            Tu peux annuler en cours. Décoche les fichiers à ne pas transcrire.
          </p>

          <div className="batch-list-tools">
            <button
              type="button"
              className="link-btn"
              onClick={() => setAll(true)}
              disabled={rejectedCount === 0}
            >
              Tout garder
            </button>
            <span className="batch-list-sep">·</span>
            <button
              type="button"
              className="link-btn"
              onClick={() => setAll(false)}
              disabled={total === 0}
            >
              Tout rejeter
            </button>
          </div>

          <div className="batch-list">
            {items.map((it) => (
              <div
                key={it.idx}
                className={`batch-row ${it.kept ? "" : "batch-row-excluded"}`}
              >
                <input
                  type="checkbox"
                  className="batch-pick"
                  checked={it.kept}
                  onChange={() => toggleExclude(it.idx)}
                  title={it.kept ? "Décoche pour rejeter ce fichier" : "Réinclure ce fichier"}
                />
                <span className="batch-folder mono">
                  {it.subfolder || "racine"} /
                </span>
                <span className="batch-titre" title={it.titre}>
                  {it.titre}
                </span>
                <select
                  className="batch-type"
                  value={it.type}
                  onChange={(e) => setItemType(it.idx, e.target.value)}
                  disabled={!it.kept}
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {TYPE_LABEL[t]}
                    </option>
                  ))}
                </select>
                {!it.autoDetected && (
                  <span className="batch-warn" title="Dossier non reconnu, type par défaut">
                    ?
                  </span>
                )}
              </div>
            ))}
          </div>

          <label className="check">
            <input
              type="checkbox"
              checked={verifyPass}
              onChange={(e) => setVerifyPass(e.target.checked)}
            />
            <span>
              Relecture des formules (2ᵉ passe). Plus précis sur les maths, deux
              fois plus de quota consommé.
            </span>
          </label>
        </div>

        <footer className="modal-foot">
          <button className="ghost" onClick={onCancel}>
            Annuler
          </button>
          <button
            className="primary"
            onClick={submit}
            disabled={!matiere.trim() || total === 0}
          >
            Lancer la transcription ({total})
          </button>
        </footer>
      </div>
    </div>
  );
}
