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

Add your React Leaflet components.

```javascript
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const IndexPage = () => {
  return (
    <MapContainer style={{ height: '400px' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}