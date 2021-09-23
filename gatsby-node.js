const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

exports.onCreateBabelConfig = ({ actions }, pluginOptions) => {
  actions.setBabelPlugin({
    name: require.resolve(`@vanilla-extract/babel-plugin`),
  });
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (
    stage === "develop" ||
    stage === "build-javascript" ||
    stage === "build-html"
  ) {
    actions.setWebpackConfig({
      plugins: [new VanillaExtractPlugin()]
    });
  }
};
