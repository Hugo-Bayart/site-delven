import { readFile } from "node:fs/promises";

const siteUrl = process.env.SITE_URL || "https://delven.fr";

function extractAssets(html) {
  const jsMatches = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  const cssMatches = [...html.matchAll(/<link[^>]+href="([^"]+\.css)"/g)].map((m) => m[1]);
  return { js: jsMatches, css: cssMatches };
}

function normalizeAssetPath(assetPath) {
  try {
    const withoutQuery = assetPath.split("?")[0];
    return withoutQuery.startsWith("/") ? withoutQuery.slice(1) : withoutQuery;
  } catch {
    return assetPath;
  }
}

async function main() {
  const localHtml = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const localAssets = extractAssets(localHtml);

  const response = await fetch(siteUrl, {
    headers: {
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
  });

  if (!response.ok) {
    throw new Error(`Impossible de récupérer ${siteUrl} (${response.status})`);
  }

  const remoteHtml = await response.text();
  const remoteAssets = extractAssets(remoteHtml);

  const localJs = localAssets.js.map(normalizeAssetPath);
  const localCss = localAssets.css.map(normalizeAssetPath);
  const remoteJs = remoteAssets.js.map(normalizeAssetPath);
  const remoteCss = remoteAssets.css.map(normalizeAssetPath);

  const jsOk = localJs.every((asset) => remoteJs.includes(asset));
  const cssOk = localCss.every((asset) => remoteCss.includes(asset));

  if (jsOk && cssOk) {
    console.log(`✅ Déploiement à jour sur ${siteUrl}`);
    console.log(`JS: ${localJs.join(", ") || "aucun"}`);
    console.log(`CSS: ${localCss.join(", ") || "aucun"}`);
    return;
  }

  console.error(`❌ Déploiement non synchronisé sur ${siteUrl}`);
  console.error(`Locaux JS : ${localJs.join(", ") || "aucun"}`);
  console.error(`Distants JS : ${remoteJs.join(", ") || "aucun"}`);
  console.error(`Locaux CSS : ${localCss.join(", ") || "aucun"}`);
  console.error(`Distants CSS : ${remoteCss.join(", ") || "aucun"}`);
  process.exit(1);
}

main().catch((error) => {
  console.error(`Erreur: ${error.message}`);
  process.exit(1);
});
