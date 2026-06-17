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

// ============================================
// STORAGE
// ============================================
const STORAGE_KEY = 'hanzi_master_v3';
const LANGUAGE_KEY = 'hanzi_master_ui_language';
const SOUND_KEY = 'hanzi_master_sound_enabled';
const AMBIENCE_KEY = 'hanzi_master_ambience_enabled';

const SOUND_PATTERNS = {
  tap: [{ frequency: 520, start: 0, duration: 0.045, gain: 0.022, type: 'triangle' }],
  select: [
    { frequency: 520, start: 0, duration: 0.055, gain: 0.03, type: 'triangle' },
    { frequency: 680, start: 0.045, duration: 0.07, gain: 0.026, type: 'sine' }
  ],
  stroke: [{ frequency: 640, start: 0, duration: 0.035, gain: 0.018, type: 'sine' }],
  correct: [
    { frequency: 660, start: 0, duration: 0.08, gain: 0.04, type: 'sine' },
    { frequency: 880, start: 0.07, duration: 0.1, gain: 0.036, type: 'sine' }
  ],
  wrong: [
    { frequency: 185, start: 0, duration: 0.09, gain: 0.035, type: 'triangle' },
    { frequency: 135, start: 0.08, duration: 0.11, gain: 0.026, type: 'sine' }
  ],
  reveal: [
    { frequency: 392, start: 0, duration: 0.07, gain: 0.026, type: 'sine' },
    { frequency: 494, start: 0.07, duration: 0.09, gain: 0.03, type: 'sine' }
  ],
  complete: [
    { frequency: 523, start: 0, duration: 0.08, gain: 0.036, type: 'sine' },
    { frequency: 659, start: 0.07, duration: 0.09, gain: 0.034, type: 'sine' },
    { frequency: 784, start: 0.15, duration: 0.14, gain: 0.032, type: 'sine' }
  ]
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
  const { context, pluckBus } = ambienceNodes;
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
    } catch (e) {
      // Audio nodes may already be stopped by the browser.
    }
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

const formatUiText = (template, vars = {}) => Object.entries(vars).reduce(
  (text, [key, value]) => text.replaceAll(`{${key}}`, value),
  template
);

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

// Helper to migrate old ID-based progress to hanzi-based
const migrateProgress = (data) => {
  // Check if already migrated (masteredChars contains strings/hanzi)
  if (data.masteredChars.length > 0 && typeof data.masteredChars[0] === 'string') {
    return data; // Already migrated
  }

  // Migrate IDs to hanzi
  const idToHanzi = {};
  VOCABULARY.forEach(v => { idToHanzi[v.id] = v.hanzi; });

  const migrated = {
    ...data,
    masteredChars: data.masteredChars.map(id => idToHanzi[id]).filter(Boolean),
    learningChars: data.learningChars.map(id => idToHanzi[id]).filter(Boolean),
    drawingAttempts: {}
  };

  // Migrate drawingAttempts keys
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
      // Validate data structure
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
    lastPositions: {},
  };
};

const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save progress:', e);
  }
};

const SIMILAR_CHAR_GROUPS = [
  ['是', '十', '师', '时'],
  ['人', '个', '大', '太', '八', '入'],
  ['日', '目', '白', '百'],
  ['口', '回', '四'],
  ['小', '少'],
  ['天', '夫', '大'],
  ['去', '云'],
  ['坐', '座'],
  ['买', '卖'],
  ['看', '着'],
];

const getKnownSet = (items = []) => new Set(items.filter(Boolean));

const getStudyQueue = (vocab, progress) => {
  const mastered = getKnownSet(progress.masteredChars);
  const learning = getKnownSet(progress.learningChars);
  return [...vocab].sort((a, b) => {
    const priority = (char) => {
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
      queue.push({ ...char, dailyReason: reason });
    });
  };
  const byPracticeNeed = (a, b) => {
    const attemptDiff = (attempts[a.hanzi] || 0) - (attempts[b.hanzi] || 0);
    return attemptDiff || a.lesson - b.lesson || a.id - b.id;
  };
  const learningChars = vocab
    .filter(char => learning.has(char.hanzi) && !mastered.has(char.hanzi))
    .sort(byPracticeNeed);
  const newChars = vocab
    .filter(char => !learning.has(char.hanzi) && !mastered.has(char.hanzi))
    .sort((a, b) => a.lesson - b.lesson || a.id - b.id);
  const reviewChars = vocab
    .filter(char => mastered.has(char.hanzi))
    .sort(byPracticeNeed);

  addBucket(learningChars, 'review');
  addBucket(newChars, 'new');
  addBucket(reviewChars, 'solidify');
  return queue;
};

const getDailyTrainingSummary = (queue) => queue.reduce((summary, char) => {
  summary[char.dailyReason] = (summary[char.dailyReason] || 0) + 1;
  return summary;
}, {});

const getSimilarDistractors = (char, vocab, count = 3) => {
  const sameGroup = SIMILAR_CHAR_GROUPS.find(group => group.includes(char.hanzi)) || [];
  const byGroup = sameGroup
    .filter(hanzi => hanzi !== char.hanzi)
    .map(hanzi => vocab.find(v => v.hanzi === hanzi))
    .filter(Boolean);
  const byShape = vocab
    .filter(v => v.id !== char.id && !byGroup.some(g => g.id === v.id))
    .sort((a, b) => {
      const strokeDiff = Math.abs((a.strokes || 0) - (char.strokes || 0)) - Math.abs((b.strokes || 0) - (char.strokes || 0));
      return strokeDiff || Math.abs(a.id - char.id) - Math.abs(b.id - char.id);
    });
  return [...byGroup, ...byShape].slice(0, count);
};

