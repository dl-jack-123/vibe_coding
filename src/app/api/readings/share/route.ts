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

    const { readingId } = await request.json()

    // 檢查占卜記錄是否存在且屬於該用戶
    const reading = await prisma.reading.findFirst({
      where: {
        id: readingId,
        userId: decoded.userId,
      },
    })

    if (!reading) {
      return NextResponse.json(
        { error: '找不到此占卜記錄' },
        { status: 404 }
      )
    }

    // 更新占卜記錄為公開
    await prisma.reading.update({
      where: { id: readingId },
      data: { isPublic: true },
    })

    // 創建分享記錄
    await prisma.sharedReading.create({
      data: {
        readingId,
        userId: decoded.userId,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('分享占卜記錄錯誤:', error)
    return NextResponse.json(
      { error: '分享占卜記錄時發生錯誤' },
      { status: 500 }
    )
  }
} 