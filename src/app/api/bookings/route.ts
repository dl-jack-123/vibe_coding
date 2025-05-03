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

    const { readerId, timeSlotId, note } = await request.json()

    // 檢查時間段是否可用
    const timeSlot = await prisma.timeSlot.findFirst({
      where: {
        id: timeSlotId,
        readerId,
      },
      include: {
        bookings: {
          where: {
            status: {
              in: ['pending', 'confirmed'],
            },
          },
        },
      },
    })

    if (!timeSlot || timeSlot.bookings.length > 0) {
      return NextResponse.json(
        { error: '該時間段已被預約' },
        { status: 400 }
      )
    }

    // 創建預約
    const booking = await prisma.booking.create({
      data: {
        userId: decoded.userId,
        readerId,
        timeSlotId,
        note,
      },
    })

    return NextResponse.json(booking)
  } catch (error) {
    console.error('創建預約錯誤:', error)
    return NextResponse.json(
      { error: '創建預約時發生錯誤' },
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

    // 獲取用戶的預約記錄
    const bookings = await prisma.booking.findMany({
      where: {
        userId: decoded.userId,
      },
      include: {
        reader: {
          select: {
            name: true,
            avatar: true,
          },
        },
        timeSlot: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('獲取預約記錄錯誤:', error)
    return NextResponse.json(
      { error: '獲取預約記錄時發生錯誤' },
      { status: 500 }
    )
  }
} 