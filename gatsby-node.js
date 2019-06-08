"use strict";

exports.onCreateWebpackConfig = function (_ref) {
  var stage = _ref.stage,
      loaders = _ref.loaders,
      actions = _ref.actions;

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: /\/node_modules.*\/(react-leaflet|leaflet)/,
          use: loaders["null"]()
        }]
      }
    });
  }
};