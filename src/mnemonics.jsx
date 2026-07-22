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
  '坐': 'Two people sit together on the ground: sit.',
};

const COMPONENT_GLOSSES = {
  '爸': 'dad', '班': 'work shift', '帮': 'help', '报': 'report', '杯': 'cup', '北': 'north',
  '备': 'prepare', '笔': 'writing brush', '边': 'side', '表': 'watch', '宾': 'guest', '病': 'illness',
  '步': 'step', '场': 'open ground', '唱': 'sing', '出': 'exit', '床': 'bed', '蛋': 'egg',
  '第': 'sequence marker', '动': 'move', '儿': 'child', '房': 'house', '啡': 'coffee sound', '分': 'divide; minute',
  '夫': 'husband', '高': 'high', '歌': 'song', '工': 'work', '公': 'public', '钩': 'hook',
  '瓜': 'melon', '关': 'connection', '馆': 'building', '国': 'country', '孩': 'child', '汉': 'Chinese',
  '红': 'red', '候': 'wait; time', '鸡': 'chicken', '间': 'space; interval', '教': 'teach', '姐': 'older sister',
  '介': 'introduce', '今': 'now; today', '京': 'capital', '睛': 'eye', '咖': 'coffee sound', '考': 'test',
  '客': 'guest', '口': 'mouth; opening', '快': 'quick', '篮': 'basket', '老': 'old; respected', '旅': 'journey',
  '妈': 'mom', '么': 'question ending', '们': 'plural people', '米': 'rice grain', '面': 'face; side', '名': 'name',
  '明': 'bright; tomorrow', '那': 'that', '奶': 'milk', '牛': 'cow', '旁': 'beside', '跑': 'run',
  '朋': 'companion', '苹': 'apple', '妻': 'wife', '期': 'period; week', '铅': 'lead', '前': 'front',
  '球': 'ball', '日': 'sun; day', '色': 'color', '商': 'commerce', '绍': 'continue; introduce', '什': 'what',
  '师': 'teacher', '时': 'time', '试': 'test', '室': 'room', '司': 'manage', '踢': 'kick',
  '题': 'question', '跳': 'jump', '弯': 'bend', '玩': 'play', '晚': 'evening', '为': 'for; why',
  '卧': 'lie down', '舞': 'dance', '务': 'service', '息': 'rest; breath', '系': 'connection', '现': 'present; appear',
  '斜': 'slant', '谢': 'thank', '新': 'new', '星': 'star; week', '兴': 'joy', '休': 'rest',
  '雪': 'snow', '眼': 'eye', '样': 'manner', '药': 'medicine', '要': 'want; about to', '医': 'medicine; doctor',
  '椅': 'chair', '游': 'travel; swim', '友': 'friend', '语': 'language', '员': 'member; worker', '院': 'courtyard; institution',
  '运': 'move; transport', '再': 'again', '早': 'early', '怎': 'how', '站': 'station; stand', '丈': 'adult man',
  '折': 'bend', '这': 'this', '正': 'right now; upright', '纸': 'paper', '中': 'middle; China', '钟': 'clock',
  '助': 'help', '准': 'prepare; accurate', '桌': 'table', '子': 'child; noun ending', '租': 'rent', '足': 'foot',
  '昨': 'yesterday', '作': 'work; make',
};

const MEMORY_CATEGORY_RULES = [
  ['nature', /sky|weather|rain|snow|sun|moon|cloud|water|fire|hot|cold|air|fruit|vegetable|fish|cat|animal|tree|flower|east|west|north|bright|black|white/i],
  ['number', /one|two|three|four|five|six|seven|eight|nine|ten|zero|how many|money|yuan|age|count|measure word/i],
  ['time', /time|year|month|day|week|today|tomorrow|yesterday|morning|noon|afternoon|evening|minute|date|now/i],
  ['place', /home|school|hospital|store|shop|restaurant|hotel|station|airport|room|inside|road|Beijing|China|company|cinema/i],
  ['language', /speak|say|read|write|listen|ask|answer|word|language|character|question|name|call|please|thank/i],
  ['person', /person|people|man|woman|girl|boy|mother|father|mom|dad|son|daughter|wife|husband|teacher|student|friend|classmate|doctor|waiter|he|she|you|I;|me|body|hand|eye|brain/i],
  ['action', /go|come|walk|run|fly|sit|ride|eat|drink|buy|look|watch|see|meet|learn|study|practice|work|play|dance|sing|sleep|open|drive|give|take|hold|find|wait|finish|help|prepare|travel|kick|do|make/i],
  ['object', /book|clothes|car|vehicle|machine|phone|computer|ticket|tea|rice|meal|cup|table|chair|newspaper|pencil|watch|movie|ball/i],
];

