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


const utopiaMap = new UtopiaMap('leafletmap').setView(config.position, config.zoom);



var gun = Gun('https://gun-tt.herokuapp.com/gun');
var places = gun.get('542355555555555552353466546545555555555344444');
var events = gun.get('54235555555555345345r65464345345555555344444');

places.map().on(item => {
  if (item != null) utopiaMap.addPlace(item)
});
events.map().on(item => {
  if (item != null) utopiaMap.addEvent(item)
});




// Event Listeners

document.getElementById("newPlaceButton").addEventListener("click", event => utopiaMap.selectPosition(new Place()));
document.getElementById("newEventButton").addEventListener("click", event => utopiaMap.selectPosition(new Event()));

utopiaMap.on('popupopen', function(e) {
  if (e.popup.type === "editPlace" || e.popup.type === "editEvent") {
    document.getElementById(e.popup.item.type+"form").addEventListener("submit", x => {
      let form = new FormData(event.target);
      if (form.get("type") == "place") places.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Place(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"))))
      if (form.get("type") == "event") events.set(gun.get(form.get("lat") + "," + form.get("lng")).put(new Event(form.get("lat"), form.get("lng"), form.get("title"), form.get("text"), form.get("start"), form.get("end"))))
      event.preventDefault()
      utopiaMap.closePopup();
    });
    console.log(e.popup.item.type+"form");
  }
  if (e.popup.type === "viewEvent" || e.popup.type === "viewPlace") {
    document.getElementById("deleteButton").addEventListener("click", event => {
      if (e.popup.item.type === "event") events.get(e.popup.item._['#']).put(null)
      if (e.popup.item.type === "place") places.get(e.popup.item._['#']).put(null)
      utopiaMap.removeItem(e.popup.item);
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
