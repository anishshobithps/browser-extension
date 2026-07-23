import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/icon");

const MARK = "#ffffff";
const SIZES = [16, 32, 48, 96, 128];

const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="115"/>
  <g transform="translate(256 256) scale(5.8) translate(-32 -32)" fill="${MARK}">
    <polygon points="32,4 48,60 40.5,60 32,14 23.5,60 16,60"/>
    <rect x="18" y="36" width="11" height="5" rx="2.5"/>
    <rect x="35" y="36" width="11" height="5" rx="2.5"/>
  </g>
</svg>`;

await mkdir(outDir, { recursive: true });
const input = Buffer.from(svg);

for (const size of SIZES) {
  await sharp(input)
    .resize(size, size)
    .png()
    .toFile(resolve(outDir, `${size}.png`));
  console.log(`✓ icon/${size}.png`);
}
