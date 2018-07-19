# Getting started

This package takes care of setting up your project for [React Leaflet](https://react-leaflet.js.org/).

The current npm version is for Gatsby v1. If you need the plugin for Gatsby v2, update the version in package.json to "next".

First install the packages.
```
npm i --save gatsby-plugin-react-leaflet react-leaflet leaflet
```


Add the plugin to your Gatsby configuration.

### gatsby-config.js
```javascript
module.exports = {
  plugins: [
    'gatsby-plugin-react-leaflet'
  ]
}
```

