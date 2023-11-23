/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './public/**/*.html',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      "md": "768px",
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      inset: {
        "17": "68px",
        "26": "104px",
      },
      colors: {
        'mcn-blue': '#2EC3EE',
        'mcn-skyblue': '#0859C6',
        'mcn-darksky': '#2EC3EE',
        'mcn-orange': '#F4B53E',
      },
    },
  },
  plugins: [],
}

