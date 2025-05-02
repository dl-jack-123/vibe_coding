export interface TarotCard {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  description: string;
  upright: string[];
  reversed: string[];
}

export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 'major-0',
    name: '愚者',
    nameEn: 'The Fool',
    image: '/images/tarot/major-arcana/RWS_Tarot_00_Fool.jpg',
    description: '代表新的開始、冒險和無限可能',
    upright: ['新的開始', '冒險', '自由', '自發性'],
    reversed: ['魯莽', '不負責任', '風險', '不確定性']
  },
  {
    id: 'major-1',
    name: '魔術師',
    nameEn: 'The Magician',
    image: '/images/tarot/major-arcana/RWS_Tarot_01_Magician.jpg',
    description: '代表創造力、能力和行動力',
    upright: ['創造力', '能力', '行動力', '專注'],
    reversed: ['操縱', '欺騙', '未實現的潛力', '缺乏方向']
  },
  {
    id: 'major-2',
    name: '女祭司',
    nameEn: 'The High Priestess',
    image: '/images/tarot/major-arcana/RWS_Tarot_02_High_Priestess.jpg',
    description: '代表直覺、智慧和內在知識',
    upright: ['直覺', '智慧', '神秘', '內在指引'],
    reversed: ['忽視直覺', '隱藏真相', '困惑', '缺乏理解']
  },
  {
    id: 'major-3',
    name: '皇后',
    nameEn: 'The Empress',
    image: '/images/tarot/major-arcana/RWS_Tarot_03_Empress.jpg',
    description: '代表豐盛、創造力和母性',
    upright: ['豐盛', '創造力', '母性', '滋養'],
    reversed: ['過度放縱', '依賴', '缺乏成長', '控制欲']
  },
  {
    id: 'major-4',
    name: '皇帝',
    nameEn: 'The Emperor',
    image: '/images/tarot/major-arcana/RWS_Tarot_04_Emperor.jpg',
    description: '代表權威、結構和領導力',
    upright: ['權威', '結構', '領導力', '穩定'],
    reversed: ['專制', '控制', '缺乏靈活性', '權力濫用']
  },
  {
    id: 'major-5',
    name: '教皇',
    nameEn: 'The Hierophant',
    image: '/images/tarot/major-arcana/RWS_Tarot_05_Hierophant.jpg',
    description: '代表傳統、教育和精神指引',
    upright: ['傳統', '教育', '精神指引', '信仰'],
    reversed: ['教條主義', '反叛', '缺乏靈性', '束縛']
  },
  {
    id: 'major-6',
    name: '戀人',
    nameEn: 'The Lovers',
    image: '/images/tarot/major-arcana/RWS_Tarot_06_Lovers.jpg',
    description: '代表選擇、關係和和諧',
    upright: ['選擇', '關係', '和諧', '愛'],
    reversed: ['衝突', '不忠', '錯誤選擇', '關係緊張']
  },
  {
    id: 'major-7',
    name: '戰車',
    nameEn: 'The Chariot',
    image: '/images/tarot/major-arcana/RWS_Tarot_07_Chariot.jpg',
    description: '代表勝利、意志力和前進',
    upright: ['勝利', '意志力', '前進', '控制'],
    reversed: ['缺乏方向', '衝突', '失控', '挫折']
  },
  {
    id: 'major-8',
    name: '力量',
    nameEn: 'Strength',
    image: '/images/tarot/major-arcana/RWS_Tarot_08_Strength.jpg',
    description: '代表勇氣、耐心和內在力量',
    upright: ['勇氣', '耐心', '內在力量', '溫柔'],
    reversed: ['軟弱', '缺乏自信', '失控', '恐懼']
  },
  {
    id: 'major-9',
    name: '隱士',
    nameEn: 'The Hermit',
    image: '/images/tarot/major-arcana/RWS_Tarot_09_Hermit.jpg',
    description: '代表內省、智慧和孤獨',
    upright: ['內省', '智慧', '孤獨', '指引'],
    reversed: ['孤立', '過度謹慎', '缺乏方向', '逃避']
  },
  {
    id: 'major-10',
    name: '命運之輪',
    nameEn: 'Wheel of Fortune',
    image: '/images/tarot/major-arcana/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    description: '代表變化、機會和命運',
    upright: ['變化', '機會', '命運', '好運'],
    reversed: ['壞運氣', '抗拒變化', '不穩定', '挫折']
  },
  {
    id: 'major-11',
    name: '正義',
    nameEn: 'Justice',
    image: '/images/tarot/major-arcana/RWS_Tarot_11_Justice.jpg',
    description: '代表平衡、公平和因果',
    upright: ['平衡', '公平', '因果', '真相'],
    reversed: ['不公', '偏見', '缺乏責任', '逃避']
  },
  {
    id: 'major-12',
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    image: '/images/tarot/major-arcana/RWS_Tarot_12_Hanged_Man.jpg',
    description: '代表犧牲、等待和新的視角',
    upright: ['犧牲', '等待', '新的視角', '接受'],
    reversed: ['抗拒改變', '拖延', '自私', '缺乏行動']
  },
  {
    id: 'major-13',
    name: '死神',
    nameEn: 'Death',
    image: '/images/tarot/major-arcana/RWS_Tarot_13_Death.jpg',
    description: '代表轉變、結束和新生',
    upright: ['轉變', '結束', '新生', '改變'],
    reversed: ['抗拒改變', '停滯', '恐懼', '失去']
  },
  {
    id: 'major-14',
    name: '節制',
    nameEn: 'Temperance',
    image: '/images/tarot/major-arcana/RWS_Tarot_14_Temperance.jpg',
    description: '代表平衡、調和和耐心',
    upright: ['平衡', '調和', '耐心', '中庸'],
    reversed: ['不平衡', '過度', '缺乏耐心', '衝突']
  },
  {
    id: 'major-15',
    name: '惡魔',
    nameEn: 'The Devil',
    image: '/images/tarot/major-arcana/RWS_Tarot_15_Devil.jpg',
    description: '代表束縛、物質和慾望',
    upright: ['束縛', '物質', '慾望', '控制'],
    reversed: ['解放', '擺脫束縛', '覺醒', '自由']
  },
  {
    id: 'major-16',
    name: '高塔',
    nameEn: 'The Tower',
    image: '/images/tarot/major-arcana/RWS_Tarot_16_Tower.jpg',
    description: '代表突變、破壞和重建',
    upright: ['突變', '破壞', '重建', '覺醒'],
    reversed: ['避免災難', '抗拒改變', '壓抑', '延遲']
  },
  {
    id: 'major-17',
    name: '星星',
    nameEn: 'The Star',
    image: '/images/tarot/major-arcana/RWS_Tarot_17_Star.jpg',
    description: '代表希望、靈感和指引',
    upright: ['希望', '靈感', '指引', '平靜'],
    reversed: ['失望', '缺乏信心', '迷失', '悲觀']
  },
  {
    id: 'major-18',
    name: '月亮',
    nameEn: 'The Moon',
    image: '/images/tarot/major-arcana/RWS_Tarot_18_Moon.jpg',
    description: '代表直覺、潛意識和幻覺',
    upright: ['直覺', '潛意識', '幻覺', '神秘'],
    reversed: ['困惑', '欺騙', '恐懼', '誤解']
  },
  {
    id: 'major-19',
    name: '太陽',
    nameEn: 'The Sun',
    image: '/images/tarot/major-arcana/RWS_Tarot_19_Sun.jpg',
    description: '代表成功、快樂和活力',
    upright: ['成功', '快樂', '活力', '自信'],
    reversed: ['暫時的挫折', '缺乏自信', '過度樂觀', '延遲']
  },
  {
    id: 'major-20',
    name: '審判',
    nameEn: 'Judgement',
    image: '/images/tarot/major-arcana/RWS_Tarot_20_Judgement.jpg',
    description: '代表覺醒、重生和決定',
    upright: ['覺醒', '重生', '決定', '寬恕'],
    reversed: ['自我懷疑', '延遲', '缺乏覺醒', '後悔']
  },
  {
    id: 'major-21',
    name: '世界',
    nameEn: 'The World',
    image: '/images/tarot/major-arcana/RWS_Tarot_21_World.jpg',
    description: '代表完成、成就和圓滿',
    upright: ['完成', '成就', '圓滿', '成功'],
    reversed: ['未完成', '延遲', '缺乏成就感', '停滯']
  }
];

