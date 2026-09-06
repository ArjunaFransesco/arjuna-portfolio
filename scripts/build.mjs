import { cp, mkdir, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const css = await readFile(path.join(root, 'assets/portfolio.css'), 'utf8');
const assets = [...html.matchAll(/(?:src|href)="\.\/([^"]+)"/g)].map(match => match[1]);
for (const match of css.matchAll(/url\(['"]?(\.\/[^)'"\s]+)/g)) {
  assets.push(path.join('assets', match[1]));
}
for (const asset of assets) {
  if (!(await stat(path.join(root, asset))).isFile()) throw new Error(`Missing asset: ${asset}`);
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate HTML IDs');
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.includes(match[1])) throw new Error(`Broken anchor: ${match[1]}`);
}
await mkdir(path.join(root, 'dist'), { recursive: true });
for (const entry of ['index.html', 'favicon.svg', '.nojekyll', 'assets']) {
  await cp(path.join(root, entry), path.join(root, 'dist', entry), { recursive: true });
}
console.log(`Built static site in dist; verified ${assets.length} asset references and all navigation anchors.`);
