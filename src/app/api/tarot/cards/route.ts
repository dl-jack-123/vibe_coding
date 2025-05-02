import { NextResponse } from 'next/server';
import { MAJOR_ARCANA, MINOR_ARCANA } from '@/constants/tarot';

export async function GET() {
  try {
    // 合併所有牌組
    const allCards = {
      major: MAJOR_ARCANA,
      minor: MINOR_ARCANA
    };

    return NextResponse.json(allCards);
  } catch (error) {
    console.error('獲取塔羅牌數據時出錯:', error);
    return NextResponse.json(
      { error: '獲取塔羅牌數據時發生錯誤' },
      { status: 500 }
    );
  }
} 