// optimize-webp.js
import sharp from "sharp";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Setup para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 Carpeta de entrada
const inputDir = path.join(__dirname, "src", "assets");

// 📏 Tamaño estándar (ajústalo según tu layout)
const TARGET_WIDTH = 180;
const TARGET_HEIGHT = 180;

const files = await fs.readdir(inputDir);

for (const file of files) {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);

  if (ext === ".webp") {
    const tempPath = path.join(inputDir, `${base}-temp.webp`);

    try {
      // 🛠️ Genera imagen optimizada en archivo temporal
      await sharp(inputPath)
        .resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: "cover" })
        .webp({ quality: 80 })
        .toFile(tempPath);

      // 🔄 Reemplaza el original
      await fs.move(tempPath, inputPath, { overwrite: true });

      console.log(`✅ Optimizado: ${file} → ${TARGET_WIDTH}×${TARGET_HEIGHT}`);
    } catch (err) {
      console.error(`❌ Error al procesar ${file}:`, err.message);
      await fs.remove(tempPath).catch(() => {});
    }
  } else {
    console.log(`⏭️ Ignorado: ${file}`);
  }
}
