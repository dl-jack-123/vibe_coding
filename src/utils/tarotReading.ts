import { MAJOR_ARCANA, MINOR_ARCANA } from '@/constants/tarot';

// 定義牌陣類型
export type SpreadType = 'three-cards' | 'celtic-cross';

// 定義牌陣位置及其含義
export const SPREAD_MEANINGS = {
  'three-cards': [
    '過去',
    '現在',
    '未來'
  ],
  'celtic-cross': [
    '現狀',
    '挑戰',
    '潛意識',
    '過去',
    '目標',
    '近期未來',
    '態度',
    '環境',
    '希望與恐懼',
    '結果'
  ]
};

// 定義塔羅牌類型
export type TarotCard = {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  description: string;
  upright: string[];
  reversed: string[];
};

// 合併所有牌組
const ALL_CARDS: TarotCard[] = [
  ...MAJOR_ARCANA,
  ...MINOR_ARCANA.wands,
  ...MINOR_ARCANA.cups,
  ...MINOR_ARCANA.swords,
  ...MINOR_ARCANA.pentacles
];

// 生成隨機數
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

// 洗牌函數
const shuffleDeck = (deck: TarotCard[]): TarotCard[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 獲取卡片圖片路徑
const getCardImageUrl = (card: TarotCard): string => {
  // 檢查是否為大阿爾卡納
  const majorCard = MAJOR_ARCANA.find(c => c.name === card.name);
  if (majorCard) return majorCard.image;

  // 檢查是否為小阿爾卡納
  for (const suit of Object.values(MINOR_ARCANA)) {
    const minorCard = suit.find(c => c.name === card.name);
    if (minorCard) return minorCard.image;
  }

  // 如果找不到卡片，返回牌背圖片
  return '/images/tarot/backs/back.jpg';
};

// 抽牌函數
export const drawCards = (spreadType: SpreadType): { card: TarotCard; isReversed: boolean }[] => {
  const shuffledDeck = shuffleDeck(ALL_CARDS);
  const numCards = spreadType === 'three-cards' ? 3 : 10;
  
  return shuffledDeck.slice(0, numCards).map(card => ({
    card,
    isReversed: Math.random() < 0.5 // 50% 機率為逆位
  }));
};

// 生成解讀結果
export const generateReading = (
  spreadType: SpreadType,
  drawnCards: { card: TarotCard; isReversed: boolean }[]
): string => {
  const meanings = SPREAD_MEANINGS[spreadType];
  let reading = '';

  drawnCards.forEach(({ card, isReversed }, index) => {
    const position = meanings[index];
    const orientation = isReversed ? '逆位' : '正位';
    const meaningsList = isReversed ? card.reversed : card.upright;
    const imageUrl = getCardImageUrl(card);
    
    if (index > 0) {
      reading += '\n\n';
    }
    
    reading += `${position} - ${card.name} (${orientation})\n`;
    reading += `描述：${card.description}\n`;
    reading += `含義：${meaningsList.join('、')}\n`;
    reading += `圖片：${imageUrl}`;
  });

  return reading;
};

// 主函數：執行完整的抽牌解讀流程
export const performReading = (spreadType: SpreadType): string => {
  const drawnCards = drawCards(spreadType);
  return generateReading(spreadType, drawnCards);
}; 