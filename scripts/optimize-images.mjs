// Generates WebP variants + favicon set from the originals in public/img.
// Run: node scripts/optimize-images.mjs   (re-run whenever you replace a photo)
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
const img = 'public/img';
const out = async (src, name, width, opts = {}) => {
  const info = await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 82, ...opts }).toFile(`${img}/${name}`);
  console.log(name.padEnd(26), `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)} KB`);
};
await out(`${img}/profile.jpg`, 'profile-480.webp', 480);
await out(`${img}/profile.jpg`, 'profile-900.webp', 900);
await out(`${img}/about.jpg`, 'about-420.webp', 420);
await out(`${img}/about.jpg`, 'about-675.webp', 675);
await out(`${img}/phd-thesis.png`, 'phd-thesis-640.webp', 640);
await out(`${img}/phd-thesis.png`, 'phd-thesis-112.webp', 112);
// Favicon / app icons from an SVG monogram matching the header wordmark
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#2f6fef"/><text x="29" y="47" font-family="Sora, Inter, Helvetica, Arial, sans-serif" font-weight="700" font-size="42" fill="#ffffff" text-anchor="middle">M</text><circle cx="53" cy="45" r="5.5" fill="#fb5c11"/></svg>`;
writeFileSync(`${img}/icon.svg`, svg);
for (const s of [32, 180, 192, 512]) {
  const info = await sharp(Buffer.from(svg)).resize(s, s).png().toFile(`${img}/icon-${s}.png`);
  console.log(`icon-${s}.png`.padEnd(26), `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)} KB`);
}
writeFileSync('public/manifest.webmanifest', JSON.stringify({
  name: 'Dr. Mohit Vaishnav', short_name: 'M. Vaishnav', start_url: '/', display: 'browser',
  background_color: '#ffffff', theme_color: '#2f6fef',
  icons: [{ src: '/img/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/img/icon-512.png', sizes: '512x512', type: 'image/png' }],
}, null, 2));
console.log('manifest.webmanifest written');
