# Content Audit

Date: 2026-07-05
Source folder: `C:/Users/jirip/Downloads/cinstina`

## Source Inventory

- Total source files reviewed: 47.
- HSK1 sources: 21 files, covering lessons 1-15 plus one full HSK1 character/word practice PDF.
- HSK2 sources: 18 files. Text extraction found lessons 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, and 15.
- Book 3 sources: `L8.pptx`, `L12.pptx`, and `L14.pptx` identify themselves as book 3 material and should not be mixed into HSK2.
- General character/stroke sources: `Chinese character.pdf`, stroke-practice DOCX files, and the stroke explanation PPT.
- `print.pdf` is a decorative library image with no learning text to OCR.

## Current App Coverage

- Writing practice still uses the original local HSK1 lessons 12-15 set: 69 single-character cards and 47 related compounds.
- Imported material banks now add 284 local cards: 150 HSK1 word-bank cards, 96 first-pass HSK2 lesson cards, 10 Book 3 preview cards, and 28 basic stroke cards read visually from the DOCX worksheets.
- Imported cards have hanzi, pinyin, English meaning, example sentence, and source metadata.
- 134 damaged placeholder records from the initial HSK2, Book 3, and stroke extraction were repaired against the source PPTX text layers and standard stroke names.
- The hidden `/secret` route consolidates 333 deduplicated vocabulary entries plus numbers, time/date forms, measure words, question words, tone changes, and 16 core grammar patterns.
- The app now exposes the HSK1 Word Bank from the home mini-program grid and exposes all material banks from the lesson map.
- Runtime remains local-only: browser storage, vendored libraries, no external APIs or CDNs.

## Not Imported Yet

- HSK1 lesson-by-lesson organization for lessons 1-11.
- HSK1 lesson dialogues, grammar explanations, drills, and pronunciation sections.
- Full HSK2 dialogues and grammar explanations. A first structured HSK2 card layer is imported, but not every source slide is represented.
- Full Book 3 lessons from `L8.pptx`, `L12.pptx`, and `L14.pptx`. A small preview card layer is imported separately so it is not mixed into HSK2.
- Remaining visual-only worksheet pages are mostly blank repetition grids; their labeled stroke overview has been imported.

## Organization Notes

- The current organization separates writing lessons from material banks.
- This avoids corrupting the writing flow with multi-character words that Hanzi Writer cannot quiz as one canvas item.
- Imported material banks now include the HSK1 Word Bank, first-pass HSK2 lesson collections, and a Book 3 preview collection.
- The next best content step is to create lesson-scoped HSK1 collections for lessons 1-15 and then expand HSK2 with dialogues/grammar after manual review.
- HSK2 is imported conservatively because many source slides contain pinyin and examples but not always clean English meanings.

## Imported Material Banks

- HSK1 Word Bank: 150 cards.
- HSK2 Lesson 1: 8 cards.
- HSK2 Lesson 2: 10 cards.
- HSK2 Lesson 3: 10 cards.
- HSK2 Lesson 4: 9 cards.
- HSK2 Lesson 5: 8 cards.
- HSK2 Lesson 6: 7 cards.
- HSK2 Lesson 7: 8 cards.
- HSK2 Lesson 9: 9 cards.
- HSK2 Lesson 10: 7 cards.
- HSK2 Lesson 11: 6 cards.
- HSK2 Lesson 13: 7 cards.
- HSK2 Lesson 15: 7 cards.
- Book 3 preview: 10 cards.
- Basic strokes: 28 cards.

## Content update 2026-11-15 (branch obsah-hsk2)

- +90 material cards from "Má tam být" (Excel hanzi-master-obsah-a-nova-slova.xlsx):
  appended to hsk2-lesson-7 (+20), hsk2-lesson-9 (+19), hsk2-lesson-10 (+13);
  new collections hsk2-lesson-8 (32) and class-whiteboard (6).
  IDs 10107–10196, no collisions with existing IDs. Written as proper UTF-8,
  no entries added to material-repairs.jsx.
- class-whiteboard (6 words) is an UNVERIFIED DeepSeek transcription of a
  whiteboard photo ("nepotvrzeno") — kept visible as such in the source field.
  Example sentences marked "Doplněno (Claude)" (13) were written by Claude, not
  the teacher — do not present them as slide content.
- 白, 黑, 服务员, 等 intentionally appear both in book3-preview and the new
  HSK2 sets (alsoInApp). Dedup by hanzi in STUDY_CATALOG keeps this safe;
  both entries remain reachable via their collections.
- +36 single characters (Psát=Ano) added to VOCABULARY (id 70–105, book 'hsk2',
  lessons 7–10) with stroke data from hanzi-writer-data@2.0.1 appended to
  hanzi-strokes.js (Arphic Public License data, same handling as before).
  Per-character pinyin/meaning filled in manually (see /tmp/chars-report.txt).
- LessonsView/StatsView now group VOCABULARY dynamically by lesson (HSK2
  labelled separately). Quiz can now run on any material collection (shuffled,
  deduped options); daily queue unchanged.
- Totals: 105 writable characters, 47 compounds, 374 material cards,
  427 deduplicated entries on /secret.
