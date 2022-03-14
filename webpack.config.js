const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const cssLoaders = [parts.tailwind()];

const commonConfig = merge([
  { entry: ["./src"] },
  parts.page({ title: "Webpack" }),
  // parts.loadCSS(),s
  parts.extractCSS({ loaders: cssLoaders }),
]);

const productConfig = merge([]);

const devConfig = merge([
  { entry: ["webpack-plugin-serve/client"] },
  parts.devServer(),
]);

const getConfig = (mode) => {
  switch (mode) {
    case "production":
      return merge(commonConfig, productConfig, { mode });
    case "development":
      return merge(commonConfig, devConfig, { mode });
    default:
      throw new Error(`trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
