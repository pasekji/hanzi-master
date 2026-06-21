function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VOCABULARY = [{
  id: 1,
  hanzi: '天',
  pinyin: 'tiān',
  meaning: 'sky/day',
  lesson: 12,
  strokes: 4
}, {
  id: 2,
  hanzi: '气',
  pinyin: 'qì',
  meaning: 'air/gas',
  lesson: 12,
  strokes: 4
}, {
  id: 3,
  hanzi: '冷',
  pinyin: 'lěng',
  meaning: 'cold',
  lesson: 12,
  strokes: 7
}, {
  id: 4,
  hanzi: '热',
  pinyin: 'rè',
  meaning: 'hot',
  lesson: 12,
  strokes: 10
}, {
  id: 5,
  hanzi: '雨',
  pinyin: 'yǔ',
  meaning: 'rain',
  lesson: 12,
  strokes: 8
}, {
  id: 6,
  hanzi: '下',
  pinyin: 'xià',
  meaning: 'down/below',
  lesson: 12,
  strokes: 3
}, {
  id: 7,
  hanzi: '来',
  pinyin: 'lái',
  meaning: 'come',
  lesson: 12,
  strokes: 7
}, {
  id: 8,
  hanzi: '去',
  pinyin: 'qù',
  meaning: 'go',
  lesson: 12,
  strokes: 5
}, {
  id: 9,
  hanzi: '会',
  pinyin: 'huì',
  meaning: 'can/will',
  lesson: 12,
  strokes: 6
}, {
  id: 10,
  hanzi: '身',
  pinyin: 'shēn',
  meaning: 'body',
  lesson: 12,
  strokes: 7
}, {
  id: 11,
  hanzi: '体',
  pinyin: 'tǐ',
  meaning: 'body/form',
  lesson: 12,
  strokes: 7
}, {
  id: 12,
  hanzi: '爱',
  pinyin: 'ài',
  meaning: 'love',
  lesson: 12,
  strokes: 10
}, {
  id: 13,
  hanzi: '些',
  pinyin: 'xiē',
  meaning: 'some',
  lesson: 12,
  strokes: 8
}, {
  id: 14,
  hanzi: '水',
  pinyin: 'shuǐ',
  meaning: 'water',
  lesson: 12,
  strokes: 4
}, {
  id: 15,
  hanzi: '果',
  pinyin: 'guǒ',
  meaning: 'fruit',
  lesson: 12,
  strokes: 8
}, {
  id: 16,
  hanzi: '太',
  pinyin: 'tài',
  meaning: 'too/very',
  lesson: 12,
  strokes: 4
}, {
  id: 17,
  hanzi: '学',
  pinyin: 'xué',
  meaning: 'study/learn',
  lesson: 13,
  strokes: 8
}, {
  id: 18,
  hanzi: '习',
  pinyin: 'xí',
  meaning: 'practice',
  lesson: 13,
  strokes: 3
}, {
  id: 19,
  hanzi: '睡',
  pinyin: 'shuì',
  meaning: 'sleep',
  lesson: 13,
  strokes: 13
}, {
  id: 20,
  hanzi: '觉',
  pinyin: 'jiào',
  meaning: 'feel/sleep',
  lesson: 13,
  strokes: 9
}, {
  id: 21,
  hanzi: '午',
  pinyin: 'wǔ',
  meaning: 'noon',
  lesson: 13,
  strokes: 4
}, {
  id: 22,
  hanzi: '上',
  pinyin: 'shàng',
  meaning: 'up/above',
  lesson: 13,
  strokes: 3
}, {
  id: 23,
  hanzi: '电',
  pinyin: 'diàn',
  meaning: 'electric',
  lesson: 13,
  strokes: 5
}, {
  id: 24,
  hanzi: '视',
  pinyin: 'shì',
  meaning: 'view/watch',
  lesson: 13,
  strokes: 8
}, {
  id: 25,
  hanzi: '影',
  pinyin: 'yǐng',
  meaning: 'shadow/film',
  lesson: 13,
  strokes: 15
}, {
  id: 26,
  hanzi: '脑',
  pinyin: 'nǎo',
  meaning: 'brain',
  lesson: 13,
  strokes: 10
}, {
  id: 27,
  hanzi: '喜',
  pinyin: 'xǐ',
  meaning: 'happy/like',
  lesson: 13,
  strokes: 12
}, {
  id: 28,
  hanzi: '欢',
  pinyin: 'huān',
  meaning: 'happy/joyful',
  lesson: 13,
  strokes: 6
}, {
  id: 29,
  hanzi: '话',
  pinyin: 'huà',
  meaning: 'speech/words',
  lesson: 13,
  strokes: 8
}, {
  id: 30,
  hanzi: '打',
  pinyin: 'dǎ',
  meaning: 'hit/make',
  lesson: 13,
  strokes: 5
}, {
  id: 31,
  hanzi: '在',
  pinyin: 'zài',
  meaning: 'at/in; in progress',
  lesson: 13,
  strokes: 6
}, {
  id: 32,
  hanzi: '做',
  pinyin: 'zuò',
  meaning: 'do/make',
  lesson: 13,
  strokes: 11
}, {
  id: 33,
  hanzi: '饭',
  pinyin: 'fàn',
  meaning: 'rice/meal',
  lesson: 13,
  strokes: 7
}, {
  id: 34,
  hanzi: '东',
  pinyin: 'dōng',
  meaning: 'east',
  lesson: 14,
  strokes: 5
}, {
  id: 35,
  hanzi: '西',
  pinyin: 'xī',
  meaning: 'west',
  lesson: 14,
  strokes: 6
}, {
  id: 36,
  hanzi: '点',
  pinyin: 'diǎn',
  meaning: 'point/dot',
  lesson: 14,
  strokes: 9
}, {
  id: 37,
  hanzi: '先',
  pinyin: 'xiān',
  meaning: 'first/before',
  lesson: 14,
  strokes: 6
}, {
  id: 38,
  hanzi: '生',
  pinyin: 'shēng',
  meaning: 'life/birth',
  lesson: 14,
  strokes: 5
}, {
  id: 39,
  hanzi: '看',
  pinyin: 'kàn',
  meaning: 'read/watch/look at',
  lesson: 14,
  strokes: 9
}, {
  id: 40,
  hanzi: '见',
  pinyin: 'jiàn',
  meaning: 'see/meet',
  lesson: 14,
  strokes: 4
}, {
  id: 41,
  hanzi: '开',
  pinyin: 'kāi',
  meaning: 'open/drive',
  lesson: 14,
  strokes: 4
}, {
  id: 42,
  hanzi: '车',
  pinyin: 'chē',
  meaning: 'car/vehicle',
  lesson: 14,
  strokes: 4
}, {
  id: 43,
  hanzi: '后',
  pinyin: 'hòu',
  meaning: 'after/behind',
  lesson: 14,
  strokes: 6
}, {
  id: 44,
  hanzi: '漂',
  pinyin: 'piào',
  meaning: 'float/pretty',
  lesson: 14,
  strokes: 14
}, {
  id: 45,
  hanzi: '亮',
  pinyin: 'liàng',
  meaning: 'bright',
  lesson: 14,
  strokes: 9
}, {
  id: 46,
  hanzi: '衣',
  pinyin: 'yī',
  meaning: 'clothes',
  lesson: 14,
  strokes: 6
}, {
  id: 47,
  hanzi: '服',
  pinyin: 'fú',
  meaning: 'clothes/serve',
  lesson: 14,
  strokes: 8
}, {
  id: 48,
  hanzi: '少',
  pinyin: 'shǎo',
  meaning: 'few/less',
  lesson: 14,
  strokes: 4
}, {
  id: 49,
  hanzi: '都',
  pinyin: 'dōu',
  meaning: 'all/both',
  lesson: 14,
  strokes: 10
}, {
  id: 50,
  hanzi: '买',
  pinyin: 'mǎi',
  meaning: 'buy',
  lesson: 14,
  strokes: 6
}, {
  id: 51,
  hanzi: '了',
  pinyin: 'le',
  meaning: 'completed-action particle',
  lesson: 12,
  strokes: 2
}, {
  id: 52,
  hanzi: '没',
  pinyin: 'méi',
  meaning: 'not/no',
  lesson: 14,
  strokes: 7
}, {
  id: 53,
  hanzi: '认',
  pinyin: 'rèn',
  meaning: 'recognize',
  lesson: 15,
  strokes: 4
}, {
  id: 54,
  hanzi: '识',
  pinyin: 'shí',
  meaning: 'know',
  lesson: 15,
  strokes: 7
}, {
  id: 55,
  hanzi: '年',
  pinyin: 'nián',
  meaning: 'year',
  lesson: 15,
  strokes: 6
}, {
  id: 56,
  hanzi: '店',
  pinyin: 'diàn',
  meaning: 'shop/store',
  lesson: 15,
  strokes: 8
}, {
  id: 57,
  hanzi: '大',
  pinyin: 'dà',
  meaning: 'big/large',
  lesson: 15,
  strokes: 3
}, {
  id: 58,
  hanzi: '起',
  pinyin: 'qǐ',
  meaning: 'rise/start',
  lesson: 15,
  strokes: 10
}, {
  id: 59,
  hanzi: '听',
  pinyin: 'tīng',
  meaning: 'listen',
  lesson: 15,
  strokes: 7
}, {
  id: 60,
  hanzi: '飞',
  pinyin: 'fēi',
  meaning: 'fly',
  lesson: 15,
  strokes: 3
}, {
  id: 61,
  hanzi: '机',
  pinyin: 'jī',
  meaning: 'machine',
  lesson: 15,
  strokes: 6
}, {
  id: 62,
  hanzi: '坐',
  pinyin: 'zuò',
  meaning: 'sit/ride',
  lesson: 15,
  strokes: 7
}, {
  id: 63,
  hanzi: '火',
  pinyin: 'huǒ',
  meaning: 'fire',
  lesson: 15,
  strokes: 4
}, {
  id: 64,
  hanzi: '走',
  pinyin: 'zǒu',
  meaning: 'walk/go',
  lesson: 15,
  strokes: 7
}, {
  id: 65,
  hanzi: '路',
  pinyin: 'lù',
  meaning: 'road',
  lesson: 15,
  strokes: 13
}, {
  id: 66,
  hanzi: '说',
  pinyin: 'shuō',
  meaning: 'speak/say',
  lesson: 15,
  strokes: 9
}, {
  id: 67,
  hanzi: '校',
  pinyin: 'xiào',
  meaning: 'school',
  lesson: 15,
  strokes: 10
}, {
  id: 68,
  hanzi: '同',
  pinyin: 'tóng',
  meaning: 'same/together',
  lesson: 15,
  strokes: 6
}, {
  id: 69,
  hanzi: '一',
  pinyin: 'yī',
  meaning: 'one',
  lesson: 15,
  strokes: 1
}];
const COMPOUNDS = [{
  hanzi: '天气',
  pinyin: 'tiānqì',
  meaning: 'weather',
  lesson: 12
}, {
  hanzi: '下雨',
  pinyin: 'xiàyǔ',
  meaning: 'to rain',
  lesson: 12
}, {
  hanzi: '身体',
  pinyin: 'shēntǐ',
  meaning: 'body/health',
  lesson: 12
}, {
  hanzi: '水果',
  pinyin: 'shuǐguǒ',
  meaning: 'fruit',
  lesson: 12
}, {
  hanzi: '太热',
  pinyin: 'tài rè',
  meaning: 'too hot',
  lesson: 12
}, {
  hanzi: '太冷',
  pinyin: 'tài lěng',
  meaning: 'too cold',
  lesson: 12
}, {
  hanzi: '太热了',
  pinyin: 'tài rè le',
  meaning: 'too hot',
  lesson: 12
}, {
  hanzi: '太冷了',
  pinyin: 'tài lěng le',
  meaning: 'too cold',
  lesson: 12
}, {
  hanzi: '学习',
  pinyin: 'xuéxí',
  meaning: 'to study',
  lesson: 13
}, {
  hanzi: '学生',
  pinyin: 'xuéshēng',
  meaning: 'student',
  lesson: 13
}, {
  hanzi: '睡觉',
  pinyin: 'shuìjiào',
  meaning: 'to sleep',
  lesson: 13
}, {
  hanzi: '上午',
  pinyin: 'shàngwǔ',
  meaning: 'morning',
  lesson: 13
}, {
  hanzi: '中午',
  pinyin: 'zhōngwǔ',
  meaning: 'noon',
  lesson: 13
}, {
  hanzi: '下午',
  pinyin: 'xiàwǔ',
  meaning: 'afternoon',
  lesson: 13
}, {
  hanzi: '早饭',
  pinyin: 'zǎofàn',
  meaning: 'breakfast',
  lesson: 13
}, {
  hanzi: '午饭',
  pinyin: 'wǔfàn',
  meaning: 'lunch',
  lesson: 13
}, {
  hanzi: '晚饭',
  pinyin: 'wǎnfàn',
  meaning: 'dinner',
  lesson: 13
}, {
  hanzi: '电视',
  pinyin: 'diànshì',
  meaning: 'television',
  lesson: 13
}, {
  hanzi: '电影',
  pinyin: 'diànyǐng',
  meaning: 'movie',
  lesson: 13
}, {
  hanzi: '电脑',
  pinyin: 'diànnǎo',
  meaning: 'computer',
  lesson: 13
}, {
  hanzi: '电话',
  pinyin: 'diànhuà',
  meaning: 'telephone',
  lesson: 13
}, {
  hanzi: '喜欢',
  pinyin: 'xǐhuan',
  meaning: 'to like',
  lesson: 13
}, {
  hanzi: '打电话',
  pinyin: 'dǎ diànhuà',
  meaning: 'make a call',
  lesson: 13
}, {
  hanzi: '做饭',
  pinyin: 'zuòfàn',
  meaning: 'to cook',
  lesson: 13
}, {
  hanzi: '东西',
  pinyin: 'dōngxi',
  meaning: 'things',
  lesson: 14
}, {
  hanzi: '一点儿',
  pinyin: 'yìdiǎnr',
  meaning: 'a little',
  lesson: 14
}, {
  hanzi: '先生',
  pinyin: 'xiānsheng',
  meaning: 'Mr./sir',
  lesson: 14
}, {
  hanzi: '看见',
  pinyin: 'kànjiàn',
  meaning: 'to see',
  lesson: 14
}, {
  hanzi: '看书',
  pinyin: 'kànshū',
  meaning: 'to read a book',
  lesson: 14
}, {
  hanzi: '开车',
  pinyin: 'kāichē',
  meaning: 'to drive',
  lesson: 14
}, {
  hanzi: '坐车',
  pinyin: 'zuòchē',
  meaning: 'to ride by car',
  lesson: 14
}, {
  hanzi: '漂亮',
  pinyin: 'piàoliang',
  meaning: 'beautiful',
  lesson: 14
}, {
  hanzi: '衣服',
  pinyin: 'yīfu',
  meaning: 'clothes',
  lesson: 14
}, {
  hanzi: '买东西',
  pinyin: 'mǎi dōngxi',
  meaning: 'to shop',
  lesson: 14
}, {
  hanzi: '认识',
  pinyin: 'rènshi',
  meaning: 'to know/meet',
  lesson: 15
}, {
  hanzi: '饭店',
  pinyin: 'fàndiàn',
  meaning: 'restaurant/hotel',
  lesson: 15
}, {
  hanzi: '商店',
  pinyin: 'shāngdiàn',
  meaning: 'store/shop',
  lesson: 15
}, {
  hanzi: '大学',
  pinyin: 'dàxué',
  meaning: 'university',
  lesson: 15
}, {
  hanzi: '一起',
  pinyin: 'yìqǐ',
  meaning: 'together',
  lesson: 15
}, {
  hanzi: '听说',
  pinyin: 'tīngshuō',
  meaning: 'to hear that/overhear',
  lesson: 15
}, {
  hanzi: '飞机',
  pinyin: 'fēijī',
  meaning: 'airplane',
  lesson: 15
}, {
  hanzi: '手机',
  pinyin: 'shǒujī',
  meaning: 'cellphone',
  lesson: 15
}, {
  hanzi: '火车',
  pinyin: 'huǒchē',
  meaning: 'train',
  lesson: 15
}, {
  hanzi: '走路',
  pinyin: 'zǒulù',
  meaning: 'to walk',
  lesson: 15
}, {
  hanzi: '学校',
  pinyin: 'xuéxiào',
  meaning: 'school',
  lesson: 15
}, {
  hanzi: '同学',
  pinyin: 'tóngxué',
  meaning: 'classmate',
  lesson: 15
}, {
  hanzi: '新年',
  pinyin: 'xīnnián',
  meaning: 'new year',
  lesson: 15
}];
const MATERIAL_WORD_ITEMS = (typeof window !== 'undefined' && Array.isArray(window.HANZI_MATERIAL_WORDS) ? window.HANZI_MATERIAL_WORDS : []).map((item, index) => ({
  id: item.id || 9000 + index,
  kind: 'word',
  hanzi: item.hanzi,
  pinyin: item.pinyin,
  meaning: item.meaning,
  example: item.example,
  source: item.source || 'HSK1 Word Bank',
  sourceFile: item.sourceFile
}));
const normalizeMaterialItem = (item, index, collection = {}) => ({
  id: item.id || (collection.baseId || 9000) + index,
  kind: item.kind || 'word',
  hanzi: item.hanzi,
  pinyin: item.pinyin,
  meaning: item.meaning,
  example: item.example,
  source: item.source || collection.sourceFile || collection.labelEn || 'Course material',
  sourceFile: item.sourceFile || collection.sourceFile
});
const MATERIAL_COLLECTIONS = (() => {
  const rawCollections = typeof window !== 'undefined' && Array.isArray(window.HANZI_MATERIAL_COLLECTIONS) ? window.HANZI_MATERIAL_COLLECTIONS : [];
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
      items: (collection.items || []).map((item, itemIndex) => normalizeMaterialItem(item, itemIndex, collection))
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
    items: MATERIAL_WORD_ITEMS
  }].filter(collection => collection.items.length > 0);
})();
const MATERIAL_COLLECTION_ITEMS = MATERIAL_COLLECTIONS.flatMap(collection => collection.items);
const getQueueDisplayLabel = (queue, t) => {
  if (!queue) return '';
  if (queue.labelKey) return t(queue.labelKey);
  const language = loadLanguage();
  return language === 'zh' ? queue.labelZh || queue.labelEn || queue.id : queue.labelEn || queue.labelZh || queue.id;
};
const getQueueDisplayChip = (queue, t) => {
  if (!queue) return '';
  const language = loadLanguage();
  return language === 'zh' ? queue.chipZh || queue.chipEn || queue.level || t('lessons.wordBankChip') : queue.chipEn || queue.chipZh || queue.level || t('lessons.wordBankChip');
};
const getMaterialLevelLabel = level => {
  const language = loadLanguage();
  if (level === 'Basics') return language === 'zh' ? '\u57fa\u7840' : 'Basics';
  if (level === 'Book3') return language === 'zh' ? '\u7b2c3\u518c' : 'Book 3';
  return level || (language === 'zh' ? '\u6750\u6599' : 'Materials');
};
const getMaterialCollectionQueue = collection => ({
  id: collection.id,
  level: collection.level,
  labelKey: collection.labelKey,
  labelZh: collection.labelZh,
  labelEn: collection.labelEn,
  chipZh: collection.chipZh,
  chipEn: collection.chipEn,
  items: collection.items
});
const getMaterialCollectionQueues = () => MATERIAL_COLLECTIONS.map(getMaterialCollectionQueue);
const getMaterialWordQueue = () => {
  const collection = MATERIAL_COLLECTIONS.find(item => item.id === 'hsk1-word-bank') || MATERIAL_COLLECTIONS[0];
  return collection ? getMaterialCollectionQueue(collection) : {
    id: 'empty-materials',
    labelKey: 'queue.hsk1Words',
    items: []
  };
};
const STUDY_CATALOG = (() => {
  const byHanzi = new Map();
  [...VOCABULARY, ...MATERIAL_COLLECTION_ITEMS].forEach(item => {
    if (item?.hanzi && !byHanzi.has(item.hanzi)) byHanzi.set(item.hanzi, item);
  });
  return Array.from(byHanzi.values());
})();
const STORAGE_KEY = 'hanzi_master_v3';
const LANGUAGE_KEY = 'hanzi_master_ui_language';
const SOUND_KEY = 'hanzi_master_sound_enabled';
const AMBIENCE_KEY = 'hanzi_master_ambience_enabled';
const SOUND_PATTERNS = {
  tap: [{
    frequency: 520,
    start: 0,
    duration: 0.045,
    gain: 0.022,
    type: 'triangle'
  }],
  select: [{
    frequency: 520,
    start: 0,
    duration: 0.055,
    gain: 0.03,
    type: 'triangle'
  }, {
    frequency: 680,
    start: 0.045,
    duration: 0.07,
    gain: 0.026,
    type: 'sine'
  }],
  stroke: [{
    frequency: 640,
    start: 0,
    duration: 0.035,
    gain: 0.018,
    type: 'sine'
  }],
  correct: [{
    frequency: 660,
    start: 0,
    duration: 0.08,
    gain: 0.04,
    type: 'sine'
  }, {
    frequency: 880,
    start: 0.07,
    duration: 0.1,
    gain: 0.036,
    type: 'sine'
  }],
  wrong: [{
    frequency: 185,
    start: 0,
    duration: 0.09,
    gain: 0.035,
    type: 'triangle'
  }, {
    frequency: 135,
    start: 0.08,
    duration: 0.11,
    gain: 0.026,
    type: 'sine'
  }],
  reveal: [{
    frequency: 392,
    start: 0,
    duration: 0.07,
    gain: 0.026,
    type: 'sine'
  }, {
    frequency: 494,
    start: 0.07,
    duration: 0.09,
    gain: 0.03,
    type: 'sine'
  }],
  complete: [{
    frequency: 523,
    start: 0,
    duration: 0.08,
    gain: 0.036,
    type: 'sine'
  }, {
    frequency: 659,
    start: 0.07,
    duration: 0.09,
    gain: 0.034,
    type: 'sine'
  }, {
    frequency: 784,
    start: 0.15,
    duration: 0.14,
    gain: 0.032,
    type: 'sine'
  }]
};
let audioContext = null;
let ambienceNodes = null;
function loadSoundEnabled() {
  try {
    const saved = localStorage.getItem(SOUND_KEY);
    return saved === null ? true : saved === 'true';
  } catch (e) {
    return true;
  }
}
function saveSoundEnabled(enabled) {
  try {
    localStorage.setItem(SOUND_KEY, String(enabled));
  } catch (e) {
    console.warn('Failed to save sound setting:', e);
  }
}
function loadAmbienceEnabled() {
  try {
    return localStorage.getItem(AMBIENCE_KEY) === 'true';
  } catch (e) {
    return false;
  }
}
function saveAmbienceEnabled(enabled) {
  try {
    localStorage.setItem(AMBIENCE_KEY, String(enabled));
  } catch (e) {
    console.warn('Failed to save ambience setting:', e);
  }
}
function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  return audioContext;
}
function playSoundEffect(name, enabled = true) {
  if (!enabled) return;
  const pattern = SOUND_PATTERNS[name] || SOUND_PATTERNS.tap;
  const context = getAudioContext();
  if (!context) return;
  if (context.state === 'suspended') {
    context.resume().catch(() => {});
  }
  const startAt = context.currentTime + 0.012;
  pattern.forEach(note => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const noteStart = startAt + note.start;
    const noteEnd = noteStart + note.duration;
    oscillator.type = note.type;
    oscillator.frequency.setValueAtTime(note.frequency, noteStart);
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(note.gain, noteStart + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(noteStart);
    oscillator.stop(noteEnd + 0.02);
  });
}
function createAmbienceNoiseBuffer(context) {
  const duration = 2.4;
  const buffer = context.createBuffer(1, Math.floor(context.sampleRate * duration), context.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i += 1) {
    last = (last + (Math.random() * 2 - 1) * 0.018) / 1.018;
    data[i] = last * 0.5;
  }
  return buffer;
}
function scheduleAmbiencePluck() {
  if (!ambienceNodes) return;
  const {
    context,
    pluckBus
  } = ambienceNodes;
  const motif = [392, 523.25, 587.33, 440];
  const startAt = context.currentTime + 0.04;
  motif.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const noteStart = startAt + index * 0.18;
    oscillator.type = index % 2 ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(frequency, noteStart);
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(index === 1 ? 0.018 : 0.012, noteStart + 0.026);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.85);
    oscillator.connect(gain);
    gain.connect(pluckBus);
    oscillator.start(noteStart);
    oscillator.stop(noteStart + 0.92);
  });
}
function startAmbienceLoop() {
  const context = getAudioContext();
  if (!context) return false;
  if (context.state === 'suspended') {
    context.resume().catch(() => {});
  }
  if (ambienceNodes) return true;
  const now = context.currentTime;
  const master = context.createGain();
  const noiseFilter = context.createBiquadFilter();
  const noiseGain = context.createGain();
  const noise = context.createBufferSource();
  const droneBus = context.createGain();
  const pluckBus = context.createGain();
  const drones = [196, 246.94, 329.63].map((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.detune.setValueAtTime(index === 1 ? 4 : -3, now);
    gain.gain.setValueAtTime(index === 0 ? 0.008 : 0.005, now);
    oscillator.connect(gain);
    gain.connect(droneBus);
    oscillator.start(now);
    return oscillator;
  });
  noise.buffer = createAmbienceNoiseBuffer(context);
  noise.loop = true;
  noiseFilter.type = 'lowpass';
  noiseFilter.frequency.setValueAtTime(760, now);
  noiseFilter.Q.setValueAtTime(0.45, now);
  noiseGain.gain.setValueAtTime(0.015, now);
  droneBus.gain.setValueAtTime(0.42, now);
  pluckBus.gain.setValueAtTime(0.28, now);
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.085, now + 1.2);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(master);
  droneBus.connect(master);
  pluckBus.connect(master);
  master.connect(context.destination);
  noise.start(now);
  ambienceNodes = {
    context,
    master,
    noise,
    drones,
    pluckBus,
    timer: window.setInterval(scheduleAmbiencePluck, 5200)
  };
  scheduleAmbiencePluck();
  return true;
}
function stopAmbienceLoop() {
  if (!ambienceNodes) return;
  const nodes = ambienceNodes;
  ambienceNodes = null;
  window.clearInterval(nodes.timer);
  const now = nodes.context.currentTime;
  nodes.master.gain.cancelScheduledValues(now);
  nodes.master.gain.setValueAtTime(Math.max(nodes.master.gain.value, 0.0001), now);
  nodes.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
  window.setTimeout(() => {
    try {
      nodes.noise.stop();
      nodes.drones.forEach(oscillator => oscillator.stop());
      nodes.master.disconnect();
    } catch (e) {}
  }, 650);
}
const UI_TEXT = {
  zh: {
    'lang.zh': '中文',
    'lang.en': 'EN',
    'sound.on': '\u58f0\u97f3\u5f00',
    'sound.off': '\u9759\u97f3',
    'sound.label': '\u97f3\u6548',
    'ambience.on': '\u8336\u5ba4\u58f0\u5f00',
    'ambience.off': '\u8336\u5ba4\u58f0\u5173',
    'ambience.label': '\u8336\u5ba4\u80cc\u666f\u58f0',
    'tutorial.open': '\u6307\u5357',
    'tutorial.badge': '\u718a\u732b\u5bfc\u89c8',
    'tutorial.title': '\u8ddf\u718a\u732b\u8001\u5e08\u8d70\u4e00\u5708',
    'tutorial.intro': '\u5148\u770b\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u600e\u4e48\u7528\uff0c\u7136\u540e\u5f00\u59cb\u4eca\u65e5\u7ec3\u4e60\u3002',
    'tutorial.stepCount': '{current}/{total}',
    'tutorial.close': '\u5173\u95ed',
    'tutorial.skip': '\u8df3\u8fc7',
    'tutorial.back': '\u4e0a\u4e00\u6b65',
    'tutorial.next': '\u4e0b\u4e00\u6b65',
    'tutorial.done': '\u5f00\u59cb\u5b66\u4e60',
    'tutorial.step.daily.title': '\u4eca\u65e5\u8bad\u7ec3',
    'tutorial.step.daily.body': '\u718a\u732b\u8001\u5e08\u4f1a\u6311\u51fa\u8981\u590d\u4e60\u3001\u8981\u5de9\u56fa\u548c\u65b0\u5b66\u7684\u5b57\u3002',
    'tutorial.step.daily.action': '\u6253\u5f00\u4eca\u65e5\u8bad\u7ec3',
    'tutorial.step.cards.title': '\u5148\u7528\u5361\u7247\u56de\u60f3',
    'tutorial.step.cards.body': '\u770b\u89c1\u5b57\u4e4b\u524d\u5148\u60f3\u8bfb\u97f3\u548c\u610f\u601d\uff0c\u518d\u7ffb\u5f00\u68c0\u67e5\u3002',
    'tutorial.step.cards.action': '\u6253\u5f00\u751f\u8bcd\u5361\u7247',
    'tutorial.step.write.title': '\u518d\u4ece\u8bb0\u5fc6\u91cc\u5199',
    'tutorial.step.write.body': '\u5199\u5b57\u7ec3\u4e60\u9ed8\u8ba4\u4e0d\u76f4\u63a5\u663e\u793a\u5b57\u5f62\uff0c\u9700\u8981\u65f6\u518d\u6253\u5f00\u63d0\u793a\u3002',
    'tutorial.step.write.action': '\u5f00\u59cb\u5199\u5b57',
    'tutorial.step.quiz.title': '\u6700\u540e\u7528\u6d4b\u9a8c\u786e\u8ba4',
    'tutorial.step.quiz.body': '\u7b54\u9519\u7b2c\u4e00\u6b21\u4e0d\u4f1a\u7acb\u523b\u516c\u5e03\u7b54\u6848\uff0c\u7ed9\u81ea\u5df1\u518d\u60f3\u4e00\u6b21\u7684\u673a\u4f1a\u3002',
    'tutorial.step.quiz.action': '\u6253\u5f00\u6d4b\u9a8c',
    'tutorial.step.wallet.title': '\u94b1\u5305\u770b\u8fdb\u5ea6',
    'tutorial.step.wallet.body': '\u6240\u6709\u5b66\u8fc7\u7684\u5b57\u3001\u590d\u4e60\u548c\u8fde\u7eed\u5b66\u4e60\u90fd\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u91cc\u3002',
    'tutorial.step.wallet.action': '\u770b\u5b66\u4e60\u94b1\u5305',
    'queue.hsk1Words': 'HSK1 \u8bcd\u5e93',
    'nav.home': '首页',
    'nav.cards': '卡片',
    'nav.write': '写字',
    'nav.quiz': '测验',
    'nav.wallet': '钱包',
    'common.back': '← 返回',
    'common.all': '全部',
    'common.today': '今日',
    'common.done': '完成',
    'common.nextCard': '下一张 →',
    'common.prevCard': '← 上一张',
    'common.nextChar': '下一字 →',
    'common.prevChar': '← 上一字',
    'common.skip': '跳过 →',
    'common.hide': '隐藏',
    'common.hint': '提示',
    'common.reset': '↺ 重写',
    'common.writeAgain': '↺ 再写',
    'common.score': '得分',
    'home.subtitle': '每日汉字小程序',
    'home.search': '搜一搜 · 天气 / 写字 / 拼音',
    'home.walletLabel': '学习钱包 · 汉字余额',
    'home.masteredMeta': '{mastered} / {total} 已掌握',
    'home.learningMeta': '{count} 学习中',
    'home.dailyKicker': '今日训练',
    'home.dailyTitle': '熊猫老师排好了 {count} 个字',
    'home.myMiniPrograms': '我的小程序',
    'home.more': '更多',
    'home.coachTitle': '熊猫老师陪你练',
    'home.coachNew': '从课程开始，像点开一个小程序一样跟熊猫老师学习。',
    'home.coachReview': '先复习，再默写。熊猫老师帮你把会认的字变成会写的字。',
    'home.taskTitle': '今日任务',
    'home.taskNew': '从课程入口开始，解锁今天的写字练习。',
    'home.taskReview': '先复习卡片，再进入默写练习。',
    'home.account': '学习账户',
    'home.walletTitle': '学习钱包',
    'home.walletCopy': '查看进度、复习和连续学习',
    'home.stat.mastered': '已掌握',
    'home.stat.learning': '学习中',
    'home.stat.reviews': '复习',
    'daily.title': '今日训练',
    'daily.subtitle': '不是从头来。先复习会忘的字，再加一点新内容。',
    'daily.count': '{count} 字',
    'daily.heroTitle': '熊猫老师的今日清单',
    'daily.heroCopy': '这组字会优先放入卡片、写字和测验。',
    'daily.start': '开始训练',
    'daily.doneEnough': '今天先这样',
    'daily.step1.title': '先回忆',
    'daily.step1.copy': '看字前先想读音和意思',
    'daily.step2.title': '再默写',
    'daily.step2.copy': '默认隐藏字形，写错再开提示',
    'daily.step3.title': '最后小测',
    'daily.step3.copy': '用相似字干扰，答错再想一次',
    'daily.reason.new': '新字',
    'daily.reason.review': '复习',
    'daily.reason.solidify': '巩固',
    'stickers.lessons': '课程地图',
    'stickers.write': '手写挑战',
    'stickers.quiz': '今日通关',
    'tiles.vocab': '生词',
    'tiles.write': '写字',
    'tiles.quiz': '测验',
    'tiles.lessons': '课程',
    'tiles.pinyin': '拼音',
    'tiles.cards': '卡片',
    'tiles.progress': '进度',
    'tiles.review': '复习',
    'lessons.title': '课程地图',
    'lessons.subtitle': 'HSK 1 · 第 12-15 课',
    'lessons.pill': '4 课',
    'lessons.service': '课程服务',
    'lessons.materialBanks': '\u6750\u6599\u8bcd\u5e93',
    'lessons.hsk1WordBankTitle': 'HSK1 \u8bcd\u8bed',
    'lessons.wordBankChip': '\u8bcd\u5e93',
    'lessons.quick': '快捷练习',
    'lessons.quizAll': 'QUIZ ALL',
    'lessons.drawAll': 'DRAW ALL',
    'learn.title': '生词卡片',
    'learn.subtitle': '先回忆，再翻开。把会认的字变成会用的字。',
    'learn.cardNumber': '第 {count} 张',
    'learn.progress': '学习进度',
    'learn.tap': '轻点翻开',
    'learn.related': '相关词 ({count})',
    'learn.strokesLine': '{strokes} 笔画 • L{lesson}',
    'learn.wordLine': '\u6750\u6599 • {source}',
    'learn.roundDone': '🎉 本轮完成',
    'draw.title': '写字练习',
    'draw.subtitle': '先凭记忆写，再打开提示。笔顺会帮你慢慢修正。',
    'draw.charNumber': '第 {count} 字',
    'draw.mode.learn': '学',
    'draw.mode.practice': '练',
    'draw.mode.quiz': '测',
    'draw.loading': '笔画准备中...',
    'draw.animate': '▶ 看笔顺',
    'draw.strokes': '笔画',
    'draw.mistakes': '错笔',
    'draw.completed': '完成',
    'draw.feedback.noData': '暂时没有笔画数据',
    'draw.feedback.start': '开头很好',
    'draw.feedback.retry': '再试一次',
    'draw.feedback.perfect': '🎉 完美',
    'draw.feedback.good': '👍 写得不错',
    'draw.feedback.done': '✓ 完成',
    'draw.feedback.nice': '很好',
    'quiz.title': '每日测验',
    'quiz.subtitle': '先给自己一次机会，第二次再看答案。',
    'quiz.subtitleActive': '答错一次不会立刻公布答案，再想一次。',
    'quiz.mode.hanziPinyin': '汉字 → 拼音',
    'quiz.mode.hanziPinyinCopy': '看汉字，猜读音',
    'quiz.mode.pinyinHanzi': '拼音 → 汉字',
    'quiz.mode.pinyinHanziCopy': '看拼音，选汉字',
    'quiz.mode.hanziMeaning': '汉字 → 意思',
    'quiz.mode.hanziMeaningCopy': '看汉字，猜英文意思',
    'quiz.whichHanzi': '这是哪个汉字？',
    'quiz.howRead': '这个字怎么读？',
    'quiz.whatMeans': '这个字是什么意思？',
    'quiz.correct': '答对了',
    'quiz.correctAnswer': '正确答案: ',
    'quiz.tryAgain': '再想一次',
    'quiz.next': '下一题 →',
    'quiz.changeMode': '换题型',
    'quiz.again': '再测一次',
    'quiz.resultGreat': '🎉 太棒了!',
    'quiz.resultGood': '👍 很不错!',
    'quiz.resultKeep': '💪 继续练!',
    'quiz.scoreLine': '{score} / {total} 答对',
    'quiz.scoreFooter': '得分: {score} / {total}',
    'stats.title': '学习钱包',
    'stats.subtitle': '掌握的字、复习记录和连续学习都存在这里。',
    'stats.byLesson': '按课程',
    'stats.lesson': '第 {lesson} 课',
    'stats.recent': '最近测验',
    'stats.allChars': '全部 {count} 个汉字',
    'stats.streak': '连续',
    'stats.backup': '备份',
    'stats.export': '导出',
    'stats.import': '导入',
    'stats.reset': '重置进度',
    'stats.confirmReset': '确定要重置全部学习进度吗？此操作不能撤销。',
    'stats.invalidBackup': '备份文件格式不正确。',
    'stats.confirmImport': '导入 {date} 的备份？\n\n这会替换当前学习进度。',
    'stats.importOk': '进度导入成功',
    'stats.importFail': '读取备份文件失败。'
  },
  en: {
    'lang.zh': '中文',
    'lang.en': 'EN',
    'sound.on': 'Sound on',
    'sound.off': 'Muted',
    'sound.label': 'Sound effects',
    'ambience.on': 'Tea ambience on',
    'ambience.off': 'Tea ambience off',
    'ambience.label': 'Focus ambience',
    'tutorial.open': 'Guide',
    'tutorial.badge': 'Panda guide',
    'tutorial.title': 'Take a tour with Panda',
    'tutorial.intro': 'See how each mini app works, then start a calm daily practice flow.',
    'tutorial.stepCount': '{current}/{total}',
    'tutorial.close': 'Close guide',
    'tutorial.skip': 'Skip',
    'tutorial.back': 'Back',
    'tutorial.next': 'Next',
    'tutorial.done': 'Start learning',
    'tutorial.step.daily.title': 'Begin with Daily training',
    'tutorial.step.daily.body': 'Panda picks a small set: new characters, fragile review items, and characters to solidify.',
    'tutorial.step.daily.action': 'Open Daily training',
    'tutorial.step.cards.title': 'Recall first with Cards',
    'tutorial.step.cards.body': 'Try to remember the pinyin and meaning before flipping the card open.',
    'tutorial.step.cards.action': 'Open Cards',
    'tutorial.step.write.title': 'Then write from memory',
    'tutorial.step.write.body': 'Writing practice hides the full character first. Use hints only after you try.',
    'tutorial.step.write.action': 'Open Writing',
    'tutorial.step.quiz.title': 'Finish with a Quiz',
    'tutorial.step.quiz.body': 'A first mistake asks you to think again. The answer appears only after another miss.',
    'tutorial.step.quiz.action': 'Open Quiz',
    'tutorial.step.wallet.title': 'Check progress in Wallet',
    'tutorial.step.wallet.body': 'Mastered characters, reviews, streaks, and backups stay in this browser only.',
    'tutorial.step.wallet.action': 'Open Wallet',
    'queue.hsk1Words': 'HSK1 Word Bank',
    'nav.home': 'Home',
    'nav.cards': 'Cards',
    'nav.write': 'Write',
    'nav.quiz': 'Quiz',
    'nav.wallet': 'Wallet',
    'common.back': '← Back',
    'common.all': 'All',
    'common.today': 'Today',
    'common.done': 'Done',
    'common.nextCard': 'Next card →',
    'common.prevCard': '← Previous',
    'common.nextChar': 'Next char →',
    'common.prevChar': '← Previous',
    'common.skip': 'Skip →',
    'common.hide': 'Hide',
    'common.hint': 'Hint',
    'common.reset': '↺ Rewrite',
    'common.writeAgain': '↺ Again',
    'common.score': 'Score',
    'home.subtitle': 'Daily Hanzi mini app',
    'home.search': 'Search · weather / writing / pinyin',
    'home.walletLabel': 'Learning wallet · Hanzi balance',
    'home.masteredMeta': '{mastered} / {total} mastered',
    'home.learningMeta': '{count} learning',
    'home.dailyKicker': 'Daily training',
    'home.dailyTitle': 'Panda teacher picked {count} characters',
    'home.myMiniPrograms': 'My mini programs',
    'home.more': 'More',
    'home.coachTitle': 'Panda teacher practices with you',
    'home.coachNew': 'Start with a lesson and learn like opening a mini program.',
    'home.coachReview': 'Review first, then write from memory. Turn recognition into writing.',
    'home.taskTitle': "Today's task",
    'home.taskNew': 'Start from the lesson map and unlock writing practice.',
    'home.taskReview': 'Review cards first, then move into writing from memory.',
    'home.account': 'Learning account',
    'home.walletTitle': 'Learning wallet',
    'home.walletCopy': 'See progress, reviews, and study streaks',
    'home.stat.mastered': 'Mastered',
    'home.stat.learning': 'Learning',
    'home.stat.reviews': 'Reviews',
    'daily.title': 'Daily training',
    'daily.subtitle': 'Not from the top. Review fragile characters, then add a little new material.',
    'daily.count': '{count} chars',
    'daily.heroTitle': "Panda teacher's list",
    'daily.heroCopy': 'This set is used first in cards, writing, and quiz.',
    'daily.start': 'Start training',
    'daily.doneEnough': 'Done for today',
    'daily.step1.title': 'Recall first',
    'daily.step1.copy': 'Think of pronunciation and meaning before opening the card',
    'daily.step2.title': 'Write from memory',
    'daily.step2.copy': 'Character is hidden by default; use hints after mistakes',
    'daily.step3.title': 'Mini quiz',
    'daily.step3.copy': 'Similar characters distract you; try again before the answer',
    'daily.reason.new': 'New',
    'daily.reason.review': 'Review',
    'daily.reason.solidify': 'Solidify',
    'stickers.lessons': 'Lesson map',
    'stickers.write': 'Writing',
    'stickers.quiz': 'Daily pass',
    'tiles.vocab': 'Words',
    'tiles.write': 'Write',
    'tiles.quiz': 'Quiz',
    'tiles.lessons': 'Lessons',
    'tiles.pinyin': 'Pinyin',
    'tiles.cards': 'Cards',
    'tiles.progress': 'Progress',
    'tiles.review': 'Review',
    'lessons.title': 'Lesson map',
    'lessons.subtitle': 'HSK 1 · Lessons 12-15',
    'lessons.pill': '4 lessons',
    'lessons.service': 'Lesson services',
    'lessons.materialBanks': 'Material banks',
    'lessons.hsk1WordBankTitle': 'HSK1 Words',
    'lessons.wordBankChip': 'Word bank',
    'lessons.quick': 'Quick practice',
    'lessons.quizAll': 'Quiz all',
    'lessons.drawAll': 'Draw all',
    'learn.title': 'Vocabulary cards',
    'learn.subtitle': 'Recall first, then flip. Turn recognition into usable memory.',
    'learn.cardNumber': 'Card {count}',
    'learn.progress': 'Study progress',
    'learn.tap': 'Tap to flip',
    'learn.related': 'Related words ({count})',
    'learn.strokesLine': '{strokes} strokes • L{lesson}',
    'learn.wordLine': 'Material • {source}',
    'learn.roundDone': '🎉 Round complete',
    'draw.title': 'Writing practice',
    'draw.subtitle': 'Write from memory first, then open hints. Stroke order gently corrects you.',
    'draw.charNumber': 'Character {count}',
    'draw.mode.learn': 'Learn',
    'draw.mode.practice': 'Practice',
    'draw.mode.quiz': 'Test',
    'draw.loading': 'Preparing strokes...',
    'draw.animate': '▶ Stroke order',
    'draw.strokes': 'Strokes',
    'draw.mistakes': 'Misses',
    'draw.completed': 'Done',
    'draw.feedback.noData': 'Stroke data is unavailable',
    'draw.feedback.start': 'Good start',
    'draw.feedback.retry': 'Try again',
    'draw.feedback.perfect': '🎉 Perfect',
    'draw.feedback.good': '👍 Nice writing',
    'draw.feedback.done': '✓ Complete',
    'draw.feedback.nice': 'Nice',
    'quiz.title': 'Daily quiz',
    'quiz.subtitle': 'Give yourself one try; the answer appears after the second mistake.',
    'quiz.subtitleActive': 'One mistake does not reveal the answer. Think once more.',
    'quiz.mode.hanziPinyin': 'Hanzi → Pinyin',
    'quiz.mode.hanziPinyinCopy': 'See the character, choose the pronunciation',
    'quiz.mode.pinyinHanzi': 'Pinyin → Hanzi',
    'quiz.mode.pinyinHanziCopy': 'See pinyin, choose the character',
    'quiz.mode.hanziMeaning': 'Hanzi → Meaning',
    'quiz.mode.hanziMeaningCopy': 'See the character, choose the English meaning',
    'quiz.whichHanzi': 'Which character is this?',
    'quiz.howRead': 'How is this character read?',
    'quiz.whatMeans': 'What does this character mean?',
    'quiz.correct': 'Correct',
    'quiz.correctAnswer': 'Correct answer: ',
    'quiz.tryAgain': 'Think once more',
    'quiz.next': 'Next question →',
    'quiz.changeMode': 'Change mode',
    'quiz.again': 'Try again',
    'quiz.resultGreat': '🎉 Excellent!',
    'quiz.resultGood': '👍 Pretty good!',
    'quiz.resultKeep': '💪 Keep practicing!',
    'quiz.scoreLine': '{score} / {total} correct',
    'quiz.scoreFooter': 'Score: {score} / {total}',
    'stats.title': 'Learning wallet',
    'stats.subtitle': 'Mastered characters, reviews, and streaks live here.',
    'stats.byLesson': 'By lesson',
    'stats.lesson': 'Lesson {lesson}',
    'stats.recent': 'Recent quizzes',
    'stats.allChars': 'All {count} characters',
    'stats.streak': 'Streak',
    'stats.backup': 'Backup',
    'stats.export': 'Export',
    'stats.import': 'Import',
    'stats.reset': 'Reset progress',
    'stats.confirmReset': 'Reset all learning progress? This cannot be undone.',
    'stats.invalidBackup': 'This backup file has the wrong format.',
    'stats.confirmImport': 'Import backup from {date}?\n\nThis will replace current learning progress.',
    'stats.importOk': 'Progress imported',
    'stats.importFail': 'Could not read the backup file.'
  }
};
const formatUiText = (template, vars = {}) => Object.entries(vars).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
const translateUi = (language, key, vars) => {
  const template = UI_TEXT[language]?.[key] || UI_TEXT.zh[key] || key;
  return formatUiText(template, vars);
};
const loadLanguage = () => {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === 'en' || saved === 'zh') return saved;
  } catch (e) {
    console.warn('Failed to load language:', e);
  }
  return 'zh';
};
const migrateProgress = data => {
  if (data.masteredChars.length > 0 && typeof data.masteredChars[0] === 'string') {
    return data;
  }
  const idToHanzi = {};
  VOCABULARY.forEach(v => {
    idToHanzi[v.id] = v.hanzi;
  });
  const migrated = {
    ...data,
    masteredChars: data.masteredChars.map(id => idToHanzi[id]).filter(Boolean),
    learningChars: data.learningChars.map(id => idToHanzi[id]).filter(Boolean),
    drawingAttempts: {}
  };
  if (data.drawingAttempts) {
    Object.entries(data.drawingAttempts).forEach(([id, count]) => {
      const hanzi = idToHanzi[parseInt(id)];
      if (hanzi) migrated.drawingAttempts[hanzi] = count;
    });
  }
  return migrated;
};
const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (data && typeof data === 'object' && Array.isArray(data.masteredChars)) {
        return migrateProgress(data);
      }
    }
  } catch (e) {
    console.warn('Failed to load progress:', e);
  }
  return {
    masteredChars: [],
    learningChars: [],
    quizScores: [],
    totalReviews: 0,
    streakDays: 0,
    lastStudyDate: null,
    drawingAttempts: {},
    lastPositions: {}
  };
};
const saveProgress = progress => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save progress:', e);
  }
};
const SIMILAR_CHAR_GROUPS = [['是', '十', '师', '时'], ['人', '个', '大', '太', '八', '入'], ['日', '目', '白', '百'], ['口', '回', '四'], ['小', '少'], ['天', '夫', '大'], ['去', '云'], ['坐', '座'], ['买', '卖'], ['看', '着']];
const getKnownSet = (items = []) => new Set(items.filter(Boolean));
const getStudyQueue = (vocab, progress) => {
  const mastered = getKnownSet(progress.masteredChars);
  const learning = getKnownSet(progress.learningChars);
  return [...vocab].sort((a, b) => {
    const priority = char => {
      if (!mastered.has(char.hanzi) && !learning.has(char.hanzi)) return 0;
      if (learning.has(char.hanzi)) return 1;
      return 2;
    };
    const diff = priority(a) - priority(b);
    return diff || a.id - b.id;
  });
};
const getDrawQueue = (vocab, progress) => {
  const mastered = getKnownSet(progress.masteredChars);
  const attempts = progress.drawingAttempts || {};
  return [...vocab].sort((a, b) => {
    const masteredDiff = Number(mastered.has(a.hanzi)) - Number(mastered.has(b.hanzi));
    if (masteredDiff) return masteredDiff;
    const attemptDiff = (attempts[a.hanzi] || 0) - (attempts[b.hanzi] || 0);
    return attemptDiff || a.id - b.id;
  });
};
const getTodayKey = () => new Date().toISOString().slice(0, 10);
const getDailyTrainingQueue = (vocab, progress, limit = 8) => {
  const mastered = getKnownSet(progress.masteredChars);
  const learning = getKnownSet(progress.learningChars);
  const attempts = progress.drawingAttempts || {};
  const queue = [];
  const seen = new Set();
  const addBucket = (items, reason) => {
    items.forEach(char => {
      if (queue.length >= limit || seen.has(char.hanzi)) return;
      seen.add(char.hanzi);
      queue.push({
        ...char,
        dailyReason: reason
      });
    });
  };
  const byPracticeNeed = (a, b) => {
    const attemptDiff = (attempts[a.hanzi] || 0) - (attempts[b.hanzi] || 0);
    return attemptDiff || a.lesson - b.lesson || a.id - b.id;
  };
  const learningChars = vocab.filter(char => learning.has(char.hanzi) && !mastered.has(char.hanzi)).sort(byPracticeNeed);
  const newChars = vocab.filter(char => !learning.has(char.hanzi) && !mastered.has(char.hanzi)).sort((a, b) => a.lesson - b.lesson || a.id - b.id);
  const reviewChars = vocab.filter(char => mastered.has(char.hanzi)).sort(byPracticeNeed);
  addBucket(learningChars, 'review');
  addBucket(newChars, 'new');
  addBucket(reviewChars, 'solidify');
  return queue;
};
const getDailyTrainingSummary = queue => queue.reduce((summary, char) => {
  summary[char.dailyReason] = (summary[char.dailyReason] || 0) + 1;
  return summary;
}, {});
const getSimilarDistractors = (char, vocab, count = 3) => {
  const sameGroup = SIMILAR_CHAR_GROUPS.find(group => group.includes(char.hanzi)) || [];
  const byGroup = sameGroup.filter(hanzi => hanzi !== char.hanzi).map(hanzi => vocab.find(v => v.hanzi === hanzi)).filter(Boolean);
  const byShape = vocab.filter(v => v.id !== char.id && !byGroup.some(g => g.id === v.id)).sort((a, b) => {
    const strokeDiff = Math.abs((a.strokes || 0) - (char.strokes || 0)) - Math.abs((b.strokes || 0) - (char.strokes || 0));
    return strokeDiff || Math.abs(a.id - char.id) - Math.abs(b.id - char.id);
  });
  return [...byGroup, ...byShape].slice(0, count);
};
const styles = "  /* ===== MINI-PROGRAM BASE SYSTEM ===== */\n  :root {\n    --bg-primary: #f5f7f6;\n    --bg-secondary: #eef7f3;\n    --bg-card: #ffffff;\n    --accent-lime: #07c160;\n    --accent-coral: #f24848;\n    --accent-cyan: #1677ff;\n    --accent-purple: #d99a18;\n    --text-primary: #18212b;\n    --text-secondary: #697780;\n    --border-width: 1px;\n    --border-color: #dce7e2;\n    --radius: 8px;\n    --shadow-offset: 0px;\n    --transition-fast: 0.18s ease;\n    --transition-bounce: 0.38s cubic-bezier(0.2, 0.9, 0.2, 1.2);\n  }\n\n  body {\n    background: linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 38%, #f7f8fb 100%);\n    color: var(--text-primary);\n    overflow-x: hidden;\n  }\n\n  html,\n  body,\n  #root {\n    width: 100%;\n    max-width: 100%;\n    overflow-x: hidden;\n  }\n\n  .app-container {\n    position: relative;\n    min-height: 100vh;\n    min-height: 100dvh;\n    width: 100%;\n    max-width: 100vw;\n    background:\n      radial-gradient(circle at 18% 8%, rgba(7, 193, 96, 0.16), transparent 28%),\n      radial-gradient(circle at 86% 12%, rgba(22, 119, 255, 0.14), transparent 24%),\n      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 42%, #f9faf8 100%);\n    color: var(--text-primary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    overflow-x: hidden;\n  }\n\n  .screen {\n    width: min(calc(100vw - 24px), 460px);\n    max-width: 460px;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: 0 auto;\n    padding: 18px;\n    padding-bottom: calc(92px + env(safe-area-inset-bottom, 20px));\n    box-sizing: border-box;\n  }\n\n  .screen *,\n  .app-bottom-nav,\n  .app-bottom-nav * {\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 768px) {\n    .screen {\n      max-width: 480px;\n      padding: 24px;\n      padding-bottom: 110px;\n    }\n  }\n\n  .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    padding: 10px 0 14px;\n    margin-bottom: 10px;\n  }\n\n  .logo {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    color: #0d1f17;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 30px;\n    font-weight: 900;\n    letter-spacing: 0;\n    user-select: none;\n  }\n\n  .back-btn {\n    min-height: 40px;\n    padding: 9px 14px;\n    border: 1px solid rgba(7, 193, 96, 0.2);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.82);\n    color: var(--text-primary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 800;\n    transition: transform var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);\n    white-space: nowrap;\n  }\n\n  .card {\n    position: relative;\n    margin-bottom: 14px;\n    padding: 18px;\n    overflow: hidden;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.94);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);\n  }\n\n  .card-clickable {\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .card-clickable:active,\n  .btn:active,\n  .back-btn:active {\n    transform: scale(0.985);\n    box-shadow: 0 5px 14px rgba(20, 49, 35, 0.08);\n  }\n\n  @media (hover: hover) {\n    .card-clickable:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 14px 34px rgba(20, 49, 35, 0.12);\n    }\n\n    .btn-secondary:hover,\n    .back-btn:hover {\n      background: #ecfff5;\n      color: #06783d;\n    }\n  }\n\n  .card-accent-lime,\n  .card-accent-cyan,\n  .card-accent-coral,\n  .card-accent-purple {\n    border-color: rgba(24, 33, 43, 0.08);\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.1);\n  }\n\n  .title-hero,\n  .title-xl,\n  .title-lg,\n  .title-md {\n    margin: 0;\n    color: #14251c;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-weight: 900;\n    line-height: 1.12;\n    letter-spacing: 0;\n  }\n\n  .title-hero {\n    font-size: clamp(38px, 12vw, 50px);\n    background: linear-gradient(135deg, #07c160 0%, #1677ff 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  .title-xl { font-size: clamp(28px, 8vw, 36px); }\n  .title-lg { font-size: clamp(20px, 5.6vw, 26px); }\n  .title-md { font-size: 15px; }\n\n  .text-sm {\n    margin: 0;\n    color: var(--text-secondary);\n    font-size: 12px;\n    line-height: 1.45;\n    letter-spacing: 0;\n  }\n\n  .text-accent { color: var(--accent-lime); }\n\n  .stats-bar,\n  .draw-stats {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n    margin-bottom: 24px;\n  }\n\n  .stat-item,\n  .draw-stat {\n    padding: 12px 8px;\n    text-align: center;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.76);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .stat-value,\n  .draw-stat-value,\n  .score-value,\n  .lesson-number,\n  .text-accent {\n    color: var(--accent-lime);\n  }\n\n  .stat-value,\n  .draw-stat-value,\n  .lesson-number,\n  .score-value {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-weight: 900;\n    line-height: 1;\n  }\n\n  .stat-value,\n  .lesson-number { font-size: 34px; }\n  .draw-stat-value { font-size: 24px; }\n\n  .stat-label,\n  .draw-stat-label,\n  .score-label {\n    margin-top: 4px;\n    color: var(--text-secondary);\n    font-size: 10px;\n    line-height: 1.3;\n    letter-spacing: 0;\n  }\n\n  .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    min-height: 50px;\n    padding: 13px 18px;\n    border: 1px solid transparent;\n    border-radius: var(--radius);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 15px;\n    font-weight: 900;\n    letter-spacing: 0;\n    text-decoration: none;\n    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .btn-primary {\n    background: linear-gradient(135deg, #07c160, #0aa75a);\n    color: #fff;\n    box-shadow: 0 10px 22px rgba(7, 193, 96, 0.24);\n  }\n\n  .btn-secondary {\n    background: #ffffff;\n    color: #1677ff;\n    border-color: rgba(22, 119, 255, 0.16);\n  }\n\n  .btn-coral {\n    background: #fff1f0;\n    color: #cf2b2b;\n    border-color: #ffd2cf;\n  }\n\n  .btn:disabled {\n    opacity: 0.45;\n    cursor: not-allowed;\n  }\n\n  .hanzi-display {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'SimSun', sans-serif;\n    font-weight: 900;\n  }\n\n  .hanzi-hero {\n    padding: 16px;\n    font-size: clamp(96px, 28vw, 128px);\n    line-height: 1;\n    text-align: center;\n    animation: hanziFloat 5s ease-in-out infinite;\n  }\n\n  .hanzi-xl {\n    padding: 12px;\n    font-size: clamp(60px, 18vw, 84px);\n    line-height: 1;\n    text-align: center;\n  }\n\n  .hanzi-word {\n    max-width: 100%;\n    font-size: clamp(46px, 14vw, 88px);\n    line-height: 1.05;\n    overflow-wrap: anywhere;\n  }\n\n  .hanzi-lg { font-size: clamp(48px, 14vw, 64px); line-height: 1; }\n  .hanzi-md { font-size: clamp(28px, 8vw, 36px); line-height: 1; }\n\n  .progress-bar {\n    width: 100%;\n    height: 8px;\n    margin: 16px 0;\n    overflow: hidden;\n    border-radius: 999px;\n    background: #e3ebe7;\n  }\n\n  .progress-fill {\n    height: 100%;\n    border-radius: 999px;\n    background: linear-gradient(90deg, #07c160, #1677ff);\n    transition: width 0.4s ease-out;\n  }\n\n  .menu-grid {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n  }\n\n  .menu-item {\n    min-height: 112px;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  .menu-icon {\n    width: 52px;\n    height: 52px;\n    display: grid;\n    place-items: center;\n    border-radius: 16px;\n    background: linear-gradient(135deg, rgba(7, 193, 96, 0.14), rgba(22, 119, 255, 0.14));\n    font-size: 28px;\n  }\n\n  .menu-label {\n    font-size: 13px;\n    font-weight: 900;\n  }\n\n  .streak-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    padding: 8px 14px;\n    border: 1px solid #ffe2a8;\n    border-radius: var(--radius);\n    background: #fff7e6;\n    color: #9a6400;\n    font-size: 15px;\n    font-weight: 900;\n  }\n\n  .canvas-container,\n  .hanzi-writer-container {\n    position: relative;\n    width: 100%;\n    aspect-ratio: 1;\n    margin: 16px 0;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: #fff;\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    touch-action: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .drawing-canvas {\n    width: 100%;\n    height: 100%;\n    display: block;\n    touch-action: none;\n  }\n\n  .canvas-guide {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: rgba(7, 193, 96, 0.1);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: clamp(150px, 45vw, 200px);\n    font-weight: 900;\n    line-height: 1;\n    pointer-events: none;\n    user-select: none;\n  }\n\n  .canvas-controls,\n  .nav-actions {\n    display: flex;\n    gap: 10px;\n  }\n\n  .canvas-controls .btn,\n  .nav-actions .btn {\n    flex: 1;\n  }\n\n  .draw-mode-selector {\n    display: flex;\n    gap: 8px;\n    margin-bottom: 16px;\n  }\n\n  .draw-mode-btn {\n    flex: 1;\n    min-height: 46px;\n    padding: 10px 8px;\n    border: 0;\n    border-radius: var(--radius);\n    background: transparent;\n    color: #65737d;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 900;\n    letter-spacing: 0;\n    transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);\n  }\n\n  .draw-mode-btn.active {\n    background: #07c160;\n    color: #fff;\n    box-shadow: 0 7px 16px rgba(7, 193, 96, 0.2);\n  }\n\n  .hanzi-writer-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .hanzi-writer-container svg {\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  .stroke-counter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    margin: 12px 0;\n    font-size: 14px;\n  }\n\n  .stroke-dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: #d8e6df;\n    transition: all 0.2s ease;\n  }\n\n  .stroke-dot.completed { background: #07c160; }\n  .stroke-dot.current { background: #1677ff; transform: scale(1.3); }\n  .stroke-dot.error { background: #f24848; }\n\n  .draw-feedback {\n    position: absolute;\n    left: 12px;\n    right: 12px;\n    bottom: 12px;\n    z-index: 5;\n    padding: 12px;\n    border: 1px solid;\n    border-radius: var(--radius);\n    text-align: center;\n    font-size: 15px;\n    font-weight: 900;\n    pointer-events: none;\n    animation: feedbackPop 0.3s ease-out;\n  }\n\n  .draw-feedback.success {\n    background: #e8fff3;\n    color: #087541;\n    border-color: #b7f1d2;\n  }\n\n  .draw-feedback.error {\n    background: #fff1f0;\n    color: #cf2b2b;\n    border-color: #ffd2cf;\n  }\n\n  .quiz-question {\n    margin: 10px 0 14px;\n    padding: 24px 16px;\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.78);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    text-align: center;\n  }\n\n  .quiz-options {\n    display: grid;\n    gap: 12px;\n  }\n\n  .quiz-option {\n    padding: 15px 16px;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: #fff;\n    color: var(--text-primary);\n    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.06);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 15px;\n    text-align: left;\n    transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .quiz-option:active:not(.disabled) { transform: scale(0.985); }\n  .quiz-option.correct { background: #e8fff3; color: #087541; border-color: #b7f1d2; animation: correctPop 0.35s ease-out; }\n  .quiz-option.incorrect { background: #fff1f0; color: #cf2b2b; border-color: #ffd2cf; animation: incorrectShake 0.35s ease-out; }\n  .quiz-option.disabled { pointer-events: none; cursor: default; }\n\n  .quiz-feedback {\n    margin-top: 16px;\n    padding: 14px;\n    border: 1px solid rgba(22, 119, 255, 0.16);\n    border-radius: var(--radius);\n    background: #f0f7ff;\n    color: #17344d;\n    font-size: 13px;\n  }\n\n  .quiz-feedback strong { color: var(--accent-lime); }\n  .quiz-feedback .pinyin-display { margin-top: 6px; font-size: 22px; }\n\n  .flashcard {\n    min-height: 280px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .flashcard-hint {\n    margin-top: 16px;\n    color: var(--text-secondary);\n    font-size: 12px;\n    animation: hintPulse 2s ease-in-out infinite;\n  }\n\n  .material-example {\n    max-width: min(100%, 520px);\n    margin: 14px auto 0;\n    color: var(--text-secondary);\n    font-size: 14px;\n    line-height: 1.55;\n  }\n\n  .pinyin-display {\n    margin-top: 12px;\n    color: var(--accent-cyan);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: clamp(22px, 6vw, 28px);\n    font-weight: 700;\n  }\n\n  .meaning-display {\n    margin-top: 8px;\n    color: var(--text-secondary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: clamp(16px, 4.5vw, 20px);\n  }\n\n  .nav-actions { margin-top: 20px; }\n\n  .results-display {\n    padding: 32px 0;\n    text-align: center;\n  }\n\n  .score-circle {\n    width: clamp(140px, 40vw, 170px);\n    height: clamp(140px, 40vw, 170px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 24px;\n    border: 6px solid var(--accent-lime);\n    border-radius: 50%;\n    box-shadow: 0 0 30px rgba(7, 193, 96, 0.18);\n  }\n\n  .score-value { font-size: clamp(48px, 14vw, 60px); }\n\n  .char-grid {\n    display: grid;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n    gap: 6px;\n    margin-top: 16px;\n  }\n\n  @media (min-width: 400px) {\n    .char-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }\n  }\n\n  .char-item {\n    aspect-ratio: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 6px;\n    background: #edf3ef;\n    color: #1d2c35;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: clamp(16px, 4.5vw, 20px);\n    font-weight: 700;\n    transition: transform var(--transition-fast);\n  }\n\n  .char-item.mastered { background: #07c160; color: #fff; }\n  .char-item.learning { background: #1677ff; color: #fff; }\n\n  .backup-buttons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n\n  .backup-buttons .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .section-title {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin: 28px 0 16px;\n  }\n\n  .section-line {\n    flex: 1;\n    height: 1px;\n    background: linear-gradient(90deg, rgba(7, 193, 96, 0.35), transparent);\n  }\n\n  .lesson-card {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n  }\n\n  .lesson-number {\n    min-width: 70px;\n    text-align: center;\n  }\n\n  .lesson-info {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .floating-indicator {\n    position: fixed;\n    left: 50%;\n    bottom: calc(24px + env(safe-area-inset-bottom, 0px));\n    z-index: 100;\n    transform: translateX(-50%);\n    padding: 14px 28px;\n    border: 1px solid rgba(7, 193, 96, 0.2);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.96);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    animation: floatIn 0.4s cubic-bezier(0.2, 0.9, 0.2, 1.2);\n  }\n\n  @keyframes hanziFloat {\n    0%, 100% { transform: translateY(0) rotate(-1deg); }\n    50% { transform: translateY(-8px) rotate(1deg); }\n  }\n\n  @keyframes feedbackPop {\n    0% { transform: scale(0.9); opacity: 0; }\n    100% { transform: scale(1); opacity: 1; }\n  }\n\n  @keyframes correctPop {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.03); }\n    100% { transform: scale(1); }\n  }\n\n  @keyframes incorrectShake {\n    0%, 100% { transform: translateX(0); }\n    20% { transform: translateX(-8px); }\n    40% { transform: translateX(8px); }\n    60% { transform: translateX(-4px); }\n    80% { transform: translateX(4px); }\n  }\n\n  @keyframes hintPulse {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.4; }\n  }\n\n  @keyframes floatIn {\n    0% { transform: translateX(-50%) translateY(80px); opacity: 0; }\n    100% { transform: translateX(-50%) translateY(0); opacity: 1; }\n  }\n\n  /* ===== UTILITY ANIMATIONS ===== */\n  @keyframes slideUp {\n    from { opacity: 0; transform: translateY(20px); }\n    to { opacity: 1; transform: translateY(0); }\n  }\n\n  .animate-slide-up {\n    animation: slideUp 0.35s ease-out;\n  }\n\n  /* ===== CHINESE SUPER-APP THEME ===== */\n  :root {\n    --bg-primary: #f5f7f6;\n    --bg-secondary: #eef7f3;\n    --bg-card: #ffffff;\n    --accent-lime: #07c160;\n    --accent-coral: #f24848;\n    --accent-cyan: #1677ff;\n    --accent-purple: #d99a18;\n    --text-primary: #18212b;\n    --text-secondary: #697780;\n    --border-width: 1px;\n    --border-color: #dce7e2;\n    --radius: 8px;\n    --shadow-offset: 0px;\n    --transition-fast: 0.18s ease;\n    --transition-bounce: 0.38s cubic-bezier(0.2, 0.9, 0.2, 1.2);\n  }\n\n  body {\n    background:\n      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 36%, #f7f8fb 100%);\n    color: var(--text-primary);\n    overflow-x: hidden;\n  }\n\n  html,\n  body,\n  #root {\n    width: 100%;\n    max-width: 100%;\n    overflow-x: hidden;\n    overflow-anchor: none;\n  }\n\n  .app-container {\n    background:\n      radial-gradient(circle at 18% 8%, rgba(7, 193, 96, 0.16), transparent 28%),\n      radial-gradient(circle at 86% 12%, rgba(22, 119, 255, 0.14), transparent 24%),\n      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 42%, #f9faf8 100%);\n    color: var(--text-primary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    overflow-x: hidden;\n    width: 100%;\n    max-width: 100vw;\n  }\n\n  .screen {\n    width: min(calc(100vw - 24px), 460px);\n    box-sizing: border-box;\n    max-width: 460px;\n    margin: 0 auto;\n    padding: 18px;\n    padding-bottom: calc(92px + env(safe-area-inset-bottom, 20px));\n  }\n\n  .screen *,\n  .app-bottom-nav,\n  .app-bottom-nav * {\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 768px) {\n    .screen {\n      max-width: 480px;\n      padding: 24px;\n      padding-bottom: 110px;\n    }\n  }\n\n  .screen::before {\n    content: \"汉\";\n    position: fixed;\n    top: 76px;\n    right: max(12px, calc((100vw - 460px) / 2 - 24px));\n    z-index: 0;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 116px;\n    font-weight: 900;\n    color: rgba(7, 193, 96, 0.06);\n    animation: characterDrift 7s ease-in-out infinite;\n    pointer-events: none;\n  }\n\n  .screen > * {\n    position: relative;\n    z-index: 1;\n  }\n\n  .header {\n    padding: 10px 0 14px;\n    margin-bottom: 10px;\n  }\n\n  .logo {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    color: #0d1f17;\n    font-size: 30px;\n    letter-spacing: 0;\n    text-shadow: none;\n    transform: none;\n  }\n\n  .logo::after {\n    content: \"Master\";\n    padding: 4px 9px;\n    border-radius: 999px;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    color: #fff;\n    font-family: 'Segoe UI', Arial, sans-serif;\n    font-size: 12px;\n    font-weight: 800;\n  }\n\n  .streak-badge,\n  .back-btn,\n  .btn,\n  .draw-mode-btn,\n  .quiz-option {\n    border-radius: var(--radius);\n    letter-spacing: 0;\n    box-shadow: none;\n  }\n\n  .back-btn {\n    background: rgba(255, 255, 255, 0.82);\n    color: var(--text-primary);\n    border-color: rgba(7, 193, 96, 0.2);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 800;\n  }\n\n  .card,\n  .stat-item,\n  .draw-stat,\n  .hanzi-writer-container,\n  .canvas-container,\n  .quiz-option,\n  .floating-indicator {\n    border-color: rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .card {\n    background: rgba(255, 255, 255, 0.94);\n    padding: 18px;\n    margin-bottom: 14px;\n    overflow: hidden;\n  }\n\n  .card::before {\n    content: \"\";\n    position: absolute;\n    inset: 0 0 auto 0;\n    height: 3px;\n    background: linear-gradient(90deg, #07c160, #1677ff, #d99a18);\n    opacity: 0;\n    transition: opacity var(--transition-fast);\n  }\n\n  .card-clickable:hover::before,\n  .card-accent-lime::before,\n  .card-accent-cyan::before,\n  .card-accent-coral::before,\n  .card-accent-purple::before {\n    opacity: 1;\n  }\n\n  .card-clickable:active,\n  .btn:active,\n  .back-btn:active {\n    transform: scale(0.985);\n    box-shadow: 0 5px 14px rgba(20, 49, 35, 0.08);\n  }\n\n  @media (hover: hover) {\n    .card-clickable:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 14px 34px rgba(20, 49, 35, 0.12);\n    }\n\n    .btn-secondary:hover,\n    .back-btn:hover {\n      background: #ecfff5;\n      color: #06783d;\n    }\n  }\n\n  .card-accent-lime,\n  .card-accent-cyan,\n  .card-accent-coral,\n  .card-accent-purple {\n    border-color: rgba(24, 33, 43, 0.08);\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.1);\n  }\n\n  .title-hero {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 44px;\n    letter-spacing: 0;\n    background: linear-gradient(135deg, #07c160 0%, #1677ff 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  .title-xl {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 32px;\n    letter-spacing: 0;\n  }\n\n  .title-lg {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 22px;\n    letter-spacing: 0;\n  }\n\n  .title-md,\n  .menu-label,\n  .stat-label,\n  .draw-stat-label,\n  .score-label,\n  .text-sm {\n    letter-spacing: 0;\n  }\n\n  .text-sm {\n    font-size: 12px;\n    color: var(--text-secondary);\n  }\n\n  .progress-bar {\n    height: 8px;\n    border: none;\n    border-radius: 999px;\n    background: #e3ebe7;\n  }\n\n  .progress-fill {\n    border-radius: 999px;\n    background: linear-gradient(90deg, #07c160, #1677ff);\n  }\n\n  .stats-bar {\n    gap: 8px;\n  }\n\n  .stat-item {\n    background: rgba(255, 255, 255, 0.76);\n    padding: 12px 8px;\n  }\n\n  .stat-value,\n  .draw-stat-value,\n  .score-value,\n  .lesson-number,\n  .text-accent {\n    color: #07c160;\n  }\n\n  .stat-value,\n  .lesson-number,\n  .score-value {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 34px;\n  }\n\n  .menu-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n\n  .menu-item {\n    min-height: 112px;\n    padding: 16px;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    background:\n      linear-gradient(180deg, rgba(255,255,255,0.94), rgba(250,253,252,0.94));\n  }\n\n  .menu-icon {\n    width: 52px;\n    height: 52px;\n    display: grid;\n    place-items: center;\n    border-radius: 16px;\n    background: linear-gradient(135deg, rgba(7, 193, 96, 0.14), rgba(22, 119, 255, 0.14));\n    font-size: 28px;\n    animation: iconBreathe 4s ease-in-out infinite;\n  }\n\n  .menu-label {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 13px;\n    font-weight: 900;\n    color: #1d2c35;\n  }\n\n  .btn {\n    min-height: 50px;\n    border: none;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 15px;\n    font-weight: 900;\n  }\n\n  .btn-primary {\n    background: linear-gradient(135deg, #07c160, #0aa75a);\n    color: #fff;\n    box-shadow: 0 10px 22px rgba(7, 193, 96, 0.24);\n  }\n\n  .btn-secondary {\n    background: #ffffff;\n    color: #1677ff;\n    border: 1px solid rgba(22, 119, 255, 0.16);\n  }\n\n  .btn-coral,\n  .quiz-option.incorrect,\n  .draw-feedback.error {\n    background: #fff1f0;\n    color: #cf2b2b;\n    border-color: #ffd2cf;\n  }\n\n  .hanzi-display {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'SimSun', sans-serif;\n  }\n\n  .hanzi-hero {\n    font-size: 116px;\n    color: #07c160;\n    animation: hanziFloat 5s ease-in-out infinite;\n  }\n\n  .hanzi-xl {\n    font-size: 78px;\n  }\n\n  .hanzi-word {\n    font-size: 80px;\n  }\n\n  .pinyin-display {\n    color: #1677ff;\n  }\n\n  .meaning-display {\n    color: #5b6973;\n  }\n\n  .section-title {\n    margin: 24px 0 12px;\n  }\n\n  .section-line {\n    height: 1px;\n    background: linear-gradient(90deg, rgba(7, 193, 96, 0.35), transparent);\n  }\n\n  .lesson-card {\n    gap: 14px;\n  }\n\n  .lesson-number {\n    min-width: 58px;\n  }\n\n  .draw-mode-selector {\n    padding: 4px;\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.74);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.06);\n  }\n\n  .draw-mode-btn {\n    border: none;\n    background: transparent;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-weight: 900;\n    color: #65737d;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n  }\n\n  .draw-mode-btn svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  .hanzi-writer-container .text-sm + svg,\n  .hanzi-writer-container svg:first-child {\n    max-width: 100%;\n  }\n\n  .hanzi-writer-container > div[style*=\"position: absolute\"] svg {\n    width: 46px;\n    height: 46px;\n  }\n\n  .draw-mode-btn.active {\n    background: #07c160;\n    color: #fff;\n    box-shadow: 0 7px 16px rgba(7, 193, 96, 0.2);\n  }\n\n  .hanzi-writer-container {\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.04), rgba(22, 119, 255, 0.04)),\n      #fff;\n  }\n\n  .stroke-dot {\n    border: none;\n    background: #d8e6df;\n  }\n\n  .stroke-dot.completed,\n  .draw-feedback.success,\n  .quiz-option.correct {\n    background: #e8fff3;\n    color: #087541;\n    border-color: #b7f1d2;\n  }\n\n  .stroke-dot.current {\n    background: #1677ff;\n  }\n\n  .draw-stat {\n    background: rgba(255, 255, 255, 0.76);\n  }\n\n  .quiz-question {\n    margin: 10px 0 14px;\n    padding: 24px 16px;\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.78);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .quiz-option {\n    padding: 15px 16px;\n    background: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.06);\n  }\n\n  .quiz-feedback {\n    border-radius: var(--radius);\n    border-color: rgba(22, 119, 255, 0.16);\n    background: #f0f7ff;\n    color: #17344d;\n  }\n\n  .flashcard {\n    min-height: 310px;\n    background:\n      radial-gradient(circle at 50% 24%, rgba(7, 193, 96, 0.13), transparent 35%),\n      #fff;\n  }\n\n  .flashcard-hint {\n    color: #84929a;\n  }\n\n  .char-item {\n    border: none;\n    border-radius: 6px;\n    background: #edf3ef;\n  }\n\n  .char-item.mastered {\n    background: #07c160;\n    color: #fff;\n  }\n\n  .char-item.learning {\n    background: #1677ff;\n    color: #fff;\n  }\n\n  .streak-badge {\n    background: #fff7e6;\n    color: #9a6400;\n    border: 1px solid #ffe2a8;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n  }\n\n  .floating-indicator {\n    background: rgba(255, 255, 255, 0.96);\n    border-color: rgba(7, 193, 96, 0.2);\n  }\n\n  .app-mascot {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    padding: 14px;\n    margin-bottom: 14px;\n    border-radius: var(--radius);\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.12), rgba(22, 119, 255, 0.1)),\n      rgba(255, 255, 255, 0.82);\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.08);\n    animation: slideUp 0.35s ease-out;\n  }\n\n  .app-mascot-face {\n    width: 58px;\n    height: 58px;\n    display: grid;\n    place-items: center;\n    border-radius: 18px;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    color: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 34px;\n    font-weight: 900;\n    box-shadow: 0 10px 18px rgba(7, 193, 96, 0.24);\n    animation: mascotPulse 3.4s ease-in-out infinite;\n  }\n\n  .app-mascot-title {\n    margin: 0 0 2px;\n    font-size: 15px;\n    font-weight: 900;\n    color: #1d2c35;\n  }\n\n  .app-mascot-subtitle {\n    margin: 0;\n    font-size: 12px;\n    color: #5f6e77;\n  }\n\n  @keyframes characterDrift {\n    0%, 100% { transform: translateY(0) rotate(-5deg); }\n    50% { transform: translateY(18px) rotate(3deg); }\n  }\n\n  @keyframes iconBreathe {\n    0%, 100% { transform: translateY(0) scale(1); }\n    50% { transform: translateY(-3px) scale(1.04); }\n  }\n\n  @keyframes mascotPulse {\n    0%, 100% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    *, *::before, *::after {\n      animation-duration: 0.001ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.001ms !important;\n    }\n  }\n\n  /* ===== UTILITY ANIMATIONS ===== */\n  @keyframes slideUp {\n    from { opacity: 0; transform: translateY(20px); }\n    to { opacity: 1; transform: translateY(0); }\n  }\n\n  .animate-slide-up {\n    animation: slideUp 0.35s ease-out;\n  }\n\n  /* ===== FULL PRODUCT REDESIGN ===== */\n  .app-container {\n    position: relative;\n    min-height: 100vh;\n    overflow-anchor: none;\n  }\n\n  .screen {\n    padding-top: 22px;\n    padding-bottom: calc(118px + env(safe-area-inset-bottom, 20px));\n    overflow-anchor: none;\n  }\n\n  .app-container::before {\n    content: \"\";\n    position: fixed;\n    inset: 0;\n    background:\n      linear-gradient(180deg, rgba(7, 193, 96, 0.12), transparent 220px),\n      repeating-linear-gradient(135deg, rgba(7, 193, 96, 0.025) 0 1px, transparent 1px 18px);\n    pointer-events: none;\n  }\n\n  .super-topbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-bottom: 14px;\n  }\n\n  .brand-lockup {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    min-width: 0;\n  }\n\n  .brand-mark {\n    width: 48px;\n    height: 48px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: transparent;\n  }\n\n  .hanzi-logo-svg {\n    width: 58px;\n    height: 58px;\n    filter: drop-shadow(0 12px 22px rgba(7, 193, 96, 0.22));\n  }\n\n  .header-logo-mark {\n    width: 40px;\n    height: 40px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n  }\n\n  .header-logo-mark .hanzi-logo-svg {\n    width: 42px;\n    height: 42px;\n    filter: drop-shadow(0 8px 14px rgba(7, 193, 96, 0.18));\n  }\n\n  .brand-title {\n    margin: 0;\n    font-size: 20px;\n    line-height: 1;\n    font-weight: 900;\n    color: #14251c;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .brand-subtitle {\n    margin: 4px 0 0;\n    color: #6c7a73;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .daily-chip {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    min-height: 34px;\n    padding: 0 11px;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.86);\n    border: 1px solid rgba(217, 154, 24, 0.22);\n    color: #9a6400;\n    font-weight: 900;\n    box-shadow: 0 8px 20px rgba(154, 100, 0, 0.08);\n  }\n\n  .topbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-shrink: 0;\n  }\n\n  .language-toggle {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2px;\n    min-height: 34px;\n    padding: 3px;\n    border: 1px solid rgba(7, 193, 96, 0.14);\n    border-radius: 8px;\n    background: rgba(255,255,255,0.82);\n    box-shadow: 0 8px 20px rgba(20, 49, 35, 0.07);\n  }\n\n  .language-toggle button {\n    min-width: 38px;\n    padding: 0 8px;\n    border-radius: 6px;\n    color: #687870;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .language-toggle button.active {\n    background: #07c160;\n    color: #fff;\n  }\n\n  .guide-toggle,\n  .sound-toggle {\n    width: 34px;\n    height: 34px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    border-radius: 8px;\n    background: rgba(255,255,255,0.82);\n    color: #687870;\n    box-shadow: 0 8px 20px rgba(20, 49, 35, 0.07);\n    transition: transform var(--transition-fast), color var(--transition-fast), background var(--transition-fast);\n  }\n\n  .guide-toggle {\n    color: #07a653;\n    background: #e8fff3;\n    border-color: rgba(7, 193, 96, 0.16);\n  }\n\n  .guide-toggle svg,\n  .sound-toggle svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  .sound-toggle.active {\n    background: #07c160;\n    color: #fff;\n  }\n\n  .ambience-toggle {\n    color: #9a6400;\n  }\n\n  .ambience-toggle.active {\n    background: #d99a18;\n    color: #fff;\n    box-shadow: 0 10px 24px rgba(217, 154, 24, 0.2);\n  }\n\n  .guide-toggle:active,\n  .sound-toggle:active {\n    transform: scale(0.96);\n  }\n\n  @media (max-width: 380px) {\n    .super-topbar {\n      gap: 8px;\n    }\n\n    .topbar-actions {\n      gap: 6px;\n    }\n\n    .language-toggle button {\n      min-width: 32px;\n      padding: 0 6px;\n    }\n\n    .guide-toggle,\n    .sound-toggle {\n      width: 32px;\n      height: 32px;\n    }\n\n    .daily-chip {\n      padding: 0 8px;\n    }\n  }\n\n  .wallet-card {\n    position: relative;\n    min-height: 188px;\n    padding: 20px;\n    border-radius: 8px;\n    overflow: hidden;\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.96), rgba(22, 119, 255, 0.88)),\n      #07c160;\n    color: #fff;\n    box-shadow: 0 18px 40px rgba(7, 193, 96, 0.24);\n    animation: walletEnter 0.48s ease-out;\n  }\n\n  .wallet-card::before {\n    content: \"学\";\n    position: absolute;\n    right: -10px;\n    top: -28px;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 180px;\n    font-weight: 900;\n    color: rgba(255,255,255,0.11);\n    line-height: 1;\n  }\n\n  .wallet-card::after {\n    content: \"\";\n    position: absolute;\n    left: 20px;\n    right: 20px;\n    bottom: 18px;\n    height: 1px;\n    background: rgba(255,255,255,0.28);\n  }\n\n  .wallet-label {\n    margin: 0;\n    color: rgba(255,255,255,0.78);\n    font-size: 12px;\n    font-weight: 800;\n  }\n\n  .wallet-score {\n    margin: 8px 0 16px;\n    font-size: 56px;\n    line-height: 0.9;\n    font-weight: 900;\n    letter-spacing: -1px;\n  }\n\n  .wallet-card .progress-bar {\n    background: rgba(255,255,255,0.25);\n  }\n\n  .wallet-card .progress-fill {\n    background: #fff;\n  }\n\n  .wallet-meta {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-top: 12px;\n    color: rgba(255,255,255,0.86);\n    font-size: 12px;\n  }\n\n  .wallet-seal {\n    display: grid;\n    place-items: center;\n    width: 44px;\n    height: 44px;\n    border: 1px solid rgba(255,255,255,0.36);\n    border-radius: 8px;\n    color: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 24px;\n    font-weight: 900;\n  }\n\n  .daily-entry-card {\n    position: relative;\n    display: grid;\n    gap: 12px;\n    margin: 14px 0 16px;\n    padding: 14px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.96), rgba(232, 255, 243, 0.92));\n    border: 1px solid rgba(7, 193, 96, 0.12);\n    box-shadow: 0 14px 34px rgba(20, 49, 35, 0.09);\n    cursor: pointer;\n    overflow: hidden;\n  }\n\n  .daily-entry-card::after {\n    content: \"练\";\n    position: absolute;\n    right: -4px;\n    bottom: -24px;\n    color: rgba(7, 193, 96, 0.07);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 104px;\n    font-weight: 900;\n    line-height: 1;\n  }\n\n  .daily-entry-main {\n    position: relative;\n    z-index: 1;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 10px;\n    align-items: center;\n  }\n\n  .daily-entry-icon {\n    width: 42px;\n    height: 42px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    color: #fff;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    box-shadow: 0 10px 20px rgba(7, 193, 96, 0.18);\n  }\n\n  .daily-entry-kicker {\n    margin: 0 0 2px;\n    color: #07a653;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .daily-entry-title {\n    margin: 0;\n    color: #14251c;\n    font-size: 16px;\n    font-weight: 900;\n    line-height: 1.2;\n  }\n\n  .daily-entry-strip {\n    position: relative;\n    z-index: 1;\n    display: flex;\n    gap: 6px;\n    overflow: hidden;\n  }\n\n  .daily-entry-char {\n    width: 36px;\n    height: 36px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n    border-radius: 8px;\n    background: #fff;\n    color: #07a653;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 22px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.08);\n  }\n\n  .daily-entry-meta {\n    position: relative;\n    z-index: 1;\n    display: flex;\n    gap: 8px;\n    color: #687870;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .quick-lane {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 8px;\n    margin: 14px 0 20px;\n  }\n\n  .quick-action {\n    min-width: 0;\n    min-height: 82px;\n    padding: 0 4px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    border: 0;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.92);\n    color: #1c2b34;\n    box-shadow: 0 10px 26px rgba(20, 49, 35, 0.08);\n    font-weight: 900;\n    transition: transform 0.18s ease, box-shadow 0.18s ease;\n  }\n\n  .quick-action:active {\n    transform: translateY(2px) scale(0.98);\n  }\n\n  .quick-action-icon {\n    width: 38px;\n    height: 38px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .quick-action-icon svg,\n  .bottom-nav-icon svg {\n    width: 22px;\n    height: 22px;\n  }\n\n  .quick-action:nth-child(2) .quick-action-icon {\n    background: #eef5ff;\n  }\n\n  .quick-action:nth-child(3) .quick-action-icon {\n    background: #fff4e0;\n  }\n\n  .quick-action:nth-child(4) .quick-action-icon {\n    background: #fff0f0;\n  }\n\n  .quick-action-label {\n    font-size: 11px;\n  }\n\n  .insight-panel {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 12px;\n    align-items: center;\n    padding: 16px;\n    margin-bottom: 18px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.96), rgba(240, 255, 248, 0.96));\n    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .insight-title {\n    margin: 0 0 4px;\n    font-weight: 900;\n    color: #152820;\n  }\n\n  .insight-copy {\n    margin: 0;\n    color: #66756e;\n    font-size: 12px;\n  }\n\n  .insight-character {\n    width: 54px;\n    height: 54px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #121f18;\n    color: #07c160;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 32px;\n    font-weight: 900;\n    animation: characterBlink 4.2s ease-in-out infinite;\n  }\n\n  .app-bottom-nav {\n    position: fixed;\n    left: 50%;\n    bottom: calc(12px + env(safe-area-inset-bottom, 0px));\n    z-index: 200;\n    width: min(440px, calc(100vw - 24px));\n    max-width: calc(100vw - 24px);\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 4px;\n    padding: 8px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.92);\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    box-shadow: 0 18px 50px rgba(20, 49, 35, 0.18);\n    transform: translateX(-50%);\n    backdrop-filter: blur(16px);\n  }\n\n  .bottom-nav-item {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 3px;\n    padding: 7px 2px;\n    border: 0;\n    border-radius: 8px;\n    background: transparent;\n    color: #728078;\n    font-size: 10px;\n    font-weight: 900;\n  }\n\n  .bottom-nav-item.active {\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .bottom-nav-icon {\n    font-size: 18px;\n    line-height: 1;\n  }\n\n  .menu-grid {\n    display: none;\n  }\n\n  .stats-bar {\n    margin-top: 12px;\n  }\n\n  .card {\n    border: none;\n  }\n\n  .section-title {\n    margin-top: 22px;\n  }\n\n  .header {\n    min-height: 54px;\n    padding: 0;\n    margin-bottom: 14px;\n  }\n\n  .header .logo {\n    font-size: 24px;\n  }\n\n  .header .logo::after {\n    content: \"学\";\n    width: 22px;\n    height: 22px;\n    padding: 0;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    font-size: 12px;\n  }\n\n  .screen > .title-xl {\n    margin-top: 4px;\n  }\n\n  .lesson-card {\n    min-height: 82px;\n  }\n\n  .lesson-number {\n    width: 54px;\n    height: 54px;\n    min-width: 54px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    font-size: 24px;\n  }\n\n  .lesson-info .title-md {\n    font-size: 15px;\n  }\n\n  .lesson-title-line {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    min-width: 0;\n  }\n\n  .lesson-title-line .title-md {\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .lesson-chinese-chip {\n    flex: 0 0 auto;\n    max-width: 74px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 3px 7px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .flashcard.card {\n    border: 0;\n  }\n\n  .flashcard::before {\n    opacity: 1;\n    height: 0;\n  }\n\n  .flashcard .hanzi-display {\n    color: #07c160 !important;\n  }\n\n  .card[style*=\"text-align: center\"] {\n    background: rgba(255,255,255,0.9);\n  }\n\n  .hanzi-writer-container {\n    border: 1px solid rgba(24, 33, 43, 0.08);\n  }\n\n  .canvas-controls,\n  .nav-actions,\n  .backup-buttons {\n    gap: 10px;\n  }\n\n  .results-display {\n    border-radius: 8px;\n    background: rgba(255,255,255,0.78);\n    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .score-circle {\n    border-color: #07c160;\n    box-shadow: 0 0 0 8px rgba(7,193,96,0.08);\n  }\n\n  .char-grid {\n    gap: 8px;\n  }\n\n  .floating-indicator {\n    bottom: calc(98px + env(safe-area-inset-bottom, 0px));\n  }\n\n  .lessons-quick-actions {\n    display: none !important;\n  }\n\n  @keyframes walletEnter {\n    from { opacity: 0; transform: translateY(18px) scale(0.98); }\n    to { opacity: 1; transform: translateY(0) scale(1); }\n  }\n\n  @keyframes characterBlink {\n    0%, 100% { transform: translateY(0); box-shadow: 0 0 0 rgba(7,193,96,0); }\n    50% { transform: translateY(-4px); box-shadow: 0 10px 22px rgba(7,193,96,0.18); }\n  }\n\n  /* ===== DEEP SUPER-APP POLISH ===== */\n  .wallet-card {\n    min-height: 206px;\n    background:\n      radial-gradient(circle at 78% 30%, rgba(255, 255, 255, 0.22), transparent 28%),\n      linear-gradient(135deg, #06b85b 0%, #12c8a1 48%, #1777ff 100%);\n  }\n\n  .wallet-card .progress-bar {\n    height: 7px;\n    margin-top: 22px;\n  }\n\n  .wallet-meta {\n    position: relative;\n    z-index: 1;\n  }\n\n  .wallet-seal {\n    background: rgba(255,255,255,0.12);\n    backdrop-filter: blur(10px);\n  }\n\n  .wallet-brand-mark {\n    position: absolute;\n    z-index: 1;\n    right: 14px;\n    top: 14px;\n    width: 70px;\n    height: 70px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.16);\n    backdrop-filter: blur(10px);\n  }\n\n  .wallet-brand-mark .hanzi-logo-svg {\n    width: 58px;\n    height: 58px;\n    filter: drop-shadow(0 8px 12px rgba(15, 40, 30, 0.18));\n  }\n\n  @media (max-width: 380px) {\n    .wallet-brand-mark {\n      width: 58px;\n      height: 58px;\n      right: 12px;\n      top: 12px;\n    }\n\n    .wallet-brand-mark .hanzi-logo-svg {\n      width: 50px;\n      height: 50px;\n    }\n  }\n\n  .quick-lane {\n    padding: 8px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.64);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04);\n  }\n\n  .quick-action {\n    min-height: 88px;\n    box-shadow: none;\n  }\n\n  .quick-action-icon {\n    position: relative;\n  }\n\n  .quick-action-icon::after {\n    content: \"\";\n    position: absolute;\n    right: -2px;\n    top: -2px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #ffcf33;\n    box-shadow: 0 0 0 2px #fff;\n  }\n\n  .home-metrics .stat-item {\n    background: linear-gradient(180deg, #fff, #f8fffb);\n  }\n\n  .account-entry {\n    display: block;\n    background:\n      linear-gradient(90deg, rgba(255,255,255,0.96), rgba(241, 250, 246, 0.96));\n  }\n\n  .service-section {\n    padding: 10px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.58);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04);\n  }\n\n  .service-section-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 4px 4px 12px;\n    color: #708078;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .service-list {\n    display: grid;\n    gap: 10px;\n  }\n\n  .material-group {\n    display: grid;\n    gap: 8px;\n  }\n\n  .material-group + .material-group {\n    margin-top: 12px;\n  }\n\n  .material-group-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2px 4px;\n    color: #54645c;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .material-group-head span:last-child {\n    color: #91a099;\n  }\n\n  .service-row {\n    margin-bottom: 0;\n    box-shadow: none;\n    background: #fff;\n  }\n\n  .service-row::after {\n    content: \"›\";\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #a6b4ad;\n    font-size: 28px;\n    line-height: 1;\n  }\n\n  .service-row .lesson-info {\n    padding-right: 20px;\n  }\n\n  .study-pass-card {\n    min-height: 336px;\n    background:\n      radial-gradient(circle at 50% 18%, rgba(7, 193, 96, 0.18), transparent 38%),\n      linear-gradient(180deg, #fff, #fafffc);\n  }\n\n  .study-pass-card::after {\n    content: \"记\";\n    position: absolute;\n    right: 18px;\n    bottom: 14px;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 64px;\n    color: rgba(7, 193, 96, 0.06);\n    font-weight: 900;\n  }\n\n  .related-service-card {\n    background: #fff;\n  }\n\n  .mini-app-segment {\n    background: rgba(255,255,255,0.78);\n    border: 1px solid rgba(24, 33, 43, 0.06);\n  }\n\n  .draw-prompt-card {\n    display: block;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241, 250, 246, 0.98));\n  }\n\n  .draw-prompt-card::after {\n    content: \"写\";\n    position: absolute;\n    right: 18px;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 54px;\n    font-weight: 900;\n    color: rgba(7, 193, 96, 0.08);\n  }\n\n  .writer-mini-program {\n    background:\n      linear-gradient(45deg, transparent calc(50% - 1px), rgba(7,193,96,0.12) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)),\n      linear-gradient(-45deg, transparent calc(50% - 1px), rgba(22,119,255,0.1) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)),\n      repeating-linear-gradient(0deg, transparent 0 39px, rgba(7,193,96,0.1) 39px 40px),\n      repeating-linear-gradient(90deg, transparent 0 39px, rgba(7,193,96,0.1) 39px 40px),\n      linear-gradient(180deg, #ffffff, #f8fdfb);\n    box-shadow:\n      inset 0 0 0 1px rgba(7, 193, 96, 0.08),\n      0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .quiz-pass-card {\n    background:\n      radial-gradient(circle at 50% 20%, rgba(7, 193, 96, 0.1), transparent 36%),\n      #fff;\n  }\n\n  .quiz-mode-card {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 14px;\n    align-items: center;\n    padding: 16px;\n    margin-bottom: 12px;\n    background: #fff;\n  }\n\n  .quiz-mode-icon {\n    width: 50px;\n    height: 50px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .quiz-mode-icon svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  .quiz-mode-card:nth-of-type(2) .quiz-mode-icon {\n    background: #eef5ff;\n    color: #1677ff;\n  }\n\n  .quiz-mode-card:nth-of-type(3) .quiz-mode-icon {\n    background: #fff4e0;\n    color: #c77600;\n  }\n\n  .quiz-option {\n    border-radius: 8px;\n    position: relative;\n  }\n\n  .quiz-option::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 10px;\n    bottom: 10px;\n    width: 3px;\n    border-radius: 999px;\n    background: rgba(7, 193, 96, 0.28);\n  }\n\n  .stats-wallet {\n    padding: 8px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.6);\n  }\n\n  .stats-wallet .stat-item {\n    background: #fff;\n    box-shadow: none;\n  }\n\n  .char-grid {\n    padding: 10px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.62);\n  }\n\n  .char-item {\n    box-shadow: inset 0 0 0 1px rgba(24,33,43,0.04);\n  }\n\n  .app-bottom-nav {\n    background:\n      linear-gradient(180deg, rgba(255,255,255,0.96), rgba(249,252,250,0.96));\n  }\n\n  .bottom-nav-item.active .bottom-nav-icon {\n    animation: tabPop 0.28s ease-out;\n  }\n\n  /* ===== SUPER-APP ROUND TWO ===== */\n  .super-searchbar {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 10px;\n    min-height: 42px;\n    padding: 0 12px;\n    margin: 0 0 12px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.88);\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);\n    color: #718078;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .super-searchbar svg {\n    width: 18px;\n    height: 18px;\n    color: #07a653;\n  }\n\n  .super-searchbar strong {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #1d2c35;\n    font-size: 13px;\n  }\n\n  .super-search-action {\n    display: grid;\n    place-items: center;\n    width: 26px;\n    height: 26px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .mini-program-panel {\n    padding: 12px;\n    margin: 0 0 16px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.72);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04), 0 12px 28px rgba(20, 49, 35, 0.06);\n  }\n\n  .mini-program-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    color: #687870;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .mini-program-grid {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 10px 8px;\n  }\n\n  .mini-program-tile {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 7px;\n    min-width: 0;\n    padding: 6px 2px;\n    border: 0;\n    background: transparent;\n    color: #213129;\n    font: inherit;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .mini-program-tile:active {\n    transform: scale(0.96);\n  }\n\n  .mini-program-icon {\n    width: 42px;\n    height: 42px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    color: #fff;\n    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.1);\n    position: relative;\n    overflow: hidden;\n  }\n\n  .mini-program-icon::before {\n    content: \"\";\n    position: absolute;\n    inset: 4px auto auto 5px;\n    width: 12px;\n    height: 5px;\n    border-radius: 999px;\n    background: rgba(255,255,255,0.36);\n  }\n\n  .mini-program-icon svg {\n    width: 22px;\n    height: 22px;\n    position: relative;\n    z-index: 1;\n  }\n\n  .mini-program-name {\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .mini-program-tile:nth-child(1) .mini-program-icon { background: linear-gradient(135deg, #07c160, #18d58b); }\n  .mini-program-tile:nth-child(2) .mini-program-icon { background: linear-gradient(135deg, #1677ff, #28b8ff); }\n  .mini-program-tile:nth-child(3) .mini-program-icon { background: linear-gradient(135deg, #ff9f1c, #ffd166); }\n  .mini-program-tile:nth-child(4) .mini-program-icon { background: linear-gradient(135deg, #ff4d4f, #ff8a80); }\n  .mini-program-tile:nth-child(5) .mini-program-icon { background: linear-gradient(135deg, #2f3542, #57606f); }\n  .mini-program-tile:nth-child(6) .mini-program-icon { background: linear-gradient(135deg, #00a6a6, #00d2d3); }\n  .mini-program-tile:nth-child(7) .mini-program-icon { background: linear-gradient(135deg, #8e44ad, #c56cf0); }\n  .mini-program-tile:nth-child(8) .mini-program-icon { background: linear-gradient(135deg, #d99a18, #f6c343); }\n\n  .illustration-strip {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n    margin: 14px 0 16px;\n  }\n\n  .story-sticker {\n    min-width: 0;\n    min-height: 132px;\n    padding: 10px 6px 9px;\n    border: 0;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.86);\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);\n    color: #1d2c35;\n    overflow: hidden;\n    position: relative;\n  }\n\n  .story-sticker::after {\n    content: \"\";\n    position: absolute;\n    inset: auto 0 0 auto;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background: rgba(7, 193, 96, 0.08);\n  }\n\n  .story-sticker:active {\n    transform: scale(0.97);\n  }\n\n  .story-sticker-svg {\n    display: block;\n    width: 74px;\n    max-width: 100%;\n    height: 60px;\n    margin: 0 auto 5px;\n    filter: drop-shadow(0 8px 12px rgba(20, 49, 35, 0.11));\n    animation: stickerBob 4.4s ease-in-out infinite;\n  }\n\n  .story-sticker:nth-child(2) .story-sticker-svg {\n    animation-delay: -1.2s;\n  }\n\n  .story-sticker:nth-child(3) .story-sticker-svg {\n    animation-delay: -2.1s;\n  }\n\n  .story-sticker-title {\n    display: block;\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .cute-coach-card {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    padding: 14px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(235, 255, 246, 0.96));\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);\n  }\n\n  .coach-mini-svg,\n  .panda-buddy-svg {\n    width: 66px;\n    height: 66px;\n    filter: drop-shadow(0 10px 18px rgba(7, 193, 96, 0.18));\n  }\n\n  .coach-title {\n    margin: 0 0 4px;\n    color: #14251c;\n    font-size: 15px;\n    font-weight: 900;\n  }\n\n  .coach-copy {\n    margin: 0;\n    color: #66756e;\n    font-size: 12px;\n    line-height: 1.45;\n  }\n\n  .coach-guide-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    min-height: 30px;\n    margin-top: 10px;\n    padding: 0 10px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n    font-size: 12px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.12);\n  }\n\n  .coach-guide-link svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  .coach-guide-link:active {\n    transform: scale(0.97);\n  }\n\n  .tutorial-backdrop {\n    position: fixed;\n    inset: 0;\n    z-index: 300;\n    display: grid;\n    place-items: center;\n    padding: max(18px, env(safe-area-inset-top, 0px)) 18px max(18px, env(safe-area-inset-bottom, 0px));\n    background: rgba(17, 31, 24, 0.34);\n    backdrop-filter: blur(14px);\n  }\n\n  .tutorial-card {\n    position: relative;\n    width: min(calc(100vw - 48px), 360px);\n    max-height: min(760px, calc(100vh - 36px));\n    box-sizing: border-box;\n    overflow: auto;\n    padding: 16px;\n    border-radius: 8px;\n    background:\n      radial-gradient(circle at 88% 6%, rgba(22, 119, 255, 0.12), transparent 26%),\n      linear-gradient(180deg, rgba(255,255,255,0.98), rgba(243, 255, 249, 0.98));\n    border: 1px solid rgba(255,255,255,0.72);\n    box-shadow: 0 24px 70px rgba(9, 35, 23, 0.28);\n    animation: tutorialIn 0.28s ease-out;\n  }\n\n  .tutorial-close {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    z-index: 2;\n    width: 32px;\n    height: 32px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.84);\n    color: #687870;\n    font-size: 14px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.06);\n  }\n\n  .tutorial-hero {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    padding-right: 34px;\n  }\n\n  .tutorial-panda {\n    width: 78px;\n    height: 78px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.12);\n  }\n\n  .tutorial-panda .panda-buddy-svg {\n    width: 74px;\n    height: 74px;\n  }\n\n  .tutorial-copy-block {\n    min-width: 0;\n  }\n\n  .tutorial-kicker {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    margin-bottom: 6px;\n    color: #07a653;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .tutorial-kicker span:last-child {\n    color: #90a098;\n  }\n\n  .tutorial-copy-block h2 {\n    margin: 0;\n    color: #14251c;\n    font-size: 21px;\n    line-height: 1.1;\n    font-weight: 900;\n  }\n\n  .tutorial-copy-block p {\n    margin: 7px 0 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.45;\n    font-weight: 700;\n  }\n\n  .tutorial-progress {\n    height: 7px;\n    margin: 15px 0;\n    overflow: hidden;\n    border-radius: 999px;\n    background: #dfece6;\n  }\n\n  .tutorial-progress-fill {\n    height: 100%;\n    border-radius: 999px;\n    background: linear-gradient(90deg, #07c160, #1677ff);\n    transition: width 0.25s ease;\n  }\n\n  .tutorial-step-card {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    min-height: 112px;\n    padding: 14px;\n    border-radius: 8px;\n    background: #fff;\n    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .tutorial-step-icon {\n    width: 50px;\n    height: 50px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    color: #fff;\n    box-shadow: 0 12px 22px rgba(7, 193, 96, 0.18);\n  }\n\n  .tutorial-step-icon svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  .tutorial-step-card h3 {\n    margin: 0;\n    color: #14251c;\n    font-size: 17px;\n    line-height: 1.16;\n    font-weight: 900;\n  }\n\n  .tutorial-step-card p {\n    margin: 6px 0 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.45;\n    font-weight: 700;\n  }\n\n  .tutorial-dots {\n    display: flex;\n    justify-content: center;\n    gap: 6px;\n    margin: 14px 0;\n  }\n\n  .tutorial-dots span {\n    width: 7px;\n    height: 7px;\n    border-radius: 999px;\n    background: #cddbd4;\n    transition: width 0.2s ease, background 0.2s ease;\n  }\n\n  .tutorial-dots span.active {\n    width: 22px;\n    background: #07c160;\n  }\n\n  .tutorial-open-step {\n    width: 100%;\n    min-height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    margin-bottom: 12px;\n    border-radius: 8px;\n    background: linear-gradient(135deg, #07c160, #0aa75a);\n    color: #fff;\n    font-size: 14px;\n    font-weight: 900;\n    box-shadow: 0 12px 24px rgba(7, 193, 96, 0.22);\n  }\n\n  .tutorial-open-step svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  .tutorial-actions {\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n  }\n\n  .tutorial-action-pair {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n    min-width: 0;\n    width: 100%;\n  }\n\n  .tutorial-quiet,\n  .tutorial-secondary,\n  .tutorial-primary {\n    min-height: 38px;\n    padding: 0 12px;\n    border-radius: 8px;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .tutorial-quiet {\n    color: #687870;\n  }\n\n  .tutorial-secondary {\n    background: #fff;\n    color: #1677ff;\n    box-shadow: inset 0 0 0 1px rgba(22, 119, 255, 0.14);\n  }\n\n  .tutorial-secondary:disabled {\n    opacity: 0.4;\n  }\n\n  .tutorial-primary {\n    background: #e8fff3;\n    color: #07a653;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.14);\n  }\n\n  .tutorial-quiet {\n    justify-self: start;\n  }\n\n  @media (max-width: 600px) {\n    .tutorial-card {\n      justify-self: start;\n    }\n  }\n\n  @keyframes tutorialIn {\n    from { opacity: 0; transform: translateY(12px) scale(0.98); }\n    to { opacity: 1; transform: translateY(0) scale(1); }\n  }\n\n  .lesson-service-icon {\n    width: 46px;\n    height: 46px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n    border-radius: 8px;\n    background: #f0fff6;\n    color: #07a653;\n  }\n\n  .lesson-service-icon svg {\n    width: 22px;\n    height: 22px;\n  }\n\n  .service-row:nth-child(2n) .lesson-service-icon {\n    background: #eff6ff;\n    color: #1677ff;\n  }\n\n  .service-row:nth-child(3n) .lesson-service-icon {\n    background: #fff6e6;\n    color: #c77600;\n  }\n\n  @keyframes coachFloat {\n    0%, 100% { transform: translateY(0) rotate(-1deg); }\n    50% { transform: translateY(-5px) rotate(1deg); }\n  }\n\n  @keyframes stickerBob {\n    0%, 100% { transform: translateY(0) rotate(-1deg); }\n    50% { transform: translateY(-4px) rotate(1deg); }\n  }\n\n  @keyframes tabPop {\n    0% { transform: translateY(0) scale(1); }\n    50% { transform: translateY(-3px) scale(1.08); }\n    100% { transform: translateY(0) scale(1); }\n  }\n\n  /* ===== MINI-PROGRAM SYSTEM ===== */\n  .mini-app-hero {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 12px;\n    align-items: center;\n    padding: 14px;\n    margin: 0 0 14px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239, 255, 247, 0.96));\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);\n    border: 1px solid rgba(24, 33, 43, 0.05);\n  }\n\n  .mini-app-hero-icon {\n    width: 48px;\n    height: 48px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    color: #fff;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    box-shadow: 0 10px 20px rgba(7, 193, 96, 0.2);\n  }\n\n  .mini-app-hero-icon svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  .mini-app-title {\n    margin: 0;\n    color: #14251c;\n    font-size: 19px;\n    line-height: 1.08;\n    font-weight: 900;\n  }\n\n  .mini-app-subtitle {\n    margin: 4px 0 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.35;\n    font-weight: 700;\n  }\n\n  .mini-app-pill {\n    display: grid;\n    place-items: center;\n    min-width: 42px;\n    min-height: 30px;\n    padding: 0 9px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n    font-size: 12px;\n    font-weight: 900;\n    white-space: nowrap;\n  }\n\n  .mini-app-progress-card {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 10px;\n    align-items: center;\n    margin: 0 0 12px;\n    padding: 12px 14px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.78);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.05);\n  }\n\n  .mini-app-progress-card .text-sm {\n    margin: 0;\n  }\n\n  .mini-app-progress-count {\n    color: #07c160;\n    font-weight: 900;\n    font-size: 13px;\n  }\n\n  .daily-training-card {\n    padding: 14px;\n    margin-bottom: 14px;\n    border-radius: 8px;\n    background:\n      radial-gradient(circle at 88% 12%, rgba(22, 119, 255, 0.12), transparent 30%),\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239, 255, 247, 0.96));\n    border: 1px solid rgba(24, 33, 43, 0.05);\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);\n  }\n\n  .daily-training-hero {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    margin-bottom: 12px;\n  }\n\n  .daily-training-title {\n    margin: 0 0 4px;\n    color: #14251c;\n    font-size: 16px;\n    font-weight: 900;\n  }\n\n  .daily-training-copy {\n    margin: 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.45;\n    font-weight: 700;\n  }\n\n  .daily-queue-grid {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 8px;\n  }\n\n  .daily-queue-char {\n    min-height: 72px;\n    display: grid;\n    place-items: center;\n    gap: 2px;\n    padding: 8px 4px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.9);\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.08);\n  }\n\n  .daily-queue-char .hanzi-display {\n    color: #07a653;\n    font-size: 30px;\n    line-height: 1;\n  }\n\n  .daily-queue-char small {\n    color: #687870;\n    font-size: 10px;\n    font-weight: 900;\n  }\n\n  .daily-reason-row {\n    display: flex;\n    gap: 8px;\n    margin-top: 12px;\n    color: #687870;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .daily-step-grid {\n    display: grid;\n    gap: 10px;\n    margin-bottom: 14px;\n  }\n\n  .daily-step-card {\n    position: relative;\n    min-height: 92px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-areas:\n      \"icon title\"\n      \"icon copy\";\n    gap: 3px 12px;\n    align-items: center;\n    padding: 14px;\n    border: 0;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.9);\n    color: #1d2c35;\n    text-align: left;\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);\n    overflow: hidden;\n  }\n\n  .daily-step-card.primary {\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.96), rgba(22, 119, 255, 0.88));\n    color: #fff;\n    box-shadow: 0 16px 32px rgba(7, 193, 96, 0.18);\n  }\n\n  .daily-step-card:active {\n    transform: scale(0.985);\n  }\n\n  .daily-step-index {\n    position: absolute;\n    right: 12px;\n    top: 8px;\n    color: rgba(7, 193, 96, 0.14);\n    font-size: 48px;\n    font-weight: 900;\n    line-height: 1;\n  }\n\n  .daily-step-card.primary .daily-step-index {\n    color: rgba(255,255,255,0.18);\n  }\n\n  .daily-step-icon {\n    grid-area: icon;\n    width: 48px;\n    height: 48px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .daily-step-card.primary .daily-step-icon {\n    background: rgba(255,255,255,0.18);\n    color: #fff;\n  }\n\n  .daily-step-card strong {\n    grid-area: title;\n    position: relative;\n    z-index: 1;\n    font-size: 17px;\n    line-height: 1.1;\n  }\n\n  .daily-step-card span:last-child {\n    grid-area: copy;\n    position: relative;\n    z-index: 1;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.35;\n    font-weight: 700;\n  }\n\n  .daily-step-card.primary span:last-child {\n    color: rgba(255,255,255,0.84);\n  }\n\n  .dual-label {\n    display: block;\n    line-height: 1.15;\n  }\n\n  .dual-label strong {\n    display: block;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .dual-label span {\n    display: block;\n    margin-top: 1px;\n    font-size: 10px;\n    color: #728078;\n    font-weight: 800;\n  }\n\n  .section-title-cn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    margin: 20px 0 10px;\n    color: #687870;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .section-title-cn span:first-child {\n    color: #14251c;\n  }\n\n  @media (min-width: 980px) {\n    .home-screen {\n      width: min(calc(100vw - 72px), 920px);\n      max-width: 920px;\n      display: grid;\n      grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);\n      gap: 18px;\n      align-items: start;\n      padding-bottom: 124px;\n    }\n\n    .home-screen .super-topbar,\n    .home-screen .super-searchbar,\n    .home-screen .illustration-strip,\n    .home-screen .quick-lane,\n    .home-screen .mini-program-panel,\n    .home-screen .home-metrics,\n    .home-screen .section-title,\n    .home-screen .account-entry {\n      grid-column: 1 / -1;\n    }\n\n    .home-screen .super-topbar,\n    .home-screen .super-searchbar,\n    .home-screen .wallet-card,\n    .home-screen .daily-entry-card,\n    .home-screen .illustration-strip,\n    .home-screen .quick-lane,\n    .home-screen .mini-program-panel,\n    .home-screen .cute-coach-card,\n    .home-screen .insight-panel,\n    .home-screen .home-metrics,\n    .home-screen .account-entry {\n      margin-bottom: 0;\n    }\n\n    .home-screen .wallet-card {\n      min-height: 248px;\n    }\n\n    .home-screen .daily-entry-card {\n      align-self: stretch;\n      min-height: 248px;\n    }\n\n    .home-screen .illustration-strip {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .home-screen .quick-lane {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n\n    .home-screen .mini-program-grid {\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n\n    .home-screen .cute-coach-card,\n    .home-screen .insight-panel {\n      min-height: 132px;\n    }\n  }\n\n  @media (max-width: 380px) {\n    .mini-app-hero {\n      grid-template-columns: auto 1fr;\n    }\n\n    .mini-app-pill {\n      grid-column: 1 / -1;\n      justify-self: start;\n    }\n\n    .tutorial-card {\n      padding: 14px;\n    }\n\n    .tutorial-hero {\n      grid-template-columns: 1fr;\n      padding-right: 34px;\n    }\n\n    .tutorial-panda {\n      width: 66px;\n      height: 66px;\n    }\n\n    .tutorial-panda .panda-buddy-svg {\n      width: 64px;\n      height: 64px;\n    }\n\n    .tutorial-actions {\n      align-items: stretch;\n      flex-direction: column;\n    }\n\n    .tutorial-action-pair {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      width: 100%;\n    }\n  }\n";
const TUTORIAL_STORAGE_KEY = 'hanzi_master_tutorial_seen';
const loadTutorialSeen = () => {
  try {
    return localStorage.getItem(TUTORIAL_STORAGE_KEY) === 'true';
  } catch (e) {
    return false;
  }
};
const saveTutorialSeen = () => {
  try {
    localStorage.setItem(TUTORIAL_STORAGE_KEY, 'true');
  } catch (e) {
    console.warn('Failed to save tutorial state:', e);
  }
};
function HanziMasterApp() {
  const [currentView, setCurrentView] = React.useState('home');
  const [progress, setProgress] = React.useState(loadProgress);
  const [selectedLesson, setSelectedLesson] = React.useState(null);
  const [selectedQueue, setSelectedQueue] = React.useState(null);
  const [language, setLanguage] = React.useState(loadLanguage);
  const [soundEnabled, setSoundEnabled] = React.useState(loadSoundEnabled);
  const [ambienceEnabled, setAmbienceEnabled] = React.useState(loadAmbienceEnabled);
  const [tutorialOpen, setTutorialOpen] = React.useState(() => !loadTutorialSeen());
  React.useEffect(() => {
    saveProgress(progress);
  }, [progress]);
  React.useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0
      });
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    resetScroll();
    const frame = requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 80);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [currentView]);
  React.useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch (e) {
      console.warn('Failed to save language:', e);
    }
  }, [language]);
  React.useEffect(() => {
    saveSoundEnabled(soundEnabled);
  }, [soundEnabled]);
  React.useEffect(() => {
    saveAmbienceEnabled(ambienceEnabled);
    if (!ambienceEnabled) {
      stopAmbienceLoop();
      return undefined;
    }
    startAmbienceLoop();
    const unlockAmbience = () => startAmbienceLoop();
    window.addEventListener('pointerdown', unlockAmbience, {
      once: true
    });
    window.addEventListener('keydown', unlockAmbience, {
      once: true
    });
    return () => {
      window.removeEventListener('pointerdown', unlockAmbience);
      window.removeEventListener('keydown', unlockAmbience);
    };
  }, [ambienceEnabled]);
  React.useEffect(() => () => stopAmbienceLoop(), []);
  React.useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = progress.lastStudyDate === yesterday.toDateString();
      setProgress(prev => ({
        ...prev,
        lastStudyDate: today,
        streakDays: wasYesterday ? prev.streakDays + 1 : prev.lastStudyDate ? 1 : 1
      }));
    }
  }, []);
  const updateProgress = React.useCallback(updates => {
    setProgress(prev => ({
      ...prev,
      ...updates
    }));
  }, []);
  const markCharacterLearned = React.useCallback(hanzi => {
    setProgress(prev => {
      if (prev.learningChars.includes(hanzi)) return {
        ...prev,
        totalReviews: prev.totalReviews + 1
      };
      return {
        ...prev,
        learningChars: [...prev.learningChars, hanzi],
        totalReviews: prev.totalReviews + 1
      };
    });
  }, []);
  const markCharacterMastered = React.useCallback(hanzi => {
    setProgress(prev => {
      if (prev.masteredChars.includes(hanzi)) return prev;
      return {
        ...prev,
        masteredChars: [...prev.masteredChars, hanzi],
        learningChars: prev.learningChars.filter(h => h !== hanzi)
      };
    });
  }, []);
  const t = React.useCallback((key, vars) => translateUi(language, key, vars), [language]);
  const playSound = React.useCallback(name => playSoundEffect(name, soundEnabled), [soundEnabled]);
  const openTutorial = React.useCallback(() => {
    playSoundEffect('reveal', soundEnabled);
    setTutorialOpen(true);
  }, [soundEnabled]);
  const closeTutorial = React.useCallback(() => {
    saveTutorialSeen();
    playSoundEffect('tap', soundEnabled);
    setTutorialOpen(false);
  }, [soundEnabled]);
  const setCurrentViewWithSound = React.useCallback(view => {
    if (typeof view !== 'function') {
      if (view !== currentView) playSoundEffect('tap', soundEnabled);
      setCurrentView(view);
      return;
    }
    setCurrentView(prev => view(prev));
  }, [currentView, soundEnabled]);
  const viewProps = {
    progress,
    setCurrentView: setCurrentViewWithSound,
    selectedLesson,
    setSelectedLesson,
    selectedQueue,
    setSelectedQueue,
    updateProgress,
    markCharacterLearned,
    markCharacterMastered,
    language,
    setLanguage,
    soundEnabled,
    setSoundEnabled,
    ambienceEnabled,
    setAmbienceEnabled,
    playSound,
    openTutorial,
    t
  };
  return React.createElement("div", {
    className: "app-container"
  }, React.createElement("style", null, styles), currentView === 'home' && React.createElement(HomeView, _extends({
    key: "home"
  }, viewProps)), currentView === 'daily' && React.createElement(DailyTrainingView, _extends({
    key: "daily"
  }, viewProps)), currentView === 'lessons' && React.createElement(LessonsView, _extends({
    key: "lessons"
  }, viewProps)), currentView === 'learn' && React.createElement(LearnView, _extends({
    key: "learn"
  }, viewProps)), currentView === 'draw' && React.createElement(DrawView, _extends({
    key: "draw"
  }, viewProps)), currentView === 'quiz' && React.createElement(QuizView, _extends({
    key: "quiz"
  }, viewProps)), currentView === 'stats' && React.createElement(StatsView, _extends({
    key: "stats"
  }, viewProps)), React.createElement(BottomNav, {
    currentView: currentView,
    setCurrentView: setCurrentViewWithSound,
    setSelectedLesson: setSelectedLesson,
    setSelectedQueue: setSelectedQueue,
    t: t
  }), React.createElement(TutorialOverlay, {
    open: tutorialOpen,
    onClose: closeTutorial,
    setCurrentView: setCurrentViewWithSound,
    setSelectedLesson: setSelectedLesson,
    setSelectedQueue: setSelectedQueue,
    playSound: playSound,
    t: t
  }));
}
function BottomNav({
  currentView,
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  t
}) {
  if (['learn', 'draw', 'quiz', 'daily'].includes(currentView)) return null;
  const items = [{
    view: 'home',
    icon: 'home',
    label: t('nav.home')
  }, {
    view: 'learn',
    icon: 'card',
    label: t('nav.cards'),
    resetLesson: true
  }, {
    view: 'draw',
    icon: 'brush',
    label: t('nav.write'),
    resetLesson: true
  }, {
    view: 'quiz',
    icon: 'target',
    label: t('nav.quiz'),
    resetLesson: true
  }, {
    view: 'stats',
    icon: 'chart',
    label: t('nav.wallet')
  }];
  return React.createElement("nav", {
    className: "app-bottom-nav",
    "aria-label": "Primary"
  }, items.map(item => React.createElement("button", {
    key: item.view,
    className: `bottom-nav-item ${currentView === item.view ? 'active' : ''}`,
    onClick: () => {
      if (item.resetLesson) setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView(item.view);
    }
  }, React.createElement("span", {
    className: "bottom-nav-icon"
  }, React.createElement(AppIcon, {
    name: item.icon
  })), React.createElement("span", null, item.label))));
}
const TUTORIAL_STEPS = [{
  icon: 'gift',
  view: 'daily',
  titleKey: 'tutorial.step.daily.title',
  bodyKey: 'tutorial.step.daily.body',
  actionKey: 'tutorial.step.daily.action'
}, {
  icon: 'card',
  view: 'learn',
  titleKey: 'tutorial.step.cards.title',
  bodyKey: 'tutorial.step.cards.body',
  actionKey: 'tutorial.step.cards.action'
}, {
  icon: 'brush',
  view: 'draw',
  titleKey: 'tutorial.step.write.title',
  bodyKey: 'tutorial.step.write.body',
  actionKey: 'tutorial.step.write.action'
}, {
  icon: 'target',
  view: 'quiz',
  titleKey: 'tutorial.step.quiz.title',
  bodyKey: 'tutorial.step.quiz.body',
  actionKey: 'tutorial.step.quiz.action'
}, {
  icon: 'wallet',
  view: 'stats',
  titleKey: 'tutorial.step.wallet.title',
  bodyKey: 'tutorial.step.wallet.body',
  actionKey: 'tutorial.step.wallet.action'
}];
function TutorialOverlay({
  open,
  onClose,
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  playSound,
  t
}) {
  const [stepIndex, setStepIndex] = React.useState(0);
  React.useEffect(() => {
    if (open) setStepIndex(0);
  }, [open]);
  if (!open) return null;
  const step = TUTORIAL_STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === TUTORIAL_STEPS.length - 1;
  const progress = Math.round((stepIndex + 1) / TUTORIAL_STEPS.length * 100);
  const goToStep = nextIndex => {
    playSound?.('tap');
    setStepIndex(Math.max(0, Math.min(TUTORIAL_STEPS.length - 1, nextIndex)));
  };
  const openStepView = () => {
    playSound?.('select');
    setSelectedLesson(null);
    setSelectedQueue(null);
    setCurrentView(step.view);
    onClose();
  };
  return React.createElement("div", {
    className: "tutorial-backdrop",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": t('tutorial.title')
  }, React.createElement("div", {
    className: "tutorial-card"
  }, React.createElement("button", {
    className: "tutorial-close",
    onClick: onClose,
    "aria-label": t('tutorial.close')
  }, "x"), React.createElement("div", {
    className: "tutorial-hero"
  }, React.createElement("div", {
    className: "tutorial-panda"
  }, React.createElement(PandaBuddySvg, null)), React.createElement("div", {
    className: "tutorial-copy-block"
  }, React.createElement("div", {
    className: "tutorial-kicker"
  }, React.createElement("span", null, t('tutorial.badge')), React.createElement("span", null, t('tutorial.stepCount', {
    current: stepIndex + 1,
    total: TUTORIAL_STEPS.length
  }))), React.createElement("h2", null, t('tutorial.title')), React.createElement("p", null, t('tutorial.intro')))), React.createElement("div", {
    className: "tutorial-progress"
  }, React.createElement("div", {
    className: "tutorial-progress-fill",
    style: {
      width: `${progress}%`
    }
  })), React.createElement("div", {
    className: "tutorial-step-card"
  }, React.createElement("span", {
    className: "tutorial-step-icon"
  }, React.createElement(AppIcon, {
    name: step.icon
  })), React.createElement("div", null, React.createElement("h3", null, t(step.titleKey)), React.createElement("p", null, t(step.bodyKey)))), React.createElement("div", {
    className: "tutorial-dots",
    "aria-hidden": "true"
  }, TUTORIAL_STEPS.map((item, index) => React.createElement("span", {
    key: item.titleKey,
    className: index === stepIndex ? 'active' : ''
  }))), React.createElement("button", {
    className: "tutorial-open-step",
    onClick: openStepView
  }, React.createElement(AppIcon, {
    name: step.icon
  }), React.createElement("span", null, t(step.actionKey))), React.createElement("div", {
    className: "tutorial-actions"
  }, React.createElement("button", {
    className: "tutorial-quiet",
    onClick: onClose
  }, t('tutorial.skip')), React.createElement("div", {
    className: "tutorial-action-pair"
  }, React.createElement("button", {
    className: "tutorial-secondary",
    onClick: () => goToStep(stepIndex - 1),
    disabled: isFirst
  }, t('tutorial.back')), React.createElement("button", {
    className: "tutorial-primary",
    onClick: () => isLast ? onClose() : goToStep(stepIndex + 1)
  }, isLast ? t('tutorial.done') : t('tutorial.next'))))));
}
function LanguageToggle({
  language,
  setLanguage,
  playSound,
  t
}) {
  return React.createElement("div", {
    className: "language-toggle",
    "aria-label": "UI language"
  }, React.createElement("button", {
    className: language === 'zh' ? 'active' : '',
    onClick: () => {
      playSound?.('tap');
      setLanguage('zh');
    },
    "aria-pressed": language === 'zh'
  }, t('lang.zh')), React.createElement("button", {
    className: language === 'en' ? 'active' : '',
    onClick: () => {
      playSound?.('tap');
      setLanguage('en');
    },
    "aria-pressed": language === 'en'
  }, t('lang.en')));
}
function SoundToggle({
  soundEnabled,
  setSoundEnabled,
  t
}) {
  const label = soundEnabled ? t('sound.on') : t('sound.off');
  return React.createElement("button", {
    className: `sound-toggle ${soundEnabled ? 'active' : ''}`,
    onClick: () => {
      playSoundEffect(soundEnabled ? 'tap' : 'correct', true);
      setSoundEnabled(!soundEnabled);
    },
    "aria-label": label,
    "aria-pressed": soundEnabled,
    title: t('sound.label')
  }, React.createElement(AppIcon, {
    name: soundEnabled ? 'sound' : 'mute'
  }));
}
function AmbienceToggle({
  ambienceEnabled,
  setAmbienceEnabled,
  t
}) {
  const label = ambienceEnabled ? t('ambience.on') : t('ambience.off');
  return React.createElement("button", {
    className: `sound-toggle ambience-toggle ${ambienceEnabled ? 'active' : ''}`,
    onClick: () => {
      const next = !ambienceEnabled;
      if (next) {
        playSoundEffect('reveal', true);
        startAmbienceLoop();
      } else {
        playSoundEffect('tap', true);
        stopAmbienceLoop();
      }
      setAmbienceEnabled(next);
    },
    "aria-label": label,
    "aria-pressed": ambienceEnabled,
    title: t('ambience.label')
  }, React.createElement(AppIcon, {
    name: "tea"
  }));
}
function AppIcon({
  name
}) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  };
  const stroke = {
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  if (name === 'home') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M9 21h6"
  })));
  if (name === 'card') return React.createElement("svg", common, React.createElement("rect", {
    x: "5",
    y: "4",
    width: "13",
    height: "16",
    rx: "3",
    fill: "currentColor",
    opacity: "0.14"
  }), React.createElement("path", _extends({}, stroke, {
    d: "M8 8h8M8 12h5M8 16h7"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M17 4l2 2"
  })));
  if (name === 'brush') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M15.5 4.5 20 9l-8.5 8.5-4.5 1 1-4.5 7.5-9.5Z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M13 7l4 4"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M5 20c2-1 3.5-.5 5-2"
  })));
  if (name === 'target') return React.createElement("svg", common, React.createElement("circle", _extends({}, stroke, {
    cx: "12",
    cy: "12",
    r: "7"
  })), React.createElement("circle", _extends({}, stroke, {
    cx: "12",
    cy: "12",
    r: "3"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M12 2v3M22 12h-3M12 22v-3M2 12h3"
  })));
  if (name === 'chart') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M5 19V9M12 19V5M19 19v-7"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M4 19h16"
  })));
  if (name === 'scan') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M5 9V6a1 1 0 0 1 1-1h3M15 5h3a1 1 0 0 1 1 1v3M19 15v3a1 1 0 0 1-1 1h-3M9 19H6a1 1 0 0 1-1-1v-3"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M8 12h8"
  })));
  if (name === 'book') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21V5.5Z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M5 5.5A2.5 2.5 0 0 0 7.5 8H19"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M9 12h6"
  })));
  if (name === 'sound') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M4 10v4h4l5 4V6l-5 4H4Z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M16 9.5c1.1 1.3 1.1 3.7 0 5M18.5 7c2.2 2.7 2.2 7.3 0 10"
  })));
  if (name === 'mute') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M4 10v4h4l5 4V6l-5 4H4Z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M19 9l-5 5M14 9l5 5"
  })));
  if (name === 'tea') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M6 10h11v3.5A4.5 4.5 0 0 1 12.5 18h-2A4.5 4.5 0 0 1 6 13.5V10Z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M17 11h1.2a1.8 1.8 0 0 1 0 3.6H17"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M8 21h8"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M9 7c-.7-.9-.7-1.8 0-2.7M12 7c-.7-.9-.7-1.8 0-2.7M15 7c-.7-.9-.7-1.8 0-2.7"
  })));
  if (name === 'gift') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M4 10h16v10H4V10Z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M12 10v10M4 14h16M7 7c0-1.7 1.4-3 3-2l2 5H8a3 3 0 0 1-1-3ZM17 7c0-1.7-1.4-3-3-2l-2 5h4a3 3 0 0 0 1-3Z"
  })));
  if (name === 'wallet') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M5 7.5h13a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h11"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M17 13h3"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M6 5.5 16 3v4.5"
  })));
  if (name === 'help') return React.createElement("svg", common, React.createElement("circle", _extends({}, stroke, {
    cx: "12",
    cy: "12",
    r: "8"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M9.8 9.3a2.4 2.4 0 0 1 4.5 1.2c0 1.8-2.3 2-2.3 3.7"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M12 17h.01"
  })));
  return React.createElement("svg", common, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    fill: "currentColor",
    opacity: "0.14"
  }), React.createElement("path", _extends({}, stroke, {
    d: "M8 12h8M12 8v8"
  })));
}
function HanziLogoSvg() {
  return React.createElement("svg", {
    className: "hanzi-logo-svg",
    width: "92",
    height: "92",
    viewBox: "0 0 92 92",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("rect", {
    x: "8",
    y: "8",
    width: "76",
    height: "76",
    rx: "22",
    fill: "url(#hanziLogoGradient)"
  }), React.createElement("rect", {
    x: "18",
    y: "18",
    width: "56",
    height: "56",
    rx: "16",
    fill: "white",
    opacity: "0.12"
  }), React.createElement("text", {
    x: "46",
    y: "61",
    textAnchor: "middle",
    fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif",
    fontSize: "47",
    fontWeight: "900",
    fill: "white"
  }, "\u5B57"), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "hanziLogoGradient",
    x1: "8",
    y1: "8",
    x2: "84",
    y2: "84",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    stopColor: "#07C160"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#1677FF"
  }))));
}
function HeaderLogoMark() {
  return React.createElement("div", {
    className: "header-logo-mark",
    "aria-hidden": "true"
  }, React.createElement(HanziLogoSvg, null));
}
function CoachSvg() {
  return React.createElement("svg", {
    className: "coach-mini-svg",
    width: "90",
    height: "90",
    viewBox: "0 0 90 90",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("rect", {
    x: "16",
    y: "12",
    width: "58",
    height: "64",
    rx: "20",
    fill: "#E8FFF3"
  }), React.createElement("rect", {
    x: "21",
    y: "17",
    width: "48",
    height: "48",
    rx: "16",
    fill: "url(#coachGradient)"
  }), React.createElement("text", {
    x: "45",
    y: "50",
    textAnchor: "middle",
    fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif",
    fontSize: "30",
    fontWeight: "900",
    fill: "white"
  }, "\u5B66"), React.createElement("circle", {
    cx: "34",
    cy: "33",
    r: "2.4",
    fill: "#17382A"
  }), React.createElement("circle", {
    cx: "56",
    cy: "33",
    r: "2.4",
    fill: "#17382A"
  }), React.createElement("path", {
    d: "M38 56c4 3 10 3 14 0",
    stroke: "#17382A",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M20 66c-5 1-8 4-9 9 7 2 12 0 15-5",
    fill: "#FFE5A3"
  }), React.createElement("path", {
    d: "M70 23c6-3 9-1 10 5-5 4-10 4-14 0",
    fill: "#FFE5A3"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "coachGradient",
    x1: "21",
    y1: "17",
    x2: "69",
    y2: "65",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    stopColor: "#07C160"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#1677FF"
  }))));
}
function PandaBuddySvg() {
  return React.createElement("svg", {
    className: "panda-buddy-svg",
    width: "90",
    height: "90",
    viewBox: "0 0 90 90",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("rect", {
    x: "10",
    y: "13",
    width: "70",
    height: "64",
    rx: "22",
    fill: "#E8FFF3"
  }), React.createElement("circle", {
    cx: "28",
    cy: "29",
    r: "10",
    fill: "#17382A"
  }), React.createElement("circle", {
    cx: "62",
    cy: "29",
    r: "10",
    fill: "#17382A"
  }), React.createElement("circle", {
    cx: "45",
    cy: "43",
    r: "27",
    fill: "white"
  }), React.createElement("ellipse", {
    cx: "34",
    cy: "40",
    rx: "8",
    ry: "10",
    fill: "#17382A",
    transform: "rotate(-18 34 40)"
  }), React.createElement("ellipse", {
    cx: "56",
    cy: "40",
    rx: "8",
    ry: "10",
    fill: "#17382A",
    transform: "rotate(18 56 40)"
  }), React.createElement("circle", {
    cx: "35",
    cy: "39",
    r: "2.2",
    fill: "white"
  }), React.createElement("circle", {
    cx: "55",
    cy: "39",
    r: "2.2",
    fill: "white"
  }), React.createElement("path", {
    d: "M45 45c3 0 5 2 5 4s-2 4-5 4-5-2-5-4 2-4 5-4Z",
    fill: "#17382A"
  }), React.createElement("path", {
    d: "M39 58c4 3 8 3 12 0",
    stroke: "#17382A",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), React.createElement("rect", {
    x: "31",
    y: "62",
    width: "28",
    height: "13",
    rx: "6",
    fill: "url(#pandaBookGradient)"
  }), React.createElement("path", {
    d: "M38 66h14M38 70h10",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), React.createElement("text", {
    x: "69",
    y: "66",
    textAnchor: "middle",
    fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif",
    fontSize: "16",
    fontWeight: "900",
    fill: "#07C160"
  }, "\u5B66"), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "pandaBookGradient",
    x1: "31",
    y1: "62",
    x2: "59",
    y2: "75",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    stopColor: "#07C160"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#1677FF"
  }))));
}
function LanternStickerSvg() {
  return React.createElement("svg", {
    className: "story-sticker-svg",
    width: "90",
    height: "72",
    viewBox: "0 0 90 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M45 5v10",
    stroke: "#17382A",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), React.createElement("rect", {
    x: "31",
    y: "12",
    width: "28",
    height: "8",
    rx: "4",
    fill: "#FFCF33"
  }), React.createElement("rect", {
    x: "24",
    y: "18",
    width: "42",
    height: "38",
    rx: "17",
    fill: "url(#lanternGradient)"
  }), React.createElement("path", {
    d: "M34 21c-4 9-4 22 0 32M56 21c4 9 4 22 0 32",
    stroke: "#FFE5A3",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), React.createElement("text", {
    x: "45",
    y: "44",
    textAnchor: "middle",
    fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif",
    fontSize: "21",
    fontWeight: "900",
    fill: "white"
  }, "\u8BFE"), React.createElement("rect", {
    x: "33",
    y: "55",
    width: "24",
    height: "7",
    rx: "3.5",
    fill: "#FFCF33"
  }), React.createElement("path", {
    d: "M45 62v6",
    stroke: "#17382A",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "lanternGradient",
    x1: "24",
    y1: "18",
    x2: "66",
    y2: "56",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    stopColor: "#FF5A5F"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#FF9F1C"
  }))));
}
function BrushStickerSvg() {
  return React.createElement("svg", {
    className: "story-sticker-svg",
    width: "90",
    height: "72",
    viewBox: "0 0 90 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("rect", {
    x: "18",
    y: "11",
    width: "54",
    height: "42",
    rx: "14",
    fill: "#E8FFF3"
  }), React.createElement("path", {
    d: "M30 51c9-1 17-4 24-12",
    stroke: "#07C160",
    strokeWidth: "6",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M50 17l19 19-8 8-19-19 8-8Z",
    fill: "url(#brushGradient)"
  }), React.createElement("path", {
    d: "M42 25l19 19-10 7-16 4 4-16 3-14Z",
    fill: "#FFE5A3"
  }), React.createElement("path", {
    d: "M42 25l19 19",
    stroke: "#17382A",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), React.createElement("circle", {
    cx: "30",
    cy: "22",
    r: "4",
    fill: "#1677FF"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "brushGradient",
    x1: "42",
    y1: "17",
    x2: "69",
    y2: "44",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    stopColor: "#1677FF"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#07C160"
  }))));
}
function SealStickerSvg() {
  return React.createElement("svg", {
    className: "story-sticker-svg",
    width: "90",
    height: "72",
    viewBox: "0 0 90 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("rect", {
    x: "24",
    y: "12",
    width: "42",
    height: "42",
    rx: "12",
    fill: "url(#sealGradient)"
  }), React.createElement("rect", {
    x: "31",
    y: "19",
    width: "28",
    height: "28",
    rx: "7",
    stroke: "white",
    strokeWidth: "3"
  }), React.createElement("text", {
    x: "45",
    y: "40",
    textAnchor: "middle",
    fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif",
    fontSize: "21",
    fontWeight: "900",
    fill: "white"
  }, "\u4F1A"), React.createElement("path", {
    d: "M28 57h34",
    stroke: "#17382A",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M36 63h18",
    stroke: "#07C160",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "sealGradient",
    x1: "24",
    y1: "12",
    x2: "66",
    y2: "54",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    stopColor: "#07C160"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#1677FF"
  }))));
}
function IllustrationStrip({
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  t
}) {
  return React.createElement("div", {
    className: "illustration-strip",
    "aria-label": "Study shortcuts"
  }, React.createElement("button", {
    className: "story-sticker",
    onClick: () => {
      setSelectedQueue(null);
      setCurrentView('lessons');
    }
  }, React.createElement(LanternStickerSvg, null), React.createElement("span", {
    className: "story-sticker-title"
  }, t('stickers.lessons'))), React.createElement("button", {
    className: "story-sticker",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('draw');
    }
  }, React.createElement(BrushStickerSvg, null), React.createElement("span", {
    className: "story-sticker-title"
  }, t('stickers.write'))), React.createElement("button", {
    className: "story-sticker",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('quiz');
    }
  }, React.createElement(SealStickerSvg, null), React.createElement("span", {
    className: "story-sticker-title"
  }, t('stickers.quiz'))));
}
function MiniProgramTile({
  icon,
  label,
  onClick
}) {
  return React.createElement("button", {
    className: "mini-program-tile",
    onClick: onClick
  }, React.createElement("span", {
    className: "mini-program-icon"
  }, React.createElement(AppIcon, {
    name: icon
  })), React.createElement("span", {
    className: "mini-program-name"
  }, label));
}
function MiniAppHeader({
  icon,
  title,
  subtitle,
  pill
}) {
  return React.createElement("div", {
    className: "mini-app-hero"
  }, React.createElement("span", {
    className: "mini-app-hero-icon"
  }, React.createElement(AppIcon, {
    name: icon
  })), React.createElement("div", null, React.createElement("h1", {
    className: "mini-app-title"
  }, title), React.createElement("p", {
    className: "mini-app-subtitle"
  }, subtitle)), pill && React.createElement("span", {
    className: "mini-app-pill"
  }, pill));
}
function DailyTrainingView({
  progress,
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  playSound,
  t
}) {
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const dailySummary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const todayLabel = getTodayKey();
  const openMode = view => {
    setSelectedLesson(null);
    setSelectedQueue({
      id: `daily:${todayLabel}`,
      labelKey: 'common.today',
      items: dailyQueue
    });
    playSound('select');
    setCurrentView(view);
  };
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement("span", {
    className: "text-sm",
    style: {
      color: 'var(--accent-lime)'
    }
  }, todayLabel)), React.createElement(MiniAppHeader, {
    icon: "gift",
    title: t('daily.title'),
    subtitle: t('daily.subtitle'),
    pill: t('daily.count', {
      count: dailyQueue.length
    })
  }), React.createElement("div", {
    className: "daily-training-card"
  }, React.createElement("div", {
    className: "daily-training-hero"
  }, React.createElement(PandaBuddySvg, null), React.createElement("div", null, React.createElement("p", {
    className: "daily-training-title"
  }, t('daily.heroTitle')), React.createElement("p", {
    className: "daily-training-copy"
  }, t('daily.heroCopy')))), React.createElement("div", {
    className: "daily-queue-grid"
  }, dailyQueue.map(char => React.createElement("div", {
    key: char.hanzi,
    className: "daily-queue-char"
  }, React.createElement("span", {
    className: "hanzi-display"
  }, char.hanzi), React.createElement("small", null, t(`daily.reason.${char.dailyReason}`))))), React.createElement("div", {
    className: "daily-reason-row"
  }, React.createElement("span", null, t('daily.reason.new'), " ", dailySummary.new || 0), React.createElement("span", null, t('daily.reason.review'), " ", dailySummary.review || 0), React.createElement("span", null, t('daily.reason.solidify'), " ", dailySummary.solidify || 0))), React.createElement("div", {
    className: "daily-step-grid"
  }, React.createElement("button", {
    className: "daily-step-card",
    onClick: () => openMode('learn')
  }, React.createElement("span", {
    className: "daily-step-index"
  }, "1"), React.createElement("span", {
    className: "daily-step-icon"
  }, React.createElement(AppIcon, {
    name: "card"
  })), React.createElement("strong", null, t('daily.step1.title')), React.createElement("span", null, t('daily.step1.copy'))), React.createElement("button", {
    className: "daily-step-card primary",
    onClick: () => openMode('draw')
  }, React.createElement("span", {
    className: "daily-step-index"
  }, "2"), React.createElement("span", {
    className: "daily-step-icon"
  }, React.createElement(AppIcon, {
    name: "brush"
  })), React.createElement("strong", null, t('daily.step2.title')), React.createElement("span", null, t('daily.step2.copy'))), React.createElement("button", {
    className: "daily-step-card",
    onClick: () => openMode('quiz')
  }, React.createElement("span", {
    className: "daily-step-index"
  }, "3"), React.createElement("span", {
    className: "daily-step-icon"
  }, React.createElement(AppIcon, {
    name: "target"
  })), React.createElement("strong", null, t('daily.step3.title')), React.createElement("span", null, t('daily.step3.copy')))), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setCurrentView('home')
  }, t('daily.doneEnough')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => openMode('learn')
  }, t('daily.start'))));
}
function HomeView({
  progress,
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  language,
  setLanguage,
  soundEnabled,
  setSoundEnabled,
  ambienceEnabled,
  setAmbienceEnabled,
  playSound,
  openTutorial,
  t
}) {
  const catalogSet = React.useMemo(() => new Set(STUDY_CATALOG.map(item => item.hanzi)), []);
  const masteredCount = React.useMemo(() => new Set(progress.masteredChars.filter(hanzi => catalogSet.has(hanzi))).size, [catalogSet, progress.masteredChars]);
  const learningCount = React.useMemo(() => new Set(progress.learningChars.filter(hanzi => catalogSet.has(hanzi))).size, [catalogSet, progress.learningChars]);
  const totalChars = STUDY_CATALOG.length || VOCABULARY.length;
  const progressPercent = Math.round(masteredCount / totalChars * 100);
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const dailySummary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const openDailyTraining = () => {
    setSelectedLesson(null);
    setSelectedQueue(null);
    playSound('select');
    setCurrentView('daily');
  };
  const openMaterialWordBank = (view = 'learn') => {
    setSelectedLesson(null);
    setSelectedQueue(getMaterialWordQueue());
    playSound('select');
    setCurrentView(view);
  };
  return React.createElement("div", {
    className: "screen home-screen"
  }, React.createElement("header", {
    className: "super-topbar"
  }, React.createElement("div", {
    className: "brand-lockup"
  }, React.createElement("div", {
    className: "brand-mark"
  }, React.createElement(HanziLogoSvg, null)), React.createElement("div", null, React.createElement("h1", {
    className: "brand-title"
  }, "Hanzi Master"), React.createElement("p", {
    className: "brand-subtitle"
  }, t('home.subtitle')))), React.createElement("div", {
    className: "topbar-actions"
  }, React.createElement("button", {
    className: "guide-toggle",
    onClick: openTutorial,
    "aria-label": t('tutorial.open'),
    title: t('tutorial.open')
  }, React.createElement(AppIcon, {
    name: "help"
  })), React.createElement(LanguageToggle, {
    language: language,
    setLanguage: setLanguage,
    playSound: playSound,
    t: t
  }), React.createElement(SoundToggle, {
    soundEnabled: soundEnabled,
    setSoundEnabled: setSoundEnabled,
    t: t
  }), React.createElement(AmbienceToggle, {
    ambienceEnabled: ambienceEnabled,
    setAmbienceEnabled: setAmbienceEnabled,
    t: t
  }), progress.streakDays > 0 && React.createElement("div", {
    className: "daily-chip"
  }, "\uD83D\uDD25 ", progress.streakDays))), React.createElement("div", {
    className: "super-searchbar"
  }, React.createElement(AppIcon, {
    name: "scan"
  }), React.createElement("strong", null, t('home.search')), React.createElement("span", {
    className: "super-search-action"
  }, React.createElement(AppIcon, {
    name: "sound"
  }))), React.createElement("div", {
    className: "wallet-card"
  }, React.createElement("p", {
    className: "wallet-label"
  }, t('home.walletLabel')), React.createElement("div", {
    className: "wallet-brand-mark"
  }, React.createElement(HanziLogoSvg, null)), React.createElement("div", {
    className: "wallet-score"
  }, progressPercent, "%"), React.createElement("div", {
    className: "progress-bar"
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: `${progressPercent}%`
    }
  })), React.createElement("div", {
    className: "wallet-meta"
  }, React.createElement("span", null, t('home.masteredMeta', {
    mastered: masteredCount,
    total: totalChars
  })), React.createElement("span", null, t('home.learningMeta', {
    count: learningCount
  })), React.createElement("div", {
    className: "wallet-seal"
  }, "\u5B57"))), React.createElement("div", {
    className: "daily-entry-card",
    onClick: openDailyTraining,
    role: "button",
    tabIndex: 0
  }, React.createElement("div", {
    className: "daily-entry-main"
  }, React.createElement("span", {
    className: "daily-entry-icon"
  }, React.createElement(AppIcon, {
    name: "gift"
  })), React.createElement("div", null, React.createElement("p", {
    className: "daily-entry-kicker"
  }, t('home.dailyKicker')), React.createElement("p", {
    className: "daily-entry-title"
  }, t('home.dailyTitle', {
    count: dailyQueue.length
  })))), React.createElement("div", {
    className: "daily-entry-strip"
  }, dailyQueue.slice(0, 6).map(char => React.createElement("span", {
    key: char.hanzi,
    className: "daily-entry-char"
  }, char.hanzi))), React.createElement("div", {
    className: "daily-entry-meta"
  }, React.createElement("span", null, t('daily.reason.new'), " ", dailySummary.new || 0), React.createElement("span", null, t('daily.reason.review'), " ", dailySummary.review || 0), React.createElement("span", null, t('daily.reason.solidify'), " ", dailySummary.solidify || 0))), React.createElement(IllustrationStrip, {
    setCurrentView: setCurrentView,
    setSelectedLesson: setSelectedLesson,
    setSelectedQueue: setSelectedQueue,
    t: t
  }), React.createElement("div", {
    className: "quick-lane"
  }, React.createElement("button", {
    className: "quick-action",
    onClick: () => {
      setSelectedQueue(null);
      setCurrentView('lessons');
    }
  }, React.createElement("span", {
    className: "quick-action-icon"
  }, React.createElement(AppIcon, {
    name: "scan"
  })), React.createElement("span", {
    className: "quick-action-label"
  }, t('tiles.lessons'))), React.createElement("button", {
    className: "quick-action",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('learn');
    }
  }, React.createElement("span", {
    className: "quick-action-icon"
  }, React.createElement(AppIcon, {
    name: "card"
  })), React.createElement("span", {
    className: "quick-action-label"
  }, t('tiles.cards'))), React.createElement("button", {
    className: "quick-action",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('draw');
    }
  }, React.createElement("span", {
    className: "quick-action-icon"
  }, React.createElement(AppIcon, {
    name: "brush"
  })), React.createElement("span", {
    className: "quick-action-label"
  }, t('tiles.write'))), React.createElement("button", {
    className: "quick-action",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('quiz');
    }
  }, React.createElement("span", {
    className: "quick-action-icon"
  }, React.createElement(AppIcon, {
    name: "target"
  })), React.createElement("span", {
    className: "quick-action-label"
  }, t('tiles.quiz')))), React.createElement("div", {
    className: "mini-program-panel"
  }, React.createElement("div", {
    className: "mini-program-head"
  }, React.createElement("span", null, t('home.myMiniPrograms')), React.createElement("span", null, t('home.more'))), React.createElement("div", {
    className: "mini-program-grid"
  }, React.createElement(MiniProgramTile, {
    icon: "book",
    label: t('tiles.vocab'),
    onClick: () => openMaterialWordBank('learn')
  }), React.createElement(MiniProgramTile, {
    icon: "brush",
    label: t('tiles.write'),
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('draw');
    }
  }), React.createElement(MiniProgramTile, {
    icon: "target",
    label: t('tiles.quiz'),
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('quiz');
    }
  }), React.createElement(MiniProgramTile, {
    icon: "scan",
    label: t('tiles.lessons'),
    onClick: () => {
      setSelectedQueue(null);
      setCurrentView('lessons');
    }
  }), React.createElement(MiniProgramTile, {
    icon: "sound",
    label: t('tiles.pinyin'),
    onClick: () => openMaterialWordBank('quiz')
  }), React.createElement(MiniProgramTile, {
    icon: "card",
    label: t('tiles.cards'),
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('learn');
    }
  }), React.createElement(MiniProgramTile, {
    icon: "wallet",
    label: t('tiles.progress'),
    onClick: () => {
      setSelectedQueue(null);
      setCurrentView('stats');
    }
  }), React.createElement(MiniProgramTile, {
    icon: "gift",
    label: t('tiles.review'),
    onClick: openDailyTraining
  }))), React.createElement("div", {
    className: "cute-coach-card"
  }, React.createElement(PandaBuddySvg, null), React.createElement("div", null, React.createElement("p", {
    className: "coach-title"
  }, t('home.coachTitle')), React.createElement("p", {
    className: "coach-copy"
  }, learningCount > 0 ? t('home.coachReview') : t('home.coachNew')), React.createElement("button", {
    className: "coach-guide-link",
    onClick: openTutorial
  }, React.createElement(AppIcon, {
    name: "help"
  }), React.createElement("span", null, t('tutorial.open'))))), React.createElement("div", {
    className: "insight-panel"
  }, React.createElement("div", null, React.createElement("p", {
    className: "insight-title"
  }, t('home.taskTitle')), React.createElement("p", {
    className: "insight-copy"
  }, learningCount > 0 ? t('home.taskReview') : t('home.taskNew'))), React.createElement("div", {
    className: "insight-character"
  }, learningCount > 0 ? '练' : '学')), React.createElement("div", {
    className: "stats-bar home-metrics"
  }, React.createElement("div", {
    className: "stat-item"
  }, React.createElement("div", {
    className: "stat-value"
  }, masteredCount), React.createElement("div", {
    className: "stat-label"
  }, t('home.stat.mastered'))), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("div", {
    className: "stat-value"
  }, learningCount), React.createElement("div", {
    className: "stat-label"
  }, t('home.stat.learning'))), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("div", {
    className: "stat-value"
  }, progress.totalReviews), React.createElement("div", {
    className: "stat-label"
  }, t('home.stat.reviews')))), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('home.account')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "card card-clickable account-entry",
    onClick: () => setCurrentView('stats'),
    role: "button",
    tabIndex: 0
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("p", {
    className: "title-md"
  }, t('home.walletTitle')), React.createElement("p", {
    className: "text-sm"
  }, t('home.walletCopy'))), React.createElement("span", {
    style: {
      fontSize: '28px',
      color: 'var(--accent-lime)'
    }
  }, "\u2192"))));
}
function LessonsView({
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  progress,
  t
}) {
  const lessons = [12, 13, 14, 15];
  const lessonTitles = {
    12: {
      title: '天气',
      chinese: 'Weather'
    },
    13: {
      title: '正在',
      chinese: 'Actions'
    },
    14: {
      title: '买东西',
      chinese: 'Shopping'
    },
    15: {
      title: '是...的',
      chinese: 'Structure'
    }
  };
  const materialQueues = getMaterialCollectionQueues();
  const materialGroups = React.useMemo(() => {
    const order = ['HSK1', 'HSK2', 'Basics', 'Book3'];
    const groups = new Map();
    materialQueues.forEach(queue => {
      const level = queue.level || 'Material';
      if (!groups.has(level)) groups.set(level, []);
      groups.get(level).push(queue);
    });
    return Array.from(groups.entries()).map(([level, queues]) => ({
      level,
      queues,
      cards: queues.reduce((total, queue) => total + (queue.items?.length || 0), 0)
    })).sort((a, b) => {
      const ai = order.includes(a.level) ? order.indexOf(a.level) : order.length;
      const bi = order.includes(b.level) ? order.indexOf(b.level) : order.length;
      return ai - bi || a.level.localeCompare(b.level);
    });
  }, [materialQueues]);
  const materialCardCount = materialQueues.reduce((total, queue) => total + (queue.items?.length || 0), 0);
  const getLessonProgress = num => {
    const chars = VOCABULARY.filter(v => v.lesson === num);
    const mastered = chars.filter(v => progress.masteredChars.includes(v.hanzi)).length;
    return {
      mastered,
      total: chars.length,
      percent: Math.round(mastered / chars.length * 100)
    };
  };
  const getQueueProgress = queue => {
    const items = queue.items || [];
    const mastered = items.filter(v => progress.masteredChars.includes(v.hanzi)).length;
    return {
      mastered,
      total: items.length,
      percent: items.length ? Math.round(mastered / items.length * 100) : 0
    };
  };
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement(HeaderLogoMark, null)), React.createElement(MiniAppHeader, {
    icon: "scan",
    title: t('lessons.title'),
    subtitle: t('lessons.subtitle'),
    pill: t('lessons.pill')
  }), React.createElement("div", {
    className: "service-section"
  }, React.createElement("div", {
    className: "service-section-head"
  }, React.createElement("span", null, t('lessons.service')), React.createElement("span", null, "HSK1")), React.createElement("div", {
    className: "service-list"
  }, lessons.map(num => {
    const {
      mastered,
      total,
      percent
    } = getLessonProgress(num);
    return React.createElement("div", {
      key: num,
      className: "card card-clickable service-row",
      onClick: () => {
        setSelectedQueue(null);
        setSelectedLesson(num);
        setCurrentView('learn');
      },
      role: "button",
      tabIndex: 0
    }, React.createElement("div", {
      className: "lesson-card"
    }, React.createElement("div", {
      className: "lesson-service-icon"
    }, React.createElement(AppIcon, {
      name: num === 12 ? 'sound' : num === 13 ? 'brush' : num === 14 ? 'wallet' : 'book'
    })), React.createElement("div", {
      className: "lesson-number"
    }, num), React.createElement("div", {
      className: "lesson-info"
    }, React.createElement("div", {
      className: "lesson-title-line"
    }, React.createElement("p", {
      className: "title-md"
    }, lessonTitles[num].title), React.createElement("span", {
      className: "lesson-chinese-chip"
    }, lessonTitles[num].chinese)), React.createElement("p", {
      className: "text-sm"
    }, mastered, "/", total, " \u2022 ", percent, "%"), React.createElement("div", {
      className: "progress-bar",
      style: {
        marginTop: '8px',
        marginBottom: '0'
      }
    }, React.createElement("div", {
      className: "progress-fill",
      style: {
        width: `${percent}%`
      }
    })))));
  }))), materialQueues.length > 0 && React.createElement("div", {
    className: "service-section"
  }, React.createElement("div", {
    className: "service-section-head"
  }, React.createElement("span", null, t('lessons.materialBanks')), React.createElement("span", null, materialQueues.length, " \u2022 ", materialCardCount)), React.createElement("div", {
    className: "service-list"
  }, materialGroups.map(group => React.createElement("div", {
    className: "material-group",
    key: group.level
  }, React.createElement("div", {
    className: "material-group-head"
  }, React.createElement("span", null, getMaterialLevelLabel(group.level)), React.createElement("span", null, group.queues.length, " \u2022 ", group.cards)), group.queues.map(queue => {
    const queueProgress = getQueueProgress(queue);
    return React.createElement("div", {
      key: queue.id,
      className: "card card-clickable service-row",
      onClick: () => {
        setSelectedLesson(null);
        setSelectedQueue(queue);
        setCurrentView('learn');
      },
      role: "button",
      tabIndex: 0
    }, React.createElement("div", {
      className: "lesson-card"
    }, React.createElement("div", {
      className: "lesson-service-icon"
    }, React.createElement(AppIcon, {
      name: queue.level === 'Book3' ? 'scan' : queue.level === 'Basics' ? 'brush' : 'book'
    })), React.createElement("div", {
      className: "lesson-number"
    }, queueProgress.total), React.createElement("div", {
      className: "lesson-info"
    }, React.createElement("div", {
      className: "lesson-title-line"
    }, React.createElement("p", {
      className: "title-md"
    }, getQueueDisplayLabel(queue, t)), React.createElement("span", {
      className: "lesson-chinese-chip"
    }, getQueueDisplayChip(queue, t))), React.createElement("p", {
      className: "text-sm"
    }, queueProgress.mastered, "/", queueProgress.total, " \u2022 ", queueProgress.percent, "%"), React.createElement("div", {
      className: "progress-bar",
      style: {
        marginTop: '8px',
        marginBottom: '0'
      }
    }, React.createElement("div", {
      className: "progress-fill",
      style: {
        width: `${queueProgress.percent}%`
      }
    })))));
  }))))), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('lessons.quick')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "lessons-quick-actions",
    style: {
      display: 'flex',
      gap: '12px'
    }
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('quiz');
    }
  }, t('lessons.quizAll')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('draw');
    }
  }, t('lessons.drawAll'))));
}
function LearnView({
  selectedLesson,
  selectedQueue,
  progress,
  markCharacterLearned,
  updateProgress,
  setCurrentView,
  playSound,
  t
}) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY, [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getStudyQueue(baseVocab, progress));
  const positionKey = `learn:${selectedQueue?.id || selectedLesson || 'all'}`;
  const scopePill = selectedQueue ? getQueueDisplayLabel(selectedQueue, t) : selectedLesson ? `L${selectedLesson}` : t('common.all');
  const [currentIndex, setCurrentIndex] = React.useState(() => Math.min(progress.lastPositions?.[positionKey] || 0, Math.max(vocab.length - 1, 0)));
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showCompound, setShowCompound] = React.useState(false);
  const currentChar = vocab[currentIndex];
  const isWordItem = currentChar.kind === 'word';
  const relatedCompounds = React.useMemo(() => isWordItem ? [] : COMPOUNDS.filter(c => c.hanzi.includes(currentChar.hanzi)), [currentChar, isWordItem]);
  const handleNext = () => {
    playSound(currentIndex === vocab.length - 1 ? 'complete' : 'tap');
    markCharacterLearned(currentChar.hanzi);
    setIsFlipped(false);
    setShowCompound(false);
    if (currentIndex < vocab.length - 1) {
      const nextIndex = currentIndex + 1;
      updateProgress({
        lastPositions: {
          ...(progress.lastPositions || {}),
          [positionKey]: nextIndex
        }
      });
      setCurrentIndex(nextIndex);
    } else {
      updateProgress({
        lastPositions: {
          ...(progress.lastPositions || {}),
          [positionKey]: 0
        }
      });
    }
  };
  const handlePrev = () => {
    playSound('tap');
    setIsFlipped(false);
    setShowCompound(false);
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      updateProgress({
        lastPositions: {
          ...(progress.lastPositions || {}),
          [positionKey]: prevIndex
        }
      });
      setCurrentIndex(prevIndex);
    }
  };
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement("span", {
    className: "text-sm",
    style: {
      color: 'var(--accent-lime)'
    }
  }, t('learn.cardNumber', {
    count: currentIndex + 1
  }))), React.createElement(MiniAppHeader, {
    icon: "card",
    title: t('learn.title'),
    subtitle: t('learn.subtitle'),
    pill: scopePill
  }), React.createElement("div", {
    className: "mini-app-progress-card"
  }, React.createElement("p", {
    className: "text-sm"
  }, t('learn.progress')), React.createElement("span", {
    className: "mini-app-progress-count"
  }, currentIndex + 1, " / ", vocab.length)), React.createElement("div", {
    className: "progress-bar"
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: `${(currentIndex + 1) / vocab.length * 100}%`
    }
  })), React.createElement("div", {
    className: "study-pass-card card card-accent-lime flashcard",
    onClick: () => {
      playSound('select');
      setIsFlipped(!isFlipped);
    },
    role: "button",
    tabIndex: 0,
    "aria-label": "Flip card"
  }, React.createElement("div", {
    className: `hanzi-display hanzi-hero ${isWordItem ? 'hanzi-word' : ''}`,
    style: {
      color: 'var(--accent-lime)'
    }
  }, currentChar.hanzi), isFlipped && React.createElement("div", {
    className: "animate-slide-up",
    style: {
      textAlign: 'center'
    }
  }, React.createElement("div", {
    className: "pinyin-display"
  }, currentChar.pinyin), React.createElement("div", {
    className: "meaning-display"
  }, currentChar.meaning), React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '12px'
    }
  }, isWordItem ? t('learn.wordLine', {
    source: currentChar.source || 'HSK1'
  }) : t('learn.strokesLine', {
    strokes: currentChar.strokes,
    lesson: currentChar.lesson
  })), currentChar.example && React.createElement("p", {
    className: "material-example"
  }, currentChar.example)), !isFlipped && React.createElement("p", {
    className: "flashcard-hint"
  }, t('learn.tap'))), relatedCompounds.length > 0 && React.createElement("div", {
    className: "related-service-card card card-clickable",
    onClick: () => {
      playSound('reveal');
      setShowCompound(!showCompound);
    },
    role: "button",
    tabIndex: 0
  }, React.createElement("p", {
    className: "title-md"
  }, t('learn.related', {
    count: relatedCompounds.length
  })), showCompound && React.createElement("div", {
    className: "animate-slide-up",
    style: {
      marginTop: '12px'
    }
  }, relatedCompounds.map((c, i) => React.createElement("div", {
    key: i,
    style: {
      padding: '8px 0',
      borderBottom: i < relatedCompounds.length - 1 ? '1px solid #dce7e2' : 'none'
    }
  }, React.createElement("span", {
    className: "hanzi-display hanzi-md"
  }, c.hanzi), React.createElement("span", {
    style: {
      marginLeft: '12px',
      color: 'var(--accent-cyan)'
    }
  }, c.pinyin), React.createElement("span", {
    style: {
      marginLeft: '12px',
      color: 'var(--text-secondary)',
      fontSize: '14px'
    }
  }, c.meaning))))), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handlePrev,
    disabled: currentIndex === 0
  }, t('common.prevCard')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleNext
  }, currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextCard'))), currentIndex === vocab.length - 1 && isFlipped && React.createElement("div", {
    className: "floating-indicator"
  }, React.createElement("span", {
    style: {
      fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif",
      fontSize: '15px',
      fontWeight: 900
    }
  }, t('learn.roundDone'))));
}
function DrawView({
  selectedLesson,
  selectedQueue,
  progress,
  updateProgress,
  markCharacterMastered,
  setCurrentView,
  playSound,
  t
}) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY, [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getDrawQueue(baseVocab, progress));
  const positionKey = `draw:${selectedQueue?.id || selectedLesson || 'all'}`;
  const scopePill = selectedQueue ? getQueueDisplayLabel(selectedQueue, t) : selectedLesson ? `L${selectedLesson}` : t('common.all');
  const [currentIndex, setCurrentIndex] = React.useState(() => Math.min(progress.lastPositions?.[positionKey] || 0, Math.max(vocab.length - 1, 0)));
  const [drawMode, setDrawMode] = React.useState('practice');
  const [showReference, setShowReference] = React.useState(false);
  const [strokesCompleted, setStrokesCompleted] = React.useState(0);
  const [totalStrokes, setTotalStrokes] = React.useState(0);
  const [mistakes, setMistakes] = React.useState(0);
  const mistakesRef = React.useRef(0);
  const [feedback, setFeedback] = React.useState(null);
  const [isComplete, setIsComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [charStats, setCharStats] = React.useState({
    completed: 0,
    totalMistakes: 0
  });
  const writerRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const currentChar = vocab[currentIndex];
  React.useEffect(() => {
    if (!containerRef.current || !currentChar) return;
    if (writerRef.current) {
      writerRef.current = null;
    }
    containerRef.current.innerHTML = '';
    setStrokesCompleted(0);
    setMistakes(0);
    mistakesRef.current = 0;
    setFeedback(null);
    setIsComplete(false);
    setIsLoading(true);
    const containerWidth = containerRef.current.parentElement.offsetWidth - 20;
    const size = Math.min(containerWidth, 320);
    try {
      const writer = HanziWriter.create(containerRef.current, currentChar.hanzi, {
        width: size,
        height: size,
        padding: 10,
        showOutline: drawMode === 'learn' || showReference,
        showCharacter: drawMode === 'learn' || showReference,
        strokeColor: '#07c160',
        outlineColor: '#dce7e2',
        drawingColor: '#07c160',
        highlightColor: '#1677ff',
        radicalColor: '#07c160',
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 300,
        drawingWidth: 6,
        showHintAfterMisses: drawMode === 'practice' ? 2 : 3,
        highlightOnComplete: true,
        charDataLoader: (char, onComplete) => {
          const strokeData = window.HANZI_STROKE_DATA?.[char];
          if (strokeData) {
            onComplete(strokeData);
          } else {
            setFeedback({
              type: 'error',
              message: t('draw.feedback.noData')
            });
          }
        }
      });
      writerRef.current = writer;
      const strokeData = window.HANZI_STROKE_DATA?.[currentChar.hanzi];
      setTotalStrokes(strokeData?.strokes?.length || currentChar.strokes);
      setIsLoading(false);
      if (drawMode === 'learn') {} else {
        setTimeout(() => {
          writer.quiz({
            onCorrectStroke: data => {
              playSound('stroke');
              setStrokesCompleted(data.strokeNum + 1);
              if (data.strokeNum === 0) {
                setFeedback({
                  type: 'success',
                  message: t('draw.feedback.start')
                });
              }
              setTimeout(() => setFeedback(null), 800);
            },
            onMistake: data => {
              playSound('wrong');
              mistakesRef.current += 1;
              setMistakes(prev => prev + 1);
              setFeedback({
                type: 'error',
                message: t('draw.feedback.retry')
              });
              setTimeout(() => setFeedback(null), 800);
            },
            onComplete: data => {
              playSound('complete');
              setIsComplete(true);
              const finalMistakes = mistakesRef.current;
              setCharStats(prev => ({
                completed: prev.completed + 1,
                totalMistakes: prev.totalMistakes + finalMistakes
              }));
              if (finalMistakes === 0) {
                setFeedback({
                  type: 'success',
                  message: t('draw.feedback.perfect')
                });
                markCharacterMastered(currentChar.hanzi);
              } else if (finalMistakes <= 2) {
                setFeedback({
                  type: 'success',
                  message: t('draw.feedback.good')
                });
              } else {
                setFeedback({
                  type: 'success',
                  message: t('draw.feedback.done')
                });
              }
            }
          });
        }, 300);
      }
    } catch (err) {
      console.warn('Hanzi Writer init error:', err);
    }
    return () => {
      if (writerRef.current) {
        writerRef.current = null;
      }
    };
  }, [currentChar, drawMode, showReference, playSound, t]);
  const handleAnimate = () => {
    if (writerRef.current) {
      playSound('reveal');
      writerRef.current.animateCharacter();
    }
  };
  const handleReset = () => {
    playSound('tap');
    setStrokesCompleted(0);
    setMistakes(0);
    mistakesRef.current = 0;
    setFeedback(null);
    setIsComplete(false);
    if (writerRef.current) {
      if (drawMode === 'learn') {
        writerRef.current.showCharacter();
      } else {
        writerRef.current.quiz({
          onCorrectStroke: data => {
            playSound('stroke');
            setStrokesCompleted(data.strokeNum + 1);
            setFeedback({
              type: 'success',
              message: t('draw.feedback.nice')
            });
            setTimeout(() => setFeedback(null), 600);
          },
          onMistake: () => {
            playSound('wrong');
            mistakesRef.current += 1;
            setMistakes(prev => prev + 1);
            setFeedback({
              type: 'error',
              message: t('draw.feedback.retry')
            });
            setTimeout(() => setFeedback(null), 600);
          },
          onComplete: () => {
            playSound('complete');
            setIsComplete(true);
            const finalMistakes = mistakesRef.current;
            setCharStats(prev => ({
              completed: prev.completed + 1,
              totalMistakes: prev.totalMistakes + finalMistakes
            }));
            setFeedback({
              type: 'success',
              message: finalMistakes === 0 ? t('draw.feedback.perfect') : t('draw.feedback.done')
            });
          }
        });
      }
    }
  };
  const handleNext = () => {
    playSound(currentIndex < vocab.length - 1 ? 'tap' : 'complete');
    const nextIndex = currentIndex < vocab.length - 1 ? currentIndex + 1 : 0;
    updateProgress({
      drawingAttempts: {
        ...progress.drawingAttempts,
        [currentChar.hanzi]: (progress.drawingAttempts[currentChar.hanzi] || 0) + 1
      },
      lastPositions: {
        ...(progress.lastPositions || {}),
        [positionKey]: nextIndex
      }
    });
    if (currentIndex < vocab.length - 1) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentView('home');
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      playSound('tap');
      const prevIndex = currentIndex - 1;
      updateProgress({
        lastPositions: {
          ...(progress.lastPositions || {}),
          [positionKey]: prevIndex
        }
      });
      setCurrentIndex(prevIndex);
    }
  };
  const selectDrawMode = mode => {
    if (mode !== drawMode) playSound('select');
    setDrawMode(mode);
  };
  const strokeDots = React.useMemo(() => {
    const dots = [];
    for (let i = 0; i < Math.min(totalStrokes, 12); i++) {
      let className = 'stroke-dot';
      if (i < strokesCompleted) className += ' completed';else if (i === strokesCompleted && !isComplete) className += ' current';
      dots.push(React.createElement("div", {
        key: i,
        className: className
      }));
    }
    if (totalStrokes > 12) {
      dots.push(React.createElement("span", {
        key: "more",
        style: {
          fontSize: '12px',
          color: 'var(--text-secondary)'
        }
      }, "+", totalStrokes - 12));
    }
    return dots;
  }, [totalStrokes, strokesCompleted, isComplete]);
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement("span", {
    className: "text-sm",
    style: {
      color: 'var(--accent-coral)'
    }
  }, t('draw.charNumber', {
    count: currentIndex + 1
  }))), React.createElement(MiniAppHeader, {
    icon: "brush",
    title: t('draw.title'),
    subtitle: t('draw.subtitle'),
    pill: scopePill
  }), React.createElement("div", {
    className: "mini-app-segment draw-mode-selector"
  }, React.createElement("button", {
    className: `draw-mode-btn ${drawMode === 'learn' ? 'active' : ''}`,
    onClick: () => selectDrawMode('learn')
  }, React.createElement(AppIcon, {
    name: "card"
  }), " ", t('draw.mode.learn')), React.createElement("button", {
    className: `draw-mode-btn ${drawMode === 'practice' ? 'active' : ''}`,
    onClick: () => selectDrawMode('practice')
  }, React.createElement(AppIcon, {
    name: "brush"
  }), " ", t('draw.mode.practice')), React.createElement("button", {
    className: `draw-mode-btn ${drawMode === 'quiz' ? 'active' : ''}`,
    onClick: () => selectDrawMode('quiz')
  }, React.createElement(AppIcon, {
    name: "target"
  }), " ", t('draw.mode.quiz'))), React.createElement("div", {
    className: "draw-prompt-card card",
    style: {
      textAlign: 'center',
      padding: '16px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px'
    }
  }, React.createElement("div", {
    className: "hanzi-display",
    style: {
      fontSize: '48px',
      color: 'var(--accent-lime)',
      minWidth: '64px'
    }
  }, drawMode === 'learn' || showReference ? currentChar.hanzi : '?'), React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, React.createElement("div", {
    className: "pinyin-display",
    style: {
      fontSize: '20px',
      marginTop: 0
    }
  }, currentChar.pinyin), React.createElement("p", {
    className: "text-sm",
    style: {
      margin: '4px 0 0 0'
    }
  }, currentChar.meaning)))), React.createElement("div", {
    className: "writer-mini-program hanzi-writer-container"
  }, isLoading && React.createElement("div", {
    style: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }
  }, React.createElement("div", {
    style: {
      color: '#07c160',
      animation: 'loadingPulse 1s ease-in-out infinite'
    }
  }, React.createElement(AppIcon, {
    name: "brush"
  })), React.createElement("div", {
    className: "text-sm"
  }, t('draw.loading'))), React.createElement("div", {
    ref: containerRef,
    style: {
      touchAction: 'none',
      opacity: isLoading ? 0 : 1
    }
  }), feedback && React.createElement("div", {
    className: `draw-feedback ${feedback.type}`
  }, feedback.message)), drawMode !== 'learn' && totalStrokes > 0 && React.createElement("div", {
    className: "stroke-counter"
  }, strokeDots), React.createElement("div", {
    className: "canvas-controls"
  }, drawMode === 'learn' ? React.createElement(React.Fragment, null, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleAnimate
  }, t('draw.animate')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleNext
  }, currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextChar'))) : React.createElement(React.Fragment, null, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleReset
  }, isComplete ? t('common.writeAgain') : t('common.reset')), React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => {
      playSound('reveal');
      setShowReference(prev => !prev);
    }
  }, showReference ? t('common.hide') : t('common.hint')), isComplete && React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleNext
  }, currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextChar')))), drawMode !== 'learn' && React.createElement("div", {
    className: "draw-stats"
  }, React.createElement("div", {
    className: "draw-stat"
  }, React.createElement("div", {
    className: "draw-stat-value"
  }, strokesCompleted, "/", totalStrokes), React.createElement("div", {
    className: "draw-stat-label"
  }, t('draw.strokes'))), React.createElement("div", {
    className: "draw-stat"
  }, React.createElement("div", {
    className: "draw-stat-value",
    style: {
      color: mistakes > 0 ? 'var(--accent-coral)' : 'var(--accent-lime)'
    }
  }, mistakes), React.createElement("div", {
    className: "draw-stat-label"
  }, t('draw.mistakes'))), React.createElement("div", {
    className: "draw-stat"
  }, React.createElement("div", {
    className: "draw-stat-value"
  }, charStats.completed), React.createElement("div", {
    className: "draw-stat-label"
  }, t('draw.completed')))), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handlePrev,
    disabled: currentIndex === 0
  }, t('common.prevChar')), (drawMode === 'learn' || !isComplete) && React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleNext
  }, t('common.skip'))));
}
function QuizView({
  selectedLesson,
  selectedQueue,
  progress,
  updateProgress,
  markCharacterMastered,
  setCurrentView,
  playSound,
  t
}) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY, [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getStudyQueue(baseVocab, progress));
  const [initialMasteredChars] = React.useState(progress.masteredChars);
  const scopePill = selectedQueue ? getQueueDisplayLabel(selectedQueue, t) : selectedLesson ? `L${selectedLesson}` : t('nav.quiz');
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [attemptedAnswers, setAttemptedAnswers] = React.useState([]);
  const [answeredCorrect, setAnsweredCorrect] = React.useState(false);
  const [revealedAnswer, setRevealedAnswer] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);
  const [quizType, setQuizType] = React.useState(null);
  const generateQuestions = React.useCallback(() => {
    const mastered = getKnownSet(initialMasteredChars);
    const weakPool = vocab.filter(v => !mastered.has(v.hanzi));
    const source = weakPool.length >= 4 ? weakPool : vocab;
    const shuffled = [...source].sort(() => Math.random() - 0.5).slice(0, Math.min(10, source.length));
    const qs = shuffled.map(char => {
      const similar = getSimilarDistractors(char, vocab, 3);
      const fill = vocab.filter(v => v.id !== char.id && !similar.some(s => s.id === v.id)).sort(() => Math.random() - 0.5);
      const wrong = [...similar, ...fill].slice(0, 3);
      let opts;
      if (quizType === 'hanzi-to-pinyin') {
        opts = [{
          text: char.pinyin,
          isCorrect: true
        }, ...wrong.map(w => ({
          text: w.pinyin,
          isCorrect: false
        }))];
      } else if (quizType === 'pinyin-to-hanzi') {
        opts = [{
          text: char.hanzi,
          isCorrect: true
        }, ...wrong.map(w => ({
          text: w.hanzi,
          isCorrect: false
        }))];
      } else {
        opts = [{
          text: char.meaning,
          isCorrect: true
        }, ...wrong.map(w => ({
          text: w.meaning,
          isCorrect: false
        }))];
      }
      const uniqueOpts = [];
      opts.forEach(opt => {
        if (!uniqueOpts.some(existing => existing.text === opt.text)) uniqueOpts.push(opt);
      });
      return {
        char,
        options: uniqueOpts.sort(() => Math.random() - 0.5),
        type: quizType
      };
    });
    setQuestions(qs);
    setCurrentIndex(0);
    setScore(0);
    setAttemptedAnswers([]);
    setAnsweredCorrect(false);
    setRevealedAnswer(false);
    setIsComplete(false);
  }, [vocab, quizType, initialMasteredChars]);
  React.useEffect(() => {
    if (quizType) generateQuestions();
  }, [quizType, generateQuestions]);
  const handleAnswer = option => {
    if (answeredCorrect || revealedAnswer || attemptedAnswers.some(a => a.text === option.text)) return;
    if (option.isCorrect) {
      playSound('correct');
      const newScore = score + 1;
      setScore(newScore);
      setAnsweredCorrect(true);
      markCharacterMastered(questions[currentIndex].char.hanzi);
      return;
    }
    const nextAttempts = [...attemptedAnswers, option];
    playSound(nextAttempts.length >= 2 ? 'reveal' : 'wrong');
    setAttemptedAnswers(nextAttempts);
    if (nextAttempts.length >= 2) {
      setRevealedAnswer(true);
    }
  };
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      playSound('tap');
      setCurrentIndex(currentIndex + 1);
      setAttemptedAnswers([]);
      setAnsweredCorrect(false);
      setRevealedAnswer(false);
    } else {
      playSound('complete');
      setIsComplete(true);
      updateProgress({
        quizScores: [...progress.quizScores, {
          score,
          total: questions.length,
          date: new Date().toISOString()
        }]
      });
    }
  };
  const chooseQuizType = type => {
    playSound('select');
    setQuizType(type);
  };
  const restartQuiz = () => {
    playSound('select');
    generateQuestions();
  };
  const changeQuizMode = () => {
    playSound('tap');
    setQuizType(null);
  };
  if (!quizType) {
    return React.createElement("div", {
      className: "screen"
    }, React.createElement("header", {
      className: "header"
    }, React.createElement("button", {
      className: "back-btn",
      onClick: () => setCurrentView('home')
    }, t('common.back')), React.createElement(HeaderLogoMark, null)), React.createElement(MiniAppHeader, {
      icon: "target",
      title: t('quiz.title'),
      subtitle: t('quiz.subtitle'),
      pill: scopePill
    }), React.createElement("div", {
      className: "card card-clickable card-accent-lime quiz-mode-card",
      onClick: () => chooseQuizType('hanzi-to-pinyin'),
      role: "button",
      tabIndex: 0
    }, React.createElement("span", {
      className: "quiz-mode-icon"
    }, React.createElement(AppIcon, {
      name: "sound"
    })), React.createElement("div", null, React.createElement("p", {
      className: "title-lg"
    }, t('quiz.mode.hanziPinyin')), React.createElement("p", {
      className: "text-sm"
    }, t('quiz.mode.hanziPinyinCopy')))), React.createElement("div", {
      className: "card card-clickable card-accent-cyan quiz-mode-card",
      onClick: () => chooseQuizType('pinyin-to-hanzi'),
      role: "button",
      tabIndex: 0
    }, React.createElement("span", {
      className: "quiz-mode-icon"
    }, React.createElement(AppIcon, {
      name: "target"
    })), React.createElement("div", null, React.createElement("p", {
      className: "title-lg"
    }, t('quiz.mode.pinyinHanzi')), React.createElement("p", {
      className: "text-sm"
    }, t('quiz.mode.pinyinHanziCopy')))), React.createElement("div", {
      className: "card card-clickable card-accent-coral quiz-mode-card",
      onClick: () => chooseQuizType('hanzi-to-meaning'),
      role: "button",
      tabIndex: 0
    }, React.createElement("span", {
      className: "quiz-mode-icon"
    }, React.createElement(AppIcon, {
      name: "book"
    })), React.createElement("div", null, React.createElement("p", {
      className: "title-lg"
    }, t('quiz.mode.hanziMeaning')), React.createElement("p", {
      className: "text-sm"
    }, t('quiz.mode.hanziMeaningCopy')))));
  }
  if (isComplete) {
    const pct = Math.round(score / questions.length * 100);
    return React.createElement("div", {
      className: "screen"
    }, React.createElement("header", {
      className: "header"
    }, React.createElement("button", {
      className: "back-btn",
      onClick: () => setCurrentView('home')
    }, t('common.back'))), React.createElement("div", {
      className: "results-display"
    }, React.createElement("div", {
      className: "score-circle"
    }, React.createElement("div", {
      className: "score-value"
    }, pct, "%"), React.createElement("div", {
      className: "score-label"
    }, t('common.score'))), React.createElement("h2", {
      className: "title-xl"
    }, pct >= 80 ? t('quiz.resultGreat') : pct >= 60 ? t('quiz.resultGood') : t('quiz.resultKeep')), React.createElement("p", {
      className: "text-sm",
      style: {
        marginTop: '12px'
      }
    }, t('quiz.scoreLine', {
      score,
      total: questions.length
    }))), React.createElement("div", {
      className: "nav-actions"
    }, React.createElement("button", {
      className: "btn btn-secondary",
      onClick: changeQuizMode
    }, t('quiz.changeMode')), React.createElement("button", {
      className: "btn btn-primary",
      onClick: restartQuiz
    }, t('quiz.again'))));
  }
  const q = questions[currentIndex];
  if (!q) return null;
  const canContinue = answeredCorrect || revealedAnswer;
  const correctOption = q.options.find(opt => opt.isCorrect);
  const isWordQuestion = q.char.kind === 'word';
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement("span", {
    className: "text-sm",
    style: {
      color: 'var(--accent-purple)'
    }
  }, currentIndex + 1, " / ", questions.length)), React.createElement(MiniAppHeader, {
    icon: "target",
    title: t('quiz.title'),
    subtitle: t('quiz.subtitleActive'),
    pill: t('quiz.scoreFooter', {
      score,
      total: questions.length
    })
  }), React.createElement("div", {
    className: "progress-bar"
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: `${currentIndex / questions.length * 100}%`
    }
  })), React.createElement("div", {
    className: "quiz-question quiz-pass-card"
  }, q.type === 'pinyin-to-hanzi' ? React.createElement(React.Fragment, null, React.createElement("p", {
    className: "text-sm"
  }, t('quiz.whichHanzi')), React.createElement("div", {
    className: "pinyin-display",
    style: {
      fontSize: '42px',
      marginTop: '16px'
    }
  }, q.char.pinyin), React.createElement("p", {
    className: "meaning-display"
  }, q.char.meaning)) : React.createElement(React.Fragment, null, React.createElement("p", {
    className: "text-sm"
  }, q.type === 'hanzi-to-pinyin' ? t('quiz.howRead') : t('quiz.whatMeans')), React.createElement("div", {
    className: `hanzi-display hanzi-xl ${isWordQuestion ? 'hanzi-word' : ''}`,
    style: {
      color: 'var(--accent-lime)'
    }
  }, q.char.hanzi))), React.createElement("div", {
    className: "quiz-options service-list"
  }, q.options.map((opt, i) => {
    const wasTried = attemptedAnswers.some(a => a.text === opt.text);
    const showCorrect = canContinue && opt.isCorrect;
    return React.createElement("button", {
      key: i,
      className: `quiz-option ${showCorrect ? 'correct' : ''} ${wasTried ? 'incorrect disabled' : ''} ${canContinue ? 'disabled' : ''}`,
      onClick: () => handleAnswer(opt),
      style: q.type === 'pinyin-to-hanzi' ? {
        fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif",
        fontSize: opt.text.length > 2 ? '24px' : '32px',
        textAlign: 'center',
        justifyContent: 'center'
      } : {}
    }, opt.text);
  })), (attemptedAnswers.length > 0 || canContinue) && React.createElement("div", {
    className: "quiz-feedback"
  }, answeredCorrect ? React.createElement("strong", null, t('quiz.correct')) : revealedAnswer ? React.createElement(React.Fragment, null, React.createElement("div", null, t('quiz.correctAnswer'), React.createElement("strong", null, correctOption?.text)), React.createElement("div", {
    className: "pinyin-display"
  }, q.char.pinyin)) : React.createElement("strong", null, t('quiz.tryAgain'))), canContinue && React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleNextQuestion
  }, currentIndex === questions.length - 1 ? t('common.done') : t('quiz.next'))), React.createElement("p", {
    className: "text-sm",
    style: {
      textAlign: 'center',
      marginTop: '20px'
    }
  }, t('quiz.scoreFooter', {
    score,
    total: currentIndex + (canContinue ? 1 : 0)
  })));
}
function StatsView({
  progress,
  setCurrentView,
  t
}) {
  const byLesson = [12, 13, 14, 15].map(l => ({
    lesson: l,
    mastered: VOCABULARY.filter(v => v.lesson === l && progress.masteredChars.includes(v.hanzi)).length,
    total: VOCABULARY.filter(v => v.lesson === l).length
  }));
  const recentScores = progress.quizScores.slice(-5).reverse();
  const handleReset = () => {
    if (window.confirm(t('stats.confirmReset'))) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };
  const handleExport = () => {
    const exportData = {
      version: 1,
      exportDate: new Date().toISOString(),
      appName: 'hanzi-master',
      progress: progress
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hanzi-master-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleImport = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data.progress || data.appName !== 'hanzi-master') {
          alert(t('stats.invalidBackup'));
          return;
        }
        let imported = {
          masteredChars: data.progress.masteredChars || [],
          learningChars: data.progress.learningChars || [],
          quizScores: data.progress.quizScores || [],
          drawingAttempts: data.progress.drawingAttempts || {},
          lastPositions: data.progress.lastPositions || {},
          lastStudyDate: data.progress.lastStudyDate || null,
          streak: data.progress.streak || 0,
          totalReviews: data.progress.totalReviews || 0,
          streakDays: data.progress.streakDays || 0
        };
        imported = migrateProgress(imported);
        if (window.confirm(t('stats.confirmImport', {
          date: new Date(data.exportDate).toLocaleDateString()
        }))) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
          window.location.reload();
        }
      } catch (err) {
        alert(t('stats.importFail'));
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement(HeaderLogoMark, null)), React.createElement(MiniAppHeader, {
    icon: "wallet",
    title: t('stats.title'),
    subtitle: t('stats.subtitle'),
    pill: `${progress.masteredChars.length}/${VOCABULARY.length}`
  }), React.createElement("div", {
    className: "stats-bar stats-wallet"
  }, React.createElement("div", {
    className: "stat-item"
  }, React.createElement("div", {
    className: "stat-value"
  }, progress.masteredChars.length), React.createElement("div", {
    className: "stat-label"
  }, t('home.stat.mastered'))), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("div", {
    className: "stat-value"
  }, progress.totalReviews), React.createElement("div", {
    className: "stat-label"
  }, t('home.stat.reviews'))), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("div", {
    className: "stat-value"
  }, progress.streakDays), React.createElement("div", {
    className: "stat-label"
  }, t('stats.streak')))), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.byLesson')), React.createElement("div", {
    className: "section-line"
  })), byLesson.map(({
    lesson,
    mastered,
    total
  }) => React.createElement("div", {
    key: lesson,
    className: "card"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement("p", {
    className: "title-md"
  }, t('stats.lesson', {
    lesson
  })), React.createElement("span", {
    className: "text-accent",
    style: {
      fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif",
      fontSize: '20px',
      fontWeight: 900
    }
  }, mastered, "/", total)), React.createElement("div", {
    className: "progress-bar",
    style: {
      marginTop: '10px',
      marginBottom: '0'
    }
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: `${mastered / total * 100}%`
    }
  })))), recentScores.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.recent')), React.createElement("div", {
    className: "section-line"
  })), recentScores.map((q, i) => React.createElement("div", {
    key: i,
    className: "card"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '13px'
    }
  }, new Date(q.date).toLocaleDateString()), React.createElement("span", {
    className: "text-accent",
    style: {
      fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif",
      fontSize: '22px',
      fontWeight: 900
    }
  }, Math.round(q.score / q.total * 100), "%"))))), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.allChars', {
    count: VOCABULARY.length
  })), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "char-grid"
  }, VOCABULARY.map(c => React.createElement("div", {
    key: c.id,
    className: `char-item ${progress.masteredChars.includes(c.hanzi) ? 'mastered' : progress.learningChars.includes(c.hanzi) ? 'learning' : ''}`,
    title: `${c.pinyin} - ${c.meaning}`
  }, c.hanzi))), React.createElement("div", {
    className: "section-title",
    style: {
      marginTop: '28px'
    }
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.backup')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "backup-buttons"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleExport
  }, React.createElement("span", {
    style: {
      marginRight: '8px'
    }
  }, "\uD83D\uDCE4"), " ", t('stats.export')), React.createElement("label", {
    className: "btn btn-secondary",
    style: {
      cursor: 'pointer'
    }
  }, React.createElement("span", {
    style: {
      marginRight: '8px'
    }
  }, "\uD83D\uDCE5"), " ", t('stats.import'), React.createElement("input", {
    type: "file",
    accept: ".json",
    onChange: handleImport,
    style: {
      display: 'none'
    }
  }))), React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, React.createElement("button", {
    className: "btn btn-coral",
    onClick: handleReset
  }, t('stats.reset'))));
}
document.body.classList.add('app-ready');
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(HanziMasterApp, null));
