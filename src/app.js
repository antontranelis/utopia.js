import {
  UtopiaMap
} from "./Map/map.js"
// import {gunAdapter} from "./Database/gunAdapter.js"
import * as GUN from "../node_modules/gun/gun.js";
import {
  config
} from "../config/appConfig.js"
import {
  Place,
  Event,
} from "./models/models.js"
// import * as M from "../node_modules/@materializecss/materialize/dist/js/materialize.min.js"

// eslint-disable-next-line no-unused-vars
const L = window.L

const utopuiaMap = new UtopiaMap('leafletmap').setView(config.position, config.zoom);

var gun = Gun('http://localhost:8765/gun');
var places = gun.get('54235555555555555555555555555555555344444');
var events = gun.get('542355555555555555555554345345555555344444');

places.map().on(item => {
  if (item != null) utopuiaMap.addPlace(item)
  //  else utopuiaMap.removePlace(item)
});
events.map().on(item => {
  if (item != null) utopuiaMap.addEvent(item)
});

// Event Listeners

document.getElementById("newPlaceButton").addEventListener("click", event => utopuiaMap.selectPosition("place"));
document.getElementById("newEventButton").addEventListener("click", event => utopuiaMap.selectPosition("event"));

utopuiaMap.on('popupopen', function(e) {
  if (e.popup.type === "editPlace" || e.popup.type === "editEvent")
    document.getElementById("form").addEventListener("submit", event => {
      let form = new FormData(event.target);
      if (form.get("type") == "place") places.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Place(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"))))
      if (form.get("type") == "event") events.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Event(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"), form.get("start"), form.get("end"))))
      event.preventDefault()
      utopuiaMap.closePopup();
    });
  if (e.popup.type === "viewEvent") {
    document.getElementById("delete_event").addEventListener("click", event => {
      events.get(e.popup.id).put(null)
      utopuiaMap.removeEvent(e.popup.id);
    });
    document.getElementById("edit_event").addEventListener("click", event => {
      console.log(e);
      //events.get(e.popup.id).put(null)
    });
  }
  if (e.popup.type === "viewPlace")
    document.getElementById("delete_place").addEventListener("click", place => {
      places.get(e.popup.id).put(null);
      utopuiaMap.removePlace(e.popup.id);
    });
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
});

window.addEventListener('resize', (event) => setMapHeight())
window.addEventListener('touchmove', (event) => setMapHeight())

function setMapHeight() {
  var window_height = window.innerHeight;
  var header_height = document.getElementById("navbar").clientHeight;
  document.getElementById("leafletmap").style.height = window_height - header_height + "px";
}
