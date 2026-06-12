"use client";

export default function WelcomeModal({ onConfigure, onLater }) {
  return (
    <div className="modal-backdrop">
      <div
        className="modal modal-wide welcome-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className="modal-head">
          <h3>Bienvenue dans Corro AI 👋</h3>
        </header>

        <div className="modal-body welcome-body">
          <p>
            Corro transforme tes cours, TDs et examens scannés en Markdown
            propre, te génère des prompts d&apos;analyse, et fait tourner des
            quiz interactifs. Tout ça <strong>gratuitement</strong>, en
            utilisant l&apos;API Gemini de Google AI Studio.
          </p>

          <p>
            Avant de commencer, choisis ton mode :
          </p>

          <div className="welcome-cards">
            <button className="welcome-card welcome-card-perso" onClick={onConfigure}>
              <div className="welcome-card-badge">Recommandé</div>
              <h4>🔑 Mode perso</h4>
              <p className="welcome-card-tag">5 min de setup, une fois pour toutes</p>
              <ul>
                <li>
                  <strong>Ton quota perso</strong> de ~1500 transcriptions/jour,
                  rien que pour toi
                </li>
                <li>
                  Tu n&apos;es <strong>jamais bloqué</strong> parce qu&apos;un
                  autre utilisateur a saturé l&apos;API
                </li>
                <li>100 % gratuit, sans carte bancaire</li>
                <li>Idéal si tu vas réellement utiliser l&apos;app</li>
              </ul>
              <span className="welcome-card-cta">Configurer ma clé →</span>
            </button>

            <button className="welcome-card welcome-card-shared" onClick={onLater}>
              <h4>🌐 Mode partagé</h4>
              <p className="welcome-card-tag">Démarrage immédiat, zéro setup</p>
              <ul>
                <li>
                  Tu utilises la clé partagée du déploiement (si l&apos;admin en
                  a configuré une)
                </li>
                <li>
                  Quota mutualisé entre <strong>tous les utilisateurs</strong> de
                  cette instance
                </li>
                <li>Suffit pour découvrir, peut saturer rapidement à l&apos;usage</li>
                <li>Tu peux passer en mode perso à tout moment</li>
              </ul>
              <span className="welcome-card-cta">Continuer en partagé →</span>
            </button>
          </div>

          <p className="welcome-foot mono">
            Que tu choisisses ou l&apos;autre, tes données (cours, TDs, examens)
            restent stockées <strong>uniquement dans ton navigateur</strong>{" "}
            (IndexedDB, anonyme, aucun compte). Aucun serveur Corro ne stocke
            tes documents.
          </p>
        </div>
      </div>
    </div>
  );
}
