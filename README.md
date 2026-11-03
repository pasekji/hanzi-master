# 汉字大师

Chinese superapp-inspired Hanzi learning mini-app for local HSK1 writing practice and word-bank review.

## Features
- 📚 69 writing characters + 47 compound words + 284 material-bank cards
- 🐼 今日训练 smart daily queue for review, new characters, and consolidation
- 🌐 中文 / English UI language switch
- 🎴 生词卡片 with related words
- ✍️ 写字练习 with touch stroke practice
- 🎯 每日测验 with 3 quiz modes
- 🐼 Panda learning buddy and SVG mini-program visuals
- 💾 Progress saved locally
- 🔑 Optional anonymous account (ID + one-time recovery code, no email/password) with progress sync across devices — see below
- ✈️ Downloadable complete offline ZIP for travel
- 🧾 Hidden `/secret` consolidated study sheet with 333 deduplicated entries
- 🔒 Local-only runtime: browser storage, vendored assets, no external APIs/CDNs
- 📱 Mobile-first WeChat/Alipay-inspired design

## Accounts & progress sync (privacy-first)
The app works fully offline with progress in `localStorage`. Optionally, an
anonymous account syncs progress to the server:

- No email, no password, no name — the account is a random `userId` plus a
  one-time recovery code (shown once at registration, only its scrypt hash
  is stored). Loss of the code means loss of the account.
- Sessions are random tokens in an `HttpOnly; SameSite=Strict` cookie,
  stored hashed, expiring after 30 days (sliding).
- The server stores only the progress document. No analytics, no request
  logging, no IP logging (Caddy access log strips IP/UA/Cookie/Referer).
- GDPR-style controls: `GET /api/account/export` downloads all data,
  `DELETE /api/account` erases the account and all server data.

API (all JSON, session cookie auth):
`POST /api/auth/register` · `POST /api/auth/login` · `POST /api/auth/logout` ·
`GET /api/auth/me` · `GET|PUT /api/progress` · `GET /api/account/export` ·
`DELETE /api/account` · `GET /api/health`

Storage: MongoDB when `MONGODB_URI` is set, otherwise a local JSON file
(`data/db.json`) — handy for local development.

## Deploy to the demo VPS
Per the `nasadit-na-vps` skill: rsync to `/opt/hanzi-master/` on
169.58.178.25, `docker compose build app && docker compose up -d`, Caddy
vhost fragment `deploy/hanzi-master.caddy` (served as
`hanzi-master.duckdns.org`), register in Uptime Kuma. Secrets live only in
`/opt/hanzi-master/.env` (chmod 600, covered by `.deployignore`).

## Deploy to Render.com
1. Push to GitHub
2. Connect repo on render.com
3. Auto-detects `render.yaml`
4. Deploy (works without `MONGODB_URI` — file storage, single instance only)

## Local Development
```bash
npm install
npm run build
npm start
# Open http://localhost:3000
```

## Source Layout
- `src/data.jsx`: base lesson data and material-bank queue helpers
- `src/material-repairs.jsx`: reviewed repairs for damaged HSK2, Book 3, and stroke imports
- `src/audio.jsx`: sound effects, ambience, and sound setting storage
- `src/i18n.jsx`: Chinese/English UI text and language storage
- `src/progress.jsx`: progress migration, queue logic, and quiz distractors
- `src/styles.css`: app UI system injected into the React shell at build time
- `src/app.jsx`: top-level React app shell and view routing
- `src/components.jsx`: shared SVGs, icons, toggles, and mini-program components
- `src/screens.jsx`: Home, lessons, learn, draw, quiz, and stats screens
- `src/secret.jsx`: hidden consolidated cheat sheet, reference tables, and vocabulary search
- `src/mount.jsx`: React mount point

`npm run build` concatenates these local files with `scripts/build-app.mjs`, writes `public/app.js`, and regenerates `public/hanzi-master-offline.zip`.

The complete study sheet is available at `/secret`. The extracted offline package supports the same view at `index.html#secret`.

## Content
- Lesson 12: Weather (天气)
- Lesson 13: Actions (正在进行)
- Lesson 14: Shopping (买东西)
- Lesson 15: Structure (是...的)
- HSK1 Word Bank: 150 cards with pinyin, English meaning, and examples from the source materials
- HSK2 material banks: reviewed lesson collections repaired against the source PPTX text layers
- Book 3 preview: small separated collection from the Book 3-labeled source files
- Basic strokes: 28 stroke cards read from the visual DOCX practice worksheets
- See `CONTENT_AUDIT.md` for the full source-material inventory and remaining import plan
