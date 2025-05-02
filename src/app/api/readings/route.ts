import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { verifyToken } from '@/lib/auth'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    // 驗證 token
    const token = request.headers.get('Authorization')?.split(' ')[1]
    if (!token) {
      return NextResponse.json(
        { error: '未提供認證令牌' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        { error: '無效的認證令牌' },
        { status: 401 }
      )
    }

    const { question, spreadType, cards } = await request.json()

    // 驗證輸入
    if (!question || !spreadType || !cards || !Array.isArray(cards)) {
      return NextResponse.json(
        { error: '請提供完整的占卜資訊' },
        { status: 400 }
      )
    }

    // 創建占卜記錄
    const reading = await prisma.reading.create({
      data: {
        userId: decoded.userId,
        question,
        spreadType,
        cards: {
          create: cards.map((card: any, index: number) => ({
            cardId: card.id,
            position: index,
            isReversed: card.isReversed,
          })),
        },
      },
      include: {
        cards: true,
      },
    })

    return NextResponse.json(reading)
  } catch (error) {
    console.error('保存占卜記錄錯誤:', error)
    return NextResponse.json(
      { error: '保存占卜記錄時發生錯誤' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    // 驗證 token
    const token = request.headers.get('Authorization')?.split(' ')[1]
    if (!token) {
      return NextResponse.json(
        { error: '未提供認證令牌' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        { error: '無效的認證令牌' },
        { status: 401 }
      )
    }

    // 獲取用戶的占卜記錄
    const readings = await prisma.reading.findMany({
      where: {
        userId: decoded.userId,
      },
      include: {
        cards: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(readings)
  } catch (error) {
    console.error('獲取占卜記錄錯誤:', error)
    return NextResponse.json(
      { error: '獲取占卜記錄時發生錯誤' },
      { status: 500 }
    )
  }
} 