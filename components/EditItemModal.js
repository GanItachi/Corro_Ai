"use client";

import { useState } from "react";
import { TYPES, TYPE_LABEL } from "../lib/db";

export default function EditItemModal({
  item,
  matiereSuggestions,
  onCancel,
  onSave,
  onDelete,
}) {
  const [titre, setTitre] = useState(item.titre || "");
  const [matiere, setMatiere] = useState(item.matiere || "");
  const [type, setType] = useState(item.type || "cours");
  const [annee, setAnnee] = useState(item.annee || "");
  const [theme, setTheme] = useState(item.theme || "");

  function save() {
    onSave({
      titre: titre.trim() || "Sans titre",
      matiere: matiere.trim() || "Sans matière",
      type,
      annee: annee.trim(),
      theme: theme.trim(),
    });
  }

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <header className="modal-head">
          <h3>Modifier le document</h3>
          <button className="close" onClick={onCancel} aria-label="Fermer">×</button>
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
              list="matiere-suggestions-edit"
              value={matiere}
              onChange={(e) => setMatiere(e.target.value)}
            />
            <datalist id="matiere-suggestions-edit">
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
                    name="type-edit"
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

          <label className="field block">
            <span>Thème (optionnel)</span>
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="ex. Suites numériques"
            />
          </label>
        </div>

        <footer className="modal-foot spread">
          <button className="warn" onClick={onDelete}>
            Supprimer
          </button>
          <div className="right">
            <button className="ghost" onClick={onCancel}>
              Annuler
            </button>
            <button className="primary" onClick={save}>
              Enregistrer
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
