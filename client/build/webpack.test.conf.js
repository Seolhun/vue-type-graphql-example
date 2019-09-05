const utils = require("./utils");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");

const webpackConfig = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders(),
  },
  devtool: "#inline-source-map",
  resolveLoader: {
    alias: {
      "scss-loader": "sass-loader",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": require("../config/test.env"),
    }),
  ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
