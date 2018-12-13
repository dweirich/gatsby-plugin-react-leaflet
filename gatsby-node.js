const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet/,
            exclude: [
              path.resolve(__dirname, '')
            ],
            use: loaders.null(),
          }
        ]
      }
    })
  }
}