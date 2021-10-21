/* myLeaflet.js */
import {
  Control,
  DomEvent,
  DomUtil,
  Evented,
  LatLng,
  LatLngBounds,
  Layer,
  Map,
  Marker,
  TileLayer,
  Icon,
  Util,
  point,
  geoJSON,
  Popup
} from "../../node_modules/leaflet/dist/leaflet-src.esm.js"

export {
  Control,
  DomEvent,
  DomUtil,
  Evented,
  LatLng,
  LatLngBounds,
  Layer,
  Map,
  Marker,
  TileLayer,
  Icon,
  geoJSON,
  Popup
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
  point
}

console.log("myLeaflet.js working");
