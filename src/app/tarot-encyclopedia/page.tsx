'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';

interface TarotCard {
  name: string;
  description: string;
  upright: string[];
  reversed: string[];
  nameEn: string;
  image: string;
}

interface MinorArcana {
  [key: string]: TarotCard[];
}

interface TarotData {
  major: TarotCard[];
  minor: MinorArcana;
}

export default function TarotEncyclopediaPage() {
  const [selectedCategory, setSelectedCategory] = useState<'major' | 'minor'>('major');
  const [tarotData, setTarotData] = useState<TarotData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTarotData = async () => {
      try {
        const response = await fetch('/api/tarot/cards');
        if (!response.ok) {
          throw new Error('獲取塔羅牌數據失敗');
        }
        const data = await response.json();
        
        // 驗證數據結構
        if (!data.major || !Array.isArray(data.major) || 
            !data.minor || typeof data.minor !== 'object') {
          throw new Error('塔羅牌數據格式不正確');
        }
        
        setTarotData(data);
      } catch (error) {
        console.error('獲取塔羅牌數據時出錯:', error);
        setError(error instanceof Error ? error.message : '發生未知錯誤');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTarotData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">載入中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">{error}</div>
      </div>
    );
  }

  if (!tarotData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">無法載入塔羅牌數據</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Heading level={1} variant="gradient" className="mb-4">
            塔羅牌百科
          </Heading>
          <p className="text-xl text-white/80 mb-4">
            探索塔羅牌的奧秘與智慧
          </p>
          <Link
            href="/tarot"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            返回塔羅牌頁面
          </Link>
        </div>

        {/* 分類選擇 */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('major')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              selectedCategory === 'major'
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            大阿爾卡納
          </button>
          <button
            onClick={() => setSelectedCategory('minor')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              selectedCategory === 'minor'
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            小阿爾卡納
          </button>
        </div>

        {/* 卡片展示區域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory === 'major' ? (
            tarotData.major?.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-center">
                      {card.name}
                    </CardTitle>
                    <CardDescription className="text-white/80 text-center">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-4">
                      <Image
                        src={card.image}
                        alt={card.name}
                        width={300}
                        height={500}
                        className="mx-auto"
                      />
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold mb-2">正位含義：</h3>
                      <p className="text-sm text-white/80 mb-4">
                        {card.upright?.join('、') || '無資料'}
                      </p>
                      <h3 className="font-bold mb-2">逆位含義：</h3>
                      <p className="text-sm text-white/80">
                        {card.reversed?.join('、') || '無資料'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            Object.entries(tarotData.minor || {}).map(([suit, cards]) => (
              <div key={suit} className="col-span-full">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  {suit === 'wands' ? '權杖' : 
                   suit === 'cups' ? '聖杯' : 
                   suit === 'swords' ? '寶劍' : '錢幣'}牌組
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cards?.map((card, index) => (
                    <motion.div
                      key={card.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardHeader>
                          <CardTitle className="text-white text-center">
                            {card.name}
                          </CardTitle>
                          <CardDescription className="text-white/80 text-center">
                            {card.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-4">
                            <Image
                              src={card.image}
                              alt={card.name}
                              width={300}
                              height={500}
                              className="mx-auto"
                            />
                          </div>
                          <div className="text-white">
                            <h3 className="font-bold mb-2">正位含義：</h3>
                            <p className="text-sm text-white/80 mb-4">
                              {card.upright?.join('、') || '無資料'}
                            </p>
                            <h3 className="font-bold mb-2">逆位含義：</h3>
                            <p className="text-sm text-white/80">
                              {card.reversed?.join('、') || '無資料'}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 