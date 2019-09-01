// This is the webpack config used for unit tests.

let utils = require("./utils");
let webpack = require("webpack");
let merge = require("webpack-merge");
let baseConfig = require("./webpack.base.conf");

let webpackConfig = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders()
  },
  devtool: "#inline-source-map",
  resolveLoader: {
    alias: {
      "scss-loader": "sass-loader"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": require("../config/test.env")
    })
  ]
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
