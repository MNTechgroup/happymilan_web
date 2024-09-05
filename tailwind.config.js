/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
      },
      colors: {
        white: "#fff",
        tomato: "#ef4136",
        darkslategray: "#333",
        whitesmoke: "#e9e9e9",
        black: "#000",
        royalblue: "#0f52ba",
      },
      fontFamily: {
        poppins: "Poppins",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      lg: "18px",
    },
  },
});