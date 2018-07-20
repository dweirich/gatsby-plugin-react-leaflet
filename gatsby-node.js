const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /react-leaflet/,
      loader: path.resolve(__dirname, './loader.js'),
    });
  }
};