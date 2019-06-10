const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    const regex = [new RegExp(path.join('node_modules', 'leaflet')), new RegExp(path.join('node_modules', 'leaflet'))]
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            include: regex,
            use: loaders.null()
          }
        ]
      }
    })
  }
}