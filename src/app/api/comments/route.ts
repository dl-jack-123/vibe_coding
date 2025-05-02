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

    const { readingId, content } = await request.json()

    // 檢查占卜記錄是否存在且為公開
    const reading = await prisma.reading.findFirst({
      where: {
        id: readingId,
        isPublic: true,
      },
    })

    if (!reading) {
      return NextResponse.json(
        { error: '找不到此占卜記錄或該記錄未公開' },
        { status: 404 }
      )
    }

    // 創建評論
    const comment = await prisma.comment.create({
      data: {
        content,
        readingId,
        userId: decoded.userId,
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    })

    return NextResponse.json(comment)
  } catch (error) {
    console.error('創建評論錯誤:', error)
    return NextResponse.json(
      { error: '創建評論時發生錯誤' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const readingId = searchParams.get('readingId')

    if (!readingId) {
      return NextResponse.json(
        { error: '請提供占卜記錄 ID' },
        { status: 400 }
      )
    }

    // 獲取評論列表
    const comments = await prisma.comment.findMany({
      where: {
        readingId,
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(comments)
  } catch (error) {
    console.error('獲取評論列表錯誤:', error)
    return NextResponse.json(
      { error: '獲取評論列表時發生錯誤' },
      { status: 500 }
    )
  }
} 