const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#20799E",
      btn: "10A8A8",
    },
    extend: {},
  },
  plugins: [],
});
