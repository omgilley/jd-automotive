/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jd-black': '#0A0A0A',
        'jd-dark': '#111111',
        'jd-card': '#161616',
        'jd-red': '#CC1414',
        'jd-red-bright': '#FF1919',
        'jd-red-dark': '#8B0000',
        'jd-white': '#F5F5F5',
        'jd-silver': '#C0C0C0',
        'jd-gray': '#888888',
        'jd-border': '#222222',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
        'red-gradient': 'linear-gradient(135deg, #CC1414 0%, #8B0000 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-red': 'pulseRed 2s infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(204, 20, 20, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(204, 20, 20, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
