const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  const link = React.createElement('link', {
    key: 'leaflet',
    rel: 'stylesheet',
    href: 'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
    integrity: 'sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==',
    crossOrigin: ''
  })

  setHeadComponents([
    link
  ])
}