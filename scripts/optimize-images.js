const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

sharp.cache(false);
sharp.concurrency(1);

const imgDir = path.resolve(__dirname, '..', 'public', 'img');
const exts = new Set(['.jpg', '.jpeg', '.png']);
const maxDim = 2000; // cap largest dimension for web
const minBytes = 50 * 1024; // skip tiny assets

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!exts.has(ext)) return;

  const stat = await fs.promises.stat(filePath);
  if (stat.size < minBytes) return;

  const input = await fs.promises.readFile(filePath);
  const img = sharp(input);
  const meta = await img.metadata();
  if (!meta.width || !meta.height) return;

  const scale = Math.min(1, maxDim / Math.max(meta.width, meta.height));
  const width = Math.round(meta.width * scale);
  const height = Math.round(meta.height * scale);

  let pipeline = img.resize(width, height, { fit: 'inside', withoutEnlargement: true });

  if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: false, chromaSubsampling: '4:2:0' });
  }

  const optimized = await pipeline.toBuffer();

  // Only overwrite if smaller or if resized
  if (optimized.length < stat.size || scale < 1) {
    await fs.promises.writeFile(filePath, optimized);
    return { optimized: true, before: stat.size, after: optimized.length };
  }

  return { optimized: false, before: stat.size, after: stat.size };
}

async function run() {
  const files = await fs.promises.readdir(imgDir);
  let changed = 0;
  let savedBytes = 0;
  let failed = 0;

  for (const file of files) {
    const full = path.join(imgDir, file);
    const stat = await fs.promises.stat(full);
    if (!stat.isFile()) continue;

    try {
      const result = await optimizeFile(full);
      if (result && result.optimized) {
        changed += 1;
        savedBytes += Math.max(0, result.before - result.after);
      }
    } catch (err) {
      failed += 1;
      console.warn(`Skipped ${file}: ${err.message}`);
    }
  }

  const mb = (savedBytes / (1024 * 1024)).toFixed(2);
  console.log(`Optimized ${changed} images. Saved ~${mb} MB. Skipped ${failed} files.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
