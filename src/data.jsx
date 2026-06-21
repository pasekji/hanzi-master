// ============================================
// HSK1 VOCABULARY DATABASE - COMPLETE
// ============================================
const VOCABULARY = [
  // ========== LESSON 12 - Weather 天气 ==========
  { id: 1, hanzi: '天', pinyin: 'tiān', meaning: 'sky/day', lesson: 12, strokes: 4 },
  { id: 2, hanzi: '气', pinyin: 'qì', meaning: 'air/gas', lesson: 12, strokes: 4 },
  { id: 3, hanzi: '冷', pinyin: 'lěng', meaning: 'cold', lesson: 12, strokes: 7 },
  { id: 4, hanzi: '热', pinyin: 'rè', meaning: 'hot', lesson: 12, strokes: 10 },
  { id: 5, hanzi: '雨', pinyin: 'yǔ', meaning: 'rain', lesson: 12, strokes: 8 },
  { id: 6, hanzi: '下', pinyin: 'xià', meaning: 'down/below', lesson: 12, strokes: 3 },
  { id: 7, hanzi: '来', pinyin: 'lái', meaning: 'come', lesson: 12, strokes: 7 },
  { id: 8, hanzi: '去', pinyin: 'qù', meaning: 'go', lesson: 12, strokes: 5 },
  { id: 9, hanzi: '会', pinyin: 'huì', meaning: 'can/will', lesson: 12, strokes: 6 },
  { id: 10, hanzi: '身', pinyin: 'shēn', meaning: 'body', lesson: 12, strokes: 7 },
  { id: 11, hanzi: '体', pinyin: 'tǐ', meaning: 'body/form', lesson: 12, strokes: 7 },
  { id: 12, hanzi: '爱', pinyin: 'ài', meaning: 'love', lesson: 12, strokes: 10 },
  { id: 13, hanzi: '些', pinyin: 'xiē', meaning: 'some', lesson: 12, strokes: 8 },
  { id: 14, hanzi: '水', pinyin: 'shuǐ', meaning: 'water', lesson: 12, strokes: 4 },
  { id: 15, hanzi: '果', pinyin: 'guǒ', meaning: 'fruit', lesson: 12, strokes: 8 },
  { id: 16, hanzi: '太', pinyin: 'tài', meaning: 'too/very', lesson: 12, strokes: 4 },

  // ========== LESSON 13 - Actions in Progress ==========
  { id: 17, hanzi: '学', pinyin: 'xué', meaning: 'study/learn', lesson: 13, strokes: 8 },
  { id: 18, hanzi: '习', pinyin: 'xí', meaning: 'practice', lesson: 13, strokes: 3 },
  { id: 19, hanzi: '睡', pinyin: 'shuì', meaning: 'sleep', lesson: 13, strokes: 13 },
  { id: 20, hanzi: '觉', pinyin: 'jiào', meaning: 'feel/sleep', lesson: 13, strokes: 9 },
  { id: 21, hanzi: '午', pinyin: 'wǔ', meaning: 'noon', lesson: 13, strokes: 4 },
  { id: 22, hanzi: '上', pinyin: 'shàng', meaning: 'up/above', lesson: 13, strokes: 3 },
  { id: 23, hanzi: '电', pinyin: 'diàn', meaning: 'electric', lesson: 13, strokes: 5 },
  { id: 24, hanzi: '视', pinyin: 'shì', meaning: 'view/watch', lesson: 13, strokes: 8 },
  { id: 25, hanzi: '影', pinyin: 'yǐng', meaning: 'shadow/film', lesson: 13, strokes: 15 },
  { id: 26, hanzi: '脑', pinyin: 'nǎo', meaning: 'brain', lesson: 13, strokes: 10 },
  { id: 27, hanzi: '喜', pinyin: 'xǐ', meaning: 'happy/like', lesson: 13, strokes: 12 },
  { id: 28, hanzi: '欢', pinyin: 'huān', meaning: 'happy/joyful', lesson: 13, strokes: 6 },
  { id: 29, hanzi: '话', pinyin: 'huà', meaning: 'speech/words', lesson: 13, strokes: 8 },
  { id: 30, hanzi: '打', pinyin: 'dǎ', meaning: 'hit/make', lesson: 13, strokes: 5 },
  { id: 31, hanzi: '在', pinyin: 'zài', meaning: 'at/in; in progress', lesson: 13, strokes: 6 },
  { id: 32, hanzi: '做', pinyin: 'zuò', meaning: 'do/make', lesson: 13, strokes: 11 },
  { id: 33, hanzi: '饭', pinyin: 'fàn', meaning: 'rice/meal', lesson: 13, strokes: 7 },

  // ========== LESSON 14 - Shopping ==========
  { id: 34, hanzi: '东', pinyin: 'dōng', meaning: 'east', lesson: 14, strokes: 5 },
  { id: 35, hanzi: '西', pinyin: 'xī', meaning: 'west', lesson: 14, strokes: 6 },
  { id: 36, hanzi: '点', pinyin: 'diǎn', meaning: 'point/dot', lesson: 14, strokes: 9 },
  { id: 37, hanzi: '先', pinyin: 'xiān', meaning: 'first/before', lesson: 14, strokes: 6 },
  { id: 38, hanzi: '生', pinyin: 'shēng', meaning: 'life/birth', lesson: 14, strokes: 5 },
  { id: 39, hanzi: '看', pinyin: 'kàn', meaning: 'read/watch/look at', lesson: 14, strokes: 9 },
  { id: 40, hanzi: '见', pinyin: 'jiàn', meaning: 'see/meet', lesson: 14, strokes: 4 },
  { id: 41, hanzi: '开', pinyin: 'kāi', meaning: 'open/drive', lesson: 14, strokes: 4 },
  { id: 42, hanzi: '车', pinyin: 'chē', meaning: 'car/vehicle', lesson: 14, strokes: 4 },
  { id: 43, hanzi: '后', pinyin: 'hòu', meaning: 'after/behind', lesson: 14, strokes: 6 },
  { id: 44, hanzi: '漂', pinyin: 'piào', meaning: 'float/pretty', lesson: 14, strokes: 14 },
  { id: 45, hanzi: '亮', pinyin: 'liàng', meaning: 'bright', lesson: 14, strokes: 9 },
  { id: 46, hanzi: '衣', pinyin: 'yī', meaning: 'clothes', lesson: 14, strokes: 6 },
  { id: 47, hanzi: '服', pinyin: 'fú', meaning: 'clothes/serve', lesson: 14, strokes: 8 },
  { id: 48, hanzi: '少', pinyin: 'shǎo', meaning: 'few/less', lesson: 14, strokes: 4 },
  { id: 49, hanzi: '都', pinyin: 'dōu', meaning: 'all/both', lesson: 14, strokes: 10 },
  { id: 50, hanzi: '买', pinyin: 'mǎi', meaning: 'buy', lesson: 14, strokes: 6 },
  { id: 51, hanzi: '了', pinyin: 'le', meaning: 'completed-action particle', lesson: 12, strokes: 2 },
  { id: 52, hanzi: '没', pinyin: 'méi', meaning: 'not/no', lesson: 14, strokes: 7 },

  // ========== LESSON 15 - 是...的 Structure ==========
  { id: 53, hanzi: '认', pinyin: 'rèn', meaning: 'recognize', lesson: 15, strokes: 4 },
  { id: 54, hanzi: '识', pinyin: 'shí', meaning: 'know', lesson: 15, strokes: 7 },
  { id: 55, hanzi: '年', pinyin: 'nián', meaning: 'year', lesson: 15, strokes: 6 },
  { id: 56, hanzi: '店', pinyin: 'diàn', meaning: 'shop/store', lesson: 15, strokes: 8 },
  { id: 57, hanzi: '大', pinyin: 'dà', meaning: 'big/large', lesson: 15, strokes: 3 },
  { id: 58, hanzi: '起', pinyin: 'qǐ', meaning: 'rise/start', lesson: 15, strokes: 10 },
  { id: 59, hanzi: '听', pinyin: 'tīng', meaning: 'listen', lesson: 15, strokes: 7 },
  { id: 60, hanzi: '飞', pinyin: 'fēi', meaning: 'fly', lesson: 15, strokes: 3 },
  { id: 61, hanzi: '机', pinyin: 'jī', meaning: 'machine', lesson: 15, strokes: 6 },
  { id: 62, hanzi: '坐', pinyin: 'zuò', meaning: 'sit/ride', lesson: 15, strokes: 7 },
  { id: 63, hanzi: '火', pinyin: 'huǒ', meaning: 'fire', lesson: 15, strokes: 4 },
  { id: 64, hanzi: '走', pinyin: 'zǒu', meaning: 'walk/go', lesson: 15, strokes: 7 },
  { id: 65, hanzi: '路', pinyin: 'lù', meaning: 'road', lesson: 15, strokes: 13 },
  { id: 66, hanzi: '说', pinyin: 'shuō', meaning: 'speak/say', lesson: 15, strokes: 9 },
  { id: 67, hanzi: '校', pinyin: 'xiào', meaning: 'school', lesson: 15, strokes: 10 },
  { id: 68, hanzi: '同', pinyin: 'tóng', meaning: 'same/together', lesson: 15, strokes: 6 },
  { id: 69, hanzi: '一', pinyin: 'yī', meaning: 'one', lesson: 15, strokes: 1 },
];

