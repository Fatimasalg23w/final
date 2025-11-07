import fs from "fs";
import path from "path";
import sharp from "sharp";

// ✅ Configuración
const sourceDir = "src/assets";
const outputDir = "src/assets-webp";
const visibleSize = { width: 440, height: 440 };

// ✅ Asegura que el directorio de salida exista
fs.mkdirSync(outputDir, { recursive: true });

// ✅ Extensiones válidas
const validExtensions = [".png", ".jpg", ".jpeg"];

// ✅ Lee todos los archivos en src/assets
const files = fs.readdirSync(sourceDir).filter(file =>
  validExtensions.includes(path.extname(file).toLowerCase())
);

// ✅ Convierte cada imagen
for (const file of files) {
  const inputPath = path.join(sourceDir, file);
  const outputName = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const outputPath = path.join(outputDir, outputName);

  // ❌ Evita duplicados
  if (fs.existsSync(outputPath)) {
    console.log(`⏩ Ya existe: ${outputName}`);
    continue;
  }

  sharp(inputPath)
    .resize(visibleSize.width, visibleSize.height, { fit: "cover" })
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log(`✅ Convertido: ${outputName}`);
    })
    .catch(err => {
      console.error(`❌ Error en ${file}:`, err.message);
    });
}
