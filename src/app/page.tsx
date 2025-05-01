import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          探索命運的奧秘
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          通過古老的塔羅智慧，找到生命中的答案
        </p>
        <Link
          href="/reading"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          開始占卜
        </Link>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">專業解讀</h3>
          <p className="text-gray-300">
            深入淺出的牌義解析，幫助你理解生命中的重要訊息
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">多種牌陣</h3>
          <p className="text-gray-300">
            提供各種專業牌陣，針對不同問題給予最適合的指引
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">即時占卜</h3>
          <p className="text-gray-300">
            隨時隨地，讓你能夠獲得塔羅牌的智慧指引
          </p>
        </div>
      </section>
    </div>
  )
}
