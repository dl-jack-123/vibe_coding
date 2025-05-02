'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TarotCardProps {
  imageUrl: string
  title: string
  meaning: string[]
  isReversed?: boolean
  className?: string
}

const TarotCard = ({
  imageUrl,
  title,
  meaning,
  isReversed = false,
  className,
}: TarotCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className={cn('relative w-64 h-96 cursor-pointer', className)}
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 牌背 */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-white rounded-full" />
          </div>
        </motion.div>

        {/* 牌面 */}
        <motion.div
          className="absolute w-full h-full rounded-lg shadow-xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="relative w-full h-3/4">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white text-lg font-bold mb-2">
              {title}
              <span className="ml-2 text-sm text-purple-300">
                {isReversed ? '(逆位)' : '(正位)'}
              </span>
            </h3>
            
            <div className="space-y-1">
              {meaning.map((item, index) => (
                <p
                  key={index}
                  className="text-white text-sm opacity-90"
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default TarotCard 