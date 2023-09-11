/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': "#ffffff",
      'black': "#000000",
      'purple': "#8E33FF",
      'purple-100': "#F1EFFF",
      'purple-200': "#D9EFF6",
      'gray-30': "#C4CDD5",
      'gray-40': "#F4F6F8",
      'gray-50': "#DFE3E8",
      'gray-100': "#637381",
      'gray-200': "#79747E",
      'gray-300': "#49454F",
      'gray-400': "#A0A0A0",
      'gray-500': "#919EAB",
      'gray-600': "#79767D",
      'gray-700': "#F7F7F5",
      'warning-light': "#FFD666"
    },
    fontFamily: {
      primary: ['Public Sans', 'sans-serif'],
      secondary: ['Roboto', 'sans-serif']
    },
    letterSpacing: {
      normal: '0',
      wide: "0.25px",
      wider: "0.5px",
    },
    lineHeight: {
      '22': '22px',
    },
  },
  plugins: [],
}