const COMPOUNDS = [
  // Lesson 12
  { hanzi: '天气', pinyin: 'tiānqì', meaning: 'weather', lesson: 12 },
  { hanzi: '下雨', pinyin: 'xiàyǔ', meaning: 'to rain', lesson: 12 },
  { hanzi: '身体', pinyin: 'shēntǐ', meaning: 'body/health', lesson: 12 },
  { hanzi: '水果', pinyin: 'shuǐguǒ', meaning: 'fruit', lesson: 12 },
  { hanzi: '太热', pinyin: 'tài rè', meaning: 'too hot', lesson: 12 },
  { hanzi: '太冷', pinyin: 'tài lěng', meaning: 'too cold', lesson: 12 },
  { hanzi: '太热了', pinyin: 'tài rè le', meaning: 'too hot', lesson: 12 },
  { hanzi: '太冷了', pinyin: 'tài lěng le', meaning: 'too cold', lesson: 12 },
  // Lesson 13
  { hanzi: '学习', pinyin: 'xuéxí', meaning: 'to study', lesson: 13 },
  { hanzi: '学生', pinyin: 'xuéshēng', meaning: 'student', lesson: 13 },
  { hanzi: '睡觉', pinyin: 'shuìjiào', meaning: 'to sleep', lesson: 13 },
  { hanzi: '上午', pinyin: 'shàngwǔ', meaning: 'morning', lesson: 13 },
  { hanzi: '中午', pinyin: 'zhōngwǔ', meaning: 'noon', lesson: 13 },
  { hanzi: '下午', pinyin: 'xiàwǔ', meaning: 'afternoon', lesson: 13 },
  { hanzi: '早饭', pinyin: 'zǎofàn', meaning: 'breakfast', lesson: 13 },
  { hanzi: '午饭', pinyin: 'wǔfàn', meaning: 'lunch', lesson: 13 },
  { hanzi: '晚饭', pinyin: 'wǎnfàn', meaning: 'dinner', lesson: 13 },
  { hanzi: '电视', pinyin: 'diànshì', meaning: 'television', lesson: 13 },
  { hanzi: '电影', pinyin: 'diànyǐng', meaning: 'movie', lesson: 13 },
  { hanzi: '电脑', pinyin: 'diànnǎo', meaning: 'computer', lesson: 13 },
  { hanzi: '电话', pinyin: 'diànhuà', meaning: 'telephone', lesson: 13 },
  { hanzi: '喜欢', pinyin: 'xǐhuan', meaning: 'to like', lesson: 13 },
  { hanzi: '打电话', pinyin: 'dǎ diànhuà', meaning: 'make a call', lesson: 13 },
  { hanzi: '做饭', pinyin: 'zuòfàn', meaning: 'to cook', lesson: 13 },
  // Lesson 14
  { hanzi: '东西', pinyin: 'dōngxi', meaning: 'things', lesson: 14 },
  { hanzi: '一点儿', pinyin: 'yìdiǎnr', meaning: 'a little', lesson: 14 },
  { hanzi: '先生', pinyin: 'xiānsheng', meaning: 'Mr./sir', lesson: 14 },
  { hanzi: '看见', pinyin: 'kànjiàn', meaning: 'to see', lesson: 14 },
  { hanzi: '看书', pinyin: 'kànshū', meaning: 'to read a book', lesson: 14 },
  { hanzi: '开车', pinyin: 'kāichē', meaning: 'to drive', lesson: 14 },
  { hanzi: '坐车', pinyin: 'zuòchē', meaning: 'to ride by car', lesson: 14 },
  { hanzi: '漂亮', pinyin: 'piàoliang', meaning: 'beautiful', lesson: 14 },
  { hanzi: '衣服', pinyin: 'yīfu', meaning: 'clothes', lesson: 14 },
  { hanzi: '买东西', pinyin: 'mǎi dōngxi', meaning: 'to shop', lesson: 14 },
  // Lesson 15
  { hanzi: '认识', pinyin: 'rènshi', meaning: 'to know/meet', lesson: 15 },
  { hanzi: '饭店', pinyin: 'fàndiàn', meaning: 'restaurant/hotel', lesson: 15 },
  { hanzi: '商店', pinyin: 'shāngdiàn', meaning: 'store/shop', lesson: 15 },
  { hanzi: '大学', pinyin: 'dàxué', meaning: 'university', lesson: 15 },
  { hanzi: '一起', pinyin: 'yìqǐ', meaning: 'together', lesson: 15 },
  { hanzi: '听说', pinyin: 'tīngshuō', meaning: 'to hear that/overhear', lesson: 15 },
  { hanzi: '飞机', pinyin: 'fēijī', meaning: 'airplane', lesson: 15 },
  { hanzi: '手机', pinyin: 'shǒujī', meaning: 'cellphone', lesson: 15 },
  { hanzi: '火车', pinyin: 'huǒchē', meaning: 'train', lesson: 15 },
  { hanzi: '走路', pinyin: 'zǒulù', meaning: 'to walk', lesson: 15 },
  { hanzi: '学校', pinyin: 'xuéxiào', meaning: 'school', lesson: 15 },
  { hanzi: '同学', pinyin: 'tóngxué', meaning: 'classmate', lesson: 15 },
  { hanzi: '新年', pinyin: 'xīnnián', meaning: 'new year', lesson: 15 },
];

