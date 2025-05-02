import { NextResponse } from 'next/server';
import { performReading, SpreadType } from '../../../utils/tarotReading';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const spreadType = searchParams.get('spread') as SpreadType || 'three-cards';

  try {
    const reading = performReading(spreadType);
    return NextResponse.json({ reading });
  } catch (error) {
    return NextResponse.json(
      { error: '解讀過程中發生錯誤' },
      { status: 500 }
    );
  }
} 