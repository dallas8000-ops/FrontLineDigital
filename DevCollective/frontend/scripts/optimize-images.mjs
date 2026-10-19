// One-off image optimizer: writes a WebP next to each source image (max 1600px wide), for the <img> tags
// in src/. Originals stay for Open Graph and JSON-LD, which crawlers expect as PNG/JPEG.
// Usage: node scripts/optimize-images.mjs public/images/portfolio/foo.png [...]
import sharp from 'sharp'

for (const file of process.argv.slice(2)) {
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp')
  const info = await sharp(file).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out)
  console.log(`${file} -> ${out} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`)
}