const MATERIAL_WORD_ITEMS = (
  typeof window !== 'undefined' && Array.isArray(window.HANZI_MATERIAL_WORDS)
    ? window.HANZI_MATERIAL_WORDS
    : []
).map((item, index) => ({
  id: item.id || 9000 + index,
  kind: 'word',
  hanzi: item.hanzi,
  pinyin: item.pinyin,
  meaning: item.meaning,
  example: item.example,
  source: item.source || 'HSK1 Word Bank',
  sourceFile: item.sourceFile,
}));

const normalizeMaterialItem = (item, index, collection = {}) => ({
  id: item.id || (collection.baseId || 9000) + index,
  kind: item.kind || 'word',
  hanzi: item.hanzi,
  pinyin: item.pinyin,
  meaning: item.meaning,
  example: item.example,
  source: item.source || collection.sourceFile || collection.labelEn || 'Course material',
  sourceFile: item.sourceFile || collection.sourceFile,
});

const MATERIAL_COLLECTIONS = (() => {
  const rawCollections = (
    typeof window !== 'undefined' && Array.isArray(window.HANZI_MATERIAL_COLLECTIONS)
      ? window.HANZI_MATERIAL_COLLECTIONS
      : []
  );

  if (rawCollections.length > 0) {
    return rawCollections.map((collection, index) => ({
      id: collection.id || `material-${index + 1}`,
      level: collection.level || 'Material',
      labelKey: collection.id === 'hsk1-word-bank' ? 'queue.hsk1Words' : collection.labelKey,
      labelZh: collection.labelZh,
      labelEn: collection.labelEn,
      chipZh: collection.chipZh,
      chipEn: collection.chipEn,
      sourceFile: collection.sourceFile,
      items: (collection.items || []).map((item, itemIndex) => normalizeMaterialItem(item, itemIndex, collection)),
    })).filter(collection => collection.items.length > 0);
  }

  return [{
    id: 'hsk1-word-bank',
    level: 'HSK1',
    labelKey: 'queue.hsk1Words',
    labelZh: 'HSK1 词语',
    labelEn: 'HSK1 Word Bank',
    chipZh: '词库',
    chipEn: 'Word bank',
    items: MATERIAL_WORD_ITEMS,
  }].filter(collection => collection.items.length > 0);
})();

