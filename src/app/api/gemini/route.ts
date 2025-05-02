import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// 初始化 Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { cards } = await request.json();

    // 構建提示詞
    const prompt = `
      請根據以下塔羅牌抽牌結果，生成一個整體的解讀分析：
      ${cards.map((card: any) => `
        ${card.position}：${card.name}（${card.isReversed ? '逆位' : '正位'}）
        含義：${card.meaning.join('、')}
      `).join('\n')}

      請以專業塔羅牌解讀師的角度，分析這些牌之間的關聯，並提供：
      1. 整體運勢分析
      2. 建議和指引
      3. 需要注意的事項

      請用繁體中文回答，語氣要溫和且富有同理心，用 emoji 圖示。
      輸出請用 HTML 格式，包含以下標籤：
      - <h2> 用於標題
      - <p> 用於段落
      - <ul> 和 <li> 用於列表
      - <strong> 用於強調
      - <em> 用於斜體
      - <div class="section"> 用於每個主要部分
      請直接輸出內容，不要包含任何格式標記或代碼塊。
    `;

    // 生成回應
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // 移除特殊字符
    text = text.replace(/```html/g, '')
              .replace(/```/g, '')
              .replace(/<html>/g, '')
              .replace(/<\/html>/g, '')
              .replace(/<body>/g, '')
              .replace(/<\/body>/g, '');

    return NextResponse.json({ interpretation: text });
  } catch (error) {
    console.error('Gemini API 錯誤:', error);
    return NextResponse.json(
      { error: '生成解讀時發生錯誤' },
      { status: 500 }
    );
  }
} 