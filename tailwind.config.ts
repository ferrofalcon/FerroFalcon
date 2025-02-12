import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        SharpMedium20: [
          "sharp-grotesk_medium_20",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        SharpSemiBold15: [
          "sharp-grotesk_semibold_15",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        SharpSemiBoldItalic15: [
          "sharp-grotesk_semibold_italic_15",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        SharpBook20: [
          "sharp-grotesk_book_20",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
