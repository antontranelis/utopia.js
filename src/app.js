import {
  Map,
  TileLayer,
  PlaceMarker
} from "./utopiaMap.js"
// import "thePlugin"
// import "theOtherPlugin"

// eslint-disable-next-line no-unused-vars
const L = window.L
//const thePlugin = L.thePlugin()
//const theOtherPlugin = new L.Control.theOtherPlugin(options)

const mymap = new Map('leafletmap').setView([51.505, -0.09], 13);
//theOtherPlugin.addTo(map)
new TileLayer('https://tile.osmand.net/hd/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,

}).addTo(mymap);



new PlaceMarker([51.5, -0.09]).addTo(mymap);


console.log("app.js working");
