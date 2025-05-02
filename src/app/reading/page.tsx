'use client'

import { useState, useEffect } from 'react'
import TarotCard from '@/components/TarotCard'
import { getRandomCards, type TarotCard as TarotCardType } from '@/data/tarotCards'

const spreads = [
  {
    id: 'single',
    name: '單張牌陣',
    description: '快速回答是/否問題',
    cardCount: 1,
  },
  {
    id: 'past-present-future',
    name: '過去現在未來',
    description: '了解情況的發展脈絡',
    cardCount: 3,
  },
  {
    id: 'celtic-cross',
    name: '凱爾特十字',
    description: '深入分析複雜問題',
    cardCount: 10,
  },
]

export default function ReadingPage() {
  const [selectedSpread, setSelectedSpread] = useState('')
  const [question, setQuestion] = useState('')
  const [step, setStep] = useState<'select' | 'question' | 'drawing' | 'result'>('select')
  const [cards, setCards] = useState<TarotCardType[]>([])
  const [revealedCards, setRevealedCards] = useState<boolean[]>([])

  useEffect(() => {
    if (step === 'drawing') {
      const spread = spreads.find(s => s.id === selectedSpread)
      if (spread) {
        const drawnCards = getRandomCards(spread.cardCount)
        setCards(drawnCards)
        setRevealedCards(new Array(spread.cardCount).fill(false))
        
        // 自動翻牌動畫
        drawnCards.forEach((_, index) => {
          setTimeout(() => {
            setRevealedCards(prev => {
              const next = [...prev]
              next[index] = true
              return next
            })
          }, index * 1000 + 1000)
        })

        // 完成後轉到結果頁面
        setTimeout(() => {
          setStep('result')
        }, drawnCards.length * 1000 + 2000)
      }
    }
  }, [step, selectedSpread])

  const handleSpreadSelect = (spreadId: string) => {
    setSelectedSpread(spreadId)
    setStep('question')
  }

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('drawing')
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {step === 'select' && (
        <div>
          <h1 className="text-3xl font-bold mb-8 text-center">選擇牌陣</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {spreads.map((spread) => (
              <button
                key={spread.id}
                className="bg-gray-800 p-6 rounded-lg text-left hover:bg-gray-700 transition-colors"
                onClick={() => handleSpreadSelect(spread.id)}
              >
                <h3 className="text-xl font-bold mb-2">{spread.name}</h3>
                <p className="text-gray-300 mb-4">{spread.description}</p>
                <span className="text-sm text-purple-400">
                  {spread.cardCount} 張牌
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'question' && (
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">詢問問題</h1>
          <form onSubmit={handleQuestionSubmit}>
            <textarea
              className="w-full h-32 bg-gray-800 rounded-lg p-4 text-white mb-4"
              placeholder="在此輸入你想要諮詢的問題..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
            <div className="flex justify-between">
              <button
                type="button"
                className="text-gray-400 hover:text-white"
                onClick={() => setStep('select')}
              >
                返回選擇牌陣
              </button>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
              >
                開始抽牌
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 'drawing' && (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">抽牌進行中</h1>
          <p className="text-xl mb-8">請放鬆心情，專注於你的問題</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {cards.map((card, index) => (
              <TarotCard
                key={index}
                card={card}
                isRevealed={revealedCards[index]}
                isReversed={Math.random() > 0.5}
              />
            ))}
          </div>
        </div>
      )}

      {step === 'result' && (
        <div>
          <h1 className="text-3xl font-bold mb-8 text-center">占卜結果</h1>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">你的問題</h2>
            <p className="text-gray-300">{question}</p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap mb-8">
            {cards.map((card, index) => (
              <TarotCard
                key={index}
                card={card}
                isRevealed={true}
                isReversed={Math.random() > 0.5}
              />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                setStep('select')
                setCards([])
                setRevealedCards([])
                setQuestion('')
              }}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
            >
              重新占卜
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 