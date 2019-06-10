"use strict";

var path = require('path');

exports.onCreateWebpackConfig = function (_ref) {
  var stage = _ref.stage,
      loaders = _ref.loaders,
      actions = _ref.actions;

  if (stage === "build-html") {
    var regex = [new RegExp(path.join('node_modules', 'leaflet')), new RegExp(path.join('node_modules', 'leaflet'))];
    actions.setWebpackConfig({
      module: {
        rules: [{
          include: regex,
          use: loaders["null"]()
        }]
      }
    });
  }
};