const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /react-leaflet/,
      exclude: [
        path.resolve(__dirname, '')
      ],
      loader: "null-loader",
    });
  }
}