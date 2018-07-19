exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /react-leaflet/,
      loader: "null-loader",
    });
  }
};