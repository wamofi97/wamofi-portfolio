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
        'heading': ['ClashDisplay-Medium', 'sans-serif'],
        'body': ['Satoshi-Variable', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

