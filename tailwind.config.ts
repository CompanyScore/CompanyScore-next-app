import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          50: '#FFF2DF',
          300: '#FDB24A',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['valentine', 'dark', 'light'],

    // themes: ["valentine", "light", "coffee", "dark", "dim", "drakula"],
    // synthwave", "black", "luxury", "pastel", "cyberpunk",
  },
} satisfies Config;