export const MINOR_ARCANA = {
  wands: [
    {
      id: 'wands-1',
      name: '權杖一',
      nameEn: 'Ace of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands01.jpg',
      description: '代表新的創意和熱情',
      upright: ['靈感', '創造力', '新機會', '熱情'],
      reversed: ['延遲', '缺乏靈感', '未實現的潛力', '挫折']
    },
    {
      id: 'wands-2',
      name: '權杖二',
      nameEn: 'Two of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands02.jpg',
      description: '代表計劃和決策',
      upright: ['計劃', '決策', '未來展望', '潛力'],
      reversed: ['缺乏計劃', '恐懼', '優柔寡斷', '限制']
    },
    {
      id: 'wands-3',
      name: '權杖三',
      nameEn: 'Three of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands03.jpg',
      description: '代表遠見和擴展',
      upright: ['遠見', '擴展', '合作', '進步'],
      reversed: ['缺乏遠見', '延遲', '挫折', '孤立']
    },
    {
      id: 'wands-4',
      name: '權杖四',
      nameEn: 'Four of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands04.jpg',
      description: '代表慶祝和穩定',
      upright: ['慶祝', '穩定', '成就', '家庭'],
      reversed: ['缺乏慶祝', '不穩定', '延遲', '衝突']
    },
    {
      id: 'wands-5',
      name: '權杖五',
      nameEn: 'Five of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands05.jpg',
      description: '代表競爭和挑戰',
      upright: ['競爭', '挑戰', '衝突', '成長'],
      reversed: ['避免衝突', '缺乏競爭', '和平', '妥協']
    },
    {
      id: 'wands-6',
      name: '權杖六',
      nameEn: 'Six of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands06.jpg',
      description: '代表勝利和認可',
      upright: ['勝利', '認可', '成功', '自信'],
      reversed: ['缺乏認可', '延遲', '挫折', '驕傲']
    },
    {
      id: 'wands-7',
      name: '權杖七',
      nameEn: 'Seven of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands07.jpg',
      description: '代表防禦和堅持',
      upright: ['防禦', '堅持', '挑戰', '勇氣'],
      reversed: ['放棄', '缺乏防禦', '壓力', '退縮']
    },
    {
      id: 'wands-8',
      name: '權杖八',
      nameEn: 'Eight of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands08.jpg',
      description: '代表快速行動和進展',
      upright: ['快速行動', '進展', '消息', '變化'],
      reversed: ['延遲', '混亂', '缺乏進展', '挫折']
    },
    {
      id: 'wands-9',
      name: '權杖九',
      nameEn: 'Nine of Wands',
      image: '/images/tarot/minor-arcana/wands/Tarot_Nine_of_Wands.jpg',
      description: '代表毅力和準備',
      upright: ['毅力', '準備', '警惕', '力量'],
      reversed: ['疲憊', '缺乏準備', '脆弱', '放棄']
    },
    {
      id: 'wands-10',
      name: '權杖十',
      nameEn: 'Ten of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands10.jpg',
      description: '代表負擔和責任',
      upright: ['負擔', '責任', '壓力', '完成'],
      reversed: ['釋放負擔', '缺乏責任', '自由', '逃避']
    },
    {
      id: 'wands-11',
      name: '權杖侍者',
      nameEn: 'Page of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands11.jpg',
      description: '代表探索和熱情',
      upright: ['探索', '熱情', '消息', '創意'],
      reversed: ['缺乏熱情', '延遲', '不成熟', '衝動']
    },
    {
      id: 'wands-12',
      name: '權杖騎士',
      nameEn: 'Knight of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands12.jpg',
      description: '代表行動和冒險',
      upright: ['行動', '冒險', '熱情', '勇氣'],
      reversed: ['衝動', '魯莽', '缺乏方向', '延遲']
    },
    {
      id: 'wands-13',
      name: '權杖皇后',
      nameEn: 'Queen of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands13.jpg',
      description: '代表自信和魅力',
      upright: ['自信', '魅力', '熱情', '領導'],
      reversed: ['缺乏自信', '嫉妒', '控制欲', '不安全感']
    },
    {
      id: 'wands-14',
      name: '權杖國王',
      nameEn: 'King of Wands',
      image: '/images/tarot/minor-arcana/wands/Wands14.jpg',
      description: '代表領導力和遠見',
      upright: ['領導力', '遠見', '熱情', '創造力'],
      reversed: ['專制', '衝動', '缺乏遠見', '控制']
    }
  ],
  cups: [
    {
      id: 'cups-1',
      name: '聖杯一',
      nameEn: 'Ace of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups01.jpg',
      description: '代表新的情感和直覺',
      upright: ['新感情', '直覺', '創造力', '情感覺醒'],
      reversed: ['情感混亂', '壓抑', '不安全感', '情感障礙']
    },
    {
      id: 'cups-2',
      name: '聖杯二',
      nameEn: 'Two of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups02.jpg',
      description: '代表夥伴關係和和諧',
      upright: ['夥伴關係', '和諧', '愛', '合作'],
      reversed: ['衝突', '不信任', '缺乏溝通', '分離']
    },
    {
      id: 'cups-3',
      name: '聖杯三',
      nameEn: 'Three of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups03.jpg',
      description: '代表慶祝和友誼',
      upright: ['慶祝', '友誼', '歡樂', '合作'],
      reversed: ['過度放縱', '衝突', '孤立', '缺乏慶祝']
    },
    {
      id: 'cups-4',
      name: '聖杯四',
      nameEn: 'Four of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups04.jpg',
      description: '代表沉思和不滿',
      upright: ['沉思', '不滿', '機會', '內省'],
      reversed: ['接受機會', '覺醒', '行動', '滿足']
    },
    {
      id: 'cups-5',
      name: '聖杯五',
      nameEn: 'Five of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups05.jpg',
      description: '代表失落和悲傷',
      upright: ['失落', '悲傷', '後悔', '失望'],
      reversed: ['接受', '寬恕', '希望', '前進']
    },
    {
      id: 'cups-6',
      name: '聖杯六',
      nameEn: 'Six of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups06.jpg',
      description: '代表懷舊和純真',
      upright: ['懷舊', '純真', '回憶', '快樂'],
      reversed: ['活在過去', '不成熟', '缺乏成長', '逃避']
    },
    {
      id: 'cups-7',
      name: '聖杯七',
      nameEn: 'Seven of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups07.jpg',
      description: '代表選擇和幻想',
      upright: ['選擇', '幻想', '可能性', '夢想'],
      reversed: ['缺乏選擇', '現實', '決定', '清晰']
    },
    {
      id: 'cups-8',
      name: '聖杯八',
      nameEn: 'Eight of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups08.jpg',
      description: '代表離開和追尋',
      upright: ['離開', '追尋', '成長', '改變'],
      reversed: ['恐懼改變', '停滯', '缺乏勇氣', '逃避']
    },
    {
      id: 'cups-9',
      name: '聖杯九',
      nameEn: 'Nine of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups09.jpg',
      description: '代表滿足和願望實現',
      upright: ['滿足', '願望實現', '快樂', '成功'],
      reversed: ['缺乏滿足', '失望', '過度放縱', '虛榮']
    },
    {
      id: 'cups-10',
      name: '聖杯十',
      nameEn: 'Ten of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups10.jpg',
      description: '代表幸福和家庭和諧',
      upright: ['幸福', '家庭和諧', '愛', '圓滿'],
      reversed: ['缺乏和諧', '衝突', '不滿足', '分離']
    },
    {
      id: 'cups-11',
      name: '聖杯侍者',
      nameEn: 'Page of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups11.jpg',
      description: '代表創意和直覺',
      upright: ['創意', '直覺', '新想法', '敏感'],
      reversed: ['缺乏創意', '情緒化', '不成熟', '幻想']
    },
    {
      id: 'cups-12',
      name: '聖杯騎士',
      nameEn: 'Knight of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups12.jpg',
      description: '代表浪漫和理想主義',
      upright: ['浪漫', '理想主義', '創意', '魅力'],
      reversed: ['不切實際', '情緒化', '缺乏行動', '幻想']
    },
    {
      id: 'cups-13',
      name: '聖杯皇后',
      nameEn: 'Queen of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups13.jpg',
      description: '代表同情和直覺',
      upright: ['同情', '直覺', '關懷', '理解'],
      reversed: ['情緒化', '缺乏界限', '依賴', '不安全感']
    },
    {
      id: 'cups-14',
      name: '聖杯國王',
      nameEn: 'King of Cups',
      image: '/images/tarot/minor-arcana/cups/Cups14.jpg',
      description: '代表智慧和情感平衡',
      upright: ['智慧', '情感平衡', '同情', '領導'],
      reversed: ['情緒化', '缺乏控制', '操縱', '不誠實']
    }
  ],
  swords: [
    {
      id: 'swords-1',
      name: '寶劍一',
      nameEn: 'Ace of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords01.jpg',
      description: '代表新的想法和突破',
      upright: ['突破', '清晰', '新想法', '勝利'],
      reversed: ['混亂', '困惑', '破壞', '衝突']
    },
    {
      id: 'swords-2',
      name: '寶劍二',
      nameEn: 'Two of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords02.jpg',
      description: '代表選擇和平衡',
      upright: ['選擇', '平衡', '僵局', '決策'],
      reversed: ['優柔寡斷', '逃避', '混亂', '衝突']
    },
    {
      id: 'swords-3',
      name: '寶劍三',
      nameEn: 'Three of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords03.jpg',
      description: '代表心碎和痛苦',
      upright: ['心碎', '痛苦', '失落', '悲傷'],
      reversed: ['治癒', '寬恕', '接受', '前進']
    },
    {
      id: 'swords-4',
      name: '寶劍四',
      nameEn: 'Four of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords04.jpg',
      description: '代表休息和恢復',
      upright: ['休息', '恢復', '平靜', '內省'],
      reversed: ['疲憊', '缺乏休息', '壓力', '不安']
    },
    {
      id: 'swords-5',
      name: '寶劍五',
      nameEn: 'Five of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords05.jpg',
      description: '代表衝突和勝利',
      upright: ['衝突', '勝利', '競爭', '代價'],
      reversed: ['和解', '寬恕', '和平', '妥協']
    },
    {
      id: 'swords-6',
      name: '寶劍六',
      nameEn: 'Six of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords06.jpg',
      description: '代表過渡和離開',
      upright: ['過渡', '離開', '平靜', '前進'],
      reversed: ['停滯', '抗拒改變', '延遲', '困境']
    },
    {
      id: 'swords-7',
      name: '寶劍七',
      nameEn: 'Seven of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords07.jpg',
      description: '代表策略和欺騙',
      upright: ['策略', '欺騙', '秘密', '逃避'],
      reversed: ['誠實', '面對現實', '責任', '正直']
    },
    {
      id: 'swords-8',
      name: '寶劍八',
      nameEn: 'Eight of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords08.jpg',
      description: '代表限制和困境',
      upright: ['限制', '困境', '恐懼', '束縛'],
      reversed: ['自由', '突破', '勇氣', '覺醒']
    },
    {
      id: 'swords-9',
      name: '寶劍九',
      nameEn: 'Nine of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords09.jpg',
      description: '代表焦慮和噩夢',
      upright: ['焦慮', '噩夢', '恐懼', '壓力'],
      reversed: ['希望', '釋放', '平靜', '勇氣']
    },
    {
      id: 'swords-10',
      name: '寶劍十',
      nameEn: 'Ten of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords10.jpg',
      description: '代表結束和重生',
      upright: ['結束', '重生', '釋放', '新開始'],
      reversed: ['復原', '希望', '恢復', '前進']
    },
    {
      id: 'swords-11',
      name: '寶劍侍者',
      nameEn: 'Page of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords11.jpg',
      description: '代表好奇和警覺',
      upright: ['好奇', '警覺', '新想法', '溝通'],
      reversed: ['缺乏警覺', '衝動', '不成熟', '誤解']
    },
    {
      id: 'swords-12',
      name: '寶劍騎士',
      nameEn: 'Knight of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords12.jpg',
      description: '代表行動和決心',
      upright: ['行動', '決心', '速度', '勇氣'],
      reversed: ['衝動', '魯莽', '缺乏計劃', '衝突']
    },
    {
      id: 'swords-13',
      name: '寶劍皇后',
      nameEn: 'Queen of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords13.jpg',
      description: '代表清晰和獨立',
      upright: ['清晰', '獨立', '智慧', '客觀'],
      reversed: ['冷酷', '無情', '批評', '孤立']
    },
    {
      id: 'swords-14',
      name: '寶劍國王',
      nameEn: 'King of Swords',
      image: '/images/tarot/minor-arcana/swords/Swords14.jpg',
      description: '代表智慧和公正',
      upright: ['智慧', '公正', '理性', '權威'],
      reversed: ['冷酷', '專制', '缺乏同情', '不公正']
    }
  ],
  pentacles: [
    {
      id: 'pentacles-1',
      name: '錢幣一',
      nameEn: 'Ace of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents01.jpg',
      description: '代表新的物質機會和財富',
      upright: ['新機會', '繁榮', '實際', '安全'],
      reversed: ['錯失機會', '財務問題', '不穩定', '缺乏規劃']
    },
    {
      id: 'pentacles-2',
      name: '錢幣二',
      nameEn: 'Two of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents02.jpg',
      description: '代表平衡和適應',
      upright: ['平衡', '適應', '靈活', '管理'],
      reversed: ['不平衡', '壓力', '混亂', '缺乏管理']
    },
    {
      id: 'pentacles-3',
      name: '錢幣三',
      nameEn: 'Three of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents03.jpg',
      description: '代表合作和技能',
      upright: ['合作', '技能', '團隊工作', '專業'],
      reversed: ['缺乏合作', '不專業', '衝突', '缺乏技能']
    },
    {
      id: 'pentacles-4',
      name: '錢幣四',
      nameEn: 'Four of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents04.jpg',
      description: '代表安全和控制',
      upright: ['安全', '控制', '穩定', '保守'],
      reversed: ['缺乏控制', '浪費', '不穩定', '貪婪']
    },
    {
      id: 'pentacles-5',
      name: '錢幣五',
      nameEn: 'Five of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents05.jpg',
      description: '代表困難和貧困',
      upright: ['困難', '貧困', '孤立', '挑戰'],
      reversed: ['復原', '希望', '幫助', '改善']
    },
    {
      id: 'pentacles-6',
      name: '錢幣六',
      nameEn: 'Six of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents06.jpg',
      description: '代表慷慨和分享',
      upright: ['慷慨', '分享', '平衡', '慈善'],
      reversed: ['自私', '不平衡', '依賴', '缺乏慷慨']
    },
    {
      id: 'pentacles-7',
      name: '錢幣七',
      nameEn: 'Seven of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents07.jpg',
      description: '代表評估和耐心',
      upright: ['評估', '耐心', '投資', '等待'],
      reversed: ['缺乏耐心', '失望', '放棄', '缺乏評估']
    },
    {
      id: 'pentacles-8',
      name: '錢幣八',
      nameEn: 'Eight of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents08.jpg',
      description: '代表專注和技能',
      upright: ['專注', '技能', '努力', '進步'],
      reversed: ['缺乏專注', '不完美', '缺乏進步', '無聊']
    },
    {
      id: 'pentacles-9',
      name: '錢幣九',
      nameEn: 'Nine of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents09.jpg',
      description: '代表獨立和成功',
      upright: ['獨立', '成功', '自給自足', '享受'],
      reversed: ['依賴', '缺乏成功', '不滿足', '浪費']
    },
    {
      id: 'pentacles-10',
      name: '錢幣十',
      nameEn: 'Ten of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents10.jpg',
      description: '代表財富和傳承',
      upright: ['財富', '傳承', '家庭', '安全'],
      reversed: ['財務問題', '缺乏傳承', '家庭衝突', '不穩定']
    },
    {
      id: 'pentacles-11',
      name: '錢幣侍者',
      nameEn: 'Page of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents11.jpg',
      description: '代表學習和機會',
      upright: ['學習', '機會', '勤奮', '成長'],
      reversed: ['缺乏學習', '浪費機會', '懶惰', '不成熟']
    },
    {
      id: 'pentacles-12',
      name: '錢幣騎士',
      nameEn: 'Knight of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents12.jpg',
      description: '代表勤奮和責任',
      upright: ['勤奮', '責任', '可靠', '穩定'],
      reversed: ['懶惰', '缺乏責任', '不可靠', '停滯']
    },
    {
      id: 'pentacles-13',
      name: '錢幣皇后',
      nameEn: 'Queen of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents13.jpg',
      description: '代表實用和關懷',
      upright: ['實用', '關懷', '繁榮', '滋養'],
      reversed: ['缺乏關懷', '物質主義', '不安全感', '自私']
    },
    {
      id: 'pentacles-14',
      name: '錢幣國王',
      nameEn: 'King of Pentacles',
      image: '/images/tarot/minor-arcana/pentacles/Pents14.jpg',
      description: '代表成功和財富',
      upright: ['成功', '財富', '穩定', '領導'],
      reversed: ['貪婪', '缺乏成功', '不穩定', '控制']
    }
  ]
}; 