const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    const regex = [
      /node_modules\/leaflet/,
      /node_modules\\leaflet/
    ]
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: regex,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
