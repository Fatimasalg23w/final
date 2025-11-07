import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gzip = promisify(zlib.gzip);
const brotliCompress = promisify(zlib.brotliCompress);

const targetDir = path.join(__dirname, 'dist');

const compressFile = async (filePath) => {
  const ext = path.extname(filePath);
  if (!['.js', '.css', '.html'].includes(ext)) return;

  const content = await fs.promises.readFile(filePath);

  const gzipPath = filePath + '.gz';
  const brPath = filePath + '.br';

  await fs.promises.writeFile(gzipPath, await gzip(content));
  await fs.promises.writeFile(brPath, await brotliCompress(content));
  console.log(`✅ Compressed: ${path.basename(filePath)}`);
};

const walk = async (dir) => {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else {
      await compressFile(fullPath);
    }
  }
};

walk(targetDir).then(() => {
  console.log('🎉 Compression complete');
}).catch(console.error);
