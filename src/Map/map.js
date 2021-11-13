import {
  control,
  Map,
  TileLayer,
  DomUtil,
  LayerGroup,
} from "../Libraries/myLeaflet.js"
import {
  PlacePopup,
  EventPopup,
  EditPlacePopup,
  EditEventPopup
} from "./popups.js"
import {
  PlaceMarker,
  EventMarker,
  ProfileMarker
} from "./markers.js"

import '../../node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js';

import '../../node_modules/leaflet.markercluster.layersupport/dist/leaflet.markercluster.layersupport-src.js';


let UtopiaMap = Map.extend({
  addPlace: function(place) {
    let element = Object.values(this.place_layer._layers).filter(item => {
      return item.id == place._['#'];
    })
    if(element.length == 0) new PlaceMarker(place).bindPopup(new PlacePopup(place)).addTo(this.place_layer);
  },
  removePlace: function(id) {
    let element = Object.values(this.place_layer._layers).filter(item => {
      return item.id == id;
    })
    element[0].remove();
  },
  addEvent: function(event) {
    let element = Object.values(this.event_layer._layers).filter(item => {
      return item.id == event._['#'];
    })
    if(element.length == 0) new EventMarker(event).bindPopup(new EventPopup(event)).addTo(this.event_layer);
  },
  removeEvent: function(id) {
    let element = Object.values(this.event_layer._layers).filter(item => {
      return item.id == id;
    })
    element[0].remove();
  },
  openFormPopup: function(type, latlng) {
    L.DomUtil.removeClass(this._container, 'crosshair-cursor-enabled');
    this.off('click');
    if (type == "place") new EditPlacePopup(latlng).setLatLng([latlng.lat, latlng.lng]).openOn(this);
    if (type == "event") {
      let popup = new EditEventPopup(latlng).setLatLng([latlng.lat, latlng.lng]).openOn(this);
      popup.initDatepicker();
    }
  },
  selectPosition: function(type) {
    console.log(type);
    M.toast({
      html: `Select ${type} position!`,
      classes: 'darkgrey rounded',
      displayLength: 2000
    });
    DomUtil.addClass(this._container, 'crosshair-cursor-enabled');
    this.on('click', event => this.openFormPopup(type, event.latlng));
  }
});

UtopiaMap.addInitHook(function() {
  new TileLayer('https://tile.osmand.net/hd/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  }).addTo(this);

  this.event_layer = new LayerGroup();
  this.place_layer = new LayerGroup();
  this.event_layer.addTo(this);
  this.place_layer.addTo(this);

  var overlayMaps = {
    "Events": this.event_layer,
    "Places": this.place_layer,
  };

  this.layercontrol = control.layers(null, overlayMaps, {
    collapsed: false,
    position: "bottomleft"
  }).addTo(this);



  this.all_layers = L.markerClusterGroup.layerSupport({
    maxClusterRadius: 50,
    iconCreateFunction: function(cluster) {
      var childCount = cluster.getChildCount();
      var childMarkers = cluster.getAllChildMarkers();
      var colors = [];
      childMarkers.forEach((child, i) => {
        colors.push(child.options.icon.options.markerColor);
      });
      var counts = [];
      colors.forEach((x) => {
        if (counts.find((y) => y.color === x) == undefined) counts.push({
          color: x,
          count: 1
        });
        else {
          var el = counts.find((y) => y.color === x);
          el.count = el.count + 1;
        }
      });
      counts.sort(function(a, b) {
        return b.count - a.count
      });
      return new L.DivIcon({
        html: `<div style="background-color:${counts.length > 1 ? counts[1].color : counts[0].color};opacity: 0.9;"><div style="background-color:${counts[0].color}; opacity: 1;"><span><b>${childCount}</b></span></div></div>`,
        className: 'marker-cluster',
        iconSize: new L.Point(40, 40)
      });
    }
  });
  this.all_layers.addLayer(this.event_layer);
  this.all_layers.addLayer(this.place_layer);
  this.addLayer(this.all_layers);


  this.on('popupopen', function(e) {
    console.log(e);
    var el = document.querySelectorAll(".popup-dropdown-trigger");
    M.Dropdown.init(el, {
      coverTrigger: false,
      hover: false,
      constrainWidth: false
    });
  })

});

export {
  UtopiaMap,
}
