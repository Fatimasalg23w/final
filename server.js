import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8000;

// ✅ Servir archivos públicos como /logo.png
app.use(express.static(path.join(__dirname, "public")));

// === Sitio principal en "/"
const mainDist = path.join(__dirname, "dist");
app.use(express.static(mainDist));
app.get("/", (req, res) => {
  res.sendFile(path.join(mainDist, "index.html"));
});

// === Blog en "/blog"
const blogDist = path.join(__dirname, "vacioblog", "dist");
app.use("/blog", express.static(blogDist));
app.get(/^\/blog(\/.*)?$/, (req, res) => {
  res.sendFile(path.join(blogDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Sitio principal: http://localhost:${PORT}`);
  console.log(`✅ Blog: http://localhost:${PORT}/blog`);
});
