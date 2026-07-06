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
  '孩子们在外面玩儿。': 'The children are playing outside.',
};

const EXAMPLE_PINYIN_FALLBACKS = {
  今: 'jīn', 甲: 'jiǎ', 乙: 'yǐ', 超: 'chāo', 市: 'shì', 儿: 'ér',
  杯: 'bēi', 这: 'zhè', 汉: 'hàn', 们: 'men', 李: 'lǐ', 车: 'chē',
  明: 'míng', 日: 'rì', 那: 'nà', 没: 'méi', 高: 'gāo', 两: 'liǎng',
  天: 'tiān', 还: 'hái', 非: 'fēi', 常: 'cháng', 学: 'xué', 面: 'miàn',
  也: 'yě', 王: 'wáng', 只: 'zhī', 狗: 'gǒu', 前: 'qián', 起: 'qǐ',
  它: 'tā', 把: 'bǎ', 新: 'xīn', 半: 'bàn', 要: 'yào', 按: 'àn',
  时: 'shí', 院: 'yuàn', 应: 'yīng', 该: 'gāi', 可: 'kě', 以: 'yǐ',
  用: 'yòng', 早: 'zǎo', 餐: 'cān', 干: 'gān', 净: 'jìng', 左: 'zuǒ',
  边: 'biān', 难: 'nán', 出: 'chū', 饭: 'fàn', 份: 'fèn', 帮: 'bāng',
  课: 'kè', 后: 'hòu', 得: 'de', 近: 'jìn', 答: 'dá', 案: 'àn',
  道: 'dào', 题: 'tí', 作: 'zuò', 业: 'yè', 已: 'yǐ', 经: 'jīng',
  孩: 'hái', 妹: 'mèi', 支: 'zhī', 伞: 'sǎn', 放: 'fàng', 张: 'zhāng',
  火: 'huǒ', 祝: 'zhù', 快: 'kuài', 乐: 'lè', 到: 'dào', 照: 'zhào',
  片: 'piàn', 单: 'dān', 外: 'wài', 套: 'tào',
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

  return output.join(' ')
    .replace(/\s+([，。！？：；、）])/g, '$1')
    .replace(/（\s+/g, '（')
    .replace(/\s+/g, ' ')
    .trim();
};

const annotateVocabularyExamples = (vocabulary) => vocabulary.map(item => {
  const example = extractPrimaryExample(item.example);
  if (!example || !EXAMPLE_TRANSLATIONS[example]) {
    return { ...item, example };
  }
  return {
    ...item,
    example,
    examplePinyin: buildExamplePinyin(example, vocabulary),
    exampleTranslation: EXAMPLE_TRANSLATIONS[example],
  };
});
