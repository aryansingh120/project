/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // indigo-600
          light: '#6366f1', // indigo-500
          dark: '#3730a3', // indigo-700
        },
        secondary: {
          DEFAULT: '#10b981', // emerald-500
          light: '#34d399', // emerald-400
          dark: '#059669', // emerald-600
        },
        accent: {
          DEFAULT: '#f59e0b', // amber-500
        },
        background: {
          light: '#f3f4f6', // gray-100
          DEFAULT: '#1f2937', // gray-800
        },
        glass: 'rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
