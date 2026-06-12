"use client";

import { useState } from "react";
import { TYPE_LABEL } from "../lib/db";

export default function BatchSummaryModal({
  ok,
  failed,
  matiere,
  onClose,
  onRetry,
}) {
  // Par défaut tous les échecs sont cochés pour relance.
  const [selected, setSelected] = useState(() =>
    new Set(failed.map((_, i) => i))
  );

  function toggle(idx) {
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  function retry() {
    const items = failed.filter((_, i) => selected.has(i));
    onRetry(items);
  }

  const total = ok + failed.length;
  const someChecked = selected.size > 0;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal modal-wide"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className="modal-head">
          <h3>Batch terminé — {matiere}</h3>
          <button className="close" onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </header>

        <div className="modal-body">
          <div className="batch-stats">
            <div className="batch-stat batch-stat-ok">
              <span className="batch-stat-num">{ok}</span>
              <span>OK</span>
            </div>
            <div className="batch-stat batch-stat-fail">
              <span className="batch-stat-num">{failed.length}</span>
              <span>échec{failed.length > 1 ? "s" : ""}</span>
            </div>
            <div className="batch-stat batch-stat-tot">
              <span className="batch-stat-num">{total}</span>
              <span>total</span>
            </div>
          </div>

          {failed.length > 0 ? (
            <>
              <p className="batch-help">
                Coche les fichiers à relancer (mêmes paramètres). Les autres
                resteront non-transcrits — tu peux les redéposer plus tard.
              </p>
              <div className="batch-list">
                {failed.map((f, i) => (
                  <label key={i} className="batch-row batch-fail-row">
                    <input
                      type="checkbox"
                      checked={selected.has(i)}
                      onChange={() => toggle(i)}
                    />
                    <div className="batch-fail-titre">
                      <strong>{f.titre}</strong>
                      <span className={`gb-type t-${f.type}`}>
                        {TYPE_LABEL[f.type] || f.type}
                      </span>
                    </div>
                    <div className="batch-fail-reason mono">{f.reason}</div>
                  </label>
                ))}
              </div>
            </>
          ) : (
            <p className="batch-help">
              Tout est passé sans accroc. Tes items sont dans Ma base.
            </p>
          )}
        </div>

        <footer className="modal-foot">
          <button className="ghost" onClick={onClose}>
            Fermer
          </button>
          {failed.length > 0 && (
            <button
              className="primary"
              onClick={retry}
              disabled={!someChecked}
            >
              Relancer {selected.size > 0 ? `(${selected.size})` : ""}
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
