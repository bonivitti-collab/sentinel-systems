import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { FERRAMENTAS } from '../src/data/ferramentas.ts';
import { PRODUCT_LANDINGS, ferramentaOf } from '../src/data/productLandings.ts';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');

if (process.env.SENTINEL_OG_FONTS !== '1') {
  const fontsDir = path.join(scriptDir, 'fonts');
  const cacheDir = path.join(os.tmpdir(), 'sentinel-og-fontcache');
  fs.mkdirSync(cacheDir, { recursive: true });
  const confPath = path.join(os.tmpdir(), 'sentinel-og-fonts.conf');
  fs.writeFileSync(
    confPath,
    `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${fontsDir}</dir>
  <cachedir>${cacheDir}</cachedir>
</fontconfig>
`,
  );
  execFileSync('npx', ['tsx', fileURLToPath(import.meta.url)], {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, FONTCONFIG_FILE: confPath, SENTINEL_OG_FONTS: '1' },
  });
  process.exit(0);
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function wrap(text: string, maxChars: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function roundedCover(file: string, size: number): Promise<Buffer> {
  const radius = 36;
  const resized = await sharp(file).resize(size, size, { fit: 'cover', position: 'centre' }).png().toBuffer();
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`,
  );
  return sharp(resized).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
}

function cardSvg(name: string, line: string, price: string): string {
  const nameSize = name.length > 12 ? 52 : 68;
  const nameLines = wrap(name, name.length > 12 ? 16 : 18);
  const lineLines = wrap(line, 34);
  const nameStart = 214;
  const nameStep = nameSize + 8;
  const lineStart = nameStart + nameLines.length * nameStep + 18;
  const nameText = nameLines
    .map(
      (entry, index) =>
        `<text x="56" y="${nameStart + index * nameStep}" font-family="Plus Jakarta Sans" font-weight="800" font-size="${nameSize}" fill="#0F172A">${escapeXml(entry)}</text>`,
    )
    .join('');
  const lineText = lineLines
    .map(
      (entry, index) =>
        `<text x="56" y="${lineStart + index * 34}" font-family="Plus Jakarta Sans" font-weight="600" font-size="24" fill="#334155">${escapeXml(entry)}</text>`,
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00C4DF"/>
      <stop offset="0.55" stop-color="#0284C7"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="#0F172A" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="#F7FBFC"/>
  <circle cx="160" cy="560" r="240" fill="#00C4DF" opacity="0.10"/>
  <circle cx="1120" cy="40" r="160" fill="#7C3AED" opacity="0.07"/>
  <rect width="1200" height="8" fill="url(#bar)"/>
  <text x="124" y="84" font-family="Plus Jakarta Sans" font-weight="600" font-size="20" fill="#64748B">Sentinel</text>
  <rect x="56" y="118" width="132" height="34" rx="17" fill="#ECFEFF" stroke="#A5F3FC"/>
  <text x="78" y="141" font-family="Plus Jakarta Sans" font-weight="700" font-size="14" letter-spacing="1.4" fill="#0E7490">PLANILHA</text>
  ${nameText}
  ${lineText}
  <rect x="56" y="478" width="470" height="112" rx="28" fill="#FFFFFF" stroke="#00C4DF" stroke-width="4"/>
  <text x="84" y="556" font-family="Plus Jakarta Sans" font-weight="800" font-size="72" fill="#0F172A">${escapeXml(price)}</text>
  <rect x="640" y="58" width="508" height="508" rx="36" fill="#FFFFFF" filter="url(#shadow)"/>
</svg>`;
}

async function main(): Promise<void> {
  const outDir = path.join(rootDir, 'public/og');
  fs.mkdirSync(outDir, { recursive: true });
  const logo = await sharp(path.join(rootDir, 'public/icon-512.png')).resize(52, 52).png().toBuffer();

  for (const product of PRODUCT_LANDINGS) {
    const item = ferramentaOf(product);
    const known = FERRAMENTAS.find((entry) => entry.id === item.id);
    if (!known || known.priceLabel !== 'R$ 9,90') {
      throw new Error(`Preço inesperado para ${product.id}`);
    }
    const cover = await roundedCover(path.join(rootDir, 'public', item.image.replace(/^\//, '')), 508);
    const base = await sharp(Buffer.from(cardSvg(item.name, product.coverLine, item.priceLabel))).png().toBuffer();
    const file = path.join(outDir, product.ogFile);
    await sharp(base)
      .composite([
        { input: logo, left: 56, top: 44 },
        { input: cover, left: 640, top: 58 },
      ])
      .png({ compressionLevel: 9 })
      .toFile(file);
    const meta = await sharp(file).metadata();
    if (meta.width !== 1200 || meta.height !== 630) {
      throw new Error(`${product.ogFile} saiu ${meta.width}x${meta.height}`);
    }
    console.log(`[og] ${file} ${meta.width}x${meta.height}`);
  }
}

await main();
