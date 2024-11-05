/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['JetBrainsMono-Variable', 'monospace'],
        'heading': ['ClashDisplay-Bold'],
        'body': ['Satoshi-Variable']
      }
    },
  },
  plugins: [],
}

