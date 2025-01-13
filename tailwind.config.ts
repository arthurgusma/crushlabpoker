import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      main: {
        'dark-green': '#19372d',
        'light-green': '#1E4135',
        gold: '#E2C28D',
        red: '#BF1A2F',
        champagne: '#F3E5CE',
        brown: '#945F2C',
        green: '#118B50',
      },
      chart: {
        red: '#d00000',
        green: '#70e000',
        blue: '#1a759f',
        yellow: '#eeef20',
        orange: '#ff7f00',
        purple: '#a020f0',
        'light-blue': '#80C4E9',
        brown: '#997C70',
        default: '#7a918d',
      },
    },
  },
  plugins: [],
}
export default config
