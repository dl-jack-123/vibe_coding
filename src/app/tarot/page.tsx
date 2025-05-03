'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { performReading, SpreadType } from '@/utils/tarotReading';
import Heading from '@/components/ui/Heading';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function TarotPage() {
  const router = useRouter();
  const [spreadType, setSpreadType] = useState<SpreadType>('three-cards');
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnCards, setDrawnCards] = useState<any[]>([]);

  const drawCards = () => {
    setIsDrawing(true);
    const reading = performReading(spreadType);
    
    // 解析抽牌結果
    const cardsData = reading.split('\n\n').map((cardText, index) => {
      try {
        const lines = cardText.split('\n');
        if (lines.length < 4) return null;

        const position = lines[0].split(' - ')[0] || `位置 ${index + 1}`;
        const name = lines[0].split(' - ')[1]?.split(' (')[0] || '未知牌';
        const isReversed = lines[0].includes('逆位');
        const meaning = lines[2]?.split('：')[1]?.split('、') || ['無解讀'];
        const imageUrl = lines[3]?.split('：')[1]?.trim() || '/images/tarot/backs/back.jpg';
        
        return {
          id: `card-${index}`,
          position,
          name: name.trim(),
          imageUrl,
          meaning,
          isReversed,
        };
      } catch (error) {
        console.error('解析卡片時出錯:', error);
        return null;
      }
    }).filter(Boolean);

    setDrawnCards(cardsData);
    setIsDrawing(false);
  };

  const startReading = () => {
    drawCards();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Heading level={1} variant="gradient" className="mb-4">
            塔羅牌
          </Heading>
          <p className="text-xl text-white/80 mb-4">
            探索塔羅牌的智慧，獲得生活的指引
          </p>
          <Link
            href="/tarot-encyclopedia"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            查看塔羅牌百科
          </Link>
        </div>

        {/* 牌陣選擇 */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSpreadType('three-cards')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              spreadType === 'three-cards'
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            三張牌陣
          </button>
          <button
            onClick={() => setSpreadType('celtic-cross')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              spreadType === 'celtic-cross'
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            凱爾特十字
          </button>
        </div>

        {/* 抽牌按鈕 */}
        <div className="text-center mb-12">
          <button
            onClick={startReading}
            disabled={isDrawing}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDrawing ? '抽牌中...' : '開始抽牌'}
          </button>
        </div>

        {/* 卡片展示區域 */}
        {drawnCards.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {drawnCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg p-6">
                    <h3 className="text-white text-center text-xl font-bold mb-4">
                      {card.position}
                    </h3>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-4">
                      <Image
                        src={card.imageUrl}
                        alt={card.name}
                        fill
                        className={`object-cover ${card.isReversed ? 'transform rotate-180' : ''}`}
                      />
                    </div>
                    <div className="text-white">
                      <h4 className="text-lg font-semibold mb-2">{card.name}</h4>
                      <p className="text-sm text-white/80">
                        {card.isReversed ? '逆位' : '正位'}含義：{card.meaning.join('、')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-bold"
                onClick={() => {
                  const encoded = encodeURIComponent(JSON.stringify(drawnCards));
                  router.push(`/reading/new?cards=${encoded}`);
                }}
              >
                前往解讀
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 