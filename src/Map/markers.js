import {
  Marker,
  setOptions
} from "../Libraries/myLeaflet.js"

import * as ExtraMarkers from "../Libraries/leaflet-extra-markers/js/leaflet.extra-markers.js"

let PlaceMarker = Marker.extend({

})

PlaceMarker.addInitHook(function(){
    this.setIcon(placeIcon);
});


let EventMarker = Marker.extend({

})

EventMarker.addInitHook(function(){
    this.setIcon(eventIcon);
});

let ProfileMarker = Marker.extend({

})

ProfileMarker.addInitHook(function(){
    this.setIcon(profileIcon);
});


var placeIcon = L.ExtraMarkers.icon({
  icon: 'fa-circle',
  markerColor: `#666`,
  svgBorderColor: `RGBA(35, 31, 32, 0.2)`,
  shape: 'circle',
  prefix: 'fa',
  svg: true
  });

var eventIcon = L.ExtraMarkers.icon({
  icon: 'fa-calendar-alt',
  markerColor: `#0696bb`,
  svgBorderColor: `RGBA(0, 0, 0, 1)`,
  shape: 'square',
  prefix: 'fa',
  svg: true
  });

var profileIcon = L.ExtraMarkers.icon({
  icon: 'fa-user',
  markerColor: `#E87520`,
  svgBorderColor: `RGBA(35, 31, 32, 0.2)`,
  shape: 'square',
  prefix: 'fa',
  svg: true
  });



    export {
      PlaceMarker,
      EventMarker,
      ProfileMarker
    }
