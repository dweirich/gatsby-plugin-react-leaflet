const React = require('react');

exports.onRenderBody = ({
  setHeadComponents
}, options) => {
  if (options.linkStyles === false) return false;
  const link = React.createElement('link', {
    key: 'leaflet',
    rel: 'stylesheet',
    href: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
    integrity: 'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=',
    crossOrigin: ''
  });
  setHeadComponents([link]);
};