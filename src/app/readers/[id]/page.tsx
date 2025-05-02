'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { zhTW } from 'date-fns/locale'

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

interface TimeSlot {
  id: string
  startTime: string
  endTime: string
  isAvailable: boolean
}

export default function ReaderDetailPage() {
  const { id } = useParams()
  const [reader, setReader] = useState<Reader | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [bookingNote, setBookingNote] = useState('')

  useEffect(() => {
    fetchReader()
    fetchTimeSlots()
  }, [id, selectedDate])

  const fetchReader = async () => {
    try {
      const response = await fetch(`/api/readers/${id}`)
      const data = await response.json()
      setReader(data)
    } catch (error) {
      console.error('獲取解牌師資料錯誤:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchTimeSlots = async () => {
    try {
      const response = await fetch(
        `/api/readers/${id}/time-slots?date=${format(selectedDate, 'yyyy-MM-dd')}`
      )
      const data = await response.json()
      setTimeSlots(data)
    } catch (error) {
      console.error('獲取時間段錯誤:', error)
    }
  }

  const handleBooking = async () => {
    if (!selectedSlot) return

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          readerId: id,
          timeSlotId: selectedSlot,
          note: bookingNote,
        }),
      })

      if (!response.ok) {
        throw new Error('預約失敗')
      }

      // 重新獲取時間段
      await fetchTimeSlots()
      setSelectedSlot(null)
      setBookingNote('')
      alert('預約成功！')
    } catch (error) {
      console.error('預約錯誤:', error)
      alert('預約失敗，請稍後再試')
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

  if (!reader) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-xl">找不到此解牌師</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* 解牌師資訊 */}
        <div className="md:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src={reader.avatar || '/default-avatar.png'}
                alt={reader.name}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">{reader.name}</h1>
            <p className="text-gray-400 text-center mb-4">
              {reader.readerProfile.experience} 年經驗
            </p>
            <div className="flex justify-center items-center mb-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{reader.readerProfile.rating.toFixed(1)}</span>
              <span className="text-gray-400 ml-2">
                NT$ {reader.readerProfile.price}/小時
              </span>
            </div>
            <p className="text-gray-300 mb-4">{reader.bio}</p>
            <div className="flex flex-wrap gap-2">
              {reader.readerProfile.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 預約表單 */}
        <div className="md:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">預約諮詢</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">選擇日期</label>
              <input
                type="date"
                value={format(selectedDate, 'yyyy-MM-dd')}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                min={format(new Date(), 'yyyy-MM-dd')}
                className="w-full bg-gray-700 rounded-lg p-3"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">選擇時間</label>
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot.id)}
                    disabled={!slot.isAvailable}
                    className={`
                      p-3 rounded-lg text-center
                      ${selectedSlot === slot.id
                        ? 'bg-purple-600 text-white'
                        : slot.isAvailable
                          ? 'bg-gray-700 hover:bg-gray-600 text-white'
                          : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      }
                    `}
                  >
                    {format(new Date(slot.startTime), 'HH:mm', { locale: zhTW })}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">諮詢備註</label>
              <textarea
                value={bookingNote}
                onChange={(e) => setBookingNote(e.target.value)}
                placeholder="請描述您想要諮詢的問題..."
                className="w-full h-32 bg-gray-700 rounded-lg p-3"
              />
            </div>

            <button
              onClick={handleBooking}
              disabled={!selectedSlot}
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-medium disabled:opacity-50"
            >
              確認預約
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 