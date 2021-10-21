import {
  Control,
  Map,
  Marker,
  TileLayer,
  Icon,
  geoJSON
} from "./myLeaflet.js"

import {data} from "../../sampleData/data.js"

import {EventPopup} from "./popups.js"

import * as ExtraMarkers from "../Libraries/leaflet-extra-markers/js/leaflet.extra-markers.js"

let UtopiaMap = Map.extend({
  populateMap: function (){
    geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        if (feature.properties.category == "Place")
          return new Marker(latlng, {icon: placeIcon});
        if (feature.properties.category == "Event")
          return new Marker(latlng, {icon: eventIcon});
        if (feature.properties.category == "Profile")
          return new Marker(latlng, {icon: profileIcon});
      }
    }
).bindPopup(new EventPopup).addTo(this);
  }
});

UtopiaMap.addInitHook(function(){
  new TileLayer('https://tile.osmand.net/hd/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  }).addTo(this);
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
  UtopiaMap,
}



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, {hoverEnabled: false});
  var el = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(el,{coverTrigger:false, hover: false});
	setMapHeight();
});

window.addEventListener('resize', function () {setMapHeight();})
window.addEventListener('touchmove', function () {setMapHeight();})

function setMapHeight() {
	var window_height = window.innerHeight;
	var header_height = document.getElementById("navbar").clientHeight;
	document.getElementById("leafletmap").style.height=window_height-header_height+"px";
}
