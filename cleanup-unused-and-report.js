import fs from "fs";
import path from "path";

const unusedPath = path.resolve("unused.json");
const baseDir = path.resolve("src");

if (!fs.existsSync(unusedPath)) {
  console.error("❌ No se encontró unused.json. Ejecuta `vite build` primero.");
  process.exit(1);
}

let unused;
try {
  unused = JSON.parse(fs.readFileSync(unusedPath, "utf-8"));
} catch (err) {
  console.error("❌ Error al parsear unused.json:", err.message);
  process.exit(1);
}

if (!unused.files || !Array.isArray(unused.files)) {
  console.error("❌ unused.json no contiene un array 'files'.");
  process.exit(1);
}

let totalBytes = 0;
const summary = {};

unused.files.forEach((file) => {
  const fullPath = path.join(baseDir, file);
  const ext = path.extname(file);

  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    totalBytes += stats.size;

    summary[ext] = (summary[ext] || 0) + 1;

    fs.unlinkSync(fullPath);
    console.log(`🗑️ Eliminado: ${file}`);
  } else {
    console.warn(`⚠️ No encontrado: ${file}`);
  }
});

console.log("\n📊 Resumen de limpieza:");
Object.entries(summary).forEach(([ext, count]) => {
  console.log(`• ${ext} → ${count} archivo(s) eliminado(s)`);
});

console.log(`\n💡 Peso total ahorrado: ${(totalBytes / 1024).toFixed(2)} KB`);