// ============================================
// STYLES
// ============================================
const styles = `
  /* ===== MINI-PROGRAM BASE SYSTEM ===== */
  :root {
    --bg-primary: #f5f7f6;
    --bg-secondary: #eef7f3;
    --bg-card: #ffffff;
    --accent-lime: #07c160;
    --accent-coral: #f24848;
    --accent-cyan: #1677ff;
    --accent-purple: #d99a18;
    --text-primary: #18212b;
    --text-secondary: #697780;
    --border-width: 1px;
    --border-color: #dce7e2;
    --radius: 8px;
    --shadow-offset: 0px;
    --transition-fast: 0.18s ease;
    --transition-bounce: 0.38s cubic-bezier(0.2, 0.9, 0.2, 1.2);
  }

  body {
    background: linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 38%, #f7f8fb 100%);
    color: var(--text-primary);
    overflow-x: hidden;
  }

  html,
  body,
  #root {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .app-container {
    position: relative;
    min-height: 100vh;
    min-height: 100dvh;
    width: 100%;
    max-width: 100vw;
    background:
      radial-gradient(circle at 18% 8%, rgba(7, 193, 96, 0.16), transparent 28%),
      radial-gradient(circle at 86% 12%, rgba(22, 119, 255, 0.14), transparent 24%),
      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 42%, #f9faf8 100%);
    color: var(--text-primary);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    overflow-x: hidden;
  }

  .screen {
    width: min(calc(100vw - 24px), 460px);
    max-width: 460px;
    min-height: 100vh;
    min-height: 100dvh;
    margin: 0 auto;
    padding: 18px;
    padding-bottom: calc(92px + env(safe-area-inset-bottom, 20px));
    box-sizing: border-box;
  }

  .screen *,
  .app-bottom-nav,
  .app-bottom-nav * {
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .screen {
      max-width: 480px;
      padding: 24px;
      padding-bottom: 110px;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 0 14px;
    margin-bottom: 10px;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #0d1f17;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0;
    user-select: none;
  }

  .back-btn {
    min-height: 40px;
    padding: 9px 14px;
    border: 1px solid rgba(7, 193, 96, 0.2);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.82);
    color: var(--text-primary);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 14px;
    font-weight: 800;
    transition: transform var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);
    white-space: nowrap;
  }

  .card {
    position: relative;
    margin-bottom: 14px;
    padding: 18px;
    overflow: hidden;
    border: 1px solid rgba(24, 33, 43, 0.08);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);
    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
  }

  .card-clickable {
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .card-clickable:active,
  .btn:active,
  .back-btn:active {
    transform: scale(0.985);
    box-shadow: 0 5px 14px rgba(20, 49, 35, 0.08);
  }

  @media (hover: hover) {
    .card-clickable:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 34px rgba(20, 49, 35, 0.12);
    }

    .btn-secondary:hover,
    .back-btn:hover {
      background: #ecfff5;
      color: #06783d;
    }
  }

  .card-accent-lime,
  .card-accent-cyan,
  .card-accent-coral,
  .card-accent-purple {
    border-color: rgba(24, 33, 43, 0.08);
    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.1);
  }

  .title-hero,
  .title-xl,
  .title-lg,
  .title-md {
    margin: 0;
    color: #14251c;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: 0;
  }

  .title-hero {
    font-size: clamp(38px, 12vw, 50px);
    background: linear-gradient(135deg, #07c160 0%, #1677ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title-xl { font-size: clamp(28px, 8vw, 36px); }
  .title-lg { font-size: clamp(20px, 5.6vw, 26px); }
  .title-md { font-size: 15px; }

  .text-sm {
    margin: 0;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.45;
    letter-spacing: 0;
  }

  .text-accent { color: var(--accent-lime); }

  .stats-bar,
  .draw-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 24px;
  }

  .stat-item,
  .draw-stat {
    padding: 12px 8px;
    text-align: center;
    border: 1px solid rgba(24, 33, 43, 0.08);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.76);
    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);
  }

  .stat-value,
  .draw-stat-value,
  .score-value,
  .lesson-number,
  .text-accent {
    color: var(--accent-lime);
  }

  .stat-value,
  .draw-stat-value,
  .lesson-number,
  .score-value {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-weight: 900;
    line-height: 1;
  }

  .stat-value,
  .lesson-number { font-size: 34px; }
  .draw-stat-value { font-size: 24px; }

  .stat-label,
  .draw-stat-label,
  .score-label {
    margin-top: 4px;
    color: var(--text-secondary);
    font-size: 10px;
    line-height: 1.3;
    letter-spacing: 0;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    padding: 13px 18px;
    border: 1px solid transparent;
    border-radius: var(--radius);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0;
    text-decoration: none;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
    -webkit-user-select: none;
    user-select: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, #07c160, #0aa75a);
    color: #fff;
    box-shadow: 0 10px 22px rgba(7, 193, 96, 0.24);
  }

  .btn-secondary {
    background: #ffffff;
    color: #1677ff;
    border-color: rgba(22, 119, 255, 0.16);
  }

  .btn-coral {
    background: #fff1f0;
    color: #cf2b2b;
    border-color: #ffd2cf;
  }

  .btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .hanzi-display {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'SimSun', sans-serif;
    font-weight: 900;
  }

  .hanzi-hero {
    padding: 16px;
    font-size: clamp(96px, 28vw, 128px);
    line-height: 1;
    text-align: center;
    animation: hanziFloat 5s ease-in-out infinite;
  }

  .hanzi-xl {
    padding: 12px;
    font-size: clamp(60px, 18vw, 84px);
    line-height: 1;
    text-align: center;
  }

  .hanzi-lg { font-size: clamp(48px, 14vw, 64px); line-height: 1; }
  .hanzi-md { font-size: clamp(28px, 8vw, 36px); line-height: 1; }

  .progress-bar {
    width: 100%;
    height: 8px;
    margin: 16px 0;
    overflow: hidden;
    border-radius: 999px;
    background: #e3ebe7;
  }

  .progress-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #07c160, #1677ff);
    transition: width 0.4s ease-out;
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .menu-item {
    min-height: 112px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .menu-icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(7, 193, 96, 0.14), rgba(22, 119, 255, 0.14));
    font-size: 28px;
  }

  .menu-label {
    font-size: 13px;
    font-weight: 900;
  }

  .streak-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border: 1px solid #ffe2a8;
    border-radius: var(--radius);
    background: #fff7e6;
    color: #9a6400;
    font-size: 15px;
    font-weight: 900;
  }

  .canvas-container,
  .hanzi-writer-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    margin: 16px 0;
    border: 1px solid rgba(24, 33, 43, 0.08);
    border-radius: var(--radius);
    background: #fff;
    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);
    touch-action: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .drawing-canvas {
    width: 100%;
    height: 100%;
    display: block;
    touch-action: none;
  }

  .canvas-guide {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(7, 193, 96, 0.1);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: clamp(150px, 45vw, 200px);
    font-weight: 900;
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .canvas-controls,
  .nav-actions {
    display: flex;
    gap: 10px;
  }

  .canvas-controls .btn,
  .nav-actions .btn {
    flex: 1;
  }

  .draw-mode-selector {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .draw-mode-btn {
    flex: 1;
    min-height: 46px;
    padding: 10px 8px;
    border: 0;
    border-radius: var(--radius);
    background: transparent;
    color: #65737d;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0;
    transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
  }

  .draw-mode-btn.active {
    background: #07c160;
    color: #fff;
    box-shadow: 0 7px 16px rgba(7, 193, 96, 0.2);
  }

  .hanzi-writer-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hanzi-writer-container svg {
    width: 100% !important;
    height: 100% !important;
  }

  .stroke-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 12px 0;
    font-size: 14px;
  }

  .stroke-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #d8e6df;
    transition: all 0.2s ease;
  }

  .stroke-dot.completed { background: #07c160; }
  .stroke-dot.current { background: #1677ff; transform: scale(1.3); }
  .stroke-dot.error { background: #f24848; }

  .draw-feedback {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 5;
    padding: 12px;
    border: 1px solid;
    border-radius: var(--radius);
    text-align: center;
    font-size: 15px;
    font-weight: 900;
    pointer-events: none;
    animation: feedbackPop 0.3s ease-out;
  }

  .draw-feedback.success {
    background: #e8fff3;
    color: #087541;
    border-color: #b7f1d2;
  }

  .draw-feedback.error {
    background: #fff1f0;
    color: #cf2b2b;
    border-color: #ffd2cf;
  }

  .quiz-question {
    margin: 10px 0 14px;
    padding: 24px 16px;
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);
    text-align: center;
  }

  .quiz-options {
    display: grid;
    gap: 12px;
  }

  .quiz-option {
    padding: 15px 16px;
    border: 1px solid rgba(24, 33, 43, 0.08);
    border-radius: var(--radius);
    background: #fff;
    color: var(--text-primary);
    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.06);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 15px;
    text-align: left;
    transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
    -webkit-user-select: none;
    user-select: none;
  }

  .quiz-option:active:not(.disabled) { transform: scale(0.985); }
  .quiz-option.correct { background: #e8fff3; color: #087541; border-color: #b7f1d2; animation: correctPop 0.35s ease-out; }
  .quiz-option.incorrect { background: #fff1f0; color: #cf2b2b; border-color: #ffd2cf; animation: incorrectShake 0.35s ease-out; }
  .quiz-option.disabled { pointer-events: none; cursor: default; }

  .quiz-feedback {
    margin-top: 16px;
    padding: 14px;
    border: 1px solid rgba(22, 119, 255, 0.16);
    border-radius: var(--radius);
    background: #f0f7ff;
    color: #17344d;
    font-size: 13px;
  }

  .quiz-feedback strong { color: var(--accent-lime); }
  .quiz-feedback .pinyin-display { margin-top: 6px; font-size: 22px; }

  .flashcard {
    min-height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .flashcard-hint {
    margin-top: 16px;
    color: var(--text-secondary);
    font-size: 12px;
    animation: hintPulse 2s ease-in-out infinite;
  }

  .pinyin-display {
    margin-top: 12px;
    color: var(--accent-cyan);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: clamp(22px, 6vw, 28px);
    font-weight: 700;
  }

  .meaning-display {
    margin-top: 8px;
    color: var(--text-secondary);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: clamp(16px, 4.5vw, 20px);
  }

  .nav-actions { margin-top: 20px; }

  .results-display {
    padding: 32px 0;
    text-align: center;
  }

  .score-circle {
    width: clamp(140px, 40vw, 170px);
    height: clamp(140px, 40vw, 170px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    border: 6px solid var(--accent-lime);
    border-radius: 50%;
    box-shadow: 0 0 30px rgba(7, 193, 96, 0.18);
  }

  .score-value { font-size: clamp(48px, 14vw, 60px); }

  .char-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 6px;
    margin-top: 16px;
  }

  @media (min-width: 400px) {
    .char-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  }

  .char-item {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: #edf3ef;
    color: #1d2c35;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: clamp(16px, 4.5vw, 20px);
    font-weight: 700;
    transition: transform var(--transition-fast);
  }

  .char-item.mastered { background: #07c160; color: #fff; }
  .char-item.learning { background: #1677ff; color: #fff; }

  .backup-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .backup-buttons .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 28px 0 16px;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(7, 193, 96, 0.35), transparent);
  }

  .lesson-card {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .lesson-number {
    min-width: 70px;
    text-align: center;
  }

  .lesson-info {
    flex: 1;
    min-width: 0;
  }

  .floating-indicator {
    position: fixed;
    left: 50%;
    bottom: calc(24px + env(safe-area-inset-bottom, 0px));
    z-index: 100;
    transform: translateX(-50%);
    padding: 14px 28px;
    border: 1px solid rgba(7, 193, 96, 0.2);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);
    animation: floatIn 0.4s cubic-bezier(0.2, 0.9, 0.2, 1.2);
  }

  @keyframes hanziFloat {
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50% { transform: translateY(-8px) rotate(1deg); }
  }

  @keyframes feedbackPop {
    0% { transform: scale(0.9); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes correctPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
  }

  @keyframes incorrectShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  @keyframes hintPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  @keyframes floatIn {
    0% { transform: translateX(-50%) translateY(80px); opacity: 0; }
    100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  }

  /* ===== UTILITY ANIMATIONS ===== */
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-slide-up {
    animation: slideUp 0.35s ease-out;
  }

  /* ===== CHINESE SUPER-APP THEME ===== */
  :root {
    --bg-primary: #f5f7f6;
    --bg-secondary: #eef7f3;
    --bg-card: #ffffff;
    --accent-lime: #07c160;
    --accent-coral: #f24848;
    --accent-cyan: #1677ff;
    --accent-purple: #d99a18;
    --text-primary: #18212b;
    --text-secondary: #697780;
    --border-width: 1px;
    --border-color: #dce7e2;
    --radius: 8px;
    --shadow-offset: 0px;
    --transition-fast: 0.18s ease;
    --transition-bounce: 0.38s cubic-bezier(0.2, 0.9, 0.2, 1.2);
  }

  body {
    background:
      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 36%, #f7f8fb 100%);
    color: var(--text-primary);
    overflow-x: hidden;
  }

  html,
  body,
  #root {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-anchor: none;
  }

  .app-container {
    background:
      radial-gradient(circle at 18% 8%, rgba(7, 193, 96, 0.16), transparent 28%),
      radial-gradient(circle at 86% 12%, rgba(22, 119, 255, 0.14), transparent 24%),
      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 42%, #f9faf8 100%);
    color: var(--text-primary);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  .screen {
    width: min(calc(100vw - 24px), 460px);
    box-sizing: border-box;
    max-width: 460px;
    margin: 0 auto;
    padding: 18px;
    padding-bottom: calc(92px + env(safe-area-inset-bottom, 20px));
  }

  .screen *,
  .app-bottom-nav,
  .app-bottom-nav * {
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .screen {
      max-width: 480px;
      padding: 24px;
      padding-bottom: 110px;
    }
  }

  .screen::before {
    content: "汉";
    position: fixed;
    top: 76px;
    right: max(12px, calc((100vw - 460px) / 2 - 24px));
    z-index: 0;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 116px;
    font-weight: 900;
    color: rgba(7, 193, 96, 0.06);
    animation: characterDrift 7s ease-in-out infinite;
    pointer-events: none;
  }

  .screen > * {
    position: relative;
    z-index: 1;
  }

  .header {
    padding: 10px 0 14px;
    margin-bottom: 10px;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #0d1f17;
    font-size: 30px;
    letter-spacing: 0;
    text-shadow: none;
    transform: none;
  }

  .logo::after {
    content: "Master";
    padding: 4px 9px;
    border-radius: 999px;
    background: linear-gradient(135deg, #07c160, #1677ff);
    color: #fff;
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 12px;
    font-weight: 800;
  }

  .streak-badge,
  .back-btn,
  .btn,
  .draw-mode-btn,
  .quiz-option {
    border-radius: var(--radius);
    letter-spacing: 0;
    box-shadow: none;
  }

  .back-btn {
    background: rgba(255, 255, 255, 0.82);
    color: var(--text-primary);
    border-color: rgba(7, 193, 96, 0.2);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 14px;
    font-weight: 800;
  }

  .card,
  .stat-item,
  .draw-stat,
  .hanzi-writer-container,
  .canvas-container,
  .quiz-option,
  .floating-indicator {
    border-color: rgba(24, 33, 43, 0.08);
    border-radius: var(--radius);
    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);
  }

  .card {
    background: rgba(255, 255, 255, 0.94);
    padding: 18px;
    margin-bottom: 14px;
    overflow: hidden;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: linear-gradient(90deg, #07c160, #1677ff, #d99a18);
    opacity: 0;
    transition: opacity var(--transition-fast);
  }

  .card-clickable:hover::before,
  .card-accent-lime::before,
  .card-accent-cyan::before,
  .card-accent-coral::before,
  .card-accent-purple::before {
    opacity: 1;
  }

  .card-clickable:active,
  .btn:active,
  .back-btn:active {
    transform: scale(0.985);
    box-shadow: 0 5px 14px rgba(20, 49, 35, 0.08);
  }

  @media (hover: hover) {
    .card-clickable:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 34px rgba(20, 49, 35, 0.12);
    }

    .btn-secondary:hover,
    .back-btn:hover {
      background: #ecfff5;
      color: #06783d;
    }
  }

  .card-accent-lime,
  .card-accent-cyan,
  .card-accent-coral,
  .card-accent-purple {
    border-color: rgba(24, 33, 43, 0.08);
    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.1);
  }

  .title-hero {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 44px;
    letter-spacing: 0;
    background: linear-gradient(135deg, #07c160 0%, #1677ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title-xl {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 32px;
    letter-spacing: 0;
  }

  .title-lg {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 22px;
    letter-spacing: 0;
  }

  .title-md,
  .menu-label,
  .stat-label,
  .draw-stat-label,
  .score-label,
  .text-sm {
    letter-spacing: 0;
  }

  .text-sm {
    font-size: 12px;
    color: var(--text-secondary);
  }

  .progress-bar {
    height: 8px;
    border: none;
    border-radius: 999px;
    background: #e3ebe7;
  }

  .progress-fill {
    border-radius: 999px;
    background: linear-gradient(90deg, #07c160, #1677ff);
  }

  .stats-bar {
    gap: 8px;
  }

  .stat-item {
    background: rgba(255, 255, 255, 0.76);
    padding: 12px 8px;
  }

  .stat-value,
  .draw-stat-value,
  .score-value,
  .lesson-number,
  .text-accent {
    color: #07c160;
  }

  .stat-value,
  .lesson-number,
  .score-value {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 34px;
  }

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .menu-item {
    min-height: 112px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.94), rgba(250,253,252,0.94));
  }

  .menu-icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(7, 193, 96, 0.14), rgba(22, 119, 255, 0.14));
    font-size: 28px;
    animation: iconBreathe 4s ease-in-out infinite;
  }

  .menu-label {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 13px;
    font-weight: 900;
    color: #1d2c35;
  }

  .btn {
    min-height: 50px;
    border: none;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-size: 15px;
    font-weight: 900;
  }

  .btn-primary {
    background: linear-gradient(135deg, #07c160, #0aa75a);
    color: #fff;
    box-shadow: 0 10px 22px rgba(7, 193, 96, 0.24);
  }

  .btn-secondary {
    background: #ffffff;
    color: #1677ff;
    border: 1px solid rgba(22, 119, 255, 0.16);
  }

  .btn-coral,
  .quiz-option.incorrect,
  .draw-feedback.error {
    background: #fff1f0;
    color: #cf2b2b;
    border-color: #ffd2cf;
  }

  .hanzi-display {
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'SimSun', sans-serif;
  }

  .hanzi-hero {
    font-size: 116px;
    color: #07c160;
    animation: hanziFloat 5s ease-in-out infinite;
  }

  .hanzi-xl {
    font-size: 78px;
  }

  .pinyin-display {
    color: #1677ff;
  }

  .meaning-display {
    color: #5b6973;
  }

  .section-title {
    margin: 24px 0 12px;
  }

  .section-line {
    height: 1px;
    background: linear-gradient(90deg, rgba(7, 193, 96, 0.35), transparent);
  }

  .lesson-card {
    gap: 14px;
  }

  .lesson-number {
    min-width: 58px;
  }

  .draw-mode-selector {
    padding: 4px;
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.74);
    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.06);
  }

  .draw-mode-btn {
    border: none;
    background: transparent;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    font-weight: 900;
    color: #65737d;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .draw-mode-btn svg {
    width: 18px;
    height: 18px;
  }

  .hanzi-writer-container .text-sm + svg,
  .hanzi-writer-container svg:first-child {
    max-width: 100%;
  }

  .hanzi-writer-container > div[style*="position: absolute"] svg {
    width: 46px;
    height: 46px;
  }

  .draw-mode-btn.active {
    background: #07c160;
    color: #fff;
    box-shadow: 0 7px 16px rgba(7, 193, 96, 0.2);
  }

  .hanzi-writer-container {
    background:
      linear-gradient(135deg, rgba(7, 193, 96, 0.04), rgba(22, 119, 255, 0.04)),
      #fff;
  }

  .stroke-dot {
    border: none;
    background: #d8e6df;
  }

  .stroke-dot.completed,
  .draw-feedback.success,
  .quiz-option.correct {
    background: #e8fff3;
    color: #087541;
    border-color: #b7f1d2;
  }

  .stroke-dot.current {
    background: #1677ff;
  }

  .draw-stat {
    background: rgba(255, 255, 255, 0.76);
  }

  .quiz-question {
    margin: 10px 0 14px;
    padding: 24px 16px;
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);
  }

  .quiz-option {
    padding: 15px 16px;
    background: #fff;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.06);
  }

  .quiz-feedback {
    border-radius: var(--radius);
    border-color: rgba(22, 119, 255, 0.16);
    background: #f0f7ff;
    color: #17344d;
  }

  .flashcard {
    min-height: 310px;
    background:
      radial-gradient(circle at 50% 24%, rgba(7, 193, 96, 0.13), transparent 35%),
      #fff;
  }

  .flashcard-hint {
    color: #84929a;
  }

  .char-item {
    border: none;
    border-radius: 6px;
    background: #edf3ef;
  }

  .char-item.mastered {
    background: #07c160;
    color: #fff;
  }

  .char-item.learning {
    background: #1677ff;
    color: #fff;
  }

  .streak-badge {
    background: #fff7e6;
    color: #9a6400;
    border: 1px solid #ffe2a8;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;
  }

  .floating-indicator {
    background: rgba(255, 255, 255, 0.96);
    border-color: rgba(7, 193, 96, 0.2);
  }

  .app-mascot {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: center;
    padding: 14px;
    margin-bottom: 14px;
    border-radius: var(--radius);
    background:
      linear-gradient(135deg, rgba(7, 193, 96, 0.12), rgba(22, 119, 255, 0.1)),
      rgba(255, 255, 255, 0.82);
    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.08);
    animation: slideUp 0.35s ease-out;
  }

  .app-mascot-face {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 18px;
    background: linear-gradient(135deg, #07c160, #1677ff);
    color: #fff;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 34px;
    font-weight: 900;
    box-shadow: 0 10px 18px rgba(7, 193, 96, 0.24);
    animation: mascotPulse 3.4s ease-in-out infinite;
  }

  .app-mascot-title {
    margin: 0 0 2px;
    font-size: 15px;
    font-weight: 900;
    color: #1d2c35;
  }

  .app-mascot-subtitle {
    margin: 0;
    font-size: 12px;
    color: #5f6e77;
  }

  @keyframes characterDrift {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(18px) rotate(3deg); }
  }

  @keyframes iconBreathe {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-3px) scale(1.04); }
  }

  @keyframes mascotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }

  /* ===== UTILITY ANIMATIONS ===== */
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-slide-up {
    animation: slideUp 0.35s ease-out;
  }

  /* ===== FULL PRODUCT REDESIGN ===== */
  .app-container {
    position: relative;
    min-height: 100vh;
    overflow-anchor: none;
  }

  .screen {
    padding-top: 22px;
    padding-bottom: calc(118px + env(safe-area-inset-bottom, 20px));
    overflow-anchor: none;
  }

  .app-container::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(7, 193, 96, 0.12), transparent 220px),
      repeating-linear-gradient(135deg, rgba(7, 193, 96, 0.025) 0 1px, transparent 1px 18px);
    pointer-events: none;
  }

  .super-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  .brand-lockup {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .brand-mark {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: transparent;
  }

  .hanzi-logo-svg {
    width: 58px;
    height: 58px;
    filter: drop-shadow(0 12px 22px rgba(7, 193, 96, 0.22));
  }

  .header-logo-mark {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
  }

  .header-logo-mark .hanzi-logo-svg {
    width: 42px;
    height: 42px;
    filter: drop-shadow(0 8px 14px rgba(7, 193, 96, 0.18));
  }

  .brand-title {
    margin: 0;
    font-size: 20px;
    line-height: 1;
    font-weight: 900;
    color: #14251c;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .brand-subtitle {
    margin: 4px 0 0;
    color: #6c7a73;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .daily-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    min-height: 34px;
    padding: 0 11px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid rgba(217, 154, 24, 0.22);
    color: #9a6400;
    font-weight: 900;
    box-shadow: 0 8px 20px rgba(154, 100, 0, 0.08);
  }

  .topbar-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .language-toggle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    min-height: 34px;
    padding: 3px;
    border: 1px solid rgba(7, 193, 96, 0.14);
    border-radius: 8px;
    background: rgba(255,255,255,0.82);
    box-shadow: 0 8px 20px rgba(20, 49, 35, 0.07);
  }

  .language-toggle button {
    min-width: 38px;
    padding: 0 8px;
    border-radius: 6px;
    color: #687870;
    font-size: 11px;
    font-weight: 900;
  }

  .language-toggle button.active {
    background: #07c160;
    color: #fff;
  }

  .sound-toggle {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border: 1px solid rgba(24, 33, 43, 0.06);
    border-radius: 8px;
    background: rgba(255,255,255,0.82);
    color: #687870;
    box-shadow: 0 8px 20px rgba(20, 49, 35, 0.07);
    transition: transform var(--transition-fast), color var(--transition-fast), background var(--transition-fast);
  }

  .sound-toggle svg {
    width: 18px;
    height: 18px;
  }

  .sound-toggle.active {
    background: #07c160;
    color: #fff;
  }

  .ambience-toggle {
    color: #9a6400;
  }

  .ambience-toggle.active {
    background: #d99a18;
    color: #fff;
    box-shadow: 0 10px 24px rgba(217, 154, 24, 0.2);
  }

  .sound-toggle:active {
    transform: scale(0.96);
  }

  @media (max-width: 380px) {
    .super-topbar {
      gap: 8px;
    }

    .topbar-actions {
      gap: 6px;
    }

    .language-toggle button {
      min-width: 32px;
      padding: 0 6px;
    }

    .sound-toggle {
      width: 32px;
      height: 32px;
    }

    .daily-chip {
      padding: 0 8px;
    }
  }

  .wallet-card {
    position: relative;
    min-height: 188px;
    padding: 20px;
    border-radius: 8px;
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba(7, 193, 96, 0.96), rgba(22, 119, 255, 0.88)),
      #07c160;
    color: #fff;
    box-shadow: 0 18px 40px rgba(7, 193, 96, 0.24);
    animation: walletEnter 0.48s ease-out;
  }

  .wallet-card::before {
    content: "学";
    position: absolute;
    right: -10px;
    top: -28px;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 180px;
    font-weight: 900;
    color: rgba(255,255,255,0.11);
    line-height: 1;
  }

  .wallet-card::after {
    content: "";
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 18px;
    height: 1px;
    background: rgba(255,255,255,0.28);
  }

  .wallet-label {
    margin: 0;
    color: rgba(255,255,255,0.78);
    font-size: 12px;
    font-weight: 800;
  }

  .wallet-score {
    margin: 8px 0 16px;
    font-size: 56px;
    line-height: 0.9;
    font-weight: 900;
    letter-spacing: -1px;
  }

  .wallet-card .progress-bar {
    background: rgba(255,255,255,0.25);
  }

  .wallet-card .progress-fill {
    background: #fff;
  }

  .wallet-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 12px;
    color: rgba(255,255,255,0.86);
    font-size: 12px;
  }

  .wallet-seal {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(255,255,255,0.36);
    border-radius: 8px;
    color: #fff;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 24px;
    font-weight: 900;
  }

  .daily-entry-card {
    position: relative;
    display: grid;
    gap: 12px;
    margin: 14px 0 16px;
    padding: 14px;
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.96), rgba(232, 255, 243, 0.92));
    border: 1px solid rgba(7, 193, 96, 0.12);
    box-shadow: 0 14px 34px rgba(20, 49, 35, 0.09);
    cursor: pointer;
    overflow: hidden;
  }

  .daily-entry-card::after {
    content: "练";
    position: absolute;
    right: -4px;
    bottom: -24px;
    color: rgba(7, 193, 96, 0.07);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 104px;
    font-weight: 900;
    line-height: 1;
  }

  .daily-entry-main {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    align-items: center;
  }

  .daily-entry-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #fff;
    background: linear-gradient(135deg, #07c160, #1677ff);
    box-shadow: 0 10px 20px rgba(7, 193, 96, 0.18);
  }

  .daily-entry-kicker {
    margin: 0 0 2px;
    color: #07a653;
    font-size: 12px;
    font-weight: 900;
  }

  .daily-entry-title {
    margin: 0;
    color: #14251c;
    font-size: 16px;
    font-weight: 900;
    line-height: 1.2;
  }

  .daily-entry-strip {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 6px;
    overflow: hidden;
  }

  .daily-entry-char {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 8px;
    background: #fff;
    color: #07a653;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 22px;
    font-weight: 900;
    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.08);
  }

  .daily-entry-meta {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 8px;
    color: #687870;
    font-size: 11px;
    font-weight: 800;
  }

  .quick-lane {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    margin: 14px 0 20px;
  }

  .quick-action {
    min-width: 0;
    min-height: 82px;
    padding: 0 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 0;
    border-radius: 8px;
    background: rgba(255,255,255,0.92);
    color: #1c2b34;
    box-shadow: 0 10px 26px rgba(20, 49, 35, 0.08);
    font-weight: 900;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .quick-action:active {
    transform: translateY(2px) scale(0.98);
  }

  .quick-action-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #e8fff3;
    color: #07a653;
  }

  .quick-action-icon svg,
  .bottom-nav-icon svg {
    width: 22px;
    height: 22px;
  }

  .quick-action:nth-child(2) .quick-action-icon {
    background: #eef5ff;
  }

  .quick-action:nth-child(3) .quick-action-icon {
    background: #fff4e0;
  }

  .quick-action:nth-child(4) .quick-action-icon {
    background: #fff0f0;
  }

  .quick-action-label {
    font-size: 11px;
  }

  .insight-panel {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    align-items: center;
    padding: 16px;
    margin-bottom: 18px;
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.96), rgba(240, 255, 248, 0.96));
    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);
  }

  .insight-title {
    margin: 0 0 4px;
    font-weight: 900;
    color: #152820;
  }

  .insight-copy {
    margin: 0;
    color: #66756e;
    font-size: 12px;
  }

  .insight-character {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #121f18;
    color: #07c160;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 32px;
    font-weight: 900;
    animation: characterBlink 4.2s ease-in-out infinite;
  }

  .app-bottom-nav {
    position: fixed;
    left: 50%;
    bottom: calc(12px + env(safe-area-inset-bottom, 0px));
    z-index: 200;
    width: min(440px, calc(100vw - 24px));
    max-width: calc(100vw - 24px);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    padding: 8px;
    border-radius: 8px;
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(24, 33, 43, 0.08);
    box-shadow: 0 18px 50px rgba(20, 49, 35, 0.18);
    transform: translateX(-50%);
    backdrop-filter: blur(16px);
  }

  .bottom-nav-item {
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 7px 2px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #728078;
    font-size: 10px;
    font-weight: 900;
  }

  .bottom-nav-item.active {
    background: #e8fff3;
    color: #07a653;
  }

  .bottom-nav-icon {
    font-size: 18px;
    line-height: 1;
  }

  .menu-grid {
    display: none;
  }

  .stats-bar {
    margin-top: 12px;
  }

  .card {
    border: none;
  }

  .section-title {
    margin-top: 22px;
  }

  .header {
    min-height: 54px;
    padding: 0;
    margin-bottom: 14px;
  }

  .header .logo {
    font-size: 24px;
  }

  .header .logo::after {
    content: "学";
    width: 22px;
    height: 22px;
    padding: 0;
    display: grid;
    place-items: center;
    border-radius: 8px;
    font-size: 12px;
  }

  .screen > .title-xl {
    margin-top: 4px;
  }

  .lesson-card {
    min-height: 82px;
  }

  .lesson-number {
    width: 54px;
    height: 54px;
    min-width: 54px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #e8fff3;
    font-size: 24px;
  }

  .lesson-info .title-md {
    font-size: 15px;
  }

  .lesson-title-line {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
  }

  .lesson-title-line .title-md {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .lesson-chinese-chip {
    flex: 0 0 auto;
    max-width: 74px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 3px 7px;
    border-radius: 8px;
    background: #e8fff3;
    color: #07a653;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 12px;
    font-weight: 900;
  }

  .flashcard.card {
    border: 0;
  }

  .flashcard::before {
    opacity: 1;
    height: 0;
  }

  .flashcard .hanzi-display {
    color: #07c160 !important;
  }

  .card[style*="text-align: center"] {
    background: rgba(255,255,255,0.9);
  }

  .hanzi-writer-container {
    border: 1px solid rgba(24, 33, 43, 0.08);
  }

  .canvas-controls,
  .nav-actions,
  .backup-buttons {
    gap: 10px;
  }

  .results-display {
    border-radius: 8px;
    background: rgba(255,255,255,0.78);
    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);
  }

  .score-circle {
    border-color: #07c160;
    box-shadow: 0 0 0 8px rgba(7,193,96,0.08);
  }

  .char-grid {
    gap: 8px;
  }

  .floating-indicator {
    bottom: calc(98px + env(safe-area-inset-bottom, 0px));
  }

  .lessons-quick-actions {
    display: none !important;
  }

  @keyframes walletEnter {
    from { opacity: 0; transform: translateY(18px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes characterBlink {
    0%, 100% { transform: translateY(0); box-shadow: 0 0 0 rgba(7,193,96,0); }
    50% { transform: translateY(-4px); box-shadow: 0 10px 22px rgba(7,193,96,0.18); }
  }

  /* ===== DEEP SUPER-APP POLISH ===== */
  .wallet-card {
    min-height: 206px;
    background:
      radial-gradient(circle at 78% 30%, rgba(255, 255, 255, 0.22), transparent 28%),
      linear-gradient(135deg, #06b85b 0%, #12c8a1 48%, #1777ff 100%);
  }

  .wallet-card .progress-bar {
    height: 7px;
    margin-top: 22px;
  }

  .wallet-meta {
    position: relative;
    z-index: 1;
  }

  .wallet-seal {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(10px);
  }

  .wallet-brand-mark {
    position: absolute;
    z-index: 1;
    right: 14px;
    top: 14px;
    width: 70px;
    height: 70px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(10px);
  }

  .wallet-brand-mark .hanzi-logo-svg {
    width: 58px;
    height: 58px;
    filter: drop-shadow(0 8px 12px rgba(15, 40, 30, 0.18));
  }

  @media (max-width: 380px) {
    .wallet-brand-mark {
      width: 58px;
      height: 58px;
      right: 12px;
      top: 12px;
    }

    .wallet-brand-mark .hanzi-logo-svg {
      width: 50px;
      height: 50px;
    }
  }

  .quick-lane {
    padding: 8px;
    border-radius: 8px;
    background: rgba(255,255,255,0.64);
    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04);
  }

  .quick-action {
    min-height: 88px;
    box-shadow: none;
  }

  .quick-action-icon {
    position: relative;
  }

  .quick-action-icon::after {
    content: "";
    position: absolute;
    right: -2px;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffcf33;
    box-shadow: 0 0 0 2px #fff;
  }

  .home-metrics .stat-item {
    background: linear-gradient(180deg, #fff, #f8fffb);
  }

  .account-entry {
    display: block;
    background:
      linear-gradient(90deg, rgba(255,255,255,0.96), rgba(241, 250, 246, 0.96));
  }

  .service-section {
    padding: 10px;
    border-radius: 8px;
    background: rgba(255,255,255,0.58);
    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04);
  }

  .service-section-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 4px 12px;
    color: #708078;
    font-size: 12px;
    font-weight: 900;
  }

  .service-list {
    display: grid;
    gap: 10px;
  }

  .service-row {
    margin-bottom: 0;
    box-shadow: none;
    background: #fff;
  }

  .service-row::after {
    content: "›";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #a6b4ad;
    font-size: 28px;
    line-height: 1;
  }

  .service-row .lesson-info {
    padding-right: 20px;
  }

  .study-pass-card {
    min-height: 336px;
    background:
      radial-gradient(circle at 50% 18%, rgba(7, 193, 96, 0.18), transparent 38%),
      linear-gradient(180deg, #fff, #fafffc);
  }

  .study-pass-card::after {
    content: "记";
    position: absolute;
    right: 18px;
    bottom: 14px;
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 64px;
    color: rgba(7, 193, 96, 0.06);
    font-weight: 900;
  }

  .related-service-card {
    background: #fff;
  }

  .mini-app-segment {
    background: rgba(255,255,255,0.78);
    border: 1px solid rgba(24, 33, 43, 0.06);
  }

  .draw-prompt-card {
    display: block;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241, 250, 246, 0.98));
  }

  .draw-prompt-card::after {
    content: "写";
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;
    font-size: 54px;
    font-weight: 900;
    color: rgba(7, 193, 96, 0.08);
  }

  .writer-mini-program {
    background:
      linear-gradient(45deg, transparent calc(50% - 1px), rgba(7,193,96,0.12) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)),
      linear-gradient(-45deg, transparent calc(50% - 1px), rgba(22,119,255,0.1) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)),
      repeating-linear-gradient(0deg, transparent 0 39px, rgba(7,193,96,0.1) 39px 40px),
      repeating-linear-gradient(90deg, transparent 0 39px, rgba(7,193,96,0.1) 39px 40px),
      linear-gradient(180deg, #ffffff, #f8fdfb);
    box-shadow:
      inset 0 0 0 1px rgba(7, 193, 96, 0.08),
      0 10px 28px rgba(20, 49, 35, 0.08);
  }

  .quiz-pass-card {
    background:
      radial-gradient(circle at 50% 20%, rgba(7, 193, 96, 0.1), transparent 36%),
      #fff;
  }

  .quiz-mode-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
    align-items: center;
    padding: 16px;
    margin-bottom: 12px;
    background: #fff;
  }

  .quiz-mode-icon {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #e8fff3;
    color: #07a653;
  }

  .quiz-mode-icon svg {
    width: 24px;
    height: 24px;
  }

  .quiz-mode-card:nth-of-type(2) .quiz-mode-icon {
    background: #eef5ff;
    color: #1677ff;
  }

  .quiz-mode-card:nth-of-type(3) .quiz-mode-icon {
    background: #fff4e0;
    color: #c77600;
  }

  .quiz-option {
    border-radius: 8px;
    position: relative;
  }

  .quiz-option::after {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 3px;
    border-radius: 999px;
    background: rgba(7, 193, 96, 0.28);
  }

  .stats-wallet {
    padding: 8px;
    border-radius: 8px;
    background: rgba(255,255,255,0.6);
  }

  .stats-wallet .stat-item {
    background: #fff;
    box-shadow: none;
  }

  .char-grid {
    padding: 10px;
    border-radius: 8px;
    background: rgba(255,255,255,0.62);
  }

  .char-item {
    box-shadow: inset 0 0 0 1px rgba(24,33,43,0.04);
  }

  .app-bottom-nav {
    background:
      linear-gradient(180deg, rgba(255,255,255,0.96), rgba(249,252,250,0.96));
  }

  .bottom-nav-item.active .bottom-nav-icon {
    animation: tabPop 0.28s ease-out;
  }

  /* ===== SUPER-APP ROUND TWO ===== */
  .super-searchbar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 10px;
    min-height: 42px;
    padding: 0 12px;
    margin: 0 0 12px;
    border-radius: 8px;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(24, 33, 43, 0.06);
    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);
    color: #718078;
    font-size: 12px;
    font-weight: 900;
  }

  .super-searchbar svg {
    width: 18px;
    height: 18px;
    color: #07a653;
  }

  .super-searchbar strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #1d2c35;
    font-size: 13px;
  }

  .super-search-action {
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: 8px;
    background: #e8fff3;
    color: #07a653;
  }

  .mini-program-panel {
    padding: 12px;
    margin: 0 0 16px;
    border-radius: 8px;
    background: rgba(255,255,255,0.72);
    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04), 0 12px 28px rgba(20, 49, 35, 0.06);
  }

  .mini-program-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #687870;
    font-size: 12px;
    font-weight: 900;
  }

  .mini-program-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px 8px;
  }

  .mini-program-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    min-width: 0;
    padding: 6px 2px;
    border: 0;
    background: transparent;
    color: #213129;
    font: inherit;
    font-size: 11px;
    font-weight: 900;
  }

  .mini-program-tile:active {
    transform: scale(0.96);
  }

  .mini-program-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #fff;
    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.1);
    position: relative;
    overflow: hidden;
  }

  .mini-program-icon::before {
    content: "";
    position: absolute;
    inset: 4px auto auto 5px;
    width: 12px;
    height: 5px;
    border-radius: 999px;
    background: rgba(255,255,255,0.36);
  }

  .mini-program-icon svg {
    width: 22px;
    height: 22px;
    position: relative;
    z-index: 1;
  }

  .mini-program-name {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mini-program-tile:nth-child(1) .mini-program-icon { background: linear-gradient(135deg, #07c160, #18d58b); }
  .mini-program-tile:nth-child(2) .mini-program-icon { background: linear-gradient(135deg, #1677ff, #28b8ff); }
  .mini-program-tile:nth-child(3) .mini-program-icon { background: linear-gradient(135deg, #ff9f1c, #ffd166); }
  .mini-program-tile:nth-child(4) .mini-program-icon { background: linear-gradient(135deg, #ff4d4f, #ff8a80); }
  .mini-program-tile:nth-child(5) .mini-program-icon { background: linear-gradient(135deg, #2f3542, #57606f); }
  .mini-program-tile:nth-child(6) .mini-program-icon { background: linear-gradient(135deg, #00a6a6, #00d2d3); }
  .mini-program-tile:nth-child(7) .mini-program-icon { background: linear-gradient(135deg, #8e44ad, #c56cf0); }
  .mini-program-tile:nth-child(8) .mini-program-icon { background: linear-gradient(135deg, #d99a18, #f6c343); }

  .illustration-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin: 14px 0 16px;
  }

  .story-sticker {
    min-width: 0;
    min-height: 132px;
    padding: 10px 6px 9px;
    border: 0;
    border-radius: 8px;
    background: rgba(255,255,255,0.86);
    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);
    color: #1d2c35;
    overflow: hidden;
    position: relative;
  }

  .story-sticker::after {
    content: "";
    position: absolute;
    inset: auto 0 0 auto;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(7, 193, 96, 0.08);
  }

  .story-sticker:active {
    transform: scale(0.97);
  }

  .story-sticker-svg {
    display: block;
    width: 74px;
    max-width: 100%;
    height: 60px;
    margin: 0 auto 5px;
    filter: drop-shadow(0 8px 12px rgba(20, 49, 35, 0.11));
    animation: stickerBob 4.4s ease-in-out infinite;
  }

  .story-sticker:nth-child(2) .story-sticker-svg {
    animation-delay: -1.2s;
  }

  .story-sticker:nth-child(3) .story-sticker-svg {
    animation-delay: -2.1s;
  }

  .story-sticker-title {
    display: block;
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 900;
  }

  .cute-coach-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: center;
    padding: 14px;
    margin-bottom: 16px;
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(235, 255, 246, 0.96));
    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);
  }

  .coach-mini-svg,
  .panda-buddy-svg {
    width: 66px;
    height: 66px;
    filter: drop-shadow(0 10px 18px rgba(7, 193, 96, 0.18));
  }

  .coach-title {
    margin: 0 0 4px;
    color: #14251c;
    font-size: 15px;
    font-weight: 900;
  }

  .coach-copy {
    margin: 0;
    color: #66756e;
    font-size: 12px;
    line-height: 1.45;
  }

  .lesson-service-icon {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 8px;
    background: #f0fff6;
    color: #07a653;
  }

  .lesson-service-icon svg {
    width: 22px;
    height: 22px;
  }

  .service-row:nth-child(2n) .lesson-service-icon {
    background: #eff6ff;
    color: #1677ff;
  }

  .service-row:nth-child(3n) .lesson-service-icon {
    background: #fff6e6;
    color: #c77600;
  }

  @keyframes coachFloat {
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50% { transform: translateY(-5px) rotate(1deg); }
  }

  @keyframes stickerBob {
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50% { transform: translateY(-4px) rotate(1deg); }
  }

  @keyframes tabPop {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-3px) scale(1.08); }
    100% { transform: translateY(0) scale(1); }
  }

  /* ===== MINI-PROGRAM SYSTEM ===== */
  .mini-app-hero {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
    padding: 14px;
    margin: 0 0 14px;
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239, 255, 247, 0.96));
    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);
    border: 1px solid rgba(24, 33, 43, 0.05);
  }

  .mini-app-hero-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #fff;
    background: linear-gradient(135deg, #07c160, #1677ff);
    box-shadow: 0 10px 20px rgba(7, 193, 96, 0.2);
  }

  .mini-app-hero-icon svg {
    width: 24px;
    height: 24px;
  }

  .mini-app-title {
    margin: 0;
    color: #14251c;
    font-size: 19px;
    line-height: 1.08;
    font-weight: 900;
  }

  .mini-app-subtitle {
    margin: 4px 0 0;
    color: #687870;
    font-size: 12px;
    line-height: 1.35;
    font-weight: 700;
  }

  .mini-app-pill {
    display: grid;
    place-items: center;
    min-width: 42px;
    min-height: 30px;
    padding: 0 9px;
    border-radius: 8px;
    background: #e8fff3;
    color: #07a653;
    font-size: 12px;
    font-weight: 900;
    white-space: nowrap;
  }

  .mini-app-progress-card {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    margin: 0 0 12px;
    padding: 12px 14px;
    border-radius: 8px;
    background: rgba(255,255,255,0.78);
    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.05);
  }

  .mini-app-progress-card .text-sm {
    margin: 0;
  }

  .mini-app-progress-count {
    color: #07c160;
    font-weight: 900;
    font-size: 13px;
  }

  .daily-training-card {
    padding: 14px;
    margin-bottom: 14px;
    border-radius: 8px;
    background:
      radial-gradient(circle at 88% 12%, rgba(22, 119, 255, 0.12), transparent 30%),
      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239, 255, 247, 0.96));
    border: 1px solid rgba(24, 33, 43, 0.05);
    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);
  }

  .daily-training-hero {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: center;
    margin-bottom: 12px;
  }

  .daily-training-title {
    margin: 0 0 4px;
    color: #14251c;
    font-size: 16px;
    font-weight: 900;
  }

  .daily-training-copy {
    margin: 0;
    color: #687870;
    font-size: 12px;
    line-height: 1.45;
    font-weight: 700;
  }

  .daily-queue-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .daily-queue-char {
    min-height: 72px;
    display: grid;
    place-items: center;
    gap: 2px;
    padding: 8px 4px;
    border-radius: 8px;
    background: rgba(255,255,255,0.9);
    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.08);
  }

  .daily-queue-char .hanzi-display {
    color: #07a653;
    font-size: 30px;
    line-height: 1;
  }

  .daily-queue-char small {
    color: #687870;
    font-size: 10px;
    font-weight: 900;
  }

  .daily-reason-row {
    display: flex;
    gap: 8px;
    margin-top: 12px;
    color: #687870;
    font-size: 11px;
    font-weight: 800;
  }

  .daily-step-grid {
    display: grid;
    gap: 10px;
    margin-bottom: 14px;
  }

  .daily-step-card {
    position: relative;
    min-height: 92px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "icon title"
      "icon copy";
    gap: 3px 12px;
    align-items: center;
    padding: 14px;
    border: 0;
    border-radius: 8px;
    background: rgba(255,255,255,0.9);
    color: #1d2c35;
    text-align: left;
    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);
    overflow: hidden;
  }

  .daily-step-card.primary {
    background:
      linear-gradient(135deg, rgba(7, 193, 96, 0.96), rgba(22, 119, 255, 0.88));
    color: #fff;
    box-shadow: 0 16px 32px rgba(7, 193, 96, 0.18);
  }

  .daily-step-card:active {
    transform: scale(0.985);
  }

  .daily-step-index {
    position: absolute;
    right: 12px;
    top: 8px;
    color: rgba(7, 193, 96, 0.14);
    font-size: 48px;
    font-weight: 900;
    line-height: 1;
  }

  .daily-step-card.primary .daily-step-index {
    color: rgba(255,255,255,0.18);
  }

  .daily-step-icon {
    grid-area: icon;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #e8fff3;
    color: #07a653;
  }

  .daily-step-card.primary .daily-step-icon {
    background: rgba(255,255,255,0.18);
    color: #fff;
  }

  .daily-step-card strong {
    grid-area: title;
    position: relative;
    z-index: 1;
    font-size: 17px;
    line-height: 1.1;
  }

  .daily-step-card span:last-child {
    grid-area: copy;
    position: relative;
    z-index: 1;
    color: #687870;
    font-size: 12px;
    line-height: 1.35;
    font-weight: 700;
  }

  .daily-step-card.primary span:last-child {
    color: rgba(255,255,255,0.84);
  }

  .dual-label {
    display: block;
    line-height: 1.15;
  }

  .dual-label strong {
    display: block;
    font-size: 12px;
    font-weight: 900;
  }

  .dual-label span {
    display: block;
    margin-top: 1px;
    font-size: 10px;
    color: #728078;
    font-weight: 800;
  }

  .section-title-cn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 20px 0 10px;
    color: #687870;
    font-size: 12px;
    font-weight: 900;
  }

  .section-title-cn span:first-child {
    color: #14251c;
  }

  @media (min-width: 980px) {
    .home-screen {
      width: min(calc(100vw - 72px), 920px);
      max-width: 920px;
      display: grid;
      grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
      gap: 18px;
      align-items: start;
      padding-bottom: 124px;
    }

    .home-screen .super-topbar,
    .home-screen .super-searchbar,
    .home-screen .illustration-strip,
    .home-screen .quick-lane,
    .home-screen .mini-program-panel,
    .home-screen .home-metrics,
    .home-screen .section-title,
    .home-screen .account-entry {
      grid-column: 1 / -1;
    }

    .home-screen .super-topbar,
    .home-screen .super-searchbar,
    .home-screen .wallet-card,
    .home-screen .daily-entry-card,
    .home-screen .illustration-strip,
    .home-screen .quick-lane,
    .home-screen .mini-program-panel,
    .home-screen .cute-coach-card,
    .home-screen .insight-panel,
    .home-screen .home-metrics,
    .home-screen .account-entry {
      margin-bottom: 0;
    }

    .home-screen .wallet-card {
      min-height: 248px;
    }

    .home-screen .daily-entry-card {
      align-self: stretch;
      min-height: 248px;
    }

    .home-screen .illustration-strip {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .home-screen .quick-lane {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .home-screen .mini-program-grid {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    .home-screen .cute-coach-card,
    .home-screen .insight-panel {
      min-height: 132px;
    }
  }

  @media (max-width: 380px) {
    .mini-app-hero {
      grid-template-columns: auto 1fr;
    }

    .mini-app-pill {
      grid-column: 1 / -1;
      justify-self: start;
    }
  }
`;

