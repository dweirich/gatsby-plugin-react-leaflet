const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  let config = {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [
            path.resolve('leaflet/dist')
          ],
          use: [loaders.style(), loaders.css()]
        }
      ]
    }
  }
  
  if (stage === "build-html") {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\/node_modules\/react-leaflet|\/node_modules\/leaflet/,
        use: loaders.null()
      }
    ]
  }

  actions.setWebpackConfig(config)
}