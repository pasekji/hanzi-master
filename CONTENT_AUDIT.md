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
- The imported material bank adds 150 HSK1 word cards from the HSK1 word-practice PDF.
- Each imported HSK1 word card has hanzi, pinyin, English meaning, example sentence, and source metadata.
- The app now exposes the HSK1 Word Bank from the home mini-program grid and from the lesson map.
- Runtime remains local-only: browser storage, vendored libraries, no external APIs or CDNs.

## Not Imported Yet

- HSK1 lesson-by-lesson organization for lessons 1-11.
- HSK1 lesson dialogues, grammar explanations, drills, and pronunciation sections.
- HSK2 vocabulary, phrases, dialogues, and grammar.
- Book 3 material from `L8.pptx`, `L12.pptx`, and `L14.pptx`.
- Visual-only stroke worksheets and `print.pdf` scan content.

## Organization Notes

- The current organization is safe but only partial: original writing lessons and the HSK1 Word Bank are separate collections.
- This avoids corrupting the writing flow with multi-character words that Hanzi Writer cannot quiz as one canvas item.
- The next best content step is to create lesson-scoped material collections, starting with HSK1 lessons 1-15, then HSK2.
- HSK2 should be imported carefully because many source slides contain pinyin and examples but not always clean English meanings.