// ============================================
// MAIN APP
// ============================================
function HanziMasterApp() {
  const [currentView, setCurrentView] = React.useState('home');
  const [progress, setProgress] = React.useState(loadProgress);
  const [selectedLesson, setSelectedLesson] = React.useState(null);
  const [selectedQueue, setSelectedQueue] = React.useState(null);
  const [language, setLanguage] = React.useState(loadLanguage);
  const [soundEnabled, setSoundEnabled] = React.useState(loadSoundEnabled);
  const [ambienceEnabled, setAmbienceEnabled] = React.useState(loadAmbienceEnabled);

  React.useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  React.useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0 });
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
    window.addEventListener('pointerdown', unlockAmbience, { once: true });
    window.addEventListener('keydown', unlockAmbience, { once: true });
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
        streakDays: wasYesterday ? prev.streakDays + 1 : (prev.lastStudyDate ? 1 : 1),
      }));
    }
  }, []);

  const updateProgress = React.useCallback((updates) => {
    setProgress(prev => ({ ...prev, ...updates }));
  }, []);

  const markCharacterLearned = React.useCallback((hanzi) => {
    setProgress(prev => {
      if (prev.learningChars.includes(hanzi)) return { ...prev, totalReviews: prev.totalReviews + 1 };
      return { ...prev, learningChars: [...prev.learningChars, hanzi], totalReviews: prev.totalReviews + 1 };
    });
  }, []);

  const markCharacterMastered = React.useCallback((hanzi) => {
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
  const playSound = React.useCallback((name) => playSoundEffect(name, soundEnabled), [soundEnabled]);
  const setCurrentViewWithSound = React.useCallback((view) => {
    if (typeof view !== 'function') {
      if (view !== currentView) playSoundEffect('tap', soundEnabled);
      setCurrentView(view);
      return;
    }
    setCurrentView(prev => view(prev));
  }, [currentView, soundEnabled]);
  const viewProps = { progress, setCurrentView: setCurrentViewWithSound, selectedLesson, setSelectedLesson, selectedQueue, setSelectedQueue, updateProgress, markCharacterLearned, markCharacterMastered, language, setLanguage, soundEnabled, setSoundEnabled, ambienceEnabled, setAmbienceEnabled, playSound, t };

  return (
    <div className="app-container">
      <style>{styles}</style>
      {currentView === 'home' && <HomeView key="home" {...viewProps} />}
      {currentView === 'daily' && <DailyTrainingView key="daily" {...viewProps} />}
      {currentView === 'lessons' && <LessonsView key="lessons" {...viewProps} />}
      {currentView === 'learn' && <LearnView key="learn" {...viewProps} />}
      {currentView === 'draw' && <DrawView key="draw" {...viewProps} />}
      {currentView === 'quiz' && <QuizView key="quiz" {...viewProps} />}
      {currentView === 'stats' && <StatsView key="stats" {...viewProps} />}
      <BottomNav currentView={currentView} setCurrentView={setCurrentViewWithSound} setSelectedLesson={setSelectedLesson} setSelectedQueue={setSelectedQueue} t={t} />
    </div>
  );
}

function BottomNav({ currentView, setCurrentView, setSelectedLesson, setSelectedQueue, t }) {
  if (['learn', 'draw', 'quiz', 'daily'].includes(currentView)) return null;

  const items = [
    { view: 'home', icon: 'home', label: t('nav.home') },
    { view: 'learn', icon: 'card', label: t('nav.cards'), resetLesson: true },
    { view: 'draw', icon: 'brush', label: t('nav.write'), resetLesson: true },
    { view: 'quiz', icon: 'target', label: t('nav.quiz'), resetLesson: true },
    { view: 'stats', icon: 'chart', label: t('nav.wallet') },
  ];

  return (
    <nav className="app-bottom-nav" aria-label="Primary">
      {items.map(item => (
        <button
          key={item.view}
          className={`bottom-nav-item ${currentView === item.view ? 'active' : ''}`}
          onClick={() => {
            if (item.resetLesson) setSelectedLesson(null);
            setSelectedQueue(null);
            setCurrentView(item.view);
          }}
        >
          <span className="bottom-nav-icon"><AppIcon name={item.icon} /></span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function LanguageToggle({ language, setLanguage, playSound, t }) {
  return (
    <div className="language-toggle" aria-label="UI language">
      <button
        className={language === 'zh' ? 'active' : ''}
        onClick={() => {
          playSound?.('tap');
          setLanguage('zh');
        }}
        aria-pressed={language === 'zh'}
      >
        {t('lang.zh')}
      </button>
      <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => {
          playSound?.('tap');
          setLanguage('en');
        }}
        aria-pressed={language === 'en'}
      >
        {t('lang.en')}
      </button>
    </div>
  );
}

function SoundToggle({ soundEnabled, setSoundEnabled, t }) {
  const label = soundEnabled ? t('sound.on') : t('sound.off');
  return (
    <button
      className={`sound-toggle ${soundEnabled ? 'active' : ''}`}
      onClick={() => {
        playSoundEffect(soundEnabled ? 'tap' : 'correct', true);
        setSoundEnabled(!soundEnabled);
      }}
      aria-label={label}
      aria-pressed={soundEnabled}
      title={t('sound.label')}
    >
      <AppIcon name={soundEnabled ? 'sound' : 'mute'} />
    </button>
  );
}

function AmbienceToggle({ ambienceEnabled, setAmbienceEnabled, t }) {
  const label = ambienceEnabled ? t('ambience.on') : t('ambience.off');
  return (
    <button
      className={`sound-toggle ambience-toggle ${ambienceEnabled ? 'active' : ''}`}
      onClick={() => {
        const next = !ambienceEnabled;
        if (next) {
          playSoundEffect('reveal', true);
          startAmbienceLoop();
        } else {
          playSoundEffect('tap', true);
          stopAmbienceLoop();
        }
        setAmbienceEnabled(next);
      }}
      aria-label={label}
      aria-pressed={ambienceEnabled}
      title={t('ambience.label')}
    >
      <AppIcon name="tea" />
    </button>
  );
}

function AppIcon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };
  const stroke = { stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'home') return (
    <svg {...common}><path {...stroke} d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z"/><path {...stroke} d="M9 21h6"/></svg>
  );
  if (name === 'card') return (
    <svg {...common}><rect x="5" y="4" width="13" height="16" rx="3" fill="currentColor" opacity="0.14"/><path {...stroke} d="M8 8h8M8 12h5M8 16h7"/><path {...stroke} d="M17 4l2 2"/></svg>
  );
  if (name === 'brush') return (
    <svg {...common}><path {...stroke} d="M15.5 4.5 20 9l-8.5 8.5-4.5 1 1-4.5 7.5-9.5Z"/><path {...stroke} d="M13 7l4 4"/><path {...stroke} d="M5 20c2-1 3.5-.5 5-2"/></svg>
  );
  if (name === 'target') return (
    <svg {...common}><circle {...stroke} cx="12" cy="12" r="7"/><circle {...stroke} cx="12" cy="12" r="3"/><path {...stroke} d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>
  );
  if (name === 'chart') return (
    <svg {...common}><path {...stroke} d="M5 19V9M12 19V5M19 19v-7"/><path {...stroke} d="M4 19h16"/></svg>
  );
  if (name === 'scan') return (
    <svg {...common}><path {...stroke} d="M5 9V6a1 1 0 0 1 1-1h3M15 5h3a1 1 0 0 1 1 1v3M19 15v3a1 1 0 0 1-1 1h-3M9 19H6a1 1 0 0 1-1-1v-3"/><path {...stroke} d="M8 12h8"/></svg>
  );
  if (name === 'book') return (
    <svg {...common}><path {...stroke} d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21V5.5Z"/><path {...stroke} d="M5 5.5A2.5 2.5 0 0 0 7.5 8H19"/><path {...stroke} d="M9 12h6"/></svg>
  );
  if (name === 'sound') return (
    <svg {...common}><path {...stroke} d="M4 10v4h4l5 4V6l-5 4H4Z"/><path {...stroke} d="M16 9.5c1.1 1.3 1.1 3.7 0 5M18.5 7c2.2 2.7 2.2 7.3 0 10"/></svg>
  );
  if (name === 'mute') return (
    <svg {...common}><path {...stroke} d="M4 10v4h4l5 4V6l-5 4H4Z"/><path {...stroke} d="M19 9l-5 5M14 9l5 5"/></svg>
  );
  if (name === 'tea') return (
    <svg {...common}><path {...stroke} d="M6 10h11v3.5A4.5 4.5 0 0 1 12.5 18h-2A4.5 4.5 0 0 1 6 13.5V10Z"/><path {...stroke} d="M17 11h1.2a1.8 1.8 0 0 1 0 3.6H17"/><path {...stroke} d="M8 21h8"/><path {...stroke} d="M9 7c-.7-.9-.7-1.8 0-2.7M12 7c-.7-.9-.7-1.8 0-2.7M15 7c-.7-.9-.7-1.8 0-2.7"/></svg>
  );
  if (name === 'gift') return (
    <svg {...common}><path {...stroke} d="M4 10h16v10H4V10Z"/><path {...stroke} d="M12 10v10M4 14h16M7 7c0-1.7 1.4-3 3-2l2 5H8a3 3 0 0 1-1-3ZM17 7c0-1.7-1.4-3-3-2l-2 5h4a3 3 0 0 0 1-3Z"/></svg>
  );
  if (name === 'wallet') return (
    <svg {...common}><path {...stroke} d="M5 7.5h13a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h11"/><path {...stroke} d="M17 13h3"/><path {...stroke} d="M6 5.5 16 3v4.5"/></svg>
  );
  return <svg {...common}><circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.14"/><path {...stroke} d="M8 12h8M12 8v8"/></svg>;
}

function HanziLogoSvg() {
  return (
    <svg className="hanzi-logo-svg" width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="8" width="76" height="76" rx="22" fill="url(#hanziLogoGradient)" />
      <rect x="18" y="18" width="56" height="56" rx="16" fill="white" opacity="0.12" />
      <text x="46" y="61" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="47" fontWeight="900" fill="white">字</text>
      <defs>
        <linearGradient id="hanziLogoGradient" x1="8" y1="8" x2="84" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160" />
          <stop offset="1" stopColor="#1677FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeaderLogoMark() {
  return (
    <div className="header-logo-mark" aria-hidden="true">
      <HanziLogoSvg />
    </div>
  );
}

function CoachSvg() {
  return (
    <svg className="coach-mini-svg" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="16" y="12" width="58" height="64" rx="20" fill="#E8FFF3"/>
      <rect x="21" y="17" width="48" height="48" rx="16" fill="url(#coachGradient)"/>
      <text x="45" y="50" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="30" fontWeight="900" fill="white">学</text>
      <circle cx="34" cy="33" r="2.4" fill="#17382A"/>
      <circle cx="56" cy="33" r="2.4" fill="#17382A"/>
      <path d="M38 56c4 3 10 3 14 0" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M20 66c-5 1-8 4-9 9 7 2 12 0 15-5" fill="#FFE5A3"/>
      <path d="M70 23c6-3 9-1 10 5-5 4-10 4-14 0" fill="#FFE5A3"/>
      <defs>
        <linearGradient id="coachGradient" x1="21" y1="17" x2="69" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160"/>
          <stop offset="1" stopColor="#1677FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function PandaBuddySvg() {
  return (
    <svg className="panda-buddy-svg" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="13" width="70" height="64" rx="22" fill="#E8FFF3"/>
      <circle cx="28" cy="29" r="10" fill="#17382A"/>
      <circle cx="62" cy="29" r="10" fill="#17382A"/>
      <circle cx="45" cy="43" r="27" fill="white"/>
      <ellipse cx="34" cy="40" rx="8" ry="10" fill="#17382A" transform="rotate(-18 34 40)"/>
      <ellipse cx="56" cy="40" rx="8" ry="10" fill="#17382A" transform="rotate(18 56 40)"/>
      <circle cx="35" cy="39" r="2.2" fill="white"/>
      <circle cx="55" cy="39" r="2.2" fill="white"/>
      <path d="M45 45c3 0 5 2 5 4s-2 4-5 4-5-2-5-4 2-4 5-4Z" fill="#17382A"/>
      <path d="M39 58c4 3 8 3 12 0" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <rect x="31" y="62" width="28" height="13" rx="6" fill="url(#pandaBookGradient)"/>
      <path d="M38 66h14M38 70h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <text x="69" y="66" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="16" fontWeight="900" fill="#07C160">学</text>
      <defs>
        <linearGradient id="pandaBookGradient" x1="31" y1="62" x2="59" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160"/>
          <stop offset="1" stopColor="#1677FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function LanternStickerSvg() {
  return (
    <svg className="story-sticker-svg" width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M45 5v10" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <rect x="31" y="12" width="28" height="8" rx="4" fill="#FFCF33"/>
      <rect x="24" y="18" width="42" height="38" rx="17" fill="url(#lanternGradient)"/>
      <path d="M34 21c-4 9-4 22 0 32M56 21c4 9 4 22 0 32" stroke="#FFE5A3" strokeWidth="3" strokeLinecap="round"/>
      <text x="45" y="44" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="21" fontWeight="900" fill="white">课</text>
      <rect x="33" y="55" width="24" height="7" rx="3.5" fill="#FFCF33"/>
      <path d="M45 62v6" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <defs>
        <linearGradient id="lanternGradient" x1="24" y1="18" x2="66" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5A5F"/>
          <stop offset="1" stopColor="#FF9F1C"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function BrushStickerSvg() {
  return (
    <svg className="story-sticker-svg" width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="11" width="54" height="42" rx="14" fill="#E8FFF3"/>
      <path d="M30 51c9-1 17-4 24-12" stroke="#07C160" strokeWidth="6" strokeLinecap="round"/>
      <path d="M50 17l19 19-8 8-19-19 8-8Z" fill="url(#brushGradient)"/>
      <path d="M42 25l19 19-10 7-16 4 4-16 3-14Z" fill="#FFE5A3"/>
      <path d="M42 25l19 19" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="30" cy="22" r="4" fill="#1677FF"/>
      <defs>
        <linearGradient id="brushGradient" x1="42" y1="17" x2="69" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1677FF"/>
          <stop offset="1" stopColor="#07C160"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function SealStickerSvg() {
  return (
    <svg className="story-sticker-svg" width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="24" y="12" width="42" height="42" rx="12" fill="url(#sealGradient)"/>
      <rect x="31" y="19" width="28" height="28" rx="7" stroke="white" strokeWidth="3"/>
      <text x="45" y="40" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="21" fontWeight="900" fill="white">会</text>
      <path d="M28 57h34" stroke="#17382A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 63h18" stroke="#07C160" strokeWidth="4" strokeLinecap="round"/>
      <defs>
        <linearGradient id="sealGradient" x1="24" y1="12" x2="66" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160"/>
          <stop offset="1" stopColor="#1677FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function IllustrationStrip({ setCurrentView, setSelectedLesson, setSelectedQueue, t }) {
  return (
    <div className="illustration-strip" aria-label="Study shortcuts">
      <button className="story-sticker" onClick={() => { setSelectedQueue(null); setCurrentView('lessons'); }}>
        <LanternStickerSvg />
        <span className="story-sticker-title">{t('stickers.lessons')}</span>
      </button>
      <button className="story-sticker" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }}>
        <BrushStickerSvg />
        <span className="story-sticker-title">{t('stickers.write')}</span>
      </button>
      <button className="story-sticker" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }}>
        <SealStickerSvg />
        <span className="story-sticker-title">{t('stickers.quiz')}</span>
      </button>
    </div>
  );
}

function MiniProgramTile({ icon, label, onClick }) {
  return (
    <button className="mini-program-tile" onClick={onClick}>
      <span className="mini-program-icon"><AppIcon name={icon} /></span>
      <span className="mini-program-name">{label}</span>
    </button>
  );
}

function MiniAppHeader({ icon, title, subtitle, pill }) {
  return (
    <div className="mini-app-hero">
      <span className="mini-app-hero-icon"><AppIcon name={icon} /></span>
      <div>
        <h1 className="mini-app-title">{title}</h1>
        <p className="mini-app-subtitle">{subtitle}</p>
      </div>
      {pill && <span className="mini-app-pill">{pill}</span>}
    </div>
  );
}

// ============================================
// DAILY TRAINING VIEW
// ============================================
function DailyTrainingView({ progress, setCurrentView, setSelectedLesson, setSelectedQueue, playSound, t }) {
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const dailySummary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const todayLabel = getTodayKey();
  const openMode = (view) => {
    setSelectedLesson(null);
    setSelectedQueue({
      id: `daily:${todayLabel}`,
      labelKey: 'common.today',
      items: dailyQueue
    });
    playSound('select');
    setCurrentView(view);
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-lime)' }}>{todayLabel}</span>
      </header>

      <MiniAppHeader
        icon="gift"
        title={t('daily.title')}
        subtitle={t('daily.subtitle')}
        pill={t('daily.count', { count: dailyQueue.length })}
      />

      <div className="daily-training-card">
        <div className="daily-training-hero">
          <PandaBuddySvg />
          <div>
            <p className="daily-training-title">{t('daily.heroTitle')}</p>
            <p className="daily-training-copy">{t('daily.heroCopy')}</p>
          </div>
        </div>
        <div className="daily-queue-grid">
          {dailyQueue.map(char => (
            <div key={char.hanzi} className="daily-queue-char">
              <span className="hanzi-display">{char.hanzi}</span>
              <small>{t(`daily.reason.${char.dailyReason}`)}</small>
            </div>
          ))}
        </div>
        <div className="daily-reason-row">
          <span>{t('daily.reason.new')} {dailySummary.new || 0}</span>
          <span>{t('daily.reason.review')} {dailySummary.review || 0}</span>
          <span>{t('daily.reason.solidify')} {dailySummary.solidify || 0}</span>
        </div>
      </div>

      <div className="daily-step-grid">
        <button className="daily-step-card" onClick={() => openMode('learn')}>
          <span className="daily-step-index">1</span>
          <span className="daily-step-icon"><AppIcon name="card" /></span>
          <strong>{t('daily.step1.title')}</strong>
          <span>{t('daily.step1.copy')}</span>
        </button>
        <button className="daily-step-card primary" onClick={() => openMode('draw')}>
          <span className="daily-step-index">2</span>
          <span className="daily-step-icon"><AppIcon name="brush" /></span>
          <strong>{t('daily.step2.title')}</strong>
          <span>{t('daily.step2.copy')}</span>
        </button>
        <button className="daily-step-card" onClick={() => openMode('quiz')}>
          <span className="daily-step-index">3</span>
          <span className="daily-step-icon"><AppIcon name="target" /></span>
          <strong>{t('daily.step3.title')}</strong>
          <span>{t('daily.step3.copy')}</span>
        </button>
      </div>

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={() => setCurrentView('home')}>{t('daily.doneEnough')}</button>
        <button className="btn btn-primary" onClick={() => openMode('learn')}>{t('daily.start')}</button>
      </div>
    </div>
  );
}

// ============================================
// HOME VIEW
// ============================================
function HomeView({ progress, setCurrentView, setSelectedLesson, setSelectedQueue, language, setLanguage, soundEnabled, setSoundEnabled, ambienceEnabled, setAmbienceEnabled, playSound, t }) {
  const masteredCount = progress.masteredChars.length;
  const learningCount = progress.learningChars.length;
  const totalChars = VOCABULARY.length;
  const progressPercent = Math.round((masteredCount / totalChars) * 100);
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const dailySummary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const openDailyTraining = () => {
    setSelectedLesson(null);
    setSelectedQueue(null);
    playSound('select');
    setCurrentView('daily');
  };

  return (
    <div className="screen home-screen">
      <header className="super-topbar">
        <div className="brand-lockup">
          <div className="brand-mark"><HanziLogoSvg /></div>
          <div>
            <h1 className="brand-title">Hanzi Master</h1>
            <p className="brand-subtitle">{t('home.subtitle')}</p>
          </div>
        </div>
        <div className="topbar-actions">
          <LanguageToggle language={language} setLanguage={setLanguage} playSound={playSound} t={t} />
          <SoundToggle soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} t={t} />
          <AmbienceToggle ambienceEnabled={ambienceEnabled} setAmbienceEnabled={setAmbienceEnabled} t={t} />
          {progress.streakDays > 0 && (
            <div className="daily-chip">🔥 {progress.streakDays}</div>
          )}
        </div>
      </header>

      <div className="super-searchbar">
        <AppIcon name="scan" />
        <strong>{t('home.search')}</strong>
        <span className="super-search-action"><AppIcon name="sound" /></span>
      </div>

      <div className="wallet-card">
        <p className="wallet-label">{t('home.walletLabel')}</p>
        <div className="wallet-brand-mark"><HanziLogoSvg /></div>
        <div className="wallet-score">{progressPercent}%</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="wallet-meta">
          <span>{t('home.masteredMeta', { mastered: masteredCount, total: totalChars })}</span>
          <span>{t('home.learningMeta', { count: learningCount })}</span>
          <div className="wallet-seal">字</div>
        </div>
      </div>

      <div className="daily-entry-card" onClick={openDailyTraining} role="button" tabIndex={0}>
        <div className="daily-entry-main">
          <span className="daily-entry-icon"><AppIcon name="gift" /></span>
          <div>
            <p className="daily-entry-kicker">{t('home.dailyKicker')}</p>
            <p className="daily-entry-title">{t('home.dailyTitle', { count: dailyQueue.length })}</p>
          </div>
        </div>
        <div className="daily-entry-strip">
          {dailyQueue.slice(0, 6).map(char => (
            <span key={char.hanzi} className="daily-entry-char">{char.hanzi}</span>
          ))}
        </div>
        <div className="daily-entry-meta">
          <span>{t('daily.reason.new')} {dailySummary.new || 0}</span>
          <span>{t('daily.reason.review')} {dailySummary.review || 0}</span>
          <span>{t('daily.reason.solidify')} {dailySummary.solidify || 0}</span>
        </div>
      </div>

      <IllustrationStrip setCurrentView={setCurrentView} setSelectedLesson={setSelectedLesson} setSelectedQueue={setSelectedQueue} t={t} />

      <div className="quick-lane">
        <button className="quick-action" onClick={() => { setSelectedQueue(null); setCurrentView('lessons'); }}>
          <span className="quick-action-icon"><AppIcon name="scan" /></span>
          <span className="quick-action-label">{t('tiles.lessons')}</span>
        </button>
        <button className="quick-action" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('learn'); }}>
          <span className="quick-action-icon"><AppIcon name="card" /></span>
          <span className="quick-action-label">{t('tiles.cards')}</span>
        </button>
        <button className="quick-action" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }}>
          <span className="quick-action-icon"><AppIcon name="brush" /></span>
          <span className="quick-action-label">{t('tiles.write')}</span>
        </button>
        <button className="quick-action" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }}>
          <span className="quick-action-icon"><AppIcon name="target" /></span>
          <span className="quick-action-label">{t('tiles.quiz')}</span>
        </button>
      </div>

      <div className="mini-program-panel">
        <div className="mini-program-head">
          <span>{t('home.myMiniPrograms')}</span>
          <span>{t('home.more')}</span>
        </div>
        <div className="mini-program-grid">
          <MiniProgramTile icon="book" label={t('tiles.vocab')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('learn'); }} />
          <MiniProgramTile icon="brush" label={t('tiles.write')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }} />
          <MiniProgramTile icon="target" label={t('tiles.quiz')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }} />
          <MiniProgramTile icon="scan" label={t('tiles.lessons')} onClick={() => { setSelectedQueue(null); setCurrentView('lessons'); }} />
          <MiniProgramTile icon="sound" label={t('tiles.pinyin')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }} />
          <MiniProgramTile icon="card" label={t('tiles.cards')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('learn'); }} />
          <MiniProgramTile icon="wallet" label={t('tiles.progress')} onClick={() => { setSelectedQueue(null); setCurrentView('stats'); }} />
          <MiniProgramTile icon="gift" label={t('tiles.review')} onClick={openDailyTraining} />
        </div>
      </div>

      <div className="cute-coach-card">
        <PandaBuddySvg />
        <div>
          <p className="coach-title">{t('home.coachTitle')}</p>
          <p className="coach-copy">{learningCount > 0 ? t('home.coachReview') : t('home.coachNew')}</p>
        </div>
      </div>

      <div className="insight-panel">
        <div>
          <p className="insight-title">{t('home.taskTitle')}</p>
          <p className="insight-copy">{learningCount > 0 ? t('home.taskReview') : t('home.taskNew')}</p>
        </div>
        <div className="insight-character">{learningCount > 0 ? '练' : '学'}</div>
      </div>

      <div className="stats-bar home-metrics">
        <div className="stat-item">
          <div className="stat-value">{masteredCount}</div>
          <div className="stat-label">{t('home.stat.mastered')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{learningCount}</div>
          <div className="stat-label">{t('home.stat.learning')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{progress.totalReviews}</div>
          <div className="stat-label">{t('home.stat.reviews')}</div>
        </div>
      </div>

      <div className="section-title">
        <span className="text-sm">{t('home.account')}</span>
        <div className="section-line" />
      </div>

      <div className="card card-clickable account-entry" onClick={() => setCurrentView('stats')} role="button" tabIndex={0}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p className="title-md">{t('home.walletTitle')}</p>
            <p className="text-sm">{t('home.walletCopy')}</p>
          </div>
          <span style={{ fontSize: '28px', color: 'var(--accent-lime)' }}>→</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// LESSONS VIEW
// ============================================
function LessonsView({ setCurrentView, setSelectedLesson, setSelectedQueue, progress, t }) {
  const lessons = [12, 13, 14, 15];
  const lessonTitles = {
    12: { title: '天气', chinese: 'Weather' },
    13: { title: '正在', chinese: 'Actions' },
    14: { title: '买东西', chinese: 'Shopping' },
    15: { title: '是...的', chinese: 'Structure' }
  };

  const getLessonProgress = (num) => {
    const chars = VOCABULARY.filter(v => v.lesson === num);
    const mastered = chars.filter(v => progress.masteredChars.includes(v.hanzi)).length;
    return { mastered, total: chars.length, percent: Math.round((mastered / chars.length) * 100) };
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <HeaderLogoMark />
      </header>

      <MiniAppHeader
        icon="scan"
        title={t('lessons.title')}
        subtitle={t('lessons.subtitle')}
        pill={t('lessons.pill')}
      />

      <div className="service-section">
        <div className="service-section-head">
          <span>{t('lessons.service')}</span>
          <span>HSK1</span>
        </div>
        <div className="service-list">
        {lessons.map((num) => {
          const { mastered, total, percent } = getLessonProgress(num);
          return (
            <div key={num} className="card card-clickable service-row" onClick={() => { setSelectedQueue(null); setSelectedLesson(num); setCurrentView('learn'); }} role="button" tabIndex={0}>
              <div className="lesson-card">
                <div className="lesson-service-icon"><AppIcon name={num === 12 ? 'sound' : num === 13 ? 'brush' : num === 14 ? 'wallet' : 'book'} /></div>
                <div className="lesson-number">{num}</div>
                <div className="lesson-info">
                  <div className="lesson-title-line">
                    <p className="title-md">{lessonTitles[num].title}</p>
                    <span className="lesson-chinese-chip">{lessonTitles[num].chinese}</span>
                  </div>
                  <p className="text-sm">{mastered}/{total} • {percent}%</p>
                  <div className="progress-bar" style={{ marginTop: '8px', marginBottom: '0' }}>
                    <div className="progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      <div className="section-title">
        <span className="text-sm">{t('lessons.quick')}</span>
        <div className="section-line" />
      </div>

      <div className="lessons-quick-actions" style={{ display: 'flex', gap: '12px' }}>
        <button className="btn btn-secondary" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }}>{t('lessons.quizAll')}</button>
        <button className="btn btn-primary" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }}>{t('lessons.drawAll')}</button>
      </div>
    </div>
  );
}

// ============================================
// LEARN VIEW
// ============================================
function LearnView({ selectedLesson, selectedQueue, progress, markCharacterLearned, updateProgress, setCurrentView, playSound, t }) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY), [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getStudyQueue(baseVocab, progress));
  const positionKey = `learn:${selectedQueue?.id || selectedLesson || 'all'}`;
  const scopePill = selectedQueue?.labelKey ? t(selectedQueue.labelKey) : (selectedLesson ? `L${selectedLesson}` : t('common.all'));
  const [currentIndex, setCurrentIndex] = React.useState(() => Math.min(progress.lastPositions?.[positionKey] || 0, Math.max(vocab.length - 1, 0)));
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showCompound, setShowCompound] = React.useState(false);

  const currentChar = vocab[currentIndex];
  const relatedCompounds = React.useMemo(() => COMPOUNDS.filter(c => c.hanzi.includes(currentChar.hanzi)), [currentChar]);

  const handleNext = () => {
    playSound(currentIndex === vocab.length - 1 ? 'complete' : 'tap');
    markCharacterLearned(currentChar.hanzi);
    setIsFlipped(false);
    setShowCompound(false);
    if (currentIndex < vocab.length - 1) {
      const nextIndex = currentIndex + 1;
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: nextIndex } });
      setCurrentIndex(nextIndex);
    } else {
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: 0 } });
    }
  };

  const handlePrev = () => {
    playSound('tap');
    setIsFlipped(false);
    setShowCompound(false);
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: prevIndex } });
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-lime)' }}>{t('learn.cardNumber', { count: currentIndex + 1 })}</span>
      </header>

      <MiniAppHeader
        icon="card"
        title={t('learn.title')}
        subtitle={t('learn.subtitle')}
        pill={scopePill}
      />

      <div className="mini-app-progress-card">
        <p className="text-sm">{t('learn.progress')}</p>
        <span className="mini-app-progress-count">{currentIndex + 1} / {vocab.length}</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((currentIndex + 1) / vocab.length) * 100}%` }} />
      </div>

      <div className="study-pass-card card card-accent-lime flashcard" onClick={() => { playSound('select'); setIsFlipped(!isFlipped); }} role="button" tabIndex={0} aria-label="Flip card">
        <div className="hanzi-display hanzi-hero" style={{ color: 'var(--accent-lime)' }}>{currentChar.hanzi}</div>
        {isFlipped && (
          <div className="animate-slide-up" style={{ textAlign: 'center' }}>
            <div className="pinyin-display">{currentChar.pinyin}</div>
            <div className="meaning-display">{currentChar.meaning}</div>
            <p className="text-sm" style={{ marginTop: '12px' }}>{t('learn.strokesLine', { strokes: currentChar.strokes, lesson: currentChar.lesson })}</p>
          </div>
        )}
        {!isFlipped && <p className="flashcard-hint">{t('learn.tap')}</p>}
      </div>

      {relatedCompounds.length > 0 && (
        <div className="related-service-card card card-clickable" onClick={() => { playSound('reveal'); setShowCompound(!showCompound); }} role="button" tabIndex={0}>
          <p className="title-md">{t('learn.related', { count: relatedCompounds.length })}</p>
          {showCompound && (
            <div className="animate-slide-up" style={{ marginTop: '12px' }}>
              {relatedCompounds.map((c, i) => (
                <div key={i} style={{ padding: '8px 0', borderBottom: i < relatedCompounds.length - 1 ? '1px solid #dce7e2' : 'none' }}>
                  <span className="hanzi-display hanzi-md">{c.hanzi}</span>
                  <span style={{ marginLeft: '12px', color: 'var(--accent-cyan)' }}>{c.pinyin}</span>
                  <span style={{ marginLeft: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>{c.meaning}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentIndex === 0}>{t('common.prevCard')}</button>
        <button className="btn btn-primary" onClick={handleNext}>{currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextCard')}</button>
      </div>

      {currentIndex === vocab.length - 1 && isFlipped && (
        <div className="floating-indicator">
          <span style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif", fontSize: '15px', fontWeight: 900 }}>{t('learn.roundDone')}</span>
        </div>
      )}
    </div>
  );
}

// ============================================
// DRAW VIEW
// ============================================
function DrawView({ selectedLesson, selectedQueue, progress, updateProgress, markCharacterMastered, setCurrentView, playSound, t }) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY), [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getDrawQueue(baseVocab, progress));
  const positionKey = `draw:${selectedQueue?.id || selectedLesson || 'all'}`;
  const scopePill = selectedQueue?.labelKey ? t(selectedQueue.labelKey) : (selectedLesson ? `L${selectedLesson}` : t('common.all'));
  const [currentIndex, setCurrentIndex] = React.useState(() => Math.min(progress.lastPositions?.[positionKey] || 0, Math.max(vocab.length - 1, 0)));
  const [drawMode, setDrawMode] = React.useState('practice'); // learn, practice, quiz
  const [showReference, setShowReference] = React.useState(false);
  const [strokesCompleted, setStrokesCompleted] = React.useState(0);
  const [totalStrokes, setTotalStrokes] = React.useState(0);
  const [mistakes, setMistakes] = React.useState(0);
  const mistakesRef = React.useRef(0);
  const [feedback, setFeedback] = React.useState(null); // { type: 'success' | 'error', message }
  const [isComplete, setIsComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [charStats, setCharStats] = React.useState({ completed: 0, totalMistakes: 0 });

  const writerRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const currentChar = vocab[currentIndex];

  // Initialize Hanzi Writer
  React.useEffect(() => {
    if (!containerRef.current || !currentChar) return;

    // Clear previous
    if (writerRef.current) {
      writerRef.current = null;
    }
    containerRef.current.innerHTML = '';

    // Reset state
    setStrokesCompleted(0);
    setMistakes(0);
    mistakesRef.current = 0;
    setFeedback(null);
    setIsComplete(false);
    setIsLoading(true);

    // Calculate size based on container
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
            setFeedback({ type: 'error', message: t('draw.feedback.noData') });
          }
        }
      });

      writerRef.current = writer;

      // Get stroke count
      const strokeData = window.HANZI_STROKE_DATA?.[currentChar.hanzi];
      setTotalStrokes(strokeData?.strokes?.length || currentChar.strokes);
      setIsLoading(false);

      // Start based on mode
      if (drawMode === 'learn') {
        // Just show the character, user can click animate
      } else {
        // Start quiz mode for practice and quiz
        setTimeout(() => {
          writer.quiz({
            onCorrectStroke: (data) => {
              playSound('stroke');
              setStrokesCompleted(data.strokeNum + 1);
              if (data.strokeNum === 0) {
                setFeedback({ type: 'success', message: t('draw.feedback.start') });
              }
              setTimeout(() => setFeedback(null), 800);
            },
            onMistake: (data) => {
              playSound('wrong');
              mistakesRef.current += 1;
              setMistakes(prev => prev + 1);
              setFeedback({ type: 'error', message: t('draw.feedback.retry') });
              setTimeout(() => setFeedback(null), 800);
            },
            onComplete: (data) => {
              playSound('complete');
              setIsComplete(true);
              const finalMistakes = mistakesRef.current;
              setCharStats(prev => ({
                completed: prev.completed + 1,
                totalMistakes: prev.totalMistakes + finalMistakes
              }));
              if (finalMistakes === 0) {
                setFeedback({ type: 'success', message: t('draw.feedback.perfect') });
                markCharacterMastered(currentChar.hanzi);
              } else if (finalMistakes <= 2) {
                setFeedback({ type: 'success', message: t('draw.feedback.good') });
              } else {
                setFeedback({ type: 'success', message: t('draw.feedback.done') });
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
          onCorrectStroke: (data) => {
            playSound('stroke');
            setStrokesCompleted(data.strokeNum + 1);
            setFeedback({ type: 'success', message: t('draw.feedback.nice') });
            setTimeout(() => setFeedback(null), 600);
          },
          onMistake: () => {
            playSound('wrong');
            mistakesRef.current += 1;
            setMistakes(prev => prev + 1);
            setFeedback({ type: 'error', message: t('draw.feedback.retry') });
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
            setFeedback({ type: 'success', message: finalMistakes === 0 ? t('draw.feedback.perfect') : t('draw.feedback.done') });
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
      lastPositions: { ...(progress.lastPositions || {}), [positionKey]: nextIndex }
    });
    if (currentIndex < vocab.length - 1) {
      setCurrentIndex(nextIndex);
    } else {
      // Last character - go back to home
      setCurrentView('home');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      playSound('tap');
      const prevIndex = currentIndex - 1;
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: prevIndex } });
      setCurrentIndex(prevIndex);
    }
  };

  const selectDrawMode = (mode) => {
    if (mode !== drawMode) playSound('select');
    setDrawMode(mode);
  };

  // Stroke dots for visual progress
  const strokeDots = React.useMemo(() => {
    const dots = [];
    for (let i = 0; i < Math.min(totalStrokes, 12); i++) {
      let className = 'stroke-dot';
      if (i < strokesCompleted) className += ' completed';
      else if (i === strokesCompleted && !isComplete) className += ' current';
      dots.push(<div key={i} className={className} />);
    }
    if (totalStrokes > 12) {
      dots.push(<span key="more" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>+{totalStrokes - 12}</span>);
    }
    return dots;
  }, [totalStrokes, strokesCompleted, isComplete]);

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-coral)' }}>{t('draw.charNumber', { count: currentIndex + 1 })}</span>
      </header>

      <MiniAppHeader
        icon="brush"
        title={t('draw.title')}
        subtitle={t('draw.subtitle')}
        pill={scopePill}
      />

      {/* Mode selector */}
      <div className="mini-app-segment draw-mode-selector">
        <button
          className={`draw-mode-btn ${drawMode === 'learn' ? 'active' : ''}`}
          onClick={() => selectDrawMode('learn')}
        >
          <AppIcon name="card" /> {t('draw.mode.learn')}
        </button>
        <button
          className={`draw-mode-btn ${drawMode === 'practice' ? 'active' : ''}`}
          onClick={() => selectDrawMode('practice')}
        >
          <AppIcon name="brush" /> {t('draw.mode.practice')}
        </button>
        <button
          className={`draw-mode-btn ${drawMode === 'quiz' ? 'active' : ''}`}
          onClick={() => selectDrawMode('quiz')}
        >
          <AppIcon name="target" /> {t('draw.mode.quiz')}
        </button>
      </div>

      {/* Character info */}
      <div className="draw-prompt-card card" style={{ textAlign: 'center', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div className="hanzi-display" style={{ fontSize: '48px', color: 'var(--accent-lime)', minWidth: '64px' }}>
            {(drawMode === 'learn' || showReference) ? currentChar.hanzi : '?'}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="pinyin-display" style={{ fontSize: '20px', marginTop: 0 }}>{currentChar.pinyin}</div>
            <p className="text-sm" style={{ margin: '4px 0 0 0' }}>{currentChar.meaning}</p>
          </div>
        </div>
      </div>

      {/* Hanzi Writer container */}
      <div className="writer-mini-program hanzi-writer-container">
        {isLoading && (
          <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#07c160', animation: 'loadingPulse 1s ease-in-out infinite' }}><AppIcon name="brush" /></div>
            <div className="text-sm">{t('draw.loading')}</div>
          </div>
        )}
        <div ref={containerRef} style={{ touchAction: 'none', opacity: isLoading ? 0 : 1 }} />
        {feedback && (
          <div className={`draw-feedback ${feedback.type}`}>
            {feedback.message}
          </div>
        )}
      </div>

      {/* Stroke progress */}
      {drawMode !== 'learn' && totalStrokes > 0 && (
        <div className="stroke-counter">
          {strokeDots}
        </div>
      )}

      {/* Controls based on mode */}
      <div className="canvas-controls">
        {drawMode === 'learn' ? (
          <>
            <button className="btn btn-secondary" onClick={handleAnimate}>{t('draw.animate')}</button>
            <button className="btn btn-primary" onClick={handleNext}>
              {currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextChar')}
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-secondary" onClick={handleReset}>
              {isComplete ? t('common.writeAgain') : t('common.reset')}
            </button>
            <button className="btn btn-secondary" onClick={() => { playSound('reveal'); setShowReference(prev => !prev); }}>
              {showReference ? t('common.hide') : t('common.hint')}
            </button>
            {isComplete && (
              <button className="btn btn-primary" onClick={handleNext}>
                {currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextChar')}
              </button>
            )}
          </>
        )}
      </div>

      {/* Stats */}
      {drawMode !== 'learn' && (
        <div className="draw-stats">
          <div className="draw-stat">
            <div className="draw-stat-value">{strokesCompleted}/{totalStrokes}</div>
            <div className="draw-stat-label">{t('draw.strokes')}</div>
          </div>
          <div className="draw-stat">
            <div className="draw-stat-value" style={{ color: mistakes > 0 ? 'var(--accent-coral)' : 'var(--accent-lime)' }}>{mistakes}</div>
            <div className="draw-stat-label">{t('draw.mistakes')}</div>
          </div>
          <div className="draw-stat">
            <div className="draw-stat-value">{charStats.completed}</div>
            <div className="draw-stat-label">{t('draw.completed')}</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentIndex === 0}>{t('common.prevChar')}</button>
        {(drawMode === 'learn' || !isComplete) && (
          <button className="btn btn-secondary" onClick={handleNext}>
            {t('common.skip')}
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// QUIZ VIEW
// ============================================
function QuizView({ selectedLesson, selectedQueue, progress, updateProgress, markCharacterMastered, setCurrentView, playSound, t }) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY), [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getStudyQueue(baseVocab, progress));
  const [initialMasteredChars] = React.useState(progress.masteredChars);
  const scopePill = selectedQueue?.labelKey ? t(selectedQueue.labelKey) : (selectedLesson ? `L${selectedLesson}` : t('nav.quiz'));
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
      const fill = vocab
        .filter(v => v.id !== char.id && !similar.some(s => s.id === v.id))
        .sort(() => Math.random() - 0.5);
      const wrong = [...similar, ...fill].slice(0, 3);
      let opts;
      if (quizType === 'hanzi-to-pinyin') {
        opts = [{ text: char.pinyin, isCorrect: true }, ...wrong.map(w => ({ text: w.pinyin, isCorrect: false }))];
      } else if (quizType === 'pinyin-to-hanzi') {
        opts = [{ text: char.hanzi, isCorrect: true }, ...wrong.map(w => ({ text: w.hanzi, isCorrect: false }))];
      } else {
        opts = [{ text: char.meaning, isCorrect: true }, ...wrong.map(w => ({ text: w.meaning, isCorrect: false }))];
      }
      const uniqueOpts = [];
      opts.forEach(opt => {
        if (!uniqueOpts.some(existing => existing.text === opt.text)) uniqueOpts.push(opt);
      });
      return { char, options: uniqueOpts.sort(() => Math.random() - 0.5), type: quizType };
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

  const handleAnswer = (option) => {
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
      updateProgress({ quizScores: [...progress.quizScores, { score, total: questions.length, date: new Date().toISOString() }] });
    }
  };

  const chooseQuizType = (type) => {
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
    return (
      <div className="screen">
        <header className="header">
          <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
          <HeaderLogoMark />
        </header>
        <MiniAppHeader
          icon="target"
          title={t('quiz.title')}
          subtitle={t('quiz.subtitle')}
          pill={scopePill}
        />
      <div className="card card-clickable card-accent-lime quiz-mode-card" onClick={() => chooseQuizType('hanzi-to-pinyin')} role="button" tabIndex={0}>
          <span className="quiz-mode-icon"><AppIcon name="sound" /></span>
          <div>
            <p className="title-lg">{t('quiz.mode.hanziPinyin')}</p>
            <p className="text-sm">{t('quiz.mode.hanziPinyinCopy')}</p>
          </div>
        </div>
      <div className="card card-clickable card-accent-cyan quiz-mode-card" onClick={() => chooseQuizType('pinyin-to-hanzi')} role="button" tabIndex={0}>
          <span className="quiz-mode-icon"><AppIcon name="target" /></span>
          <div>
            <p className="title-lg">{t('quiz.mode.pinyinHanzi')}</p>
            <p className="text-sm">{t('quiz.mode.pinyinHanziCopy')}</p>
          </div>
        </div>
      <div className="card card-clickable card-accent-coral quiz-mode-card" onClick={() => chooseQuizType('hanzi-to-meaning')} role="button" tabIndex={0}>
          <span className="quiz-mode-icon"><AppIcon name="book" /></span>
          <div>
            <p className="title-lg">{t('quiz.mode.hanziMeaning')}</p>
            <p className="text-sm">{t('quiz.mode.hanziMeaningCopy')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="screen">
        <header className="header">
          <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        </header>
        <div className="results-display">
          <div className="score-circle">
            <div className="score-value">{pct}%</div>
            <div className="score-label">{t('common.score')}</div>
          </div>
          <h2 className="title-xl">{pct >= 80 ? t('quiz.resultGreat') : pct >= 60 ? t('quiz.resultGood') : t('quiz.resultKeep')}</h2>
          <p className="text-sm" style={{ marginTop: '12px' }}>{t('quiz.scoreLine', { score, total: questions.length })}</p>
        </div>
        <div className="nav-actions">
        <button className="btn btn-secondary" onClick={changeQuizMode}>{t('quiz.changeMode')}</button>
        <button className="btn btn-primary" onClick={restartQuiz}>{t('quiz.again')}</button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  if (!q) return null;
  const canContinue = answeredCorrect || revealedAnswer;
  const correctOption = q.options.find(opt => opt.isCorrect);

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-purple)' }}>{currentIndex + 1} / {questions.length}</span>
      </header>
      <MiniAppHeader
        icon="target"
        title={t('quiz.title')}
        subtitle={t('quiz.subtitleActive')}
        pill={t('quiz.scoreFooter', { score, total: questions.length })}
      />
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(currentIndex / questions.length) * 100}%` }} />
      </div>
      <div className="quiz-question quiz-pass-card">
        {q.type === 'pinyin-to-hanzi' ? (
          <>
            <p className="text-sm">{t('quiz.whichHanzi')}</p>
            <div className="pinyin-display" style={{ fontSize: '42px', marginTop: '16px' }}>{q.char.pinyin}</div>
            <p className="meaning-display">{q.char.meaning}</p>
          </>
        ) : (
          <>
            <p className="text-sm">{q.type === 'hanzi-to-pinyin' ? t('quiz.howRead') : t('quiz.whatMeans')}</p>
            <div className="hanzi-display hanzi-xl" style={{ color: 'var(--accent-lime)' }}>{q.char.hanzi}</div>
          </>
        )}
      </div>
      <div className="quiz-options service-list">
        {q.options.map((opt, i) => {
          const wasTried = attemptedAnswers.some(a => a.text === opt.text);
          const showCorrect = canContinue && opt.isCorrect;
          return (
            <button
              key={i}
              className={`quiz-option ${showCorrect ? 'correct' : ''} ${wasTried ? 'incorrect disabled' : ''} ${canContinue ? 'disabled' : ''}`}
              onClick={() => handleAnswer(opt)}
              style={q.type === 'pinyin-to-hanzi' ? { fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif", fontSize: '32px', textAlign: 'center', justifyContent: 'center' } : {}}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {(attemptedAnswers.length > 0 || canContinue) && (
        <div className="quiz-feedback">
          {answeredCorrect ? (
            <strong>{t('quiz.correct')}</strong>
          ) : revealedAnswer ? (
            <>
              <div>{t('quiz.correctAnswer')}<strong>{correctOption?.text}</strong></div>
              <div className="pinyin-display">{q.char.pinyin}</div>
            </>
          ) : (
            <strong>{t('quiz.tryAgain')}</strong>
          )}
        </div>
      )}
      {canContinue && (
        <div className="nav-actions">
          <button className="btn btn-primary" onClick={handleNextQuestion}>
            {currentIndex === questions.length - 1 ? t('common.done') : t('quiz.next')}
          </button>
        </div>
      )}
      <p className="text-sm" style={{ textAlign: 'center', marginTop: '20px' }}>{t('quiz.scoreFooter', { score, total: currentIndex + (canContinue ? 1 : 0) })}</p>
    </div>
  );
}

// ============================================
// STATS VIEW
// ============================================
function StatsView({ progress, setCurrentView, t }) {
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
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hanzi-master-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);

        // Validate structure
        if (!data.progress || data.appName !== 'hanzi-master') {
          alert(t('stats.invalidBackup'));
          return;
        }

        // Merge with defaults for forward compatibility
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

        // Migrate old ID-based backups to hanzi-based
        imported = migrateProgress(imported);

        if (window.confirm(t('stats.confirmImport', { date: new Date(data.exportDate).toLocaleDateString() }))) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
          window.location.reload();
        }
      } catch (err) {
        alert(t('stats.importFail'));
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <HeaderLogoMark />
      </header>

      <MiniAppHeader
        icon="wallet"
        title={t('stats.title')}
        subtitle={t('stats.subtitle')}
        pill={`${progress.masteredChars.length}/${VOCABULARY.length}`}
      />

      <div className="stats-bar stats-wallet">
        <div className="stat-item">
          <div className="stat-value">{progress.masteredChars.length}</div>
          <div className="stat-label">{t('home.stat.mastered')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{progress.totalReviews}</div>
          <div className="stat-label">{t('home.stat.reviews')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{progress.streakDays}</div>
          <div className="stat-label">{t('stats.streak')}</div>
        </div>
      </div>

      <div className="section-title">
        <span className="text-sm">{t('stats.byLesson')}</span>
        <div className="section-line" />
      </div>

      {byLesson.map(({ lesson, mastered, total }) => (
        <div key={lesson} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="title-md">{t('stats.lesson', { lesson })}</p>
            <span className="text-accent" style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif", fontSize: '20px', fontWeight: 900 }}>{mastered}/{total}</span>
          </div>
          <div className="progress-bar" style={{ marginTop: '10px', marginBottom: '0' }}>
            <div className="progress-fill" style={{ width: `${(mastered / total) * 100}%` }} />
          </div>
        </div>
      ))}

      {recentScores.length > 0 && (
        <>
          <div className="section-title">
            <span className="text-sm">{t('stats.recent')}</span>
            <div className="section-line" />
          </div>
          {recentScores.map((q, i) => (
            <div key={i} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px' }}>{new Date(q.date).toLocaleDateString()}</span>
                <span className="text-accent" style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif", fontSize: '22px', fontWeight: 900 }}>{Math.round((q.score / q.total) * 100)}%</span>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="section-title">
        <span className="text-sm">{t('stats.allChars', { count: VOCABULARY.length })}</span>
        <div className="section-line" />
      </div>

      <div className="char-grid">
        {VOCABULARY.map(c => (
          <div key={c.id} className={`char-item ${progress.masteredChars.includes(c.hanzi) ? 'mastered' : progress.learningChars.includes(c.hanzi) ? 'learning' : ''}`} title={`${c.pinyin} - ${c.meaning}`}>
            {c.hanzi}
          </div>
        ))}
      </div>

      <div className="section-title" style={{ marginTop: '28px' }}>
        <span className="text-sm">{t('stats.backup')}</span>
        <div className="section-line" />
      </div>

      <div className="backup-buttons">
        <button className="btn btn-secondary" onClick={handleExport}>
          <span style={{ marginRight: '8px' }}>📤</span> {t('stats.export')}
        </button>
        <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
          <span style={{ marginRight: '8px' }}>📥</span> {t('stats.import')}
          <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
        </label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button className="btn btn-coral" onClick={handleReset}>{t('stats.reset')}</button>
      </div>
    </div>
  );
}

// ============================================
// MOUNT
// ============================================
document.body.classList.add('app-ready');
ReactDOM.createRoot(document.getElementById('root')).render(<HanziMasterApp />);
