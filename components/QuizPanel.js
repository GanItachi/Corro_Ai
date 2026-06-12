"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

const TYPE_LABEL = {
  definition: "Définition",
  theoreme: "Théorème",
  calcul: "Calcul",
  application: "Application",
  concept: "Concept",
};

const VERDICT = {
  correct: { label: "✓ Correct", className: "q-correct" },
  partial: { label: "△ Partiellement", className: "q-partial" },
  wrong: { label: "✗ À revoir", className: "q-wrong" },
};

const mdProps = {
  remarkPlugins: [remarkMath, remarkGfm],
  rehypePlugins: [rehypeKatex],
};

export default function QuizPanel({
  quiz,
  onSubmit,
  onNext,
  onRestart,
  onExit,
  onExport,
}) {
  const [answer, setAnswer] = useState("");

  if (!quiz) return null;
  const { questions, currentIdx, total, status, matiere } = quiz;
  const currentQ = questions[currentIdx];
  const loading = status === "loading";
  const evaluating = status === "evaluating";

  function handleSubmit() {
    const trimmed = answer.trim();
    if (!trimmed || status !== "asking") return;
    onSubmit(trimmed);
    setAnswer("");
  }

  function handleKey(e) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSubmit();
    }
  }

  if (status === "done") {
    const correct = questions.filter((q) => q.kind === "correct").length;
    const partial = questions.filter((q) => q.kind === "partial").length;
    const wrong = questions.filter((q) => q.kind === "wrong").length;
    const totalScore = questions.reduce((s, q) => s + (q.score || 0), 0);
    const weak = questions
      .map((q, i) => ({ ...q, idx: i + 1 }))
      .filter((q) => q.kind && q.kind !== "correct");

    return (
      <section className="quiz">
        <header className="quiz-head">
          <h2 className="quiz-title">Quiz terminé · {matiere}</h2>
        </header>

        <div className="quiz-final">
          <div className="quiz-score">
            <span className="quiz-score-num">{totalScore.toFixed(1)}</span>
            <span className="quiz-score-tot">/ {total}</span>
          </div>
          <div className="quiz-score-detail">
            <span className="q-correct chip-mini">{correct} correctes</span>
            <span className="q-partial chip-mini">{partial} partielles</span>
            <span className="q-wrong chip-mini">{wrong} fausses</span>
          </div>
        </div>

        {weak.length > 0 && (
          <div className="quiz-weak">
            <h3>À retravailler</h3>
            <ol>
              {weak.map((q) => (
                <li key={q.idx} className={VERDICT[q.kind]?.className || ""}>
                  <p className="weak-q">
                    <span className="weak-i">Q{q.idx} ·</span> {q.question}
                  </p>
                  {q.ideal && (
                    <p className="weak-ideal">
                      <span>Réponse modèle —</span>{" "}
                      <span className="weak-ideal-md">
                        <ReactMarkdown {...mdProps}>{q.ideal}</ReactMarkdown>
                      </span>
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="btnrow">
          <button className="primary" onClick={onRestart}>
            Refaire un quiz
          </button>
          <button className="ghost" onClick={onExport}>
            Exporter un quiz plus poussé (prompt)
          </button>
          <button className="ghost" onClick={onExit}>
            Fermer
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz">
      <header className="quiz-head">
        <div>
          <h2 className="quiz-title">Quiz · {matiere}</h2>
          <p className="mono">
            Question {currentIdx + 1} / {total}
          </p>
        </div>
        <div className="quiz-progress" aria-hidden>
          <div className="bar">
            <div
              className="fill"
              style={{ width: `${((currentIdx + (status === "feedback" ? 1 : 0)) / total) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {loading && <p className="mono quiz-wait">On prépare la question…</p>}

      {!loading && currentQ && (
        <>
          <div className="quiz-q">
            {currentQ.type && (
              <p className="quiz-q-type">{TYPE_LABEL[currentQ.type] || currentQ.type}</p>
            )}
            <div className="quiz-q-text">
              <ReactMarkdown {...mdProps}>{currentQ.question}</ReactMarkdown>
            </div>
          </div>

          {status === "asking" && (
            <>
              <label className="field block">
                <span>Ta réponse (LaTeX accepté entre $…$)</span>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyDown={handleKey}
                  rows={5}
                  placeholder="Réponds librement. Ctrl+Entrée pour valider."
                  autoFocus
                />
              </label>
              <div className="btnrow">
                <button
                  className="primary"
                  disabled={!answer.trim()}
                  onClick={handleSubmit}
                >
                  Valider (Ctrl+Entrée)
                </button>
                <button className="ghost" onClick={onExit}>
                  Abandonner
                </button>
              </div>
            </>
          )}

          {evaluating && <p className="mono quiz-wait">On corrige ta réponse…</p>}

          {status === "feedback" && currentQ.kind && (
            <>
              {currentQ.userAnswer && (
                <div className="quiz-answer">
                  <p className="quiz-answer-label">Ta réponse :</p>
                  <div className="quiz-answer-md">
                    <ReactMarkdown {...mdProps}>{currentQ.userAnswer}</ReactMarkdown>
                  </div>
                </div>
              )}
              <div className={`quiz-feedback ${VERDICT[currentQ.kind]?.className || ""}`}>
                <p className="quiz-verdict">
                  {VERDICT[currentQ.kind]?.label || currentQ.kind}
                  {typeof currentQ.score === "number" && (
                    <span className="quiz-pts">+{currentQ.score.toFixed(2)} pt</span>
                  )}
                </p>
                <div className="quiz-fb">
                  <ReactMarkdown {...mdProps}>{currentQ.feedback || ""}</ReactMarkdown>
                </div>
                {currentQ.ideal && (
                  <div className="quiz-ideal">
                    <p className="quiz-ideal-label">Réponse modèle</p>
                    <div className="quiz-ideal-md">
                      <ReactMarkdown {...mdProps}>{currentQ.ideal}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
              <div className="btnrow">
                <button className="primary" onClick={onNext}>
                  {currentIdx + 1 >= total ? "Voir le score" : "Question suivante"}
                </button>
                <button className="ghost" onClick={onExit}>
                  Abandonner
                </button>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}
