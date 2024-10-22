/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: 'hsl(148, 38%, 91%)', // Green 200 (lighter)
          600: 'hsl(169, 82%, 27%)', // Green 600 (medium)
        },
        red: 'hsl(0, 66%, 54%)',      // Red
        neutral: {
          white: 'hsl(0, 0%, 100%)',  // White
          500: 'hsl(186, 15%, 59%)',  // Grey 500 (medium)
          900: 'hsl(187, 24%, 22%)',  // Grey 900 (darker)
        }
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fontSize: {
        label: '16px',
      },
    }
  },
  plugins: [],
}
