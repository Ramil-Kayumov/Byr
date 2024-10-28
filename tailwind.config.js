/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-0': 'linear-gradient(180deg, rgba(6, 37, 48, 0.85) 0%, rgba(19, 115, 150, 0.85) 100%);',
        'gradient-1': 'linear-gradient(180deg, #f7c87c 0%, #ffecce 66.5%, #f7c87c 100%)',
        'gradient-2': 'linear-gradient(180deg, #429aed 0%, #b8dcf6 50%, #7cc4f7 100%)',
        'gradient-3': 'linear-gradient(180deg, rgba(232, 167, 162, 0.85) 0%, rgba(232, 167, 162, 0.85) 50%, rgba(232, 167, 162, 0.85) 100%);',
        'gradient-4': 'linear-gradient(90deg, rgba(66, 154, 237, 0.4) 0%, #429aed 100%)',
        'gradient-5': ' linear-gradient(90deg, rgba(103, 234, 132, 0.8) 0%, #acf2bb 100%)',
      },
    },
  },
  plugins: [],
}
