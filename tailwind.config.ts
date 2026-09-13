import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        zinc: {
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46'
        }
      }
    }
  },
  plugins: [],
} satisfies Config