const cleanMemoryMeaning = (meaning = '') => meaning
  .split(/[;\/]/)[0]
  .replace(/\s*\([^)]*\)\s*/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const getMemoryCategory = (meaning) => (
  MEMORY_CATEGORY_RULES.find(([, pattern]) => pattern.test(meaning || ''))?.[0] || 'abstract'
);

const CHARACTER_GLOSSES = (() => {
  const glosses = new Map(Object.entries(COMPONENT_GLOSSES));
  STUDY_CATALOG.forEach(item => {
    if (Array.from(item.hanzi || '').length === 1 && item.meaning) {
      glosses.set(item.hanzi, cleanMemoryMeaning(item.meaning));
    }
  });
  return glosses;
})();

const getCharacterMemory = (item) => {
  const hanzi = item?.hanzi || '';
  const parentheticalForm = hanzi.match(/（([^）]+)）/u)?.[1];
  const locationFormMeaning = parentheticalForm
    ? ({ '这': 'here', '那': 'there', '哪': 'where' }[parentheticalForm[0]] || '')
    : '';
  const meaning = locationFormMeaning || cleanMemoryMeaning(item?.meaning || 'this meaning');
  const characters = Array.from(parentheticalForm || hanzi).filter(character => /[\u3400-\u9fff]/u.test(character));
  const parts = characters.slice(0, 4).map((character, index) => ({
    character,
    gloss: character === '儿' && index === characters.length - 1 && locationFormMeaning
      ? 'place suffix'
      : CHARACTER_GLOSSES.get(character) || 'picture cue',
  }));
  const isSingle = characters.length === 1;
  const isRepeatedWord = parts.length > 1 && parts.every(part => part.character === parts[0].character);

  return {
    category: getMemoryCategory(item?.meaning),
    isSingle,
    parts,
    title: isSingle ? 'Shape story' : 'Build the word',
    story: isSingle
      ? (CHARACTER_MEMORY_CUES[hanzi] || `Let the silhouette of ${hanzi} become a small sign for “${meaning}”.`)
      : isRepeatedWord
        ? `Repeat ${parts[0].character} (${parts[0].gloss}) like calling it twice; the familiar echo becomes “${meaning}”.`
        : `Picture ${parts.map(part => `${part.character} (${part.gloss})`).join(' meeting ')}. Read the scene from left to right and land on “${meaning}”.`,
  };
};

