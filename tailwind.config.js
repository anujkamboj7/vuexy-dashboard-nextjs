const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
      },
      width: {
        almost: "calc(100% - 312px)",
        almostMd: "calc(100% - 56px)",
        almostsm: "calc(100% - 32px)",
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
        small: "319.98px",
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
