import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const readers = await prisma.user.findMany({
      where: {
        isReader: true,
      },
      include: {
        readerProfile: true,
      },
    })

    return NextResponse.json(readers)
  } catch (error) {
    console.error('獲取解牌師列表錯誤:', error)
    return NextResponse.json(
      { error: '獲取解牌師列表時發生錯誤' },
      { status: 500 }
    )
  }
} 