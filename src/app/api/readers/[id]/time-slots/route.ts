import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json(
        { error: '請提供日期' },
        { status: 400 }
      )
    }

    // 獲取該解牌師當天的所有時間段
    const timeSlots = await prisma.timeSlot.findMany({
      where: {
        readerId: params.id,
        startTime: {
          gte: new Date(date),
          lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
        },
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

    // 處理時間段的可用性
    const processedTimeSlots = timeSlots.map(slot => ({
      id: slot.id,
      startTime: slot.startTime,
      endTime: slot.endTime,
      isAvailable: 0,
    }))

    return NextResponse.json(processedTimeSlots)
  } catch (error) {
    console.error('獲取時間段錯誤:', error)
    return NextResponse.json(
      { error: '獲取時間段時發生錯誤' },
      { status: 500 }
    )
  }
} 