function MemorySceneSvg({ item, memory }) {
  const parts = memory.parts.length > 0 ? memory.parts : [{ character: item.hanzi, gloss: '' }];
  const partWidth = parts.length === 1 ? 72 : 52;
  const gap = parts.length === 1 ? 0 : 8;
  const groupWidth = (partWidth * parts.length) + (gap * Math.max(0, parts.length - 1));
  const startX = 120 - (groupWidth / 2);
  const accent = memory.category === 'nature' ? '#07a653'
    : memory.category === 'time' ? '#d99a18'
      : memory.category === 'language' ? '#1677ff'
        : memory.category === 'action' ? '#ef4b3e'
          : '#168b69';

  return (
    <svg className="memory-scene-svg" viewBox="0 0 240 132" role="img" aria-label={`${item.hanzi}: ${memory.story}`}>
      <rect x="1" y="1" width="238" height="130" rx="7" fill="#f7fbf8" stroke="#dce9e2" />
      <circle cx="202" cy="24" r="13" fill={memory.category === 'time' ? '#ffd76a' : '#ffe2a8'} opacity="0.82" />
      <path d="M0 101 C34 80 55 96 82 82 C112 65 136 96 165 77 C190 61 213 78 240 61 V132 H0 Z" fill="#dff3e8" />
      <path d="M0 114 C35 98 65 112 96 99 C130 84 165 112 195 96 C213 87 228 89 240 84 V132 H0 Z" fill="#c9ead9" />
      {memory.category === 'language' && (
        <>
          <path d="M26 28 h40 a8 8 0 0 1 8 8 v12 a8 8 0 0 1-8 8 H48 l-9 8 2-8 H26 a8 8 0 0 1-8-8 V36 a8 8 0 0 1 8-8Z" fill="#dbeaff" />
          <circle cx="34" cy="42" r="2.5" fill="#1677ff" /><circle cx="46" cy="42" r="2.5" fill="#1677ff" /><circle cx="58" cy="42" r="2.5" fill="#1677ff" />
        </>
      )}
      {memory.category === 'number' && (
        <g stroke="#d99a18" strokeWidth="2">
          <path d="M20 28 h48 M20 38 h48 M20 48 h48 M25 22 v34 M63 22 v34" />
          <circle cx="35" cy="28" r="4" fill="#ffd76a" stroke="none" /><circle cx="51" cy="38" r="4" fill="#ffd76a" stroke="none" /><circle cx="40" cy="48" r="4" fill="#ffd76a" stroke="none" />
        </g>
      )}
      {memory.category === 'place' && (
        <g fill="none" stroke="#168b69" strokeWidth="3" strokeLinecap="round">
          <path d="M20 51 h53 M27 50 l8-17 h24 l8 17 M34 51 v19 M59 51 v19 M27 70 h40" />
        </g>
      )}
      {memory.category === 'action' && (
        <g fill="none" stroke="#ef4b3e" strokeWidth="3" strokeLinecap="round">
          <path d="M18 61 C33 37 50 66 70 35" strokeDasharray="5 6" />
          <path d="m61 36 10-2-3 10" />
        </g>
      )}
      {memory.category === 'person' && (
        <g fill="#ffd8c8" stroke="#bd6d55" strokeWidth="2">
          <circle cx="35" cy="37" r="10" /><path d="M20 68 q15-25 30 0Z" />
          <circle cx="63" cy="42" r="8" /><path d="M52 68 q11-20 22 0Z" />
        </g>
      )}
      {memory.category === 'object' && (
        <g fill="#dbeaff" stroke="#1677ff" strokeWidth="2">
          <rect x="20" y="31" width="48" height="34" rx="5" /><path d="M29 40 h30 M29 49 h22 M29 58 h26" />
        </g>
      )}
      {memory.category === 'nature' && (
        <g fill="none" stroke="#168b69" strokeWidth="3" strokeLinecap="round">
          <path d="M14 69 34 34 47 55 57 42 76 69" /><path d="M20 76 q25-12 52 0" stroke="#1677ff" />
        </g>
      )}
      {memory.category === 'time' && (
        <g fill="#fff7dc" stroke="#d99a18" strokeWidth="2.5">
          <circle cx="45" cy="49" r="22" /><path d="M45 34 v16 l11 7" fill="none" strokeLinecap="round" />
        </g>
      )}
      {memory.category === 'abstract' && (
        <g fill="none" stroke="#8b6fb1" strokeWidth="3">
          <path d="M22 48 c0-22 31-22 31 0s-31 22-31 0Z" /><path d="M41 31 c21-7 34 18 17 31" />
        </g>
      )}

      <path d={`M${startX - 7} 83 H${startX + groupWidth + 7}`} stroke={accent} strokeWidth="2" strokeDasharray="3 5" opacity="0.5" />
      {parts.map((part, index) => {
        const x = startX + index * (partWidth + gap);
        return (
          <g key={`${part.character}-${index}`} transform={`translate(${x} 42)`}>
            <rect width={partWidth} height="58" rx="7" fill="#ffffff" stroke={index === parts.length - 1 ? accent : '#cddfd6'} strokeWidth="1.5" />
            <text x={partWidth / 2} y="39" textAnchor="middle" fill="#173126" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize={parts.length === 1 ? '36' : '29'} fontWeight="900">{part.character}</text>
            {parts.length > 1 && index < parts.length - 1 && <text x={partWidth + 4} y="35" fill={accent} fontSize="13" fontWeight="900">+</text>}
          </g>
        );
      })}

      <g transform="translate(195 94)">
        <circle cx="17" cy="17" r="15" fill="#ffffff" stroke="#18212b" strokeWidth="2" />
        <circle cx="8" cy="6" r="6" fill="#18212b" /><circle cx="26" cy="6" r="6" fill="#18212b" />
        <ellipse cx="17" cy="19" rx="10" ry="8" fill="#f7fbf8" />
        <circle cx="13" cy="16" r="2" fill="#18212b" /><circle cx="21" cy="16" r="2" fill="#18212b" />
        <path d="M14 22 q3 3 6 0" fill="none" stroke="#18212b" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g transform="translate(12 101)">
        <rect width="25" height="25" rx="4" fill="#ef4b3e" />
        <text x="12.5" y="18" textAnchor="middle" fill="#fff" fontFamily="Microsoft YaHei, PingFang SC, sans-serif" fontSize="14" fontWeight="900">记</text>
      </g>
    </svg>
  );
}

function MemoryScroll({ item, t, compact = false }) {
  const memory = React.useMemo(() => getCharacterMemory(item), [item]);
  return (
    <aside className={`memory-scroll ${compact ? 'memory-scroll-compact' : ''}`}>
      <div className="memory-scroll-heading">
        <span className="memory-scroll-seal">记</span>
        <div>
          <strong>{t('memory.title')}</strong>
          <span>{memory.isSingle ? t('memory.shape') : t('memory.build')}</span>
        </div>
      </div>
      <MemorySceneSvg item={item} memory={memory} />
      {memory.parts.length > 1 && (
        <div className="memory-parts" aria-label={t('memory.parts')}>
          {memory.parts.map((part, index) => (
            <span key={`${part.character}-${index}`}><b>{part.character}</b>{part.gloss}</span>
          ))}
        </div>
      )}
      <p>{memory.story}</p>
      <small>{t('memory.note')}</small>
    </aside>
  );
}
