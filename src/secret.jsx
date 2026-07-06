const SECRET_NUMBERS = [
  ['0', '零', 'líng'],
  ['1', '一', 'yī'],
  ['2', '二 / 两', 'èr / liǎng'],
  ['3', '三', 'sān'],
  ['4', '四', 'sì'],
  ['5', '五', 'wǔ'],
  ['6', '六', 'liù'],
  ['7', '七', 'qī'],
  ['8', '八', 'bā'],
  ['9', '九', 'jiǔ'],
  ['10', '十', 'shí'],
  ['11', '十一', 'shíyī'],
  ['20', '二十', 'èrshí'],
  ['21', '二十一', 'èrshíyī'],
  ['100', '一百', 'yìbǎi'],
  ['101', '一百零一', 'yìbǎi líng yī'],
  ['1,000', '一千', 'yìqiān'],
  ['10,000', '一万', 'yíwàn'],
];

const SECRET_TIME_PATTERNS = [
  { label: 'Year', formula: 'digits + 年', hanzi: '二零二六年', pinyin: 'èr líng èr liù nián', meaning: 'the year 2026' },
  { label: 'Month', formula: 'number + 月', hanzi: '九月', pinyin: 'jiǔ yuè', meaning: 'September' },
  { label: 'Date', formula: 'number + 号 / 日', hanzi: '七月五号', pinyin: 'qī yuè wǔ hào', meaning: 'July 5' },
  { label: 'Weekday', formula: '星期 + 1-6 / 日', hanzi: '星期五', pinyin: 'xīngqīwǔ', meaning: 'Friday' },
  { label: 'Clock', formula: 'period + 点 + 分', hanzi: '下午三点二十分', pinyin: 'xiàwǔ sān diǎn èrshí fēn', meaning: '3:20 p.m.' },
  { label: 'Age', formula: 'number + 岁', hanzi: '我二十岁。', pinyin: 'wǒ èrshí suì', meaning: 'I am 20 years old.' },
  { label: 'Money', formula: 'number + 块 / 元', hanzi: '三块钱', pinyin: 'sān kuài qián', meaning: 'three yuan' },
  { label: 'Duration', formula: 'number + time unit', hanzi: '我学了两年。', pinyin: 'wǒ xué le liǎng nián', meaning: 'I studied for two years.' },
];

const SECRET_MEASURE_WORDS = [
  ['个', 'gè', 'general people and things', '三个人'],
  ['本', 'běn', 'books and bound volumes', '两本书'],
  ['杯', 'bēi', 'cups and glasses', '一杯咖啡'],
  ['件', 'jiàn', 'clothes and matters', '这件衣服'],
  ['张', 'zhāng', 'flat objects and tickets', '两张票'],
  ['只', 'zhī', 'many animals; one of a pair', '一只猫'],
  ['把', 'bǎ', 'handled objects and chairs', '一把椅子'],
  ['位', 'wèi', 'polite measure for people', '一位老师'],
  ['家', 'jiā', 'businesses and institutions', '一家商店'],
  ['辆', 'liàng', 'vehicles', '一辆车'],
];

const SECRET_QUESTION_WORDS = [
  ['什么', 'shénme', 'what'],
  ['谁', 'shéi', 'who'],
  ['哪 / 哪儿', 'nǎ / nǎr', 'which / where'],
  ['几', 'jǐ', 'how many; small expected number'],
  ['多少', 'duōshao', 'how many; how much'],
  ['怎么', 'zěnme', 'how; why'],
  ['为什么', 'wèishénme', 'why'],
  ['什么时候', 'shénme shíhou', 'when'],
  ['怎么样', 'zěnmeyàng', 'how is it; how about'],
];

const SECRET_TONE_RULES = [
  { title: 'Four tones', copy: 'mā (1) · má (2) · mǎ (3) · mà (4); neutral tone stays light and short.' },
  { title: 'Third-tone pair', copy: '3rd + 3rd is pronounced 2nd + 3rd: 你好 nǐ hǎo → ní hǎo.' },
  { title: '一 tone change', copy: 'yí before a 4th tone; yì before 1st, 2nd, or 3rd tones; yī when isolated or ordinal.' },
  { title: '不 tone change', copy: 'bù becomes bú before a 4th-tone syllable: 不是 bú shì.' },
];

