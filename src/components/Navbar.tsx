'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A2E]/80 backdrop-blur-md border-b border-[#2D1B69]/20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#F6C458] to-[#4B2D9E] bg-clip-text text-transparent">
                塔羅占卜
              </span>
              <span className="text-xs text-gray-400 mt-1">探索命運的智慧</span>
            </div>
          </Link>

          {/* 導航連結 */}
          <div className="hidden md:flex items-center gap-[30px]">
            <Link 
              href="/" 
              className={`text-lg font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-[#F6C458]' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              首頁
            </Link>
            <Link 
              href="/reading/select" 
              className={`text-lg font-medium transition-colors duration-200 ${
                pathname.startsWith('/reading') 
                  ? 'text-[#F6C458]' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              開始占卜
            </Link>
            <Link 
              href="/about" 
              className={`text-lg font-medium transition-colors duration-200 ${
                pathname === '/about' 
                  ? 'text-[#F6C458]' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              關於我們
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 