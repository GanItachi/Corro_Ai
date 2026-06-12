"use client";

import { useEffect, useState } from "react";
import { TYPES, TYPE_LABEL } from "../lib/db";
import { getPageCount } from "../lib/pdf";

export default function AddItemModal({
  file,
  defaults,
  matiereSuggestions,
  onCancel,
  onConfirm,
}) {
  const [titre, setTitre] = useState(defaults?.titre || "");
  const [matiere, setMatiere] = useState(defaults?.matiere || "");
  const [type, setType] = useState(
    defaults?.type === "sujet" ? "examen" : defaults?.type || "cours"
  );
  const [annee, setAnnee] = useState(defaults?.annee || "");
  const [numPages, setNumPages] = useState(null);
  const [pageFrom, setPageFrom] = useState(1);
  const [pageTo, setPageTo] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    if (!file) {
      setLoading(false);
      return;
    }
    setLoading(true);
    getPageCount(file)
      .then((n) => {
        if (cancelled) return;
        setNumPages(n);
        setPageFrom(1);
        setPageTo(n);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(String(e?.message || e));
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  function submit() {
    if (!titre.trim()) {
      setError("Donne un titre.");
      return;
    }
    if (!matiere.trim()) {
      setError("Précise la matière.");
      return;
    }
    if (numPages && (pageFrom < 1 || pageTo > numPages || pageFrom > pageTo)) {
      setError("Plage de pages invalide.");
      return;
    }
    onConfirm({
      titre: titre.trim(),
      matiere: matiere.trim(),
      type,
      annee: annee.trim(),
      pageFrom: numPages ? pageFrom : 1,
      pageTo: numPages ? pageTo : 1,
    });
  }

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <header className="modal-head">
          <h3>Nouveau document</h3>
          <button className="close" onClick={onCancel} aria-label="Fermer">
            ×
          </button>
        </header>

        <div className="modal-body">
          <label className="field block">
            <span>Titre</span>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              autoFocus
            />
          </label>

          <label className="field block">
            <span>Matière</span>
            <input
              type="text"
              list="matiere-suggestions"
              value={matiere}
              onChange={(e) => setMatiere(e.target.value)}
              placeholder="ex. Analyse 1"
            />
            <datalist id="matiere-suggestions">
              {(matiereSuggestions || []).map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
          </label>

          <div className="field block">
            <span>Type</span>
            <div className="radios">
              {TYPES.map((t) => (
                <label key={t} className={`radio ${type === t ? "on" : ""}`}>
                  <input
                    type="radio"
                    name="type"
                    value={t}
                    checked={type === t}
                    onChange={() => setType(t)}
                  />
                  <span>{TYPE_LABEL[t]}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field block">
            <span>Année (optionnel)</span>
            <input
              type="text"
              value={annee}
              onChange={(e) => setAnnee(e.target.value)}
              placeholder="ex. 2024-2025"
            />
          </label>

          {loading && <p className="mono">Lecture du PDF…</p>}

          {!loading && numPages > 1 && (
            <div className="field block">
              <span>Pages à transcrire ({numPages} au total)</span>
              <div className="range">
                <input
                  type="number"
                  min={1}
                  max={numPages}
                  value={pageFrom}
                  onChange={(e) =>
                    setPageFrom(
                      Math.max(1, Math.min(numPages, parseInt(e.target.value) || 1))
                    )
                  }
                />
                <span className="range-sep">à</span>
                <input
                  type="number"
                  min={pageFrom}
                  max={numPages}
                  value={pageTo}
                  onChange={(e) =>
                    setPageTo(
                      Math.max(pageFrom, Math.min(numPages, parseInt(e.target.value) || numPages))
                    )
                  }
                />
                <span className="range-info">
                  {pageTo - pageFrom + 1} page{pageTo - pageFrom > 0 ? "s" : ""}
                </span>
              </div>
            </div>
          )}

          {error && <p className="error">{error}</p>}
        </div>

        <footer className="modal-foot">
          <button className="ghost" onClick={onCancel}>
            Annuler
          </button>
          <button className="primary" onClick={submit} disabled={loading}>
            Lancer la transcription
          </button>
        </footer>
      </div>
    </div>
  );
}
