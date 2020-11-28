const { dirname } = require("path");
const path = require("path");

module.exports = {
  devServer: {
    historyApiFallBack: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
};
