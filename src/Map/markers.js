import {
  Marker,
  setOptions
} from "../Libraries/myLeaflet.js"

import {ExtraMarkers} from "../Libraries/leaflet-extra-markers/js/leaflet.extra-markers.js"

let PlaceMarker = Marker.extend({
  initialize: function(item) {
    this.item = item;
    this.setLatLng([item.lat,item.lng]);
  }
})

PlaceMarker.addInitHook(function() {
  this.setIcon(placeIcon);
});

let HomeMarker = Marker.extend({
  initialize: function(item) {
    this.item = item;
    this.setLatLng([item.lat,item.lng]);
  }
})

HomeMarker.addInitHook(function() {
  this.setIcon(homeIcon);
});

let OfferMarker = Marker.extend({
  initialize: function(item) {
    this.item = item;
    this.setLatLng([item.lat,item.lng]);
  }
})

OfferMarker.addInitHook(function() {
  this.setIcon(offerIcon);
});

let NeedMarker = Marker.extend({
  initialize: function(item) {
    this.item = item;
    this.setLatLng([item.lat,item.lng]);
  }
})

NeedMarker.addInitHook(function() {
  this.setIcon(needIcon);
});

let EventMarker = Marker.extend({
  initialize: function(item) {
    this.item = item;
    this.setLatLng([item.lat,item.lng]);
  }
})

EventMarker.addInitHook(function() {
  this.setIcon(eventIcon);
});

let ProfileMarker = Marker.extend({

})

ProfileMarker.addInitHook(function() {
  this.setIcon(profileIcon);
});


var placeIcon = ExtraMarkers.icon({
  icon: 'fa-circle',
  markerColor: `#2E7D32`,
  svgBorderColor: `RGBA(35, 31, 32, 0.3)`,
  shape: 'circle',
  prefix: 'fa',
  svg: true
});

var eventIcon = ExtraMarkers.icon({
  icon: 'fa-calendar-alt',
  markerColor: `#f9a825`,
  svgBorderColor: `RGBA(35, 31, 32, 0.3)`,
  shape: 'square',
  prefix: 'fa',
  svg: true
});

var profileIcon = ExtraMarkers.icon({
  icon: 'fa-user',
  markerColor: `#E87520`,
  svgBorderColor: `RGBA(35, 31, 32, 0.2)`,
  shape: 'square',
  prefix: 'fa',
  svg: true
});

var homeIcon = ExtraMarkers.icon({
  icon: 'fa-home',
  markerColor: `#e32322`,
  svgBorderColor: `RGBA(35, 31, 32, 0.2)`,
  shape: 'square',
  prefix: 'fa',
  svg: true
});

var offerIcon = ExtraMarkers.icon({
  icon: 'fa-heart',
  markerColor: `#6d398b`,
  svgBorderColor: `RGBA(35, 31, 32, 0.2)`,
  shape: 'square',
  prefix: 'fa',
  svg: true
});

var needIcon = ExtraMarkers.icon({
  icon: 'fa-question',
  markerColor: `#444e99`,
  svgBorderColor: `RGBA(35, 31, 32, 0.2)`,
  shape: 'square',
  prefix: 'fa',
  svg: true
});

export {
  PlaceMarker,
  EventMarker,
  ProfileMarker,
  HomeMarker,
  OfferMarker,
  NeedMarker
}
