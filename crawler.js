import fs from "fs";
import http from "http";
import https from "https";
import path from "path";

// === CONFIGURAÇÕES ===
const startUrl = "https://www.querodireito.com.br/"; // URL base
const outputDir = "./public"; // Pasta de destino
const assetsBase = "/assets"; // Caminho público dos assets
const allowedAssetDomain = "cdn.prod.website-files.com";

// Cria saída
fs.mkdirSync(outputDir, { recursive: true });

// Trackers
const visitedPages = new Set();
const visitedAssets = new Set();
const queue = [startUrl];

// ------------------------------
//   FETCH (usando apenas nativo)
// ------------------------------
function fetch(urlToFetch) {
  return new Promise((resolve, reject) => {
    const client = urlToFetch.startsWith("https") ? https : http;

    client
      .get(urlToFetch, (res) => {
        let data = [];
        res.on("data", (chunk) => data.push(chunk));
        res.on("end", () => resolve(Buffer.concat(data)));
      })
      .on("error", reject);
  });
}

// -----------------------------------
//   Monta path local para HTML/asset
// -----------------------------------
function getFilePathFromUrl(urlStr) {
  const urlObj = new URL(urlStr);
  let filePath = urlObj.pathname;

  if (filePath.endsWith("/")) filePath += "index.html";
  if (!path.extname(filePath)) filePath += ".html";

  const full = path.join(outputDir, filePath.replace(/^\//, ""));
  fs.mkdirSync(path.dirname(full), { recursive: true });

  return full;
}

// ------------------------------------------------------
//   Monta path para assets dentro de /assets/...
// ------------------------------------------------------
function getAssetLocalPath(assetUrl) {
  const urlObj = new URL(assetUrl);

  // Exemplo:
  // https://cdn.prod.website-files.com/abc/xyz/image.png
  //
  // local → /assets/abc/xyz/image.png

  const assetRelative = path.join(
    assetsBase.replace(/^\//, ""), // remove "/" inicial
    urlObj.pathname.replace(/^\//, "")
  );

  const fullPath = path.join(outputDir, assetRelative);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });

  return { fullPath, publicPath: "/" + assetRelative.replace(/\\/g, "/") };
}

// ------------------------------
//   Baixar asset do CDN permitido
// ------------------------------
async function downloadAsset(assetUrl) {
  if (visitedAssets.has(assetUrl)) return null;
  visitedAssets.add(assetUrl);

  const urlObj = new URL(assetUrl);
  if (urlObj.hostname !== allowedAssetDomain) return null;

  try {
    console.log("Baixando asset:", assetUrl);
    const data = await fetch(assetUrl);

    const { fullPath, publicPath } = getAssetLocalPath(assetUrl);
    fs.writeFileSync(fullPath, data);

    console.log("• Asset salvo em:", fullPath);

    return publicPath; // caminho que vai pro HTML
  } catch (err) {
    console.log("Erro ao baixar asset:", assetUrl);
    return null;
  }
}

// -------------------------------------
// Reescreve caminhos no HTML final
// -------------------------------------
function applyReplacements(html, replacements) {
  let newHtml = html;

  for (const { original, updated } of replacements) {
    const escaped = original.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    const regex = new RegExp(escaped, "g");

    newHtml = newHtml.replace(regex, updated);
  }

  return newHtml;
}

// -----------------------------
//   CRAWLER PRINCIPAL
// -----------------------------
async function crawl() {
  const base = new URL(startUrl);

  while (queue.length > 0) {
    const current = queue.shift();
    if (visitedPages.has(current)) continue;

    visitedPages.add(current);

    console.log("\nBaixando página:", current);

    let htmlData;
    try {
      htmlData = await fetch(current);
    } catch {
      console.log("Erro ao acessar:", current);
      continue;
    }

    let html = htmlData.toString("utf8");
    const replacements = [];

    // Extrair href/src
    const linkRegex = /href\s*=\s*["']([^"']+)["']/gi;
    const srcRegex = /src\s*=\s*["']([^"']+)["']/gi;

    const refs = [
      ...[...html.matchAll(linkRegex)].map((m) => m[1]),
      ...[...html.matchAll(srcRegex)].map((m) => m[1]),
    ];

    for (let ref of refs) {
      let resolved;
      try {
        resolved = new URL(ref, current).href;
      } catch {
        continue;
      }

      const u = new URL(resolved);

      // === Asset do CDN ===
      if (u.hostname === allowedAssetDomain) {
        const newPath = await downloadAsset(resolved);
        if (newPath) {
          replacements.push({
            original: ref,
            updated: newPath,
          });
        }
        continue;
      }

      // === Página interna ===
      if (resolved.startsWith(base.origin)) {
        if (!visitedPages.has(resolved)) queue.push(resolved);
      }
    }

    // Reescrever HTML
    const rewrittenHtml = applyReplacements(html, replacements);

    // Salvar a página
    const pagePath = getFilePathFromUrl(current);
    fs.writeFileSync(pagePath, rewrittenHtml);

    console.log("✔ Página salva:", pagePath);
  }

  console.log("\n=== FINALIZADO ===");
  console.log(`Páginas baixadas: ${visitedPages.size}`);
  console.log(`Assets baixados: ${visitedAssets.size}`);
}

crawl();
