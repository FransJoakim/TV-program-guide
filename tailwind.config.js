/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Courier", "ui-monospace", "SFMono-Regular"],
    },
    colors: {
      background: "#202020",
      textWhite: "#f4f4f4",
      textGray: "#959595",
      borderGray: "#434343",
      orange: "rgb(217, 145, 25)",
      programBlack: "#111111",
      currentGray: "rgb(34, 34, 34)",
    },
    boxShadow: {
      lg: "10px 0 10px #111111, 0 0 0, 0 0 0",
    },
  },
};
