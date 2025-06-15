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
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
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
    themes: [
      {
        light: {
          primary: '#FDB24A',
          'primary-content': '#1f2937',
          secondary: '#ffffff',
          'secondary-content': '#111827',
          neutral: '#000000', // делает фон чёрным
          'neutral-content': '#ffffff', // делает текст белым
          success: '#22c55e',
          error: '#ef4444',
          warning: '#facc15',
          info: '#3b82f6',
        },
      },
    ],
  },
} satisfies Config;
