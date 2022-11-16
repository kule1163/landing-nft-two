/** @type {import('tailwindcss').Config} */
const colors = require("./src/styles/veriables/colors");
const fontSize = require("./src/styles/veriables/fontSize");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontSize,
      screens: {
        hlg: { max: "1250px" },
        hmd: { max: "700px" },
        hsm: { max: "500px" },
        swmd: { max: "800px" },
        swsm: { max: "500px" },
        gllg: { max: "1000px" },
        glmd: { max: "700px" },
        glsm: { max: "500px" },
      },
      gridTemplateColumns: {
        creator: "repeat(auto-fit, minmax(300px, 1fr))",
        /* how: "repeat(auto-fit, minmax(250px, 1fr))", */
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("all-child", "& *");
      addVariant("not-last", "&:not(:last-child)");
    },
  ],
};
