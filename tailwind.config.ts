import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a3c8ed",
          secondary: "#9fdcef",
          accent: "#00ffff",
          neutral: "#51a2ff",
          "base-100": "#e4f6fe",
          info: "#73d4ff",
          success: "#33d399",
          warning: "#fdc800",
          error: "#f33a6a",
        },
      },
      {
        mytheme2: {
          primary: "#8c6d7d",
          secondary: "#9c828f",
          accent: "#ad97a2",
          neutral: "#7b586a",
          "base-100": "#efeaec",
          info: "#73d4ff",
          success: "#58d158",
          warning: "#d1a358",
          error: "#d15858",
        },
      },
      "valentine",
      "dark",
      "light",
    ],

    // themes: ["valentine", "light", "coffee", "dark", "dim", "drakula"],
    // synthwave", "black", "luxury", "pastel", "cyberpunk",
  },
} satisfies Config;
