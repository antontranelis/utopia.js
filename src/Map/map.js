import {
  Control,
  Map,
  TileLayer,
  geoJSON
} from "../Libraries/myLeaflet.js"

import {
  places,
  events,
  profiles
} from "../../sampleData/data.js"
import {
  PlacePopup,
  EventPopup,
  ProfilePopup
} from "./popups.js"
import {
  PlaceMarker,
  EventMarker,
  ProfileMarker
} from "./markers.js"


let UtopiaMap = Map.extend({
  populateMap: function() {
    geoJSON(places, {
      pointToLayer: function(feature, latlng) {
        return new PlaceMarker(latlng);
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(new PlacePopup(feature));
      }
    }).addTo(this);

    geoJSON(events, {
      pointToLayer: function(feature, latlng) {
        return new EventMarker(latlng);
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(new EventPopup(feature));
      }
    }).addTo(this);

    geoJSON(profiles, {
      pointToLayer: function(feature, latlng) {
        return new ProfileMarker(latlng);
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(new ProfilePopup(feature));
      }
    }).addTo(this);


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



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, {
    hoverEnabled: false
  });
  var el = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(el, {
    coverTrigger: false,
    hover: false
  });
  setMapHeight();
});

window.addEventListener('resize', function() {
  setMapHeight();
})
window.addEventListener('touchmove', function() {
  setMapHeight();
})

function setMapHeight() {
  var window_height = window.innerHeight;
  var header_height = document.getElementById("navbar").clientHeight;
  document.getElementById("leafletmap").style.height = window_height - header_height + "px";
}