const MATERIAL_COLLECTION_ITEMS = MATERIAL_COLLECTIONS.flatMap(collection => collection.items);

const getQueueDisplayLabel = (queue, t) => {
  if (!queue) return '';
  if (queue.labelKey) return t(queue.labelKey);
  const language = loadLanguage();
  return language === 'zh'
    ? (queue.labelZh || queue.labelEn || queue.id)
    : (queue.labelEn || queue.labelZh || queue.id);
};

const getQueueDisplayChip = (queue, t) => {
  if (!queue) return '';
  const language = loadLanguage();
  return language === 'zh'
    ? (queue.chipZh || queue.chipEn || queue.level || t('lessons.wordBankChip'))
    : (queue.chipEn || queue.chipZh || queue.level || t('lessons.wordBankChip'));
};

const getMaterialLevelLabel = (level) => {
  const language = loadLanguage();
  if (level === 'Basics') return language === 'zh' ? '\u57fa\u7840' : 'Basics';
  if (level === 'Book3') return language === 'zh' ? '\u7b2c3\u518c' : 'Book 3';
  return level || (language === 'zh' ? '\u6750\u6599' : 'Materials');
};

const getMaterialCollectionQueue = (collection) => ({
  id: collection.id,
  level: collection.level,
  labelKey: collection.labelKey,
  labelZh: collection.labelZh,
  labelEn: collection.labelEn,
  chipZh: collection.chipZh,
  chipEn: collection.chipEn,
  items: collection.items,
});

const getMaterialCollectionQueues = () => MATERIAL_COLLECTIONS.map(getMaterialCollectionQueue);

const getMaterialWordQueue = () => {
  const collection = MATERIAL_COLLECTIONS.find(item => item.id === 'hsk1-word-bank') || MATERIAL_COLLECTIONS[0];
  return collection ? getMaterialCollectionQueue(collection) : { id: 'empty-materials', labelKey: 'queue.hsk1Words', items: [] };
};

const STUDY_CATALOG = (() => {
  const byHanzi = new Map();
  [...VOCABULARY, ...MATERIAL_COLLECTION_ITEMS].forEach(item => {
    if (item?.hanzi && !byHanzi.has(item.hanzi)) byHanzi.set(item.hanzi, item);
  });
  return Array.from(byHanzi.values());
})();

