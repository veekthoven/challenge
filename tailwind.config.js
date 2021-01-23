module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    darkModeVariant: false
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#00B36F',
        secondary: '#715DD6',
        tertiary: '#DC3545',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    },
  },
  plugins: [
  ]
}

