export interface TarotCard {
  id: number
  name: string
  nameEn: string
  arcana: 'major' | 'minor'
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles'
  number: number
  description: string
  uprightMeaning: string
  reversedMeaning: string
  imageUrl: string
}

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: '愚者',
    nameEn: 'The Fool',
    arcana: 'major',
    number: 0,
    description: '代表新的開始、純真和自發性',
    uprightMeaning: '新的開始、冒險、純真、自發性',
    reversedMeaning: '魯莽、不負責任、過度冒險',
    imageUrl: '/cards/major/fool.jpg'
  },
  {
    id: 1,
    name: '魔術師',
    nameEn: 'The Magician',
    arcana: 'major',
    number: 1,
    description: '代表創造力、技能和意志力的展現',
    uprightMeaning: '創造力、技能、意志力、新開始',
    reversedMeaning: '操縱、欺騙、才能浪費',
    imageUrl: '/cards/major/magician.jpg'
  },
  // 其他大阿爾克納牌...
]

export const minorArcana: TarotCard[] = [
  {
    id: 22,
    name: '權杖王牌',
    nameEn: 'Ace of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 1,
    description: '代表新的機會和創意的火花',
    uprightMeaning: '創造力、靈感、新機會、成長',
    reversedMeaning: '延遲、缺乏動力、創意受阻',
    imageUrl: '/cards/wands/ace.jpg'
  },
  // 其他小阿爾克納牌...
]

export const allCards = [...majorArcana, ...minorArcana]

export function getRandomCard(): TarotCard {
  return allCards[Math.floor(Math.random() * allCards.length)]
}

export function getRandomCards(count: number): TarotCard[] {
  const cards = [...allCards]
  const result: TarotCard[] = []
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * cards.length)
    result.push(cards[randomIndex])
    cards.splice(randomIndex, 1)
  }
  
  return result
}

export function getCardById(id: number): TarotCard | undefined {
  return allCards.find(card => card.id === id)
} 