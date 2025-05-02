import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TarotCard {
  id: string;
  name: string;
  image: string;
  isReversed: boolean;
}

interface TarotAnimationProps {
  cards: TarotCard[];
  spreadType: 'three-cards' | 'celtic-cross';
  onAnimationComplete?: () => void;
}

const cardVariants = {
  hidden: {
    scale: 0,
    rotateY: 180,
    opacity: 0,
    x: 0,
    y: 0,
  },
  draw: (index: number) => ({
    scale: 1,
    rotateY: 0,
    opacity: 1,
    x: getCardPosition(index).x,
    y: getCardPosition(index).y,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: index * 0.5,
      duration: 1,
    },
  }),
  flip: {
    rotateY: [0, 180],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

// 根據牌陣類型計算每張牌的位置
const getCardPosition = (index: number) => {
  if (index === 0) return { x: 0, y: 0 };
  if (index === 1) return { x: 100, y: 0 };
  if (index === 2) return { x: -100, y: 0 };
  // 凱爾特十字陣的額外位置
  if (index === 3) return { x: 0, y: -100 };
  if (index === 4) return { x: 100, y: -100 };
  if (index === 5) return { x: -100, y: -100 };
  if (index === 6) return { x: 0, y: 100 };
  if (index === 7) return { x: 100, y: 100 };
  if (index === 8) return { x: -100, y: 100 };
  if (index === 9) return { x: 0, y: 200 };
  return { x: 0, y: 0 };
};

export const TarotAnimation: React.FC<TarotAnimationProps> = ({
  cards,
  spreadType,
  onAnimationComplete,
}) => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    cards.map(() => false)
  );

  useEffect(() => {
    // 在卡片移動到位後開始翻轉
    const flipTimer = setTimeout(() => {
      setFlippedCards(cards.map((card) => card.isReversed));
    }, cards.length * 500 + 1000);

    return () => clearTimeout(flipTimer);
  }, [cards]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* 牌堆背景 */}
      <motion.div
        className="absolute w-32 h-48 bg-gray-800 rounded-lg shadow-xl"
        initial={{ scale: 1 }}
        animate={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />

      <AnimatePresence>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute w-32 h-48"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="draw"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{
                rotateY: flippedCards[index] ? 180 : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              {/* 牌背 */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg shadow-xl"
                style={{
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-white rounded-full" />
                </div>
              </motion.div>

              {/* 牌面 */}
              <motion.div
                className="absolute w-full h-full rounded-lg shadow-xl"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-sm">
                  {card.name}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}; 