'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';

interface CardData {
  id: string;
  position: string;
  name: string;
  imageUrl: string;
  isReversed: boolean;
  meaning: string[];
}

export default function NewReadingPage() {
  const searchParams = useSearchParams();
  const [cards, setCards] = useState<CardData[]>([]);
  const [interpretation, setInterpretation] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const cardsParam = searchParams.get('cards');
    if (cardsParam) {
      try {
        const decodedCards = JSON.parse(decodeURIComponent(cardsParam));
        setCards(decodedCards);
        generateInterpretation(decodedCards);
      } catch (error) {
        console.error('解析卡片數據時出錯:', error);
      }
    }
    setIsLoading(false);
  }, [searchParams]);

  const generateInterpretation = async (cards: CardData[]) => {
    try {
      setIsGenerating(true);
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cards }),
      });

      if (!response.ok) {
        throw new Error('生成解讀失敗');
      }

      const data = await response.json();
      setInterpretation(data.interpretation);
    } catch (error) {
      console.error('生成解讀時出錯:', error);
      setInterpretation('生成解讀時發生錯誤，請稍後再試。');
    } finally {
      setIsGenerating(false);
    }
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareToTwitter = () => {
    const text = `我的塔羅牌解讀結果：${cards.map(card => `${card.position} - ${card.name}`).join('、')}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareToLine = () => {
    const text = `我的塔羅牌解讀結果：${cards.map(card => `${card.position} - ${card.name}`).join('、')}\n${window.location.href}`;
    const url = `https://line.me/R/share?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">載入中...</div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">找不到解讀結果</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Heading level={1} variant="gradient" className="mb-4">
            塔羅牌
          </Heading>
          <p className="text-xl text-white/80">
            探索塔羅牌的智慧，獲得生活的指引
          </p>
        </div>

        {/* 卡片展示區域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 w-full">
                <CardHeader>
                  <CardTitle className="text-white text-center">
                    {card.position}
                  </CardTitle>
                  <CardDescription className="text-white/80 text-center">
                    {card.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src={card.imageUrl}
                      alt={card.name}
                      fill
                      className={`object-cover ${card.isReversed ? 'transform -rotate-180' : ''}`}
                    />
                  </div>
                  <div className="mt-4 text-white">
                    <p className="text-sm">
                      {card.isReversed ? '逆位' : '正位'}含義：
                      {card.meaning.join('、')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 整體解讀 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">整體解讀</h2>
          {isGenerating ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              <span className="ml-3 text-white">正在生成解讀...</span>
            </div>
          ) : interpretation ? (
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: interpretation }}
            />
          ) : (
            <p className="text-white/80">無法生成解讀</p>
          )}
        </div>

        {/* 分享按鈕 */}
        {/* <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={shareToFacebook}
            className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#1877F2]/90 transition-colors"
          >
            <FaFacebook className="text-xl" />
            <span>分享到 Facebook</span>
          </button>
          <button
            onClick={shareToTwitter}
            className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1DA1F2]/90 transition-colors"
          >
            <FaTwitter className="text-xl" />
            <span>分享到 Twitter</span>
          </button>
          <button
            onClick={shareToLine}
            className="flex items-center gap-2 px-6 py-3 bg-[#00B900] text-white rounded-lg hover:bg-[#00B900]/90 transition-colors"
          >
            <SiLine className="text-xl" />
            <span>分享到 Line</span>
          </button>
        </div> */}
      </div>
    </div>
  );
} 