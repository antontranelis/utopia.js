import {Control, Map, TileLayer} from "../Libraries/myLeaflet.js"
import {PlacePopup, EventPopup, ProfilePopup} from "./popups.js"
import {PlaceMarker, EventMarker, ProfileMarker} from "./markers.js"


let UtopiaMap = Map.extend({
  addPlace: function(lat, lng, name){
    new PlaceMarker([lat,lng]).bindPopup(name).addTo(this);
  },
  addEvent: function(lat, lng, name){
    new EventMarker([lat,lng]).bindPopup(name).addTo(this);
  }
});

UtopiaMap.addInitHook(function() {
  new TileLayer('https://tile.osmand.net/hd/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  }).addTo(this);
});

export {
  UtopiaMap,
}
