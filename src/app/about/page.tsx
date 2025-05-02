'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-12">
        {/* 頁面標題 */}
        <div className="text-center mb-12">
          <Heading level={1} variant="gradient" className="mb-4">
            關於我們
          </Heading>
          <p className="text-xl text-white/80">
            探索塔羅牌的智慧，為您的生活帶來指引
          </p>
        </div>

        {/* 使命與願景 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">我們的使命</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  我們致力於提供專業、準確的塔羅牌解讀服務，幫助人們在人生的各個階段找到方向與指引。透過塔羅牌的智慧，我們希望能夠為每一位尋求答案的人帶來啟發與力量。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">我們的願景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  成為最值得信賴的塔羅牌解讀平台，讓每個人都能輕鬆接觸塔羅牌的智慧。我們希望透過專業的解讀，幫助人們更好地理解自己，做出更明智的決定，活出更精彩的人生。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 聯繫我們 */}
        <div className="text-center">
          <Heading level={2} variant="gradient" className="mb-4">
            聯繫我們
          </Heading>
          <p className="text-white/80 mb-6">
            如果您有任何問題或需要專業的塔羅牌解讀服務，歡迎隨時聯繫我們。
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="px-6 py-3 bg-gray-600 text-white rounded-lg cursor-not-allowed opacity-50"
              disabled
            >
              聯絡表單
            </button>
            <Link
              href="/tarot"
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              開始占卜
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 