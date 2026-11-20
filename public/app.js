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
}, {
  id: 70,
  hanzi: '还',
  pinyin: 'hái',
  meaning: 'still; yet',
  lesson: 7,
  strokes: 7,
  book: 'hsk2'
}, {
  id: 71,
  hanzi: '慢',
  pinyin: 'màn',
  meaning: 'slow',
  lesson: 7,
  strokes: 14,
  book: 'hsk2'
}, {
  id: 72,
  hanzi: '银',
  pinyin: 'yín',
  meaning: 'silver',
  lesson: 7,
  strokes: 11,
  book: 'hsk2'
}, {
  id: 73,
  hanzi: '行',
  pinyin: 'háng',
  meaning: 'row; line; OK (bank in 银行)',
  lesson: 7,
  strokes: 6,
  book: 'hsk2'
}, {
  id: 74,
  hanzi: '超',
  pinyin: 'chāo',
  meaning: 'super; ultra',
  lesson: 7,
  strokes: 12,
  book: 'hsk2'
}, {
  id: 75,
  hanzi: '市',
  pinyin: 'shì',
  meaning: 'market; city',
  lesson: 7,
  strokes: 5,
  book: 'hsk2'
}, {
  id: 76,
  hanzi: '圣',
  pinyin: 'shèng',
  meaning: 'holy; saint',
  lesson: 7,
  strokes: 5,
  book: 'hsk2'
}, {
  id: 77,
  hanzi: '诞',
  pinyin: 'dàn',
  meaning: 'birth',
  lesson: 7,
  strokes: 8,
  book: 'hsk2'
}, {
  id: 78,
  hanzi: '节',
  pinyin: 'jié',
  meaning: 'festival; node;节日 festival',
  lesson: 7,
  strokes: 5,
  book: 'hsk2'
}, {
  id: 79,
  hanzi: '到',
  pinyin: 'dào',
  meaning: 'to arrive; until',
  lesson: 9,
  strokes: 8,
  book: 'hsk2'
}, {
  id: 80,
  hanzi: '课',
  pinyin: 'kè',
  meaning: 'lesson; class',
  lesson: 7,
  strokes: 10,
  book: 'hsk2'
}, {
  id: 81,
  hanzi: '告',
  pinyin: 'gào',
  meaning: 'to tell',
  lesson: 8,
  strokes: 7,
  book: 'hsk2'
}, {
  id: 82,
  hanzi: '诉',
  pinyin: 'sù',
  meaning: 'to tell; complain (告诉)',
  lesson: 8,
  strokes: 7,
  book: 'hsk2'
}, {
  id: 83,
  hanzi: '事',
  pinyin: 'shì',
  meaning: 'matter; affair',
  lesson: 8,
  strokes: 8,
  book: 'hsk2'
}, {
  id: 84,
  hanzi: '情',
  pinyin: 'qíng',
  meaning: 'feeling; emotion',
  lesson: 8,
  strokes: 11,
  book: 'hsk2'
}, {
  id: 85,
  hanzi: '让',
  pinyin: 'ràng',
  meaning: 'to let; allow',
  lesson: 8,
  strokes: 5,
  book: 'hsk2'
}, {
  id: 86,
  hanzi: '贵',
  pinyin: 'guì',
  meaning: 'expensive; noble',
  lesson: 8,
  strokes: 9,
  book: 'hsk2'
}, {
  id: 87,
  hanzi: '便',
  pinyin: 'pián',
  meaning: 'cheap (in 便宜); convenient',
  lesson: 8,
  strokes: 9,
  book: 'hsk2'
}, {
  id: 88,
  hanzi: '宜',
  pinyin: 'yí',
  meaning: 'suitable;宜人 pleasant',
  lesson: 8,
  strokes: 8,
  book: 'hsk2'
}, {
  id: 89,
  hanzi: '秘',
  pinyin: 'mì',
  meaning: 'secret',
  lesson: 8,
  strokes: 10,
  book: 'hsk2'
}, {
  id: 90,
  hanzi: '密',
  pinyin: 'mì',
  meaning: 'dense; secret',
  lesson: 8,
  strokes: 11,
  book: 'hsk2'
}, {
  id: 91,
  hanzi: '饱',
  pinyin: 'bǎo',
  meaning: 'full (not hungry)',
  lesson: 8,
  strokes: 8,
  book: 'hsk2'
}, {
  id: 92,
  hanzi: '单',
  pinyin: 'dān',
  meaning: 'single; list (菜单)',
  lesson: 8,
  strokes: 8,
  book: 'hsk2'
}, {
  id: 93,
  hanzi: '马',
  pinyin: 'mǎ',
  meaning: 'horse',
  lesson: 8,
  strokes: 3,
  book: 'hsk2'
}, {
  id: 94,
  hanzi: '桶',
  pinyin: 'tǒng',
  meaning: 'bucket; barrel',
  lesson: 8,
  strokes: 11,
  book: 'hsk2'
}, {
  id: 95,
  hanzi: '灯',
  pinyin: 'dēng',
  meaning: 'lamp; light',
  lesson: 8,
  strokes: 6,
  book: 'hsk2'
}, {
  id: 96,
  hanzi: '空',
  pinyin: 'kōng',
  meaning: 'air; empty (空调 air conditioner)',
  lesson: 8,
  strokes: 8,
  book: 'hsk2'
}, {
  id: 97,
  hanzi: '调',
  pinyin: 'tiáo',
  meaning: 'to adjust; tune',
  lesson: 8,
  strokes: 10,
  book: 'hsk2'
}, {
  id: 98,
  hanzi: '迎',
  pinyin: 'yíng',
  meaning: 'to welcome',
  lesson: 9,
  strokes: 7,
  book: 'hsk2'
}, {
  id: 99,
  hanzi: '希',
  pinyin: 'xī',
  meaning: 'hope; rare (希望)',
  lesson: 9,
  strokes: 7,
  book: 'hsk2'
}, {
  id: 100,
  hanzi: '望',
  pinyin: 'wàng',
  meaning: 'to look; hope (希望)',
  lesson: 9,
  strokes: 11,
  book: 'hsk2'
}, {
  id: 101,
  hanzi: '从',
  pinyin: 'cóng',
  meaning: 'from; since',
  lesson: 9,
  strokes: 4,
  book: 'hsk2'
}, {
  id: 102,
  hanzi: '懂',
  pinyin: 'dǒng',
  meaning: 'to understand',
  lesson: 9,
  strokes: 15,
  book: 'hsk2'
}, {
  id: 103,
  hanzi: '镜',
  pinyin: 'jìng',
  meaning: 'mirror; lens',
  lesson: 9,
  strokes: 16,
  book: 'hsk2'
}, {
  id: 104,
  hanzi: '难',
  pinyin: 'nán',
  meaning: 'difficult',
  lesson: 9,
  strokes: 10,
  book: 'hsk2'
}, {
  id: 105,
  hanzi: '洗',
  pinyin: 'xǐ',
  meaning: 'to wash',
  lesson: 10,
  strokes: 9,
  book: 'hsk2'
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
  const accent = memory.category === 'nature' ? '#c8371f' : memory.category === 'time' ? '#d99a18' : memory.category === 'language' ? '#191713' : memory.category === 'action' ? '#c8371f' : '#168b69';
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
    fill: "#f8f5ef",
    stroke: "#dce9e2"
  }), React.createElement("circle", {
    cx: "202",
    cy: "24",
    r: "13",
    fill: memory.category === 'time' ? '#c8bfa8' : '#ffe2a8',
    opacity: "0.82"
  }), React.createElement("path", {
    d: "M0 101 C34 80 55 96 82 82 C112 65 136 96 165 77 C190 61 213 78 240 61 V132 H0 Z",
    fill: "#dff3e8"
  }), React.createElement("path", {
    d: "M0 114 C35 98 65 112 96 99 C130 84 165 112 195 96 C213 87 228 89 240 84 V132 H0 Z",
    fill: "#c9ead9"
  }), memory.category === 'language' && React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M26 28 h40 a8 8 0 0 1 8 8 v12 a8 8 0 0 1-8 8 H48 l-9 8 2-8 H26 a8 8 0 0 1-8-8 V36 a8 8 0 0 1 8-8Z",
    fill: "#f0ead9"
  }), React.createElement("circle", {
    cx: "34",
    cy: "42",
    r: "2.5",
    fill: "#191713"
  }), React.createElement("circle", {
    cx: "46",
    cy: "42",
    r: "2.5",
    fill: "#191713"
  }), React.createElement("circle", {
    cx: "58",
    cy: "42",
    r: "2.5",
    fill: "#191713"
  })), memory.category === 'number' && React.createElement("g", {
    stroke: "#d99a18",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M20 28 h48 M20 38 h48 M20 48 h48 M25 22 v34 M63 22 v34"
  }), React.createElement("circle", {
    cx: "35",
    cy: "28",
    r: "4",
    fill: "#c8bfa8",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "51",
    cy: "38",
    r: "4",
    fill: "#c8bfa8",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "40",
    cy: "48",
    r: "4",
    fill: "#c8bfa8",
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
    stroke: "#c8371f",
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
    fill: "#f0ead9",
    stroke: "#191713",
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
    stroke: "#191713"
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
      stroke: index === parts.length - 1 ? accent : '#e4ddcf',
      strokeWidth: "1.5"
    }), React.createElement("text", {
      x: partWidth / 2,
      y: "39",
      textAnchor: "middle",
      fill: "#191713",
      style: {
        fontFamily: 'var(--font-hanzi)'
      },
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
    stroke: "#191713",
    strokeWidth: "2"
  }), React.createElement("circle", {
    cx: "8",
    cy: "6",
    r: "6",
    fill: "#191713"
  }), React.createElement("circle", {
    cx: "26",
    cy: "6",
    r: "6",
    fill: "#191713"
  }), React.createElement("ellipse", {
    cx: "17",
    cy: "19",
    rx: "10",
    ry: "8",
    fill: "#f8f5ef"
  }), React.createElement("circle", {
    cx: "13",
    cy: "16",
    r: "2",
    fill: "#191713"
  }), React.createElement("circle", {
    cx: "21",
    cy: "16",
    r: "2",
    fill: "#191713"
  }), React.createElement("path", {
    d: "M14 22 q3 3 6 0",
    fill: "none",
    stroke: "#191713",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), React.createElement("g", {
    transform: "translate(12 101)"
  }, React.createElement("rect", {
    width: "25",
    height: "25",
    rx: "4",
    fill: "#c8371f"
  }), React.createElement("text", {
    x: "12.5",
    y: "18",
    textAnchor: "middle",
    fill: "#fff",
    style: {
      fontFamily: 'var(--font-hanzi)'
    },
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
    'home.heroTitleNew': '学会写汉字，每天只需 5 分钟',
    'home.heroTitle': '今天练哪个字？',
    'home.heroSubtitle': '从认字到会写：卡片、默写、测验，印章老师一路陪你。',
    'home.heroCtaNew': '开始第一课',
    'home.heroCtaReturn': '继续今天的训练',
    'home.heroHint': '今天有 {count} 个字等着你',
    'home.walletEmptyTitle': '你的第一个字还在等你',
    'home.walletEmptyCopy': '完成今天的训练，这里就会亮起来。',
    'home.walletLabel': '学习钱包 · 汉字余额',
    'home.masteredMeta': '{mastered} / {total} 已掌握',
    'home.learningMeta': '{count} 学习中',
    'home.dailyKicker': '今日训练',
    'home.dailyTitle': '印章老师排好了 {count} 个字',
    'home.myMiniPrograms': '我的小程序',
    'home.more': '更多',
    'home.coachTitle': '印章老师陪你练',
    'home.coachNew': '从课程开始，像点开一个小程序一样跟印章老师学习。',
    'home.coachReview': '先复习，再默写。印章老师帮你把会认的字变成会写的字。',
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
    'daily.heroTitle': '印章老师的今日清单',
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
    'learn.roundDone': '本轮完成',
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
    'draw.feedback.perfect': '完美',
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
    'quiz.resultGreat': '太棒了!',
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
    'secret.footer': '浏览器本地运行 · 无外部 API',
    'settings.section': '设置',
    'badges.section': '徽章',
    'badge.unlocked': '徽章解锁！',
    'badge.firstReview.title': '初次复习',
    'badge.firstReview.desc': '完成第一次复习',
    'badge.firstMastered.title': '第一个字',
    'badge.firstMastered.desc': '掌握第一个汉字',
    'badge.streak3.title': '三日连练',
    'badge.streak3.desc': '连续学习 3 天',
    'badge.firstQuiz.title': '首次测验',
    'badge.firstQuiz.desc': '完成第一次测验',
    'badge.mastered10.title': '十个字',
    'badge.mastered10.desc': '掌握 10 个汉字',
    'badge.streak7.title': '七日连练',
    'badge.streak7.desc': '连续学习 7 天',
    'badge.mastered50.title': '半百之功',
    'badge.mastered50.desc': '掌握 50 个汉字',
    'badge.streak30.title': '一月之功',
    'badge.streak30.desc': '连续学习 30 天',
    'badge.mastered100.title': '百字达人',
    'badge.mastered100.desc': '掌握 100 个汉字',
    'share.section': '分享进度',
    'share.needAccount': '登录匿名账户后，可以生成分享码。无需邮箱密码。',
    'share.create': '生成分享码',
    'share.copy': '复制',
    'share.copied': '已复制！',
    'share.loadHint': '输入分享码，例如 ABCD-1234',
    'share.load': '查看',
    'share.notFound': '找不到这个分享码（或已过期）。',
    'share.error': '出错了，请重试。',
    'share.import': '导入这个进度',
    'share.imported': '已导入！',
    'profile.mastered': '已掌握',
    'profile.streak': '连续天数',
    'profile.reviews': '复习',
    'theme.section': '外观主题',
    'theme.light': '日间 · 浅色',
    'theme.dark': '夜间 · 深色',
    'theme.sakura': '樱花 · 粉色',
    'font.section': '汉字字体',
    'font.sans': '黑体 · 易读',
    'font.serif': '宋体 · 印刷',
    'font.kai': '楷体 · 手写',
    'keys.section': '键盘快捷键',
    'keys.nav': '切换页面（D = 今日，L = 课程）',
    'keys.flip': '翻转卡片',
    'keys.cards': '上一张 / 下一张（卡片与写字）',
    'keys.quiz': '测验中选答案，Enter 下一题',
    'keys.guide': '打开导览',
    'keys.back': '返回',
    'account.section': '账户与同步',
    'account.privacy': '匿名账户：无需邮箱、无需密码，服务器只保存你的学习进度。',
    'account.createTab': '新建账户',
    'account.loginTab': '登录',
    'account.createHint': '将生成账户 ID 和一次性恢复码。恢复码只显示一次——请立即保存。',
    'account.generate': '生成我的账户',
    'account.userId': '账户 ID',
    'account.recoveryCode': '恢复码（只显示一次）',
    'account.saveWarning': '请立即抄写保存！丢失恢复码将无法找回账户。',
    'account.saved': '我已保存，继续',
    'account.loginHint': '输入你的账户 ID 和恢复码。',
    'account.loginId': '账户 ID',
    'account.loginCode': '恢复码',
    'account.signIn': '登录',
    'account.loggedInAs': '已登录',
    'account.syncing': '同步中…',
    'account.synced': '已同步',
    'account.syncError': '同步失败（仍保存在本机）',
    'account.lastSync': '上次同步 {time}',
    'account.neverSynced': '尚未同步',
    'account.logout': '退出登录',
    'account.delete': '删除账户',
    'account.confirmDelete': '确定删除账户以及服务器上的全部数据吗？此操作不能撤销。',
    'account.error': '出错了，请重试。',
    'account.invalidCredentials': '账户 ID 或恢复码不正确。'
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
    'tutorial.badge': '印章指南',
    'tutorial.title': '跟印章老师逛一圈',
    'tutorial.intro': 'See how each mini app works, then start a calm daily practice flow.',
    'tutorial.stepCount': '{current}/{total}',
    'tutorial.close': 'Close guide',
    'tutorial.skip': 'Skip',
    'tutorial.back': 'Back',
    'tutorial.next': 'Next',
    'tutorial.done': 'Start learning',
    'tutorial.step.daily.title': 'Begin with Daily training',
    'tutorial.step.daily.body': 'The seal picks a small set for you: new characters, review items, and characters to solidify.',
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
    'home.heroTitleNew': 'Learn to write Chinese — 5 minutes a day',
    'home.heroTitle': 'Which character today?',
    'home.heroSubtitle': 'From reading to writing: flashcards, drawing, quizzes — your seal coach is with you all the way.',
    'home.heroCtaNew': 'Start your first lesson',
    'home.heroCtaReturn': 'Continue today\'s training',
    'home.heroHint': '{count} characters waiting for you today',
    'home.walletEmptyTitle': 'Your first character is still waiting',
    'home.walletEmptyCopy': 'Finish today\'s training and this lights up.',
    'home.walletLabel': 'Learning wallet · Hanzi balance',
    'home.masteredMeta': '{mastered} / {total} mastered',
    'home.learningMeta': '{count} learning',
    'home.dailyKicker': 'Daily training',
    'home.dailyTitle': 'Seal teacher picked {count} characters',
    'home.myMiniPrograms': 'My mini programs',
    'home.more': 'More',
    'home.coachTitle': 'Seal teacher practices with you',
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
    'daily.heroTitle': "Seal teacher's list",
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
    'lessons.hsk2Lesson': 'HSK2 L{lesson}',
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
    'learn.roundDone': 'Round complete',
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
    'draw.feedback.perfect': 'Perfect',
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
    'quiz.resultGreat': 'Excellent!',
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
    'secret.footer': 'Browser-local · no external APIs',
    'settings.section': 'Settings',
    'badges.section': 'Badges',
    'badge.unlocked': 'Badge unlocked!',
    'badge.firstReview.title': 'First review',
    'badge.firstReview.desc': 'Complete your first review',
    'badge.firstMastered.title': 'First character',
    'badge.firstMastered.desc': 'Master your first character',
    'badge.streak3.title': '3-day streak',
    'badge.streak3.desc': 'Study 3 days in a row',
    'badge.firstQuiz.title': 'First quiz',
    'badge.firstQuiz.desc': 'Finish your first quiz',
    'badge.mastered10.title': 'Ten characters',
    'badge.mastered10.desc': 'Master 10 characters',
    'badge.streak7.title': '7-day streak',
    'badge.streak7.desc': 'Study 7 days in a row',
    'badge.mastered50.title': 'Fifty strong',
    'badge.mastered50.desc': 'Master 50 characters',
    'badge.streak30.title': '30-day streak',
    'badge.streak30.desc': 'Study 30 days in a row',
    'badge.mastered100.title': 'Century of characters',
    'badge.mastered100.desc': 'Master 100 characters',
    'share.section': 'Share progress',
    'share.needAccount': 'Sign in with an anonymous account to create a share code. No email, no password.',
    'share.create': 'Create share code',
    'share.copy': 'Copy',
    'share.copied': 'Copied!',
    'share.loadHint': 'Enter a share code, e.g. ABCD-1234',
    'share.load': 'View',
    'share.notFound': 'Share code not found (or expired).',
    'share.error': 'Something went wrong. Try again.',
    'share.import': 'Import this progress',
    'share.imported': 'Imported!',
    'profile.mastered': 'mastered',
    'profile.streak': 'day streak',
    'profile.reviews': 'reviews',
    'theme.section': 'Appearance',
    'theme.light': 'Daylight',
    'theme.dark': 'Night',
    'theme.sakura': 'Sakura',
    'font.section': 'Hanzi font',
    'font.sans': 'Sans · clean',
    'font.serif': 'Serif · print',
    'font.kai': 'Kai · brush',
    'keys.section': 'Keyboard shortcuts',
    'keys.nav': 'Switch screens (D = daily, L = lessons)',
    'keys.flip': 'Flip the flashcard',
    'keys.cards': 'Previous / next card or character',
    'keys.quiz': 'Pick an answer, Enter for next',
    'keys.guide': 'Open the guide',
    'keys.back': 'Go back',
    'account.section': 'Account & sync',
    'account.privacy': 'Anonymous account: no email, no password. The server stores only your learning progress.',
    'account.createTab': 'New account',
    'account.loginTab': 'Sign in',
    'account.createHint': 'Generates an account ID and a one-time recovery code. The code is shown only once — save it now.',
    'account.generate': 'Generate my account',
    'account.userId': 'Account ID',
    'account.recoveryCode': 'Recovery code (shown once)',
    'account.saveWarning': 'Write it down now! If the recovery code is lost, the account cannot be recovered.',
    'account.saved': 'Saved — continue',
    'account.loginHint': 'Enter your account ID and recovery code.',
    'account.loginId': 'Account ID',
    'account.loginCode': 'Recovery code',
    'account.signIn': 'Sign in',
    'account.loggedInAs': 'Signed in',
    'account.syncing': 'Syncing…',
    'account.synced': 'Synced',
    'account.syncError': 'Sync failed (kept locally)',
    'account.lastSync': 'Last sync {time}',
    'account.neverSynced': 'Not synced yet',
    'account.logout': 'Sign out',
    'account.delete': 'Delete account',
    'account.confirmDelete': 'Delete the account and all data on the server? This cannot be undone.',
    'account.error': 'Something went wrong. Please try again.',
    'account.invalidCredentials': 'Account ID or recovery code is incorrect.'
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
    lastPositions: {},
    theme: null,
    hanziFont: null
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
const styles = "/* ============================================================\n   HANZI MASTER — Ink & Paper design system (v2, clean rewrite)\n   Warm paper, ink text, vermilion seal accent. Hairlines, no shadows.\n   ============================================================ */\n\n:root {\n  --bg: #f8f5ef;\n  --bg-soft: #f0ead9;\n  --card: #fffdf8;\n  --ink: #191713;\n  --ink-soft: #7a7264;\n  --line: #e4ddcf;\n  --accent: #c8371f;\n  --accent-ink: #191713;\n  --danger: #c8371f;\n  --radius: 4px;\n  --font: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif;\n  --font-hanzi: 'Songti SC', 'SimSun', 'Microsoft YaHei', serif;\n  --font-mono: ui-monospace, Menlo, Consolas, monospace;\n  --ease: 0.18s ease;\n}\n\nhtml[data-theme='dark'] {\n  --bg: #14120f;\n  --bg-soft: #1d1a15;\n  --card: #1d1a15;\n  --ink: #efe9dd;\n  --ink-soft: #a39a87;\n  --line: #2e2a22;\n  --accent: #e04a2a;\n  --accent-ink: #efe9dd;\n  color-scheme: dark;\n}\n\nhtml[data-theme='sakura'] {\n  --bg: #f9f1ee;\n  --bg-soft: #f3e4e0;\n  --card: #fffaf8;\n  --ink: #241f1a;\n  --ink-soft: #8a7a6d;\n  --line: #e8d8d2;\n  --accent: #c2452e;\n  --accent-ink: #191713;\n}\n\n/* Hanzi font presets (default serif lives in :root) */\nhtml[data-hanzi-font='sans'] {\n  --font-hanzi: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC', 'Source Han Sans SC', sans-serif;\n}\nhtml[data-hanzi-font='kai'] {\n  --font-hanzi: 'Kaiti SC', 'KaiTi', 'STKaiti', 'TW-Kai', 'Noto Serif CJK SC', serif;\n}\n\n* { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }\n\nhtml, body {\n  width: 100%;\n  min-height: 100%;\n  overflow-x: clip;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--ink);\n  font-family: var(--font);\n  font-size: 16px;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  overscroll-behavior-y: contain;\n}\n\n#root { min-height: 100%; }\n\nbutton { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }\nbutton:disabled { opacity: 0.4; cursor: not-allowed; }\n:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }\n::selection { background: var(--accent); color: var(--card); }\n\n/* ---------- layout ---------- */\n.screen {\n  width: min(100vw - 24px, 460px);\n  max-width: 460px;\n  min-height: 100vh;\n  min-height: 100dvh;\n  margin: 0 auto;\n  padding: 16px 12px calc(96px + env(safe-area-inset-bottom, 0px));\n  animation: viewEnter 0.3s ease-out;\n}\n\n@keyframes viewEnter {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-bottom: 12px;\n  margin-bottom: 14px;\n  border-bottom: 1px solid var(--line);\n}\n\n.back-btn {\n  min-height: 44px;\n  padding: 8px 14px;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: var(--card);\n  font-weight: 800;\n  font-size: 14px;\n  transition: transform var(--ease);\n}\n\n/* ---------- topbar ---------- */\n.super-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 0 12px;\n  border-bottom: 1px solid var(--line);\n}\n\n.brand-lockup { display: flex; align-items: center; gap: 10px; min-width: 0; }\n.brand-mark svg { width: 40px; height: 40px; display: block; }\n.brand-title { font-size: 18px; font-weight: 900; line-height: 1.1; }\n.brand-subtitle { font-size: 12px; color: var(--ink-soft); font-weight: 700; }\n\n.topbar-actions { display: flex; align-items: center; gap: 8px; }\n\n.guide-toggle, .sound-toggle {\n  width: 40px; height: 40px;\n  display: grid; place-items: center;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: var(--card);\n  color: var(--ink);\n  transition: transform var(--ease);\n}\n.guide-toggle svg, .sound-toggle svg { width: 20px; height: 20px; }\n.guide-toggle:active, .sound-toggle:active, .back-btn:active { transform: scale(0.96); }\n\n.language-toggle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2px;\n  min-height: 40px;\n  padding: 2px;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: var(--card);\n}\n.language-toggle button {\n  min-width: 40px; min-height: 36px;\n  padding: 0 8px;\n  border-radius: 3px;\n  font-size: 12px; font-weight: 900;\n  color: var(--ink-soft);\n}\n.language-toggle button.active { background: var(--accent); color: var(--card); }\n\n.daily-chip {\n  display: flex; align-items: center; gap: 4px;\n  min-height: 40px;\n  padding: 0 10px;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: var(--bg-soft);\n  font-size: 13px; font-weight: 900;\n  animation: streakPulse 2.2s ease-in-out infinite;\n}\n@keyframes streakPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.07); } }\n\n/* ---------- bottom nav ---------- */\n.app-bottom-nav {\n  position: fixed;\n  left: 0; right: 0; bottom: 0;\n  z-index: 50;\n  display: flex;\n  background: var(--card);\n  border-top: 1px solid var(--line);\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n}\n.bottom-nav-item {\n  flex: 1;\n  display: flex; flex-direction: column; align-items: center; gap: 2px;\n  min-height: 56px;\n  padding: 8px 0;\n  color: var(--ink-soft);\n  font-size: 11px; font-weight: 800;\n  transition: color var(--ease), transform var(--ease);\n}\n.bottom-nav-item:active { transform: scale(0.94); }\n.bottom-nav-item.active { color: var(--accent); }\n.bottom-nav-icon svg { width: 22px; height: 22px; }\n\n/* ---------- buttons ---------- */\n.btn {\n  display: inline-flex; align-items: center; justify-content: center; gap: 8px;\n  min-height: 48px;\n  padding: 12px 18px;\n  border-radius: var(--radius);\n  border: 1px solid var(--line);\n  background: var(--card);\n  color: var(--ink);\n  font-size: 15px; font-weight: 900;\n  transition: transform var(--ease);\n}\n.btn:active { transform: scale(0.97); }\n.btn-primary { background: var(--accent); border-color: var(--accent); color: var(--card); }\n.btn-secondary { background: var(--card); }\n.btn-coral { background: var(--card); border-color: var(--accent); color: var(--accent); }\n\n.nav-actions { display: flex; gap: 10px; margin-top: 18px; }\n.nav-actions .btn { flex: 1; }\n\n/* ---------- type helpers ---------- */\n.text-sm { font-size: 12px; color: var(--ink-soft); line-height: 1.45; }\n.title-md { font-size: 16px; font-weight: 900; }\n.title-lg { font-size: 20px; font-weight: 900; }\n.text-accent { color: var(--accent); }\n\n.section-title { display: flex; align-items: center; gap: 10px; margin: 26px 0 10px; }\n.section-title .text-sm { font-weight: 800; letter-spacing: 0.4px; }\n.section-line { flex: 1; height: 1px; background: var(--line); }\n\n/* ---------- hero ---------- */\n.hero-block {\n  margin-top: 14px;\n  padding: 22px 18px;\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n}\n.hero-char-wrap { position: relative; display: inline-block; margin-bottom: 12px; }\n.hero-char {\n  display: block;\n  font-family: var(--font-hanzi);\n  font-size: 84px; font-weight: 900; line-height: 1;\n  color: var(--ink);\n}\n.hero-seal {\n  position: absolute; right: -16px; bottom: 2px;\n  width: 28px; height: 28px;\n  display: grid; place-items: center;\n  background: var(--accent); color: var(--card);\n  border-radius: 3px;\n  font-family: var(--font-hanzi);\n  font-size: 16px; font-weight: 900;\n}\n.hero-title { font-size: 25px; font-weight: 900; line-height: 1.25; }\n.hero-subtitle { margin-top: 8px; font-size: 14px; line-height: 1.55; color: var(--ink-soft); }\n.hero-cta { width: 100%; margin-top: 16px; }\n.hero-hint { margin-top: 10px; font-size: 12px; font-weight: 800; color: var(--accent); }\n\n/* ---------- cards & lists ---------- */\n.card {\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 16px;\n  margin-top: 12px;\n}\n\n.list-panel {\n  margin-top: 12px;\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 2px 16px;\n}\n.list-head {\n  padding: 12px 0 8px;\n  font-size: 14px; font-weight: 900;\n  border-bottom: 1px solid var(--line);\n}\n.list-row {\n  display: flex; align-items: center; gap: 14px;\n  width: 100%;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n  transition: transform var(--ease);\n}\n.list-row:active { transform: scale(0.98); }\n.list-row:last-child { border-bottom: none; }\n.list-icon {\n  width: 36px; height: 36px; flex-shrink: 0;\n  display: grid; place-items: center;\n  background: var(--bg-soft);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  color: var(--ink);\n}\n.list-icon svg { width: 18px; height: 18px; }\n.list-label { flex: 1; font-size: 15px; font-weight: 700; }\n.list-arrow { color: var(--ink-soft); font-size: 16px; }\n.list-meta { font-size: 12px; color: var(--ink-soft); font-weight: 700; }\n\n/* ---------- wallet / progress ---------- */\n.wallet-card { margin-top: 12px; background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 16px; }\n.wallet-label { font-size: 12px; font-weight: 800; color: var(--ink-soft); letter-spacing: 0.4px; }\n.wallet-score { font-size: 44px; font-weight: 900; line-height: 1.1; margin-top: 6px; }\n.progress-bar { height: 3px; background: var(--line); margin-top: 10px; }\n.progress-fill { height: 100%; background: var(--accent); transition: width 0.4s linear; }\n.wallet-meta { display: flex; gap: 12px; margin-top: 8px; font-size: 12px; font-weight: 700; color: var(--ink-soft); }\n.wallet-empty-body { display: flex; align-items: center; gap: 14px; margin-top: 10px; padding: 14px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-soft); }\n.wallet-empty-char {\n  width: 52px; height: 52px; flex-shrink: 0;\n  display: grid; place-items: center;\n  background: var(--accent); color: var(--card);\n  border-radius: var(--radius);\n  font-family: var(--font-hanzi); font-size: 28px; font-weight: 900;\n}\n\n/* ---------- daily ---------- */\n.daily-queue-grid { display: flex; flex-wrap: wrap; gap: 6px 16px; padding: 10px 0; }\n.daily-queue-char { display: flex; flex-direction: column; align-items: center; gap: 2px; }\n.daily-queue-char .hanzi-display { font-family: var(--font-hanzi); font-size: 34px; font-weight: 900; }\n.daily-queue-char small { font-size: 11px; font-weight: 800; color: var(--ink-soft); }\n.daily-reason-row { display: flex; gap: 12px; margin-top: 8px; font-size: 12px; font-weight: 800; color: var(--ink-soft); }\n.daily-entry-strip { display: flex; flex-wrap: wrap; gap: 10px; }\n.daily-entry-char { font-family: var(--font-hanzi); font-size: 26px; font-weight: 900; }\n\n/* ---------- learn / flashcard ---------- */\n.flashcard {\n  margin-top: 14px;\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 36px 20px 28px;\n  text-align: center;\n  cursor: pointer;\n  transition: transform var(--ease);\n}\n.flashcard:active { transform: scale(0.985); }\n.hanzi-hero { font-family: var(--font-hanzi); font-size: clamp(96px, 30vw, 132px); font-weight: 900; line-height: 1; color: var(--accent); }\n.hanzi-word { font-size: clamp(56px, 18vw, 84px); }\n.hanzi-md { font-family: var(--font-hanzi); font-size: 24px; font-weight: 900; }\n.pinyin-display { font-size: 20px; font-weight: 900; margin-top: 14px; }\n.meaning-display { font-size: 15px; color: var(--ink-soft); font-weight: 700; margin-top: 4px; }\n.material-example { margin-top: 12px; font-size: 13px; color: var(--ink-soft); line-height: 1.5; }\n.flashcard-hint { margin-top: 16px; font-size: 12px; font-weight: 800; color: var(--ink-soft); }\n\n/* ---------- draw ---------- */\n.draw-canvas-wrap { margin-top: 14px; background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 12px; }\n.hanzi-writer-container { width: 100%; max-width: 300px; margin: 0 auto; }\n.draw-stats { display: flex; gap: 16px; margin-top: 12px; font-size: 12px; font-weight: 800; color: var(--ink-soft); }\n.draw-feedback { min-height: 24px; margin-top: 10px; text-align: center; font-weight: 900; font-size: 14px; }\n.draw-feedback.success { color: var(--accent); }\n.draw-feedback.error { color: var(--danger); }\n\n/* ---------- quiz ---------- */\n.quiz-question { margin-top: 14px; font-family: var(--font-hanzi); font-size: 40px; font-weight: 900; text-align: center; padding: 18px 0; }\n.quiz-options { display: flex; flex-direction: column; margin-top: 6px; background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 2px 16px; }\n.quiz-option {\n  padding: 16px 4px;\n  border-bottom: 1px solid var(--line);\n  font-size: 17px; font-weight: 700;\n  text-align: left;\n  transition: transform var(--ease);\n}\n.quiz-option:active { transform: scale(0.98); }\n.quiz-option:last-child { border-bottom: none; }\n.quiz-option.correct { color: var(--accent); }\n.quiz-option.incorrect { color: var(--danger); opacity: 0.7; }\n.quiz-option.disabled { opacity: 0.5; }\n.score-value { font-size: 56px; font-weight: 900; }\n.score-label { font-size: 12px; font-weight: 800; color: var(--ink-soft); }\n\n/* ---------- stats ---------- */\n.stats-bar { display: flex; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 14px 0; margin-top: 12px; }\n.stat-item { flex: 1; text-align: center; }\n.stat-value { font-size: 26px; font-weight: 900; }\n.stat-label { font-size: 11px; font-weight: 800; color: var(--ink-soft); margin-top: 2px; }\n.char-grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 6px; margin-top: 10px; }\n.char-item {\n  aspect-ratio: 1;\n  display: grid; place-items: center;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  font-family: var(--font-hanzi);\n  font-size: 16px; font-weight: 900;\n  color: var(--ink-soft);\n}\n.char-item.mastered { background: var(--accent); border-color: var(--accent); color: var(--card); }\n.char-item.learning { border-color: var(--accent); color: var(--accent); }\n.backup-buttons { display: flex; gap: 10px; }\n.backup-buttons .btn { flex: 1; }\n.offline-pack-card { display: flex; align-items: center; gap: 12px; }\n.offline-pack-icon { width: 40px; height: 40px; display: grid; place-items: center; background: var(--bg-soft); border: 1px solid var(--line); border-radius: var(--radius); }\n.offline-pack-copy { flex: 1; }\n\n/* ---------- settings / theme ---------- */\n.settings-row { display: flex; gap: 10px; align-items: center; }\n.theme-picker { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.theme-chip { display: flex; flex-direction: column; gap: 8px; padding: 10px 6px 12px; border: 2px solid transparent; border-radius: var(--radius); background: var(--bg-soft); transition: border-color var(--ease), transform var(--ease); }\n.theme-chip:active { transform: scale(0.97); }\n.theme-chip.active { border-color: var(--accent); background: var(--card); }\n.theme-swatch { width: 100%; height: 44px; border-radius: 3px; border: 1px solid var(--line); }\n.theme-chip-label { font-size: 12px; font-weight: 800; }\n\n.font-picker { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.font-chip { display: flex; flex-direction: column; gap: 8px; padding: 10px 6px 12px; border: 2px solid transparent; border-radius: var(--radius); background: var(--bg-soft); transition: border-color var(--ease), transform var(--ease); }\n.font-chip:active { transform: scale(0.97); }\n.font-chip.active { border-color: var(--accent); background: var(--card); }\n.font-sample { width: 100%; height: 44px; display: grid; place-items: center; border-radius: 3px; border: 1px solid var(--line); font-size: 30px; font-weight: 900; line-height: 1; color: var(--ink); }\n.font-chip-label { font-size: 12px; font-weight: 800; }\n\n.keys-list { display: flex; flex-direction: column; }\n.key-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 7px 0; border-bottom: 1px solid var(--line); }\n.key-row:first-child { padding-top: 0; }\n.key-row:last-child { border-bottom: none; padding-bottom: 0; }\n.key-chips { display: flex; flex-wrap: wrap; gap: 4px; flex-shrink: 0; }\n.key-chip { font-family: var(--font-mono); font-size: 11px; font-weight: 700; line-height: 1; padding: 4px 6px; border: 1px solid var(--line); border-bottom-width: 2px; border-radius: 3px; background: var(--bg-soft); color: var(--ink); }\n.key-label { font-size: 12px; font-weight: 700; color: var(--ink-soft); text-align: right; }\n@media (hover: none), (pointer: coarse) { .keys-section { display: none; } }\n\n/* ---------- account ---------- */\n.account-tabs { display: flex; gap: 4px; padding: 3px; margin-top: 10px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-soft); }\n.account-tab { flex: 1; min-height: 44px; border-radius: 3px; font-size: 13px; font-weight: 900; color: var(--ink-soft); }\n.account-tab.active { background: var(--card); color: var(--accent); }\n.account-input {\n  width: 100%; margin-top: 8px; min-height: 44px;\n  padding: 10px 12px;\n  border: 1px solid var(--line); border-radius: var(--radius);\n  background: var(--card); color: var(--ink);\n  font: inherit; font-size: 14px;\n}\n.recovery-box { margin-top: 12px; padding: 12px; border: 1px solid var(--accent); border-radius: var(--radius); background: var(--bg-soft); }\n.recovery-code { display: block; margin-top: 4px; padding: 8px 10px; border: 1px solid var(--line); border-radius: 3px; background: var(--card); font-family: var(--font-mono); font-size: 13px; word-break: break-all; }\n.recovery-code.big { font-size: 16px; font-weight: 700; letter-spacing: 1px; }\n.account-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }\n.sync-pill { padding: 4px 10px; border: 1px solid var(--line); border-radius: 999px; background: var(--bg-soft); font-size: 11px; font-weight: 800; white-space: nowrap; }\n.sync-pill.error { color: var(--danger); border-color: var(--danger); }\n\n/* ---------- tutorial ---------- */\n.tutorial-backdrop { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; background: rgba(20, 18, 15, 0.55); padding: 20px; }\n.tutorial-card { position: relative; width: min(360px, 100%); background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 20px; }\n.tutorial-close { position: absolute; top: 10px; right: 10px; width: 40px; height: 40px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: var(--radius); font-size: 18px; font-weight: 900; }\n.tutorial-hero { display: flex; gap: 12px; align-items: center; }\n.tutorial-seal svg { width: 64px; height: 64px; }\n.tutorial-kicker { display: flex; gap: 8px; font-size: 11px; font-weight: 900; color: var(--accent); font-family: var(--font-mono); }\n.tutorial-step-card { margin-top: 14px; padding: 14px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-soft); }\n.tutorial-step-card h3 { font-size: 16px; font-weight: 900; }\n.tutorial-step-card p { margin-top: 4px; font-size: 13px; color: var(--ink-soft); }\n.tutorial-progress { height: 3px; background: var(--line); margin-top: 14px; }\n.tutorial-progress-fill { height: 100%; background: var(--accent); transition: width var(--ease); }\n.tutorial-dots { display: flex; gap: 6px; justify-content: center; margin-top: 12px; }\n.tutorial-dots span { width: 6px; height: 6px; border-radius: 50%; background: var(--line); }\n.tutorial-dots span.active { background: var(--accent); }\n.tutorial-open-step { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; min-height: 48px; margin-top: 14px; background: var(--accent); color: var(--card); border-radius: var(--radius); font-weight: 900; }\n.tutorial-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }\n.tutorial-quiet { min-height: 44px; padding: 0 12px; color: var(--ink-soft); font-weight: 800; font-size: 13px; }\n.tutorial-action-pair { display: flex; gap: 8px; }\n.tutorial-secondary, .tutorial-primary { min-height: 44px; padding: 0 16px; border-radius: var(--radius); font-weight: 900; font-size: 13px; }\n.tutorial-secondary { border: 1px solid var(--line); }\n.tutorial-primary { background: var(--ink); color: var(--card); }\n\n/* ---------- secret ---------- */\n.secret-kicker { font-size: 12px; font-weight: 900; color: var(--accent); font-family: var(--font-mono); letter-spacing: 1px; }\n.secret-search { display: flex; align-items: center; gap: 8px; margin-top: 12px; padding: 0 12px; min-height: 44px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--card); }\n.secret-search input { flex: 1; border: 0; outline: 0; background: transparent; font: inherit; font-size: 14px; color: var(--ink); }\n.secret-table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 13px; }\n.secret-table td, .secret-table th { padding: 8px 6px; border-bottom: 1px solid var(--line); text-align: left; }\n.secret-table th { font-size: 11px; font-weight: 900; color: var(--ink-soft); letter-spacing: 0.4px; }\n.secret-hanzi { font-family: var(--font-hanzi); font-size: 18px; font-weight: 900; }\n\n/* ---------- motion ---------- */\n@keyframes viewEnter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n@media (max-width: 380px) {\n  .hero-char { font-size: 72px; }\n  .char-grid { grid-template-columns: repeat(6, 1fr); }\n}\n\n/* ---------- secret cheat sheet (restyled to ink system) ---------- */\n.secret-topbar { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-bottom: 12px; border-bottom: 1px solid var(--line); margin-bottom: 14px; }\n.secret-topbar-actions { display: flex; align-items: center; gap: 8px; }\n.secret-print-button { width: 40px; height: 40px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: var(--radius); background: var(--card); }\n.secret-print-button svg { width: 20px; height: 20px; }\n.secret-hero h1 { font-size: 26px; font-weight: 900; margin-top: 6px; }\n.secret-hero p { margin-top: 6px; font-size: 14px; color: var(--ink-soft); max-width: 60ch; }\n.secret-summary-strip { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }\n.secret-summary-strip span { padding: 6px 10px; border: 1px solid var(--line); border-radius: 999px; background: var(--bg-soft); font-size: 12px; font-weight: 800; }\n.secret-section { margin-top: 26px; }\n.secret-section-heading { font-size: 12px; font-weight: 900; color: var(--ink-soft); letter-spacing: 0.6px; text-transform: none; }\n.secret-section > p, .secret-section-heading + p { font-size: 13px; color: var(--ink-soft); margin-top: 4px; }\n.secret-reference-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; margin-top: 12px; }\n.secret-reference-block { border: 1px solid var(--line); border-radius: var(--radius); background: var(--card); padding: 12px; }\n.secret-reference-block strong { display: block; font-size: 14px; }\n.secret-reference-block span { font-size: 12px; color: var(--ink-soft); }\n.secret-rule-band, .secret-pattern-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 8px; margin-top: 12px; }\n.secret-tone-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 8px; margin-top: 12px; }\n.secret-pattern-label { font-size: 11px; font-weight: 900; color: var(--accent); font-family: var(--font-mono); }\n.secret-vocab-tools { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 12px; }\n.secret-level-filter { display: flex; flex-wrap: wrap; gap: 6px; }\n.secret-level-filter button { min-height: 40px; padding: 0 12px; border: 1px solid var(--line); border-radius: 999px; background: var(--card); font-size: 12px; font-weight: 800; color: var(--ink-soft); }\n.secret-level-filter button.active { background: var(--accent); border-color: var(--accent); color: var(--card); }\n.secret-result-count { font-size: 12px; font-weight: 800; color: var(--ink-soft); }\n.secret-word-grid { display: flex; flex-direction: column; margin-top: 8px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--card); padding: 2px 16px; }\n.secret-word-row { display: flex; align-items: baseline; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--line); }\n.secret-word-row:last-child { border-bottom: none; }\n.secret-word-main { display: flex; align-items: baseline; gap: 10px; min-width: 0; }\n.secret-word-main .secret-hanzi { flex-shrink: 0; }\n.secret-word-main span { font-size: 13px; color: var(--ink-soft); }\n.secret-source-tags { margin-left: auto; display: flex; gap: 6px; flex-shrink: 0; }\n.secret-source-tags span { font-size: 11px; font-weight: 800; color: var(--ink-soft); border: 1px solid var(--line); border-radius: 999px; padding: 2px 8px; }\n.secret-footer { margin-top: 30px; padding-top: 12px; border-top: 1px solid var(--line); font-size: 12px; color: var(--ink-soft); font-weight: 700; }\n\n.chip-char {\n  font-family: var(--font-hanzi);\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--accent);\n}\n\n/* ---------- share & profile card ---------- */\n.share-create-row { display: flex; gap: 8px; align-items: center; }\n.share-load-row { display: flex; gap: 8px; margin-top: 10px; }\n.share-load-row .account-input { margin-top: 0; }\n.share-load-row .btn { flex-shrink: 0; }\n\n.profile-card {\n  position: relative;\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.profile-banner { height: 56px; background: var(--accent); }\n.profile-avatar {\n  position: absolute;\n  top: 24px; left: 16px;\n  width: 64px; height: 64px;\n  border-radius: 50%;\n  border: 4px solid var(--card);\n  background: var(--card);\n  overflow: hidden;\n}\n.profile-avatar svg { display: block; }\n.profile-body { padding: 40px 16px 16px; }\n.profile-name { font-size: 18px; font-weight: 900; }\n.profile-sub { font-size: 12px; color: var(--ink-soft); font-weight: 700; font-family: var(--font-mono); margin-top: 2px; }\n.profile-stats { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; font-size: 12px; font-weight: 700; color: var(--ink-soft); }\n.profile-stats b { color: var(--ink); font-size: 14px; }\n.profile-pct { margin-top: 6px; font-size: 12px; font-weight: 900; color: var(--accent); }\n\n/* ---------- badges ---------- */\n.badge-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.badge-cell {\n  display: flex; flex-direction: column; align-items: center; gap: 6px;\n  padding: 14px 6px;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: var(--card);\n  opacity: 0.45;\n}\n.badge-cell.unlocked { opacity: 1; border-color: var(--accent); }\n.badge-seal {\n  width: 44px; height: 44px;\n  display: grid; place-items: center;\n  background: var(--bg-soft);\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  font-family: var(--font-hanzi);\n  font-size: 22px; font-weight: 900;\n  color: var(--ink-soft);\n}\n.badge-cell.unlocked .badge-seal { background: var(--accent); border-color: var(--accent); color: var(--card); }\n.badge-label { font-size: 11px; font-weight: 800; color: var(--ink-soft); text-align: center; }\n.badge-cell.unlocked .badge-label { color: var(--ink); }\n\n.badge-toast {\n  position: fixed;\n  top: calc(12px + env(safe-area-inset-top, 0px));\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 200;\n  display: flex; align-items: center; gap: 12px;\n  padding: 12px 18px;\n  background: var(--card);\n  border: 1px solid var(--accent);\n  border-radius: var(--radius);\n  box-shadow: 0 8px 24px rgba(25, 23, 19, 0.18);\n  animation: badgeIn 0.35s cubic-bezier(0.2, 0.9, 0.2, 1.2);\n  cursor: pointer;\n}\n@keyframes badgeIn { from { opacity: 0; transform: translateX(-50%) translateY(-16px) scale(0.9); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }\n.badge-toast-seal {\n  width: 40px; height: 40px;\n  display: grid; place-items: center;\n  background: var(--accent); color: var(--card);\n  border-radius: 8px;\n  font-family: var(--font-hanzi);\n  font-size: 20px; font-weight: 900;\n}\n.badge-toast-kicker { font-size: 11px; font-weight: 900; color: var(--accent); font-family: var(--font-mono); }\n.badge-toast-title { font-size: 15px; font-weight: 900; }\n\n.collection-quiz-btn {\n  min-height: 40px;\n  padding: 6px 12px;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.collection-quiz-btn svg { width: 16px; height: 16px; }\n";
const apiFetch = (path, options = {}) => fetch(path, {
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  ...options
});
const checkSession = async () => {
  try {
    const res = await apiFetch('/api/auth/me');
    if (res.ok) return await res.json();
  } catch (e) {}
  return null;
};
const registerAccount = async () => {
  const res = await apiFetch('/api/auth/register', {
    method: 'POST',
    body: '{}'
  });
  if (!res.ok) throw new Error('register_failed');
  return res.json();
};
const loginAccount = async (userId, recoveryCode) => {
  const res = await apiFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      recoveryCode
    })
  });
  if (res.status === 401) throw new Error('invalid_credentials');
  if (!res.ok) throw new Error('login_failed');
  return res.json();
};
const logoutAccount = async () => {
  try {
    await apiFetch('/api/auth/logout', {
      method: 'POST'
    });
  } catch (e) {}
};
const deleteAccount = async () => {
  const res = await apiFetch('/api/account', {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('delete_failed');
  return res.json();
};
const fetchServerProgress = async () => {
  const res = await apiFetch('/api/progress');
  if (!res.ok) throw new Error('fetch_failed');
  return res.json();
};
const createShareCode = async () => {
  const res = await apiFetch('/api/share', {
    method: 'POST',
    body: '{}'
  });
  if (!res.ok) throw new Error('share_failed');
  return res.json();
};
const fetchSharedProgress = async code => {
  const res = await apiFetch(`/api/share/${encodeURIComponent(code)}`);
  if (res.status === 404) throw new Error('not_found');
  if (!res.ok) throw new Error('share_failed');
  return res.json();
};
const pushProgressToServer = async progress => {
  const res = await apiFetch('/api/progress', {
    method: 'PUT',
    body: JSON.stringify({
      progress
    })
  });
  if (!res.ok) throw new Error('push_failed');
  return res.json();
};
const mergeProgress = (local, remote) => {
  if (!remote) return local;
  const union = (a, b) => Array.from(new Set([...(a || []), ...(b || [])]));
  const masteredChars = union(local.masteredChars, remote.masteredChars);
  const learningChars = union(local.learningChars, remote.learningChars).filter(h => !masteredChars.includes(h));
  const mergeNumMap = (a, b) => {
    const out = {
      ...(a || {})
    };
    Object.entries(b || {}).forEach(([k, v]) => {
      out[k] = Math.max(out[k] || 0, v);
    });
    return out;
  };
  const seenScores = new Set();
  const quizScores = [...(local.quizScores || []), ...(remote.quizScores || [])].filter(q => {
    const key = `${q.date}|${q.score}|${q.total}`;
    if (seenScores.has(key)) return false;
    seenScores.add(key);
    return true;
  }).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 200);
  const lastStudyDate = [local.lastStudyDate, remote.lastStudyDate].filter(Boolean).sort().pop() || null;
  return {
    masteredChars,
    learningChars,
    quizScores,
    totalReviews: Math.max(local.totalReviews || 0, remote.totalReviews || 0),
    streakDays: Math.max(local.streakDays || 0, remote.streakDays || 0),
    lastStudyDate,
    drawingAttempts: mergeNumMap(local.drawingAttempts, remote.drawingAttempts),
    lastPositions: {
      ...(local.lastPositions || {}),
      ...(remote.lastPositions || {})
    },
    theme: remote.theme || local.theme || null,
    hanziFont: remote.hanziFont || local.hanziFont || null
  };
};
function AccountSection({
  session,
  syncState,
  lastSyncAt,
  account,
  t,
  playSound
}) {
  const [mode, setMode] = React.useState('create');
  const [busy, setBusy] = React.useState(false);
  const [errorKey, setErrorKey] = React.useState(null);
  const [created, setCreated] = React.useState(null);
  const [loginId, setLoginId] = React.useState('');
  const [loginCode, setLoginCode] = React.useState('');
  const run = async (fn, errorFallback = 'account.error') => {
    setBusy(true);
    setErrorKey(null);
    try {
      return await fn();
    } catch (e) {
      setErrorKey(e.message === 'invalid_credentials' ? 'account.invalidCredentials' : errorFallback);
      return null;
    } finally {
      setBusy(false);
    }
  };
  const handleGenerate = () => run(async () => {
    const data = await account.register();
    setCreated(data);
    playSound?.('reveal');
    return data;
  });
  const handleLogin = () => run(async () => {
    const data = await account.login(loginId.trim(), loginCode.trim());
    if (data) {
      playSound?.('select');
      setLoginId('');
      setLoginCode('');
    }
    return data;
  });
  const handleLogout = () => run(async () => {
    await account.logout();
    playSound?.('tap');
  }, 'account.error');
  const handleDelete = () => {
    if (!window.confirm(t('account.confirmDelete'))) return;
    run(async () => {
      await account.delete();
      playSound?.('tap');
    });
  };
  const syncLabel = syncState === 'syncing' ? t('account.syncing') : syncState === 'error' ? t('account.syncError') : lastSyncAt ? t('account.lastSync', {
    time: new Date(lastSyncAt).toLocaleTimeString()
  }) : t('account.neverSynced');
  return React.createElement("div", {
    className: "card account-card"
  }, !session ? React.createElement(React.Fragment, null, React.createElement("p", {
    className: "text-sm",
    style: {
      color: 'var(--text-secondary, #687870)'
    }
  }, t('account.privacy')), React.createElement("div", {
    className: "account-tabs"
  }, React.createElement("button", {
    className: `account-tab ${mode === 'create' ? 'active' : ''}`,
    onClick: () => {
      setMode('create');
      setCreated(null);
      setErrorKey(null);
    }
  }, t('account.createTab')), React.createElement("button", {
    className: `account-tab ${mode === 'login' ? 'active' : ''}`,
    onClick: () => {
      setMode('login');
      setCreated(null);
      setErrorKey(null);
    }
  }, t('account.loginTab'))), mode === 'create' && !created && React.createElement(React.Fragment, null, React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '10px'
    }
  }, t('account.createHint')), React.createElement("button", {
    className: "btn btn-primary",
    style: {
      marginTop: '12px',
      width: '100%'
    },
    onClick: handleGenerate,
    disabled: busy
  }, t('account.generate'))), mode === 'create' && created && React.createElement("div", {
    className: "recovery-box"
  }, React.createElement("p", {
    className: "title-sm"
  }, t('account.userId')), React.createElement("code", {
    className: "recovery-code"
  }, created.userId), React.createElement("p", {
    className: "title-sm",
    style: {
      marginTop: '10px'
    }
  }, t('account.recoveryCode')), React.createElement("code", {
    className: "recovery-code big"
  }, created.recoveryCode), React.createElement("p", {
    className: "text-sm",
    style: {
      color: '#c2410c',
      marginTop: '8px',
      fontWeight: 700
    }
  }, t('account.saveWarning')), React.createElement("button", {
    className: "btn btn-primary",
    style: {
      marginTop: '12px',
      width: '100%'
    },
    onClick: () => {
      setCreated(null);
    }
  }, t('account.saved'))), mode === 'login' && React.createElement(React.Fragment, null, React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '10px'
    }
  }, t('account.loginHint')), React.createElement("input", {
    className: "account-input",
    placeholder: t('account.loginId'),
    value: loginId,
    onChange: e => setLoginId(e.target.value),
    autoComplete: "off",
    autoCapitalize: "none",
    spellCheck: false
  }), React.createElement("input", {
    className: "account-input",
    placeholder: t('account.loginCode'),
    value: loginCode,
    onChange: e => setLoginCode(e.target.value),
    autoComplete: "off",
    autoCapitalize: "characters",
    spellCheck: false
  }), React.createElement("button", {
    className: "btn btn-primary",
    style: {
      marginTop: '12px',
      width: '100%'
    },
    onClick: handleLogin,
    disabled: busy || !loginId || !loginCode
  }, t('account.signIn'))), errorKey && React.createElement("p", {
    className: "text-sm",
    style: {
      color: '#c2410c',
      marginTop: '10px',
      fontWeight: 700
    }
  }, t(errorKey))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "account-row"
  }, React.createElement("div", null, React.createElement("p", {
    className: "title-sm"
  }, t('account.loggedInAs')), React.createElement("code", {
    className: "recovery-code"
  }, session.userId)), React.createElement("span", {
    className: `sync-pill ${syncState === 'error' ? 'error' : ''}`
  }, syncLabel)), React.createElement("div", {
    className: "backup-buttons",
    style: {
      marginTop: '12px'
    }
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleLogout,
    disabled: busy
  }, t('account.logout')), React.createElement("button", {
    className: "btn btn-coral",
    onClick: handleDelete,
    disabled: busy
  }, t('account.delete')))));
}
function ProfileCard({
  data,
  code,
  t
}) {
  const total = typeof STUDY_CATALOG !== 'undefined' && STUDY_CATALOG.length || VOCABULARY.length;
  const mastered = data.masteredChars?.length || 0;
  const pct = Math.round(mastered / total * 100);
  const firstChar = data.masteredChars?.[0] || data.learningChars?.[0] || '字';
  return React.createElement("div", {
    className: "profile-card"
  }, React.createElement("div", {
    className: "profile-banner"
  }), React.createElement("div", {
    className: "profile-avatar",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    width: "64",
    height: "64",
    viewBox: "0 0 96 96",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    x: "6",
    y: "6",
    width: "84",
    height: "84",
    rx: "14",
    fill: "#c8371f"
  }), React.createElement("text", {
    x: "48",
    y: "64",
    textAnchor: "middle",
    style: {
      fontFamily: 'var(--font-hanzi)'
    },
    fontSize: "46",
    fontWeight: "900",
    fill: "#fffdf8"
  }, firstChar))), React.createElement("div", {
    className: "profile-body"
  }, React.createElement("div", {
    className: "profile-name"
  }, "Hanzi Master"), React.createElement("div", {
    className: "profile-sub"
  }, "share \xB7 ", code), React.createElement("div", {
    className: "profile-stats"
  }, React.createElement("span", null, React.createElement("b", null, mastered), "/", total, " ", t('profile.mastered')), React.createElement("span", null, React.createElement("b", null, data.streakDays || 0), " ", t('profile.streak')), React.createElement("span", null, React.createElement("b", null, data.totalReviews || 0), " ", t('profile.reviews'))), React.createElement("div", {
    className: "progress-bar"
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: `${pct}%`
    }
  })), React.createElement("div", {
    className: "profile-pct"
  }, pct, "%")));
}
function ShareSection({
  session,
  progress,
  updateProgress,
  t,
  playSound
}) {
  const [code, setCode] = React.useState(null);
  const [copied, setCopied] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [errorKey, setErrorKey] = React.useState(null);
  const [loadCode, setLoadCode] = React.useState('');
  const [preview, setPreview] = React.useState(null);
  const [imported, setImported] = React.useState(false);
  const handleCreate = async () => {
    setBusy(true);
    setErrorKey(null);
    try {
      const res = await createShareCode();
      setCode(res.code);
      playSound?.('reveal');
    } catch {
      setErrorKey('share.error');
    }
    setBusy(false);
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setErrorKey('share.error');
    }
  };
  const handleLoad = async () => {
    setBusy(true);
    setErrorKey(null);
    setPreview(null);
    setImported(false);
    try {
      const res = await fetchSharedProgress(loadCode.trim());
      setPreview({
        data: res.data,
        code: loadCode.trim().toUpperCase()
      });
    } catch (e) {
      setErrorKey(e.message === 'not_found' ? 'share.notFound' : 'share.error');
    }
    setBusy(false);
  };
  const handleImport = () => {
    if (!preview) return;
    updateProgress(mergeProgress(progress, preview.data));
    setImported(true);
    playSound?.('complete');
  };
  return React.createElement("div", {
    className: "card"
  }, !session && React.createElement("p", {
    className: "text-sm"
  }, t('share.needAccount')), session && React.createElement("div", {
    className: "share-create-row"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleCreate,
    disabled: busy
  }, t('share.create')), code && React.createElement(React.Fragment, null, React.createElement("code", {
    className: "recovery-code big",
    style: {
      flex: 1
    }
  }, code), React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleCopy
  }, copied ? t('share.copied') : t('share.copy')))), React.createElement("div", {
    className: "share-load-row"
  }, React.createElement("input", {
    className: "account-input",
    placeholder: t('share.loadHint'),
    value: loadCode,
    onChange: e => setLoadCode(e.target.value),
    autoComplete: "off",
    autoCapitalize: "characters",
    spellCheck: false
  }), React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleLoad,
    disabled: busy || !loadCode.trim()
  }, t('share.load'))), errorKey && React.createElement("p", {
    className: "text-sm",
    style: {
      color: 'var(--danger)',
      marginTop: '8px',
      fontWeight: 700
    }
  }, t(errorKey)), preview && React.createElement("div", {
    style: {
      marginTop: '14px'
    }
  }, React.createElement(ProfileCard, {
    data: preview.data,
    code: preview.code,
    t: t
  }), React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: '100%',
      marginTop: '12px'
    },
    onClick: handleImport,
    disabled: imported
  }, imported ? t('share.imported') : t('share.import'))));
}
const THEME_STORAGE_KEY = 'hanzi_master_theme';
const THEMES = [{
  id: 'light',
  labelKey: 'theme.light',
  swatch: 'linear-gradient(135deg, #f8f5ef 45%, #c8371f 60%, #191713)'
}, {
  id: 'dark',
  labelKey: 'theme.dark',
  swatch: 'linear-gradient(135deg, #14120f 45%, #e04a2a 60%, #efe9dd)'
}, {
  id: 'sakura',
  labelKey: 'theme.sakura',
  swatch: 'linear-gradient(135deg, #f9f1ee 45%, #c2452e 60%, #8a7a6d)'
}];
const THEME_META_COLOR = {
  light: '#f8f5ef',
  dark: '#14120f',
  sakura: '#f9f1ee'
};
const isValidTheme = id => THEMES.some(t => t.id === id);
const loadTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (isValidTheme(saved)) return saved;
  } catch (e) {
    console.warn('Failed to load theme:', e);
  }
  return 'light';
};
const applyTheme = id => {
  const theme = isValidTheme(id) ? id : 'light';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {
    console.warn('Failed to save theme:', e);
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_META_COLOR[theme]);
};
function ThemePicker({
  theme,
  onChange,
  t
}) {
  return React.createElement("div", {
    className: "theme-picker",
    role: "group",
    "aria-label": t('theme.section')
  }, THEMES.map(th => React.createElement("button", {
    key: th.id,
    type: "button",
    className: `theme-chip ${theme === th.id ? 'active' : ''}`,
    onClick: () => onChange(th.id),
    "aria-pressed": theme === th.id
  }, React.createElement("span", {
    className: "theme-swatch",
    style: {
      background: th.swatch
    },
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "theme-chip-label"
  }, t(th.labelKey)))));
}
const HANZI_FONT_STORAGE_KEY = 'hanzi_master_hanzi_font';
const HANZI_FONTS = [{
  id: 'sans',
  labelKey: 'font.sans',
  stack: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC', 'Source Han Sans SC', sans-serif"
}, {
  id: 'serif',
  labelKey: 'font.serif',
  stack: "'Songti SC', 'SimSun', 'Microsoft YaHei', serif"
}, {
  id: 'kai',
  labelKey: 'font.kai',
  stack: "'Kaiti SC', 'KaiTi', 'STKaiti', 'TW-Kai', 'Noto Serif CJK SC', serif"
}];
const HANZI_FONT_SAMPLE = '永';
const isValidHanziFont = id => HANZI_FONTS.some(f => f.id === id);
const loadHanziFont = () => {
  try {
    const saved = localStorage.getItem(HANZI_FONT_STORAGE_KEY);
    if (isValidHanziFont(saved)) return saved;
  } catch (e) {
    console.warn('Failed to load hanzi font:', e);
  }
  return 'serif';
};
const applyHanziFont = id => {
  const font = isValidHanziFont(id) ? id : 'serif';
  document.documentElement.dataset.hanziFont = font;
  try {
    localStorage.setItem(HANZI_FONT_STORAGE_KEY, font);
  } catch (e) {
    console.warn('Failed to save hanzi font:', e);
  }
};
function HanziFontPicker({
  hanziFont,
  onChange,
  t
}) {
  return React.createElement("div", {
    className: "font-picker",
    role: "group",
    "aria-label": t('font.section')
  }, HANZI_FONTS.map(f => React.createElement("button", {
    key: f.id,
    type: "button",
    className: `font-chip ${hanziFont === f.id ? 'active' : ''}`,
    onClick: () => onChange(f.id),
    "aria-pressed": hanziFont === f.id
  }, React.createElement("span", {
    className: "font-sample",
    style: {
      fontFamily: f.stack
    },
    "aria-hidden": "true"
  }, HANZI_FONT_SAMPLE), React.createElement("span", {
    className: "font-chip-label"
  }, t(f.labelKey)))));
}
const BADGES = [{
  id: 'first-review',
  char: '始',
  titleKey: 'badge.firstReview.title',
  descKey: 'badge.firstReview.desc',
  test: p => p.totalReviews >= 1
}, {
  id: 'first-mastered',
  char: '一',
  titleKey: 'badge.firstMastered.title',
  descKey: 'badge.firstMastered.desc',
  test: p => p.masteredChars.length >= 1
}, {
  id: 'streak-3',
  char: '火',
  titleKey: 'badge.streak3.title',
  descKey: 'badge.streak3.desc',
  test: p => p.streakDays >= 3
}, {
  id: 'first-quiz',
  char: '成',
  titleKey: 'badge.firstQuiz.title',
  descKey: 'badge.firstQuiz.desc',
  test: p => (p.quizScores?.length || 0) >= 1
}, {
  id: 'mastered-10',
  char: '十',
  titleKey: 'badge.mastered10.title',
  descKey: 'badge.mastered10.desc',
  test: p => p.masteredChars.length >= 10
}, {
  id: 'streak-7',
  char: '七',
  titleKey: 'badge.streak7.title',
  descKey: 'badge.streak7.desc',
  test: p => p.streakDays >= 7
}, {
  id: 'mastered-50',
  char: '满',
  titleKey: 'badge.mastered50.title',
  descKey: 'badge.mastered50.desc',
  test: p => p.masteredChars.length >= 50
}, {
  id: 'streak-30',
  char: '卅',
  titleKey: 'badge.streak30.title',
  descKey: 'badge.streak30.desc',
  test: p => p.streakDays >= 30
}, {
  id: 'mastered-100',
  char: '百',
  titleKey: 'badge.mastered100.title',
  descKey: 'badge.mastered100.desc',
  test: p => p.masteredChars.length >= 100
}];
const getUnlockedBadgeIds = progress => BADGES.filter(b => b.test(progress)).map(b => b.id);
const getBadgeById = id => BADGES.find(b => b.id === id);
function BadgeToast({
  badge,
  onClose,
  t
}) {
  React.useEffect(() => {
    const h = window.setTimeout(onClose, 3500);
    return () => window.clearTimeout(h);
  }, [onClose]);
  if (!badge) return null;
  return React.createElement("div", {
    className: "badge-toast",
    role: "status",
    onClick: onClose
  }, React.createElement("span", {
    className: "badge-toast-seal",
    "aria-hidden": "true"
  }, badge.char), React.createElement("div", null, React.createElement("p", {
    className: "badge-toast-kicker"
  }, t('badge.unlocked')), React.createElement("p", {
    className: "badge-toast-title"
  }, t(badge.titleKey))));
}
function BadgeGrid({
  progress,
  t
}) {
  const unlocked = React.useMemo(() => new Set(getUnlockedBadgeIds(progress)), [progress]);
  return React.createElement("div", {
    className: "badge-grid"
  }, BADGES.map(b => React.createElement("div", {
    key: b.id,
    className: `badge-cell ${unlocked.has(b.id) ? 'unlocked' : ''}`,
    title: t(b.titleKey)
  }, React.createElement("span", {
    className: "badge-seal",
    "aria-hidden": "true"
  }, b.char), React.createElement("span", {
    className: "badge-label"
  }, t(b.titleKey)))));
}
const TUTORIAL_STORAGE_KEY = 'hanzi_master_tutorial_seen';
const isSecretRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.endsWith('/secret') || window.location.hash === '#secret' || new URLSearchParams(window.location.search).get('view') === 'secret';
};
const loadTutorialSeen = () => {
  try {
    return localStorage.getItem(TUTORIAL_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
};
const saveTutorialSeen = () => {
  try {
    localStorage.setItem(TUTORIAL_STORAGE_KEY, 'true');
  } catch {}
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
  const [session, setSession] = React.useState(null);
  const [syncState, setSyncState] = React.useState('idle');
  const [lastSyncAt, setLastSyncAt] = React.useState(null);
  const [theme, setThemeState] = React.useState(() => {
    const saved = loadProgress().theme;
    return isValidTheme(saved) ? saved : loadTheme();
  });
  const [hanziFont, setHanziFontState] = React.useState(() => {
    const saved = loadProgress().hanziFont;
    return isValidHanziFont(saved) ? saved : loadHanziFont();
  });
  React.useEffect(() => {
    saveProgress(progress);
  }, [progress]);
  const [newBadge, setNewBadge] = React.useState(null);
  const knownBadgeIds = React.useRef(new Set(getUnlockedBadgeIds(loadProgress())));
  React.useEffect(() => {
    const ids = new Set(getUnlockedBadgeIds(progress));
    const fresh = BADGES.find(b => ids.has(b.id) && !knownBadgeIds.current.has(b.id));
    knownBadgeIds.current = ids;
    if (fresh) {
      setNewBadge(fresh);
      playSoundEffect('complete', soundEnabled);
    }
  }, [progress]);
  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  React.useEffect(() => {
    applyHanziFont(hanziFont);
  }, [hanziFont]);
  React.useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch {}
  }, [language]);
  React.useEffect(() => {
    saveSoundEnabled(soundEnabled);
  }, [soundEnabled]);
  React.useEffect(() => {
    saveAmbienceEnabled(ambienceEnabled);
    if (!ambienceEnabled) {
      stopAmbienceLoop();
      return;
    }
    startAmbienceLoop();
    const unlock = () => startAmbienceLoop();
    window.addEventListener('pointerdown', unlock, {
      once: true
    });
    window.addEventListener('keydown', unlock, {
      once: true
    });
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, [ambienceEnabled]);
  React.useEffect(() => () => stopAmbienceLoop(), []);
  React.useEffect(() => {
    const onKey = e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable) return;
      if (currentView === 'secret') return;
      const key = e.key;
      if (tutorialOpen) {
        if (key === 'Escape' || key === '?') {
          e.preventDefault();
          closeTutorial();
        }
        return;
      }
      if (key === 'Escape') {
        if (['learn', 'draw', 'quiz'].includes(currentView)) return;
        if (currentView !== 'home') {
          e.preventDefault();
          setCurrentViewWithSound('home');
        }
        return;
      }
      if (key === '?') {
        e.preventDefault();
        openTutorial();
        return;
      }
      if (['learn', 'draw', 'quiz'].includes(currentView)) return;
      const nav = {
        1: 'home',
        2: 'learn',
        3: 'draw',
        4: 'quiz',
        5: 'stats',
        d: 'daily',
        l: 'lessons'
      }[key.toLowerCase()];
      if (nav) {
        e.preventDefault();
        setSelectedQueue(null);
        if (['learn', 'draw', 'quiz', 'daily'].includes(nav)) setSelectedLesson(null);
        setCurrentViewWithSound(nav);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentView, tutorialOpen, setCurrentViewWithSound, openTutorial, closeTutorial, setSelectedLesson, setSelectedQueue]);
  React.useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = progress.lastStudyDate === yesterday.toDateString();
      setProgress(prev => ({
        ...prev,
        lastStudyDate: today,
        streakDays: wasYesterday ? prev.streakDays + 1 : 1
      }));
    }
  }, []);
  React.useEffect(() => {
    if (window.location.protocol === 'file:') return;
    let cancelled = false;
    (async () => {
      const s = await checkSession();
      if (cancelled || !s) return;
      setSession(s);
      try {
        const remote = await fetchServerProgress();
        if (remote.progress) {
          setProgress(prev => mergeProgress(prev, remote.progress));
          setSyncState('synced');
          setLastSyncAt(remote.updatedAt || Date.now());
        }
      } catch {
        setSyncState('error');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  React.useEffect(() => {
    if (!session || window.location.protocol === 'file:') return;
    setSyncState('syncing');
    const handle = window.setTimeout(async () => {
      try {
        const res = await pushProgressToServer(progress);
        setLastSyncAt(res.updatedAt);
        setSyncState('synced');
      } catch {
        setSyncState('error');
      }
    }, 1500);
    return () => window.clearTimeout(handle);
  }, [progress, session]);
  const updateProgress = React.useCallback(updates => setProgress(prev => ({
    ...prev,
    ...updates
  })), []);
  const markCharacterLearned = React.useCallback(hanzi => {
    setProgress(prev => prev.learningChars.includes(hanzi) ? {
      ...prev,
      totalReviews: prev.totalReviews + 1
    } : {
      ...prev,
      learningChars: [...prev.learningChars, hanzi],
      totalReviews: prev.totalReviews + 1
    });
  }, []);
  const markCharacterMastered = React.useCallback(hanzi => {
    setProgress(prev => prev.masteredChars.includes(hanzi) ? prev : {
      ...prev,
      masteredChars: [...prev.masteredChars, hanzi],
      learningChars: prev.learningChars.filter(h => h !== hanzi)
    });
  }, []);
  const setTheme = React.useCallback(id => {
    setThemeState(id);
    setProgress(prev => ({
      ...prev,
      theme: isValidTheme(id) ? id : prev.theme
    }));
  }, []);
  const setHanziFont = React.useCallback(id => {
    setHanziFontState(id);
    setProgress(prev => ({
      ...prev,
      hanziFont: isValidHanziFont(id) ? id : prev.hanziFont
    }));
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
  const account = React.useMemo(() => ({
    register: async () => {
      const d = await registerAccount();
      setSession({
        userId: d.userId
      });
      return d;
    },
    login: async (userId, code) => {
      const d = await loginAccount(userId, code);
      setSession({
        userId: d.userId
      });
      try {
        const remote = await fetchServerProgress();
        if (remote.progress) {
          setProgress(prev => mergeProgress(prev, remote.progress));
          setSyncState('synced');
          setLastSyncAt(remote.updatedAt || Date.now());
        }
      } catch {
        setSyncState('error');
      }
      return d;
    },
    logout: async () => {
      await logoutAccount();
      setSession(null);
      setSyncState('idle');
      setLastSyncAt(null);
    },
    delete: async () => {
      await deleteAccount();
      setSession(null);
      setSyncState('idle');
      setLastSyncAt(null);
    }
  }), []);
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
    t,
    session,
    syncState,
    lastSyncAt,
    account,
    theme,
    setTheme,
    hanziFont,
    setHanziFont
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
  }), React.createElement(BadgeToast, {
    badge: newBadge,
    onClose: () => setNewBadge(null),
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
function HanziLogoSvg() {
  return React.createElement("svg", {
    className: "hanzi-logo-svg",
    width: "92",
    height: "92",
    viewBox: "0 0 96 96",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("rect", {
    x: "6",
    y: "6",
    width: "84",
    height: "84",
    rx: "14",
    fill: "currentColor"
  }), React.createElement("path", {
    d: "M28 66 C 30 46, 44 32, 58 34 C 70 36, 72 50, 62 56 C 54 61, 44 58, 42 50",
    stroke: "#fffdf8",
    strokeWidth: "9",
    strokeLinecap: "round",
    fill: "none"
  }), React.createElement("circle", {
    cx: "66",
    cy: "30",
    r: "4.5",
    fill: "#fffdf8"
  }));
}
function SealMarkSvg() {
  return React.createElement("svg", {
    width: "72",
    height: "72",
    viewBox: "0 0 96 96",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, React.createElement("rect", {
    x: "8",
    y: "8",
    width: "80",
    height: "80",
    rx: "16",
    fill: "#c8371f"
  }), React.createElement("path", {
    d: "M30 64 C 32 47, 45 35, 58 37 C 68 39, 70 51, 61 56 C 54 60, 46 57, 44 50",
    stroke: "#fffdf8",
    strokeWidth: "9",
    strokeLinecap: "round",
    fill: "none"
  }));
}
function AppIcon({
  name
}) {
  const p = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'home':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M4 11.5 12 4l8 7.5"
      }), React.createElement("path", {
        d: "M6 10v9h12v-9"
      }), React.createElement("path", {
        d: "M10 19v-5h4v5"
      }));
    case 'card':
      return React.createElement("svg", p, React.createElement("rect", {
        x: "4",
        y: "5",
        width: "16",
        height: "14",
        rx: "2"
      }), React.createElement("path", {
        d: "M4 10h16"
      }), React.createElement("path", {
        d: "M8 14.5h5"
      }));
    case 'brush':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M14 5l5 5-8.5 8.5-5 1 1-5L14 5Z"
      }), React.createElement("path", {
        d: "M12.5 6.5l5 5"
      }), React.createElement("path", {
        d: "M5 20c3-1 5-.5 7-2"
      }));
    case 'target':
      return React.createElement("svg", p, React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8"
      }), React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }), React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1",
        fill: "currentColor"
      }));
    case 'chart':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M4 4v16h16"
      }), React.createElement("path", {
        d: "M8 15l3-4 3 2 5-6"
      }));
    case 'scan':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
      }), React.createElement("path", {
        d: "M7 12h10"
      }));
    case 'book':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 0-2 2V5Z"
      }), React.createElement("path", {
        d: "M4 19a2 2 0 0 1 2-2h14"
      }), React.createElement("path", {
        d: "M9 8h7"
      }));
    case 'sound':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M4 9v6h4l5 4V5L8 9H4Z"
      }), React.createElement("path", {
        d: "M16.5 9a4.5 4.5 0 0 1 0 6"
      }), React.createElement("path", {
        d: "M19 6.5a8 8 0 0 1 0 11"
      }));
    case 'mute':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M4 9v6h4l5 4V5L8 9H4Z"
      }), React.createElement("path", {
        d: "M16 9l5 6M21 9l-5 6"
      }));
    case 'tea':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M5 11h12v4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-4Z"
      }), React.createElement("path", {
        d: "M17 12h1.5a2.5 2.5 0 0 1 0 5H17"
      }), React.createElement("path", {
        d: "M8 21h8"
      }), React.createElement("path", {
        d: "M9 8c-.8-1-.8-2 0-3M13 8c-.8-1-.8-2 0-3"
      }));
    case 'gift':
      return React.createElement("svg", p, React.createElement("rect", {
        x: "4",
        y: "10",
        width: "16",
        height: "10",
        rx: "1"
      }), React.createElement("path", {
        d: "M12 10v10M4 14h16"
      }), React.createElement("path", {
        d: "M12 10c-4 0-5-2-4.5-3.5C8 5 10 5 11 6c.8.8 1 2.5 1 4Zm0 0c4 0 5-2 4.5-3.5C16 5 14 5 13 6c-.8.8-1 2.5-1 4Z"
      }));
    case 'wallet':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2"
      }), React.createElement("rect", {
        x: "3",
        y: "7",
        width: "18",
        height: "12",
        rx: "2"
      }), React.createElement("path", {
        d: "M16 13h2"
      }));
    case 'help':
      return React.createElement("svg", p, React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), React.createElement("path", {
        d: "M9.5 9.5a2.5 2.5 0 1 1 3.8 2.1c-.8.5-1.3 1-1.3 2"
      }), React.createElement("path", {
        d: "M12 17h.01"
      }));
    case 'download':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M12 4v11"
      }), React.createElement("path", {
        d: "M7 11l5 5 5-5"
      }), React.createElement("path", {
        d: "M5 20h14"
      }));
    case 'print':
      return React.createElement("svg", p, React.createElement("path", {
        d: "M7 8V4h10v4"
      }), React.createElement("rect", {
        x: "4",
        y: "8",
        width: "16",
        height: "8",
        rx: "2"
      }), React.createElement("path", {
        d: "M7 13h10v7H7z"
      }));
    case 'search':
      return React.createElement("svg", p, React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "6"
      }), React.createElement("path", {
        d: "M20 20l-4.5-4.5"
      }));
    default:
      return React.createElement("svg", p, React.createElement("rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "3"
      }), React.createElement("path", {
        d: "M9 12h6M12 9v6"
      }));
  }
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
function LanguageToggle({
  language,
  setLanguage,
  playSound,
  t
}) {
  return React.createElement("div", {
    className: "language-toggle",
    "aria-label": "UI language"
  }, ['zh', 'en'].map(lang => React.createElement("button", {
    key: lang,
    className: language === lang ? 'active' : '',
    "aria-pressed": language === lang,
    onClick: () => {
      playSound?.('tap');
      setLanguage(lang);
    }
  }, t(lang === 'zh' ? 'lang.zh' : 'lang.en'))));
}
function SoundToggle({
  soundEnabled,
  setSoundEnabled,
  t
}) {
  return React.createElement("button", {
    className: `sound-toggle ${soundEnabled ? 'active' : ''}`,
    onClick: () => {
      playSoundEffect(soundEnabled ? 'tap' : 'correct', true);
      setSoundEnabled(!soundEnabled);
    },
    "aria-label": soundEnabled ? t('sound.on') : t('sound.off'),
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
  return React.createElement("button", {
    className: `sound-toggle ${ambienceEnabled ? 'active' : ''}`,
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
    "aria-label": ambienceEnabled ? t('ambience.on') : t('ambience.off'),
    "aria-pressed": ambienceEnabled,
    title: t('ambience.label')
  }, React.createElement(AppIcon, {
    name: "tea"
  }));
}
function ListRow({
  icon,
  label,
  meta,
  onClick
}) {
  return React.createElement("button", {
    className: "list-row",
    onClick: onClick
  }, React.createElement("span", {
    className: "list-icon"
  }, React.createElement(AppIcon, {
    name: icon
  })), React.createElement("span", {
    className: "list-label"
  }, label), meta && React.createElement("span", {
    className: "list-meta"
  }, meta), React.createElement("span", {
    className: "list-arrow",
    "aria-hidden": "true"
  }, "\u2192"));
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
const SHORTCUT_ROWS = [{
  keys: ['1', '2', '3', '4', '5', 'D', 'L'],
  labelKey: 'keys.nav'
}, {
  keys: ['Space', 'Enter'],
  labelKey: 'keys.flip'
}, {
  keys: ['←', '→'],
  labelKey: 'keys.cards'
}, {
  keys: ['1–4', 'Enter'],
  labelKey: 'keys.quiz'
}, {
  keys: ['?'],
  labelKey: 'keys.guide'
}, {
  keys: ['Esc'],
  labelKey: 'keys.back'
}];
function ShortcutsCard({
  t
}) {
  return React.createElement("div", {
    className: "keys-list"
  }, SHORTCUT_ROWS.map(row => React.createElement("div", {
    key: row.labelKey,
    className: "key-row"
  }, React.createElement("span", {
    className: "key-chips"
  }, row.keys.map(k => React.createElement("kbd", {
    key: k,
    className: "key-chip"
  }, k))), React.createElement("span", {
    className: "key-label"
  }, t(row.labelKey)))));
}
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
  }, "\xD7"), React.createElement("div", {
    className: "tutorial-hero"
  }, React.createElement(SealMarkSvg, null), React.createElement("div", null, React.createElement("div", {
    className: "tutorial-kicker"
  }, React.createElement("span", null, t('tutorial.badge')), React.createElement("span", null, t('tutorial.stepCount', {
    current: stepIndex + 1,
    total: TUTORIAL_STEPS.length
  }))), React.createElement("h2", {
    className: "title-lg"
  }, t('tutorial.title')), React.createElement("p", {
    className: "text-sm"
  }, t('tutorial.intro')))), React.createElement("div", {
    className: "tutorial-progress"
  }, React.createElement("div", {
    className: "tutorial-progress-fill",
    style: {
      width: `${progress}%`
    }
  })), React.createElement("div", {
    className: "tutorial-step-card"
  }, React.createElement("h3", null, t(step.titleKey)), React.createElement("p", null, t(step.bodyKey))), React.createElement("div", {
    className: "tutorial-dots",
    "aria-hidden": "true"
  }, TUTORIAL_STEPS.map((item, i) => React.createElement("span", {
    key: item.titleKey,
    className: i === stepIndex ? 'active' : ''
  }))), React.createElement("button", {
    className: "tutorial-open-step",
    onClick: () => {
      playSound?.('select');
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView(step.view);
      onClose();
    }
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
    onClick: () => {
      playSound?.('tap');
      setStepIndex(Math.max(0, stepIndex - 1));
    },
    disabled: isFirst
  }, t('tutorial.back')), React.createElement("button", {
    className: "tutorial-primary",
    onClick: () => {
      playSound?.('tap');
      isLast ? onClose() : setStepIndex(stepIndex + 1);
    }
  }, isLast ? t('tutorial.done') : t('tutorial.next'))))));
}
function HomeView({
  progress,
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  language,
  setLanguage,
  playSound,
  openTutorial,
  t
}) {
  const catalogSet = React.useMemo(() => new Set(STUDY_CATALOG.map(i => i.hanzi)), []);
  const masteredCount = React.useMemo(() => new Set(progress.masteredChars.filter(h => catalogSet.has(h))).size, [catalogSet, progress.masteredChars]);
  const learningCount = progress.learningChars.length;
  const totalChars = STUDY_CATALOG.length || VOCABULARY.length;
  const percent = Math.round(masteredCount / totalChars * 100);
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const isNewUser = progress.totalReviews === 0 && masteredCount === 0 && learningCount === 0;
  const openDaily = () => {
    setSelectedLesson(null);
    setSelectedQueue(null);
    playSound('select');
    setCurrentView('daily');
  };
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "super-topbar"
  }, React.createElement("div", {
    className: "brand-lockup"
  }, React.createElement("span", {
    className: "brand-mark",
    style: {
      color: 'var(--accent)'
    }
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
  }), progress.streakDays > 0 && React.createElement("span", {
    className: "daily-chip"
  }, React.createElement("span", {
    className: "chip-char",
    "aria-hidden": "true"
  }, "\u706B"), " ", progress.streakDays))), React.createElement("div", {
    className: "hero-block"
  }, React.createElement("div", {
    className: "hero-char-wrap"
  }, React.createElement("span", {
    className: "hero-char"
  }, dailyQueue[0]?.hanzi || '字'), React.createElement("span", {
    className: "hero-seal"
  }, "\u4E09")), React.createElement("h2", {
    className: "hero-title"
  }, isNewUser ? t('home.heroTitleNew') : t('home.heroTitle')), React.createElement("p", {
    className: "hero-subtitle"
  }, t('home.heroSubtitle')), React.createElement("button", {
    className: "btn btn-primary hero-cta",
    onClick: openDaily
  }, React.createElement("span", null, isNewUser ? t('home.heroCtaNew') : t('home.heroCtaReturn')), React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")), React.createElement("p", {
    className: "hero-hint"
  }, t('home.heroHint', {
    count: dailyQueue.length
  }))), isNewUser ? React.createElement("div", {
    className: "wallet-card"
  }, React.createElement("p", {
    className: "wallet-label"
  }, t('home.walletLabel')), React.createElement("div", {
    className: "wallet-empty-body"
  }, React.createElement("span", {
    className: "wallet-empty-char"
  }, "\u5B57"), React.createElement("div", null, React.createElement("p", {
    className: "title-md"
  }, t('home.walletEmptyTitle')), React.createElement("p", {
    className: "text-sm"
  }, t('home.walletEmptyCopy'))))) : React.createElement("div", {
    className: "wallet-card"
  }, React.createElement("p", {
    className: "wallet-label"
  }, t('home.walletLabel')), React.createElement("div", {
    className: "wallet-score"
  }, percent, "%"), React.createElement("div", {
    className: "progress-bar"
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: `${percent}%`
    }
  })), React.createElement("div", {
    className: "wallet-meta"
  }, React.createElement("span", null, t('home.masteredMeta', {
    mastered: masteredCount,
    total: totalChars
  })), React.createElement("span", null, t('home.learningMeta', {
    count: learningCount
  })))), React.createElement("div", {
    className: "card",
    style: {
      padding: '14px 16px'
    }
  }, React.createElement(ListRow, {
    icon: "gift",
    label: t('home.dailyKicker'),
    meta: `${dailyQueue.length}`,
    onClick: openDaily
  }), React.createElement("div", {
    className: "daily-entry-strip"
  }, dailyQueue.slice(0, 6).map(c => React.createElement("span", {
    key: c.hanzi,
    className: "daily-entry-char"
  }, c.hanzi)))), React.createElement("div", {
    className: "list-panel"
  }, React.createElement("div", {
    className: "list-head"
  }, t('home.myMiniPrograms')), React.createElement(ListRow, {
    icon: "scan",
    label: t('tiles.lessons'),
    onClick: () => {
      setSelectedQueue(null);
      setCurrentView('lessons');
    }
  }), React.createElement(ListRow, {
    icon: "card",
    label: t('tiles.cards'),
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('learn');
    }
  }), React.createElement(ListRow, {
    icon: "brush",
    label: t('tiles.write'),
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('draw');
    }
  }), React.createElement(ListRow, {
    icon: "target",
    label: t('tiles.quiz'),
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('quiz');
    }
  })));
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
  const summary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const openMode = view => {
    setSelectedLesson(null);
    setSelectedQueue({
      id: `daily:${getTodayKey()}`,
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
    className: "text-sm"
  }, getTodayKey())), React.createElement("h1", {
    className: "title-lg"
  }, t('daily.title')), React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '4px'
    }
  }, t('daily.subtitle')), React.createElement("div", {
    className: "card"
  }, React.createElement("p", {
    className: "title-md"
  }, t('daily.heroTitle')), React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '4px'
    }
  }, t('daily.heroCopy')), React.createElement("div", {
    className: "daily-queue-grid"
  }, dailyQueue.map(c => React.createElement("span", {
    key: c.hanzi,
    className: "daily-queue-char"
  }, React.createElement("span", {
    className: "hanzi-display"
  }, c.hanzi), React.createElement("small", null, t(`daily.reason.${c.dailyReason}`))))), React.createElement("div", {
    className: "daily-reason-row"
  }, React.createElement("span", null, t('daily.reason.new'), " ", summary.new || 0), React.createElement("span", null, t('daily.reason.review'), " ", summary.review || 0), React.createElement("span", null, t('daily.reason.solidify'), " ", summary.solidify || 0))), React.createElement("div", {
    className: "list-panel"
  }, React.createElement("div", {
    className: "list-head"
  }, t('daily.count', {
    count: dailyQueue.length
  })), React.createElement(ListRow, {
    icon: "card",
    label: t('daily.step1.title'),
    meta: t('daily.step1.copy'),
    onClick: () => openMode('learn')
  }), React.createElement(ListRow, {
    icon: "brush",
    label: t('daily.step2.title'),
    meta: t('daily.step2.copy'),
    onClick: () => openMode('draw')
  }), React.createElement(ListRow, {
    icon: "target",
    label: t('daily.step3.title'),
    meta: t('daily.step3.copy'),
    onClick: () => openMode('quiz')
  })), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setCurrentView('home')
  }, t('daily.doneEnough')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => openMode('learn')
  }, t('daily.start'))));
}
function LessonsView({
  setCurrentView,
  setSelectedLesson,
  setSelectedQueue,
  progress,
  t
}) {
  const lessons = React.useMemo(() => {
    const byLesson = new Map();
    VOCABULARY.forEach(v => {
      if (!byLesson.has(v.lesson)) byLesson.set(v.lesson, {
        lesson: v.lesson,
        book: v.book || 'hsk1',
        total: 0,
        mastered: 0
      });
      const g = byLesson.get(v.lesson);
      g.total += 1;
      if (progress.masteredChars.includes(v.hanzi)) g.mastered += 1;
    });
    return [...byLesson.values()].sort((a, b) => a.lesson - b.lesson);
  }, [progress]);
  const lessonLabel = l => l.book === 'hsk2' ? t('lessons.hsk2Lesson', {
    lesson: l.lesson
  }) : t('stats.lesson', {
    lesson: l.lesson
  });
  const openLesson = (lesson, view) => {
    setSelectedQueue(null);
    setSelectedLesson(lesson);
    setCurrentView(view);
  };
  const collections = getMaterialCollectionQueues();
  const openCollection = (c, view) => {
    setSelectedLesson(null);
    setSelectedQueue(getMaterialCollectionQueue(MATERIAL_COLLECTIONS.find(m => m.id === c.id)));
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
    className: "text-sm"
  }, t('lessons.title'))), React.createElement("h1", {
    className: "title-lg"
  }, t('lessons.title')), React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '4px'
    }
  }, t('lessons.subtitle')), React.createElement("div", {
    className: "list-panel"
  }, React.createElement("div", {
    className: "list-head"
  }, t('lessons.quick')), lessons.map(l => React.createElement(ListRow, {
    key: l.lesson,
    icon: "book",
    label: lessonLabel(l),
    meta: `${l.mastered}/${l.total}`,
    onClick: () => openLesson(l.lesson, 'learn')
  }))), React.createElement("div", {
    className: "list-panel"
  }, React.createElement("div", {
    className: "list-head"
  }, t('lessons.materialBanks')), collections.map(c => React.createElement("div", {
    key: c.id,
    className: "list-row",
    style: {
      cursor: 'default'
    }
  }, React.createElement("button", {
    className: "list-row",
    style: {
      flex: 1,
      border: 'none',
      padding: 0
    },
    onClick: () => openCollection(c, 'learn')
  }, React.createElement("span", {
    className: "list-icon"
  }, React.createElement(AppIcon, {
    name: "card"
  })), React.createElement("span", {
    className: "list-label"
  }, c.labelKey ? t(c.labelKey) : c.labelEn || c.labelZh || c.id), React.createElement("span", {
    className: "list-meta"
  }, c.items.length), React.createElement("span", {
    className: "list-arrow",
    "aria-hidden": "true"
  }, "\u2192")), React.createElement("button", {
    className: "btn btn-secondary collection-quiz-btn",
    onClick: () => openCollection(c, 'quiz'),
    "aria-label": `${t('quiz.title')} — ${c.labelEn || c.id}`
  }, React.createElement(AppIcon, {
    name: "target"
  }), " ", t('quiz.title'))))), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('draw');
    }
  }, t('lessons.drawAll')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => {
      setSelectedLesson(null);
      setSelectedQueue(null);
      setCurrentView('quiz');
    }
  }, t('lessons.quizAll'))));
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
  const vocab = React.useMemo(() => {
    if (selectedQueue?.items) return selectedQueue.items;
    if (selectedLesson) return getStudyQueue(VOCABULARY.filter(v => v.lesson === selectedLesson), progress);
    return getStudyQueue(VOCABULARY, progress);
  }, [selectedQueue, selectedLesson, progress]);
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [showRelated, setShowRelated] = React.useState(false);
  const current = vocab[Math.min(index, vocab.length - 1)];
  const related = React.useMemo(() => {
    if (!current?.lesson) return [];
    return COMPOUNDS.filter(c => c.lesson === current.lesson && c.hanzi.includes(current.hanzi)).slice(0, 6);
  }, [current]);
  React.useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [selectedQueue, selectedLesson]);
  const go = dir => {
    playSound('tap');
    if (dir > 0 && current) markCharacterLearned(current.hanzi);
    updateProgress({
      lastPositions: {
        ...progress.lastPositions,
        learn: index
      }
    });
    setIndex(i => Math.max(0, Math.min(vocab.length - 1, i + dir)));
    setFlipped(false);
    setShowRelated(false);
  };
  React.useEffect(() => {
    const onKey = e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable) return;
      if (!current) return;
      const k = e.key;
      if (k === 'Escape') {
        e.preventDefault();
        setCurrentView('home');
      } else if (k === ' ' || k === 'Enter' || k.toLowerCase() === 'f') {
        e.preventDefault();
        playSound('select');
        setFlipped(f => !f);
      } else if (k === 'ArrowRight' || k.toLowerCase() === 'n') {
        e.preventDefault();
        go(1);
      } else if (k === 'ArrowLeft' || k.toLowerCase() === 'p') {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  if (!current) return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back'))));
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement("span", {
    className: "text-sm"
  }, index + 1, " / ", vocab.length)), React.createElement("div", {
    className: "progress-bar"
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: `${(index + 1) / vocab.length * 100}%`
    }
  })), React.createElement("div", {
    className: "flashcard",
    onClick: () => {
      playSound('select');
      setFlipped(!flipped);
    },
    role: "button",
    tabIndex: 0
  }, !flipped ? React.createElement("div", {
    className: "hanzi-hero"
  }, current.hanzi) : React.createElement("div", null, React.createElement("div", {
    className: "hanzi-hero",
    style: {
      fontSize: '56px',
      color: 'var(--ink)'
    }
  }, current.hanzi), React.createElement("div", {
    className: "pinyin-display"
  }, current.pinyin), React.createElement("div", {
    className: "meaning-display"
  }, current.meaning), current.example && React.createElement("p", {
    className: "material-example"
  }, current.example)), !flipped && React.createElement("p", {
    className: "flashcard-hint"
  }, t('learn.tap'))), CHARACTER_MEMORY_CUES[current.hanzi] && React.createElement("div", {
    className: "card"
  }, React.createElement("p", {
    className: "text-sm",
    style: {
      fontStyle: 'italic'
    }
  }, CHARACTER_MEMORY_CUES[current.hanzi])), related.length > 0 && React.createElement("div", {
    className: "card"
  }, React.createElement("button", {
    className: "list-row",
    style: {
      width: '100%'
    },
    onClick: () => {
      playSound('reveal');
      setShowRelated(!showRelated);
    }
  }, React.createElement("span", {
    className: "list-label"
  }, t('learn.related', {
    count: related.length
  })), React.createElement("span", {
    className: "list-arrow"
  }, showRelated ? '−' : '+')), showRelated && React.createElement("div", {
    className: "daily-entry-strip",
    style: {
      padding: '10px 0 2px'
    }
  }, related.map(c => React.createElement("span", {
    key: c.hanzi,
    className: "daily-entry-char",
    title: `${c.pinyin} — ${c.meaning}`
  }, c.hanzi)))), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => go(-1),
    disabled: index === 0
  }, t('common.prevCard')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => go(1)
  }, index === vocab.length - 1 ? t('common.done') : t('common.nextCard'))));
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
  const vocab = React.useMemo(() => {
    const base = selectedQueue?.items || (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY);
    return getDrawQueue(base, progress);
  }, [selectedQueue, selectedLesson, progress]);
  const [index, setIndex] = React.useState(0);
  const [feedback, setFeedback] = React.useState(null);
  const [mistakes, setMistakes] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const containerRef = React.useRef(null);
  const writerRef = React.useRef(null);
  const mistakesRef = React.useRef(0);
  const current = vocab[Math.min(index, vocab.length - 1)];
  React.useEffect(() => {
    if (!current || !containerRef.current) return;
    setFeedback(null);
    setMistakes(0);
    setDone(false);
    mistakesRef.current = 0;
    let writer;
    try {
      writer = HanziWriter.create(containerRef.current, current.hanzi, {
        width: 280,
        height: 280,
        padding: 10,
        drawingWidth: 6,
        showHintAfterMisses: 2,
        highlightOnComplete: true,
        charDataLoader: (char, onComplete) => {
          const data = window.HANZI_STROKE_DATA?.[char];
          if (data) onComplete(data);else setFeedback({
            type: 'error',
            message: t('draw.feedback.noData')
          });
        }
      });
      writerRef.current = writer;
      setTimeout(() => {
        writer.quiz({
          onCorrectStroke: () => {
            playSound('stroke');
            setFeedback({
              type: 'success',
              message: t('draw.feedback.start')
            });
            setTimeout(() => setFeedback(null), 700);
          },
          onMistake: () => {
            playSound('wrong');
            mistakesRef.current += 1;
            setMistakes(mistakesRef.current);
            setFeedback({
              type: 'error',
              message: t('draw.feedback.retry')
            });
            setTimeout(() => setFeedback(null), 700);
          },
          onComplete: () => {
            playSound('complete');
            setDone(true);
            markCharacterMastered(current.hanzi);
            setFeedback({
              type: 'success',
              message: mistakesRef.current === 0 ? t('draw.feedback.perfect') : t('draw.feedback.done')
            });
          }
        });
      }, 250);
    } catch (e) {
      console.warn('writer error', e);
    }
    return () => {
      writerRef.current = null;
    };
  }, [index, current?.hanzi]);
  const go = dir => {
    playSound('tap');
    updateProgress({
      lastPositions: {
        ...progress.lastPositions,
        draw: index
      }
    });
    setIndex(i => Math.max(0, Math.min(vocab.length - 1, i + dir)));
  };
  React.useEffect(() => {
    const onKey = e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable) return;
      if (!current) return;
      const k = e.key;
      if (k === 'Escape') {
        e.preventDefault();
        setCurrentView('home');
      } else if (k === 'ArrowRight' || k.toLowerCase() === 'n') {
        e.preventDefault();
        go(1);
      } else if (k === 'ArrowLeft' || k.toLowerCase() === 'p') {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  if (!current) return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back'))));
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => setCurrentView('home')
  }, t('common.back')), React.createElement("span", {
    className: "text-sm"
  }, index + 1, " / ", vocab.length)), React.createElement("h1", {
    className: "title-lg"
  }, current.pinyin), React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '2px'
    }
  }, current.meaning), React.createElement("div", {
    className: "draw-canvas-wrap"
  }, React.createElement("div", {
    ref: containerRef,
    className: "hanzi-writer-container"
  })), React.createElement("div", {
    className: "draw-stats"
  }, React.createElement("span", null, t('draw.strokes'), ": ", current.strokes), React.createElement("span", null, t('draw.mistakes'), ": ", mistakes), React.createElement("span", null, t('draw.completed'), ": ", done ? '✓' : '…')), React.createElement("p", {
    className: `draw-feedback ${feedback?.type || ''}`
  }, feedback?.message || ''), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => go(-1),
    disabled: index === 0
  }, t('common.prevChar')), React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => go(1)
  }, index === vocab.length - 1 ? t('common.done') : t('common.nextChar'))));
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
  const [mode, setMode] = React.useState(null);
  const [questions, setQuestions] = React.useState(null);
  const [qIndex, setQIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [answered, setAnswered] = React.useState(null);
  const startQuiz = m => {
    playSound('select');
    setMode(m);
    let pool = selectedQueue?.items || (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : getStudyQueue(VOCABULARY, progress));
    const isDaily = selectedQueue?.id?.startsWith('daily:');
    if (!isDaily) pool = [...pool].sort(() => Math.random() - 0.5);
    const answerKey = o => m === 'hanzi-to-pinyin' ? o.pinyin : m === 'pinyin-to-hanzi' ? o.hanzi : o.meaning;
    const qs = pool.slice(0, 10).map(item => {
      let distractors = getSimilarDistractors(item, pool, 3);
      let options = [...distractors, item];
      const seen = new Set();
      options = options.filter(o => {
        const k = answerKey(o);
        if (!k || seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      for (const extra of pool) {
        if (options.length >= 4) break;
        const k = answerKey(extra);
        if (k && !seen.has(k) && extra.hanzi !== item.hanzi) {
          seen.add(k);
          options.push(extra);
        }
      }
      options = options.sort(() => Math.random() - 0.5);
      return {
        item,
        options
      };
    });
    setQuestions(qs);
    setQIndex(0);
    setScore(0);
    setAnswered(null);
  };
  const answer = opt => {
    if (answered !== null) return;
    const q = questions[qIndex];
    const correct = opt.hanzi === q.item.hanzi;
    setAnswered(opt.hanzi);
    if (correct) {
      setScore(s => s + 1);
      playSound('correct');
      markCharacterMastered(q.item.hanzi);
    } else playSound('wrong');
  };
  const next = () => {
    playSound('tap');
    if (qIndex === questions.length - 1) {
      updateProgress({
        quizScores: [...progress.quizScores, {
          date: new Date().toISOString(),
          score,
          total: questions.length
        }].slice(-50)
      });
      setQuestions(null);
      setMode(null);
    } else {
      setQIndex(qIndex + 1);
      setAnswered(null);
    }
  };
  React.useEffect(() => {
    const onKey = e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable) return;
      const k = e.key;
      if (k === 'Escape') {
        e.preventDefault();
        if (!mode) setCurrentView('home');else {
          setQuestions(null);
          setMode(null);
        }
        return;
      }
      if (!mode) {
        const modes = ['hanzi-to-pinyin', 'pinyin-to-hanzi', 'hanzi-to-meaning'];
        const n = parseInt(k, 10);
        if (n >= 1 && n <= modes.length) {
          e.preventDefault();
          startQuiz(modes[n - 1]);
        }
        return;
      }
      if (!questions) return;
      if (qIndex === questions.length - 1 && answered !== null) return;
      if (answered === null) {
        const n = parseInt(k, 10);
        const q = questions[qIndex];
        if (q && n >= 1 && n <= q.options.length) {
          e.preventDefault();
          answer(q.options[n - 1]);
        }
      } else if (k === 'Enter' || k === ' ' || k === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  if (!mode) {
    return React.createElement("div", {
      className: "screen"
    }, React.createElement("header", {
      className: "header"
    }, React.createElement("button", {
      className: "back-btn",
      onClick: () => setCurrentView('home')
    }, t('common.back')), React.createElement("span", {
      className: "text-sm"
    }, t('quiz.title'))), React.createElement("h1", {
      className: "title-lg"
    }, t('quiz.title')), React.createElement("p", {
      className: "text-sm",
      style: {
        marginTop: '4px'
      }
    }, t('quiz.subtitle')), React.createElement("div", {
      className: "list-panel"
    }, React.createElement(ListRow, {
      icon: "sound",
      label: t('quiz.mode.hanziPinyin'),
      meta: t('quiz.mode.hanziPinyinCopy'),
      onClick: () => startQuiz('hanzi-to-pinyin')
    }), React.createElement(ListRow, {
      icon: "target",
      label: t('quiz.mode.pinyinHanzi'),
      meta: t('quiz.mode.pinyinHanziCopy'),
      onClick: () => startQuiz('pinyin-to-hanzi')
    }), React.createElement(ListRow, {
      icon: "book",
      label: t('quiz.mode.hanziMeaning'),
      meta: t('quiz.mode.hanziMeaningCopy'),
      onClick: () => startQuiz('hanzi-to-meaning')
    })));
  }
  if (!questions) {
    const pct = Math.round(score / Math.max(questions?.length || score, 1) * 100);
    return null;
  }
  if (questions && qIndex === questions.length - 1 && answered !== null && mode) {}
  const q = questions[qIndex];
  const prompt = mode === 'hanzi-to-pinyin' ? q.item.hanzi : mode === 'pinyin-to-hanzi' ? q.item.pinyin : q.item.hanzi;
  const answerText = o => mode === 'hanzi-to-pinyin' ? o.pinyin : mode === 'pinyin-to-hanzi' ? o.hanzi : o.meaning;
  const questionLabel = mode === 'hanzi-to-pinyin' ? t('quiz.howRead') : mode === 'pinyin-to-hanzi' ? t('quiz.whichHanzi') : t('quiz.whatMeans');
  const isLast = qIndex === questions.length - 1;
  if (answered !== null && isLast) {
    const pct = Math.round(score / questions.length * 100);
    return React.createElement("div", {
      className: "screen"
    }, React.createElement("header", {
      className: "header"
    }, React.createElement("button", {
      className: "back-btn",
      onClick: () => {
        setQuestions(null);
        setMode(null);
      }
    }, t('quiz.changeMode'))), React.createElement("div", {
      className: "card",
      style: {
        textAlign: 'center',
        padding: '32px 20px'
      }
    }, React.createElement("div", {
      className: "score-value"
    }, pct, "%"), React.createElement("div", {
      className: "score-label"
    }, t('common.score')), React.createElement("h2", {
      className: "title-lg",
      style: {
        marginTop: '12px'
      }
    }, pct >= 80 ? t('quiz.resultGreat') : pct >= 60 ? t('quiz.resultGood') : t('quiz.resultKeep')), React.createElement("p", {
      className: "text-sm",
      style: {
        marginTop: '8px'
      }
    }, t('quiz.scoreLine', {
      score,
      total: questions.length
    }))), React.createElement("div", {
      className: "nav-actions"
    }, React.createElement("button", {
      className: "btn btn-secondary",
      onClick: () => {
        setQuestions(null);
        setMode(null);
      }
    }, t('quiz.tryAgain')), React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        setQuestions(null);
        setMode(null);
        setCurrentView('home');
      }
    }, t('common.done'))));
  }
  return React.createElement("div", {
    className: "screen"
  }, React.createElement("header", {
    className: "header"
  }, React.createElement("button", {
    className: "back-btn",
    onClick: () => {
      setQuestions(null);
      setMode(null);
    }
  }, t('quiz.changeMode')), React.createElement("span", {
    className: "text-sm"
  }, qIndex + 1, " / ", questions.length)), React.createElement("p", {
    className: "text-sm",
    style: {
      textAlign: 'center'
    }
  }, questionLabel), React.createElement("div", {
    className: "quiz-question"
  }, prompt), React.createElement("div", {
    className: "quiz-options"
  }, q.options.map(o => {
    const isCorrect = o.hanzi === q.item.hanzi;
    const cls = answered === null ? '' : isCorrect ? 'correct' : answered === o.hanzi ? 'incorrect' : 'disabled';
    return React.createElement("button", {
      key: o.hanzi + o.pinyin,
      className: `quiz-option ${cls}`,
      onClick: () => answer(o),
      disabled: answered !== null
    }, answerText(o));
  })), answered !== null && React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("button", {
    className: "btn btn-primary",
    onClick: next
  }, isLast ? t('common.done') : t('quiz.next'))));
}
function StatsView({
  progress,
  setCurrentView,
  t,
  session,
  syncState,
  lastSyncAt,
  account,
  theme,
  setTheme,
  hanziFont,
  setHanziFont,
  soundEnabled,
  setSoundEnabled,
  ambienceEnabled,
  setAmbienceEnabled,
  playSound,
  updateProgress
}) {
  const isOfflineCopy = window.location.protocol === 'file:';
  const byLesson = React.useMemo(() => {
    const byLesson = new Map();
    VOCABULARY.forEach(v => {
      if (!byLesson.has(v.lesson)) byLesson.set(v.lesson, {
        lesson: v.lesson,
        book: v.book || 'hsk1',
        mastered: 0,
        total: 0
      });
      const g = byLesson.get(v.lesson);
      g.total += 1;
      if (progress.masteredChars.includes(v.hanzi)) g.mastered += 1;
    });
    return [...byLesson.values()].sort((a, b) => a.lesson - b.lesson);
  }, [progress]);
  const recentScores = progress.quizScores.slice(-5).reverse();
  const handleReset = () => {
    if (window.confirm(t('stats.confirmReset'))) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };
  const handleExport = () => {
    const blob = new Blob([JSON.stringify({
      version: 1,
      exportDate: new Date().toISOString(),
      appName: 'hanzi-master',
      progress
    }, null, 2)], {
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
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.progress || data.appName !== 'hanzi-master') {
          alert(t('stats.invalidBackup'));
          return;
        }
        if (window.confirm(t('stats.confirmImport', {
          date: new Date(data.exportDate).toLocaleDateString()
        }))) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(migrateProgress(data.progress)));
          window.location.reload();
        }
      } catch {
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
  }, t('common.back')), React.createElement("span", {
    className: "text-sm"
  }, t('stats.title'))), React.createElement("h1", {
    className: "title-lg"
  }, t('stats.title')), React.createElement("p", {
    className: "text-sm",
    style: {
      marginTop: '4px'
    }
  }, t('stats.subtitle')), React.createElement("div", {
    className: "stats-bar"
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
  })), React.createElement("div", {
    className: "list-panel"
  }, byLesson.map(l => React.createElement("div", {
    key: l.lesson,
    className: "list-row",
    style: {
      cursor: 'default'
    }
  }, React.createElement("span", {
    className: "list-label"
  }, l.book === 'hsk2' ? t('lessons.hsk2Lesson', {
    lesson: l.lesson
  }) : t('stats.lesson', {
    lesson: l.lesson
  })), React.createElement("span", {
    className: "list-meta"
  }, l.mastered, "/", l.total)))), recentScores.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.recent')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "list-panel"
  }, recentScores.map((q, i) => React.createElement("div", {
    key: i,
    className: "list-row",
    style: {
      cursor: 'default'
    }
  }, React.createElement("span", {
    className: "list-label"
  }, new Date(q.date).toLocaleDateString()), React.createElement("span", {
    className: "list-meta"
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
  }, VOCABULARY.map(c => React.createElement("span", {
    key: c.id,
    className: `char-item ${progress.masteredChars.includes(c.hanzi) ? 'mastered' : progress.learningChars.includes(c.hanzi) ? 'learning' : ''}`,
    title: `${c.pinyin} — ${c.meaning}`
  }, c.hanzi))), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('badges.section')), React.createElement("div", {
    className: "section-line"
  })), React.createElement(BadgeGrid, {
    progress: progress,
    t: t
  }), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('settings.section')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "card settings-row"
  }, React.createElement(SoundToggle, {
    soundEnabled: soundEnabled,
    setSoundEnabled: setSoundEnabled,
    t: t
  }), React.createElement(AmbienceToggle, {
    ambienceEnabled: ambienceEnabled,
    setAmbienceEnabled: setAmbienceEnabled,
    t: t
  })), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('theme.section')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "card"
  }, React.createElement(ThemePicker, {
    theme: theme,
    onChange: setTheme,
    t: t
  })), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('font.section')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "card"
  }, React.createElement(HanziFontPicker, {
    hanziFont: hanziFont,
    onChange: setHanziFont,
    t: t
  })), React.createElement("div", {
    className: "section-title keys-section"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('keys.section')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "card keys-section"
  }, React.createElement(ShortcutsCard, {
    t: t
  })), !isOfflineCopy && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('account.section')), React.createElement("div", {
    className: "section-line"
  })), React.createElement(AccountSection, {
    session: session,
    syncState: syncState,
    lastSyncAt: lastSyncAt,
    account: account,
    t: t,
    playSound: playSound
  })), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('share.section')), React.createElement("div", {
    className: "section-line"
  })), React.createElement(ShareSection, {
    session: session,
    progress: progress,
    updateProgress: updateProgress,
    t: t,
    playSound: playSound
  }), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.backup')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "backup-buttons"
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleExport
  }, t('stats.export')), React.createElement("label", {
    className: "btn btn-secondary",
    style: {
      cursor: 'pointer'
    }
  }, t('stats.import'), React.createElement("input", {
    type: "file",
    accept: ".json",
    onChange: handleImport,
    style: {
      display: 'none'
    }
  }))), React.createElement("div", {
    className: "section-title"
  }, React.createElement("span", {
    className: "text-sm"
  }, t('stats.offline')), React.createElement("div", {
    className: "section-line"
  })), React.createElement("div", {
    className: "card offline-pack-card"
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
  }, t('stats.offlineHint'))), !isOfflineCopy && React.createElement("a", {
    className: "btn btn-primary",
    href: "hanzi-master-offline.zip",
    download: "hanzi-master-offline.zip"
  }, t('stats.offlineDownload'))), React.createElement("div", {
    className: "nav-actions"
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
if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(e => console.warn('SW registration failed:', e));
  });
}
