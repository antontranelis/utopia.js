/* myLeaflet.js */
import {
  Control,
  FeatureGroup,
  featureGroup,
  control,
  DomEvent,
  DomUtil,
  Evented,
  LatLng,
  LatLngBounds,
  Layer,
  LayerGroup,
  Map,
  Marker,
  TileLayer,
  Icon,
  Util,
  point,
  geoJSON,
  Popup,
  setOptions,
  extend,
  stamp,
  Browser,
  bind,
  Point,
  DivIcon,
  Polygon,
  Path,
  Polyline
} from "../../node_modules/leaflet/dist/leaflet.js"

export {
  control,
  DomEvent,
  DomUtil,
  Evented,
  LatLng,
  LatLngBounds,
  Layer,
  LayerGroup,
  Map,
  Marker,
  TileLayer,
  Icon,
  geoJSON,
  Popup,
  setOptions,
  Point,
  DivIcon
}

/*
 * The global namespace L is required by a few plugins.  We provide one,
 * with the bare minimum content that they require.
 */
window.L = {
  Control,
  DomEvent,
  DomUtil,
  Icon,
  Util,
  point,
  FeatureGroup,
  Marker,
  LatLng,
  LatLngBounds,
  featureGroup,
  extend,
  LayerGroup,
  stamp,
  Browser,
  bind,
  Polygon,
  Path,
  Polyline,
  Point
}

console.log("myLeaflet.js working");
