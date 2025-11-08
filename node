// cleanup-and-optimize.js
import fs from "fs";
import path from "path";

const unusedPath = path.resolve("unused.json");
const baseDir = path.resolve("src");
const fontsDir = path.resolve("public/assets/fonts");
const tempDir = path.resolve("temp-fonts");
const videoDir = path.resolve("public/videos");
const cssPath = path.resolve("src/styles/fonts.css");

// 🗑️ Eliminar archivos listados en unused.json
if (fs.existsSync(unusedPath)) {
  const unused = JSON.parse(fs.readFileSync(unusedPath, "utf-8"));
  unused.files.forEach((file) => {
    const fullPath = path.join(baseDir, file);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`🗑️ Eliminado: ${file}`);
    } else {
      console.warn(`⚠️ No encontrado: ${file}`);
    }
  });
} else {
  console.warn("⚠️ No se encontró unused.json. Puedes generarlo con `vite build`.");
}

// 🧹 Eliminar fuentes .woff2 originales
fs.readdirSync(fontsDir).forEach((file) => {
  if (file.endsWith(".woff2") && !file.includes("subset")) {
    fs.unlinkSync(path.join(fontsDir, file));
    console.log(`🧹 Fuente original eliminada: ${file}`);
  }
});

// 🧼 Eliminar .ttf temporales
if (fs.existsSync(tempDir)) {
  fs.readdirSync(tempDir).forEach((file) => {
    fs.unlinkSync(path.join(tempDir, file));
    console.log(`🧼 Temporal eliminado: ${file}`);
  });
  fs.rmdirSync(tempDir);
}

// 🎥 Detectar videos pesados
fs.readdirSync(videoDir).forEach((file) => {
  const fullPath = path.join(videoDir, file);
  const stats = fs.statSync(fullPath);
  if (stats.size > 1_000_000) {
    console.warn(`⚠️ Video pesado: ${file} (${(stats.size / 1024 / 1024).toFixed(1)} MB)`);
  }
});

// ✍️ Regenerar fonts.css con subset .woff2
const subsetFonts = fs.readdirSync(fontsDir).filter(f => f.endsWith("subset.woff2"));
const cssContent = subsetFonts.map(file => {
  const weight = file.includes("Bold") ? 700 :
                 file.includes("SemiBold") ? 600 :
                 file.includes("Medium") ? 500 : 400;
  return `@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/${file}') format('woff2');
  font-weight: ${weight};
  font-style: normal;
  font-display: swap;
}`;
}).join("\n\n");

fs.writeFileSync(cssPath, cssContent);
console.log("✅ fonts.css actualizado con fuentes subset.");
