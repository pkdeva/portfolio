/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Material Design 3 Typography Scale
        'display-large': ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.25px', fontWeight: '400' }],
        'display-medium': ['2.75rem', { lineHeight: '1.15', letterSpacing: '0px', fontWeight: '400' }],
        'display-small': ['2.25rem', { lineHeight: '1.22', letterSpacing: '0px', fontWeight: '400' }],
        'headline-large': ['2rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }],
        'headline-medium': ['1.75rem', { lineHeight: '1.29', letterSpacing: '0px', fontWeight: '400' }],
        'headline-small': ['1.5rem', { lineHeight: '1.33', letterSpacing: '0px', fontWeight: '400' }],
        'title-large': ['1.375rem', { lineHeight: '1.27', letterSpacing: '0px', fontWeight: '400' }],
        'title-medium': ['1rem', { lineHeight: '1.5', letterSpacing: '0.15px', fontWeight: '500' }],
        'title-small': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.1px', fontWeight: '500' }],
        'body-large': ['1rem', { lineHeight: '1.5', letterSpacing: '0.5px', fontWeight: '400' }],
        'body-medium': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.25px', fontWeight: '400' }],
        'body-small': ['0.75rem', { lineHeight: '1.33', letterSpacing: '0.4px', fontWeight: '400' }],
        'label-large': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.1px', fontWeight: '500' }],
        'label-medium': ['0.75rem', { lineHeight: '1.33', letterSpacing: '0.5px', fontWeight: '500' }],
        'label-small': ['0.6875rem', { lineHeight: '1.45', letterSpacing: '0.5px', fontWeight: '500' }],
      },
      colors: {
        // Material Design 3 Color System
        primary: {
          DEFAULT: '#1976d2',
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
      },
    },
  },
  plugins: [],
};
