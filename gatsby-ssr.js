const React = require('react')

exports.onRenderBody = ({ setHeadComponents }, options) => {
  const link = React.createElement('link', {
    key: 'leaflet',
    rel: 'stylesheet',
    href: 'https://unpkg.com/leaflet@1.3.3/dist/leaflet.css',
    integrity: 'sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==',
    crossorigin: ''
  })

  setHeadComponents([
    link
  ])
}