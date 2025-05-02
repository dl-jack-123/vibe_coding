import { performReading, SpreadType } from '../utils/tarotReading';

// 範例1：三張牌陣解讀
export const threeCardExample = () => {
  console.log('=== 三張牌陣解讀 ===');
  const reading = performReading('three-cards');
  console.log(reading);
  return reading;
};

// 範例2：凱爾特十字陣解讀
export const celticCrossExample = () => {
  console.log('=== 凱爾特十字陣解讀 ===');
  const reading = performReading('celtic-cross');
  console.log(reading);
  return reading;
};

// 範例3：自定義解讀流程
export const customReadingExample = (spreadType: SpreadType = 'three-cards') => {
  console.log('=== 自定義解讀流程 ===');
  const reading = performReading(spreadType);
  console.log('解讀結果：');
  console.log(reading);
  return reading;
};

// 在開發環境中執行範例
if (process.env.NODE_ENV === 'development') {
  console.log('開始塔羅牌解讀示範...\n');
  
  // 執行三張牌陣範例
  threeCardExample();
  
  console.log('\n-------------------\n');
  
  // 執行凱爾特十字陣範例
  celticCrossExample();
  
  console.log('\n-------------------\n');
  
  // 執行自定義範例
  customReadingExample();
} 