# Content Audit

Date: 2026-06-21
Source folder: `C:/Users/jirip/Downloads/cinstina`

## Source Inventory

- Total source files reviewed: 47.
- HSK1 sources: 21 files, covering lessons 1-15 plus one full HSK1 character/word practice PDF.
- HSK2 sources: 18 files. Text extraction found lessons 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, and 15.
- Book 3 sources: `L8.pptx`, `L12.pptx`, and `L14.pptx` identify themselves as book 3 material and should not be mixed into HSK2.
- General character/stroke sources: `Chinese character.pdf`, stroke-practice DOCX files, and the stroke explanation PPT.
- `print.pdf` extracted no usable text in the current pass, so it likely needs OCR or visual review.

## Current App Coverage

- Writing practice still uses the original local HSK1 lessons 12-15 set: 69 single-character cards and 47 related compounds.
- Imported material banks now add 256 local cards: 150 HSK1 word-bank cards, 96 first-pass HSK2 lesson cards, and 10 Book 3 preview cards.
- Imported cards have hanzi, pinyin, English meaning, example sentence, and source metadata.
- The app now exposes the HSK1 Word Bank from the home mini-program grid and exposes all material banks from the lesson map.
- Runtime remains local-only: browser storage, vendored libraries, no external APIs or CDNs.

## Not Imported Yet

- HSK1 lesson-by-lesson organization for lessons 1-11.
- HSK1 lesson dialogues, grammar explanations, drills, and pronunciation sections.
- Full HSK2 dialogues and grammar explanations. A first structured HSK2 card layer is imported, but not every source slide is represented.
- Full Book 3 lessons from `L8.pptx`, `L12.pptx`, and `L14.pptx`. A small preview card layer is imported separately so it is not mixed into HSK2.
- Visual-only stroke worksheets and `print.pdf` scan content.

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
