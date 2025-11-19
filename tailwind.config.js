/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#D4AF37', light: '#F4D03F', dark: '#C5941D' },
        charcoal: '#0a0a0a',
        obsidian: '#050505',
        muted: '#A0A0A0',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gold-text': 'linear-gradient(90deg, #C5941D 0%, #D4AF37 35%, #F4D03F 65%, #D4AF37 100%)',
        'gold-border': 'linear-gradient(180deg, rgba(213,175,55,0.3) 0%, rgba(245,208,63,0.5) 50%, rgba(197,148,29,0.2) 100%)',
        'gold-sheen': 'linear-gradient(135deg, rgba(197,148,29,0.15), rgba(244,208,63,0.08))',
      },
      boxShadow: {
        'gold-glow': '0 0 24px 2px rgba(212,175,55,0.35)',
        'gold-inner': 'inset 0 0 20px rgba(212,175,55,0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        gentle: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeOut: { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        slideIn: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } },
        slideUp: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
