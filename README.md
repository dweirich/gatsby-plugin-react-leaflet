# Getting started

This package takes care of setting up your project for [React Leaflet](https://react-leaflet.js.org/).

The current npm version is for Gatsby v2.


## Step 1

First install the packages.
```
npm i --save gatsby-plugin-react-leaflet react-leaflet leaflet
```

## Step 2

Add the plugin to your Gatsby configuration.

### gatsby-config.js
```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
```

## Step 3

When using your `react-leaflet` components, be sure to wrap them in a check for `window`. For example:

```javascript
import React, { Component } from 'react'
import { Map } from 'react-leaflet'

export default class MyMap extends Component {
  render() {
    const { options } = this.props

    if (typeof window !== 'undefined') {
      return (
        <Map {...options}>
          {/* Map code goes here */}
        </Map>
      )
    }
    return null
  }
}
```

Without these checks your code will fail when gatsby tries to build it for production.

`WebpackError: Minified React error #130`

