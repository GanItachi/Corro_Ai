"use client";

import { useMemo } from "react";
import { buildCorrectionPrompt } from "../lib/prompts";
import { estimateTokens, tokenStatus } from "../lib/tokens";

export default function CorrectionPanel({
  markdown,
  subject,
  setSubject,
  attempt,
  setAttempt,
  onCopy,
  onDownload,
  copiedTag,
}) {
  const prompt = useMemo(
    () => buildCorrectionPrompt(markdown, { subject, attempt }),
    [markdown, subject, attempt]
  );
  const tokens = estimateTokens(prompt);
  const tok = tokenStatus(tokens);
  const fmt = (n) => n.toLocaleString("fr-FR");

  return (
    <section className="cor">
      <header className="cor-head">
        <h2>Demande un corrigé</h2>
        <p className="sub">
          Le prompt ci-dessous est prêt à coller dans DeepSeek (DeepThink, R1) ou
          Claude — gratuits via leur site et plus rigoureux sur les calculs que les
          API gratuites.
        </p>
      </header>

      <div className="fields">
        <label className="field">
          <span>Matière (précise le rôle de l&apos;expert)</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
      </div>

      <label className="field block">
        <span>Ta tentative (optionnel — sera évaluée avant le corrigé)</span>
        <textarea
          value={attempt}
          onChange={(e) => setAttempt(e.target.value)}
          rows={3}
          placeholder="Colle ton brouillon de solution ici…"
        />
      </label>

      <textarea className="promptbox" value={prompt} readOnly rows={8} />

      <div className="cor-foot">
        <span className={`tok tok-${tok.kind}`}>
          ≈ {fmt(tokens)} tokens · {tok.label}
        </span>
        <div className="btnrow">
          <button className="ghost" onClick={() => onCopy(prompt, "corr")}>
            {copiedTag === "corr" ? "Copié ✓" : "Copier le prompt"}
          </button>
          <button
            className="ghost"
            onClick={() => onDownload("prompt-correction.txt", prompt)}
          >
            Télécharger (.txt)
          </button>
          <a
            className="btn ghost"
            href="https://chat.deepseek.com"
            target="_blank"
            rel="noreferrer"
          >
            DeepSeek ↗
          </a>
          <a
            className="btn ghost"
            href="https://claude.ai/new"
            target="_blank"
            rel="noreferrer"
          >
            Claude ↗
          </a>
        </div>
      </div>

      <p className="mono cor-tip">
        Astuce : active DeepThink (R1) dans DeepSeek pour les calculs lourds. Prompt
        trop long pour le collage ? Télécharge le .txt et joins-le comme fichier.
      </p>
    </section>
  );
}
