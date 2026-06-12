"use client";

import { useMemo, useRef, useState } from "react";
import { TYPE_LABEL } from "../lib/db";

const FILTER_TYPES = ["all", "cours", "td", "examen"];
const TYPE_ORDER = { cours: 0, td: 1, examen: 2 };
const normalize = (t) => (t === "sujet" ? "examen" : t);

export default function Sidebar({
  baseItems,
  gbakiManifest,
  currentItemId,
  selectedIds, // string[] préfixés "base:" ou "gbaki:"
  onToggleSelect,
  onOpenBase,
  onEditBase,
  onDeleteBase,
  onReocrBase,
  onOpenGbaki,
  onExportBase,
  onImportBase,
  status,
  busy,
}) {
  const importInputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [gbakiOpen, setGbakiOpen] = useState(false);

  // Recherche : titre + matière + thème + contenu Markdown (full-text).
  const matches = (it) => {
    const t = normalize(it.type);
    if (typeFilter !== "all" && t !== typeFilter) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    if ((it.titre || "").toLowerCase().includes(q)) return true;
    if ((it.matiere || "").toLowerCase().includes(q)) return true;
    if ((it.theme || "").toLowerCase().includes(q)) return true;
    // Full-text uniquement à partir de 3 caractères pour limiter le bruit.
    if (q.length >= 3 && (it.markdown || "").toLowerCase().includes(q)) return true;
    return false;
  };

  const filteredBase = (baseItems || []).filter(matches);
  const baseByMatiere = useMemo(() => {
    const map = new Map();
    for (const it of filteredBase) {
      const m = it.matiere || "Sans matière";
      if (!map.has(m)) map.set(m, []);
      map.get(m).push(it);
    }
    for (const arr of map.values()) {
      arr.sort(
        (a, b) =>
          (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9) ||
          (a.titre || "").localeCompare(b.titre || "")
      );
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [filteredBase]);

  const gbakiRefsInBase = useMemo(
    () =>
      new Set(
        (baseItems || []).filter((it) => it.gbakiRef).map((it) => it.gbakiRef)
      ),
    [baseItems]
  );
  const filteredGbaki = (gbakiManifest || [])
    .filter((it) => !gbakiRefsInBase.has(it.id))
    .filter((it) => matches(it));
  const gbakiByMatiere = useMemo(() => {
    const map = new Map();
    for (const it of filteredGbaki) {
      const m = it.matiere || "Divers";
      if (!map.has(m)) map.set(m, []);
      map.get(m).push(it);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [filteredGbaki]);

  return (
    <aside className="sb">
      <div className="sb-head">
        <h2 className="sb-title">Ma matière</h2>
        <span className="sb-count">
          {(baseItems || []).length} item{(baseItems || []).length > 1 ? "s" : ""}
        </span>
      </div>

      <input
        className="sb-search"
        type="search"
        placeholder="Rechercher (titre, matière, thème)…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="sb-chips">
        {FILTER_TYPES.map((t) => (
          <button
            key={t}
            className={`chip ${typeFilter === t ? "on" : ""}`}
            onClick={() => setTypeFilter(t)}
          >
            {t === "all" ? "Tout" : TYPE_LABEL[t]}
          </button>
        ))}
      </div>

      {/* ============ Ma base ============ */}
      <section className="sb-block">
        <h3 className="sb-block-title">Ma base</h3>

        {baseByMatiere.length === 0 && (
          <p className="mono sb-empty">
            {(baseItems || []).length === 0
              ? "Vide. Dépose un PDF à droite ou importe depuis la bibliothèque ci-dessous."
              : "Aucun résultat pour ce filtre."}
          </p>
        )}

        {baseByMatiere.map(([matiere, items]) => (
          <div key={matiere} className="sb-group">
            <p className="sb-matiere">{matiere}</p>
            {items.map((it) => {
              const sid = `base:${it.id}`;
              const selectable = normalize(it.type) !== "cours" ? true : true; // cours sélectionnable aussi pour Plan
              return (
                <BaseRow
                  key={it.id}
                  item={it}
                  isCurrent={it.id === currentItemId}
                  selected={(selectedIds || []).includes(sid)}
                  selectable={selectable}
                  onToggleSelect={() => onToggleSelect(sid)}
                  onOpen={() => onOpenBase(it)}
                  onEdit={() => onEditBase(it)}
                  onDelete={() => onDeleteBase(it)}
                  onReocr={it.gbakiRef ? () => onReocrBase(it) : null}
                  disabled={busy}
                />
              );
            })}
          </div>
        ))}
      </section>

      {/* ============ Gbaki ============ */}
      {gbakiManifest && gbakiManifest.length > 0 && (
        <section className="sb-block">
          <button
            className="sb-block-toggle"
            onClick={() => setGbakiOpen((o) => !o)}
            aria-expanded={gbakiOpen}
          >
            <h3>Bibliothèque (Gbaki)</h3>
            <span className="sb-count">{filteredGbaki.length}</span>
            <span className="sb-caret">{gbakiOpen ? "▾" : "▸"}</span>
          </button>

          {gbakiOpen && (
            <>
              {filteredGbaki.length === 0 && (
                <p className="mono sb-empty">
                  Tous les items pertinents sont déjà dans ta base.
                </p>
              )}
              {gbakiByMatiere.map(([matiere, items]) => (
                <div key={matiere} className="sb-group">
                  <p className="sb-matiere">{matiere}</p>
                  {items.map((it) => {
                    const sid = `gbaki:${it.id}`;
                    return (
                      <GbakiRow
                        key={it.id}
                        item={{ ...it, type: normalize(it.type) }}
                        selected={(selectedIds || []).includes(sid)}
                        onToggleSelect={() => onToggleSelect(sid)}
                        onOpen={() => onOpenGbaki(it)}
                        disabled={busy}
                      />
                    );
                  })}
                </div>
              ))}
            </>
          )}
        </section>
      )}

      {status && <p className="mono sb-status">{status}</p>}

      {/* ============ Résultat du tool ============ */}
      {/* ============ Footer : export / import ============ */}
      {onExportBase && onImportBase && (
        <div className="sb-base-actions">
          <button
            className="ghost sm"
            onClick={onExportBase}
            disabled={busy || (baseItems || []).length === 0}
            title="Télécharger toute ta base en .zip"
          >
            ⬇ Exporter ma base
          </button>
          <button
            className="ghost sm"
            onClick={() => importInputRef.current?.click()}
            disabled={busy}
            title="Importer un .zip Corro AI"
          >
            ⬆ Importer
          </button>
          <input
            ref={importInputRef}
            type="file"
            accept=".zip,application/zip,application/x-zip-compressed"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onImportBase(f);
              e.target.value = "";
            }}
          />
        </div>
      )}

    </aside>
  );
}

function BaseRow({
  item,
  isCurrent,
  selected,
  selectable,
  onToggleSelect,
  onOpen,
  onEdit,
  onDelete,
  onReocr,
  disabled,
}) {
  return (
    <div className={`sb-row ${isCurrent ? "current" : ""} ${selected ? "selected" : ""}`}>
      <input
        type="checkbox"
        className="sb-pick"
        checked={selected}
        disabled={!selectable || disabled}
        onChange={onToggleSelect}
        title="Sélectionner pour les outils d'étude"
        aria-label="Sélectionner"
      />
      <span className={`gb-type t-${item.type}`}>{TYPE_LABEL[item.type]}</span>
      <button
        className="sb-titre link"
        onClick={onOpen}
        disabled={disabled}
        title={item.titre}
      >
        {item.titre}
        {item.theme && <em className="sb-theme">· {item.theme}</em>}
      </button>
      {item.annee && <span className="sb-annee">{item.annee}</span>}
      <div className="sb-icons">
        {onReocr && (
          <button
            className="sb-icon"
            onClick={onReocr}
            disabled={disabled}
            title="Re-OCRiser depuis le PDF source"
            aria-label="Re-OCRiser"
          >
            ↺
          </button>
        )}
        <button
          className="sb-icon"
          onClick={onEdit}
          disabled={disabled}
          title="Modifier"
          aria-label="Modifier"
        >
          ✎
        </button>
        <button
          className="sb-icon danger"
          onClick={onDelete}
          disabled={disabled}
          title="Supprimer"
          aria-label="Supprimer"
        >
          🗑
        </button>
      </div>
    </div>
  );
}

function GbakiRow({ item, selected, onToggleSelect, onOpen, disabled }) {
  const selectable = item.type !== "cours";
  return (
    <div className={`sb-row gbaki ${selected ? "selected" : ""}`}>
      <input
        type="checkbox"
        className="sb-pick"
        checked={selected}
        disabled={!selectable || disabled}
        title={
          selectable
            ? "Cocher pour analyse (auto-import)"
            : "Non pertinent pour l'analyse"
        }
        onChange={onToggleSelect}
      />
      <span className={`gb-type t-${item.type}`}>{TYPE_LABEL[item.type]}</span>
      <span className="sb-titre" title={item.titre}>
        {item.titre}
      </span>
      {item.annee && <span className="sb-annee">{item.annee}</span>}
      <button className="ghost sm" onClick={onOpen} disabled={disabled}>
        Importer
      </button>
    </div>
  );
}
