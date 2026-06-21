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
