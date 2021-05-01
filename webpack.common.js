const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dirApp = path.join(__dirname, "");

/**
 * Webpack Configuration
 */
module.exports = (env) => {
  return {
    devtool: "eval",
    entry: {
      main: "./src/js/index.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(dirApp, "index.html"),
        minify: true,
        inject: true,
      }),
    ],
  };
};
