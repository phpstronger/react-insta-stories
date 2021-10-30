const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const jsObfuscator = require("webpack-obfuscator");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [],
  optimization: {
    minimizer: [
      // new TerserPlugin({
      //   cache: true,
      //   parallel: true,
      //   terserOptions: {
      //     ecma: 5,
      //   },
      // }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
});
