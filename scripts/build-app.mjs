import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const sourceUrl = new URL('src/app.jsx', root);
const outputUrl = new URL('public/app.js', root);
const babelUrl = new URL('scripts/vendor/babel.min.js', root);

const babelCode = await readFile(babelUrl, 'utf8');
const sandbox = { console };
sandbox.window = sandbox.self = sandbox.globalThis = sandbox;
vm.runInNewContext(babelCode, sandbox, { filename: 'babel-standalone.js' });

const source = await readFile(sourceUrl, 'utf8');
const result = sandbox.Babel.transform(source, {
  presets: [['react', { runtime: 'classic' }]],
  comments: false,
  compact: false,
  sourceType: 'script',
  filename: 'src/app.jsx',
});

await writeFile(outputUrl, `${result.code}\n`, 'utf8');
console.log(`Built ${outputUrl.pathname}`);
