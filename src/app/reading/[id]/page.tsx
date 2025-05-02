'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'

interface ReadingResult {
  id: string
  cards: {
    position: string
    name: string
    imageUrl: string
    isReversed: boolean
    upright: string[]
    reversed: string[]
    description: string
  }[]
  summary: string
  timestamp: string
}

export default function ReadingResultPage() {
  const { id } = useParams()
  const [reading, setReading] = useState<ReadingResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 這裡應該從 API 或本地存儲獲取解讀結果
    // 暫時使用模擬數據
    const mockReading: ReadingResult = {
      id: id as string,
      cards: [
        {
          position: '過去',
          name: '正義',
          imageUrl: '/images/tarot/major-arcana/RWS_Tarot_11_Justice.jpg',
          isReversed: true,
          upright: ['公平', '正義', '平衡', '因果'],
          reversed: ['不公', '偏見', '缺乏責任', '逃避'],
          description: '代表平衡、公平和因果'
        },
        {
          position: '現在',
          name: '權杖八',
          imageUrl: '/images/tarot/minor-arcana/wands/Wands08.jpg',
          isReversed: false,
          upright: ['快速行動', '進展', '消息', '變化'],
          reversed: ['延遲', '阻礙', '混亂', '缺乏方向'],
          description: '代表快速行動和進展'
        },
        {
          position: '未來',
          name: '寶劍二',
          imageUrl: '/images/tarot/minor-arcana/swords/Swords02.jpg',
          isReversed: true,
          upright: ['選擇', '平衡', '決策', '中立'],
          reversed: ['優柔寡斷', '逃避', '混亂', '衝突'],
          description: '代表選擇和平衡'
        }
      ],
      summary: '從過去的經歷中，你可能經歷了一些不公平的對待，這讓你感到困惑和不安。現在，你正處於一個需要快速行動的時期，機會稍縱即逝。未來可能會面臨一些困難的選擇，需要你勇敢面對。',
      timestamp: new Date().toISOString()
    }

    setReading(mockReading)
    setIsLoading(false)
  }, [id])

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    window.open(url, '_blank')
  }

  const shareToTwitter = () => {
    const text = `我的塔羅牌解讀結果：${reading?.summary.substring(0, 100)}...`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`
    window.open(url, '_blank')
  }

  const shareToLine = () => {
    const text = `我的塔羅牌解讀結果：${reading?.summary}\n${window.location.href}`
    const url = `https://line.me/R/share?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">載入中...</div>
      </div>
    )
  }

  if (!reading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">找不到解讀結果</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Heading level={1} variant="gradient" className="mb-4">
            塔羅牌解讀結果(範例)
          </Heading>
          <p className="text-xl text-white/80 mb-4">
            探索塔羅牌的智慧與指引
          </p>
        </div>

        {/* 卡片展示區域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reading.cards.map((card, index) => (
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
                      src={card.imageUrl}
                      alt={card.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold mb-2">正位含義：</h3>
                    <p className="text-sm text-white/80 mb-4">
                      {card.upright.join('、')}
                    </p>
                    <h3 className="font-bold mb-2">逆位含義：</h3>
                    <p className="text-sm text-white/80">
                      {card.reversed.join('、')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 整體解讀 */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
          <CardHeader>
            <CardTitle className="text-white">整體解讀</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white leading-relaxed">
              {reading.summary}
            </p>
          </CardContent>
        </Card>

        {/* 社群分享按鈕 - 暫時註解
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">分享解讀結果</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => shareOnFacebook(readingId)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              分享到 Facebook
            </button>
            <button
              onClick={() => shareOnTwitter(readingId)}
              className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
            >
              分享到 Twitter
            </button>
            <button
              onClick={() => shareOnLine(readingId)}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              分享到 Line
            </button>
          </div>
        </div>
        */}

        {/* 返回按鈕 */}
        <div className="text-center">
          <Link
            href="/tarot"
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            返回塔羅牌頁面
          </Link>
        </div>
      </div>
    </div>
  )
} 