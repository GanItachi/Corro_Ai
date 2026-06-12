# Corro AI — atelier de prép d'examen

Pivot du Copia "OCR + prompt de correction" vers un workbench complet de prép
d'exam : cours + TDs + examens dans une base perso, outils d'étude (correction,
analyse de prof, ranking des TDs, plan de révision, quiz). Hébergement gratuit
sur Vercel, anonyme, sans compte.

## Architecture

```
Navigateur                          Vercel (Hobby, gratuit)        APIs gratuites
──────────                          ───────────────────────        ──────────────
PDF ──pdf.js──> images JPEG  ──>    /api/ocr  ────────────────>    Gemini Flash
  (par lots de 2, dans le nav.)     (chaîne + garde-fous abus)     → Groq → OpenRouter

Base perso (IndexedDB)        ←──   transcriptions, sourceImages,
  items: cours / td / examen        métadonnées (matière, thème…)

Outils d'étude            ──>       prompt assemblé localement ──> Tu colles dans
  (correction, prof, TDs,           (lib/prompts.js)                DeepSeek / Claude
   plan, quiz)            ──>       quiz interactif intégré    ──> Gemini Flash
                                    via /api/quiz (Phase 4)
```

**Contraintes Vercel Hobby qui dictent l'archi** : 4,5 Mo max par requête
(donc PDF rendu côté navigateur) ; 60 s max par fonction (donc lots de 2
pages, jamais le doc entier).

**Stockage** : IndexedDB par navigateur. Anonyme, gratuit, scale sans coût
serveur, ~100s de Mo dispos. Pas d'auth, pas de DB cloud. Pour la portabilité
entre machines : export/import .zip.

## Flow utilisateur

1. **Ajouter au corpus** — drag-and-drop d'un PDF, ou clic sur un item du Gbaki
   partagé. L'app demande : matière, type (cours/TD/examen), plage de pages.
   OCR puis sauvegarde dans la base perso.
2. **Réviser une matière** — sidebar liste cours + TDs + examens. Tu choisis.
3. **Outils d'étude** par matière :
   - **Corriger un sujet** — prompt prêt à coller dans DeepSeek/Claude, contexte
     enrichi des cours et TDs liés.
   - **Analyser le prof** — sur les examens d'une matière.
   - **Ranker les TDs** — quels TDs ont le plus de matière en commun avec les
     examens récents (priorisation des révisions).
   - **Plan de révision** — emploi du temps avant date X.
   - **Quiz du cours** — interactif (Gemini Flash) ou exportable en prompt
     vers une IA frontière pour des séances plus longues.

## Déploiement Vercel (≈ 10 minutes)

1. **Clés gratuites** (sans CB) :
   - Gemini (obligatoire) : https://aistudio.google.com/apikey
   - Optionnels : Groq (https://console.groq.com/keys) · OpenRouter (https://openrouter.ai/keys)
2. Push le repo sur GitHub.
3. Sur https://vercel.com : Add New → Project → Import.
4. Settings → Environment Variables : ajoute `GEMINI_API_KEY` au minimum,
   `ALLOWED_ORIGINS` avec ton domaine prod (sinon l'API OCR reste ouverte).
5. Redéploie.

En local : `npm install` puis `npm run dev` avec un `.env.local`.

## Enrichir le Gbaki partagé

Voir `public/gbaki/A_LIRE.txt`. PDFs rangés par matière + entrée dans
`public/gbaki/index.json`, puis `git push`. Chaque utilisateur l'importera
dans sa base perso au 1er ouvert.

## Limites

- **Quotas gratuits Gemini Flash** ≈ 20 pages/min, plusieurs centaines à
  ~1 500 pages/jour. Repli auto sur Groq/OpenRouter si les clés sont fournies.
- **Confidentialité** : sur les paliers gratuits, les données peuvent servir
  à l'entraînement. Pas de documents sensibles.
- **Vercel Hobby** : usage personnel et non commercial.
- **Base perso** : par navigateur. Vider les données du site = base perdue.
  Export/import à venir.

## Personnalisation

- Prompts : `lib/prompts.js`.
- Modèles OCR via variables d'env (`GEMINI_OCR_MODEL`, etc.).
- Schéma IndexedDB : `lib/db.js`.
