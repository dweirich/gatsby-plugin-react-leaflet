<<<<<<< HEAD
const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /react-leaflet/,
      loader: path.resolve(__dirname, './loader.js'),
    });
=======
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet/,
            use: loaders.null(),
          }
        ]
      }
    })
>>>>>>> e559051fa94c7b7474ff1320624044a1f82e01e6
  }
}