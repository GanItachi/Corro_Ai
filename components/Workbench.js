"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { useRef } from "react";
import { estimateTokens, tokenStatus } from "../lib/tokens";

export default function Workbench({ markdown, setMarkdown, sourceImages, currentItem, onDownload, onImportMd }) {
  const [view, setView] = useState("split"); // split | edit | preview | source
  const importRef = useRef(null);
  const tokens = estimateTokens(markdown);
  const tok = tokenStatus(tokens);
  const hasSource = sourceImages?.length > 0;

  const fmt = (n) => n.toLocaleString("fr-FR");

  async function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    onImportMd?.(text);
    e.target.value = "";
  }

  return (
    <section className="wb">
      <header className="wb-head">
        <div>
          <h2 className="wb-title">
            {currentItem?.titre || "Transcription"}
          </h2>
          {currentItem && (
            <p className="wb-meta">
              <span className={`gb-type t-${currentItem.type}`}>
                {currentItem.type === "cours" ? "Cours" : currentItem.type === "td" ? "TD" : "Examen"}
              </span>
              <span>· {currentItem.matiere}</span>
              {currentItem.annee && <span>· {currentItem.annee}</span>}
              {currentItem.theme && <span>· {currentItem.theme}</span>}
            </p>
          )}
          <p className="wb-sub">
            Relis surtout les formules. Le rendu LaTeX à droite t&apos;aide à les repérer
            d&apos;un coup d&apos;œil.
          </p>
        </div>
        <div className="wb-controls">
          <button className="ghost sm" onClick={() => importRef.current?.click()}>
            Importer un .md
          </button>
          <input
            ref={importRef}
            type="file"
            accept=".md,text/markdown,text/plain"
            hidden
            onChange={handleImport}
          />
          <button className="ghost sm" onClick={() => onDownload("cours.md", markdown)}>
            Télécharger le .md
          </button>
        </div>
      </header>

      <div className="wb-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={view === "edit"}
          className={`tab ${view === "edit" ? "on" : ""}`}
          onClick={() => setView("edit")}
        >
          Éditer
        </button>
        <button
          role="tab"
          aria-selected={view === "split"}
          className={`tab ${view === "split" ? "on" : ""}`}
          onClick={() => setView("split")}
        >
          Côte à côte
        </button>
        <button
          role="tab"
          aria-selected={view === "preview"}
          className={`tab ${view === "preview" ? "on" : ""}`}
          onClick={() => setView("preview")}
        >
          Rendu
        </button>
        {hasSource && (
          <button
            role="tab"
            aria-selected={view === "source"}
            className={`tab ${view === "source" ? "on" : ""}`}
            onClick={() => setView("source")}
          >
            Scan source
          </button>
        )}
        <span className={`tok tok-${tok.kind}`}>
          ≈ {fmt(tokens)} tokens · {tok.label}
        </span>
      </div>

      <div className={`wb-body view-${view}`}>
        {(view === "edit" || view === "split") && (
          <textarea
            className="mdbox"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            spellCheck={false}
            placeholder="La transcription Markdown apparaîtra ici…"
          />
        )}
        {(view === "preview" || view === "split") && (
          <div className="mdview">
            {markdown.trim() ? (
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
              >
                {markdown}
              </ReactMarkdown>
            ) : (
              <p className="mono mdview-empty">Rien à afficher pour l&apos;instant.</p>
            )}
          </div>
        )}
        {view === "source" && hasSource && (
          <div className="src-images">
            {sourceImages.map((src, i) => (
              <figure key={i} className="src-page">
                <img src={src} alt={`Page ${i + 1} du scan original`} loading="lazy" />
                <figcaption>Page {i + 1}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
