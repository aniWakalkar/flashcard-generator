const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // screens: {
    //   sm: "300px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "1477px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1920px",
    //   // => @media (min-width: 1024px) { ... }
    // },
  },
  plugins: [],
});
