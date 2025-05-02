import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // 驗證輸入
    if (!email || !password) {
      return NextResponse.json(
        { error: '請提供電子郵件和密碼' },
        { status: 400 }
      )
    }

    // 檢查電子郵件是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: '此電子郵件已被註冊' },
        { status: 400 }
      )
    }

    // 加密密碼
    const hashedPassword = await bcrypt.hash(password, 10)

    // 創建新用戶
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    // 移除密碼後回傳用戶資料
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error('註冊錯誤:', error)
    return NextResponse.json(
      { error: '註冊過程中發生錯誤' },
      { status: 500 }
    )
  }
} 