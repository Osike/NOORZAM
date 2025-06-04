/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf1',
          100: '#ccd5e3',
          200: '#99abd7',
          300: '#6680ba',
          400: '#33569e',
          500: '#0A2463', // Main primary color
          600: '#091d4f',
          700: '#07163b',
          800: '#050f28',
          900: '#020714',
        },
        secondary: {
          50: '#e6f3fa',
          100: '#cce7f5',
          200: '#99d0eb',
          300: '#66b8e0',
          400: '#33a1d6',
          500: '#247BA0', // Main secondary color
          600: '#1d6280',
          700: '#164a60',
          800: '#0e3140',
          900: '#071920',
        },
        accent: {
          50: '#fef5e7',
          100: '#fdebd0',
          200: '#fbd7a1',
          300: '#fac472',
          400: '#f8b043',
          500: '#F9A826', // Main accent color
          600: '#c7861e',
          700: '#956517',
          800: '#63430f',
          900: '#322208',
        },
        success: {
          50: '#e8f5e9',
          100: '#d1ebd3',
          200: '#a3d7a7',
          300: '#75c37b',
          400: '#47af4f',
          500: '#2E7D32', // Main success color
          600: '#256429',
          700: '#1c4b1f',
          800: '#133214',
          900: '#09190a',
        },
        warning: {
          50: '#fff8e1',
          100: '#fff1c4',
          200: '#ffe388',
          300: '#ffd54f',
          400: '#ffc913',
          500: '#FFC107', // Main warning color
          600: '#cc9a06',
          700: '#997404',
          800: '#664d03',
          900: '#332701',
        },
        error: {
          50: '#f9e6e6',
          100: '#f3cccc',
          200: '#e79999',
          300: '#db6666',
          400: '#cf3333',
          500: '#C62828', // Main error color
          600: '#9e2020',
          700: '#771818',
          800: '#4f1010',
          900: '#280808',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};