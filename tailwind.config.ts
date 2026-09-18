import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': {
          DEFAULT: '#0B1B30',
          light: '#132B4C',
          dark: '#06101E',
        },
        'brand-black': '#000000',
        'brand-accent': {
          DEFAULT: '#C0272D',
          hover: '#A01F25',
          light: '#FBEBEB',
        },
        'brand-gray': {
          DEFAULT: '#E5E7EB',
          light: '#F8FAFC',
          surface: '#F3F4F6',
          dark: '#9CA3AF',
        },
        'brand-dark': '#111111',
        'brand-white': '#FFFFFF',
        'brand-whatsapp': {
          DEFAULT: '#25D366',
          hover: '#1EBE5D',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
