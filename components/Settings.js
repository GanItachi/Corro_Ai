"use client";

import { useEffect, useState } from "react";
import { PROVIDERS, getUserKeys, setUserKey, clearUserKey } from "../lib/keys";
import { testProviderKey } from "../lib/ai";

export default function Settings({ focusProvider, onClose, onChange }) {
  const [keys, setKeys] = useState({ gemini: "", groq: "", openrouter: "" });
  const [editing, setEditing] = useState({}); // provider -> draft string
  const [reveal, setReveal] = useState({}); // provider -> bool
  const [test, setTest] = useState({}); // provider -> {state, message}
  const [helpOpen, setHelpOpen] = useState(focusProvider || null);

  useEffect(() => {
    (async () => {
      const k = await getUserKeys();
      setKeys(k);
      setEditing(k);
    })();
  }, []);

  async function save(provider) {
    const value = (editing[provider] || "").trim();
    await setUserKey(provider, value);
    setKeys((k) => ({ ...k, [provider]: value }));
    setTest((t) => ({ ...t, [provider]: null }));
    onChange?.();
  }

  async function clearKey(provider) {
    if (!window.confirm(`Effacer ta clé ${provider} ?`)) return;
    await clearUserKey(provider);
    setKeys((k) => ({ ...k, [provider]: "" }));
    setEditing((e) => ({ ...e, [provider]: "" }));
    setTest((t) => ({ ...t, [provider]: null }));
    onChange?.();
  }

  async function runTest(provider) {
    const key = (editing[provider] || "").trim();
    if (!key) {
      setTest((t) => ({ ...t, [provider]: { state: "fail", message: "Champ vide." } }));
      return;
    }
    setTest((t) => ({ ...t, [provider]: { state: "loading" } }));
    const res = await testProviderKey(provider, key);
    if (res.ok) {
      setTest((t) => ({ ...t, [provider]: { state: "ok", message: "Clé valide ✓" } }));
    } else {
      setTest((t) => ({
        ...t,
        [provider]: { state: "fail", message: res.error || "Échec du test." },
      }));
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal modal-wide"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className="modal-head">
          <h3>Mes clés API</h3>
          <button className="close" onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </header>

        <div className="modal-body settings-body">
          <p className="settings-intro">
            Configure tes propres clés pour avoir <strong>ton quota perso</strong>{" "}
            au lieu du quota partagé. Toutes ces clés sont gratuites, sans carte
            bancaire. Elles sont stockées <strong>uniquement dans ton navigateur</strong>{" "}
            (IndexedDB) et envoyées directement aux providers via les routes Corro AI —
            jamais loggées.
          </p>

          {PROVIDERS.map((p) => {
            const hasKey = !!keys[p.key];
            const isHelpOpen = helpOpen === p.key;
            const t = test[p.key];
            return (
              <section key={p.key} className={`settings-card ${hasKey ? "ok" : ""}`}>
                <header className="settings-card-head">
                  <div>
                    <h4>
                      {p.label}
                      {p.required && <span className="settings-req">requise</span>}
                    </h4>
                    <p className="settings-role">{p.role}</p>
                  </div>
                  <span className={`settings-badge ${hasKey ? "badge-ok" : "badge-empty"}`}>
                    {hasKey ? "Configurée" : "Non configurée"}
                  </span>
                </header>

                <div className="settings-row">
                  <input
                    type={reveal[p.key] ? "text" : "password"}
                    value={editing[p.key] || ""}
                    onChange={(e) =>
                      setEditing((s) => ({ ...s, [p.key]: e.target.value }))
                    }
                    placeholder={p.placeholder}
                    className="settings-input"
                    spellCheck={false}
                    autoComplete="off"
                  />
                  <button
                    className="ghost sm"
                    onClick={() =>
                      setReveal((r) => ({ ...r, [p.key]: !r[p.key] }))
                    }
                    title={reveal[p.key] ? "Cacher" : "Afficher"}
                  >
                    {reveal[p.key] ? "👁" : "👁‍🗨"}
                  </button>
                </div>

                <div className="settings-actions">
                  <button
                    className="ghost sm"
                    onClick={() => runTest(p.key)}
                    disabled={t?.state === "loading" || !(editing[p.key] || "").trim()}
                  >
                    {t?.state === "loading" ? "Test en cours…" : "Tester"}
                  </button>
                  <button
                    className="primary sm"
                    onClick={() => save(p.key)}
                    disabled={
                      (editing[p.key] || "").trim() === keys[p.key] ||
                      !(editing[p.key] || "").trim()
                    }
                  >
                    Enregistrer
                  </button>
                  {hasKey && (
                    <button className="warn sm" onClick={() => clearKey(p.key)}>
                      Effacer
                    </button>
                  )}
                  <button
                    className="link-btn"
                    onClick={() => setHelpOpen(isHelpOpen ? null : p.key)}
                  >
                    {isHelpOpen ? "Masquer l'aide" : "Comment obtenir une clé ?"}
                  </button>
                </div>

                {t && t.state !== "loading" && (
                  <p className={`settings-test settings-test-${t.state}`}>
                    {t.message}
                  </p>
                )}

                {isHelpOpen && (
                  <div className="settings-help">
                    {p.key === "gemini" && (
                      <ol>
                        <li>
                          Ouvre{" "}
                          <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">
                            aistudio.google.com/apikey
                          </a>{" "}
                          dans un nouvel onglet.
                        </li>
                        <li>Connecte-toi avec ton compte Google (ou crée-en un, gratuit).</li>
                        <li>Clique <strong>« Create API key »</strong>.</li>
                        <li>
                          Choisis un projet existant ou laisse Google en créer un —
                          accepte les conditions.
                        </li>
                        <li>Copie la clé qui commence par <code>AIzaSy…</code>.</li>
                        <li>Colle-la ci-dessus puis clique « Tester » puis « Enregistrer ».</li>
                      </ol>
                    )}
                    {p.key === "groq" && (
                      <ol>
                        <li>
                          Va sur{" "}
                          <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer">
                            console.groq.com/keys
                          </a>
                          .
                        </li>
                        <li>Inscris-toi avec GitHub ou Google (30 secondes).</li>
                        <li>Clique <strong>« Create API Key »</strong>.</li>
                        <li>Copie la clé <code>gsk_…</code> et colle-la ici.</li>
                      </ol>
                    )}
                    {p.key === "openrouter" && (
                      <ol>
                        <li>
                          Va sur{" "}
                          <a href="https://openrouter.ai/keys" target="_blank" rel="noreferrer">
                            openrouter.ai/keys
                          </a>
                          .
                        </li>
                        <li>Inscris-toi.</li>
                        <li>Clique <strong>« Create Key »</strong>.</li>
                        <li>Copie la clé <code>sk-or-…</code> et colle-la ici.</li>
                        <li>
                          Note : OpenRouter te demande de provisionner un petit
                          montant si tu veux des modèles non-`:free`, mais les
                          modèles `:free` que Corro utilise pour le repli OCR ne
                          coûtent rien.
                        </li>
                      </ol>
                    )}
                    <p className="settings-note">{p.note}</p>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <footer className="modal-foot">
          <button className="primary" onClick={onClose}>
            Terminé
          </button>
        </footer>
      </div>
    </div>
  );
}
