/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['ClashDisplay-Semibold', 'sans-serif'],
        'body': ['JetBrainsMono-Variable', 'monospace']
      }
    },
  },
  plugins: [],
}

