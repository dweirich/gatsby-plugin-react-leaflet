"use strict";

var path = require('path');

exports.onCreateWebpackConfig = function (_ref) {
  var stage = _ref.stage,
      loaders = _ref.loaders,
      actions = _ref.actions;

  if (stage === "build-html" || stage === "develop-html") {
    var regex = [/node_modules\/leaflet/, /node_modules\\leaflet/];
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: regex,
          use: loaders["null"]()
        }]
      }
    });
  }
};