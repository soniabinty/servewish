const { default: theme } = require("@material-tailwind/react/theme");
const withMT = require("@material-tailwind/react/utils/withMT");
const { default: daisyui } = require("daisyui");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
theme: ["light", "dark"]
  },
  plugins: [ require('daisyui'),],
});

