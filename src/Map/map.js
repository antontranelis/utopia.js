import {
  control,
  Map,
  TileLayer,
  DomUtil,
  LayerGroup,
  Point,
  DivIcon
} from "../Libraries/myLeaflet.js"
import {
  PlacePopup,
  EventPopup,
  HomePopup,
  OfferPopup,
  NeedPopup,
  EditPlacePopup,
  EditEventPopup,
  EditHomePopup,
  EditOfferPopup,
  EditNeedPopup,

} from "./popups.js"
import {
  PlaceMarker,
  EventMarker,
  HomeMarker,
  OfferMarker,
  NeedMarker
} from "./markers.js"

import '../../node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js';
import '../../node_modules/leaflet.markercluster.layersupport/dist/leaflet.markercluster.layersupport-src.js';


let UtopiaMap = Map.extend({
  addItem: function(item) {
    if (item.type == "place") {
      let layerGroup = this.place_layer;
      layerGroup.eachLayer(function(layer) {
        if (layer.item._['#'] == item._['#']) {
          layer.remove();
          layer.removeFrom(layerGroup);
        }
      });
      new PlaceMarker(item).bindPopup(new PlacePopup(item)).addTo(this.place_layer);
    }
    if (item.type == "event") {
      let layerGroup = this.event_layer;
      layerGroup.eachLayer(function(layer) {
        if (layer.item._['#'] == item._['#']) {
          layer.remove();
          layer.removeFrom(layerGroup);
        }
      });
      new EventMarker(item).bindPopup(new EventPopup(item)).addTo(this.event_layer);
    }
    if (item.type == "home") {
      let layerGroup = this.home_layer;
      layerGroup.eachLayer(function(layer) {
        if (layer.item._['#'] == item._['#']) {
          layer.remove();
          layer.removeFrom(layerGroup);
        }
      });
      new HomeMarker(item).bindPopup(new HomePopup(item)).addTo(this.home_layer);
    }
    if (item.type == "offer") {
      let layerGroup = this.offer_layer;
      layerGroup.eachLayer(function(layer) {
        if (layer.item._['#'] == item._['#']) {
          layer.remove();
          layer.removeFrom(layerGroup);
        }
      });
      new OfferMarker(item).bindPopup(new OfferPopup(item)).addTo(this.offer_layer);
    }
    if (item.type == "need") {
      let layerGroup = this.need_layer;
      layerGroup.eachLayer(function(layer) {
        if (layer.item._['#'] == item._['#']) {
          layer.remove();
          layer.removeFrom(layerGroup);
        }
      });
      new NeedMarker(item).bindPopup(new NeedPopup(item)).addTo(this.need_layer);
    }
  },
  removeItem: function(item) {
    let layers;
    if (item.type == "place") {
      layers = this.place_layer._layers;
    }
    if (item.type == "event") {
      layers = this.event_layer._layers;
    }
    if (item.type == "home") {
      layers = this.home_layer._layers;
    }
    if (item.type == "offer") {
      layers = this.offer_layer._layers;
    }
    if (item.type == "need") {
      layers = this.need_layer._layers;
    }
    let elements = Object.values(layers).filter(element => {
      return element.item == item;
    })
    console.log(elements);
    if (elements.length > 0) {
      elements.forEach((item, i) => {
        item.remove(layers);
      });
    }
  },
  openFormPopup: function(item) {
    console.log(item);
    DomUtil.removeClass(this._container, 'crosshair-cursor-enabled');
    this.off('click');
    if (item.type == "place") new EditPlacePopup(item).openOn(this);
    if (item.type == "home") new EditHomePopup(item).openOn(this);
    if (item.type == "offer") new EditOfferPopup(item).openOn(this);
    if (item.type == "need") new EditNeedPopup(item).openOn(this);
    if (item.type == "event") {
      let popup = new EditEventPopup(item).openOn(this);
      popup.initDatepicker();
    }
  },
  selectPosition: function(item) {
    M.toast({
      html: `Select ${item.type} position!`,
      classes: 'darkgrey rounded',
      displayLength: 2000
    });
    DomUtil.addClass(this._container, 'crosshair-cursor-enabled');
    this.on('click', event => {
      item.lat = event.latlng.lat;
      item.lng = event.latlng.lng;
      this.openFormPopup(item);
    });
  }
});

UtopiaMap.addInitHook(function() {
  new TileLayer('https://tile.osmand.net/hd/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  }).addTo(this);

  this.event_layer = new LayerGroup();
  this.place_layer = new LayerGroup();
  this.home_layer = new LayerGroup();
  this.offer_layer = new LayerGroup();
  this.need_layer = new LayerGroup();
  this.event_layer.addTo(this);
  this.place_layer.addTo(this);
  this.home_layer.addTo(this);
  this.offer_layer.addTo(this);
  this.need_layer.addTo(this);

  var overlayMaps = {
    "Homes": this.home_layer,
    "Places": this.place_layer,
    //"Events": this.event_layer,
    "Offers": this.offer_layer,
    "Needs": this.need_layer,
  };

  this.layercontrol = control.layers(null, overlayMaps, {
    collapsed: false,
    position: "bottomleft"
  }).addTo(this);
  this.layercontrol.getContainer().childNodes[1].childNodes[2].childNodes.forEach((item, i) => {
    L.DomUtil.addClass(item.childNodes[0].childNodes[0], 'reset-checkbox');
    L.DomUtil.addClass(item.childNodes[0].childNodes[1], 'text-white');
  });



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
      return new DivIcon({
        html: `<div style="background-color:${counts.length > 1 ? counts[1].color : counts[0].color};opacity: 0.9;"><div style="background-color:${counts[0].color}; opacity: 1;"><span><b>${childCount}</b></span></div></div>`,
        className: 'marker-cluster',
        iconSize: new Point(40, 40)
      });
    }
  });
  this.all_layers.addLayer(this.event_layer);
  this.all_layers.addLayer(this.place_layer);
  this.all_layers.addLayer(this.home_layer);
  this.all_layers.addLayer(this.offer_layer);
  this.all_layers.addLayer(this.need_layer);

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
