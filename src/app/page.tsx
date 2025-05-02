'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartReading = () => {
    setIsLoading(true);
    // 模擬載入效果
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Heading level={1} variant="gradient" className="mb-4">
            塔羅牌
          </Heading>
          <p className="text-xl text-white/80">
            探索塔羅牌的智慧，獲得生活的指引
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">三張牌陣</CardTitle>
              <CardDescription className="text-white/80">
                過去、現在、未來的經典解讀
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tarot?spread=three-cards">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-white rounded-full" />
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">凱爾特十字陣</CardTitle>
              <CardDescription className="text-white/80">
                深入分析問題的複雜牌陣
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tarot?spread=celtic-cross">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-white rounded-full" />
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">塔羅牌百科</CardTitle>
              <CardDescription className="text-white/80">
                了解每張牌的含義和象徵
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tarot-encyclopedia">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-white rounded-full" />
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
