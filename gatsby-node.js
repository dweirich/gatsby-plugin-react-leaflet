"use strict";

var path = require('path');

exports.onCreateWebpackConfig = function (_ref) {
  var stage = _ref.stage,
      loaders = _ref.loaders,
      actions = _ref.actions;

  if (stage === "build-html") {
    actions.setWebpackConfig({
      test: /\/node_modules\/react-leaflet|\/node_modules\/leaflet/,
      use: loaders["null"]()
    });
  }
};