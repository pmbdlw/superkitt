import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        heading: 'rgb(var(--color-heading) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        subtle: 'rgb(var(--color-subtle) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'card-bg': 'rgb(var(--color-card-bg) / <alpha-value>)',
        gold: {
          DEFAULT: 'rgb(var(--color-gold) / <alpha-value>)',
          light: 'rgb(var(--color-gold-light) / <alpha-value>)',
          dark: 'rgb(var(--color-gold-dark) / <alpha-value>)',
          muted: 'rgb(var(--color-gold) / 0.15)',
        },
        aqua: {
          DEFAULT: 'rgb(var(--color-aqua) / <alpha-value>)',
          muted: 'rgb(var(--color-aqua) / 0.15)',
        },
        butter: {
          DEFAULT: 'rgb(var(--color-butter) / <alpha-value>)',
          muted: 'rgb(var(--color-butter) / 0.15)',
        },
        espresso: 'rgb(var(--color-espresso) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Noto Sans SC', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      letterSpacing: {
        widest: '0.125em',
        label: '0.15em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scanner-sweep': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'scanner-sweep': 'scanner-sweep 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
