function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MATERIAL_COLLECTION_REPAIRS = {
  'hsk1-word-bank': {
    labelZh: 'HSK1 词汇',
    chipZh: '词库'
  },
  'hsk2-lesson-1': {
    labelZh: 'HSK2 L1 九月去北京旅游最好',
    chipZh: '材料'
  },
  'hsk2-lesson-2': {
    labelZh: 'HSK2 L2 我每天六点起床',
    chipZh: '材料'
  },
  'hsk2-lesson-3': {
    labelZh: 'HSK2 L3 左边那个红色的是我的',
    chipZh: '材料'
  },
  'hsk2-lesson-4': {
    labelZh: 'HSK2 L4 这个工作是他帮我介绍的',
    chipZh: '材料'
  },
  'hsk2-lesson-5': {
    labelZh: 'HSK2 L5 就买这件吧',
    chipZh: '材料'
  },
  'hsk2-lesson-6': {
    labelZh: 'HSK2 L6 你怎么不吃了',
    chipZh: '材料'
  },
  'hsk2-lesson-7': {
    labelZh: 'HSK2 L7 你家离公司远吗',
    chipZh: '材料'
  },
  'hsk2-lesson-9': {
    labelZh: 'HSK2 L9 题太多，我没做完',
    chipZh: '材料'
  },
  'hsk2-lesson-10': {
    labelZh: 'HSK2 L10 别找了，手机在桌子上呢',
    chipZh: '材料'
  },
  'hsk2-lesson-11': {
    labelZh: 'HSK2 L11 他比我大三岁',
    chipZh: '材料'
  },
  'hsk2-lesson-13': {
    labelZh: 'HSK2 L13 门开着呢',
    chipZh: '材料'
  },
  'hsk2-lesson-15': {
    labelZh: 'HSK2 L15 新年就要到了',
    chipZh: '材料'
  },
  'book3-preview': {
    labelZh: '第3册预习材料',
    chipZh: '预习'
  },
  'basic-strokes': {
    labelZh: '基本笔画',
    chipZh: '笔画'
  }
};
const MATERIAL_ITEM_REPAIRS = {
  10001: {
    hanzi: '足球',
    pinyin: 'zúqiú',
    example: '我喜欢踢足球。'
  },
  10002: {
    hanzi: '踢足球',
    pinyin: 'tī zúqiú',
    example: '下午我们一起去踢足球吧。'
  },
  10003: {
    hanzi: '猫',
    pinyin: 'māo',
    example: '桌子下面有一只猫。'
  },
  10004: {
    hanzi: '眼睛',
    pinyin: 'yǎnjing',
    example: '它的眼睛很漂亮。'
  },
  10005: {
    hanzi: '旅游',
    pinyin: 'lǚyóu',
    example: '九月去北京旅游最好。'
  },
  10006: {
    hanzi: '运动',
    pinyin: 'yùndòng',
    example: '你喜欢什么运动？'
  },
  10007: {
    hanzi: '椅子',
    pinyin: 'yǐzi',
    example: '我们买几把新椅子吧。'
  },
  10008: {
    hanzi: '最',
    pinyin: 'zuì',
    example: '我最喜欢吃米饭。'
  },
  10009: {
    hanzi: '每',
    pinyin: 'měi',
    example: '每个人都来了。'
  },
  10010: {
    hanzi: '每天',
    pinyin: 'měitiān',
    example: '我每天六点起床。'
  },
  10011: {
    hanzi: '早上',
    pinyin: 'zǎoshang',
    example: '我早上去跑步。'
  },
  10012: {
    hanzi: '起床',
    pinyin: 'qǐchuáng',
    example: '我每天六点半起床。'
  },
  10013: {
    hanzi: '跑步',
    pinyin: 'pǎobù',
    example: '他每天早上跑步。'
  },
  10014: {
    hanzi: '吃药',
    pinyin: 'chī yào',
    example: '生病了要按时吃药。'
  },
  10015: {
    hanzi: '生病',
    pinyin: 'shēngbìng',
    example: '他生病住院了。'
  },
  10016: {
    hanzi: '休息',
    pinyin: 'xiūxi',
    example: '你应该好好休息。'
  },
  10017: {
    hanzi: '出院',
    pinyin: 'chūyuàn',
    example: '医生说我明天可以出院。'
  },
  10018: {
    hanzi: '忙',
    pinyin: 'máng',
    example: '我今天很忙。'
  },
  10019: {
    hanzi: '报纸',
    pinyin: 'bàozhǐ',
    example: '他每天早上看报纸。'
  },
  10020: {
    hanzi: '手表',
    pinyin: 'shǒubiǎo',
    example: '我用手表看时间。'
  },
  10021: {
    hanzi: '牛奶',
    pinyin: 'niúnǎi',
    example: '早餐我喝一杯牛奶。'
  },
  10022: {
    hanzi: '房间',
    pinyin: 'fángjiān',
    example: '这个房间很干净。'
  },
  10023: {
    hanzi: '丈夫',
    pinyin: 'zhàngfu',
    example: '她的丈夫是医生。'
  },
  10024: {
    hanzi: '红色',
    pinyin: 'hóngsè',
    example: '左边那个红色的是我的。'
  },
  10025: {
    hanzi: '送',
    pinyin: 'sòng',
    example: '这块手表是朋友送给我的。'
  },
  10026: {
    hanzi: '旁边',
    pinyin: 'pángbiān',
    example: '牛奶在报纸旁边。'
  },
  10027: {
    hanzi: '一下',
    pinyin: 'yíxià',
    example: '你看一下这个房间。'
  },
  10028: {
    hanzi: '真',
    pinyin: 'zhēn',
    example: '这个房间真漂亮。'
  },
  10029: {
    hanzi: '给',
    pinyin: 'gěi',
    example: '请给我打电话。'
  },
  10030: {
    hanzi: '接',
    pinyin: 'jiē',
    example: '我去机场接朋友。'
  },
  10031: {
    hanzi: '问',
    pinyin: 'wèn',
    example: '我想问你一个问题。'
  },
  10032: {
    hanzi: '问题',
    pinyin: 'wèntí',
    example: '这个问题不难。'
  },
  10033: {
    hanzi: '生日',
    pinyin: 'shēngrì',
    example: '今天是我的生日。'
  },
  10034: {
    hanzi: '晚上',
    pinyin: 'wǎnshang',
    example: '我们晚上出去吃饭。'
  },
  10035: {
    hanzi: '工作',
    pinyin: 'gōngzuò',
    example: '这个工作是朋友介绍的。'
  },
  10036: {
    hanzi: '介绍',
    pinyin: 'jièshào',
    example: '他给我介绍了一份工作。'
  },
  10037: {
    hanzi: '是……的',
    pinyin: 'shì...de',
    example: '这个工作是他帮我介绍的。'
  },
  10038: {
    hanzi: '咖啡',
    pinyin: 'kāfēi',
    example: '我想喝一杯咖啡。'
  },
  10039: {
    hanzi: '鱼',
    pinyin: 'yú',
    example: '我们今天去吃鱼。'
  },
  10040: {
    hanzi: '考试',
    pinyin: 'kǎoshì',
    example: '明天有汉语考试。'
  },
  10041: {
    hanzi: '衣服',
    pinyin: 'yīfu',
    example: '这件衣服很漂亮。'
  },
  10042: {
    hanzi: '打球',
    pinyin: 'dǎ qiú',
    example: '下课以后我们去打球。'
  },
  10043: {
    hanzi: '件',
    pinyin: 'jiàn',
    example: '就买这件衣服吧。'
  },
  10044: {
    hanzi: '就',
    pinyin: 'jiù',
    example: '我就买这件。'
  },
  10045: {
    hanzi: '吧',
    pinyin: 'ba',
    example: '我们休息一下吧。'
  },
  10046: {
    hanzi: '为什么',
    pinyin: 'wèishénme',
    example: '你为什么不吃饭？'
  },
  10047: {
    hanzi: '怎么',
    pinyin: 'zěnme',
    example: '你怎么不吃了？'
  },
  10048: {
    hanzi: '喝牛奶',
    pinyin: 'hē niúnǎi',
    example: '她早餐喜欢喝牛奶。'
  },
  10049: {
    hanzi: '看报纸',
    pinyin: 'kàn bàozhǐ',
    example: '爸爸正在看报纸。'
  },
  10050: {
    hanzi: '打篮球',
    pinyin: 'dǎ lánqiú',
    example: '他们正在打篮球。'
  },
  10051: {
    hanzi: '正在',
    pinyin: 'zhèngzài',
    example: '我正在学习汉语。'
  },
  10052: {
    hanzi: '少',
    pinyin: 'shǎo',
    example: '你吃得太少了。'
  },
  10053: {
    hanzi: '商店',
    pinyin: 'shāngdiàn',
    example: '我去商店买东西。'
  },
  10054: {
    hanzi: '机场',
    pinyin: 'jīchǎng',
    example: '我去机场接朋友。'
  },
  10055: {
    hanzi: '路',
    pinyin: 'lù',
    example: '我在去机场的路上。'
  },
  10056: {
    hanzi: '教室',
    pinyin: 'jiàoshì',
    example: '老师在教室里。'
  },
  10057: {
    hanzi: '时间',
    pinyin: 'shíjiān',
    example: '现在没有时间。'
  },
  10058: {
    hanzi: '离',
    pinyin: 'lí',
    example: '我家离公司很近。'
  },
  10059: {
    hanzi: '公司',
    pinyin: 'gōngsī',
    example: '他在公司上班。'
  },
  10060: {
    hanzi: '远',
    pinyin: 'yuǎn',
    example: '你家离公司远吗？'
  },
  10061: {
    hanzi: '唱歌',
    pinyin: 'chànggē',
    example: '她很喜欢唱歌。'
  },
  10062: {
    hanzi: '上班',
    pinyin: 'shàngbān',
    example: '他每天八点去上班。'
  },
  10063: {
    hanzi: '对',
    pinyin: 'duì',
    example: '这个答案是对的。'
  },
  10064: {
    hanzi: '错',
    pinyin: 'cuò',
    example: '这道题做错了。'
  },
  10065: {
    hanzi: '问题',
    pinyin: 'wèntí',
    example: '题太多，我没做完。'
  },
  10066: {
    hanzi: '第一',
    pinyin: 'dìyī',
    example: '这是第一个问题。'
  },
  10067: {
    hanzi: '跳舞',
    pinyin: 'tiàowǔ',
    example: '她正在学习跳舞。'
  },
  10068: {
    hanzi: '多',
    pinyin: 'duō',
    example: '今天的问题太多了。'
  },
  10069: {
    hanzi: '完',
    pinyin: 'wán',
    example: '作业我已经做完了。'
  },
  10070: {
    hanzi: '鸡蛋',
    pinyin: 'jīdàn',
    example: '早饭我吃两个鸡蛋。'
  },
  10071: {
    hanzi: '西瓜',
    pinyin: 'xīguā',
    example: '桌子上有一个西瓜。'
  },
  10072: {
    hanzi: '手机',
    pinyin: 'shǒujī',
    example: '手机在桌子上呢。'
  },
  10073: {
    hanzi: '准备',
    pinyin: 'zhǔnbèi',
    example: '妈妈正在准备午饭。'
  },
  10074: {
    hanzi: '午饭',
    pinyin: 'wǔfàn',
    example: '我们十二点吃午饭。'
  },
  10075: {
    hanzi: '别',
    pinyin: 'bié',
    example: '别找了，手机在这里。'
  },
  10076: {
    hanzi: '找',
    pinyin: 'zhǎo',
    example: '我在找我的手机。'
  },
  10077: {
    hanzi: '说话',
    pinyin: 'shuōhuà',
    example: '上课的时候别说话。'
  },
  10078: {
    hanzi: '女',
    pinyin: 'nǚ',
    example: '那个女孩是我妹妹。'
  },
  10079: {
    hanzi: '男',
    pinyin: 'nán',
    example: '那个男人是我老师。'
  },
  10080: {
    hanzi: '比',
    pinyin: 'bǐ',
    example: '他比我大三岁。'
  },
  10081: {
    hanzi: '岁',
    pinyin: 'suì',
    example: '我今年二十岁。'
  },
  10082: {
    hanzi: '孩子',
    pinyin: 'háizi',
    example: '那个孩子在学习说话。'
  },
  10083: {
    hanzi: '手',
    pinyin: 'shǒu',
    example: '他手里拿着一个苹果。'
  },
  10084: {
    hanzi: '铅笔',
    pinyin: 'qiānbǐ',
    example: '桌子上有一支铅笔。'
  },
  10085: {
    hanzi: '宾馆',
    pinyin: 'bīnguǎn',
    example: '我们住在这家宾馆。'
  },
  10086: {
    hanzi: '拿',
    pinyin: 'ná',
    example: '她手里拿着一把伞。'
  },
  10087: {
    hanzi: '路口',
    pinyin: 'lùkǒu',
    example: '我在前面的路口等你。'
  },
  10088: {
    hanzi: '门',
    pinyin: 'mén',
    example: '门开着呢。'
  },
  10089: {
    hanzi: '着',
    pinyin: 'zhe',
    example: '桌子上放着一本书。'
  },
  10090: {
    hanzi: '票',
    pinyin: 'piào',
    example: '我买了两张火车票。'
  },
  10091: {
    hanzi: '新年',
    pinyin: 'xīnnián',
    example: '祝你新年快乐！'
  },
  10092: {
    hanzi: '帮助',
    pinyin: 'bāngzhù',
    example: '谢谢你帮助我。'
  },
  10093: {
    hanzi: '阴',
    pinyin: 'yīn',
    example: '今天是阴天。'
  },
  10094: {
    hanzi: '火车站',
    pinyin: 'huǒchēzhàn',
    example: '我在火车站等你。'
  },
  10095: {
    hanzi: '就要',
    pinyin: 'jiùyào',
    example: '新年就要到了。'
  },
  10096: {
    hanzi: '快要',
    pinyin: 'kuàiyào',
    example: '火车快要开了。'
  },
  10097: {
    hanzi: '黑',
    pinyin: 'hēi',
    example: '天快黑了。'
  },
  10098: {
    hanzi: '白',
    pinyin: 'bái',
    example: '我喜欢黑白照片。'
  },
  10099: {
    hanzi: '服务员',
    pinyin: 'fúwùyuán',
    example: '服务员，请买单。'
  },
  10100: {
    hanzi: '等',
    pinyin: 'děng',
    example: '请等我一会儿。'
  },
  10101: {
    hanzi: '妻子',
    pinyin: 'qīzi',
    example: '他的妻子很漂亮。'
  },
  10102: {
    hanzi: '下雪',
    pinyin: 'xiàxuě',
    example: '外面正在下雪。'
  },
  10103: {
    hanzi: '房子',
    pinyin: 'fángzi',
    example: '他们买了一套新房子。'
  },
  10104: {
    hanzi: '电影院',
    pinyin: 'diànyǐngyuàn',
    example: '我们去电影院看电影。'
  },
  10105: {
    hanzi: '晴',
    pinyin: 'qíng',
    example: '明天是晴天。'
  },
  10106: {
    hanzi: '玩儿',
    pinyin: 'wánr',
    example: '孩子们在外面玩儿。'
  },
  11001: {
    hanzi: '点',
    pinyin: 'diǎn',
    example: '基本笔画：丶'
  },
  11002: {
    hanzi: '横',
    pinyin: 'héng',
    example: '基本笔画：一'
  },
  11003: {
    hanzi: '撇',
    pinyin: 'piě',
    example: '基本笔画：丿'
  },
  11004: {
    hanzi: '捺',
    pinyin: 'nà',
    example: '基本笔画：㇏'
  },
  11005: {
    hanzi: '竖',
    pinyin: 'shù',
    example: '基本笔画：丨'
  },
  11006: {
    hanzi: '竖钩',
    pinyin: 'shùgōu',
    example: '复合笔画：亅'
  },
  11007: {
    hanzi: '提',
    pinyin: 'tí',
    example: '基本笔画：㇀'
  },
  11008: {
    hanzi: '竖提',
    pinyin: 'shùtí',
    example: '复合笔画：㇙'
  },
  11009: {
    hanzi: '横折',
    pinyin: 'héngzhé',
    example: '复合笔画：𠃍'
  },
  11010: {
    hanzi: '横折钩',
    pinyin: 'héngzhégōu',
    example: '复合笔画：𠃌'
  },
  11011: {
    hanzi: '横钩',
    pinyin: 'hénggōu',
    example: '复合笔画：乛'
  },
  11012: {
    hanzi: '横撇',
    pinyin: 'héngpiě',
    example: '复合笔画：㇇'
  },
  11013: {
    hanzi: '竖弯',
    pinyin: 'shùwān',
    example: '复合笔画：㇄'
  },
  11014: {
    hanzi: '竖弯钩',
    pinyin: 'shùwāngōu',
    example: '复合笔画：乚'
  },
  11015: {
    hanzi: '斜钩',
    pinyin: 'xiégōu',
    example: '复合笔画：㇂'
  },
  11016: {
    hanzi: '卧钩',
    pinyin: 'wògōu',
    example: '复合笔画：㇃'
  },
  11017: {
    hanzi: '横折弯钩',
    pinyin: 'héngzhéwāngōu',
    example: '复合笔画：乙'
  },
  11018: {
    hanzi: '弯钩',
    pinyin: 'wāngōu',
    example: '复合笔画：㇁'
  },
  11019: {
    hanzi: '撇点',
    pinyin: 'piědiǎn',
    example: '复合笔画：𡿨'
  },
  11020: {
    hanzi: '撇折',
    pinyin: 'piězhé',
    example: '复合笔画：㇜'
  },
  11021: {
    hanzi: '竖折',
    pinyin: 'shùzhé',
    example: '复合笔画：㇗'
  },
  11022: {
    hanzi: '横折弯',
    pinyin: 'héngzhéwān',
    example: '复合笔画：㇍'
  },
  11023: {
    hanzi: '横折折撇',
    pinyin: 'héngzhézhépiě',
    example: '复合笔画：㇋'
  },
  11024: {
    hanzi: '横折折钩',
    pinyin: 'héngzhézhégōu',
    example: '复合笔画：㇌'
  },
  11025: {
    hanzi: '横折提',
    pinyin: 'héngzhétí',
    example: '复合笔画：㇊'
  },
  11026: {
    hanzi: '横撇弯钩',
    pinyin: 'héngpiěwāngōu',
    example: '复合笔画：㇌'
  },
  11027: {
    hanzi: '竖折撇',
    pinyin: 'shùzhépiě',
    example: '复合笔画：ㄣ'
  },
  11028: {
    hanzi: '竖折折钩',
    pinyin: 'shùzhézhégōu',
    example: '复合笔画：㇞'
  }
};
const repairMaterialItem = item => {
  const repair = MATERIAL_ITEM_REPAIRS[item?.id];
  if (!repair) return item;
  return {
    ...item,
    ...repair
  };
};
const repairMaterialCollection = collection => {
  const repair = MATERIAL_COLLECTION_REPAIRS[collection?.id] || {};
  return {
    ...collection,
    ...repair,
    items: (collection.items || []).map(repairMaterialItem)
  };
};
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
    return rawCollections.map(repairMaterialCollection).map((collection, index) => ({
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
const CHARACTER_MEMORY_CUES = {
  '爱': 'Imagine the middle strokes as arms pulling someone close: that warm embrace is love.',
  '吧': 'See a mouth on the left gently releasing a suggestion instead of a command.',
  '八': 'Two strokes open away from each other like eight paths spreading out.',
  '白': 'Picture a bright white window with one ray shining through the top.',
  '本': 'The short stroke marks the root of a tree: its root is its basis and origin.',
  '比': 'Two people stand side by side so you can compare them.',
  '别': 'A blade on the right separates one thing from another: do not mix them.',
  '不': 'A firm roof-line blocks the strokes below: no, it does not pass.',
  '菜': 'Grass grows on top while a hand gathers it below: vegetables for a meal.',
  '茶': 'Tea leaves grow like grass above a person resting by a little tree.',
  '车': 'See an axle crossing a compact cart: a vehicle ready to roll.',
  '吃': 'The square mouth on the left opens toward food: eat.',
  '错': 'Imagine a metal tool placed in the wrong slot: a mistake.',
  '大': 'A person stretches both arms as wide as possible: big.',
  '打': 'A hand on the left strikes a small peg: hit or make.',
  '的': 'Picture a bright target with a small mark pointing to what belongs to it.',
  '等': 'Bamboo tally slips wait in an orderly queue: wait your turn.',
  '电': 'A bolt threads through a field like electricity trapped in a circuit.',
  '店': 'A shop sits under a roof with its sign displayed inside.',
  '点': 'Four tiny sparks burn below one marked point: a dot or point.',
  '东': 'Imagine the sun caught in the branches on the eastern horizon.',
  '都': 'Everyone gathers beside the city wall: all of them are there.',
  '读': 'Words leave the mouth while a book is offered forward: read aloud.',
  '对': 'Two sides face each other and fit: the pair is correct.',
  '多': 'One evening follows another; many evenings become a long time.',
  '二': 'Two calm horizontal lines simply count two.',
  '饭': 'Food on the left returns to the bowl again and again: a meal.',
  '飞': 'Two small wings angle through the air: fly.',
  '服': 'Imagine sleeves wrapping around a person: clothes you wear.',
  '个': 'A single umbrella-like marker stands over one general item.',
  '给': 'A silk thread ties a gift to the person receiving it: give.',
  '果': 'A fruit hangs in the middle of a tree, ready to pick.',
  '号': 'A mouth calls out the number or date written beside it.',
  '好': 'A woman and child together form a warm picture of good.',
  '和': 'Grain beside a speaking mouth suggests sharing food in harmony: and.',
  '喝': 'A mouth on the left leans toward a covered cup: drink.',
  '黑': 'A darkened window stands above glowing embers: black after the fire.',
  '很': 'A walking step presses forward strongly: very.',
  '横': 'A long level bridge runs from left to right: the horizontal stroke.',
  '后': 'Imagine turning around to see the opening behind you: after or behind.',
  '话': 'Speech rises from the mouth like a tongue telling words.',
  '欢': 'A person opens up with delight, welcoming joy.',
  '回': 'A small enclosure sits inside a larger one: go out and return home.',
  '会': 'People gather under one roof and discover what they can do together.',
  '火': 'The two side sparks leap from a central flame: fire.',
  '几': 'A small table asks how many things can fit on it.',
  '机': 'A wooden frame holds a moving mechanism: a machine.',
  '家': 'A roof shelters the family inside: home.',
  '见': 'An eye-like head walks forward on two legs: go and see.',
  '件': 'A person stands beside a cow-sized item: one piece or item.',
  '觉': 'A covered head rests while awareness fades: sleep or feel.',
  '叫': 'A mouth calls loudly toward someone: to call.',
  '接': 'A hand reaches out to meet, answer, or pick someone up.',
  '就': 'Move straight toward the nearby goal: then, just there.',
  '九': 'A curling hook finishes the count just before ten: nine.',
  '开': 'Two doors swing apart around the center: open.',
  '看': 'A hand shades an eye while it looks into the distance: look or watch.',
  '块': 'Imagine one compact block of jade or one chunk of money.',
  '来': 'A figure with open arms approaches you: come.',
  '了': 'A simple hooked path closes an action: it is completed.',
  '冷': 'Two drops of ice stand beside a person receiving the cold.',
  '离': 'A patterned bird lifts away from the ground: distance and separation.',
  '里': 'A field sits over earth, marking the area inside.',
  '亮': 'A high window under a roof shines brightly into the room.',
  '零': 'Rain falls in tiny scattered drops until almost nothing remains: zero.',
  '六': 'A roof covers four small points; count them into six.',
  '路': 'A foot follows each sign along the road.',
  '吗': 'A mouth adds a light question to the horse-shaped sound beside it.',
  '买': 'Imagine a shopping bag hanging below a price mark: buy.',
  '忙': 'The heart rushes toward something disappearing: busy.',
  '猫': 'An animal crouches beside tall field sprouts: a cat stalking quietly.',
  '没': 'Water washes over a hand until the thing is gone: not there.',
  '每': 'A small mark repeats inside the form: every single time.',
  '门': 'The character itself is a pair of tall doorposts: a door.',
  '拿': 'Join things together above a hand and hold them: take.',
  '捺': 'A hand presses a stroke down and out to the right: the falling stroke.',
  '哪': 'A questioning mouth points toward one choice: which one?',
  '男': 'Strength works in the field: a traditional picture for a man.',
  '脑': 'The flesh radical guards a box of crossing thoughts: the brain.',
  '呢': 'A mouth leaves the thought hanging gently: and what about it?',
  '能': 'Imagine a powerful creature with tools ready: it can do the job.',
  '你': 'A person on the left points to the small figure opposite: you.',
  '年': 'A harvest is carried upright through the seasons: one year.',
  '女': 'A seated figure with crossed legs forms the traditional sign for woman.',
  '漂': 'Water carries something light past a marker: float, then look pretty.',
  '票': 'A marked slip rides above a little altar: a ticket.',
  '撇': 'A hand sweeps the stroke down to the left like brushing dust away.',
  '气': 'A curling breath rises in layers: air or gas.',
  '起': 'Feet start moving while the body rises: get up and begin.',
  '七': 'A bent line cuts across the horizontal: seven.',
  '钱': 'Metal coins gather on the left of a shallow mark: money.',
  '晴': 'The sun stands beside clear blue-green light: a sunny day.',
  '请': 'Speech is offered with a clear, respectful heart: please.',
  '去': 'A figure leaves the ground and moves away: go.',
  '热': 'Hands work above four glowing embers: hot.',
  '人': 'Two simple legs stride forward: a person.',
  '认': 'Words on the left help a person recognize someone.',
  '三': 'Three even horizontal lines count three.',
  '上': 'A short mark sits above the baseline: up or above.',
  '少': 'Small strokes scatter away until only a few remain.',
  '谁': 'A speech radical asks about the person standing beside it: who?',
  '身': 'A side-view figure curves around its own body.',
  '生': 'A fresh shoot pushes through the soil: life and birth.',
  '识': 'Words enter the mind and become knowledge: know.',
  '十': 'One vertical crosses one horizontal to complete ten.',
  '视': 'An eye looks past a sign: view or watch.',
  '是': 'The sun shines above a straight path: this is the right one.',
  '手': 'The hooked strokes spread like fingers from a palm: hand.',
  '竖': 'The stroke stands upright like a bamboo pole: vertical.',
  '书': 'Imagine pages bound around a central spine: a book.',
  '睡': 'An eye droops beside hanging branches: sleep.',
  '水': 'A central stream splashes into two side currents: water.',
  '说': 'Words leave the mouth and open into explanation: speak.',
  '四': 'Four corners sit inside a box: four.',
  '送': 'A gift travels along the road radical: deliver or give.',
  '岁': 'A small mountain watches one more evening pass: a year of age.',
  '他': 'A person stands beside another figure: he or him.',
  '她': 'The woman radical marks the person as she or her.',
  '太': 'A person is already big, then one dot makes it too much.',
  '提': 'A hand lifts something toward the correct path: raise.',
  '体': 'A person stands beside their root and foundation: the body.',
  '天': 'A line stretches above a big person: the sky overhead.',
  '听': 'A mouth and attentive ear lean toward a sound: listen.',
  '同': 'Different strokes share one enclosure and one mouth: same together.',
  '完': 'Everything under the roof reaches its final state: finish.',
  '喂': 'A mouth calls across the distance: hello, are you there?',
  '问': 'A mouth speaks from inside a doorway: ask a question.',
  '我': 'Imagine holding a tool close and pointing back to yourself: I.',
  '午': 'The sun has climbed to the central crossing: noon.',
  '五': 'A weaving line joins top and bottom as the fifth count.',
  '习': 'One light wing repeats its movement: practice.',
  '喜': 'A drum and a smiling mouth celebrate together: happiness.',
  '西': 'The sun settles into a basket-like horizon in the west.',
  '下': 'A short mark hangs below the baseline: down or below.',
  '先': 'A person steps ahead of the others: first.',
  '想': 'A picture forms above the heart: to think or want.',
  '校': 'A wooden building where people exchange knowledge: school.',
  '小': 'One tiny center stroke with two small sides: little.',
  '写': 'A hand-like roof guides marks onto the page: write.',
  '些': 'A small pile gathers at the bottom: some.',
  '学': 'A child learns under a roof while ideas sparkle above.',
  '衣': 'The strokes drape around the center like a robe: clothes.',
  '一': 'One unbroken horizontal line counts one.',
  '阴': 'A hill blocks the moonlight, leaving the shaded side cloudy.',
  '影': 'Sunlight beside a scene casts three trailing shadows: shadow or film.',
  '有': 'A hand reaches down and holds something: have.',
  '鱼': 'A fish head, body, and tail stack into one swimming shape.',
  '雨': 'Drops fall from a cloud-shaped roof: rain.',
  '远': 'A long road carries the traveler far away.',
  '月': 'The curved frame holds two pale bands like the moon.',
  '在': 'A marker presses into the ground to show where something is: at.',
  '找': 'A hand searches while holding a small tool: look for.',
  '着': 'The eye watches a state continue without ending.',
  '真': 'Ten eyes inspect the hidden detail until it is truly clear.',
  '住': 'A person stops beside a fixed marker: live or stay.',
  '字': 'A child under a roof studies a written character.',
  '走': 'A foot follows a long path forward: walk.',
  '最': 'The sun watches an ear take the top prize: the most.',
  '做': 'A person works through an old task: do or make.',
  '坐': 'Two people sit together on the ground: sit.'
};
const COMPONENT_GLOSSES = {
  '爸': 'dad',
  '班': 'work shift',
  '帮': 'help',
  '报': 'report',
  '杯': 'cup',
  '北': 'north',
  '备': 'prepare',
  '笔': 'writing brush',
  '边': 'side',
  '表': 'watch',
  '宾': 'guest',
  '病': 'illness',
  '步': 'step',
  '场': 'open ground',
  '唱': 'sing',
  '出': 'exit',
  '床': 'bed',
  '蛋': 'egg',
  '第': 'sequence marker',
  '动': 'move',
  '儿': 'child',
  '房': 'house',
  '啡': 'coffee sound',
  '分': 'divide; minute',
  '夫': 'husband',
  '高': 'high',
  '歌': 'song',
  '工': 'work',
  '公': 'public',
  '钩': 'hook',
  '瓜': 'melon',
  '关': 'connection',
  '馆': 'building',
  '国': 'country',
  '孩': 'child',
  '汉': 'Chinese',
  '红': 'red',
  '候': 'wait; time',
  '鸡': 'chicken',
  '间': 'space; interval',
  '教': 'teach',
  '姐': 'older sister',
  '介': 'introduce',
  '今': 'now; today',
  '京': 'capital',
  '睛': 'eye',
  '咖': 'coffee sound',
  '考': 'test',
  '客': 'guest',
  '口': 'mouth; opening',
  '快': 'quick',
  '篮': 'basket',
  '老': 'old; respected',
  '旅': 'journey',
  '妈': 'mom',
  '么': 'question ending',
  '们': 'plural people',
  '米': 'rice grain',
  '面': 'face; side',
  '名': 'name',
  '明': 'bright; tomorrow',
  '那': 'that',
  '奶': 'milk',
  '牛': 'cow',
  '旁': 'beside',
  '跑': 'run',
  '朋': 'companion',
  '苹': 'apple',
  '妻': 'wife',
  '期': 'period; week',
  '铅': 'lead',
  '前': 'front',
  '球': 'ball',
  '日': 'sun; day',
  '色': 'color',
  '商': 'commerce',
  '绍': 'continue; introduce',
  '什': 'what',
  '师': 'teacher',
  '时': 'time',
  '试': 'test',
  '室': 'room',
  '司': 'manage',
  '踢': 'kick',
  '题': 'question',
  '跳': 'jump',
  '弯': 'bend',
  '玩': 'play',
  '晚': 'evening',
  '为': 'for; why',
  '卧': 'lie down',
  '舞': 'dance',
  '务': 'service',
  '息': 'rest; breath',
  '系': 'connection',
  '现': 'present; appear',
  '斜': 'slant',
  '谢': 'thank',
  '新': 'new',
  '星': 'star; week',
  '兴': 'joy',
  '休': 'rest',
  '雪': 'snow',
  '眼': 'eye',
  '样': 'manner',
  '药': 'medicine',
  '要': 'want; about to',
  '医': 'medicine; doctor',
  '椅': 'chair',
  '游': 'travel; swim',
  '友': 'friend',
  '语': 'language',
  '员': 'member; worker',
  '院': 'courtyard; institution',
  '运': 'move; transport',
  '再': 'again',
  '早': 'early',
  '怎': 'how',
  '站': 'station; stand',
  '丈': 'adult man',
  '折': 'bend',
  '这': 'this',
  '正': 'right now; upright',
  '纸': 'paper',
  '中': 'middle; China',
  '钟': 'clock',
  '助': 'help',
  '准': 'prepare; accurate',
  '桌': 'table',
  '子': 'child; noun ending',
  '租': 'rent',
  '足': 'foot',
  '昨': 'yesterday',
  '作': 'work; make'
};
const MEMORY_CATEGORY_RULES = [['nature', /sky|weather|rain|snow|sun|moon|cloud|water|fire|hot|cold|air|fruit|vegetable|fish|cat|animal|tree|flower|east|west|north|bright|black|white/i], ['number', /one|two|three|four|five|six|seven|eight|nine|ten|zero|how many|money|yuan|age|count|measure word/i], ['time', /time|year|month|day|week|today|tomorrow|yesterday|morning|noon|afternoon|evening|minute|date|now/i], ['place', /home|school|hospital|store|shop|restaurant|hotel|station|airport|room|inside|road|Beijing|China|company|cinema/i], ['language', /speak|say|read|write|listen|ask|answer|word|language|character|question|name|call|please|thank/i], ['person', /person|people|man|woman|girl|boy|mother|father|mom|dad|son|daughter|wife|husband|teacher|student|friend|classmate|doctor|waiter|he|she|you|I;|me|body|hand|eye|brain/i], ['action', /go|come|walk|run|fly|sit|ride|eat|drink|buy|look|watch|see|meet|learn|study|practice|work|play|dance|sing|sleep|open|drive|give|take|hold|find|wait|finish|help|prepare|travel|kick|do|make/i], ['object', /book|clothes|car|vehicle|machine|phone|computer|ticket|tea|rice|meal|cup|table|chair|newspaper|pencil|watch|movie|ball/i]];
const cleanMemoryMeaning = (meaning = '') => meaning.split(/[;\/]/)[0].replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
const getMemoryCategory = meaning => MEMORY_CATEGORY_RULES.find(([, pattern]) => pattern.test(meaning || ''))?.[0] || 'abstract';
const CHARACTER_GLOSSES = (() => {
  const glosses = new Map(Object.entries(COMPONENT_GLOSSES));
  STUDY_CATALOG.forEach(item => {
    if (Array.from(item.hanzi || '').length === 1 && item.meaning) {
      glosses.set(item.hanzi, cleanMemoryMeaning(item.meaning));
    }
  });
  return glosses;
})();
const getCharacterMemory = item => {
  const hanzi = item?.hanzi || '';
  const parentheticalForm = hanzi.match(/（([^）]+)）/u)?.[1];
  const locationFormMeaning = parentheticalForm ? {
    '这': 'here',
    '那': 'there',
    '哪': 'where'
  }[parentheticalForm[0]] || '' : '';
  const meaning = locationFormMeaning || cleanMemoryMeaning(item?.meaning || 'this meaning');
  const characters = Array.from(parentheticalForm || hanzi).filter(character => /[\u3400-\u9fff]/u.test(character));
  const parts = characters.slice(0, 4).map((character, index) => ({
    character,
    gloss: character === '儿' && index === characters.length - 1 && locationFormMeaning ? 'place suffix' : CHARACTER_GLOSSES.get(character) || 'picture cue'
  }));
  const isSingle = characters.length === 1;
  const isRepeatedWord = parts.length > 1 && parts.every(part => part.character === parts[0].character);
  return {
    category: getMemoryCategory(item?.meaning),
    isSingle,
    parts,
    title: isSingle ? 'Shape story' : 'Build the word',
    story: isSingle ? CHARACTER_MEMORY_CUES[hanzi] || `Let the silhouette of ${hanzi} become a small sign for “${meaning}”.` : isRepeatedWord ? `Repeat ${parts[0].character} (${parts[0].gloss}) like calling it twice; the familiar echo becomes “${meaning}”.` : `Picture ${parts.map(part => `${part.character} (${part.gloss})`).join(' meeting ')}. Read the scene from left to right and land on “${meaning}”.`
  };
};
function MemorySceneSvg({
  item,
  memory
}) {
  const parts = memory.parts.length > 0 ? memory.parts : [{
    character: item.hanzi,
    gloss: ''
  }];
  const partWidth = parts.length === 1 ? 72 : 52;
  const gap = parts.length === 1 ? 0 : 8;
  const groupWidth = partWidth * parts.length + gap * Math.max(0, parts.length - 1);
  const startX = 120 - groupWidth / 2;
  const accent = memory.category === 'nature' ? '#07a653' : memory.category === 'time' ? '#d99a18' : memory.category === 'language' ? '#1677ff' : memory.category === 'action' ? '#ef4b3e' : '#168b69';
  return React.createElement("svg", {
    className: "memory-scene-svg",
    viewBox: "0 0 240 132",
    role: "img",
    "aria-label": `${item.hanzi}: ${memory.story}`
  }, React.createElement("rect", {
    x: "1",
    y: "1",
    width: "238",
    height: "130",
    rx: "7",
    fill: "#f7fbf8",
    stroke: "#dce9e2"
  }), React.createElement("circle", {
    cx: "202",
    cy: "24",
    r: "13",
    fill: memory.category === 'time' ? '#ffd76a' : '#ffe2a8',
    opacity: "0.82"
  }), React.createElement("path", {
    d: "M0 101 C34 80 55 96 82 82 C112 65 136 96 165 77 C190 61 213 78 240 61 V132 H0 Z",
    fill: "#dff3e8"
  }), React.createElement("path", {
    d: "M0 114 C35 98 65 112 96 99 C130 84 165 112 195 96 C213 87 228 89 240 84 V132 H0 Z",
    fill: "#c9ead9"
  }), memory.category === 'language' && React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M26 28 h40 a8 8 0 0 1 8 8 v12 a8 8 0 0 1-8 8 H48 l-9 8 2-8 H26 a8 8 0 0 1-8-8 V36 a8 8 0 0 1 8-8Z",
    fill: "#dbeaff"
  }), React.createElement("circle", {
    cx: "34",
    cy: "42",
    r: "2.5",
    fill: "#1677ff"
  }), React.createElement("circle", {
    cx: "46",
    cy: "42",
    r: "2.5",
    fill: "#1677ff"
  }), React.createElement("circle", {
    cx: "58",
    cy: "42",
    r: "2.5",
    fill: "#1677ff"
  })), memory.category === 'number' && React.createElement("g", {
    stroke: "#d99a18",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M20 28 h48 M20 38 h48 M20 48 h48 M25 22 v34 M63 22 v34"
  }), React.createElement("circle", {
    cx: "35",
    cy: "28",
    r: "4",
    fill: "#ffd76a",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "51",
    cy: "38",
    r: "4",
    fill: "#ffd76a",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "40",
    cy: "48",
    r: "4",
    fill: "#ffd76a",
    stroke: "none"
  })), memory.category === 'place' && React.createElement("g", {
    fill: "none",
    stroke: "#168b69",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M20 51 h53 M27 50 l8-17 h24 l8 17 M34 51 v19 M59 51 v19 M27 70 h40"
  })), memory.category === 'action' && React.createElement("g", {
    fill: "none",
    stroke: "#ef4b3e",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M18 61 C33 37 50 66 70 35",
    strokeDasharray: "5 6"
  }), React.createElement("path", {
    d: "m61 36 10-2-3 10"
  })), memory.category === 'person' && React.createElement("g", {
    fill: "#ffd8c8",
    stroke: "#bd6d55",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "35",
    cy: "37",
    r: "10"
  }), React.createElement("path", {
    d: "M20 68 q15-25 30 0Z"
  }), React.createElement("circle", {
    cx: "63",
    cy: "42",
    r: "8"
  }), React.createElement("path", {
    d: "M52 68 q11-20 22 0Z"
  })), memory.category === 'object' && React.createElement("g", {
    fill: "#dbeaff",
    stroke: "#1677ff",
    strokeWidth: "2"
  }, React.createElement("rect", {
    x: "20",
    y: "31",
    width: "48",
    height: "34",
    rx: "5"
  }), React.createElement("path", {
    d: "M29 40 h30 M29 49 h22 M29 58 h26"
  })), memory.category === 'nature' && React.createElement("g", {
    fill: "none",
    stroke: "#168b69",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M14 69 34 34 47 55 57 42 76 69"
  }), React.createElement("path", {
    d: "M20 76 q25-12 52 0",
    stroke: "#1677ff"
  })), memory.category === 'time' && React.createElement("g", {
    fill: "#fff7dc",
    stroke: "#d99a18",
    strokeWidth: "2.5"
  }, React.createElement("circle", {
    cx: "45",
    cy: "49",
    r: "22"
  }), React.createElement("path", {
    d: "M45 34 v16 l11 7",
    fill: "none",
    strokeLinecap: "round"
  })), memory.category === 'abstract' && React.createElement("g", {
    fill: "none",
    stroke: "#8b6fb1",
    strokeWidth: "3"
  }, React.createElement("path", {
    d: "M22 48 c0-22 31-22 31 0s-31 22-31 0Z"
  }), React.createElement("path", {
    d: "M41 31 c21-7 34 18 17 31"
  })), React.createElement("path", {
    d: `M${startX - 7} 83 H${startX + groupWidth + 7}`,
    stroke: accent,
    strokeWidth: "2",
    strokeDasharray: "3 5",
    opacity: "0.5"
  }), parts.map((part, index) => {
    const x = startX + index * (partWidth + gap);
    return React.createElement("g", {
      key: `${part.character}-${index}`,
      transform: `translate(${x} 42)`
    }, React.createElement("rect", {
      width: partWidth,
      height: "58",
      rx: "7",
      fill: "#ffffff",
      stroke: index === parts.length - 1 ? accent : '#cddfd6',
      strokeWidth: "1.5"
    }), React.createElement("text", {
      x: partWidth / 2,
      y: "39",
      textAnchor: "middle",
      fill: "#173126",
      fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif",
      fontSize: parts.length === 1 ? '36' : '29',
      fontWeight: "900"
    }, part.character), parts.length > 1 && index < parts.length - 1 && React.createElement("text", {
      x: partWidth + 4,
      y: "35",
      fill: accent,
      fontSize: "13",
      fontWeight: "900"
    }, "+"));
  }), React.createElement("g", {
    transform: "translate(195 94)"
  }, React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "15",
    fill: "#ffffff",
    stroke: "#18212b",
    strokeWidth: "2"
  }), React.createElement("circle", {
    cx: "8",
    cy: "6",
    r: "6",
    fill: "#18212b"
  }), React.createElement("circle", {
    cx: "26",
    cy: "6",
    r: "6",
    fill: "#18212b"
  }), React.createElement("ellipse", {
    cx: "17",
    cy: "19",
    rx: "10",
    ry: "8",
    fill: "#f7fbf8"
  }), React.createElement("circle", {
    cx: "13",
    cy: "16",
    r: "2",
    fill: "#18212b"
  }), React.createElement("circle", {
    cx: "21",
    cy: "16",
    r: "2",
    fill: "#18212b"
  }), React.createElement("path", {
    d: "M14 22 q3 3 6 0",
    fill: "none",
    stroke: "#18212b",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), React.createElement("g", {
    transform: "translate(12 101)"
  }, React.createElement("rect", {
    width: "25",
    height: "25",
    rx: "4",
    fill: "#ef4b3e"
  }), React.createElement("text", {
    x: "12.5",
    y: "18",
    textAnchor: "middle",
    fill: "#fff",
    fontFamily: "Microsoft YaHei, PingFang SC, sans-serif",
    fontSize: "14",
    fontWeight: "900"
  }, "\u8BB0")));
}
function MemoryScroll({
  item,
  t,
  compact = false
}) {
  const memory = React.useMemo(() => getCharacterMemory(item), [item]);
  return React.createElement("aside", {
    className: `memory-scroll ${compact ? 'memory-scroll-compact' : ''}`
  }, React.createElement("div", {
    className: "memory-scroll-heading"
  }, React.createElement("span", {
    className: "memory-scroll-seal"
  }, "\u8BB0"), React.createElement("div", null, React.createElement("strong", null, t('memory.title')), React.createElement("span", null, memory.isSingle ? t('memory.shape') : t('memory.build')))), React.createElement(MemorySceneSvg, {
    item: item,
    memory: memory
  }), memory.parts.length > 1 && React.createElement("div", {
    className: "memory-parts",
    "aria-label": t('memory.parts')
  }, memory.parts.map((part, index) => React.createElement("span", {
    key: `${part.character}-${index}`
  }, React.createElement("b", null, part.character), part.gloss))), React.createElement("p", null, memory.story), React.createElement("small", null, t('memory.note')));
}
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
    'memory.title': '记忆小卷',
    'memory.shape': '字形联想',
    'memory.build': '拆字记忆',
    'memory.parts': '组成部分',
    'memory.note': '联想辅助，并非字源说明。',
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
    'stats.offline': '\u79bb\u7ebf\u5b66\u4e60',
    'stats.offlineTitle': '\u5b8c\u6574\u79bb\u7ebf\u7248',
    'stats.offlineHint': '\u9002\u5408\u98de\u884c\u548c\u65c5\u884c',
    'stats.offlineDownload': '\u4e0b\u8f7d\u79bb\u7ebf ZIP',
    'stats.offlineReady': '\u79bb\u7ebf\u7248\u5df2\u542f\u7528',
    'stats.reset': '重置进度',
    'stats.confirmReset': '确定要重置全部学习进度吗？此操作不能撤销。',
    'stats.invalidBackup': '备份文件格式不正确。',
    'stats.confirmImport': '导入 {date} 的备份？\n\n这会替换当前学习进度。',
    'stats.importOk': '进度导入成功',
    'stats.importFail': '读取备份文件失败。',
    'secret.back': '返回主页',
    'secret.print': '打印',
    'secret.badge': '私藏总表 · 完整版',
    'secret.title': '汉语综合速查表',
    'secret.subtitle': '数字、时间、语法、量词和全部课程词汇，集中在一个页面。',
    'secret.uniqueWords': '不重复词条',
    'secret.collections': '资料集合',
    'secret.patterns': '语法结构',
    'secret.numberForms': '数字形式',
    'secret.contents': '目录',
    'secret.numbers': '数字',
    'secret.numbersHint': '基础数字、位值和二 / 两的区别',
    'secret.time': '时间与日期',
    'secret.timeHint': '年、月、日期、星期、时间、年龄和金额',
    'secret.essentials': '基础速查',
    'secret.essentialsHint': '量词、疑问词和声调变化',
    'secret.measureWords': '常用量词',
    'secret.questions': '疑问词',
    'secret.grammar': '核心语法',
    'secret.grammarHint': 'HSK1、HSK2 与课堂资料中的高频结构',
    'secret.vocabulary': '完整词汇',
    'secret.vocabularyHint': '所有资料集合去重后汇总',
    'secret.search': '搜索汉字、拼音或英文释义',
    'secret.all': '全部',
    'secret.results': '{count} 个词条',
    'secret.empty': '没有符合条件的词条。',
    'secret.footer': '浏览器本地运行 · 无外部 API'
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
    'memory.title': 'Memory scroll',
    'memory.shape': 'Shape story',
    'memory.build': 'Build the word',
    'memory.parts': 'Character parts',
    'memory.note': 'A memory aid, not a claim about character history.',
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
    'stats.offline': 'Offline learning',
    'stats.offlineTitle': 'Complete offline app',
    'stats.offlineHint': 'Ready for flights and travel',
    'stats.offlineDownload': 'Download offline ZIP',
    'stats.offlineReady': 'Offline copy active',
    'stats.reset': 'Reset progress',
    'stats.confirmReset': 'Reset all learning progress? This cannot be undone.',
    'stats.invalidBackup': 'This backup file has the wrong format.',
    'stats.confirmImport': 'Import backup from {date}?\n\nThis will replace current learning progress.',
    'stats.importOk': 'Progress imported',
    'stats.importFail': 'Could not read the backup file.',
    'secret.back': 'Back home',
    'secret.print': 'Print',
    'secret.badge': 'SECRET · COMPLETE',
    'secret.title': 'Chinese master cheat sheet',
    'secret.subtitle': 'Numbers, time, grammar, measure words, and every course vocabulary item in one place.',
    'secret.uniqueWords': 'unique entries',
    'secret.collections': 'source collections',
    'secret.patterns': 'grammar patterns',
    'secret.numberForms': 'number forms',
    'secret.contents': 'Contents',
    'secret.numbers': 'Numbers',
    'secret.numbersHint': 'Core numbers, place values, and 二 vs. 两',
    'secret.time': 'Time & dates',
    'secret.timeHint': 'Years, months, dates, weekdays, clock time, age, and money',
    'secret.essentials': 'Essentials',
    'secret.essentialsHint': 'Measure words, question words, and tone changes',
    'secret.measureWords': 'Measure words',
    'secret.questions': 'Question words',
    'secret.grammar': 'Core grammar',
    'secret.grammarHint': 'High-frequency patterns from HSK1, HSK2, and the supplied lessons',
    'secret.vocabulary': 'Complete vocabulary',
    'secret.vocabularyHint': 'Deduplicated across every source collection',
    'secret.search': 'Search hanzi, pinyin, or English meaning',
    'secret.all': 'All',
    'secret.results': '{count} entries',
    'secret.empty': 'No entries match this filter.',
    'secret.footer': 'Browser-local · no external APIs'
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
  return 'en';
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
const styles = "  /* ===== MINI-PROGRAM BASE SYSTEM ===== */\n  :root {\n    --bg-primary: #f5f7f6;\n    --bg-secondary: #eef7f3;\n    --bg-card: #ffffff;\n    --accent-lime: #07c160;\n    --accent-coral: #f24848;\n    --accent-cyan: #1677ff;\n    --accent-purple: #d99a18;\n    --text-primary: #18212b;\n    --text-secondary: #697780;\n    --border-width: 1px;\n    --border-color: #dce7e2;\n    --radius: 8px;\n    --shadow-offset: 0px;\n    --transition-fast: 0.18s ease;\n    --transition-bounce: 0.38s cubic-bezier(0.2, 0.9, 0.2, 1.2);\n  }\n\n  body {\n    background: linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 38%, #f7f8fb 100%);\n    color: var(--text-primary);\n    overflow-x: hidden;\n  }\n\n  html,\n  body,\n  #root {\n    width: 100%;\n    max-width: 100%;\n    overflow-x: hidden;\n  }\n\n  .app-container {\n    position: relative;\n    min-height: 100vh;\n    min-height: 100dvh;\n    width: 100%;\n    max-width: 100vw;\n    background:\n      radial-gradient(circle at 18% 8%, rgba(7, 193, 96, 0.16), transparent 28%),\n      radial-gradient(circle at 86% 12%, rgba(22, 119, 255, 0.14), transparent 24%),\n      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 42%, #f9faf8 100%);\n    color: var(--text-primary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    overflow-x: hidden;\n  }\n\n  .screen {\n    width: min(calc(100vw - 24px), 460px);\n    max-width: 460px;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: 0 auto;\n    padding: 18px;\n    padding-bottom: calc(92px + env(safe-area-inset-bottom, 20px));\n    box-sizing: border-box;\n  }\n\n  .screen *,\n  .app-bottom-nav,\n  .app-bottom-nav * {\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 768px) {\n    .screen {\n      max-width: 480px;\n      padding: 24px;\n      padding-bottom: 110px;\n    }\n  }\n\n  .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    padding: 10px 0 14px;\n    margin-bottom: 10px;\n  }\n\n  .logo {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    color: #0d1f17;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 30px;\n    font-weight: 900;\n    letter-spacing: 0;\n    user-select: none;\n  }\n\n  .back-btn {\n    min-height: 40px;\n    padding: 9px 14px;\n    border: 1px solid rgba(7, 193, 96, 0.2);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.82);\n    color: var(--text-primary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 800;\n    transition: transform var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);\n    white-space: nowrap;\n  }\n\n  .card {\n    position: relative;\n    margin-bottom: 14px;\n    padding: 18px;\n    overflow: hidden;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.94);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);\n  }\n\n  .card-clickable {\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .card-clickable:active,\n  .btn:active,\n  .back-btn:active {\n    transform: scale(0.985);\n    box-shadow: 0 5px 14px rgba(20, 49, 35, 0.08);\n  }\n\n  @media (hover: hover) {\n    .card-clickable:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 14px 34px rgba(20, 49, 35, 0.12);\n    }\n\n    .btn-secondary:hover,\n    .back-btn:hover {\n      background: #ecfff5;\n      color: #06783d;\n    }\n  }\n\n  .card-accent-lime,\n  .card-accent-cyan,\n  .card-accent-coral,\n  .card-accent-purple {\n    border-color: rgba(24, 33, 43, 0.08);\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.1);\n  }\n\n  .title-hero,\n  .title-xl,\n  .title-lg,\n  .title-md {\n    margin: 0;\n    color: #14251c;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-weight: 900;\n    line-height: 1.12;\n    letter-spacing: 0;\n  }\n\n  .title-hero {\n    font-size: clamp(38px, 12vw, 50px);\n    background: linear-gradient(135deg, #07c160 0%, #1677ff 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  .title-xl { font-size: clamp(28px, 8vw, 36px); }\n  .title-lg { font-size: clamp(20px, 5.6vw, 26px); }\n  .title-md { font-size: 15px; }\n\n  .text-sm {\n    margin: 0;\n    color: var(--text-secondary);\n    font-size: 12px;\n    line-height: 1.45;\n    letter-spacing: 0;\n  }\n\n  .text-accent { color: var(--accent-lime); }\n\n  .stats-bar,\n  .draw-stats {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n    margin-bottom: 24px;\n  }\n\n  .stat-item,\n  .draw-stat {\n    padding: 12px 8px;\n    text-align: center;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.76);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .stat-value,\n  .draw-stat-value,\n  .score-value,\n  .lesson-number,\n  .text-accent {\n    color: var(--accent-lime);\n  }\n\n  .stat-value,\n  .draw-stat-value,\n  .lesson-number,\n  .score-value {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-weight: 900;\n    line-height: 1;\n  }\n\n  .stat-value,\n  .lesson-number { font-size: 34px; }\n  .draw-stat-value { font-size: 24px; }\n\n  .stat-label,\n  .draw-stat-label,\n  .score-label {\n    margin-top: 4px;\n    color: var(--text-secondary);\n    font-size: 10px;\n    line-height: 1.3;\n    letter-spacing: 0;\n  }\n\n  .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    min-height: 50px;\n    padding: 13px 18px;\n    border: 1px solid transparent;\n    border-radius: var(--radius);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 15px;\n    font-weight: 900;\n    letter-spacing: 0;\n    text-decoration: none;\n    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .btn-primary {\n    background: linear-gradient(135deg, #07c160, #0aa75a);\n    color: #fff;\n    box-shadow: 0 10px 22px rgba(7, 193, 96, 0.24);\n  }\n\n  .btn-secondary {\n    background: #ffffff;\n    color: #1677ff;\n    border-color: rgba(22, 119, 255, 0.16);\n  }\n\n  .btn-coral {\n    background: #fff1f0;\n    color: #cf2b2b;\n    border-color: #ffd2cf;\n  }\n\n  .btn:disabled {\n    opacity: 0.45;\n    cursor: not-allowed;\n  }\n\n  .hanzi-display {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'SimSun', sans-serif;\n    font-weight: 900;\n  }\n\n  .hanzi-hero {\n    padding: 16px;\n    font-size: clamp(96px, 28vw, 128px);\n    line-height: 1;\n    text-align: center;\n    animation: hanziFloat 5s ease-in-out infinite;\n  }\n\n  .hanzi-xl {\n    padding: 12px;\n    font-size: clamp(60px, 18vw, 84px);\n    line-height: 1;\n    text-align: center;\n  }\n\n  .hanzi-word {\n    max-width: 100%;\n    font-size: clamp(46px, 14vw, 88px);\n    line-height: 1.05;\n    overflow-wrap: anywhere;\n  }\n\n  .hanzi-lg { font-size: clamp(48px, 14vw, 64px); line-height: 1; }\n  .hanzi-md { font-size: clamp(28px, 8vw, 36px); line-height: 1; }\n\n  .progress-bar {\n    width: 100%;\n    height: 8px;\n    margin: 16px 0;\n    overflow: hidden;\n    border-radius: 999px;\n    background: #e3ebe7;\n  }\n\n  .progress-fill {\n    height: 100%;\n    border-radius: 999px;\n    background: linear-gradient(90deg, #07c160, #1677ff);\n    transition: width 0.4s ease-out;\n  }\n\n  .menu-grid {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n  }\n\n  .menu-item {\n    min-height: 112px;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  .menu-icon {\n    width: 52px;\n    height: 52px;\n    display: grid;\n    place-items: center;\n    border-radius: 16px;\n    background: linear-gradient(135deg, rgba(7, 193, 96, 0.14), rgba(22, 119, 255, 0.14));\n    font-size: 28px;\n  }\n\n  .menu-label {\n    font-size: 13px;\n    font-weight: 900;\n  }\n\n  .streak-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    padding: 8px 14px;\n    border: 1px solid #ffe2a8;\n    border-radius: var(--radius);\n    background: #fff7e6;\n    color: #9a6400;\n    font-size: 15px;\n    font-weight: 900;\n  }\n\n  .canvas-container,\n  .hanzi-writer-container {\n    position: relative;\n    width: 100%;\n    aspect-ratio: 1;\n    margin: 16px 0;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: #fff;\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    touch-action: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .drawing-canvas {\n    width: 100%;\n    height: 100%;\n    display: block;\n    touch-action: none;\n  }\n\n  .canvas-guide {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: rgba(7, 193, 96, 0.1);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: clamp(150px, 45vw, 200px);\n    font-weight: 900;\n    line-height: 1;\n    pointer-events: none;\n    user-select: none;\n  }\n\n  .canvas-controls,\n  .nav-actions {\n    display: flex;\n    gap: 10px;\n  }\n\n  .canvas-controls .btn,\n  .nav-actions .btn {\n    flex: 1;\n  }\n\n  .draw-mode-selector {\n    display: flex;\n    gap: 8px;\n    margin-bottom: 16px;\n  }\n\n  .draw-mode-btn {\n    flex: 1;\n    min-height: 46px;\n    padding: 10px 8px;\n    border: 0;\n    border-radius: var(--radius);\n    background: transparent;\n    color: #65737d;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 900;\n    letter-spacing: 0;\n    transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);\n  }\n\n  .draw-mode-btn.active {\n    background: #07c160;\n    color: #fff;\n    box-shadow: 0 7px 16px rgba(7, 193, 96, 0.2);\n  }\n\n  .hanzi-writer-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .hanzi-writer-container svg {\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  .stroke-counter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    margin: 12px 0;\n    font-size: 14px;\n  }\n\n  .stroke-dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: #d8e6df;\n    transition: all 0.2s ease;\n  }\n\n  .stroke-dot.completed { background: #07c160; }\n  .stroke-dot.current { background: #1677ff; transform: scale(1.3); }\n  .stroke-dot.error { background: #f24848; }\n\n  .draw-feedback {\n    position: absolute;\n    left: 12px;\n    right: 12px;\n    bottom: 12px;\n    z-index: 5;\n    padding: 12px;\n    border: 1px solid;\n    border-radius: var(--radius);\n    text-align: center;\n    font-size: 15px;\n    font-weight: 900;\n    pointer-events: none;\n    animation: feedbackPop 0.3s ease-out;\n  }\n\n  .draw-feedback.success {\n    background: #e8fff3;\n    color: #087541;\n    border-color: #b7f1d2;\n  }\n\n  .draw-feedback.error {\n    background: #fff1f0;\n    color: #cf2b2b;\n    border-color: #ffd2cf;\n  }\n\n  .quiz-question {\n    margin: 10px 0 14px;\n    padding: 24px 16px;\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.78);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    text-align: center;\n  }\n\n  .quiz-options {\n    display: grid;\n    gap: 12px;\n  }\n\n  .quiz-option {\n    padding: 15px 16px;\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    background: #fff;\n    color: var(--text-primary);\n    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.06);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 15px;\n    text-align: left;\n    transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .quiz-option:active:not(.disabled) { transform: scale(0.985); }\n  .quiz-option.correct { background: #e8fff3; color: #087541; border-color: #b7f1d2; animation: correctPop 0.35s ease-out; }\n  .quiz-option.incorrect { background: #fff1f0; color: #cf2b2b; border-color: #ffd2cf; animation: incorrectShake 0.35s ease-out; }\n  .quiz-option.disabled { pointer-events: none; cursor: default; }\n\n  .quiz-feedback {\n    margin-top: 16px;\n    padding: 14px;\n    border: 1px solid rgba(22, 119, 255, 0.16);\n    border-radius: var(--radius);\n    background: #f0f7ff;\n    color: #17344d;\n    font-size: 13px;\n  }\n\n  .quiz-feedback strong { color: var(--accent-lime); }\n  .quiz-feedback .pinyin-display { margin-top: 6px; font-size: 22px; }\n\n  .flashcard {\n    min-height: 280px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .flashcard-hint {\n    margin-top: 16px;\n    color: var(--text-secondary);\n    font-size: 12px;\n    animation: hintPulse 2s ease-in-out infinite;\n  }\n\n  .material-example {\n    max-width: min(100%, 520px);\n    margin: 14px auto 0;\n    color: var(--text-secondary);\n    font-size: 14px;\n    line-height: 1.55;\n  }\n\n  .memory-scroll {\n    width: 100%;\n    max-width: 390px;\n    margin: 18px auto 0;\n    padding: 13px 0 10px;\n    border-top: 1px solid #dce9e2;\n    border-bottom: 1px solid #dce9e2;\n    background: #f7fbf8;\n    color: #173126;\n    text-align: left;\n    animation: memoryScrollOpen 0.42s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .memory-scroll-compact {\n    max-width: 460px;\n    margin: 12px auto 16px;\n    padding-inline: 12px;\n  }\n\n  .memory-scroll-heading {\n    display: flex;\n    align-items: center;\n    gap: 9px;\n    margin-bottom: 9px;\n  }\n\n  .memory-scroll-seal {\n    width: 31px;\n    height: 31px;\n    flex: 0 0 31px;\n    display: grid;\n    place-items: center;\n    border-radius: 5px;\n    background: #ef4b3e;\n    color: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 17px;\n    font-weight: 900;\n  }\n\n  .memory-scroll-heading div {\n    min-width: 0;\n    display: grid;\n    gap: 1px;\n  }\n\n  .memory-scroll-heading strong {\n    color: #173126;\n    font-size: 13px;\n    font-weight: 900;\n    line-height: 1.25;\n  }\n\n  .memory-scroll-heading span:last-child {\n    color: #718078;\n    font-size: 10px;\n    font-weight: 700;\n    line-height: 1.25;\n  }\n\n  .memory-scene-svg {\n    display: block;\n    width: 100%;\n    height: auto;\n    aspect-ratio: 240 / 132;\n    max-height: 190px;\n  }\n\n  .memory-parts {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7px 12px;\n    margin-top: 9px;\n  }\n\n  .memory-parts span {\n    display: inline-flex;\n    align-items: baseline;\n    gap: 5px;\n    padding-left: 7px;\n    border-left: 2px solid #07c160;\n    color: #65746c;\n    font-size: 10px;\n    line-height: 1.3;\n  }\n\n  .memory-parts b {\n    color: #173126;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 15px;\n  }\n\n  .memory-scroll > p {\n    margin: 9px 0 0;\n    color: #33483d;\n    font-size: 12px;\n    line-height: 1.5;\n  }\n\n  .memory-scroll > small {\n    display: block;\n    margin-top: 6px;\n    color: #89958e;\n    font-size: 9px;\n    line-height: 1.35;\n  }\n\n  .quiz-feedback .memory-scroll {\n    margin-bottom: 0;\n    background: rgba(255, 255, 255, 0.58);\n  }\n\n  @keyframes memoryScrollOpen {\n    from { opacity: 0; transform: translateY(8px) scaleY(0.97); }\n    to { opacity: 1; transform: translateY(0) scaleY(1); }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    .memory-scroll { animation: none; }\n  }\n\n  .pinyin-display {\n    margin-top: 12px;\n    color: var(--accent-cyan);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: clamp(22px, 6vw, 28px);\n    font-weight: 700;\n  }\n\n  .meaning-display {\n    margin-top: 8px;\n    color: var(--text-secondary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: clamp(16px, 4.5vw, 20px);\n  }\n\n  .nav-actions { margin-top: 20px; }\n\n  .results-display {\n    padding: 32px 0;\n    text-align: center;\n  }\n\n  .score-circle {\n    width: clamp(140px, 40vw, 170px);\n    height: clamp(140px, 40vw, 170px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 24px;\n    border: 6px solid var(--accent-lime);\n    border-radius: 50%;\n    box-shadow: 0 0 30px rgba(7, 193, 96, 0.18);\n  }\n\n  .score-value { font-size: clamp(48px, 14vw, 60px); }\n\n  .char-grid {\n    display: grid;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n    gap: 6px;\n    margin-top: 16px;\n  }\n\n  @media (min-width: 400px) {\n    .char-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }\n  }\n\n  .char-item {\n    aspect-ratio: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 6px;\n    background: #edf3ef;\n    color: #1d2c35;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: clamp(16px, 4.5vw, 20px);\n    font-weight: 700;\n    transition: transform var(--transition-fast);\n  }\n\n  .char-item.mastered { background: #07c160; color: #fff; }\n  .char-item.learning { background: #1677ff; color: #fff; }\n\n  .backup-buttons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n\n  .backup-buttons .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .offline-pack-card {\n    display: grid;\n    grid-template-columns: auto minmax(0, 1fr);\n    gap: 12px;\n    align-items: center;\n    padding: 14px;\n    border: 1px solid rgba(7, 193, 96, 0.1);\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(232, 255, 243, 0.94));\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);\n  }\n\n  .offline-pack-icon {\n    width: 48px;\n    height: 48px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    color: #fff;\n    box-shadow: 0 10px 22px rgba(7, 193, 96, 0.18);\n  }\n\n  .offline-pack-icon svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  .offline-pack-copy {\n    min-width: 0;\n  }\n\n  .offline-pack-copy .text-sm {\n    margin-top: 4px;\n  }\n\n  .offline-download-button,\n  .offline-ready-pill {\n    grid-column: 1 / -1;\n  }\n\n  .offline-download-button {\n    gap: 8px;\n    text-decoration: none;\n  }\n\n  .offline-download-button svg {\n    width: 19px;\n    height: 19px;\n  }\n\n  .offline-ready-pill {\n    min-height: 42px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #078447;\n    font-size: 13px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.14);\n  }\n\n  .section-title {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin: 28px 0 16px;\n  }\n\n  .section-line {\n    flex: 1;\n    height: 1px;\n    background: linear-gradient(90deg, rgba(7, 193, 96, 0.35), transparent);\n  }\n\n  .lesson-card {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n  }\n\n  .lesson-number {\n    min-width: 70px;\n    text-align: center;\n  }\n\n  .lesson-info {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .floating-indicator {\n    position: fixed;\n    left: 50%;\n    bottom: calc(24px + env(safe-area-inset-bottom, 0px));\n    z-index: 100;\n    transform: translateX(-50%);\n    padding: 14px 28px;\n    border: 1px solid rgba(7, 193, 96, 0.2);\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.96);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    animation: floatIn 0.4s cubic-bezier(0.2, 0.9, 0.2, 1.2);\n  }\n\n  @keyframes hanziFloat {\n    0%, 100% { transform: translateY(0) rotate(-1deg); }\n    50% { transform: translateY(-8px) rotate(1deg); }\n  }\n\n  @keyframes feedbackPop {\n    0% { transform: scale(0.9); opacity: 0; }\n    100% { transform: scale(1); opacity: 1; }\n  }\n\n  @keyframes correctPop {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.03); }\n    100% { transform: scale(1); }\n  }\n\n  @keyframes incorrectShake {\n    0%, 100% { transform: translateX(0); }\n    20% { transform: translateX(-8px); }\n    40% { transform: translateX(8px); }\n    60% { transform: translateX(-4px); }\n    80% { transform: translateX(4px); }\n  }\n\n  @keyframes hintPulse {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.4; }\n  }\n\n  @keyframes floatIn {\n    0% { transform: translateX(-50%) translateY(80px); opacity: 0; }\n    100% { transform: translateX(-50%) translateY(0); opacity: 1; }\n  }\n\n  /* ===== UTILITY ANIMATIONS ===== */\n  @keyframes slideUp {\n    from { opacity: 0; transform: translateY(20px); }\n    to { opacity: 1; transform: translateY(0); }\n  }\n\n  .animate-slide-up {\n    animation: slideUp 0.35s ease-out;\n  }\n\n  /* ===== CHINESE SUPER-APP THEME ===== */\n  :root {\n    --bg-primary: #f5f7f6;\n    --bg-secondary: #eef7f3;\n    --bg-card: #ffffff;\n    --accent-lime: #07c160;\n    --accent-coral: #f24848;\n    --accent-cyan: #1677ff;\n    --accent-purple: #d99a18;\n    --text-primary: #18212b;\n    --text-secondary: #697780;\n    --border-width: 1px;\n    --border-color: #dce7e2;\n    --radius: 8px;\n    --shadow-offset: 0px;\n    --transition-fast: 0.18s ease;\n    --transition-bounce: 0.38s cubic-bezier(0.2, 0.9, 0.2, 1.2);\n  }\n\n  body {\n    background:\n      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 36%, #f7f8fb 100%);\n    color: var(--text-primary);\n    overflow-x: hidden;\n  }\n\n  html,\n  body,\n  #root {\n    width: 100%;\n    max-width: 100%;\n    overflow-x: hidden;\n    overflow-anchor: none;\n  }\n\n  .app-container {\n    background:\n      radial-gradient(circle at 18% 8%, rgba(7, 193, 96, 0.16), transparent 28%),\n      radial-gradient(circle at 86% 12%, rgba(22, 119, 255, 0.14), transparent 24%),\n      linear-gradient(180deg, #e8f7ef 0%, #f5f7f6 42%, #f9faf8 100%);\n    color: var(--text-primary);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    overflow-x: hidden;\n    width: 100%;\n    max-width: 100vw;\n  }\n\n  .screen {\n    width: min(calc(100vw - 24px), 460px);\n    box-sizing: border-box;\n    max-width: 460px;\n    margin: 0 auto;\n    padding: 18px;\n    padding-bottom: calc(92px + env(safe-area-inset-bottom, 20px));\n  }\n\n  .screen *,\n  .app-bottom-nav,\n  .app-bottom-nav * {\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 768px) {\n    .screen {\n      max-width: 480px;\n      padding: 24px;\n      padding-bottom: 110px;\n    }\n  }\n\n  .screen::before {\n    content: \"汉\";\n    position: fixed;\n    top: 76px;\n    right: max(12px, calc((100vw - 460px) / 2 - 24px));\n    z-index: 0;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 116px;\n    font-weight: 900;\n    color: rgba(7, 193, 96, 0.06);\n    animation: characterDrift 7s ease-in-out infinite;\n    pointer-events: none;\n  }\n\n  .screen > * {\n    position: relative;\n    z-index: 1;\n  }\n\n  .header {\n    padding: 10px 0 14px;\n    margin-bottom: 10px;\n  }\n\n  .logo {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    color: #0d1f17;\n    font-size: 30px;\n    letter-spacing: 0;\n    text-shadow: none;\n    transform: none;\n  }\n\n  .logo::after {\n    content: \"Master\";\n    padding: 4px 9px;\n    border-radius: 999px;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    color: #fff;\n    font-family: 'Segoe UI', Arial, sans-serif;\n    font-size: 12px;\n    font-weight: 800;\n  }\n\n  .streak-badge,\n  .back-btn,\n  .btn,\n  .draw-mode-btn,\n  .quiz-option {\n    border-radius: var(--radius);\n    letter-spacing: 0;\n    box-shadow: none;\n  }\n\n  .back-btn {\n    background: rgba(255, 255, 255, 0.82);\n    color: var(--text-primary);\n    border-color: rgba(7, 193, 96, 0.2);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 800;\n  }\n\n  .card,\n  .stat-item,\n  .draw-stat,\n  .hanzi-writer-container,\n  .canvas-container,\n  .quiz-option,\n  .floating-indicator {\n    border-color: rgba(24, 33, 43, 0.08);\n    border-radius: var(--radius);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .card {\n    background: rgba(255, 255, 255, 0.94);\n    padding: 18px;\n    margin-bottom: 14px;\n    overflow: hidden;\n  }\n\n  .card::before {\n    content: \"\";\n    position: absolute;\n    inset: 0 0 auto 0;\n    height: 3px;\n    background: linear-gradient(90deg, #07c160, #1677ff, #d99a18);\n    opacity: 0;\n    transition: opacity var(--transition-fast);\n  }\n\n  .card-clickable:hover::before,\n  .card-accent-lime::before,\n  .card-accent-cyan::before,\n  .card-accent-coral::before,\n  .card-accent-purple::before {\n    opacity: 1;\n  }\n\n  .card-clickable:active,\n  .btn:active,\n  .back-btn:active {\n    transform: scale(0.985);\n    box-shadow: 0 5px 14px rgba(20, 49, 35, 0.08);\n  }\n\n  @media (hover: hover) {\n    .card-clickable:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 14px 34px rgba(20, 49, 35, 0.12);\n    }\n\n    .btn-secondary:hover,\n    .back-btn:hover {\n      background: #ecfff5;\n      color: #06783d;\n    }\n  }\n\n  .card-accent-lime,\n  .card-accent-cyan,\n  .card-accent-coral,\n  .card-accent-purple {\n    border-color: rgba(24, 33, 43, 0.08);\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.1);\n  }\n\n  .title-hero {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 44px;\n    letter-spacing: 0;\n    background: linear-gradient(135deg, #07c160 0%, #1677ff 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  .title-xl {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 32px;\n    letter-spacing: 0;\n  }\n\n  .title-lg {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 22px;\n    letter-spacing: 0;\n  }\n\n  .title-md,\n  .menu-label,\n  .stat-label,\n  .draw-stat-label,\n  .score-label,\n  .text-sm {\n    letter-spacing: 0;\n  }\n\n  .text-sm {\n    font-size: 12px;\n    color: var(--text-secondary);\n  }\n\n  .progress-bar {\n    height: 8px;\n    border: none;\n    border-radius: 999px;\n    background: #e3ebe7;\n  }\n\n  .progress-fill {\n    border-radius: 999px;\n    background: linear-gradient(90deg, #07c160, #1677ff);\n  }\n\n  .stats-bar {\n    gap: 8px;\n  }\n\n  .stat-item {\n    background: rgba(255, 255, 255, 0.76);\n    padding: 12px 8px;\n  }\n\n  .stat-value,\n  .draw-stat-value,\n  .score-value,\n  .lesson-number,\n  .text-accent {\n    color: #07c160;\n  }\n\n  .stat-value,\n  .lesson-number,\n  .score-value {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 34px;\n  }\n\n  .menu-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n\n  .menu-item {\n    min-height: 112px;\n    padding: 16px;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    background:\n      linear-gradient(180deg, rgba(255,255,255,0.94), rgba(250,253,252,0.94));\n  }\n\n  .menu-icon {\n    width: 52px;\n    height: 52px;\n    display: grid;\n    place-items: center;\n    border-radius: 16px;\n    background: linear-gradient(135deg, rgba(7, 193, 96, 0.14), rgba(22, 119, 255, 0.14));\n    font-size: 28px;\n    animation: iconBreathe 4s ease-in-out infinite;\n  }\n\n  .menu-label {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 13px;\n    font-weight: 900;\n    color: #1d2c35;\n  }\n\n  .btn {\n    min-height: 50px;\n    border: none;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-size: 15px;\n    font-weight: 900;\n  }\n\n  .btn-primary {\n    background: linear-gradient(135deg, #07c160, #0aa75a);\n    color: #fff;\n    box-shadow: 0 10px 22px rgba(7, 193, 96, 0.24);\n  }\n\n  .btn-secondary {\n    background: #ffffff;\n    color: #1677ff;\n    border: 1px solid rgba(22, 119, 255, 0.16);\n  }\n\n  .btn-coral,\n  .quiz-option.incorrect,\n  .draw-feedback.error {\n    background: #fff1f0;\n    color: #cf2b2b;\n    border-color: #ffd2cf;\n  }\n\n  .hanzi-display {\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'SimSun', sans-serif;\n  }\n\n  .hanzi-hero {\n    font-size: 116px;\n    color: #07c160;\n    animation: hanziFloat 5s ease-in-out infinite;\n  }\n\n  .hanzi-xl {\n    font-size: 78px;\n  }\n\n  .hanzi-word {\n    font-size: 80px;\n  }\n\n  .pinyin-display {\n    color: #1677ff;\n  }\n\n  .meaning-display {\n    color: #5b6973;\n  }\n\n  .section-title {\n    margin: 24px 0 12px;\n  }\n\n  .section-line {\n    height: 1px;\n    background: linear-gradient(90deg, rgba(7, 193, 96, 0.35), transparent);\n  }\n\n  .lesson-card {\n    gap: 14px;\n  }\n\n  .lesson-number {\n    min-width: 58px;\n  }\n\n  .draw-mode-selector {\n    padding: 4px;\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.74);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.06);\n  }\n\n  .draw-mode-btn {\n    border: none;\n    background: transparent;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    font-weight: 900;\n    color: #65737d;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n  }\n\n  .draw-mode-btn svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  .hanzi-writer-container .text-sm + svg,\n  .hanzi-writer-container svg:first-child {\n    max-width: 100%;\n  }\n\n  .hanzi-writer-container > div[style*=\"position: absolute\"] svg {\n    width: 46px;\n    height: 46px;\n  }\n\n  .draw-mode-btn.active {\n    background: #07c160;\n    color: #fff;\n    box-shadow: 0 7px 16px rgba(7, 193, 96, 0.2);\n  }\n\n  .hanzi-writer-container {\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.04), rgba(22, 119, 255, 0.04)),\n      #fff;\n  }\n\n  .stroke-dot {\n    border: none;\n    background: #d8e6df;\n  }\n\n  .stroke-dot.completed,\n  .draw-feedback.success,\n  .quiz-option.correct {\n    background: #e8fff3;\n    color: #087541;\n    border-color: #b7f1d2;\n  }\n\n  .stroke-dot.current {\n    background: #1677ff;\n  }\n\n  .draw-stat {\n    background: rgba(255, 255, 255, 0.76);\n  }\n\n  .quiz-question {\n    margin: 10px 0 14px;\n    padding: 24px 16px;\n    border-radius: var(--radius);\n    background: rgba(255, 255, 255, 0.78);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .quiz-option {\n    padding: 15px 16px;\n    background: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.06);\n  }\n\n  .quiz-feedback {\n    border-radius: var(--radius);\n    border-color: rgba(22, 119, 255, 0.16);\n    background: #f0f7ff;\n    color: #17344d;\n  }\n\n  .flashcard {\n    min-height: 310px;\n    background:\n      radial-gradient(circle at 50% 24%, rgba(7, 193, 96, 0.13), transparent 35%),\n      #fff;\n  }\n\n  .flashcard-hint {\n    color: #84929a;\n  }\n\n  .char-item {\n    border: none;\n    border-radius: 6px;\n    background: #edf3ef;\n  }\n\n  .char-item.mastered {\n    background: #07c160;\n    color: #fff;\n  }\n\n  .char-item.learning {\n    background: #1677ff;\n    color: #fff;\n  }\n\n  .streak-badge {\n    background: #fff7e6;\n    color: #9a6400;\n    border: 1px solid #ffe2a8;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n  }\n\n  .floating-indicator {\n    background: rgba(255, 255, 255, 0.96);\n    border-color: rgba(7, 193, 96, 0.2);\n  }\n\n  .app-mascot {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    padding: 14px;\n    margin-bottom: 14px;\n    border-radius: var(--radius);\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.12), rgba(22, 119, 255, 0.1)),\n      rgba(255, 255, 255, 0.82);\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.08);\n    animation: slideUp 0.35s ease-out;\n  }\n\n  .app-mascot-face {\n    width: 58px;\n    height: 58px;\n    display: grid;\n    place-items: center;\n    border-radius: 18px;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    color: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 34px;\n    font-weight: 900;\n    box-shadow: 0 10px 18px rgba(7, 193, 96, 0.24);\n    animation: mascotPulse 3.4s ease-in-out infinite;\n  }\n\n  .app-mascot-title {\n    margin: 0 0 2px;\n    font-size: 15px;\n    font-weight: 900;\n    color: #1d2c35;\n  }\n\n  .app-mascot-subtitle {\n    margin: 0;\n    font-size: 12px;\n    color: #5f6e77;\n  }\n\n  @keyframes characterDrift {\n    0%, 100% { transform: translateY(0) rotate(-5deg); }\n    50% { transform: translateY(18px) rotate(3deg); }\n  }\n\n  @keyframes iconBreathe {\n    0%, 100% { transform: translateY(0) scale(1); }\n    50% { transform: translateY(-3px) scale(1.04); }\n  }\n\n  @keyframes mascotPulse {\n    0%, 100% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    *, *::before, *::after {\n      animation-duration: 0.001ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.001ms !important;\n    }\n  }\n\n  /* ===== UTILITY ANIMATIONS ===== */\n  @keyframes slideUp {\n    from { opacity: 0; transform: translateY(20px); }\n    to { opacity: 1; transform: translateY(0); }\n  }\n\n  .animate-slide-up {\n    animation: slideUp 0.35s ease-out;\n  }\n\n  /* ===== FULL PRODUCT REDESIGN ===== */\n  .app-container {\n    position: relative;\n    min-height: 100vh;\n    overflow-anchor: none;\n  }\n\n  .screen {\n    padding-top: 22px;\n    padding-bottom: calc(118px + env(safe-area-inset-bottom, 20px));\n    overflow-anchor: none;\n  }\n\n  .app-container::before {\n    content: \"\";\n    position: fixed;\n    inset: 0;\n    background:\n      linear-gradient(180deg, rgba(7, 193, 96, 0.12), transparent 220px),\n      repeating-linear-gradient(135deg, rgba(7, 193, 96, 0.025) 0 1px, transparent 1px 18px);\n    pointer-events: none;\n  }\n\n  .super-topbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-bottom: 14px;\n  }\n\n  .brand-lockup {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    min-width: 0;\n  }\n\n  .brand-lockup > div {\n    min-width: 0;\n  }\n\n  .brand-mark {\n    width: 48px;\n    height: 48px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: transparent;\n  }\n\n  .hanzi-logo-svg {\n    width: 58px;\n    height: 58px;\n    filter: drop-shadow(0 12px 22px rgba(7, 193, 96, 0.22));\n  }\n\n  .header-logo-mark {\n    width: 40px;\n    height: 40px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n  }\n\n  .header-logo-mark .hanzi-logo-svg {\n    width: 42px;\n    height: 42px;\n    filter: drop-shadow(0 8px 14px rgba(7, 193, 96, 0.18));\n  }\n\n  .brand-title {\n    margin: 0;\n    font-size: 20px;\n    line-height: 1;\n    font-weight: 900;\n    color: #14251c;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .brand-subtitle {\n    margin: 4px 0 0;\n    color: #6c7a73;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .daily-chip {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    min-height: 34px;\n    padding: 0 11px;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.86);\n    border: 1px solid rgba(217, 154, 24, 0.22);\n    color: #9a6400;\n    font-weight: 900;\n    box-shadow: 0 8px 20px rgba(154, 100, 0, 0.08);\n  }\n\n  .topbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-shrink: 0;\n  }\n\n  .language-toggle {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2px;\n    min-height: 34px;\n    padding: 3px;\n    border: 1px solid rgba(7, 193, 96, 0.14);\n    border-radius: 8px;\n    background: rgba(255,255,255,0.82);\n    box-shadow: 0 8px 20px rgba(20, 49, 35, 0.07);\n  }\n\n  .language-toggle button {\n    min-width: 38px;\n    padding: 0 8px;\n    border-radius: 6px;\n    color: #687870;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .language-toggle button.active {\n    background: #07c160;\n    color: #fff;\n  }\n\n  .guide-toggle,\n  .sound-toggle {\n    width: 34px;\n    height: 34px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    border-radius: 8px;\n    background: rgba(255,255,255,0.82);\n    color: #687870;\n    box-shadow: 0 8px 20px rgba(20, 49, 35, 0.07);\n    transition: transform var(--transition-fast), color var(--transition-fast), background var(--transition-fast);\n  }\n\n  .guide-toggle {\n    color: #07a653;\n    background: #e8fff3;\n    border-color: rgba(7, 193, 96, 0.16);\n  }\n\n  .guide-toggle svg,\n  .sound-toggle svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  .sound-toggle.active {\n    background: #07c160;\n    color: #fff;\n  }\n\n  .ambience-toggle {\n    color: #9a6400;\n  }\n\n  .ambience-toggle.active {\n    background: #d99a18;\n    color: #fff;\n    box-shadow: 0 10px 24px rgba(217, 154, 24, 0.2);\n  }\n\n  .guide-toggle:active,\n  .sound-toggle:active {\n    transform: scale(0.96);\n  }\n\n  @media (max-width: 380px) {\n    .super-topbar {\n      gap: 8px;\n    }\n\n    .topbar-actions {\n      gap: 6px;\n    }\n\n    .language-toggle button {\n      min-width: 32px;\n      padding: 0 6px;\n    }\n\n    .guide-toggle,\n    .sound-toggle {\n      width: 32px;\n      height: 32px;\n    }\n\n    .daily-chip {\n      padding: 0 8px;\n    }\n  }\n\n  /* ===== SECRET CONSOLIDATED CHEAT SHEET ===== */\n  .secret-screen {\n    width: min(calc(100vw - 24px), 1120px);\n    max-width: 1120px;\n    padding-top: 14px;\n    color: #17251e;\n  }\n\n  .secret-topbar {\n    position: sticky;\n    top: 0;\n    z-index: 40;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    min-height: 58px;\n    padding: 8px 0;\n    background: rgba(232, 247, 239, 0.9);\n    backdrop-filter: blur(16px);\n  }\n\n  .secret-topbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n  .secret-print-button {\n    min-height: 34px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n    padding: 0 12px;\n    border: 1px solid rgba(22, 119, 255, 0.14);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.88);\n    color: #1665c1;\n    font-size: 12px;\n    font-weight: 900;\n    box-shadow: 0 8px 20px rgba(20, 49, 35, 0.07);\n  }\n\n  .secret-print-button svg {\n    width: 17px;\n    height: 17px;\n  }\n\n  .secret-hero {\n    min-height: 220px;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 28px;\n    align-items: center;\n    padding: 30px;\n    overflow: hidden;\n    border-radius: 8px;\n    color: #fff;\n    background:\n      linear-gradient(135deg, #079858 0%, #07c160 45%, #1677ff 100%);\n    box-shadow: 0 20px 48px rgba(9, 81, 48, 0.2);\n  }\n\n  .secret-kicker {\n    margin: 0 0 10px;\n    color: rgba(255, 255, 255, 0.82);\n    font-size: 11px;\n    font-weight: 900;\n    text-transform: uppercase;\n  }\n\n  .secret-hero h1 {\n    max-width: 760px;\n    margin: 0;\n    color: #fff;\n    font-size: 34px;\n    line-height: 1.05;\n    font-weight: 900;\n  }\n\n  .secret-hero p:last-child {\n    max-width: 680px;\n    margin: 12px 0 0;\n    color: rgba(255, 255, 255, 0.86);\n    font-size: 14px;\n    line-height: 1.55;\n    font-weight: 700;\n  }\n\n  .secret-hero-seal {\n    width: 114px;\n    height: 114px;\n    display: grid;\n    place-items: center;\n    border: 2px solid rgba(255, 255, 255, 0.48);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.12);\n    color: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 66px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 8px rgba(255, 255, 255, 0.07);\n  }\n\n  .secret-summary-strip {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    margin: 14px 0;\n    overflow: hidden;\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.88);\n    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.07);\n  }\n\n  .secret-summary-strip > div {\n    min-width: 0;\n    display: flex;\n    align-items: baseline;\n    gap: 8px;\n    padding: 15px 16px;\n    border-right: 1px solid #edf2ef;\n  }\n\n  .secret-summary-strip > div:last-child {\n    border-right: 0;\n  }\n\n  .secret-summary-strip strong {\n    color: #07a653;\n    font-size: 24px;\n    line-height: 1;\n  }\n\n  .secret-summary-strip span {\n    color: #6d7a73;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .secret-jump-nav {\n    position: sticky;\n    top: 58px;\n    z-index: 35;\n    display: grid;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n    gap: 6px;\n    padding: 7px;\n    margin-bottom: 22px;\n    border: 1px solid rgba(24, 33, 43, 0.05);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.92);\n    box-shadow: 0 10px 28px rgba(20, 49, 35, 0.08);\n    backdrop-filter: blur(16px);\n    scrollbar-width: none;\n  }\n\n  .secret-jump-nav::-webkit-scrollbar {\n    display: none;\n  }\n\n  .secret-jump-nav a {\n    min-height: 34px;\n    display: grid;\n    place-items: center;\n    padding: 6px 8px;\n    border-radius: 6px;\n    color: #65736c;\n    font-size: 11px;\n    font-weight: 900;\n    text-align: center;\n    text-decoration: none;\n  }\n\n  .secret-jump-nav a:hover {\n    background: #e8fff3;\n    color: #078447;\n  }\n\n  .secret-section {\n    padding: 22px 0 30px;\n    scroll-margin-top: 122px;\n  }\n\n  .secret-section + .secret-section {\n    border-top: 1px solid rgba(24, 33, 43, 0.07);\n  }\n\n  .secret-section-heading {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    gap: 18px;\n    margin-bottom: 16px;\n  }\n\n  .secret-section-heading > div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n\n  .secret-section-heading > div > span {\n    width: 34px;\n    height: 34px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #14251c;\n    color: #fff;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .secret-section:nth-of-type(2) .secret-section-heading > div > span { background: #1677ff; }\n  .secret-section:nth-of-type(3) .secret-section-heading > div > span { background: #d99a18; }\n  .secret-section:nth-of-type(4) .secret-section-heading > div > span { background: #f24848; }\n  .secret-section:nth-of-type(5) .secret-section-heading > div > span { background: #07a653; }\n\n  .secret-section-heading h2 {\n    margin: 0;\n    color: #14251c;\n    font-size: 22px;\n    line-height: 1.1;\n    font-weight: 900;\n  }\n\n  .secret-section-heading > p {\n    max-width: 520px;\n    margin: 0;\n    color: #748078;\n    font-size: 12px;\n    line-height: 1.4;\n    text-align: right;\n  }\n\n  .secret-number-grid {\n    display: grid;\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n    gap: 8px;\n  }\n\n  .secret-number-item {\n    min-width: 0;\n    min-height: 100px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-areas:\n      \"arabic hanzi\"\n      \"pinyin pinyin\";\n    gap: 5px 8px;\n    align-items: center;\n    padding: 12px;\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 8px 22px rgba(20, 49, 35, 0.06);\n  }\n\n  .secret-number-item > span {\n    grid-area: arabic;\n    color: #1677ff;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .secret-number-item strong {\n    grid-area: hanzi;\n    min-width: 0;\n    color: #14251c;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 27px;\n    line-height: 1;\n    text-align: right;\n    overflow-wrap: anywhere;\n  }\n\n  .secret-number-item small {\n    grid-area: pinyin;\n    color: #687870;\n    font-size: 11px;\n    line-height: 1.25;\n  }\n\n  .secret-rule-band {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-top: 10px;\n    padding: 13px 15px;\n    border-radius: 8px;\n    background: #eff6ff;\n    color: #24415c;\n    font-size: 12px;\n    line-height: 1.45;\n  }\n\n  .secret-rule-band strong {\n    flex: 0 0 auto;\n    color: #1665c1;\n  }\n\n  .secret-pattern-grid {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n  }\n\n  .secret-pattern-card {\n    min-width: 0;\n    padding: 15px;\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 9px 24px rgba(20, 49, 35, 0.06);\n  }\n\n  .secret-pattern-label {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    margin-bottom: 12px;\n  }\n\n  .secret-pattern-label > span {\n    color: #1677ff;\n    font-size: 11px;\n    font-weight: 900;\n    text-transform: uppercase;\n  }\n\n  .secret-pattern-label code {\n    padding: 4px 7px;\n    border-radius: 5px;\n    background: #eef4f1;\n    color: #53635b;\n    font-family: inherit;\n    font-size: 10px;\n    font-weight: 800;\n  }\n\n  .secret-pattern-card > strong {\n    display: block;\n    color: #14251c;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 22px;\n    line-height: 1.2;\n  }\n\n  .secret-pattern-card > em {\n    display: block;\n    margin-top: 5px;\n    color: #07a653;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 800;\n  }\n\n  .secret-pattern-card > p {\n    margin: 6px 0 0;\n    color: #6c7972;\n    font-size: 12px;\n  }\n\n  .secret-reference-grid {\n    display: grid;\n    grid-template-columns: 1.15fr 0.85fr;\n    gap: 12px;\n  }\n\n  .secret-reference-block {\n    min-width: 0;\n    padding: 16px;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.86);\n    box-shadow: 0 10px 26px rgba(20, 49, 35, 0.06);\n  }\n\n  .secret-reference-block h3 {\n    margin: 0 0 12px;\n    color: #14251c;\n    font-size: 15px;\n    font-weight: 900;\n  }\n\n  .secret-compact-list {\n    display: grid;\n    gap: 0;\n  }\n\n  .secret-compact-list > div {\n    min-width: 0;\n    display: grid;\n    grid-template-columns: 34px 72px minmax(0, 1fr) auto;\n    gap: 8px;\n    align-items: center;\n    min-height: 40px;\n    padding: 6px 0;\n    border-bottom: 1px solid #edf2ef;\n  }\n\n  .secret-compact-list > div:last-child {\n    border-bottom: 0;\n  }\n\n  .secret-compact-list strong {\n    color: #07a653;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 19px;\n  }\n\n  .secret-compact-list em {\n    color: #1677ff;\n    font-size: 11px;\n    font-style: normal;\n    font-weight: 800;\n  }\n\n  .secret-compact-list span {\n    min-width: 0;\n    color: #586860;\n    font-size: 11px;\n    line-height: 1.3;\n  }\n\n  .secret-compact-list code {\n    color: #8b6417;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 12px;\n  }\n\n  .question-list > div {\n    grid-template-columns: minmax(72px, auto) 100px minmax(0, 1fr);\n  }\n\n  .secret-tone-grid {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 8px;\n    margin-top: 12px;\n  }\n\n  .secret-tone-grid article {\n    padding: 13px;\n    border-radius: 8px;\n    background: #fff8e9;\n    box-shadow: inset 0 0 0 1px rgba(217, 154, 24, 0.12);\n  }\n\n  .secret-tone-grid strong {\n    color: #9a6400;\n    font-size: 12px;\n  }\n\n  .secret-tone-grid p {\n    margin: 6px 0 0;\n    color: #695d43;\n    font-size: 11px;\n    line-height: 1.45;\n  }\n\n  .secret-grammar-list {\n    display: grid;\n    gap: 8px;\n  }\n\n  .secret-grammar-row {\n    min-width: 0;\n    display: grid;\n    grid-template-columns: 38px minmax(230px, 0.82fr) minmax(300px, 1.18fr);\n    gap: 14px;\n    align-items: center;\n    padding: 14px;\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 8px 22px rgba(20, 49, 35, 0.05);\n  }\n\n  .secret-grammar-index {\n    color: #c8d4ce;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .secret-grammar-rule {\n    min-width: 0;\n  }\n\n  .secret-grammar-rule code {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    padding: 5px 8px;\n    border-radius: 6px;\n    background: #fff0ef;\n    color: #c73535;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 13px;\n    font-weight: 900;\n    overflow-wrap: anywhere;\n  }\n\n  .secret-grammar-rule strong {\n    display: block;\n    color: #14251c;\n    font-size: 12px;\n  }\n\n  .secret-grammar-rule p {\n    margin: 4px 0 0;\n    color: #6e7a74;\n    font-size: 11px;\n    line-height: 1.4;\n  }\n\n  .secret-grammar-example {\n    min-width: 0;\n    padding-left: 14px;\n    border-left: 2px solid #d8eee2;\n  }\n\n  .secret-grammar-example strong {\n    display: block;\n    color: #14251c;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 18px;\n    line-height: 1.25;\n  }\n\n  .secret-grammar-example em {\n    display: block;\n    margin-top: 4px;\n    color: #07a653;\n    font-size: 11px;\n    font-style: normal;\n    font-weight: 800;\n  }\n\n  .secret-grammar-example span {\n    display: block;\n    margin-top: 3px;\n    color: #697770;\n    font-size: 11px;\n  }\n\n  .secret-vocab-tools {\n    display: grid;\n    grid-template-columns: minmax(260px, 1fr) auto;\n    gap: 10px;\n    align-items: center;\n    margin-bottom: 10px;\n  }\n\n  .secret-search {\n    min-width: 0;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    gap: 9px;\n    padding: 0 13px;\n    border: 1px solid rgba(7, 193, 96, 0.14);\n    border-radius: 8px;\n    background: #fff;\n    color: #07a653;\n    box-shadow: 0 8px 22px rgba(20, 49, 35, 0.05);\n  }\n\n  .secret-search svg {\n    width: 18px;\n    height: 18px;\n    flex: 0 0 auto;\n  }\n\n  .secret-search input {\n    min-width: 0;\n    width: 100%;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    color: #18251f;\n    font: inherit;\n    font-size: 13px;\n  }\n\n  .secret-search input::placeholder {\n    color: #8a9690;\n  }\n\n  .secret-level-filter {\n    display: flex;\n    gap: 4px;\n    padding: 4px;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.86);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.05);\n    scrollbar-width: none;\n  }\n\n  .secret-level-filter::-webkit-scrollbar {\n    display: none;\n  }\n\n  .secret-level-filter button {\n    min-height: 34px;\n    padding: 0 10px;\n    border-radius: 6px;\n    color: #68766f;\n    font-size: 10px;\n    font-weight: 900;\n  }\n\n  .secret-level-filter button.active {\n    background: #07c160;\n    color: #fff;\n    box-shadow: 0 6px 14px rgba(7, 193, 96, 0.18);\n  }\n\n  .secret-result-count {\n    margin: 0 0 10px;\n    color: #78847e;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .secret-word-grid {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n  }\n\n  .secret-word-row {\n    position: relative;\n    min-width: 0;\n    min-height: 178px;\n    display: flex;\n    flex-direction: column;\n    padding: 13px;\n    overflow: hidden;\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 7px 20px rgba(20, 49, 35, 0.05);\n  }\n\n  .secret-word-main {\n    min-width: 0;\n    display: flex;\n    align-items: baseline;\n    justify-content: space-between;\n    gap: 8px;\n  }\n\n  .secret-word-main strong {\n    min-width: 0;\n    color: #14251c;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 22px;\n    line-height: 1.15;\n    overflow-wrap: anywhere;\n  }\n\n  .secret-word-main em {\n    flex: 0 1 auto;\n    color: #1677ff;\n    font-size: 11px;\n    font-style: normal;\n    font-weight: 800;\n    text-align: right;\n    overflow-wrap: anywhere;\n  }\n\n  .secret-word-row > p {\n    margin: 7px 0 0;\n    color: #596860;\n    font-size: 11px;\n    line-height: 1.35;\n  }\n\n  .secret-example {\n    display: grid;\n    gap: 3px;\n    margin-top: 7px;\n    padding-top: 7px;\n    border-top: 1px solid #edf2ef;\n  }\n\n  .secret-example small {\n    color: #7a867f;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif;\n    font-size: 11px;\n    line-height: 1.35;\n  }\n\n  .secret-example em {\n    color: #1677ff;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.35;\n  }\n\n  .secret-example span {\n    color: #58645e;\n    font-size: 10px;\n    line-height: 1.35;\n  }\n\n  .secret-source-tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 4px;\n    margin-top: auto;\n    padding-top: 9px;\n  }\n\n  .secret-source-tags span {\n    padding: 3px 6px;\n    border-radius: 5px;\n    background: #e8fff3;\n    color: #078447;\n    font-size: 9px;\n    font-weight: 900;\n  }\n\n  .secret-empty {\n    min-height: 130px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.82);\n    color: #78847e;\n    font-size: 13px;\n  }\n\n  .secret-footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 28px 0 6px;\n    color: #637169;\n  }\n\n  .secret-footer .hanzi-logo-svg {\n    width: 44px;\n    height: 44px;\n    filter: none;\n  }\n\n  .secret-footer strong,\n  .secret-footer span {\n    display: block;\n  }\n\n  .secret-footer strong {\n    color: #14251c;\n    font-size: 12px;\n  }\n\n  .secret-footer span {\n    margin-top: 2px;\n    font-size: 10px;\n  }\n\n  @media (max-width: 900px) {\n    .secret-number-grid {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n\n    .secret-tone-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .secret-word-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n\n  @media (max-width: 680px) {\n    .secret-screen {\n      width: min(calc(100vw - 16px), 560px);\n      padding-left: 8px;\n      padding-right: 8px;\n    }\n\n    .secret-topbar {\n      min-height: 54px;\n    }\n\n    .secret-topbar .language-toggle button {\n      min-width: 31px;\n      padding: 0 5px;\n    }\n\n    .secret-print-button {\n      width: 34px;\n      padding: 0;\n    }\n\n    .secret-print-button span {\n      display: none;\n    }\n\n    .secret-hero {\n      min-height: 190px;\n      gap: 16px;\n      padding: 22px;\n    }\n\n    .secret-hero h1 {\n      font-size: 27px;\n    }\n\n    .secret-hero p:last-child {\n      font-size: 12px;\n    }\n\n    .secret-hero-seal {\n      width: 74px;\n      height: 74px;\n      font-size: 43px;\n    }\n\n    .secret-summary-strip {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .secret-summary-strip > div:nth-child(2) {\n      border-right: 0;\n    }\n\n    .secret-summary-strip > div:nth-child(-n+2) {\n      border-bottom: 1px solid #edf2ef;\n    }\n\n    .secret-jump-nav {\n      top: 54px;\n      grid-template-columns: repeat(5, minmax(68px, 1fr));\n      overflow-x: auto;\n    }\n\n    .secret-section {\n      scroll-margin-top: 116px;\n    }\n\n    .secret-section-heading {\n      display: block;\n    }\n\n    .secret-section-heading > p {\n      margin-top: 8px;\n      text-align: left;\n    }\n\n    .secret-number-grid {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .secret-pattern-grid,\n    .secret-reference-grid,\n    .secret-word-grid {\n      grid-template-columns: 1fr;\n    }\n\n    .secret-compact-list > div {\n      grid-template-columns: 32px 68px minmax(0, 1fr);\n    }\n\n    .secret-compact-list code {\n      grid-column: 2 / -1;\n    }\n\n    .question-list > div {\n      grid-template-columns: minmax(72px, auto) 92px minmax(0, 1fr);\n    }\n\n    .secret-grammar-row {\n      grid-template-columns: 30px minmax(0, 1fr);\n      align-items: start;\n    }\n\n    .secret-grammar-example {\n      grid-column: 2;\n      padding: 10px 0 0;\n      border-top: 1px solid #e3eee8;\n      border-left: 0;\n    }\n\n    .secret-vocab-tools {\n      grid-template-columns: 1fr;\n    }\n\n    .secret-level-filter {\n      overflow-x: auto;\n    }\n\n    .secret-level-filter button {\n      flex: 1 0 auto;\n    }\n\n    .secret-word-row {\n      min-height: 164px;\n    }\n  }\n\n  @media (max-width: 390px) {\n    .secret-hero {\n      grid-template-columns: 1fr;\n    }\n\n    .secret-hero-seal {\n      display: none;\n    }\n\n    .secret-number-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .secret-rule-band {\n      display: block;\n    }\n\n    .secret-rule-band span {\n      display: block;\n      margin-top: 5px;\n    }\n\n    .secret-tone-grid {\n      grid-template-columns: 1fr;\n    }\n\n    .question-list > div {\n      grid-template-columns: minmax(70px, auto) minmax(0, 1fr);\n    }\n\n    .question-list span {\n      grid-column: 1 / -1;\n    }\n  }\n\n  @media print {\n    @page {\n      size: A4;\n      margin: 11mm;\n    }\n\n    html,\n    body,\n    #root,\n    .app-container {\n      width: auto !important;\n      height: auto !important;\n      min-height: 0 !important;\n      overflow: visible !important;\n      background: #fff !important;\n    }\n\n    .app-container::before,\n    .secret-topbar,\n    .secret-jump-nav,\n    .secret-vocab-tools,\n    .secret-result-count {\n      display: none !important;\n    }\n\n    .secret-screen {\n      width: 100% !important;\n      max-width: none !important;\n      min-height: 0 !important;\n      padding: 0 !important;\n      color: #111 !important;\n    }\n\n    .secret-hero {\n      min-height: 0;\n      padding: 16px;\n      color: #111;\n      background: #fff !important;\n      border: 2px solid #111;\n      box-shadow: none;\n      break-inside: avoid;\n    }\n\n    .secret-hero h1,\n    .secret-hero p,\n    .secret-kicker {\n      color: #111 !important;\n    }\n\n    .secret-hero-seal {\n      color: #111;\n      border-color: #111;\n      box-shadow: none;\n    }\n\n    .secret-summary-strip,\n    .secret-number-item,\n    .secret-pattern-card,\n    .secret-reference-block,\n    .secret-grammar-row,\n    .secret-word-row {\n      background: #fff !important;\n      box-shadow: none !important;\n    }\n\n    .secret-summary-strip {\n      break-inside: avoid;\n    }\n\n    .secret-section {\n      padding: 14px 0;\n    }\n\n    .secret-section-heading {\n      break-after: avoid;\n    }\n\n    .secret-number-grid {\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n\n    .secret-pattern-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .secret-tone-grid {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n\n    .secret-word-grid {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .secret-number-item,\n    .secret-pattern-card,\n    .secret-grammar-row,\n    .secret-word-row,\n    .secret-tone-grid article {\n      break-inside: avoid;\n    }\n\n    .secret-word-row {\n      min-height: 0;\n    }\n\n    .secret-footer {\n      break-inside: avoid;\n    }\n  }\n\n  @media (max-width: 520px) {\n    .super-topbar {\n      gap: 8px;\n    }\n\n    .brand-lockup {\n      gap: 7px;\n      flex: 1 1 auto;\n      max-width: calc(100% - 162px);\n    }\n\n    .brand-mark {\n      width: 38px;\n      height: 38px;\n      flex: 0 0 auto;\n    }\n\n    .hanzi-logo-svg {\n      width: 48px;\n      height: 48px;\n    }\n\n    .brand-title {\n      max-width: 114px;\n      font-size: 15px;\n    }\n\n    .brand-subtitle {\n      display: none;\n    }\n\n    .topbar-actions {\n      gap: 5px;\n    }\n\n    .language-toggle {\n      min-height: 28px;\n      padding: 2px;\n    }\n\n    .language-toggle button {\n      min-width: 27px;\n      padding: 0 5px;\n      font-size: 10px;\n    }\n\n    .guide-toggle,\n    .sound-toggle {\n      width: 28px;\n      height: 28px;\n    }\n\n    .guide-toggle svg,\n    .sound-toggle svg {\n      width: 16px;\n      height: 16px;\n    }\n\n    .super-topbar .daily-chip {\n      display: none;\n    }\n  }\n\n  .wallet-card {\n    position: relative;\n    min-height: 188px;\n    padding: 20px;\n    border-radius: 8px;\n    overflow: hidden;\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.96), rgba(22, 119, 255, 0.88)),\n      #07c160;\n    color: #fff;\n    box-shadow: 0 18px 40px rgba(7, 193, 96, 0.24);\n    animation: walletEnter 0.48s ease-out;\n  }\n\n  .wallet-card::before {\n    content: \"学\";\n    position: absolute;\n    right: -10px;\n    top: -28px;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 180px;\n    font-weight: 900;\n    color: rgba(255,255,255,0.11);\n    line-height: 1;\n  }\n\n  .wallet-card::after {\n    content: \"\";\n    position: absolute;\n    left: 20px;\n    right: 20px;\n    bottom: 18px;\n    height: 1px;\n    background: rgba(255,255,255,0.28);\n  }\n\n  .wallet-label {\n    margin: 0;\n    color: rgba(255,255,255,0.78);\n    font-size: 12px;\n    font-weight: 800;\n  }\n\n  .wallet-score {\n    margin: 8px 0 16px;\n    font-size: 56px;\n    line-height: 0.9;\n    font-weight: 900;\n    letter-spacing: -1px;\n  }\n\n  .wallet-card .progress-bar {\n    background: rgba(255,255,255,0.25);\n  }\n\n  .wallet-card .progress-fill {\n    background: #fff;\n  }\n\n  .wallet-meta {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-top: 12px;\n    color: rgba(255,255,255,0.86);\n    font-size: 12px;\n  }\n\n  .wallet-seal {\n    display: grid;\n    place-items: center;\n    width: 44px;\n    height: 44px;\n    border: 1px solid rgba(255,255,255,0.36);\n    border-radius: 8px;\n    color: #fff;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 24px;\n    font-weight: 900;\n  }\n\n  .daily-entry-card {\n    position: relative;\n    display: grid;\n    gap: 12px;\n    margin: 14px 0 16px;\n    padding: 14px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.96), rgba(232, 255, 243, 0.92));\n    border: 1px solid rgba(7, 193, 96, 0.12);\n    box-shadow: 0 14px 34px rgba(20, 49, 35, 0.09);\n    cursor: pointer;\n    overflow: hidden;\n  }\n\n  .daily-entry-card::after {\n    content: \"练\";\n    position: absolute;\n    right: -4px;\n    bottom: -24px;\n    color: rgba(7, 193, 96, 0.07);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 104px;\n    font-weight: 900;\n    line-height: 1;\n  }\n\n  .daily-entry-main {\n    position: relative;\n    z-index: 1;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 10px;\n    align-items: center;\n  }\n\n  .daily-entry-icon {\n    width: 42px;\n    height: 42px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    color: #fff;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    box-shadow: 0 10px 20px rgba(7, 193, 96, 0.18);\n  }\n\n  .daily-entry-kicker {\n    margin: 0 0 2px;\n    color: #07a653;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .daily-entry-title {\n    margin: 0;\n    color: #14251c;\n    font-size: 16px;\n    font-weight: 900;\n    line-height: 1.2;\n  }\n\n  .daily-entry-strip {\n    position: relative;\n    z-index: 1;\n    display: flex;\n    gap: 6px;\n    overflow: hidden;\n  }\n\n  .daily-entry-char {\n    width: 36px;\n    height: 36px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n    border-radius: 8px;\n    background: #fff;\n    color: #07a653;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 22px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.08);\n  }\n\n  .daily-entry-meta {\n    position: relative;\n    z-index: 1;\n    display: flex;\n    gap: 8px;\n    color: #687870;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .quick-lane {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 8px;\n    margin: 14px 0 20px;\n  }\n\n  .quick-action {\n    min-width: 0;\n    min-height: 82px;\n    padding: 0 4px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    border: 0;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.92);\n    color: #1c2b34;\n    box-shadow: 0 10px 26px rgba(20, 49, 35, 0.08);\n    font-weight: 900;\n    transition: transform 0.18s ease, box-shadow 0.18s ease;\n  }\n\n  .quick-action:active {\n    transform: translateY(2px) scale(0.98);\n  }\n\n  .quick-action-icon {\n    width: 38px;\n    height: 38px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .quick-action-icon svg,\n  .bottom-nav-icon svg {\n    width: 22px;\n    height: 22px;\n  }\n\n  .quick-action:nth-child(2) .quick-action-icon {\n    background: #eef5ff;\n  }\n\n  .quick-action:nth-child(3) .quick-action-icon {\n    background: #fff4e0;\n  }\n\n  .quick-action:nth-child(4) .quick-action-icon {\n    background: #fff0f0;\n  }\n\n  .quick-action-label {\n    font-size: 11px;\n  }\n\n  .insight-panel {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 12px;\n    align-items: center;\n    padding: 16px;\n    margin-bottom: 18px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.96), rgba(240, 255, 248, 0.96));\n    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .insight-title {\n    margin: 0 0 4px;\n    font-weight: 900;\n    color: #152820;\n  }\n\n  .insight-copy {\n    margin: 0;\n    color: #66756e;\n    font-size: 12px;\n  }\n\n  .insight-character {\n    width: 54px;\n    height: 54px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #121f18;\n    color: #07c160;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 32px;\n    font-weight: 900;\n    animation: characterBlink 4.2s ease-in-out infinite;\n  }\n\n  .app-bottom-nav {\n    position: fixed;\n    left: 50%;\n    bottom: calc(12px + env(safe-area-inset-bottom, 0px));\n    z-index: 200;\n    width: min(440px, calc(100vw - 24px));\n    max-width: calc(100vw - 24px);\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 4px;\n    padding: 8px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.92);\n    border: 1px solid rgba(24, 33, 43, 0.08);\n    box-shadow: 0 18px 50px rgba(20, 49, 35, 0.18);\n    transform: translateX(-50%);\n    backdrop-filter: blur(16px);\n  }\n\n  .bottom-nav-item {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 3px;\n    padding: 7px 2px;\n    border: 0;\n    border-radius: 8px;\n    background: transparent;\n    color: #728078;\n    font-size: 10px;\n    font-weight: 900;\n  }\n\n  .bottom-nav-item.active {\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .bottom-nav-icon {\n    font-size: 18px;\n    line-height: 1;\n  }\n\n  .menu-grid {\n    display: none;\n  }\n\n  .stats-bar {\n    margin-top: 12px;\n  }\n\n  .card {\n    border: none;\n  }\n\n  .section-title {\n    margin-top: 22px;\n  }\n\n  .header {\n    min-height: 54px;\n    padding: 0;\n    margin-bottom: 14px;\n  }\n\n  .header .logo {\n    font-size: 24px;\n  }\n\n  .header .logo::after {\n    content: \"学\";\n    width: 22px;\n    height: 22px;\n    padding: 0;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    font-size: 12px;\n  }\n\n  .screen > .title-xl {\n    margin-top: 4px;\n  }\n\n  .lesson-card {\n    min-height: 82px;\n  }\n\n  .lesson-number {\n    width: 54px;\n    height: 54px;\n    min-width: 54px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    font-size: 24px;\n  }\n\n  .lesson-info .title-md {\n    font-size: 15px;\n  }\n\n  .lesson-title-line {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    min-width: 0;\n  }\n\n  .lesson-title-line .title-md {\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .lesson-chinese-chip {\n    flex: 0 0 auto;\n    max-width: 74px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 3px 7px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .flashcard.card {\n    border: 0;\n  }\n\n  .flashcard::before {\n    opacity: 1;\n    height: 0;\n  }\n\n  .flashcard .hanzi-display {\n    color: #07c160 !important;\n  }\n\n  .card[style*=\"text-align: center\"] {\n    background: rgba(255,255,255,0.9);\n  }\n\n  .hanzi-writer-container {\n    border: 1px solid rgba(24, 33, 43, 0.08);\n  }\n\n  .canvas-controls,\n  .nav-actions,\n  .backup-buttons {\n    gap: 10px;\n  }\n\n  .results-display {\n    border-radius: 8px;\n    background: rgba(255,255,255,0.78);\n    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .score-circle {\n    border-color: #07c160;\n    box-shadow: 0 0 0 8px rgba(7,193,96,0.08);\n  }\n\n  .char-grid {\n    gap: 8px;\n  }\n\n  .floating-indicator {\n    bottom: calc(98px + env(safe-area-inset-bottom, 0px));\n  }\n\n  .lessons-quick-actions {\n    display: none !important;\n  }\n\n  @keyframes walletEnter {\n    from { opacity: 0; transform: translateY(18px) scale(0.98); }\n    to { opacity: 1; transform: translateY(0) scale(1); }\n  }\n\n  @keyframes characterBlink {\n    0%, 100% { transform: translateY(0); box-shadow: 0 0 0 rgba(7,193,96,0); }\n    50% { transform: translateY(-4px); box-shadow: 0 10px 22px rgba(7,193,96,0.18); }\n  }\n\n  /* ===== DEEP SUPER-APP POLISH ===== */\n  .wallet-card {\n    min-height: 206px;\n    background:\n      radial-gradient(circle at 78% 30%, rgba(255, 255, 255, 0.22), transparent 28%),\n      linear-gradient(135deg, #06b85b 0%, #12c8a1 48%, #1777ff 100%);\n  }\n\n  .wallet-card .progress-bar {\n    height: 7px;\n    margin-top: 22px;\n  }\n\n  .wallet-meta {\n    position: relative;\n    z-index: 1;\n  }\n\n  .wallet-seal {\n    background: rgba(255,255,255,0.12);\n    backdrop-filter: blur(10px);\n  }\n\n  .wallet-brand-mark {\n    position: absolute;\n    z-index: 1;\n    right: 14px;\n    top: 14px;\n    width: 70px;\n    height: 70px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.16);\n    backdrop-filter: blur(10px);\n  }\n\n  .wallet-brand-mark .hanzi-logo-svg {\n    width: 58px;\n    height: 58px;\n    filter: drop-shadow(0 8px 12px rgba(15, 40, 30, 0.18));\n  }\n\n  @media (max-width: 380px) {\n    .wallet-brand-mark {\n      width: 58px;\n      height: 58px;\n      right: 12px;\n      top: 12px;\n    }\n\n    .wallet-brand-mark .hanzi-logo-svg {\n      width: 50px;\n      height: 50px;\n    }\n  }\n\n  .quick-lane {\n    padding: 8px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.64);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04);\n  }\n\n  .quick-action {\n    min-height: 88px;\n    box-shadow: none;\n  }\n\n  .quick-action-icon {\n    position: relative;\n  }\n\n  .quick-action-icon::after {\n    content: \"\";\n    position: absolute;\n    right: -2px;\n    top: -2px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #ffcf33;\n    box-shadow: 0 0 0 2px #fff;\n  }\n\n  .home-metrics .stat-item {\n    background: linear-gradient(180deg, #fff, #f8fffb);\n  }\n\n  .account-entry {\n    display: block;\n    background:\n      linear-gradient(90deg, rgba(255,255,255,0.96), rgba(241, 250, 246, 0.96));\n  }\n\n  .service-section {\n    padding: 10px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.58);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04);\n  }\n\n  .service-section-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 4px 4px 12px;\n    color: #708078;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .service-list {\n    display: grid;\n    gap: 10px;\n  }\n\n  .material-group {\n    display: grid;\n    gap: 8px;\n  }\n\n  .material-group + .material-group {\n    margin-top: 12px;\n  }\n\n  .material-group-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2px 4px;\n    color: #54645c;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .material-group-head span:last-child {\n    color: #91a099;\n  }\n\n  .service-row {\n    margin-bottom: 0;\n    box-shadow: none;\n    background: #fff;\n  }\n\n  .service-row::after {\n    content: \"›\";\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #a6b4ad;\n    font-size: 28px;\n    line-height: 1;\n  }\n\n  .service-row .lesson-info {\n    padding-right: 20px;\n  }\n\n  .study-pass-card {\n    min-height: 336px;\n    background:\n      radial-gradient(circle at 50% 18%, rgba(7, 193, 96, 0.18), transparent 38%),\n      linear-gradient(180deg, #fff, #fafffc);\n  }\n\n  .study-pass-card::after {\n    content: \"记\";\n    position: absolute;\n    right: 18px;\n    bottom: 14px;\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 64px;\n    color: rgba(7, 193, 96, 0.06);\n    font-weight: 900;\n  }\n\n  .related-service-card {\n    background: #fff;\n  }\n\n  .mini-app-segment {\n    background: rgba(255,255,255,0.78);\n    border: 1px solid rgba(24, 33, 43, 0.06);\n  }\n\n  .draw-prompt-card {\n    display: block;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241, 250, 246, 0.98));\n  }\n\n  .draw-prompt-card::after {\n    content: \"写\";\n    position: absolute;\n    right: 18px;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif;\n    font-size: 54px;\n    font-weight: 900;\n    color: rgba(7, 193, 96, 0.08);\n  }\n\n  .writer-mini-program {\n    background:\n      linear-gradient(45deg, transparent calc(50% - 1px), rgba(7,193,96,0.12) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)),\n      linear-gradient(-45deg, transparent calc(50% - 1px), rgba(22,119,255,0.1) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)),\n      repeating-linear-gradient(0deg, transparent 0 39px, rgba(7,193,96,0.1) 39px 40px),\n      repeating-linear-gradient(90deg, transparent 0 39px, rgba(7,193,96,0.1) 39px 40px),\n      linear-gradient(180deg, #ffffff, #f8fdfb);\n    box-shadow:\n      inset 0 0 0 1px rgba(7, 193, 96, 0.08),\n      0 10px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .quiz-pass-card {\n    background:\n      radial-gradient(circle at 50% 20%, rgba(7, 193, 96, 0.1), transparent 36%),\n      #fff;\n  }\n\n  .quiz-mode-card {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 14px;\n    align-items: center;\n    padding: 16px;\n    margin-bottom: 12px;\n    background: #fff;\n  }\n\n  .quiz-mode-icon {\n    width: 50px;\n    height: 50px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .quiz-mode-icon svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  .quiz-mode-card:nth-of-type(2) .quiz-mode-icon {\n    background: #eef5ff;\n    color: #1677ff;\n  }\n\n  .quiz-mode-card:nth-of-type(3) .quiz-mode-icon {\n    background: #fff4e0;\n    color: #c77600;\n  }\n\n  .quiz-option {\n    border-radius: 8px;\n    position: relative;\n  }\n\n  .quiz-option::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 10px;\n    bottom: 10px;\n    width: 3px;\n    border-radius: 999px;\n    background: rgba(7, 193, 96, 0.28);\n  }\n\n  .stats-wallet {\n    padding: 8px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.6);\n  }\n\n  .stats-wallet .stat-item {\n    background: #fff;\n    box-shadow: none;\n  }\n\n  .char-grid {\n    padding: 10px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.62);\n  }\n\n  .char-item {\n    box-shadow: inset 0 0 0 1px rgba(24,33,43,0.04);\n  }\n\n  .app-bottom-nav {\n    background:\n      linear-gradient(180deg, rgba(255,255,255,0.96), rgba(249,252,250,0.96));\n  }\n\n  .bottom-nav-item.active .bottom-nav-icon {\n    animation: tabPop 0.28s ease-out;\n  }\n\n  /* ===== SUPER-APP ROUND TWO ===== */\n  .super-searchbar {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 10px;\n    min-height: 42px;\n    padding: 0 12px;\n    margin: 0 0 12px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.88);\n    border: 1px solid rgba(24, 33, 43, 0.06);\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);\n    color: #718078;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .super-searchbar svg {\n    width: 18px;\n    height: 18px;\n    color: #07a653;\n  }\n\n  .super-searchbar strong {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #1d2c35;\n    font-size: 13px;\n  }\n\n  .super-search-action {\n    display: grid;\n    place-items: center;\n    width: 26px;\n    height: 26px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .mini-program-panel {\n    padding: 12px;\n    margin: 0 0 16px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.72);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.04), 0 12px 28px rgba(20, 49, 35, 0.06);\n  }\n\n  .mini-program-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    color: #687870;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .mini-program-grid {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 10px 8px;\n  }\n\n  .mini-program-tile {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 7px;\n    min-width: 0;\n    padding: 6px 2px;\n    border: 0;\n    background: transparent;\n    color: #213129;\n    font: inherit;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .mini-program-tile:active {\n    transform: scale(0.96);\n  }\n\n  .mini-program-icon {\n    width: 42px;\n    height: 42px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    color: #fff;\n    box-shadow: 0 8px 18px rgba(20, 49, 35, 0.1);\n    position: relative;\n    overflow: hidden;\n  }\n\n  .mini-program-icon::before {\n    content: \"\";\n    position: absolute;\n    inset: 4px auto auto 5px;\n    width: 12px;\n    height: 5px;\n    border-radius: 999px;\n    background: rgba(255,255,255,0.36);\n  }\n\n  .mini-program-icon svg {\n    width: 22px;\n    height: 22px;\n    position: relative;\n    z-index: 1;\n  }\n\n  .mini-program-name {\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .mini-program-tile:nth-child(1) .mini-program-icon { background: linear-gradient(135deg, #07c160, #18d58b); }\n  .mini-program-tile:nth-child(2) .mini-program-icon { background: linear-gradient(135deg, #1677ff, #28b8ff); }\n  .mini-program-tile:nth-child(3) .mini-program-icon { background: linear-gradient(135deg, #ff9f1c, #ffd166); }\n  .mini-program-tile:nth-child(4) .mini-program-icon { background: linear-gradient(135deg, #ff4d4f, #ff8a80); }\n  .mini-program-tile:nth-child(5) .mini-program-icon { background: linear-gradient(135deg, #2f3542, #57606f); }\n  .mini-program-tile:nth-child(6) .mini-program-icon { background: linear-gradient(135deg, #00a6a6, #00d2d3); }\n  .mini-program-tile:nth-child(7) .mini-program-icon { background: linear-gradient(135deg, #8e44ad, #c56cf0); }\n  .mini-program-tile:nth-child(8) .mini-program-icon { background: linear-gradient(135deg, #d99a18, #f6c343); }\n\n  .illustration-strip {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 8px;\n    margin: 14px 0 16px;\n  }\n\n  .story-sticker {\n    min-width: 0;\n    min-height: 132px;\n    padding: 10px 6px 9px;\n    border: 0;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.86);\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);\n    color: #1d2c35;\n    overflow: hidden;\n    position: relative;\n  }\n\n  .story-sticker::after {\n    content: \"\";\n    position: absolute;\n    inset: auto 0 0 auto;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background: rgba(7, 193, 96, 0.08);\n  }\n\n  .story-sticker:active {\n    transform: scale(0.97);\n  }\n\n  .story-sticker-svg {\n    display: block;\n    width: 74px;\n    max-width: 100%;\n    height: 60px;\n    margin: 0 auto 5px;\n    filter: drop-shadow(0 8px 12px rgba(20, 49, 35, 0.11));\n    animation: stickerBob 4.4s ease-in-out infinite;\n  }\n\n  .story-sticker:nth-child(2) .story-sticker-svg {\n    animation-delay: -1.2s;\n  }\n\n  .story-sticker:nth-child(3) .story-sticker-svg {\n    animation-delay: -2.1s;\n  }\n\n  .story-sticker-title {\n    display: block;\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .cute-coach-card {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    padding: 14px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(235, 255, 246, 0.96));\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);\n  }\n\n  .coach-mini-svg,\n  .panda-buddy-svg {\n    width: 66px;\n    height: 66px;\n    filter: drop-shadow(0 10px 18px rgba(7, 193, 96, 0.18));\n  }\n\n  .coach-title {\n    margin: 0 0 4px;\n    color: #14251c;\n    font-size: 15px;\n    font-weight: 900;\n  }\n\n  .coach-copy {\n    margin: 0;\n    color: #66756e;\n    font-size: 12px;\n    line-height: 1.45;\n  }\n\n  .coach-guide-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    min-height: 30px;\n    margin-top: 10px;\n    padding: 0 10px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n    font-size: 12px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.12);\n  }\n\n  .coach-guide-link svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  .coach-guide-link:active {\n    transform: scale(0.97);\n  }\n\n  .tutorial-backdrop {\n    position: fixed;\n    inset: 0;\n    z-index: 300;\n    display: grid;\n    place-items: center;\n    padding: max(18px, env(safe-area-inset-top, 0px)) 18px max(18px, env(safe-area-inset-bottom, 0px));\n    background: rgba(17, 31, 24, 0.34);\n    backdrop-filter: blur(14px);\n  }\n\n  .tutorial-card {\n    position: relative;\n    width: min(calc(100vw - 48px), 360px);\n    max-height: min(760px, calc(100vh - 36px));\n    box-sizing: border-box;\n    overflow: auto;\n    padding: 16px;\n    border-radius: 8px;\n    background:\n      radial-gradient(circle at 88% 6%, rgba(22, 119, 255, 0.12), transparent 26%),\n      linear-gradient(180deg, rgba(255,255,255,0.98), rgba(243, 255, 249, 0.98));\n    border: 1px solid rgba(255,255,255,0.72);\n    box-shadow: 0 24px 70px rgba(9, 35, 23, 0.28);\n    animation: tutorialIn 0.28s ease-out;\n  }\n\n  .tutorial-close {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    z-index: 2;\n    width: 32px;\n    height: 32px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.84);\n    color: #687870;\n    font-size: 14px;\n    font-weight: 900;\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.06);\n  }\n\n  .tutorial-hero {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    padding-right: 34px;\n  }\n\n  .tutorial-panda {\n    width: 78px;\n    height: 78px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.12);\n  }\n\n  .tutorial-panda .panda-buddy-svg {\n    width: 74px;\n    height: 74px;\n  }\n\n  .tutorial-copy-block {\n    min-width: 0;\n  }\n\n  .tutorial-kicker {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    margin-bottom: 6px;\n    color: #07a653;\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .tutorial-kicker span:last-child {\n    color: #90a098;\n  }\n\n  .tutorial-copy-block h2 {\n    margin: 0;\n    color: #14251c;\n    font-size: 21px;\n    line-height: 1.1;\n    font-weight: 900;\n  }\n\n  .tutorial-copy-block p {\n    margin: 7px 0 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.45;\n    font-weight: 700;\n  }\n\n  .tutorial-progress {\n    height: 7px;\n    margin: 15px 0;\n    overflow: hidden;\n    border-radius: 999px;\n    background: #dfece6;\n  }\n\n  .tutorial-progress-fill {\n    height: 100%;\n    border-radius: 999px;\n    background: linear-gradient(90deg, #07c160, #1677ff);\n    transition: width 0.25s ease;\n  }\n\n  .tutorial-step-card {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    min-height: 112px;\n    padding: 14px;\n    border-radius: 8px;\n    background: #fff;\n    box-shadow: 0 12px 28px rgba(20, 49, 35, 0.08);\n  }\n\n  .tutorial-step-icon {\n    width: 50px;\n    height: 50px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    color: #fff;\n    box-shadow: 0 12px 22px rgba(7, 193, 96, 0.18);\n  }\n\n  .tutorial-step-icon svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  .tutorial-step-card h3 {\n    margin: 0;\n    color: #14251c;\n    font-size: 17px;\n    line-height: 1.16;\n    font-weight: 900;\n  }\n\n  .tutorial-step-card p {\n    margin: 6px 0 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.45;\n    font-weight: 700;\n  }\n\n  .tutorial-dots {\n    display: flex;\n    justify-content: center;\n    gap: 6px;\n    margin: 14px 0;\n  }\n\n  .tutorial-dots span {\n    width: 7px;\n    height: 7px;\n    border-radius: 999px;\n    background: #cddbd4;\n    transition: width 0.2s ease, background 0.2s ease;\n  }\n\n  .tutorial-dots span.active {\n    width: 22px;\n    background: #07c160;\n  }\n\n  .tutorial-open-step {\n    width: 100%;\n    min-height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    margin-bottom: 12px;\n    border-radius: 8px;\n    background: linear-gradient(135deg, #07c160, #0aa75a);\n    color: #fff;\n    font-size: 14px;\n    font-weight: 900;\n    box-shadow: 0 12px 24px rgba(7, 193, 96, 0.22);\n  }\n\n  .tutorial-open-step svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  .tutorial-actions {\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n  }\n\n  .tutorial-action-pair {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n    min-width: 0;\n    width: 100%;\n  }\n\n  .tutorial-quiet,\n  .tutorial-secondary,\n  .tutorial-primary {\n    min-height: 38px;\n    padding: 0 12px;\n    border-radius: 8px;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .tutorial-quiet {\n    color: #687870;\n  }\n\n  .tutorial-secondary {\n    background: #fff;\n    color: #1677ff;\n    box-shadow: inset 0 0 0 1px rgba(22, 119, 255, 0.14);\n  }\n\n  .tutorial-secondary:disabled {\n    opacity: 0.4;\n  }\n\n  .tutorial-primary {\n    background: #e8fff3;\n    color: #07a653;\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.14);\n  }\n\n  .tutorial-quiet {\n    justify-self: start;\n  }\n\n  @media (max-width: 600px) {\n    .tutorial-card {\n      justify-self: start;\n    }\n  }\n\n  @keyframes tutorialIn {\n    from { opacity: 0; transform: translateY(12px) scale(0.98); }\n    to { opacity: 1; transform: translateY(0) scale(1); }\n  }\n\n  .lesson-service-icon {\n    width: 46px;\n    height: 46px;\n    display: grid;\n    place-items: center;\n    flex: 0 0 auto;\n    border-radius: 8px;\n    background: #f0fff6;\n    color: #07a653;\n  }\n\n  .lesson-service-icon svg {\n    width: 22px;\n    height: 22px;\n  }\n\n  .service-row:nth-child(2n) .lesson-service-icon {\n    background: #eff6ff;\n    color: #1677ff;\n  }\n\n  .service-row:nth-child(3n) .lesson-service-icon {\n    background: #fff6e6;\n    color: #c77600;\n  }\n\n  @keyframes coachFloat {\n    0%, 100% { transform: translateY(0) rotate(-1deg); }\n    50% { transform: translateY(-5px) rotate(1deg); }\n  }\n\n  @keyframes stickerBob {\n    0%, 100% { transform: translateY(0) rotate(-1deg); }\n    50% { transform: translateY(-4px) rotate(1deg); }\n  }\n\n  @keyframes tabPop {\n    0% { transform: translateY(0) scale(1); }\n    50% { transform: translateY(-3px) scale(1.08); }\n    100% { transform: translateY(0) scale(1); }\n  }\n\n  /* ===== MINI-PROGRAM SYSTEM ===== */\n  .mini-app-hero {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 12px;\n    align-items: center;\n    padding: 14px;\n    margin: 0 0 14px;\n    border-radius: 8px;\n    background:\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239, 255, 247, 0.96));\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);\n    border: 1px solid rgba(24, 33, 43, 0.05);\n  }\n\n  .mini-app-hero-icon {\n    width: 48px;\n    height: 48px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    color: #fff;\n    background: linear-gradient(135deg, #07c160, #1677ff);\n    box-shadow: 0 10px 20px rgba(7, 193, 96, 0.2);\n  }\n\n  .mini-app-hero-icon svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  .mini-app-title {\n    margin: 0;\n    color: #14251c;\n    font-size: 19px;\n    line-height: 1.08;\n    font-weight: 900;\n  }\n\n  .mini-app-subtitle {\n    margin: 4px 0 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.35;\n    font-weight: 700;\n  }\n\n  .mini-app-pill {\n    display: grid;\n    place-items: center;\n    min-width: 42px;\n    min-height: 30px;\n    padding: 0 9px;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n    font-size: 12px;\n    font-weight: 900;\n    white-space: nowrap;\n  }\n\n  .mini-app-progress-card {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 10px;\n    align-items: center;\n    margin: 0 0 12px;\n    padding: 12px 14px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.78);\n    box-shadow: inset 0 0 0 1px rgba(24, 33, 43, 0.05);\n  }\n\n  .mini-app-progress-card .text-sm {\n    margin: 0;\n  }\n\n  .mini-app-progress-count {\n    color: #07c160;\n    font-weight: 900;\n    font-size: 13px;\n  }\n\n  .daily-training-card {\n    padding: 14px;\n    margin-bottom: 14px;\n    border-radius: 8px;\n    background:\n      radial-gradient(circle at 88% 12%, rgba(22, 119, 255, 0.12), transparent 30%),\n      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239, 255, 247, 0.96));\n    border: 1px solid rgba(24, 33, 43, 0.05);\n    box-shadow: 0 12px 30px rgba(20, 49, 35, 0.08);\n  }\n\n  .daily-training-hero {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 12px;\n    align-items: center;\n    margin-bottom: 12px;\n  }\n\n  .daily-training-title {\n    margin: 0 0 4px;\n    color: #14251c;\n    font-size: 16px;\n    font-weight: 900;\n  }\n\n  .daily-training-copy {\n    margin: 0;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.45;\n    font-weight: 700;\n  }\n\n  .daily-queue-grid {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 8px;\n  }\n\n  .daily-queue-char {\n    min-height: 72px;\n    display: grid;\n    place-items: center;\n    gap: 2px;\n    padding: 8px 4px;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.9);\n    box-shadow: inset 0 0 0 1px rgba(7, 193, 96, 0.08);\n  }\n\n  .daily-queue-char .hanzi-display {\n    color: #07a653;\n    font-size: 30px;\n    line-height: 1;\n  }\n\n  .daily-queue-char small {\n    color: #687870;\n    font-size: 10px;\n    font-weight: 900;\n  }\n\n  .daily-reason-row {\n    display: flex;\n    gap: 8px;\n    margin-top: 12px;\n    color: #687870;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .daily-step-grid {\n    display: grid;\n    gap: 10px;\n    margin-bottom: 14px;\n  }\n\n  .daily-step-card {\n    position: relative;\n    min-height: 92px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-areas:\n      \"icon title\"\n      \"icon copy\";\n    gap: 3px 12px;\n    align-items: center;\n    padding: 14px;\n    border: 0;\n    border-radius: 8px;\n    background: rgba(255,255,255,0.9);\n    color: #1d2c35;\n    text-align: left;\n    box-shadow: 0 10px 24px rgba(20, 49, 35, 0.07);\n    overflow: hidden;\n  }\n\n  .daily-step-card.primary {\n    background:\n      linear-gradient(135deg, rgba(7, 193, 96, 0.96), rgba(22, 119, 255, 0.88));\n    color: #fff;\n    box-shadow: 0 16px 32px rgba(7, 193, 96, 0.18);\n  }\n\n  .daily-step-card:active {\n    transform: scale(0.985);\n  }\n\n  .daily-step-index {\n    position: absolute;\n    right: 12px;\n    top: 8px;\n    color: rgba(7, 193, 96, 0.14);\n    font-size: 48px;\n    font-weight: 900;\n    line-height: 1;\n  }\n\n  .daily-step-card.primary .daily-step-index {\n    color: rgba(255,255,255,0.18);\n  }\n\n  .daily-step-icon {\n    grid-area: icon;\n    width: 48px;\n    height: 48px;\n    display: grid;\n    place-items: center;\n    border-radius: 8px;\n    background: #e8fff3;\n    color: #07a653;\n  }\n\n  .daily-step-card.primary .daily-step-icon {\n    background: rgba(255,255,255,0.18);\n    color: #fff;\n  }\n\n  .daily-step-card strong {\n    grid-area: title;\n    position: relative;\n    z-index: 1;\n    font-size: 17px;\n    line-height: 1.1;\n  }\n\n  .daily-step-card span:last-child {\n    grid-area: copy;\n    position: relative;\n    z-index: 1;\n    color: #687870;\n    font-size: 12px;\n    line-height: 1.35;\n    font-weight: 700;\n  }\n\n  .daily-step-card.primary span:last-child {\n    color: rgba(255,255,255,0.84);\n  }\n\n  .dual-label {\n    display: block;\n    line-height: 1.15;\n  }\n\n  .dual-label strong {\n    display: block;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .dual-label span {\n    display: block;\n    margin-top: 1px;\n    font-size: 10px;\n    color: #728078;\n    font-weight: 800;\n  }\n\n  .section-title-cn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    margin: 20px 0 10px;\n    color: #687870;\n    font-size: 12px;\n    font-weight: 900;\n  }\n\n  .section-title-cn span:first-child {\n    color: #14251c;\n  }\n\n  @media (min-width: 980px) {\n    .home-screen {\n      width: min(calc(100vw - 72px), 920px);\n      max-width: 920px;\n      display: grid;\n      grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);\n      gap: 18px;\n      align-items: start;\n      padding-bottom: 124px;\n    }\n\n    .home-screen .super-topbar,\n    .home-screen .super-searchbar,\n    .home-screen .illustration-strip,\n    .home-screen .quick-lane,\n    .home-screen .mini-program-panel,\n    .home-screen .home-metrics,\n    .home-screen .section-title,\n    .home-screen .account-entry {\n      grid-column: 1 / -1;\n    }\n\n    .home-screen .super-topbar,\n    .home-screen .super-searchbar,\n    .home-screen .wallet-card,\n    .home-screen .daily-entry-card,\n    .home-screen .illustration-strip,\n    .home-screen .quick-lane,\n    .home-screen .mini-program-panel,\n    .home-screen .cute-coach-card,\n    .home-screen .insight-panel,\n    .home-screen .home-metrics,\n    .home-screen .account-entry {\n      margin-bottom: 0;\n    }\n\n    .home-screen .wallet-card {\n      min-height: 248px;\n    }\n\n    .home-screen .daily-entry-card {\n      align-self: stretch;\n      min-height: 248px;\n    }\n\n    .home-screen .illustration-strip {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .home-screen .quick-lane {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n\n    .home-screen .mini-program-grid {\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n\n    .home-screen .cute-coach-card,\n    .home-screen .insight-panel {\n      min-height: 132px;\n    }\n  }\n\n  @media (max-width: 380px) {\n    .mini-app-hero {\n      grid-template-columns: auto 1fr;\n    }\n\n    .mini-app-pill {\n      grid-column: 1 / -1;\n      justify-self: start;\n    }\n\n    .tutorial-card {\n      padding: 14px;\n    }\n\n    .tutorial-hero {\n      grid-template-columns: 1fr;\n      padding-right: 34px;\n    }\n\n    .tutorial-panda {\n      width: 66px;\n      height: 66px;\n    }\n\n    .tutorial-panda .panda-buddy-svg {\n      width: 64px;\n      height: 64px;\n    }\n\n    .tutorial-actions {\n      align-items: stretch;\n      flex-direction: column;\n    }\n\n    .tutorial-action-pair {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      width: 100%;\n    }\n  }\n";
const TUTORIAL_STORAGE_KEY = 'hanzi_master_tutorial_seen';
const isSecretRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.endsWith('/secret') || window.location.hash === '#secret' || new URLSearchParams(window.location.search).get('view') === 'secret';
};
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
  const [currentView, setCurrentView] = React.useState(() => isSecretRoute() ? 'secret' : 'home');
  const [progress, setProgress] = React.useState(loadProgress);
  const [selectedLesson, setSelectedLesson] = React.useState(null);
  const [selectedQueue, setSelectedQueue] = React.useState(null);
  const [language, setLanguage] = React.useState(loadLanguage);
  const [soundEnabled, setSoundEnabled] = React.useState(loadSoundEnabled);
  const [ambienceEnabled, setAmbienceEnabled] = React.useState(loadAmbienceEnabled);
  const [tutorialOpen, setTutorialOpen] = React.useState(() => !isSecretRoute() && !loadTutorialSeen());
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
  }, viewProps)), currentView === 'secret' && React.createElement(SecretCheatSheetView, _extends({
    key: "secret"
  }, viewProps)), React.createElement(BottomNav, {
    currentView: currentView,
    setCurrentView: setCurrentViewWithSound,
    setSelectedLesson: setSelectedLesson,
    setSelectedQueue: setSelectedQueue,
    t: t
  }), React.createElement(TutorialOverlay, {
    open: tutorialOpen && currentView !== 'secret',
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
  if (['learn', 'draw', 'quiz', 'daily', 'secret'].includes(currentView)) return null;
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
  if (name === 'download') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M12 3v12M7.5 10.5 12 15l4.5-4.5"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M5 20h14"
  })));
  if (name === 'print') return React.createElement("svg", common, React.createElement("path", _extends({}, stroke, {
    d: "M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M7 14h10v7H7z"
  })), React.createElement("path", _extends({}, stroke, {
    d: "M17 11h.01"
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
  }, currentChar.example), React.createElement(MemoryScroll, {
    item: currentChar,
    t: t
  })), !isFlipped && React.createElement("p", {
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
  }, currentChar.meaning)))), (drawMode === 'learn' || showReference) && React.createElement(MemoryScroll, {
    item: currentChar,
    t: t,
    compact: true
  }), React.createElement("div", {
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
  }, q.char.pinyin)) : React.createElement("strong", null, t('quiz.tryAgain')), canContinue && React.createElement(MemoryScroll, {
    item: q.char,
    t: t,
    compact: true
  })), canContinue && React.createElement("div", {
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
  const isOfflineCopy = window.location.protocol === 'file:';
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
    className: "section-title",
    style: {
      marginTop: '28px'
    }
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.offline')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "offline-pack-card"
  }, React.createElement("span", {
    className: "offline-pack-icon"
  }, React.createElement(AppIcon, {
    name: "download"
  })), React.createElement("div", {
    className: "offline-pack-copy"
  }, React.createElement("p", {
    className: "title-md"
  }, t('stats.offlineTitle')), React.createElement("p", {
    className: "text-sm"
  }, t('stats.offlineHint'))), isOfflineCopy ? React.createElement("span", {
    className: "offline-ready-pill"
  }, t('stats.offlineReady')) : React.createElement("a", {
    className: "btn btn-primary offline-download-button",
    href: "hanzi-master-offline.zip",
    download: "hanzi-master-offline.zip"
  }, React.createElement(AppIcon, {
    name: "download"
  }), React.createElement("span", null, t('stats.offlineDownload')))), React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, React.createElement("button", {
    className: "btn btn-coral",
    onClick: handleReset
  }, t('stats.reset'))));
}
const EXAMPLE_TRANSLATIONS = {
  '妈妈，我爱你。': 'Mom, I love you.',
  '他儿子今年八岁了。': 'His son is eight years old this year.',
  '我爸爸是医生。': 'My father is a doctor.',
  '杯子里有茶。': 'There is tea in the cup.',
  '我住在北京。': 'I live in Beijing.',
  '桌子上有一本书。': 'There is a book on the table.',
  '甲：谢谢你！乙：不客气。': 'A: Thank you! B: You are welcome.',
  '我不是学生。': 'I am not a student.',
  '我去超市买点儿菜。': 'I am going to the supermarket to buy some groceries.',
  '请喝杯茶吧。': 'Please have a cup of tea.',
  '请吃点儿米饭。': 'Please have some rice.',
  '我们坐出租车去火车站。': 'We are taking a taxi to the train station.',
  '他在打电话呢。': 'He is making a phone call.',
  '这个苹果很大。': 'This apple is very big.',
  '这是我的书。': 'This is my book.',
  '现在是下午 3点20。': 'It is 3:20 p.m. now.',
  '我买了个电脑。': 'I bought a computer.',
  '妈妈在看电视。': 'Mom is watching television.',
  '我喜欢看电影。': 'I like watching movies.',
  '我在商店买了很多东西。': 'I bought many things at the store.',
  '我们都来了。': 'We have all arrived.',
  '你会读这个汉字吗？': 'Can you read this Chinese character?',
  '甲：对不起。乙：没关系。': 'A: Sorry. B: It is all right.',
  '这里的人很多。': 'There are many people here.',
  '你们学校有多少学生？': 'How many students are there at your school?',
  '我儿子三岁了。': 'My son is three years old.',
  '现在十二点了。': 'It is twelve o’clock now.',
  '中午我们去饭店吃吧。': 'Let’s go eat at a restaurant at noon.',
  '我坐飞机去北京。': 'I am going to Beijing by plane.',
  '我想休息几分钟。': 'I want to rest for a few minutes.',
  '今天我很高兴。': 'I am very happy today.',
  '我是一个学生。': 'I am a student.',
  '我很喜欢现在的工作。': 'I really like my current job.',
  '他在学习汉语。': 'He is studying Chinese.',
  '今天天气很好。': 'The weather is very nice today.',
  '今天是 2002 年 1 月 1号。': 'Today is January 1, 2002.',
  '我想喝水。': 'I want to drink water.',
  '爸爸和妈妈都在家。': 'Dad and Mom are both at home.',
  '李小姐很漂亮。': 'Miss Li is very beautiful.',
  '商店在学校后面。': 'The store is behind the school.',
  '我八点回家。': 'I go home at eight o’clock.',
  '我会开车。': 'I can drive.',
  '你有几个儿子？': 'How many sons do you have?',
  '我家在北京。': 'My home is in Beijing.',
  '我的名字叫李明。': 'My name is Li Ming.',
  '我今天去北京。': 'I am going to Beijing today.',
  '今天是八月九日。': 'Today is August 9.',
  '我开了三年出租车了。': 'I have driven a taxi for three years.',
  '你看，那本书在桌子上呢。': 'Look, that book is on the table.',
  '我没看见他。': 'I did not see him.',
  '这本书三十块钱。': 'This book costs thirty yuan.',
  '他是昨天来这儿的。': 'He came here yesterday.',
  '他就是我们的汉语老师。': 'He is our Chinese teacher.',
  '昨天下雨了。': 'It rained yesterday.',
  '今天太冷了。': 'It is too cold today.',
  '我们都在学校里。': 'We are all at school.',
  '今年是二零一二年。': 'This year is 2012.',
  '桌子上有六个杯子。': 'There are six cups on the table.',
  '我妈妈不在家。': 'My mother is not at home.',
  '你是中国人吗？': 'Are you Chinese?',
  '我买了一些苹果。': 'I bought some apples.',
  '甲：对不起！乙：没关系。': 'A: Sorry! B: It is all right.',
  '我家里没有人。': 'There is nobody at my home.',
  '我爱吃米饭。': 'I love eating rice.',
  '今天星期日，明天是星期一。': 'Today is Sunday, and tomorrow is Monday.',
  '哪个杯子是你的？': 'Which cup is yours?',
  '你家在哪儿？': 'Where is your home?',
  '我不认识那（那儿）个人。': 'I do not know that person.',
  '你们家有几个人呢？': 'How many people are in your family?',
  '我能坐在这儿吗？': 'May I sit here?',
  '你认识这个人吗？': 'Do you know this person?',
  '我在中国住了三年。': 'I lived in China for three years.',
  '我有两个女儿。': 'I have two daughters.',
  '他是我的好朋友。': 'He is my good friend.',
  '你的衣服真漂亮。': 'Your clothes are really beautiful.',
  '你想不想吃个苹果？': 'Would you like to eat an apple?',
  '一个星期有七天。': 'There are seven days in a week.',
  '一个苹果三块钱。': 'One apple costs three yuan.',
  '前面那个人是我的同学。': 'The person in front is my classmate.',
  '请坐在椅子上。': 'Please sit on the chair.',
  '我星期三去中国。': 'I am going to China on Wednesday.',
  '今天很热。': 'It is very hot today.',
  '商店里有很多人。': 'There are many people in the store.',
  '认识你很高兴。': 'Nice to meet you.',
  '我有三本书。': 'I have three books.',
  '她去商店买东西了。': 'She went to the store to buy things.',
  '水果在桌子上。': 'The fruit is on the table.',
  '现在是上午10 点。': 'It is 10 a.m. now.',
  '杯子里的水很少。': 'There is very little water in the cup.',
  '那个人是谁？': 'Who is that person?',
  '你看见了什么？': 'What did you see?',
  '现在是十月。': 'It is October now.',
  '我回家的时候，他在睡觉。': 'He was sleeping when I came home.',
  '他不是学生。': 'He is not a student.',
  '我喜欢读书。': 'I like reading books.',
  '杯子里还有水吗？': 'Is there still water in the cup?',
  '我想去商店买水果。': 'I want to go to the store to buy fruit.',
  '儿子在睡觉呢。': 'My son is sleeping.',
  '你在说什么？': 'What are you saying?',
  '他们在说话。': 'They are talking.',
  '我们四个人去看电影。': 'The four of us are going to see a movie.',
  '李医生今年 40岁。': 'Doctor Li is forty years old this year.',
  '他是我们的老师。': 'He is our teacher.',
  '我认识她的妈妈。': 'I know her mother.',
  '这个学校太大了。': 'This school is very big.',
  '今天的天气非常好。': 'The weather is exceptionally nice today.',
  '你听，谁来了？': 'Listen, who has come?',
  '同学们，你们好！': 'Hello, students!',
  '喂李老师在吗？': 'Hello, is Teacher Li there?',
  '我们都是学生。': 'We are all students.',
  '今天星期五。': 'Today is Friday.',
  '我喜欢学汉语。': 'I like studying Chinese.',
  '小猫在桌子下面。': 'The kitten is under the table.',
  '我今天下午不去学校了。': 'I am not going to school this afternoon.',
  '你也认识王先生？': 'Do you know Mr. Wang too?',
  '现在是 12 点。': 'It is twelve o’clock now.',
  '我想星期六去北京。': 'I want to go to Beijing on Saturday.',
  '这个苹果太小了。': 'This apple is too small.',
  '小姐你叫什么名字？': 'Miss, what is your name?',
  '我买了些苹果。': 'I bought some apples.',
  '你写的字很漂亮。': 'The characters you write are beautiful.',
  '甲：谢谢你。乙：不客气！': 'A: Thank you. B: You are welcome!',
  '我们学校里的学生很多。': 'There are many students at our school.',
  '你喜欢学习汉语吗？': 'Do you like studying Chinese?',
  '我们学校很大。': 'Our school is very big.',
  '这儿一个人都没有。': 'There is not a single person here.',
  '我只有一点儿钱。': 'I only have a little money.',
  '我在商店买了很多衣服。': 'I bought many clothes at the store.',
  '他是这个医院里的医生。': 'He is a doctor at this hospital.',
  '这是一个大医院。': 'This is a large hospital.',
  '小狗在椅子下面呢。': 'The puppy is under the chair.',
  '我有一个女儿。': 'I have one daughter.',
  '一年有 12 个月。': 'There are twelve months in a year.',
  '妈妈，我去学校了，再见。': 'Mom, I am going to school. Goodbye.',
  '书在桌子上。': 'The book is on the table.',
  '你怎么去北京？': 'How are you going to Beijing?',
  '我们去看电影，怎么样？': 'How about going to see a movie?',
  '个人是我的同学。': 'That person is my classmate.',
  '我在中国学汉语。': 'I study Chinese in China.',
  '我今天中午去火车站。': 'I am going to the train station at noon today.',
  '他在北京住了很多年。': 'He has lived in Beijing for many years.',
  '电脑在桌子上。': 'The computer is on the table.',
  '这个字你认识吗？': 'Do you know this character?',
  '他昨天没去学校。': 'He did not go to school yesterday.',
  '他一个下午都坐在电视前。': 'He sat in front of the television all afternoon.',
  '今天妈妈做了很多菜。': 'Mom cooked many dishes today.',
  '我喜欢踢足球。': 'I like playing football.',
  '下午我们一起去踢足球吧。': 'Let’s play football together this afternoon.',
  '桌子下面有一只猫。': 'There is a cat under the table.',
  '它的眼睛很漂亮。': 'Its eyes are beautiful.',
  '九月去北京旅游最好。': 'September is the best time to travel to Beijing.',
  '你喜欢什么运动？': 'What sport do you like?',
  '我最喜欢吃米饭。': 'I like eating rice the most.',
  '每个人都来了。': 'Everyone has arrived.',
  '我每天六点起床。': 'I get up at six every day.',
  '我早上去跑步。': 'I go running in the morning.',
  '我每天六点半起床。': 'I get up at half past six every day.',
  '他每天早上跑步。': 'He runs every morning.',
  '生病了要按时吃药。': 'When you are ill, you should take your medicine on time.',
  '他生病住院了。': 'He became ill and was admitted to hospital.',
  '你应该好好休息。': 'You should get a good rest.',
  '医生说我明天可以出院。': 'The doctor said I can leave the hospital tomorrow.',
  '我今天很忙。': 'I am very busy today.',
  '他每天早上看报纸。': 'He reads the newspaper every morning.',
  '我用手表看时间。': 'I check the time on my watch.',
  '早餐我喝一杯牛奶。': 'I drink a glass of milk for breakfast.',
  '这个房间很干净。': 'This room is very clean.',
  '她的丈夫是医生。': 'Her husband is a doctor.',
  '左边那个红色的是我的。': 'The red one on the left is mine.',
  '这块手表是朋友送给我的。': 'This watch was given to me by a friend.',
  '牛奶在报纸旁边。': 'The milk is beside the newspaper.',
  '你看一下这个房间。': 'Take a look at this room.',
  '这个房间真漂亮。': 'This room is really beautiful.',
  '请给我打电话。': 'Please call me.',
  '我去机场接朋友。': 'I am going to the airport to pick up a friend.',
  '我想问你一个问题。': 'I want to ask you a question.',
  '这个问题不难。': 'This question is not difficult.',
  '今天是我的生日。': 'Today is my birthday.',
  '我们晚上出去吃饭。': 'We are going out for dinner tonight.',
  '这个工作是朋友介绍的。': 'A friend introduced me to this job.',
  '他给我介绍了一份工作。': 'He introduced a job to me.',
  '这个工作是他帮我介绍的。': 'He was the one who helped introduce me to this job.',
  '我想喝一杯咖啡。': 'I would like a cup of coffee.',
  '我们今天去吃鱼。': 'We are going to eat fish today.',
  '明天有汉语考试。': 'There is a Chinese exam tomorrow.',
  '这件衣服很漂亮。': 'This item of clothing is beautiful.',
  '下课以后我们去打球。': 'Let’s go play ball after class.',
  '就买这件衣服吧。': 'Let’s buy this one.',
  '我就买这件。': 'I will buy this one.',
  '我们休息一下吧。': 'Let’s take a short break.',
  '你为什么不吃饭？': 'Why are you not eating?',
  '你怎么不吃了？': 'Why did you stop eating?',
  '她早餐喜欢喝牛奶。': 'She likes drinking milk for breakfast.',
  '爸爸正在看报纸。': 'Dad is reading the newspaper.',
  '他们正在打篮球。': 'They are playing basketball.',
  '我正在学习汉语。': 'I am studying Chinese.',
  '你吃得太少了。': 'You are eating too little.',
  '我去商店买东西。': 'I am going to the store to buy things.',
  '我在去机场的路上。': 'I am on the way to the airport.',
  '老师在教室里。': 'The teacher is in the classroom.',
  '现在没有时间。': 'There is no time now.',
  '我家离公司很近。': 'My home is close to the company.',
  '他在公司上班。': 'He works at a company.',
  '你家离公司远吗？': 'Is your home far from the company?',
  '她很喜欢唱歌。': 'She really likes singing.',
  '他每天八点去上班。': 'He goes to work at eight every day.',
  '这个答案是对的。': 'This answer is correct.',
  '这道题做错了。': 'This question was answered incorrectly.',
  '题太多，我没做完。': 'There were too many questions, so I did not finish.',
  '这是第一个问题。': 'This is the first question.',
  '她正在学习跳舞。': 'She is learning to dance.',
  '今天的问题太多了。': 'There are too many questions today.',
  '作业我已经做完了。': 'I have already finished the homework.',
  '早饭我吃两个鸡蛋。': 'I eat two eggs for breakfast.',
  '桌子上有一个西瓜。': 'There is a watermelon on the table.',
  '手机在桌子上呢。': 'The phone is on the table.',
  '妈妈正在准备午饭。': 'Mom is preparing lunch.',
  '我们十二点吃午饭。': 'We eat lunch at twelve.',
  '别找了，手机在这里。': 'Stop looking; the phone is here.',
  '我在找我的手机。': 'I am looking for my phone.',
  '上课的时候别说话。': 'Do not talk during class.',
  '那个女孩是我妹妹。': 'That girl is my younger sister.',
  '那个男人是我老师。': 'That man is my teacher.',
  '他比我大三岁。': 'He is three years older than me.',
  '我今年二十岁。': 'I am twenty years old this year.',
  '那个孩子在学习说话。': 'That child is learning to speak.',
  '他手里拿着一个苹果。': 'He is holding an apple in his hand.',
  '桌子上有一支铅笔。': 'There is a pencil on the table.',
  '我们住在这家宾馆。': 'We are staying at this hotel.',
  '她手里拿着一把伞。': 'She is holding an umbrella.',
  '我在前面的路口等你。': 'I will wait for you at the intersection ahead.',
  '门开着呢。': 'The door is open.',
  '桌子上放着一本书。': 'A book is lying on the table.',
  '我买了两张火车票。': 'I bought two train tickets.',
  '祝你新年快乐！': 'Happy New Year!',
  '谢谢你帮助我。': 'Thank you for helping me.',
  '今天是阴天。': 'It is cloudy today.',
  '我在火车站等你。': 'I am waiting for you at the train station.',
  '新年就要到了。': 'New Year is almost here.',
  '火车快要开了。': 'The train is about to leave.',
  '天快黑了。': 'It is getting dark.',
  '我喜欢黑白照片。': 'I like black-and-white photographs.',
  '服务员，请买单。': 'Waiter, the bill please.',
  '请等我一会儿。': 'Please wait for me for a moment.',
  '他的妻子很漂亮。': 'His wife is very beautiful.',
  '外面正在下雪。': 'It is snowing outside.',
  '他们买了一套新房子。': 'They bought a new home.',
  '我们去电影院看电影。': 'We are going to the cinema to see a movie.',
  '明天是晴天。': 'It will be sunny tomorrow.',
  '孩子们在外面玩儿。': 'The children are playing outside.'
};
const EXAMPLE_PINYIN_FALLBACKS = {
  今: 'jīn',
  甲: 'jiǎ',
  乙: 'yǐ',
  超: 'chāo',
  市: 'shì',
  儿: 'ér',
  杯: 'bēi',
  这: 'zhè',
  汉: 'hàn',
  们: 'men',
  李: 'lǐ',
  车: 'chē',
  明: 'míng',
  日: 'rì',
  那: 'nà',
  没: 'méi',
  高: 'gāo',
  两: 'liǎng',
  天: 'tiān',
  还: 'hái',
  非: 'fēi',
  常: 'cháng',
  学: 'xué',
  面: 'miàn',
  也: 'yě',
  王: 'wáng',
  只: 'zhī',
  狗: 'gǒu',
  前: 'qián',
  起: 'qǐ',
  它: 'tā',
  把: 'bǎ',
  新: 'xīn',
  半: 'bàn',
  要: 'yào',
  按: 'àn',
  时: 'shí',
  院: 'yuàn',
  应: 'yīng',
  该: 'gāi',
  可: 'kě',
  以: 'yǐ',
  用: 'yòng',
  早: 'zǎo',
  餐: 'cān',
  干: 'gān',
  净: 'jìng',
  左: 'zuǒ',
  边: 'biān',
  难: 'nán',
  出: 'chū',
  饭: 'fàn',
  份: 'fèn',
  帮: 'bāng',
  课: 'kè',
  后: 'hòu',
  得: 'de',
  近: 'jìn',
  答: 'dá',
  案: 'àn',
  道: 'dào',
  题: 'tí',
  作: 'zuò',
  业: 'yè',
  已: 'yǐ',
  经: 'jīng',
  孩: 'hái',
  妹: 'mèi',
  支: 'zhī',
  伞: 'sǎn',
  放: 'fàng',
  张: 'zhāng',
  火: 'huǒ',
  祝: 'zhù',
  快: 'kuài',
  乐: 'lè',
  到: 'dào',
  照: 'zhào',
  片: 'piàn',
  单: 'dān',
  外: 'wài',
  套: 'tào'
};
const extractPrimaryExample = (value = '') => {
  const example = value.trim();
  if (!example) return '';
  const dialogue = example.match(/^甲：.*?乙：.*?[\u3002\uff01\uff1f]/u);
  if (dialogue) return dialogue[0].trim();
  const sentence = example.match(/[\u3400-\u9fff\u3000-\u303f\uff00-\uffef0-9\s]+?[\u3002\uff01\uff1f]/u);
  return (sentence?.[0] || example).trim();
};
const buildExamplePinyin = (sentence, vocabulary) => {
  if (!sentence) return '';
  const phrases = new Map();
  vocabulary.forEach(item => {
    if (item.hanzi && item.pinyin) phrases.set(item.hanzi, item.pinyin);
  });
  Object.entries(EXAMPLE_PINYIN_FALLBACKS).forEach(([hanzi, pinyin]) => {
    if (!phrases.has(hanzi)) phrases.set(hanzi, pinyin);
  });
  const maxLength = Math.max(1, ...Array.from(phrases.keys(), item => item.length));
  const output = [];
  for (let index = 0; index < sentence.length;) {
    const character = sentence[index];
    if (/\s/.test(character)) {
      index += 1;
      continue;
    }
    if (/[0-9]/.test(character)) {
      let end = index + 1;
      while (end < sentence.length && /[0-9]/.test(sentence[end])) end += 1;
      output.push(sentence.slice(index, end));
      index = end;
      continue;
    }
    if (!/[\u3400-\u9fff]/u.test(character)) {
      output.push(character);
      index += 1;
      continue;
    }
    let match = '';
    for (let length = Math.min(maxLength, sentence.length - index); length > 0; length -= 1) {
      const candidate = sentence.slice(index, index + length);
      if (phrases.has(candidate)) {
        match = candidate;
        break;
      }
    }
    output.push(match ? phrases.get(match) : character);
    index += match ? match.length : 1;
  }
  return output.join(' ').replace(/\s+([，。！？：；、）])/g, '$1').replace(/（\s+/g, '（').replace(/\s+/g, ' ').trim();
};
const annotateVocabularyExamples = vocabulary => vocabulary.map(item => {
  const example = extractPrimaryExample(item.example);
  if (!example || !EXAMPLE_TRANSLATIONS[example]) {
    return {
      ...item,
      example
    };
  }
  return {
    ...item,
    example,
    examplePinyin: buildExamplePinyin(example, vocabulary),
    exampleTranslation: EXAMPLE_TRANSLATIONS[example]
  };
});
const SECRET_NUMBERS = [['0', '零', 'líng'], ['1', '一', 'yī'], ['2', '二 / 两', 'èr / liǎng'], ['3', '三', 'sān'], ['4', '四', 'sì'], ['5', '五', 'wǔ'], ['6', '六', 'liù'], ['7', '七', 'qī'], ['8', '八', 'bā'], ['9', '九', 'jiǔ'], ['10', '十', 'shí'], ['11', '十一', 'shíyī'], ['20', '二十', 'èrshí'], ['21', '二十一', 'èrshíyī'], ['100', '一百', 'yìbǎi'], ['101', '一百零一', 'yìbǎi líng yī'], ['1,000', '一千', 'yìqiān'], ['10,000', '一万', 'yíwàn']];
const SECRET_TIME_PATTERNS = [{
  label: 'Year',
  formula: 'digits + 年',
  hanzi: '二零二六年',
  pinyin: 'èr líng èr liù nián',
  meaning: 'the year 2026'
}, {
  label: 'Month',
  formula: 'number + 月',
  hanzi: '九月',
  pinyin: 'jiǔ yuè',
  meaning: 'September'
}, {
  label: 'Date',
  formula: 'number + 号 / 日',
  hanzi: '七月五号',
  pinyin: 'qī yuè wǔ hào',
  meaning: 'July 5'
}, {
  label: 'Weekday',
  formula: '星期 + 1-6 / 日',
  hanzi: '星期五',
  pinyin: 'xīngqīwǔ',
  meaning: 'Friday'
}, {
  label: 'Clock',
  formula: 'period + 点 + 分',
  hanzi: '下午三点二十分',
  pinyin: 'xiàwǔ sān diǎn èrshí fēn',
  meaning: '3:20 p.m.'
}, {
  label: 'Age',
  formula: 'number + 岁',
  hanzi: '我二十岁。',
  pinyin: 'wǒ èrshí suì',
  meaning: 'I am 20 years old.'
}, {
  label: 'Money',
  formula: 'number + 块 / 元',
  hanzi: '三块钱',
  pinyin: 'sān kuài qián',
  meaning: 'three yuan'
}, {
  label: 'Duration',
  formula: 'number + time unit',
  hanzi: '我学了两年。',
  pinyin: 'wǒ xué le liǎng nián',
  meaning: 'I studied for two years.'
}];
const SECRET_MEASURE_WORDS = [['个', 'gè', 'general people and things', '三个人'], ['本', 'běn', 'books and bound volumes', '两本书'], ['杯', 'bēi', 'cups and glasses', '一杯咖啡'], ['件', 'jiàn', 'clothes and matters', '这件衣服'], ['张', 'zhāng', 'flat objects and tickets', '两张票'], ['只', 'zhī', 'many animals; one of a pair', '一只猫'], ['把', 'bǎ', 'handled objects and chairs', '一把椅子'], ['位', 'wèi', 'polite measure for people', '一位老师'], ['家', 'jiā', 'businesses and institutions', '一家商店'], ['辆', 'liàng', 'vehicles', '一辆车']];
const SECRET_QUESTION_WORDS = [['什么', 'shénme', 'what'], ['谁', 'shéi', 'who'], ['哪 / 哪儿', 'nǎ / nǎr', 'which / where'], ['几', 'jǐ', 'how many; small expected number'], ['多少', 'duōshao', 'how many; how much'], ['怎么', 'zěnme', 'how; why'], ['为什么', 'wèishénme', 'why'], ['什么时候', 'shénme shíhou', 'when'], ['怎么样', 'zěnmeyàng', 'how is it; how about']];
const SECRET_TONE_RULES = [{
  title: 'Four tones',
  copy: 'mā (1) · má (2) · mǎ (3) · mà (4); neutral tone stays light and short.'
}, {
  title: 'Third-tone pair',
  copy: '3rd + 3rd is pronounced 2nd + 3rd: 你好 nǐ hǎo → ní hǎo.'
}, {
  title: '一 tone change',
  copy: 'yí before a 4th tone; yì before 1st, 2nd, or 3rd tones; yī when isolated or ordinal.'
}, {
  title: '不 tone change',
  copy: 'bù becomes bú before a 4th-tone syllable: 不是 bú shì.'
}];
const SECRET_GRAMMAR = [{
  pattern: 'A 是 B',
  label: 'Identity',
  use: 'Use 是 to identify or classify.',
  hanzi: '我是学生。',
  pinyin: 'wǒ shì xuésheng',
  meaning: 'I am a student.'
}, {
  pattern: 'A 有 B',
  label: 'Possession',
  use: 'Use 有 for have; 没有 for do not have.',
  hanzi: '我有三本书。',
  pinyin: 'wǒ yǒu sān běn shū',
  meaning: 'I have three books.'
}, {
  pattern: 'A 在 place',
  label: 'Location',
  use: 'Put 在 before the place where someone or something is.',
  hanzi: '手机在桌子上。',
  pinyin: 'shǒujī zài zhuōzi shàng',
  meaning: 'The phone is on the table.'
}, {
  pattern: '在 / 正在 + V + 呢',
  label: 'Action in progress',
  use: 'Mark an action happening now.',
  hanzi: '他正在看报纸呢。',
  pinyin: 'tā zhèngzài kàn bàozhǐ ne',
  meaning: 'He is reading the newspaper.'
}, {
  pattern: '太 + adjective + 了',
  label: 'Too / very',
  use: 'Express a strong degree or a changed situation.',
  hanzi: '今天太热了。',
  pinyin: 'jīntiān tài rè le',
  meaning: 'It is too hot today.'
}, {
  pattern: '想 / 要 + V',
  label: 'Want / intend',
  use: '想 is a wish; 要 is a stronger intention or need.',
  hanzi: '我要去北京旅游。',
  pinyin: 'wǒ yào qù Běijīng lǚyóu',
  meaning: 'I want to travel to Beijing.'
}, {
  pattern: '会 / 能 / 可以 + V',
  label: 'Can',
  use: '会: learned ability; 能: capability; 可以: permission.',
  hanzi: '你明天下午能回来吗？',
  pinyin: 'nǐ míngtiān xiàwǔ néng huílai ma',
  meaning: 'Can you come back tomorrow afternoon?'
}, {
  pattern: 'V + 了',
  label: 'Completed action',
  use: 'Place 了 after the verb or at sentence end when a situation changes.',
  hanzi: '我买了些苹果。',
  pinyin: 'wǒ mǎi le xiē píngguǒ',
  meaning: 'I bought some apples.'
}, {
  pattern: '没(有) + V',
  label: 'Past negation',
  use: 'Negate completed or past actions with 没, not 不.',
  hanzi: '我没做完。',
  pinyin: 'wǒ méi zuòwán',
  meaning: 'I did not finish.'
}, {
  pattern: '是...的',
  label: 'Completed-action detail',
  use: 'Emphasize when, where, how, or by whom something happened.',
  hanzi: '这个工作是他帮我介绍的。',
  pinyin: 'zhège gōngzuò shì tā bāng wǒ jièshào de',
  meaning: 'He was the one who introduced this job to me.'
}, {
  pattern: 'A 比 B + adjective',
  label: 'Comparison',
  use: 'Compare A with B; add a quantity after the adjective when needed.',
  hanzi: '他比我大三岁。',
  pinyin: 'tā bǐ wǒ dà sān suì',
  meaning: 'He is three years older than me.'
}, {
  pattern: 'A 离 B + 远 / 近',
  label: 'Distance',
  use: 'State the distance between two places.',
  hanzi: '我家离公司很近。',
  pinyin: 'wǒ jiā lí gōngsī hěn jìn',
  meaning: 'My home is close to the company.'
}, {
  pattern: '就要 / 快要 + V + 了',
  label: 'About to happen',
  use: 'Describe an event that will happen very soon.',
  hanzi: '新年就要到了。',
  pinyin: 'xīnnián jiùyào dào le',
  meaning: 'New Year is almost here.'
}, {
  pattern: 'V + 完',
  label: 'Result complement',
  use: '完 marks that an action has been finished.',
  hanzi: '作业我已经做完了。',
  pinyin: 'zuòyè wǒ yǐjīng zuòwán le',
  meaning: 'I have already finished the homework.'
}, {
  pattern: 'V + 着',
  label: 'Continuing state',
  use: '着 describes a state that remains in effect.',
  hanzi: '门开着呢。',
  pinyin: 'mén kāizhe ne',
  meaning: 'The door is open.'
}, {
  pattern: '...吧',
  label: 'Suggestion',
  use: 'Soften a suggestion or proposal.',
  hanzi: '我们一起去踢足球吧。',
  pinyin: 'wǒmen yìqǐ qù tī zúqiú ba',
  meaning: "Let's go play football together."
}];
const buildSecretVocabularyIndex = () => {
  const byHanzi = new Map();
  const addItem = (item, level, source) => {
    if (!item?.hanzi) return;
    const key = item.hanzi.trim();
    if (!key || /^\?+$/.test(key)) return;
    const existing = byHanzi.get(key);
    if (!existing) {
      byHanzi.set(key, {
        hanzi: key,
        pinyin: item.pinyin || '',
        meanings: item.meaning ? [item.meaning] : [],
        example: item.example || '',
        levels: [level],
        sources: [source]
      });
      return;
    }
    if (item.meaning && !existing.meanings.includes(item.meaning)) existing.meanings.push(item.meaning);
    if (!existing.example && item.example) existing.example = item.example;
    if (!existing.pinyin && item.pinyin) existing.pinyin = item.pinyin;
    if (!existing.levels.includes(level)) existing.levels.push(level);
    if (!existing.sources.includes(source)) existing.sources.push(source);
  };
  VOCABULARY.forEach(item => addItem(item, 'HSK1', `Lesson ${item.lesson}`));
  COMPOUNDS.forEach(item => addItem(item, 'HSK1', `Lesson ${item.lesson}`));
  MATERIAL_COLLECTIONS.forEach(collection => {
    const level = collection.level || 'Materials';
    const source = collection.labelEn || collection.sourceFile || collection.id;
    collection.items.forEach(item => addItem(item, level, source));
  });
  const vocabulary = Array.from(byHanzi.values()).sort((a, b) => a.pinyin.localeCompare(b.pinyin, 'en', {
    sensitivity: 'base'
  }) || a.hanzi.localeCompare(b.hanzi, 'zh-Hans'));
  return annotateVocabularyExamples(vocabulary);
};
function SecretCheatSheetView({
  setCurrentView,
  language,
  setLanguage,
  playSound,
  t
}) {
  const [query, setQuery] = React.useState('');
  const [level, setLevel] = React.useState('All');
  const vocabulary = React.useMemo(buildSecretVocabularyIndex, []);
  const levels = ['All', 'HSK1', 'HSK2', 'Book3', 'Basics'];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredVocabulary = React.useMemo(() => vocabulary.filter(item => {
    const matchesLevel = level === 'All' || item.levels.includes(level);
    if (!matchesLevel) return false;
    if (!normalizedQuery) return true;
    return [item.hanzi, item.pinyin, item.meanings.join(' '), item.example, item.examplePinyin, item.exampleTranslation, item.sources.join(' ')].join(' ').toLocaleLowerCase().includes(normalizedQuery);
  }), [vocabulary, level, normalizedQuery]);
  const leaveSecret = () => {
    const nextUrl = window.location.protocol === 'file:' ? `${window.location.pathname}${window.location.search}` : '/';
    window.history.replaceState({}, '', nextUrl);
    setCurrentView('home');
  };
  return React.createElement("div", {
    className: "screen secret-screen"
  }, React.createElement("header", {
    className: "secret-topbar"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: leaveSecret
  }, t('secret.back')), React.createElement("div", {
    className: "secret-topbar-actions"
  }, React.createElement(LanguageToggle, {
    language: language,
    setLanguage: setLanguage,
    playSound: playSound,
    t: t
  }), React.createElement("button", {
    className: "secret-print-button",
    onClick: () => window.print()
  }, React.createElement(AppIcon, {
    name: "print"
  }), React.createElement("span", null, t('secret.print'))))), React.createElement("section", {
    className: "secret-hero"
  }, React.createElement("div", null, React.createElement("p", {
    className: "secret-kicker"
  }, t('secret.badge')), React.createElement("h1", null, t('secret.title')), React.createElement("p", null, t('secret.subtitle'))), React.createElement("div", {
    className: "secret-hero-seal"
  }, "\u603B")), React.createElement("div", {
    className: "secret-summary-strip"
  }, React.createElement("div", null, React.createElement("strong", null, vocabulary.length), React.createElement("span", null, t('secret.uniqueWords'))), React.createElement("div", null, React.createElement("strong", null, MATERIAL_COLLECTIONS.length), React.createElement("span", null, t('secret.collections'))), React.createElement("div", null, React.createElement("strong", null, SECRET_GRAMMAR.length), React.createElement("span", null, t('secret.patterns'))), React.createElement("div", null, React.createElement("strong", null, SECRET_NUMBERS.length), React.createElement("span", null, t('secret.numberForms')))), React.createElement("nav", {
    className: "secret-jump-nav",
    "aria-label": t('secret.contents')
  }, React.createElement("a", {
    href: "#secret-numbers"
  }, t('secret.numbers')), React.createElement("a", {
    href: "#secret-time"
  }, t('secret.time')), React.createElement("a", {
    href: "#secret-essentials"
  }, t('secret.essentials')), React.createElement("a", {
    href: "#secret-grammar"
  }, t('secret.grammar')), React.createElement("a", {
    href: "#secret-vocabulary"
  }, t('secret.vocabulary'))), React.createElement("section", {
    id: "secret-numbers",
    className: "secret-section"
  }, React.createElement("div", {
    className: "secret-section-heading"
  }, React.createElement("div", null, React.createElement("span", null, "01"), React.createElement("h2", null, t('secret.numbers'))), React.createElement("p", null, t('secret.numbersHint'))), React.createElement("div", {
    className: "secret-number-grid"
  }, SECRET_NUMBERS.map(([arabic, hanzi, pinyin]) => React.createElement("div", {
    className: "secret-number-item",
    key: arabic
  }, React.createElement("span", null, arabic), React.createElement("strong", null, hanzi), React.createElement("small", null, pinyin)))), React.createElement("div", {
    className: "secret-rule-band"
  }, React.createElement("strong", null, "\u4E8C vs. \u4E24"), React.createElement("span", null, "Use \u4E8C when counting or reading digits; use \u4E24 before most measure words: \u4E8C\u5341\u4E8C, \u4E24\u4E2A\u4EBA, \u4E24\u672C\u4E66."))), React.createElement("section", {
    id: "secret-time",
    className: "secret-section"
  }, React.createElement("div", {
    className: "secret-section-heading"
  }, React.createElement("div", null, React.createElement("span", null, "02"), React.createElement("h2", null, t('secret.time'))), React.createElement("p", null, t('secret.timeHint'))), React.createElement("div", {
    className: "secret-pattern-grid secret-time-grid"
  }, SECRET_TIME_PATTERNS.map(item => React.createElement("article", {
    className: "secret-pattern-card",
    key: item.label
  }, React.createElement("div", {
    className: "secret-pattern-label"
  }, React.createElement("span", null, item.label), React.createElement("code", null, item.formula)), React.createElement("strong", null, item.hanzi), React.createElement("em", null, item.pinyin), React.createElement("p", null, item.meaning))))), React.createElement("section", {
    id: "secret-essentials",
    className: "secret-section"
  }, React.createElement("div", {
    className: "secret-section-heading"
  }, React.createElement("div", null, React.createElement("span", null, "03"), React.createElement("h2", null, t('secret.essentials'))), React.createElement("p", null, t('secret.essentialsHint'))), React.createElement("div", {
    className: "secret-reference-grid"
  }, React.createElement("div", {
    className: "secret-reference-block"
  }, React.createElement("h3", null, t('secret.measureWords')), React.createElement("div", {
    className: "secret-compact-list"
  }, SECRET_MEASURE_WORDS.map(([hanzi, pinyin, meaning, example]) => React.createElement("div", {
    key: hanzi
  }, React.createElement("strong", null, hanzi), React.createElement("em", null, pinyin), React.createElement("span", null, meaning), React.createElement("code", null, example))))), React.createElement("div", {
    className: "secret-reference-block"
  }, React.createElement("h3", null, t('secret.questions')), React.createElement("div", {
    className: "secret-compact-list question-list"
  }, SECRET_QUESTION_WORDS.map(([hanzi, pinyin, meaning]) => React.createElement("div", {
    key: hanzi
  }, React.createElement("strong", null, hanzi), React.createElement("em", null, pinyin), React.createElement("span", null, meaning)))))), React.createElement("div", {
    className: "secret-tone-grid"
  }, SECRET_TONE_RULES.map(rule => React.createElement("article", {
    key: rule.title
  }, React.createElement("strong", null, rule.title), React.createElement("p", null, rule.copy))))), React.createElement("section", {
    id: "secret-grammar",
    className: "secret-section"
  }, React.createElement("div", {
    className: "secret-section-heading"
  }, React.createElement("div", null, React.createElement("span", null, "04"), React.createElement("h2", null, t('secret.grammar'))), React.createElement("p", null, t('secret.grammarHint'))), React.createElement("div", {
    className: "secret-grammar-list"
  }, SECRET_GRAMMAR.map((item, index) => React.createElement("article", {
    className: "secret-grammar-row",
    key: item.pattern
  }, React.createElement("span", {
    className: "secret-grammar-index"
  }, String(index + 1).padStart(2, '0')), React.createElement("div", {
    className: "secret-grammar-rule"
  }, React.createElement("code", null, item.pattern), React.createElement("strong", null, item.label), React.createElement("p", null, item.use)), React.createElement("div", {
    className: "secret-grammar-example"
  }, React.createElement("strong", null, item.hanzi), React.createElement("em", null, item.pinyin), React.createElement("span", null, item.meaning)))))), React.createElement("section", {
    id: "secret-vocabulary",
    className: "secret-section secret-vocabulary-section"
  }, React.createElement("div", {
    className: "secret-section-heading"
  }, React.createElement("div", null, React.createElement("span", null, "05"), React.createElement("h2", null, t('secret.vocabulary'))), React.createElement("p", null, t('secret.vocabularyHint'))), React.createElement("div", {
    className: "secret-vocab-tools"
  }, React.createElement("label", {
    className: "secret-search"
  }, React.createElement(AppIcon, {
    name: "scan"
  }), React.createElement("input", {
    value: query,
    onChange: event => setQuery(event.target.value),
    placeholder: t('secret.search'),
    "aria-label": t('secret.search')
  })), React.createElement("div", {
    className: "secret-level-filter"
  }, levels.map(item => React.createElement("button", {
    key: item,
    className: level === item ? 'active' : '',
    onClick: () => setLevel(item)
  }, item === 'All' ? t('secret.all') : item)))), React.createElement("p", {
    className: "secret-result-count"
  }, t('secret.results', {
    count: filteredVocabulary.length
  })), filteredVocabulary.length > 0 ? React.createElement("div", {
    className: "secret-word-grid"
  }, filteredVocabulary.map(item => React.createElement("article", {
    className: "secret-word-row",
    key: item.hanzi
  }, React.createElement("div", {
    className: "secret-word-main"
  }, React.createElement("strong", null, item.hanzi), React.createElement("em", null, item.pinyin)), React.createElement("p", null, item.meanings.join(' · ')), item.example && React.createElement("div", {
    className: "secret-example"
  }, React.createElement("small", {
    lang: "zh-Hans"
  }, item.example), item.examplePinyin && React.createElement("em", null, item.examplePinyin), item.exampleTranslation && React.createElement("span", null, item.exampleTranslation)), React.createElement("div", {
    className: "secret-source-tags"
  }, item.levels.map(itemLevel => React.createElement("span", {
    key: itemLevel
  }, itemLevel)))))) : React.createElement("div", {
    className: "secret-empty"
  }, t('secret.empty'))), React.createElement("footer", {
    className: "secret-footer"
  }, React.createElement(HanziLogoSvg, null), React.createElement("div", null, React.createElement("strong", null, "Hanzi Master"), React.createElement("span", null, t('secret.footer')))));
}
document.body.classList.add('app-ready');
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(HanziMasterApp, null));
