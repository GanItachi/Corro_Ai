"use client";

export default function HelpModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal modal-wide"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className="modal-head">
          <h3>Comment ça marche ?</h3>
          <button className="close" onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </header>

        <div className="modal-body help-body">
          <ol className="help-steps">
            <li>
              <h4>1. Constitue ta base</h4>
              <p>
                Drag-and-drop d&apos;un PDF, prends une photo (bouton 📷), ou —
                plus efficace — <strong>dépose un dossier matière entier</strong>{" "}
                structuré <code>MatiereName/Cours/</code>{" "}
                <code>MatiereName/Tds/</code>{" "}
                <code>MatiereName/Devoir/</code>. Corro détecte la structure, te
                la confirme, puis transcrit tout en séquence (gratuit jusqu&apos;à
                ~1 500 pages/jour avec Gemini).
              </p>
            </li>
            <li>
              <h4>2. Browse ta base dans le sidebar</h4>
              <p>
                Recherche par titre/matière/thème <em>ou contenu Markdown</em>.
                Filtre par type (Cours / TD / Examen). Clique un item pour le
                charger dans l&apos;atelier (markdown + rendu LaTeX + scan source).
              </p>
            </li>
            <li>
              <h4>3. Coche des items pour activer les outils</h4>
              <p>
                Les cases à cocher dans le sidebar alimentent la sélection. Dès
                qu&apos;il y a 1 item coché, le panneau{" "}
                <strong>Outils d&apos;étude</strong> apparaît au centre avec 4
                actions :
              </p>
              <ul>
                <li>
                  <strong>Analyser le prof</strong> (≥ 2 examens) — profil et
                  notions récurrentes.
                </li>
                <li>
                  <strong>Ranker mes TDs</strong> (≥ 1 TD + ≥ 1 examen) —
                  priorité de révision.
                </li>
                <li>
                  <strong>Plan de révision</strong> — emploi du temps avec date
                  cible.
                </li>
                <li>
                  <strong>Quiz du cours</strong> (≥ 1 cours) — 8 questions
                  interactives évaluées en direct.
                </li>
              </ul>
            </li>
            <li>
              <h4>4. Coller dans une IA frontière</h4>
              <p>
                Les 3 outils non-quiz génèrent un{" "}
                <strong>prompt prêt à coller</strong> dans DeepSeek (active
                DeepThink R1) ou Claude. Boutons sous le prompt pour
                copier/télécharger/ouvrir directement.
              </p>
            </li>
            <li>
              <h4>5. Sauvegarde et nomadisme</h4>
              <p>
                Tout vit en <strong>IndexedDB</strong> dans ton navigateur (rien
                envoyé à un serveur Corro). Pour changer de machine ou faire un
                backup : bouton{" "}
                <strong>⬇ Exporter ma base</strong> en bas du sidebar (génère un
                <code>.zip</code>), et <strong>⬆ Importer</strong> de l&apos;autre
                côté.
              </p>
            </li>
          </ol>

          <div className="help-tips">
            <h4>Astuces</h4>
            <ul>
              <li>
                Sur le <strong>Dashboard</strong> (visible quand aucun doc n&apos;est
                ouvert), les boutons de chaque carte matière lancent les outils
                sur <em>toute la matière</em> en un clic.
              </li>
              <li>
                Active la <strong>2ᵉ passe</strong> de relecture pour les scans
                médiocres (double le quota mais corrige beaucoup d&apos;erreurs).
              </li>
              <li>
                Le bouton <strong>Annuler</strong> stoppe un OCR en cours sans
                perdre les pages déjà transcrites.
              </li>
              <li>
                Édite un item via ✎ — la matière et le thème détectés automatiquement
                peuvent toujours être corrigés à la main.
              </li>
            </ul>
          </div>
        </div>

        <footer className="modal-foot">
          <button className="primary" onClick={onClose}>
            J&apos;ai compris
          </button>
        </footer>
      </div>
    </div>
  );
}
