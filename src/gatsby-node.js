const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      test: /\/node_modules\/react-leaflet|\/node_modules\/leaflet/,
      use: loaders.null()
    })
  }
}