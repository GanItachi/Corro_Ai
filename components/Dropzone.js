"use client";

import { useRef, useState } from "react";

export default function Dropzone({
  busy,
  status,
  progress,
  verifyPass,
  autoVerifyDisabled,
  batchProgress,
  onFiles,
  onFolderOrZip,
  onCancel,
  onToggleVerify,
}) {
  const fileRef = useRef(null);
  const camRef = useRef(null);
  const folderRef = useRef(null);
  const zipRef = useRef(null);
  const [over, setOver] = useState(false);
  const [overKind, setOverKind] = useState("file"); // "file" | "batch"

  return (
    <div className="dz">
      <div
        className={`drop ${over ? "over" : ""} ${busy ? "busy" : ""}`}
        role="button"
        tabIndex={0}
        onClick={() => !busy && fileRef.current?.click()}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && !busy && fileRef.current?.click()
        }
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
          // On essaie de détecter si c'est un dossier (présence de directories dans items).
          const items = e.dataTransfer?.items;
          let folder = false;
          if (items) {
            for (const it of items) {
              const entry = it.webkitGetAsEntry?.();
              if (entry?.isDirectory) {
                folder = true;
                break;
              }
              if (it.kind === "file") {
                const f = it.getAsFile?.();
                if (f && /\.zip$/i.test(f.name)) {
                  folder = true;
                  break;
                }
              }
            }
          }
          setOverKind(folder ? "batch" : "file");
        }}
        onDragLeave={() => {
          setOver(false);
          setOverKind("file");
        }}
        onDrop={async (e) => {
          e.preventDefault();
          setOver(false);
          if (busy) return;
          // Détection : dossier (webkitEntry isDirectory) OU .zip → batch
          const dt = e.dataTransfer;
          let isBatch = false;
          if (dt.items?.length) {
            for (const it of dt.items) {
              const entry = it.webkitGetAsEntry?.();
              if (entry?.isDirectory) {
                isBatch = true;
                break;
              }
              if (it.kind === "file") {
                const f = it.getAsFile?.();
                if (f && /\.zip$/i.test(f.name)) {
                  isBatch = true;
                  break;
                }
              }
            }
          }
          if (isBatch && onFolderOrZip) {
            await onFolderOrZip({ dataTransfer: dt });
          } else {
            onFiles(dt.files);
          }
          setOverKind("file");
        }}
      >
        <div className="drop-art" aria-hidden="true">
          {!busy ? (
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 17V5M6 11l6-6 6 6" />
              <path d="M4 19h16" />
            </svg>
          ) : (
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="spin">
              <circle cx="12" cy="12" r="9" opacity="0.2" />
              <path d="M12 3a9 9 0 0 1 9 9" />
            </svg>
          )}
        </div>
        <p className="drop-big">
          {busy
            ? "Transcription en cours…"
            : overKind === "batch"
              ? "Lâche le dossier matière ici"
              : "Dépose ton scan ici"}
        </p>
        <p className="drop-small">
          {busy
            ? "patience, c'est en bonne voie"
            : overKind === "batch"
              ? "Corro va détecter la structure et te demander confirmation"
              : "PDF · JPG · PNG · WebP — ou clique. Tu peux aussi déposer un dossier ou un .zip."}
        </p>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="application/pdf,image/jpeg,image/png,image/webp"
        multiple
        hidden
        disabled={busy}
        onChange={(e) => onFiles(e.target.files)}
      />
      <input
        ref={camRef}
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        disabled={busy}
        onChange={(e) => onFiles(e.target.files)}
      />

      <div className="drop-actions">
        <button
          type="button"
          className="ghost cam"
          onClick={() => camRef.current?.click()}
          disabled={busy}
          title="Caméra arrière sur mobile, webcam sur desktop"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span>Photo</span>
        </button>
        <button
          type="button"
          className="ghost"
          onClick={() => folderRef.current?.click()}
          disabled={busy}
          title="Sélectionne un dossier matière entier (Cours/, Tds/, Devoir/)"
        >
          📁 <span>Dossier matière</span>
        </button>
        <button
          type="button"
          className="ghost"
          onClick={() => zipRef.current?.click()}
          disabled={busy}
          title="Importer un .zip structuré (mêmes sous-dossiers)"
        >
          🗜️ <span>.zip</span>
        </button>

        {busy && (
          <button type="button" className="warn" onClick={onCancel}>
            Annuler
          </button>
        )}
      </div>

      <input
        ref={folderRef}
        type="file"
        webkitdirectory=""
        directory=""
        multiple
        hidden
        disabled={busy}
        onChange={(e) => {
          if (e.target.files?.length && onFolderOrZip) {
            onFolderOrZip({ fileList: e.target.files });
          }
          e.target.value = "";
        }}
      />
      <input
        ref={zipRef}
        type="file"
        accept=".zip,application/zip,application/x-zip-compressed"
        hidden
        disabled={busy}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f && onFolderOrZip) onFolderOrZip({ zipFile: f });
          e.target.value = "";
        }}
      />

      <label className="check">
        <input
          type="checkbox"
          checked={verifyPass}
          disabled={busy || autoVerifyDisabled}
          onChange={(e) => onToggleVerify(e.target.checked)}
        />
        <span>
          Relecture des formules (2ᵉ passe). Deux fois plus lent, deux fois plus fiable
          sur les maths.
          {autoVerifyDisabled && (
            <em className="auto-off"> Désactivée auto — quota saturé.</em>
          )}
        </span>
      </label>

      {batchProgress && (
        <div className="batch-progress">
          <div className="batch-progress-head">
            <strong>Batch matière</strong>
            <span className="mono">
              {batchProgress.current} / {batchProgress.total}
              {batchProgress.ok > 0 && ` · ${batchProgress.ok} ok`}
              {batchProgress.failed > 0 && ` · ${batchProgress.failed} échec(s)`}
            </span>
          </div>
          <div className="bar">
            <div
              className="fill"
              style={{
                width: `${(batchProgress.current / Math.max(1, batchProgress.total)) * 100}%`,
              }}
            />
          </div>
          {batchProgress.currentTitle && (
            <p className="mono">→ {batchProgress.currentTitle}</p>
          )}
        </div>
      )}

      {(busy || status) && (
        <div className="status" aria-live="polite">
          <div className="bar">
            <div className="fill" style={{ width: `${progress * 100}%` }} />
          </div>
          <p className="mono">{status}</p>
        </div>
      )}
    </div>
  );
}
