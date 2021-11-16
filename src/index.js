import mapStyle from "../static/css/map.css";
import utopiaStyle from "../static/css/utopia.css";
import leafletcss from "../node_modules/leaflet/dist/leaflet.css"
import markerclustercss from "../src/Libraries/leaflet-markerclusters/css/MarkerCluster.Default.css"
import extramarkercss from "../src/Libraries/leaflet-extra-markers/css/leaflet.extra-markers.min.css"


import fontawesome from "../static/vendors/fontawesome/css/all.css"


import {
  UtopiaMap
} from "./Map/map.js"
import * as GUN from "../node_modules/gun/gun.js";
import {
  config
} from "../config/appConfig.js"
import {
  Place,
  Event,
  Home,
  Offer,
  Need
} from "./models/models.js"

// eslint-disable-next-line no-unused-vars
const L = window.L


const utopiaMap = new UtopiaMap('leafletmap').setView(config.position, config.zoom);



var gun = Gun("https://gun-tt.herokuapp.com/gun");

var places = gun.get(config.layers.places);
var events = gun.get(config.layers.events);
var homes = gun.get(config.layers.homes);
var offers = gun.get(config.layers.offers);
var needs = gun.get(config.layers.needs);


places.map().on(item => {
  if (item != null) utopiaMap.addItem(item)
});
events.map().on(item => {
  if (item != null) utopiaMap.addItem(item)
});
homes.map().on(item => {
  if (item != null) utopiaMap.addItem(item)
});
offers.map().on(item => {
  if (item != null) utopiaMap.addItem(item)
});
needs.map().on(item => {
  if (item != null) utopiaMap.addItem(item)
});




// Event Listeners
document.getElementById("newHomeButton").addEventListener("click", event => utopiaMap.selectPosition(new Home()));
document.getElementById("newEventButton").addEventListener("click", event => utopiaMap.selectPosition(new Event()));
document.getElementById("newPlaceButton").addEventListener("click", event => utopiaMap.selectPosition(new Place()));
document.getElementById("newOfferButton").addEventListener("click", event => utopiaMap.selectPosition(new Offer()));
document.getElementById("newNeedButton").addEventListener("click", event => utopiaMap.selectPosition(new Need()));

utopiaMap.on('popupopen', function(e) {
  if (e.popup.type === "edit") {
    document.getElementById(e.popup.item.type + "form").addEventListener("submit", x => {
      let form = new FormData(event.target);
      if (e.popup.item.type === "place") places.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Place(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"))))
      if (e.popup.item.type === "event") events.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Event(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"), form.get("start"), form.get("end"))))
      if (e.popup.item.type === "home") homes.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Home(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"), form.get("contact"))))
      if (e.popup.item.type === "offer") offers.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Offer(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"), form.get("contact"))))
      if (e.popup.item.type === "need") needs.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Need(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"), form.get("contact"))))
      event.preventDefault()
      utopiaMap.closePopup();
    });
    M.textareaAutoResize(document.getElementById("id_text"));
    M.updateTextFields();

  }
  if (e.popup.type === "view") {
    document.getElementById("deleteButton").addEventListener("click", event => {
      if (e.popup.item.type === "event") events.get(e.popup.item._['#']).put(null,function(ack){utopiaMap.removeItem(e.popup.item)})
      if (e.popup.item.type === "place") places.get(e.popup.item._['#']).put(null,function(ack){utopiaMap.removeItem(e.popup.item)})
      if (e.popup.item.type === "home") homes.get(e.popup.item._['#']).put(null,function(ack){utopiaMap.removeItem(e.popup.item)})
      if (e.popup.item.type === "offer") offers.get(e.popup.item._['#']).put(null,function(ack){utopiaMap.removeItem(e.popup.item)})
      if (e.popup.item.type === "need") needs.get(e.popup.item._['#']).put(null,function(ack){utopiaMap.removeItem(e.popup.item)})
    });
    document.getElementById("editButton").addEventListener("click", event => {
      utopiaMap.openFormPopup(e.popup.item)
    });
  }
})

document.addEventListener('DOMContentLoaded', (event) => {
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
  document.getElementById("app-name").innerHTML = config.name;
  document.title = config.name;
});

window.addEventListener('resize', (event) => setMapHeight())
window.addEventListener('touchmove', (event) => setMapHeight())

function setMapHeight() {
  var window_height = window.innerHeight;
  var header_height = document.getElementById("navbar").clientHeight;
  document.getElementById("leafletmap").style.height = window_height - header_height + "px";
}