const SECRET_GRAMMAR = [
  { pattern: 'A 是 B', label: 'Identity', use: 'Use 是 to identify or classify.', hanzi: '我是学生。', pinyin: 'wǒ shì xuésheng', meaning: 'I am a student.' },
  { pattern: 'A 有 B', label: 'Possession', use: 'Use 有 for have; 没有 for do not have.', hanzi: '我有三本书。', pinyin: 'wǒ yǒu sān běn shū', meaning: 'I have three books.' },
  { pattern: 'A 在 place', label: 'Location', use: 'Put 在 before the place where someone or something is.', hanzi: '手机在桌子上。', pinyin: 'shǒujī zài zhuōzi shàng', meaning: 'The phone is on the table.' },
  { pattern: '在 / 正在 + V + 呢', label: 'Action in progress', use: 'Mark an action happening now.', hanzi: '他正在看报纸呢。', pinyin: 'tā zhèngzài kàn bàozhǐ ne', meaning: 'He is reading the newspaper.' },
  { pattern: '太 + adjective + 了', label: 'Too / very', use: 'Express a strong degree or a changed situation.', hanzi: '今天太热了。', pinyin: 'jīntiān tài rè le', meaning: 'It is too hot today.' },
  { pattern: '想 / 要 + V', label: 'Want / intend', use: '想 is a wish; 要 is a stronger intention or need.', hanzi: '我要去北京旅游。', pinyin: 'wǒ yào qù Běijīng lǚyóu', meaning: 'I want to travel to Beijing.' },
  { pattern: '会 / 能 / 可以 + V', label: 'Can', use: '会: learned ability; 能: capability; 可以: permission.', hanzi: '你明天下午能回来吗？', pinyin: 'nǐ míngtiān xiàwǔ néng huílai ma', meaning: 'Can you come back tomorrow afternoon?' },
  { pattern: 'V + 了', label: 'Completed action', use: 'Place 了 after the verb or at sentence end when a situation changes.', hanzi: '我买了些苹果。', pinyin: 'wǒ mǎi le xiē píngguǒ', meaning: 'I bought some apples.' },
  { pattern: '没(有) + V', label: 'Past negation', use: 'Negate completed or past actions with 没, not 不.', hanzi: '我没做完。', pinyin: 'wǒ méi zuòwán', meaning: 'I did not finish.' },
  { pattern: '是...的', label: 'Completed-action detail', use: 'Emphasize when, where, how, or by whom something happened.', hanzi: '这个工作是他帮我介绍的。', pinyin: 'zhège gōngzuò shì tā bāng wǒ jièshào de', meaning: 'He was the one who introduced this job to me.' },
  { pattern: 'A 比 B + adjective', label: 'Comparison', use: 'Compare A with B; add a quantity after the adjective when needed.', hanzi: '他比我大三岁。', pinyin: 'tā bǐ wǒ dà sān suì', meaning: 'He is three years older than me.' },
  { pattern: 'A 离 B + 远 / 近', label: 'Distance', use: 'State the distance between two places.', hanzi: '我家离公司很近。', pinyin: 'wǒ jiā lí gōngsī hěn jìn', meaning: 'My home is close to the company.' },
  { pattern: '就要 / 快要 + V + 了', label: 'About to happen', use: 'Describe an event that will happen very soon.', hanzi: '新年就要到了。', pinyin: 'xīnnián jiùyào dào le', meaning: 'New Year is almost here.' },
  { pattern: 'V + 完', label: 'Result complement', use: '完 marks that an action has been finished.', hanzi: '作业我已经做完了。', pinyin: 'zuòyè wǒ yǐjīng zuòwán le', meaning: 'I have already finished the homework.' },
  { pattern: 'V + 着', label: 'Continuing state', use: '着 describes a state that remains in effect.', hanzi: '门开着呢。', pinyin: 'mén kāizhe ne', meaning: 'The door is open.' },
  { pattern: '...吧', label: 'Suggestion', use: 'Soften a suggestion or proposal.', hanzi: '我们一起去踢足球吧。', pinyin: 'wǒmen yìqǐ qù tī zúqiú ba', meaning: "Let's go play football together." },
];

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
        sources: [source],
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

  const vocabulary = Array.from(byHanzi.values()).sort((a, b) => (
    a.pinyin.localeCompare(b.pinyin, 'en', { sensitivity: 'base' })
    || a.hanzi.localeCompare(b.hanzi, 'zh-Hans')
  ));
  return annotateVocabularyExamples(vocabulary);
};

