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
  TileLayer
} from "../node_modules/leaflet/dist/leaflet-src.esm.js"

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
  TileLayer
}

/*
 * The global namespace L is required by a few plugins.  We provide one,
 * with the bare minimum content that they require.
 */
window.L = {
  Control,
  DomEvent,
  DomUtil
}

console.log("myLeaflet.js working");
