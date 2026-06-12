"use client";

// Corro AI — atelier de prép d'examen.
// Base perso (IndexedDB) + Gbaki partagé. Auto-classify post-OCR.
// Outils d'étude : analyse de prof, ranker TDs, plan de révision.

import { useEffect, useMemo, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Dropzone from "../components/Dropzone";
import Workbench from "../components/Workbench";
import CorrectionPanel from "../components/CorrectionPanel";
import AddItemModal from "../components/AddItemModal";
import EditItemModal from "../components/EditItemModal";
import QuizPanel from "../components/QuizPanel";
import Dashboard from "../components/Dashboard";
import ToolsPanel from "../components/ToolsPanel";
import HelpModal from "../components/HelpModal";
import BatchImportModal from "../components/BatchImportModal";
import BatchSummaryModal from "../components/BatchSummaryModal";
import Settings from "../components/Settings";
import WelcomeModal from "../components/WelcomeModal";
import {
  getUserKeys,
  userKeyHeaders,
  isOnboardingDone,
  markOnboardingDone,
} from "../lib/keys";
import {
  buildProfAnalysisPrompt,
  buildTdsRankingPrompt,
  buildRevisionPlanPrompt,
  buildQuizExportPrompt,
} from "../lib/prompts";
import { exportBaseAsZip, importBaseFromZip, downloadBlob } from "../lib/export";
import {
  collectFromDataTransfer,
  collectFromFileList,
  collectFromZip,
  parseFolderStructure,
} from "../lib/batch";
import { renderPdf, renderImage, shrinkImage } from "../lib/pdf";
import { loadState, saveState } from "../lib/storage";
import {
  addItem,
  getItem,
  updateItem,
  deleteItem,
  listItems,
  findByGbakiRef,
} from "../lib/db";
import { classifyDocument, quizQuestion, quizEvaluate } from "../lib/ai";

const QUIZ_TOTAL = 8;

const BATCH_SIZE = 2;
const DELAY_MS = 4500;
const MAX_PAYLOAD = 3_000_000;
const OCR_CHAIN = ["gemini", "gemini-lite", "groq", "openrouter"];

const FRIENDLY_BATCH_LABELS = ["On déchiffre", "On transcrit", "On lit", "On note"];
const normalizeType = (t) => (t === "sujet" ? "examen" : t);

function sleep(ms, signal) {
  return new Promise((res, rej) => {
    if (signal?.aborted) return rej(new DOMException("Annulé", "AbortError"));
    const t = setTimeout(res, ms);
    signal?.addEventListener("abort", () => {
      clearTimeout(t);
      rej(new DOMException("Annulé", "AbortError"));
    });
  });
}

async function migrateLegacyCache(gbakiManifest) {
  if (typeof window === "undefined") return 0;
  const prefix = "copia:gbaki:";
  const keys = Object.keys(localStorage).filter((k) => k.startsWith(prefix));
  if (keys.length === 0) return 0;
  let n = 0;
  for (const k of keys) {
    const id = k.slice(prefix.length);
    try {
      const raw = localStorage.getItem(k);
      if (!raw) continue;
      const data = JSON.parse(raw);
      const exists = await findByGbakiRef(id);
      if (!exists && data?.markdown) {
        const m = gbakiManifest?.find((it) => it.id === id);
        await addItem({
          matiere: m?.matiere || "Sans matière",
          type: m?.type || "cours",
          titre: m?.titre || id,
          annee: m?.annee || "",
          markdown: data.markdown,
          sourceImages: data.sourceImages || [],
          source: "gbaki",
          gbakiRef: id,
          createdAt: data.ts || Date.now(),
        });
        n++;
      }
      localStorage.removeItem(k);
    } catch { /* on continue */ }
  }
  return n;
}

export default function Home() {
  // --- Persisté ---
  const [subject, setSubject] = useState(
    "mathématiques avancées, statistiques et économie"
  );
  const [attempt, setAttempt] = useState("");
  const [sel, setSel] = useState([]); // string[] préfixés "gbaki:" ou "base:"
  const [currentItemId, setCurrentItemId] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  // --- Workbench ---
  const [markdown, setMarkdown] = useState("");
  const [sourceImages, setSourceImages] = useState([]);

  // --- Transient ---
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const [verifyPass, setVerifyPass] = useState(true);
  const [autoVerifyDisabled, setAutoVerifyDisabled] = useState(false);

  // --- Gbaki + base ---
  const [gbaki, setGbaki] = useState(null);
  const [baseItems, setBaseItems] = useState([]);
  const [studyPrompt, setStudyPrompt] = useState("");
  const [studyToolLabel, setStudyToolLabel] = useState("");
  const [gbakiStatus, setGbakiStatus] = useState("");

  // --- Modales ---
  const [addModal, setAddModal] = useState(null);
  const [editModal, setEditModal] = useState(null);

  // --- Quiz interactif ---
  const [quiz, setQuiz] = useState(null);

  // --- Batch import + help ---
  const [batchModal, setBatchModal] = useState(null); // { matiere, items, counts, rootDetected }
  const [batchProgress, setBatchProgress] = useState(null);
  const [batchSummary, setBatchSummary] = useState(null); // { ok, failed, matiere, verifyPass }
  const [helpOpen, setHelpOpen] = useState(false);

  // Dernier item ouvert (pour "Reprendre" sur le dashboard). Persisté.
  const [lastOpenedItemId, setLastOpenedItemId] = useState(null);

  // Clés utilisateur (BYOK). Chargées au boot, rechargées après save dans Settings.
  const [userKeys, setUserKeysState] = useState({ gemini: "", groq: "", openrouter: "" });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsFocus, setSettingsFocus] = useState(null);
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [saturatedShared, setSaturatedShared] = useState(false);

  async function reloadKeys() {
    const k = await getUserKeys();
    setUserKeysState(k);
  }

  const [copied, setCopied] = useState("");

  const abortRef = useRef(null);
  const count429 = useRef(0);
  const lastErrorRef = useRef(""); // pour capter la raison d'échec dans processFiles

  const matiereSuggestions = useMemo(() => {
    const set = new Set();
    for (const it of baseItems) if (it.matiere) set.add(it.matiere);
    for (const it of gbaki || []) if (it.matiere) set.add(it.matiere);
    return [...set].sort();
  }, [baseItems, gbaki]);

  const currentItem = useMemo(
    () => baseItems.find((it) => it.id === currentItemId) || null,
    [baseItems, currentItemId]
  );

  // Hydratation au mount.
  useEffect(() => {
    (async () => {
      const s = loadState();
      if (typeof s.subject === "string" && s.subject) setSubject(s.subject);
      if (typeof s.attempt === "string") setAttempt(s.attempt);
      if (Array.isArray(s.sel)) {
        // Migration : ancien format = ids gbaki bruts. On préfixe en gbaki: .
        setSel(
          s.sel
            .filter((id) => typeof id === "string" && id)
            .map((id) => (id.includes(":") ? id : `gbaki:${id}`))
        );
      }
      if (typeof s.currentItemId === "string") {
        const it = await getItem(s.currentItemId);
        if (it) {
          setCurrentItemId(it.id);
          setMarkdown(it.markdown || "");
          setSourceImages(it.sourceImages || []);
        }
      }
      if (typeof s.lastOpenedItemId === "string") {
        setLastOpenedItemId(s.lastOpenedItemId);
      }
      await reloadKeys();
      const done = await isOnboardingDone();
      if (!done) setWelcomeOpen(true);
      setHydrated(true);
    })();
  }, []);

  // Manifeste Gbaki + migration + base.
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/gbaki/index.json");
        const d = r.ok ? await r.json() : { items: [] };
        const items = Array.isArray(d.items) ? d.items : [];
        setGbaki(items);

        const migrated = await migrateLegacyCache(items);
        if (migrated > 0) {
          console.log(`[corro] migré ${migrated} item(s) du vieux cache vers la base`);
        }
        setBaseItems(await listItems());
      } catch {
        setGbaki([]);
      }
    })();
  }, []);

  // Auto-save debouncé. Sauve dans l'item courant + état général.
  useEffect(() => {
    if (!hydrated || busy) return;
    const t = setTimeout(async () => {
      saveState({ subject, attempt, sel, currentItemId });
      if (currentItemId && markdown.trim()) {
        await updateItem(currentItemId, { markdown, sourceImages });
        setBaseItems(await listItems());
      }
    }, 800);
    return () => clearTimeout(t);
  }, [markdown, subject, attempt, sel, currentItemId, sourceImages, hydrated, busy]);

  function toggleSel(sid) {
    setSel((s) => (s.includes(sid) ? s.filter((x) => x !== sid) : [...s, sid]));
  }

  function clearSelection() {
    setSel([]);
  }

  function cancelOcr() {
    abortRef.current?.abort();
  }

  async function refreshBase() {
    setBaseItems(await listItems());
  }

  /* ============ Folder / zip drop (batch matière) ============ */
  async function handleFolderOrZip(source) {
    try {
      let entries = [];
      if (source.zipFile) {
        setGbakiStatus("Lecture du .zip…");
        entries = await collectFromZip(source.zipFile);
      } else if (source.fileList) {
        entries = collectFromFileList(source.fileList);
      } else if (source.dataTransfer) {
        entries = await collectFromDataTransfer(source.dataTransfer);
        // Si parmi les entries il y a un .zip seul, on l'extrait.
        if (entries.length === 1 && /\.zip$/i.test(entries[0].file?.name || "")) {
          setGbakiStatus("Lecture du .zip…");
          entries = await collectFromZip(entries[0].file);
        }
      }
      const parsed = parseFolderStructure(entries);
      if (!parsed || parsed.items.length === 0) {
        setGbakiStatus("Aucun PDF ou image trouvé dans ce dépôt.");
        return;
      }
      setGbakiStatus("");
      setBatchModal(parsed);
    } catch (e) {
      setGbakiStatus(`Erreur lecture : ${e.message || e}`);
    }
  }

  async function confirmBatch({ matiere, items, verifyPass: vp }) {
    setBatchModal(null);
    const controller = new AbortController();
    abortRef.current = controller;
    setVerifyPass(vp);
    setBatchProgress({
      current: 0,
      total: items.length,
      ok: 0,
      failed: 0,
      currentTitle: "",
    });

    let okCount = 0;
    const failed = [];

    for (let i = 0; i < items.length; i++) {
      if (controller.signal.aborted) {
        // Toutes les non-traitées comptent comme "annulées".
        for (let j = i; j < items.length; j++) {
          failed.push({
            titre: items[j].titre,
            type: items[j].type,
            file: items[j].file,
            reason: "Annulé avant traitement",
          });
        }
        break;
      }
      const it = items[i];
      setBatchProgress((p) => ({
        ...p,
        current: i + 1,
        currentTitle: `${it.titre} (${it.type})`,
      }));

      const draft = await addItem({
        matiere,
        type: it.type,
        titre: it.titre,
        source: "upload",
      });
      setCurrentItemId(draft.id);
      lastErrorRef.current = "";
      const result = await processFiles([it.file]);

      if (result?.markdown) {
        await updateItem(draft.id, {
          markdown: result.markdown,
          sourceImages: result.sourceImages,
        });
        okCount++;
        setBatchProgress((p) => ({ ...p, ok: p.ok + 1 }));
        classifyDocument(result.markdown).then(async (cls) => {
          if (cls?.theme) {
            const cur = await getItem(draft.id);
            if (cur && !cur.theme) {
              await updateItem(draft.id, { theme: cls.theme });
              await refreshBase();
            }
          }
        });
      } else {
        await deleteItem(draft.id);
        failed.push({
          titre: it.titre,
          type: it.type,
          file: it.file,
          reason: lastErrorRef.current || "Erreur inconnue",
        });
        setBatchProgress((p) => ({ ...p, failed: p.failed + 1 }));
        if (controller.signal.aborted) {
          for (let j = i + 1; j < items.length; j++) {
            failed.push({
              titre: items[j].titre,
              type: items[j].type,
              file: items[j].file,
              reason: "Annulé avant traitement",
            });
          }
          break;
        }
      }
      await refreshBase();
    }

    abortRef.current = null;
    setBatchProgress(null);
    setCurrentItemId(null);
    setMarkdown("");
    setSourceImages([]);
    setStatus(
      `Batch terminé : ${okCount} OK${failed.length > 0 ? ` · ${failed.length} échec(s)` : ""}.`
    );

    if (failed.length > 0) {
      setBatchSummary({ ok: okCount, failed, matiere, verifyPass: vp });
    }
  }

  function cancelBatch() {
    setBatchModal(null);
  }

  async function retryBatchFailed(itemsToRetry) {
    if (!batchSummary || !itemsToRetry || itemsToRetry.length === 0) return;
    const { matiere, verifyPass: vp } = batchSummary;
    setBatchSummary(null);
    await confirmBatch({ matiere, items: itemsToRetry, verifyPass: vp });
  }

  /* ============ Dropzone (upload local) ============ */
  function handleFiles(fileList) {
    const files = Array.from(fileList || []);
    if (!files.length) return;
    const primary = files[0];
    const baseName = primary.name.replace(/\.[^.]+$/, "");
    setAddModal({
      file: primary,
      allFiles: files,
      gbakiManifestItem: null,
      defaults: {
        titre: baseName,
        matiere: currentItem?.matiere || "",
        type: "cours",
        annee: "",
      },
    });
  }

  /* ============ Gbaki : import + ouverture ============ */
  async function openGbakiItem(manifestItem) {
    if (busy) return;
    const existing = await findByGbakiRef(manifestItem.id);
    if (existing?.markdown) {
      await openBaseItem(existing);
      return;
    }
    try {
      setGbakiStatus(`Téléchargement de « ${manifestItem.titre} »…`);
      const r = await fetch(manifestItem.pdf);
      if (!r.ok) throw new Error(`PDF introuvable : ${manifestItem.pdf}`);
      const blob = await r.blob();
      const file = new File([blob], `${manifestItem.titre}.pdf`, {
        type: "application/pdf",
      });
      setGbakiStatus("");
      setAddModal({
        file,
        allFiles: [file],
        gbakiManifestItem: manifestItem,
        defaults: {
          titre: manifestItem.titre,
          matiere: manifestItem.matiere,
          type: normalizeType(manifestItem.type),
          annee: manifestItem.annee,
        },
      });
    } catch (e) {
      setGbakiStatus(String(e.message || e));
    }
  }

  /* ============ Confirmation du modal d'ajout ============ */
  async function confirmAdd(meta) {
    const { titre, matiere, type, annee, pageFrom, pageTo } = meta;
    const allFiles = addModal.allFiles;
    const gbakiRef = addModal.gbakiManifestItem?.id || null;
    const source = gbakiRef ? "gbaki" : "upload";
    setAddModal(null);

    const draft = await addItem({
      matiere, type, titre, annee,
      source, gbakiRef,
    });
    setCurrentItemId(draft.id);
    await refreshBase();

    const pageRange = { from: pageFrom, to: pageTo };
    const result = await processFiles(allFiles, { pageRange });
    if (result?.markdown) {
      await updateItem(draft.id, {
        markdown: result.markdown,
        sourceImages: result.sourceImages,
      });
      await refreshBase();

      // Auto-classify en arrière-plan (n'attend pas pour libérer l'UI).
      classifyDocument(result.markdown).then(async (cls) => {
        if (!cls) return;
        const cur = await getItem(draft.id);
        if (!cur) return;
        const updates = {};
        if (
          cls.matiere &&
          (cur.matiere === "Sans matière" || !cur.matiere.trim())
        ) {
          updates.matiere = cls.matiere;
        }
        if (cls.theme && !cur.theme) updates.theme = cls.theme;
        if (Object.keys(updates).length > 0) {
          await updateItem(draft.id, updates);
          await refreshBase();
          setStatus(
            `Auto-détection : ${cls.matiere ? `matière "${cls.matiere}"` : ""}${
              cls.matiere && cls.theme ? " · " : ""
            }${cls.theme ? `thème "${cls.theme}"` : ""}`
          );
        }
      });
    } else {
      await deleteItem(draft.id);
      setCurrentItemId(null);
      setMarkdown("");
      setSourceImages([]);
      await refreshBase();
    }
  }

  function cancelAdd() {
    setAddModal(null);
  }

  /* ============ Base : ouvrir / éditer / supprimer / re-OCRiser ============ */
  async function openBaseItem(item) {
    if (busy) return;
    setCurrentItemId(item.id);
    setLastOpenedItemId(item.id);
    setMarkdown(item.markdown || "");
    setSourceImages(item.sourceImages || []);
    setProgress(1);
    setStatus(`« ${item.titre} » — chargé.`);
  }

  function editBaseItem(item) {
    setEditModal(item);
  }

  async function saveEditedItem(patch) {
    if (!editModal) return;
    await updateItem(editModal.id, patch);
    setEditModal(null);
    await refreshBase();
  }

  async function deleteBaseItem(item) {
    if (
      !window.confirm(
        `Supprimer « ${item.titre} » de ta base ?\n\nDéfinitif.`
      )
    )
      return;
    await deleteItem(item.id);
    if (currentItemId === item.id) {
      setCurrentItemId(null);
      setMarkdown("");
      setSourceImages([]);
      setStatus("");
    }
    if (lastOpenedItemId === item.id) setLastOpenedItemId(null);
    // Nettoie aussi de la sélection si présent.
    setSel((s) => s.filter((sid) => sid !== `base:${item.id}`));
    await refreshBase();
  }

  async function deleteFromEdit() {
    if (!editModal) return;
    const it = editModal;
    setEditModal(null);
    await deleteBaseItem(it);
  }

  async function reocrBaseItem(item) {
    if (busy || !item.gbakiRef) return;
    if (
      !window.confirm(
        `Re-OCRiser « ${item.titre} » ?\n\nTes corrections sur cet item seront perdues.`
      )
    )
      return;
    const manifestItem = (gbaki || []).find((g) => g.id === item.gbakiRef);
    if (!manifestItem) {
      setGbakiStatus("L'entrée Gbaki d'origine n'existe plus dans le manifeste.");
      return;
    }
    await deleteItem(item.id);
    if (currentItemId === item.id) {
      setCurrentItemId(null);
      setMarkdown("");
      setSourceImages([]);
    }
    await refreshBase();
    await openGbakiItem(manifestItem);
  }

  function closeCurrent() {
    setCurrentItemId(null);
    setMarkdown("");
    setSourceImages([]);
    setProgress(0);
    setStatus("");
  }

  function importMd(text) {
    if (!text) return;
    setMarkdown(text);
    setStatus(
      currentItemId
        ? "Transcription importée — sauvegardée dans l'item courant."
        : "Pour importer un .md, ouvre d'abord un item ou crée-en un via un drop."
    );
  }

  /* ============ Sélection → items (avec auto-OCR des manquants) ============ */
  async function prepareSelection() {
    const items = [];
    const missing = [];

    for (const sid of sel) {
      if (sid.startsWith("base:")) {
        const id = sid.slice(5);
        const it = await getItem(id);
        if (it?.markdown) items.push(it);
      } else if (sid.startsWith("gbaki:")) {
        const id = sid.slice(6);
        const existing = await findByGbakiRef(id);
        if (existing?.markdown) {
          items.push(existing);
        } else {
          const m = (gbaki || []).find((g) => g.id === id);
          if (m) missing.push(m);
        }
      }
    }

    if (missing.length > 0) {
      const proceed = window.confirm(
        `${missing.length} document(s) à transcrire d'abord (OCR séquentiel). Continuer ?`
      );
      if (!proceed) return null;

      for (let i = 0; i < missing.length; i++) {
        const m = missing[i];
        setGbakiStatus(`OCR ${i + 1}/${missing.length} : ${m.titre}`);
        try {
          const r = await fetch(m.pdf);
          if (!r.ok) throw new Error(`PDF introuvable : ${m.pdf}`);
          const blob = await r.blob();
          const file = new File([blob], `${m.titre}.pdf`, { type: "application/pdf" });
          const draft = await addItem({
            matiere: m.matiere,
            type: normalizeType(m.type),
            titre: m.titre,
            annee: m.annee,
            source: "gbaki",
            gbakiRef: m.id,
          });
          setCurrentItemId(draft.id);
          const result = await processFiles([file]);
          if (!result?.markdown) {
            await deleteItem(draft.id);
            setGbakiStatus(`OCR interrompu sur « ${m.titre} ».`);
            await refreshBase();
            return null;
          }
          await updateItem(draft.id, {
            markdown: result.markdown,
            sourceImages: result.sourceImages,
          });
          items.push(await getItem(draft.id));
        } catch (e) {
          setGbakiStatus(`Erreur sur « ${m.titre} » : ${e.message || e}`);
          return null;
        }
      }
      await refreshBase();
      setGbakiStatus("");
    }

    return items;
  }

  /* ============ Tools (acceptent items optionnels pour Dashboard) ============ */
  async function analyzeProf(itemsArg) {
    const items = Array.isArray(itemsArg) ? itemsArg : await prepareSelection();
    if (!items) return;
    const examens = items.filter((it) => normalizeType(it.type) === "examen");
    if (examens.length < 2) {
      setGbakiStatus("Il faut au moins 2 examens pour l'analyse de prof.");
      return;
    }
    const matieres = new Set(examens.map((it) => it.matiere));
    if (matieres.size > 1) {
      setGbakiStatus("Tous les examens doivent être de la même matière.");
      return;
    }
    const docs = examens.map((it) => ({
      titre: `${it.titre} (${it.annee || "s.d."})`,
      markdown: it.markdown,
    }));
    setStudyPrompt(
      buildProfAnalysisPrompt(docs, { matiere: [...matieres][0] || "la matière" })
    );
    setStudyToolLabel("analyse-prof");
    setGbakiStatus("");
  }

  async function rankTds(itemsArg) {
    const items = Array.isArray(itemsArg) ? itemsArg : await prepareSelection();
    if (!items) return;
    const tds = items.filter((it) => normalizeType(it.type) === "td");
    const exams = items.filter((it) => normalizeType(it.type) === "examen");
    if (tds.length < 1 || exams.length < 1) {
      setGbakiStatus("Il faut au moins 1 TD et 1 examen pour le ranking.");
      return;
    }
    const matieres = new Set(items.map((it) => it.matiere));
    if (matieres.size > 1) {
      setGbakiStatus("Tous les items doivent être de la même matière.");
      return;
    }
    const tdsDoc = tds.map((it) => ({
      titre: `${it.titre} (${it.annee || "s.d."})`,
      markdown: it.markdown,
    }));
    const examsDoc = exams.map((it) => ({
      titre: `${it.titre} (${it.annee || "s.d."})`,
      markdown: it.markdown,
      annee: it.annee,
    }));
    setStudyPrompt(
      buildTdsRankingPrompt(tdsDoc, examsDoc, {
        matiere: [...matieres][0] || "la matière",
      })
    );
    setStudyToolLabel("ranker-tds");
    setGbakiStatus("");
  }

  /* ============ Quiz interactif Gemini ============ */
  async function startQuiz(itemsArg) {
    const items = Array.isArray(itemsArg) ? itemsArg : await prepareSelection();
    if (!items) return;
    const cours = items.filter((it) => normalizeType(it.type) === "cours");
    if (cours.length === 0) {
      setGbakiStatus("Sélectionne au moins un cours pour le quiz.");
      return;
    }
    const matieres = new Set(cours.map((it) => it.matiere));
    if (matieres.size > 1) {
      setGbakiStatus("Tous les cours doivent être de la même matière.");
      return;
    }
    const matiere = [...matieres][0] || "la matière";
    const coursText = cours
      .map((c) => (cours.length > 1 ? `# ${c.titre}\n\n${c.markdown}` : c.markdown))
      .join("\n\n---\n\n");

    setStudyPrompt("");
    setStudyToolLabel("");
    setGbakiStatus("");

    const init = {
      cours: coursText,
      matiere,
      total: QUIZ_TOTAL,
      currentIdx: 0,
      questions: [],
      status: "loading",
    };
    setQuiz(init);

    const q = await quizQuestion({ cours: coursText, matiere, history: [] });
    if (q?.error || !q?.question) {
      setGbakiStatus(`Quiz indisponible : ${q?.error || "réponse invalide"}.`);
      setQuiz(null);
      return;
    }
    setQuiz({
      ...init,
      questions: [{ question: q.question, type: q.type }],
      status: "asking",
    });
  }

  async function submitQuizAnswer(userAnswer) {
    if (!quiz || quiz.status !== "asking") return;
    const idx = quiz.currentIdx;
    setQuiz((s) => ({
      ...s,
      status: "evaluating",
      questions: s.questions.map((q, i) =>
        i === idx ? { ...q, userAnswer } : q
      ),
    }));
    const cq = quiz.questions[idx];
    const ev = await quizEvaluate({
      cours: quiz.cours,
      matiere: quiz.matiere,
      question: cq.question,
      userAnswer,
    });
    if (ev?.error || !ev?.kind) {
      // Échec d'évaluation : on remet l'utilisateur en mode answer pour réessayer.
      setQuiz((s) => ({ ...s, status: "asking" }));
      setGbakiStatus(`Évaluation impossible : ${ev?.error || "réponse invalide"}.`);
      return;
    }
    setQuiz((s) => ({
      ...s,
      status: "feedback",
      questions: s.questions.map((q, i) =>
        i === idx
          ? {
              ...q,
              kind: ev.kind,
              score: typeof ev.score === "number" ? ev.score : 0,
              feedback: String(ev.feedback || ""),
              ideal: String(ev.ideal || ""),
            }
          : q
      ),
    }));
  }

  async function nextQuizQuestion() {
    if (!quiz) return;
    const nextIdx = quiz.currentIdx + 1;
    if (nextIdx >= quiz.total) {
      setQuiz((s) => ({ ...s, status: "done" }));
      return;
    }
    setQuiz((s) => ({ ...s, currentIdx: nextIdx, status: "loading" }));
    const q = await quizQuestion({
      cours: quiz.cours,
      matiere: quiz.matiere,
      history: quiz.questions,
    });
    if (q?.error || !q?.question) {
      // Si on n'arrive plus à générer, on termine prématurément avec ce qu'on a.
      setQuiz((s) => ({ ...s, status: "done" }));
      return;
    }
    setQuiz((s) => ({
      ...s,
      questions: [...s.questions, { question: q.question, type: q.type }],
      status: "asking",
    }));
  }

  function restartQuiz() {
    // Recommence avec la même sélection.
    startQuiz();
  }

  function exitQuiz() {
    setQuiz(null);
  }

  /* ============ Dashboard : action sur une matière ============ */
  async function onMatiereAction(matiere, action) {
    const items = baseItems.filter(
      (it) => it.matiere === matiere && (it.markdown || "").trim()
    );
    if (items.length === 0) {
      setGbakiStatus(`Aucun item transcrit pour « ${matiere} ».`);
      return;
    }
    switch (action) {
      case "analyzeProf": return analyzeProf(items);
      case "rankTds":     return rankTds(items);
      case "plan":        return planRevision("", items);
      case "quiz":        return startQuiz(items);
      default: return;
    }
  }

  /* ============ Export / import base ============ */
  async function handleExport() {
    try {
      setGbakiStatus("Préparation de l'archive…");
      const blob = await exportBaseAsZip();
      const date = new Date().toISOString().slice(0, 10);
      downloadBlob(blob, `corro-base-${date}.zip`);
      setGbakiStatus(`Export terminé (${(blob.size / 1024).toFixed(0)} Ko).`);
    } catch (e) {
      setGbakiStatus(`Export : ${e.message || e}`);
    }
  }

  async function handleImport(file) {
    if (!file) return;
    try {
      setGbakiStatus(`Import de ${file.name}…`);
      const res = await importBaseFromZip(file);
      await refreshBase();
      const parts = [];
      parts.push(`${res.added} item(s) importé(s)`);
      if (res.skippedExisting > 0) parts.push(`${res.skippedExisting} déjà présent(s)`);
      if (res.skippedMissingFile > 0)
        parts.push(`${res.skippedMissingFile} fichier(s) manquant(s)`);
      setGbakiStatus(parts.join(" · "));
    } catch (e) {
      setGbakiStatus(`Import : ${e.message || e}`);
    }
  }

  function exportQuizAsPrompt() {
    if (!quiz) return;
    const prompt = buildQuizExportPrompt(quiz.cours, {
      matiere: quiz.matiere,
      n: 12,
    });
    setStudyPrompt(prompt);
    setStudyToolLabel("quiz-export");
    setQuiz(null);
  }

  async function planRevision(targetDate, itemsArg) {
    const items = Array.isArray(itemsArg) ? itemsArg : await prepareSelection();
    if (!items) return;
    if (items.length === 0) {
      setGbakiStatus("Sélectionne au moins un item.");
      return;
    }
    const matieres = new Set(items.map((it) => it.matiere));
    if (matieres.size > 1) {
      setGbakiStatus("Tous les items doivent être de la même matière.");
      return;
    }
    const docs = items.map((it) => ({
      titre: it.titre,
      annee: it.annee,
      type: normalizeType(it.type),
      markdown: it.markdown,
    }));
    setStudyPrompt(
      buildRevisionPlanPrompt(docs, {
        matiere: [...matieres][0] || "la matière",
        targetDate: targetDate || "",
      })
    );
    setStudyToolLabel("plan-revision");
    setGbakiStatus("");
  }

  /* ============ Pipeline OCR ============ */
  function buildBatches(allPages) {
    const batches = [];
    let cur = [];
    let curSize = 0;
    for (const p of allPages) {
      if (p.kind === "text") {
        if (cur.length) {
          batches.push({ kind: "ocr", pages: cur });
          cur = [];
          curSize = 0;
        }
        batches.push({ kind: "text", page: p });
        continue;
      }
      if (
        cur.length &&
        (cur.length >= BATCH_SIZE || curSize + p.dataUrl.length > MAX_PAYLOAD)
      ) {
        batches.push({ kind: "ocr", pages: cur });
        cur = [];
        curSize = 0;
      }
      cur.push(p);
      curSize += p.dataUrl.length;
    }
    if (cur.length) batches.push({ kind: "ocr", pages: cur });
    return batches;
  }

  async function processFiles(files, opts = {}) {
    if (!files || files.length === 0) return null;

    const controller = new AbortController();
    abortRef.current = controller;
    setBusy(true);
    setMarkdown("");
    setSourceImages([]);
    setProgress(0);
    count429.current = 0;
    setAutoVerifyDisabled(false);

    const singlePdf = files.length === 1 && files[0].type === "application/pdf";
    const pageRange = singlePdf ? opts.pageRange : undefined;

    try {
      setStatus("On ouvre tes fichiers…");
      let allPages = [];
      for (const f of files) {
        if (controller.signal.aborted)
          throw new DOMException("Annulé", "AbortError");
        const pages =
          f.type === "application/pdf"
            ? await renderPdf(f, {
                onPage: (i, n, kind) =>
                  setStatus(
                    kind === "text"
                      ? `Texte natif page ${i} (gratuit)`
                      : `Préparation page ${i} de ${f.name}`
                  ),
                signal: controller.signal,
                pageRange,
              })
            : await renderImage(f);
        allPages = allPages.concat(pages);
      }

      const imgs = allPages
        .filter((p) => p.kind === "image")
        .map((p) => p.dataUrl);
      setSourceImages(imgs);

      for (const p of allPages) {
        if (p.kind !== "image") continue;
        let guard = 0;
        while (p.dataUrl.length > MAX_PAYLOAD && guard < 3) {
          setStatus(`Page ${p.index} un peu lourde — on l'allège…`);
          p.dataUrl = await shrinkImage(p.dataUrl);
          guard++;
        }
      }

      const batches = buildBatches(allPages);
      const total = allPages.length;
      let pagesDone = 0;
      let result = "";

      for (let b = 0; b < batches.length; b++) {
        if (controller.signal.aborted)
          throw new DOMException("Annulé", "AbortError");
        const batch = batches[b];

        let md;
        if (batch.kind === "text") {
          md = batch.page.text;
          setStatus(`Page ${batch.page.index} prise en texte natif (gratuit).`);
          pagesDone += 1;
        } else {
          const from = batch.pages[0].index;
          const to = batch.pages[batch.pages.length - 1].index;
          const verb = FRIENDLY_BATCH_LABELS[b % FRIENDLY_BATCH_LABELS.length];
          const span = from === to ? `page ${from}` : `pages ${from}–${to}`;
          setStatus(`${verb} ${span}…`);

          md = await ocrWithRetry(
            { images: batch.pages.map((p) => p.dataUrl) },
            controller.signal
          );

          if (verifyPass && !autoVerifyDisabled) {
            await sleep(DELAY_MS, controller.signal);
            setStatus(`Relecture des formules ${span}…`);
            const verified = await ocrWithRetry(
              { images: batch.pages.map((p) => p.dataUrl), draft: md },
              controller.signal
            );
            if (verified.trim()) md = verified;
          }
          pagesDone += batch.pages.length;
        }

        result += (result ? "\n\n---\n\n" : "") + md.trim();
        setMarkdown(result);
        setProgress(pagesDone / total);

        if (batch.kind === "ocr" && b < batches.length - 1) {
          await sleep(DELAY_MS, controller.signal);
        }
      }

      const txt = allPages.filter((p) => p.kind === "text").length;
      setStatus(
        txt > 0
          ? `Terminé : ${total} page(s) — ${txt} en texte natif, ${total - txt} via OCR.`
          : `Terminé : ${total} page(s). Relis les formules avant le prompt.`
      );
      return { markdown: result, sourceImages: imgs };
    } catch (e) {
      const msg =
        e?.name === "AbortError"
          ? "Annulé"
          : `Erreur : ${e.message || e}`;
      lastErrorRef.current = msg;
      setStatus(
        e?.name === "AbortError"
          ? "Annulé. Tu peux relancer quand tu veux."
          : msg
      );
      return null;
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  async function ocrWithRetry(payload, signal, attemptNo = 0, engineIdx = 0) {
    if (signal?.aborted) throw new DOMException("Annulé", "AbortError");
    if (engineIdx >= OCR_CHAIN.length) {
      throw new Error(
        "Tous les moteurs OCR sont épuisés. Réessaie après la réinitialisation des quotas (~7h–8h) ou ajoute GROQ_API_KEY / OPENROUTER_API_KEY."
      );
    }
    const engine = OCR_CHAIN[engineIdx];

    let r;
    try {
      r = await fetch("/api/ocr", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...userKeyHeaders(userKeys) },
        body: JSON.stringify({ ...payload, engine }),
        signal,
      });
    } catch (e) {
      if (e?.name === "AbortError") throw e;
      if (attemptNo < 5) {
        setStatus(`Connexion interrompue — nouvelle tentative dans 8 s (${attemptNo + 1}/5)…`);
        await sleep(8000, signal);
        return ocrWithRetry(payload, signal, attemptNo + 1, engineIdx);
      }
      throw new Error("Échec réseau répété. Vérifie ta connexion et garde l'onglet ouvert.");
    }

    if (r.status === 501) {
      // 501 = pas de clé (user ni shared). Suggère le BYOK.
      const info = await r.json().catch(() => ({}));
      if (info.needsKey && engineIdx === 0) {
        setSaturatedShared(true);
      }
      return ocrWithRetry(payload, signal, 0, engineIdx + 1);
    }

    if (r.status === 429) {
      count429.current += 1;
      // Si on est en mode partagé (pas de clé user Gemini) et qu'on prend des 429,
      // c'est probablement la saturation collective. On surface le bandeau.
      if (!userKeys.gemini && count429.current >= 2) {
        setSaturatedShared(true);
      }
      if (count429.current >= 3 && verifyPass && !autoVerifyDisabled) {
        setAutoVerifyDisabled(true);
      }
      const info = await r.json().catch(() => ({}));
      if (info.daily || attemptNo >= 3) {
        setStatus(`Quota épuisé sur ${engine} — on passe au moteur suivant…`);
        await sleep(1500, signal);
        return ocrWithRetry(payload, signal, 0, engineIdx + 1);
      }
      setStatus(`Quota minute atteint sur ${engine}, on attend 30 s (${attemptNo + 1}/3)…`);
      await sleep(30000, signal);
      return ocrWithRetry(payload, signal, attemptNo + 1, engineIdx);
    }

    if (r.status === 503) {
      if (attemptNo >= 2) {
        setStatus(`${engine} reste surchargé — passage au suivant…`);
        await sleep(1500, signal);
        return ocrWithRetry(payload, signal, 0, engineIdx + 1);
      }
      const wait = 10000 * 2 ** attemptNo;
      setStatus(`Serveurs ${engine} surchargés — on patiente ${wait / 1000} s (${attemptNo + 1}/3)…`);
      await sleep(wait, signal);
      return ocrWithRetry(payload, signal, attemptNo + 1, engineIdx);
    }

    const data = await r.json();
    if (!r.ok) throw new Error(data.error || `Erreur OCR (${r.status})`);
    if (engineIdx > 0) setStatus(`Transcription via ${engine} (moteur de secours)…`);
    return data.markdown || "";
  }

  function download(name, content, type = "text/markdown") {
    const blob = new Blob([content], { type });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function copyText(text, tag) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      setCopied(tag);
      setTimeout(() => setCopied(""), 2500);
    } catch {
      alert("Copie automatique indisponible — sélectionne le texte et fais Ctrl+C.");
    }
  }

  return (
    <main className="app">
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <p className="tag">Corro AI · atelier de prép d&apos;exam</p>
            <div className="hero-top-actions">
              <button
                type="button"
                className={`mode-btn ${userKeys.gemini ? "mode-perso" : "mode-shared"}`}
                onClick={() => {
                  setSettingsFocus(userKeys.gemini ? null : "gemini");
                  setSettingsOpen(true);
                }}
                title={
                  userKeys.gemini
                    ? "Tu utilises ta clé personnelle — quota perso illimité par jour"
                    : "Mode partagé — quotas mutualisés avec les autres utilisateurs"
                }
              >
                <span className="mode-dot" />
                {userKeys.gemini ? "Mode perso" : "Mode partagé"}
              </button>
              <button
                type="button"
                className="help-btn"
                onClick={() => setHelpOpen(true)}
                aria-label="Comment ça marche"
              >
                ? Comment ça marche
              </button>
            </div>
          </div>
          <h1>
            Ta matière, prête à être <em>maîtrisée</em>.
          </h1>
          <p>
            Drop d&apos;un dossier matière (Cours / TDs / Devoir) → transcription
            en lot → outils d&apos;étude : analyse de prof, ranking de TDs, plan
            de révision, quiz interactif, corrigés via DeepSeek/Claude.
          </p>
        </div>
      </header>

      {saturatedShared && !userKeys.gemini && (
        <div className="saturation-banner">
          <div className="saturation-inner">
            <strong>L&apos;API partagée est saturée.</strong> Tu peux passer en{" "}
            <strong>Mode perso</strong> (5 min de setup) pour avoir ton quota dédié.
            <button
              className="primary sm"
              onClick={() => {
                setSettingsFocus("gemini");
                setSettingsOpen(true);
              }}
            >
              Configurer ma clé
            </button>
            <button
              className="ghost sm"
              onClick={() => setSaturatedShared(false)}
            >
              Plus tard
            </button>
          </div>
        </div>
      )}

      <div className="layout">
        <Sidebar
          baseItems={baseItems}
          gbakiManifest={gbaki}
          currentItemId={currentItemId}
          selectedIds={sel}
          onToggleSelect={toggleSel}
          onOpenBase={openBaseItem}
          onEditBase={editBaseItem}
          onDeleteBase={deleteBaseItem}
          onReocrBase={reocrBaseItem}
          onOpenGbaki={openGbakiItem}
          onExportBase={handleExport}
          onImportBase={handleImport}
          status={gbakiStatus}
          busy={busy}
        />

        <div className="main">
          <Dropzone
            busy={busy}
            status={status}
            progress={progress}
            verifyPass={verifyPass}
            autoVerifyDisabled={autoVerifyDisabled}
            batchProgress={batchProgress}
            onFiles={handleFiles}
            onFolderOrZip={handleFolderOrZip}
            onCancel={cancelOcr}
            onToggleVerify={setVerifyPass}
          />

          <ToolsPanel
            baseItems={baseItems}
            gbakiManifest={gbaki}
            selectedIds={sel}
            studyPrompt={studyPrompt}
            studyToolLabel={studyToolLabel}
            onClearSelection={clearSelection}
            onAnalyzeProf={() => analyzeProf()}
            onRankTds={() => rankTds()}
            onPlanRevision={(date) => planRevision(date)}
            onQuizCours={() => startQuiz()}
            onCopy={copyText}
            onDownload={download}
            copiedTag={copied}
            busy={busy}
          />

          {quiz ? (
            <QuizPanel
              quiz={quiz}
              onSubmit={submitQuizAnswer}
              onNext={nextQuizQuestion}
              onRestart={restartQuiz}
              onExit={exitQuiz}
              onExport={exportQuizAsPrompt}
            />
          ) : markdown ? (
            <>
              <Workbench
                markdown={markdown}
                setMarkdown={setMarkdown}
                sourceImages={sourceImages}
                currentItem={currentItem}
                onDownload={download}
                onImportMd={importMd}
              />
              <CorrectionPanel
                markdown={markdown}
                subject={subject}
                setSubject={setSubject}
                attempt={attempt}
                setAttempt={setAttempt}
                onCopy={copyText}
                onDownload={download}
                copiedTag={copied}
              />
              <div className="reset-row">
                <button className="ghost" onClick={closeCurrent}>
                  Fermer ce document
                </button>
              </div>
            </>
          ) : (
            <Dashboard
              baseItems={baseItems}
              lastOpenedItemId={lastOpenedItemId}
              onMatiereAction={onMatiereAction}
              onOpenItem={openBaseItem}
              busy={busy}
            />
          )}
        </div>
      </div>

      {addModal && (
        <AddItemModal
          file={addModal.file}
          defaults={addModal.defaults}
          matiereSuggestions={matiereSuggestions}
          onCancel={cancelAdd}
          onConfirm={confirmAdd}
        />
      )}

      {editModal && (
        <EditItemModal
          item={editModal}
          matiereSuggestions={matiereSuggestions}
          onCancel={() => setEditModal(null)}
          onSave={saveEditedItem}
          onDelete={deleteFromEdit}
        />
      )}

      {batchModal && (
        <BatchImportModal
          parsed={batchModal}
          matiereSuggestions={matiereSuggestions}
          onCancel={cancelBatch}
          onConfirm={confirmBatch}
        />
      )}

      {batchSummary && (
        <BatchSummaryModal
          ok={batchSummary.ok}
          failed={batchSummary.failed}
          matiere={batchSummary.matiere}
          onClose={() => setBatchSummary(null)}
          onRetry={retryBatchFailed}
        />
      )}

      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}

      {welcomeOpen && (
        <WelcomeModal
          onConfigure={async () => {
            await markOnboardingDone();
            setWelcomeOpen(false);
            setSettingsFocus("gemini");
            setSettingsOpen(true);
          }}
          onLater={async () => {
            await markOnboardingDone();
            setWelcomeOpen(false);
          }}
        />
      )}

      {settingsOpen && (
        <Settings
          focusProvider={settingsFocus}
          onClose={() => {
            setSettingsOpen(false);
            setSettingsFocus(null);
            // Si on a une clé maintenant, on retire la saturation.
            reloadKeys().then(() => setSaturatedShared(false));
          }}
          onChange={reloadKeys}
        />
      )}

      <footer>
        Corro AI · base perso anonyme en IndexedDB · OCR Gemini / Groq / OpenRouter ·
        prompts experts vers DeepSeek &amp; Claude. Quotas gratuits, sans CB.
        Les paliers gratuits d&apos;OCR peuvent utiliser tes données pour
        l&apos;entraînement : évite les documents sensibles.
      </footer>
    </main>
  );
}
