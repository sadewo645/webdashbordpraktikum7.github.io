/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fbff',
          100: '#e0f6ff',
          500: '#22c7f2',
          700: '#0891b2'
        },
        leaf: {
          100: '#e7fdea',
          500: '#32c16c',
          700: '#1e8749'
        }
      },
      boxShadow: {
        soft: '0 10px 35px rgba(15, 23, 42, 0.08)'
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-out both',
        pulseSoft: 'pulseSoft 1.5s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 }
        }
      }
    }
  },
  plugins: []
};
