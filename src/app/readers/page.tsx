'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Reader {
  id: string
  name: string
  avatar: string | null
  bio: string | null
  readerProfile: {
    specialties: string[]
    experience: number
    rating: number
    price: number
    isAvailable: boolean
  }
}

export default function ReadersPage() {
  const [readers, setReaders] = useState<Reader[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReaders()
  }, [])

  const fetchReaders = async () => {
    try {
      const response = await fetch('/api/readers')
      const data = await response.json()
      setReaders(data)
    } catch (error) {
      console.error('獲取解牌師列表錯誤:', error)
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
      <h1 className="text-3xl font-bold mb-8">專業解牌師</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {readers.map((reader) => (
          <div
            key={reader.id}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={reader.avatar || '/default-avatar.png'}
                  alt={reader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{reader.name}</h3>
                <p className="text-sm text-gray-400">
                  {reader.readerProfile.experience} 年經驗
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-4 line-clamp-2">
              {reader.bio || '專業塔羅牌解讀師'}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {reader.readerProfile.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{reader.readerProfile.rating.toFixed(1)}</span>
                <span className="text-gray-400 ml-2">
                  NT$ {reader.readerProfile.price}/小時
                </span>
              </div>
              <Link
                href={`/readers/${reader.id}`}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
              >
                預約諮詢
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 