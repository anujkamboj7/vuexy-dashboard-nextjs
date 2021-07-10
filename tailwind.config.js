const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      colors: {
        indigo: colors.indigo,
        amber: colors.amber,
        orange: colors.orange,
        blue: colors.blue,
        cyan: colors.cyan,
        green: colors.green,
        cyan: colors.cyan,
        gray: colors.gray,
        dolphin: "#F3F2F7",
        dark: {
          heavy: "#161E30",
          medium: "#283145",
          light: "#313859",
          heavy10: "rgba(22, 30, 47, 0.1)",
          white10: "rgba(255, 255, 255, 0.1)",
        },
      },
      width: {
        almost: "calc(100% - 312px)",
        almostMd: "calc(100% - 56px)",
        almostsm: "calc(100% - 32px)",
        fullSize: "calc(100% - 82px - 56px)",
      },
      minHeight: {
        20: "20px",
      },
      minWidth: {
        20: "20px",
      },
      zIndex: {
        1000: 1000,
      },
      fontSize: {
        11.2: "11.2px",
        nr: "15px",
      },
      boxShadow: {
        primary: "0 8px 25px -8px rgba(99, 102, 241, .75)",
        sm: "0 4px 24px 0 rgb(34 41 47 / 10%)",
        light: "0 0 15px 0 rgb(34 41 47 / 5%)",
      },
      height: {
        170: "170px",
        hfull: "calc(100vh - 64px)",
      },
      backgroundColor: {
        gray: {
          light: "#f7f7f7",
        },
      },
      borderOpacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
      screens: {
        desktop: "1198.98px",
        // => @media (min-width: 1198.98px) { ... }
        flagsWidth: "400px",
        small: "340px",
        // => @media (min-width: 319.98px) { ... }
      },
    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
