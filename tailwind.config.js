
const { filterTokensByType } = require("./fns");
const tokens = require("./output/light.json")

const colors = filterTokensByType('color', tokens)

module.exports = {
  content: ["index.html"],
  theme: {
    colors,
  },
  variants: {},
  plugins: [],
};
