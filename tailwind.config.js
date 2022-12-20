module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["inter"],
    },
    extend: {

       border: {
        '4xl': '2rem',
      },
      colors: {
        "accent-1": "#333",
        "dark-blu": "#054C73",
        "gray-lit": "#ECF7FD33",
        "graye": "#DFE9F4"
      }
    },
  },
  variants: {},
  plugins: [],
};
