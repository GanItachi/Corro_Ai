// lib/pdf.js
// Rendu PDF / image -> données prêtes pour OCR, avec :
//  - worker pdf.js servi en local (plus de dépendance unpkg)
//  - détection du calque de texte natif (bypass OCR si dispo)
//  - gestion explicite des PDFs protégés par mot de passe

const TARGET_WIDTH = 2000;

let _pdfjs;
async function getPdfjs() {
  if (!_pdfjs) {
    _pdfjs = await import("pdfjs-dist");
    _pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker.min.mjs";
  }
  return _pdfjs;
}

// Une page peut être :
//  - { kind: "text", text }      -> texte natif, on saute l'OCR
//  - { kind: "image", dataUrl }  -> à envoyer à l'OCR
// La détection : si la page expose > 200 chars dont > 50% alphanumériques,
// c'est un PDF "vrai texte" (export LaTeX, Word -> PDF, etc.).
function isNativeTextWorth(text) {
  if (!text || text.length < 200) return false;
  const alnum = text.replace(/[^a-zA-Z0-9À-ÿ]/g, "").length;
  return alnum / text.length > 0.5;
}

// Lit juste le nombre de pages d'un PDF (sans rendre). Utilisé par
// AddItemModal pour proposer un sélecteur de plage avant OCR.
export async function getPageCount(file) {
  if (!file || file.type !== "application/pdf") return 1;
  const pdfjs = await getPdfjs();
  try {
    const pdf = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
    return pdf.numPages;
  } catch (e) {
    const msg = String(e?.message || e);
    if (e?.name === "PasswordException" || /password/i.test(msg)) {
      throw new Error(
        "PDF protégé par mot de passe. Retire la protection avant import."
      );
    }
    throw e;
  }
}

export async function renderPdf(file, { onPage, signal, pageRange } = {}) {
  const pdfjs = await getPdfjs();
  let pdf;
  try {
    pdf = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
  } catch (e) {
    const msg = String(e?.message || e);
    if (e?.name === "PasswordException" || /password/i.test(msg)) {
      throw new Error(
        "PDF protégé par mot de passe. Retire la protection (qpdf, pdftk, ou imprimer en PDF depuis Aperçu/Adobe) avant import."
      );
    }
    if (/InvalidPDF|invalid/i.test(msg)) {
      throw new Error("Fichier PDF illisible ou corrompu.");
    }
    throw e;
  }

  const start = Math.max(1, pageRange?.from || 1);
  const end = Math.min(pageRange?.to || pdf.numPages, pdf.numPages);

  const pages = [];
  for (let i = start; i <= end; i++) {
    if (signal?.aborted) throw new DOMException("Annulé", "AbortError");
    const page = await pdf.getPage(i);

    // 1. Tentative d'extraction de texte natif.
    let nativeText = "";
    try {
      const tc = await page.getTextContent();
      nativeText = tc.items.map((it) => it.str).join(" ").replace(/\s+/g, " ").trim();
    } catch { /* certains PDFs n'ont pas de calque texte */ }

    if (isNativeTextWorth(nativeText)) {
      pages.push({ kind: "text", index: i, total: end, text: nativeText });
      onPage?.(i, end, "text");
      continue;
    }

    // 2. Sinon, rendu en image pour OCR.
    const base = page.getViewport({ scale: 1 });
    const scale = Math.min(3, TARGET_WIDTH / base.width);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
    pages.push({
      kind: "image",
      index: i,
      total: end,
      dataUrl: canvas.toDataURL("image/jpeg", 0.85),
    });
    onPage?.(i, end, "image");
  }
  return pages;
}

export async function renderImage(file) {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1.5, TARGET_WIDTH / bmp.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext("2d").drawImage(bmp, 0, 0, canvas.width, canvas.height);
  return [
    {
      kind: "image",
      index: 1,
      total: 1,
      dataUrl: canvas.toDataURL("image/jpeg", 0.85),
    },
  ];
}

export async function shrinkImage(dataUrl, factor = 0.8, quality = 0.78) {
  const img = await new Promise((res, rej) => {
    const im = new Image();
    im.onload = () => res(im);
    im.onerror = () => rej(new Error("Image illisible"));
    im.src = dataUrl;
  });
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * factor);
  canvas.height = Math.round(img.height * factor);
  canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", quality);
}
