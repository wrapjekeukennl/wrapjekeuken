module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        one: "#bae6ed",
        two: "#171d6c",
        three: "rgb(216, 177, 132)",
        four: "#9cd9e6",
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: []
}
