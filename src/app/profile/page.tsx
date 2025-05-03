'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import TarotCard from '@/components/TarotCard'
import { getCardById } from '@/data/tarotCards'

interface Reading {
  id: string
  question: string
  spreadType: string
  createdAt: string
  cards: {
    id: string
    cardId: number
    position: number
    isReversed: boolean
  }[]
}

export default function ProfilePage() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    fetchReadings(token)
  }, [router])

  const fetchReadings = async (token: string) => {
    try {
      const response = await fetch('/api/readings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('獲取占卜記錄失敗')
      }

      const data = await response.json()
      setReadings(data)
    } catch (error) {
      console.error('獲取占卜記錄錯誤:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-xl">載入中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">我的占卜記錄</h1>
      
      {readings.length === 0 ? (
        <p className="text-center text-gray-400">
          還沒有占卜記錄，開始你的第一次占卜吧！
        </p>
      ) : (
        <div className="space-y-8">
          {readings.map((reading) => (
            <div
              key={reading.id}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">
                  {reading.spreadType}
                </h3>
                <p className="text-gray-300 mb-2">{reading.question}</p>
                <p className="text-sm text-gray-400">
                  {new Date(reading.createdAt).toLocaleString('zh-TW')}
                </p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {reading.cards.map((card) => {
                  const tarotCard = getCardById(card.cardId)
                  if (!tarotCard) return null
                  
                  return (
                    <TarotCard
                      key={card.id}
                      imageUrl={tarotCard.imageUrl}
                      title={tarotCard.name}
                      meaning={card.isReversed ? [tarotCard.reversedMeaning] : [tarotCard.uprightMeaning]}
                      isReversed={card.isReversed}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 