"use strict";

var path = require('path');

exports.onCreateWebpackConfig = function (_ref) {
  var stage = _ref.stage,
      loaders = _ref.loaders,
      actions = _ref.actions;
  var config = {
    module: {
      rules: [{
        test: /\.css$/,
        include: [path.resolve('leaflet/dist')],
        use: [loaders.style(), loaders.css()]
      }]
    }
  };

  if (stage === "build-html") {
    config.module.rules = [].concat(config.module.rules, [{
      test: /\/node_modules\/react-leaflet|\/node_modules\/leaflet/,
      use: loaders["null"]()
    }]);
  }

  actions.setWebpackConfig(config);
};