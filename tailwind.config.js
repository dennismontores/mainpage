module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'main': {
          100: '#E8F7F7',
          200: '#C4ECEA',
          300: '#A1E0DD',
          400: '#5BC8C4',
          500: '#14B1AB',
          600: '#129F9A',
          700: '#0C6A67',
          800: '#09504D',
          900: '#063533',
        },
        'secondary': {
          100: '#FDEEEF',
          200: '#F9D3D6',
          300: '#F6B9BD',
          400: '#EF858C',
          500: '#E8505B',
          600: '#D14852',
          700: '#8B3037',
          800: '#682429',
          900: '#46181B',
        },
        'aux': {
          100: '#FEFBF1',
          200: '#FEF5DB',
          300: '#FDEEC5',
          400: '#FBE29A',
          500: '#F9D56E',
          600: '#E0C063',
          700: '#958042',
          800: '#706032',
          900: '#4B4021',
        },
        'extra': {
          100: '#FEFDF9',
          200: '#FCFAF0',
          300: '#FAF7E7',
          400: '#F7F2D4',
          500: '#F3ECC2',
          600: '#DBD4AF',
          700: '#928E74',
          800: '#6D6A57',
          900: '#49473A',
        },
        'socials': {
          'facebook': '#3B5998',
          'instagram': '#C13584',
          'whatsapp': '#25D366',
          'telegram': '#0088CC',
          'twitter': '#1DA1F2',
          'linkedin': '#0077b5'
        }

      },
      width: {
        '30/100': '30%',
        '35/100': '35%',
        '40/100': '40%',
        '45/100': '45%',
        '50/100': '50%',
        '55/100': '55%',
        '60/100': '60%',
        '65/100': '65%',
        '70/100': '70%',
        '75/100': '75%',
        '80/100': '80%',
        '85/100': '85%',
        '90/100': '90%',
        '95/100': '95%',
        '100/100': '100%',
      }
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('tailwindcss-neumorphism')],
}
