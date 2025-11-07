import express from "express";
// import compression from "compression"; // ❌ Desactivado temporalmente
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Desactivar caché completamente
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

// ✅ Servir archivos estáticos desde dist/
app.use(
  express.static(path.join(__dirname, "dist"), {
    maxAge: 0,
    etag: false,
    lastModified: false,
  })
);

// ✅ Fallback para SPA compatible con Node.js v22+
app.get(/^\/(?!assets\/|logo\.svg$).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Sitio corriendo en http://localhost:${PORT}`);
});