function SecretCheatSheetView({ setCurrentView, language, setLanguage, playSound, t }) {
  const [query, setQuery] = React.useState('');
  const [level, setLevel] = React.useState('All');
  const vocabulary = React.useMemo(buildSecretVocabularyIndex, []);
  const levels = ['All', 'HSK1', 'HSK2', 'Book3', 'Basics'];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredVocabulary = React.useMemo(() => vocabulary.filter(item => {
    const matchesLevel = level === 'All' || item.levels.includes(level);
    if (!matchesLevel) return false;
    if (!normalizedQuery) return true;
    return [
      item.hanzi,
      item.pinyin,
      item.meanings.join(' '),
      item.example,
      item.examplePinyin,
      item.exampleTranslation,
      item.sources.join(' '),
    ].join(' ').toLocaleLowerCase().includes(normalizedQuery);
  }), [vocabulary, level, normalizedQuery]);

  const leaveSecret = () => {
    const nextUrl = window.location.protocol === 'file:'
      ? `${window.location.pathname}${window.location.search}`
      : '/';
    window.history.replaceState({}, '', nextUrl);
    setCurrentView('home');
  };

  return (
    <div className="screen secret-screen">
      <header className="secret-topbar">
        <button className="back-btn" onClick={leaveSecret}>{t('secret.back')}</button>
        <div className="secret-topbar-actions">
          <LanguageToggle language={language} setLanguage={setLanguage} playSound={playSound} t={t} />
          <button className="secret-print-button" onClick={() => window.print()}>
            <AppIcon name="print" />
            <span>{t('secret.print')}</span>
          </button>
        </div>
      </header>

      <section className="secret-hero">
        <div>
          <p className="secret-kicker">{t('secret.badge')}</p>
          <h1>{t('secret.title')}</h1>
          <p>{t('secret.subtitle')}</p>
        </div>
        <div className="secret-hero-seal">总</div>
      </section>

      <div className="secret-summary-strip">
        <div><strong>{vocabulary.length}</strong><span>{t('secret.uniqueWords')}</span></div>
        <div><strong>{MATERIAL_COLLECTIONS.length}</strong><span>{t('secret.collections')}</span></div>
        <div><strong>{SECRET_GRAMMAR.length}</strong><span>{t('secret.patterns')}</span></div>
        <div><strong>{SECRET_NUMBERS.length}</strong><span>{t('secret.numberForms')}</span></div>
      </div>

      <nav className="secret-jump-nav" aria-label={t('secret.contents')}>
        <a href="#secret-numbers">{t('secret.numbers')}</a>
        <a href="#secret-time">{t('secret.time')}</a>
        <a href="#secret-essentials">{t('secret.essentials')}</a>
        <a href="#secret-grammar">{t('secret.grammar')}</a>
        <a href="#secret-vocabulary">{t('secret.vocabulary')}</a>
      </nav>

      <section id="secret-numbers" className="secret-section">
        <div className="secret-section-heading">
          <div><span>01</span><h2>{t('secret.numbers')}</h2></div>
          <p>{t('secret.numbersHint')}</p>
        </div>
        <div className="secret-number-grid">
          {SECRET_NUMBERS.map(([arabic, hanzi, pinyin]) => (
            <div className="secret-number-item" key={arabic}>
              <span>{arabic}</span>
              <strong>{hanzi}</strong>
              <small>{pinyin}</small>
            </div>
          ))}
        </div>
        <div className="secret-rule-band">
          <strong>二 vs. 两</strong>
          <span>Use 二 when counting or reading digits; use 两 before most measure words: 二十二, 两个人, 两本书.</span>
        </div>
      </section>

      <section id="secret-time" className="secret-section">
        <div className="secret-section-heading">
          <div><span>02</span><h2>{t('secret.time')}</h2></div>
          <p>{t('secret.timeHint')}</p>
        </div>
        <div className="secret-pattern-grid secret-time-grid">
          {SECRET_TIME_PATTERNS.map(item => (
            <article className="secret-pattern-card" key={item.label}>
              <div className="secret-pattern-label"><span>{item.label}</span><code>{item.formula}</code></div>
              <strong>{item.hanzi}</strong>
              <em>{item.pinyin}</em>
              <p>{item.meaning}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="secret-essentials" className="secret-section">
        <div className="secret-section-heading">
          <div><span>03</span><h2>{t('secret.essentials')}</h2></div>
          <p>{t('secret.essentialsHint')}</p>
        </div>
        <div className="secret-reference-grid">
          <div className="secret-reference-block">
            <h3>{t('secret.measureWords')}</h3>
            <div className="secret-compact-list">
              {SECRET_MEASURE_WORDS.map(([hanzi, pinyin, meaning, example]) => (
                <div key={hanzi}><strong>{hanzi}</strong><em>{pinyin}</em><span>{meaning}</span><code>{example}</code></div>
              ))}
            </div>
          </div>
          <div className="secret-reference-block">
            <h3>{t('secret.questions')}</h3>
            <div className="secret-compact-list question-list">
              {SECRET_QUESTION_WORDS.map(([hanzi, pinyin, meaning]) => (
                <div key={hanzi}><strong>{hanzi}</strong><em>{pinyin}</em><span>{meaning}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="secret-tone-grid">
          {SECRET_TONE_RULES.map(rule => (
            <article key={rule.title}><strong>{rule.title}</strong><p>{rule.copy}</p></article>
          ))}
        </div>
      </section>

      <section id="secret-grammar" className="secret-section">
        <div className="secret-section-heading">
          <div><span>04</span><h2>{t('secret.grammar')}</h2></div>
          <p>{t('secret.grammarHint')}</p>
        </div>
        <div className="secret-grammar-list">
          {SECRET_GRAMMAR.map((item, index) => (
            <article className="secret-grammar-row" key={item.pattern}>
              <span className="secret-grammar-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="secret-grammar-rule">
                <code>{item.pattern}</code>
                <strong>{item.label}</strong>
                <p>{item.use}</p>
              </div>
              <div className="secret-grammar-example">
                <strong>{item.hanzi}</strong>
                <em>{item.pinyin}</em>
                <span>{item.meaning}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="secret-vocabulary" className="secret-section secret-vocabulary-section">
        <div className="secret-section-heading">
          <div><span>05</span><h2>{t('secret.vocabulary')}</h2></div>
          <p>{t('secret.vocabularyHint')}</p>
        </div>
        <div className="secret-vocab-tools">
          <label className="secret-search">
            <AppIcon name="scan" />
            <input
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder={t('secret.search')}
              aria-label={t('secret.search')}
            />
          </label>
          <div className="secret-level-filter">
            {levels.map(item => (
              <button
                key={item}
                className={level === item ? 'active' : ''}
                onClick={() => setLevel(item)}
              >
                {item === 'All' ? t('secret.all') : item}
              </button>
            ))}
          </div>
        </div>
        <p className="secret-result-count">{t('secret.results', { count: filteredVocabulary.length })}</p>
        {filteredVocabulary.length > 0 ? (
          <div className="secret-word-grid">
            {filteredVocabulary.map(item => (
              <article className="secret-word-row" key={item.hanzi}>
                <div className="secret-word-main">
                  <strong>{item.hanzi}</strong>
                  <em>{item.pinyin}</em>
                </div>
                <p>{item.meanings.join(' · ')}</p>
                {item.example && (
                  <div className="secret-example">
                    <small lang="zh-Hans">{item.example}</small>
                    {item.examplePinyin && <em>{item.examplePinyin}</em>}
                    {item.exampleTranslation && <span>{item.exampleTranslation}</span>}
                  </div>
                )}
                <div className="secret-source-tags">
                  {item.levels.map(itemLevel => <span key={itemLevel}>{itemLevel}</span>)}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="secret-empty">{t('secret.empty')}</div>
        )}
      </section>

      <footer className="secret-footer">
        <HanziLogoSvg />
        <div><strong>Hanzi Master</strong><span>{t('secret.footer')}</span></div>
      </footer>
    </div>
  );
}
