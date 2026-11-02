/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spider: {
          pink: '#FF0055',
          magenta: '#E11D48',
          cyan: '#00F0FF',
          teal: '#06B6D4',
          purple: '#7928CA',
          yellow: '#FFDE00',
          ink: '#0B0E14',
          dark: '#111827',
          paper: '#FAFCFF',
        },
        genshin: {
          gold: '#F59E0B',
          anemo: '#14B8A6',
          electro: '#8B5CF6',
          pyro: '#F97316',
          sky: '#38BDF8',
          cloud: '#F0F9FF',
        },
        pop: {
          yellow: '#FFE600',
          orange: '#FF5722',
          red: '#FF3B30',
          cyan: '#00F0FF',
          pink: '#FF2E93',
          black: '#000000',
        }
      },
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        comic: ['"Bangers"', 'cursive', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        myth: ['"Cinzel Decorative"', 'Cinzel', 'serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        'super-wide': '0.3em',
      },
      boxShadow: {
        'spider-sm': '2.5px 2.5px 0px 0px #0B0E14',
        'spider': '4px 4px 0px 0px #0B0E14',
        'spider-md': '6px 6px 0px 0px #0B0E14',
        'spider-lg': '8px 8px 0px 0px #0B0E14',
        'spider-glitch': '3px 3px 0px 0px #00F0FF, -3px -3px 0px 0px #FF0055',
        'spider-pink': '5px 5px 0px 0px #FF0055',
        'spider-cyan': '5px 5px 0px 0px #00F0FF',
        'spider-gold': '5px 5px 0px 0px #F59E0B',
        'comic': '4px 4px 0px 0px #000000',
        'comic-sm': '2px 2px 0px 0px #000000',
        'comic-md': '6px 6px 0px 0px #000000',
        'comic-lg': '8px 8px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}
