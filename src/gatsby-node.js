const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\/node_modules.*\/(react-leaflet|leaflet)/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}