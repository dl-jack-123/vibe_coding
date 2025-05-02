import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
        'rotate-y-0': 'rotateY(0)',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
}

export default config 