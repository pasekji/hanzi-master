import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
import { createOfflineZip } from './create-offline-zip.mjs';

const root = new URL('../', import.meta.url);
const outputUrl = new URL('public/app.js', root);
const babelUrl = new URL('scripts/vendor/babel.min.js', root);
const stylesUrl = new URL('src/styles.css', root);
const sourceFiles = [
  'src/material-repairs.jsx',
  'src/data.jsx',
  'src/mnemonics.jsx',
  'src/audio.jsx',
  'src/i18n.jsx',
  'src/progress.jsx',
  'src/app.jsx',
  'src/components.jsx',
  'src/screens.jsx',
  'src/example-annotations.jsx',
  'src/secret.jsx',
  'src/mount.jsx',
];

const babelCode = await readFile(babelUrl, 'utf8');
const sandbox = { console };
sandbox.window = sandbox.self = sandbox.globalThis = sandbox;
vm.runInNewContext(babelCode, sandbox, { filename: 'babel-standalone.js' });

const styles = await readFile(stylesUrl, 'utf8');
const sourceChunks = [];
for (const sourceFile of sourceFiles) {
  sourceChunks.push(await readFile(new URL(sourceFile, root), 'utf8'));
}
const styleInsertionIndex = sourceFiles.indexOf('src/progress.jsx') + 1;
const source = [
  '// Built from local source modules by scripts/build-app.mjs.',
  ...sourceChunks.slice(0, styleInsertionIndex),
  `const styles = ${JSON.stringify(styles)};`,
  ...sourceChunks.slice(styleInsertionIndex),
].join('\n\n');
const result = sandbox.Babel.transform(source, {
  presets: [['react', { runtime: 'classic' }]],
  comments: false,
  compact: false,
  sourceType: 'script',
  filename: 'src/main.jsx',
});

await writeFile(outputUrl, `${result.code}\n`, 'utf8');
console.log(`Built ${outputUrl.pathname}`);

const scriptAssets = [
  'vendor/react.production.min.js',
  'vendor/react-dom.production.min.js',
  'vendor/hanzi-writer.min.js',
  'vendor/hanzi-strokes.js',
  'vendor/materials-data.js',
  'app.js',
];
const indexUrl = new URL('public/index.html', root);
let indexHtml = await readFile(indexUrl, 'utf8');
for (const asset of scriptAssets) {
  const assetContent = await readFile(new URL(`public/${asset}`, root));
  const version = createHash('sha256').update(assetContent).digest('hex').slice(0, 12);
  const escapedAsset = asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  indexHtml = indexHtml.replace(
    new RegExp(`src="${escapedAsset}(?:\\?v=[^"]*)?"`),
    `src="${asset}?v=${version}"`,
  );
}
await writeFile(indexUrl, indexHtml, 'utf8');
console.log(`Versioned ${scriptAssets.length} script assets`);

const offlinePackage = await createOfflineZip(root);
console.log(`Built ${offlinePackage.outputUrl.pathname} (${offlinePackage.entries} files, ${offlinePackage.size} bytes)`);
