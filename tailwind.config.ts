import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': {
          DEFAULT: '#0F0F11',
          light: '#18181B',
          dark: '#0A0A0B',
          surface: '#141416',
        },
        'brand-primary': {
          DEFAULT: '#0F0F11',
          light: '#18181B',
          dark: '#0A0A0B',
          surface: '#141416',
        },
        'brand-navy': {
          DEFAULT: '#0B1B30',
          light: '#132B4C',
          dark: '#06101E',
        },
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
        'brand-dark': '#0F0F11',
        'brand-border': '#27272A',
        'brand-white': '#FFFFFF',
        'brand-whatsapp': {
          DEFAULT: '#25D366',
          hover: '#1EBE5D',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

