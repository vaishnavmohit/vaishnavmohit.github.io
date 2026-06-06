/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Kimova brand palette: blue (primary) · orange (accent) · green (secondary)
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebcff',
          400: '#5996ff',
          500: '#2f6fef', // primary blue
          600: '#1d54d4',
          700: '#1841ab',
          800: '#1a398c',
          900: '#1b3473',
          950: '#13224a',
        },
        accent: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcda8',
          300: '#ffaa70',
          400: '#ff7d37',
          500: '#fb5c11', // orange CTA
          600: '#ec4307',
          700: '#c43108',
          800: '#9c280f',
          900: '#7e2410',
          950: '#440f06',
        },
        signal: {
          // green — used sparingly for "live/success/positive" signals
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        ink: {
          DEFAULT: '#0f1729',
          soft: '#334155',
          faint: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter Variable', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
