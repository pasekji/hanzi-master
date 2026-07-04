import { readFile, writeFile } from 'node:fs/promises';
import { deflateRawSync } from 'node:zlib';

const CRC_TABLE = Array.from({ length: 256 }, (_, value) => {
  let crc = value;
  for (let bit = 0; bit < 8; bit += 1) {
    crc = (crc & 1) ? (0xedb88320 ^ (crc >>> 1)) : (crc >>> 1);
  }
  return crc >>> 0;
});

const crc32 = (data) => {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
};

const getDosTimestamp = () => {
  const date = new Date('2026-01-01T00:00:00Z');
  const time = (date.getUTCHours() << 11)
    | (date.getUTCMinutes() << 5)
    | Math.floor(date.getUTCSeconds() / 2);
  const day = ((date.getUTCFullYear() - 1980) << 9)
    | ((date.getUTCMonth() + 1) << 5)
    | date.getUTCDate();
  return { time, day };
};

const createZip = (entries) => {
  const localParts = [];
  const centralParts = [];
  const { time, day } = getDosTimestamp();
  let localOffset = 0;

  entries.forEach(({ path, data }) => {
    const fileName = Buffer.from(path.replaceAll('\\', '/'), 'utf8');
    const compressed = deflateRawSync(data, { level: 9 });
    const checksum = crc32(data);

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0x0800, 6);
    localHeader.writeUInt16LE(8, 8);
    localHeader.writeUInt16LE(time, 10);
    localHeader.writeUInt16LE(day, 12);
    localHeader.writeUInt32LE(checksum, 14);
    localHeader.writeUInt32LE(compressed.length, 18);
    localHeader.writeUInt32LE(data.length, 22);
    localHeader.writeUInt16LE(fileName.length, 26);
    localHeader.writeUInt16LE(0, 28);
    localParts.push(localHeader, fileName, compressed);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0x0800, 8);
    centralHeader.writeUInt16LE(8, 10);
    centralHeader.writeUInt16LE(time, 12);
    centralHeader.writeUInt16LE(day, 14);
    centralHeader.writeUInt32LE(checksum, 16);
    centralHeader.writeUInt32LE(compressed.length, 20);
    centralHeader.writeUInt32LE(data.length, 24);
    centralHeader.writeUInt16LE(fileName.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(localOffset, 42);
    centralParts.push(centralHeader, fileName);

    localOffset += localHeader.length + fileName.length + compressed.length;
  });

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(localOffset, 16);
  end.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, centralDirectory, end]);
};

export async function createOfflineZip(root) {
  const packageRoot = 'hanzi-master-offline';
  const files = [
    'public/index.html',
    'public/app.js',
    'public/vendor/react.production.min.js',
    'public/vendor/react-dom.production.min.js',
    'public/vendor/hanzi-writer.min.js',
    'public/vendor/hanzi-strokes.js',
    'public/vendor/materials-data.js',
  ];
  const entries = await Promise.all(files.map(async (file) => ({
    path: `${packageRoot}/${file.replace(/^public\//, '')}`,
    data: await readFile(new URL(file, root)),
  })));
  entries.push({
    path: `${packageRoot}/README-OFFLINE.txt`,
    data: Buffer.from([
      'HANZI MASTER - OFFLINE COPY',
      '',
      '1. Extract the whole ZIP archive.',
      '2. Keep index.html, app.js, and the vendor folder together.',
      '3. Open index.html in Chrome, Edge, or Firefox.',
      '',
      'The app does not need an internet connection or external API.',
      'Learning progress stays in the browser storage on this device.',
      '',
    ].join('\r\n'), 'utf8'),
  });

  const outputUrl = new URL('public/hanzi-master-offline.zip', root);
  const zip = createZip(entries);
  await writeFile(outputUrl, zip);
  return { outputUrl, size: zip.length, entries: entries.length };
}
